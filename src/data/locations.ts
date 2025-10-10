// src/data/locations.ts

// Define the shape of a single location object
export type LocationData = {
  city: string;
  summary: string;
  benefits: string;
  contact: {
    address: string;
    phone: string;
    phoneHref: string;
  };
  hours: string;
  materials: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
};

function formatPhoneHref(phone: string): string {
  return `tel:+1${phone.replace(/\D/g, "")}`;
}

export const locationsData = {
  "kl-tyler": {
    city: "K&L Recycling (Tyler)",
    summary: "As the Rose Capital of America, Tyler is a growing economic hub in East Texas. Our main facility here serves a diverse mix of industrial, commercial, and residential clients.",
    benefits: "Recycling in Tyler helps preserve the region's natural beauty by reducing landfill waste. It provides a steady stream of raw materials for local industries, supporting a sustainable, circular economy.",
    contact: {
      address: "4134 Chandler Hwy, Tyler, TX 75702",
      phone: "(800) 533-8081",
      phoneHref: formatPhoneHref("(800) 533-8081"),
    },
    hours: "Mon-Fri: 8AM-5PM, Sat: 8AM-3PM",
    materials: ["Public Drop-off", "Industrial Pickup"],
    coordinates: {
      lat: 32.3512,
      lng: -95.3011,
    },
  },
  "houston-county": {
    city: "Houston County Scrap",
    summary: "Located in the heart of the Davy Crockett National Forest area, Crockett is a community rich in Texas history. Our Houston County facility is a key resource for local agricultural and small business recycling.",
    benefits: "Supporting recycling in Crockett helps protect the local environment and conserves natural resources. It provides economic value by turning waste materials into reusable assets for the community.",
    contact: {
      address: "403 South 2nd Street, Crockett, TX 75835",
      phone: "(800) 533-8081",
      phoneHref: formatPhoneHref("(800) 533-8081"),
    },
    hours: "Mon-Fri: 8AM-5PM, Sat: 8AM-3PM",
    materials: ["Public Drop-off", "Roll-off Containers"],
    coordinates: {
      lat: 31.3189,
      lng: -95.4561,
    },
  },
  mineola: {
    city: "Mineola Iron & Metal",
    summary: "Mineola, a historic railroad town, is known for its vibrant downtown and strong community spirit. Our facility here is equipped to handle scrap from local businesses and residents alike.",
    benefits: "Recycling metal in Mineola reduces the need to mine for new ore, saving significant energy and water. This contributes to a cleaner environment and supports the town's commitment to preservation.",
    contact: {
      address: "2590 Highway 80 West, Mineola, TX 75773",
      phone: "(800) 533-8081",
      phoneHref: formatPhoneHref("(800) 533-8081"),
    },
    hours: "Mon-Fri: 8AM-5PM, Sat: 8AM-3PM",
    materials: ["Public Drop-off", "Industrial Pickup"],
    coordinates: {
      lat: 32.6729,
      lng: -95.4886,
    },
  },
  "anderson-county": {
    city: "Anderson County Scrap",
    summary: "Palestine is a city with deep roots in railroad history and a diverse industrial base. Our Anderson County facility provides essential recycling services that support local industry and reduce environmental impact.",
    benefits: "By recycling scrap metal in Palestine, we help conserve energy, reduce greenhouse gas emissions, and provide valuable resources for manufacturing, contributing to a stronger local economy.",
    contact: {
      address: "4340 State Highway 19, Palestine, TX 75801",
      phone: "(800) 533-8081",
      phoneHref: formatPhoneHref("(800) 533-8081"),
    },
    hours: "Mon-Fri: 8AM-5PM, Sat: 8AM-3PM",
    materials: ["Public Drop-off", "Demolition Services"],
    coordinates: {
      lat: 31.7218,
      lng: -95.6311,
    },
  },
  nacogdoches: {
    city: "Nacogdoches Recycling Center",
    summary: "As the oldest town in Texas and home to Stephen F. Austin State University, Nacogdoches has a unique blend of history and forward-thinking. Our center serves students, residents, and businesses.",
    benefits: "Recycling in Nacogdoches is a practical way to promote sustainability. It minimizes landfill use, conserves natural resources, and supports the community’s commitment to preserving its historic and natural landscapes.",
    contact: {
      address: "2508 Woden Road, Nacogdoches, TX 75961",
      phone: "(800) 533-8081",
      phoneHref: formatPhoneHref("(800) 533-8081"),
    },
    hours: "Mon-Fri: 8AM-5PM, Sat: 8AM-3PM",
    materials: ["Public Drop-off", "Roll-off Containers"],
    coordinates: {
      lat: 31.6037,
      lng: -94.6555,
    },
  },
  premier: {
    city: "Premier Recyclers",
    summary: "Nestled in the piney woods of East Texas near the Angelina National Forest, Jasper is a hub for the timber and manufacturing industries. Premier Recyclers is proud to serve this hardworking community.",
    benefits: "Recycling scrap metal in Jasper provides a crucial service for local industries, turning waste into revenue. This process supports jobs and reduces the environmental footprint of manufacturing.",
    contact: {
      address: "1953 Highway 190 West, Jasper, TX 75951",
      phone: "(800) 533-8081",
      phoneHref: formatPhoneHref("(800) 533-8081"),
    },
    hours: "Mon-Fri: 8AM-5PM, Sat: 8AM-3PM",
    materials: ["Public Drop-off", "Car Crushing"],
    coordinates: {
      lat: 30.9202,
      lng: -93.9974,
    },
  },
  jacksonville: {
    city: "Jacksonville Iron & Metal",
    summary: "Known as the 'Tomato Capital of the World,' Jacksonville has a rich agricultural and industrial heritage. Our facility provides a convenient and efficient way for the community to recycle scrap metal.",
    benefits: "By recycling in Jacksonville, we help keep the local environment clean and provide a secondary source of materials for industry. This reduces waste and supports the region's economic health.",
    contact: {
      address: "599 CR 1520, Jacksonville, TX 75766",
      phone: "(800) 533-8081",
      phoneHref: formatPhoneHref("(800) 533-8081"),
    },
    hours: "Mon-Fri: 8AM-5PM, Sat: 8AM-3PM",
    materials: ["Public Drop-off", "Industrial Pickup"],
    coordinates: {
      lat: 31.9635,
      lng: -95.2708,
    },
  },
  acme: {
    city: "Acme Scrap",
    summary: "Acme Scrap in Great Bend, Kansas serves the agricultural heartland with comprehensive scrap metal recycling services. Located centrally, we provide convenient access for farmers, ranchers, and local businesses throughout Barton County.",
    benefits: "By recycling scrap metal in Great Bend, we support the local agricultural economy by providing additional income streams for farmers and ranchers. This reduces waste from farming operations, conserves natural resources, and contributes to a cleaner environment for our community.",
    contact: {
      address: "700 Frey Street, Great Bend, KS 67530",
      phone: "(800) 533-8081",
      phoneHref: formatPhoneHref("(800) 533-8081"),
    },
    hours: "Mon-Fri: 8AM-5PM, Sat: 8AM-3PM",
    materials: ["Public Drop-off", "Car Crushing"],
    coordinates: {
      lat: 38.3667,
      lng: -98.7667,
    },
  },
  madfos: {
    city: "Madfos Metals",
    summary: "Serving the northern Tyler area and surrounding communities, Madfos Metals provides specialized recycling services. We focus on providing fast, friendly service for all our customers.",
    benefits: "Our Madfos facility contributes to a cleaner Tyler by offering an accessible location for recycling. This helps reduce landfill burden and provides a valuable resource stream for local manufacturing.",
    contact: {
      address: "10757 Highway 271, Tyler, TX 75708",
      phone: "(800) 533-8081",
      phoneHref: formatPhoneHref("(800) 533-8081"),
    },
    hours: "Mon-Fri: 8AM-5PM, Sat: 8AM-3PM",
    materials: ["Public Drop-off", "Industrial Pickup"],
    coordinates: {
      lat: 32.4623,
      lng: -95.2169,
    },
  },
};
