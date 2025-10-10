import React, { useState, useEffect, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import LoadingSpinner from "./LoadingSpinner";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 32.3512, // Tyler, TX
  lng: -95.3011,
};

type Location = {
  city: string;
  slug: string;
  address: string;
  lat: number;
  lng: number;
  phone?: string;
  hours?: string;
};

interface MapComponentProps {
  locations?: Location[];
  selectedIndex?: number | null;
}

// This child component will only be rendered when the API key is ready.
const MapView = ({ apiKey, locations, selectedIndex }: { apiKey: string; locations?: Location[]; selectedIndex?: number | null }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
    preventGoogleFontsLoading: true,
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [currentCenter, setCurrentCenter] = useState(center);

  const onLoad = useCallback(
    (map: google.maps.Map) => {
      console.log("Map loaded");
      const bounds = new google.maps.LatLngBounds();
      locations?.forEach((loc) => {
        bounds.extend({ lat: loc.lat, lng: loc.lng });
      });
      map.fitBounds(bounds);
      setMap(map);
    },
    [locations],
  );

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  // Update center when selectedIndex changes
  useEffect(() => {
    if (selectedIndex !== null && selectedIndex !== undefined && locations && selectedIndex < locations.length) {
      const selectedLocation = locations[selectedIndex];
      setCurrentCenter({
        lat: selectedLocation.lat,
        lng: selectedLocation.lng,
      });
      if (map) {
        map.setCenter({ lat: selectedLocation.lat, lng: selectedLocation.lng });
        map.setZoom(14);
      }
    }
  }, [selectedIndex, locations, map]);

  // Reset to show all locations when no selection
  useEffect(() => {
    if (selectedIndex === null && map && locations) {
      const bounds = new google.maps.LatLngBounds();
      locations.forEach((loc) => {
        bounds.extend({ lat: loc.lat, lng: loc.lng });
      });
      map.fitBounds(bounds);
    }
  }, [selectedIndex, map, locations]);

  if (!isLoaded) return <LoadingSpinner text="Loading Map..." />;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={currentCenter}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        zoomControl: true,
        streetViewControl: false,
        mapTypeControl: true,
        fullscreenControl: true,
      }}
    >
      {locations?.map((location, index) => (
        <Marker
          key={location.slug}
          position={{ lat: location.lat, lng: location.lng }}
          title={`${location.city}\n${location.address}`}
          icon={
            selectedIndex === index
              ? {
                  url: "data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FF6B35'><path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'/></svg>",
                  scaledSize: new google.maps.Size(32, 32),
                }
              : undefined
          }
        />
      ))}
    </GoogleMap>
  );
};

// The main component now handles fetching the key and conditionally rendering the map.
function MapComponent({ locations, selectedIndex }: MapComponentProps) {
  const [apiKey, setApiKey] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/maps-key")
      .then((res) => res.json())
      .then((data) => {
        if (data.key) {
          setApiKey(data.key);
        }
      })
      .catch(console.error);
  }, []);

  if (!apiKey) {
    return <LoadingSpinner text="Initializing Map..." />;
  }

  return <MapView apiKey={apiKey} locations={locations} selectedIndex={selectedIndex} />;
}

export default React.memo(MapComponent);
