import { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker, Autocomplete } from "@react-google-maps/api";

interface GoogleMapsPlacePickerProps {
  onPlaceSelect: (place: { address: string; lat: number; lng: number }) => void;
  initialValue?: {
    address: string;
    lat?: number;
    lng?: number;
  };
}

const libraries: "places"[] = ["places"];

export default function GoogleMapsPlacePicker({ onPlaceSelect, initialValue }: GoogleMapsPlacePickerProps) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries,
  });

  const [selectedPlace, setSelectedPlace] = useState<{
    address: string;
    lat: number;
    lng: number;
  } | null>(
    initialValue
      ? {
          address: initialValue.address,
          lat: initialValue.lat || 32.7767,
          lng: initialValue.lng || -96.797,
        }
      : null,
  );

  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
  const [searchBox, setSearchBox] = useState<HTMLInputElement | null>(null);

  const mapContainerStyle = {
    width: "100%",
    height: "300px",
  };

  const defaultCenter = {
    lat: 32.7767, // Dallas, TX as default
    lng: -96.797,
  };

  useEffect(() => {
    if (selectedPlace) {
      onPlaceSelect(selectedPlace);
    }
  }, [selectedPlace, onPlaceSelect]);

  const onLoad = (autocompleteInstance: google.maps.places.Autocomplete) => {
    setAutocomplete(autocompleteInstance);
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();

      if (place.geometry && place.geometry.location) {
        const address = place.formatted_address || place.name || "";
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();

        setSelectedPlace({
          address,
          lat,
          lng,
        });
      }
    }
  };

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();

      // Reverse geocoding to get address
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ location: { lat, lng } }, (results, status) => {
        if (status === "OK" && results && results[0]) {
          setSelectedPlace({
            address: results[0].formatted_address,
            lat,
            lng,
          });
        } else {
          // Fallback if geocoding fails
          setSelectedPlace({
            address: `${lat.toFixed(6)}, ${lng.toFixed(6)}`,
            lat,
            lng,
          });
        }
      });
    }
  };

  if (loadError) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-800">Error loading Google Maps. Please check your API key.</p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <p className="text-gray-600">Loading map...</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Search Box */}
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 mb-2">Search for location or click on map</label>
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged} restrictions={{ country: "us" }}>
          <input ref={setSearchBox} type="text" placeholder="Enter address, city, or ZIP code" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" defaultValue={selectedPlace?.address || ""} />
        </Autocomplete>
      </div>

      {/* Map */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={selectedPlace || defaultCenter}
          zoom={selectedPlace ? 15 : 8}
          onClick={handleMapClick}
          options={{
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: true,
            zoomControl: true,
          }}
        >
          {selectedPlace && <Marker position={{ lat: selectedPlace.lat, lng: selectedPlace.lng }} title="Selected Location" />}
        </GoogleMap>
      </div>

      {/* Selected Location Display */}
      {selectedPlace && (
        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="text-sm font-medium text-blue-900 mb-1">Selected Location</h4>
          <p className="text-sm text-blue-800">{selectedPlace.address}</p>
          <p className="text-xs text-blue-600 mt-1">
            Coordinates: {selectedPlace.lat.toFixed(6)}, {selectedPlace.lng.toFixed(6)}
          </p>
        </div>
      )}

      {/* Usage Instructions */}
      <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
        <p className="font-medium mb-1">How to use:</p>
        <ul className="space-y-1">
          <li>• Type an address in the search box and select from results</li>
          <li>• Or click directly on the map to set a location</li>
          <li>• The system will automatically detect the address</li>
        </ul>
      </div>
    </div>
  );
}
