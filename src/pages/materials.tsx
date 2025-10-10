import React, { FC, useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout"; // Assuming you have a Layout component
import Image from "next/image";

// --- Data for Materials ---
const materialsData = [
  {
    name: "Copper",
    category: "non-ferrous",
    image: "/assets/non-ferrous/copper_1.jpg",
    description: "Includes pipes, tubing, clean copper wire, and insulated wire. Clean and sorted for best prices.",
  },
  {
    name: "Aluminum",
    category: "non-ferrous",
    image: "/assets/non-ferrous/aluminum_cast.jpg",
    description: "Cans, siding, extrusions, wheels, and cast aluminum. Remove any attachments for higher value.",
  },
  {
    name: "Brass",
    category: "non-ferrous",
    image: "/assets/non-ferrous/brass.jpg",
    description: "Fittings, valves, decorative items, and yellow/red brass. Separate types for optimal pricing.",
  },
  {
    name: "Stainless Steel",
    category: "non-ferrous",
    image: "/assets/non-ferrous/stainlesssteel.jpg",
    description: "Sinks, appliances, industrial equipment, and 304/316 grades. Clean from contaminants.",
  },
  {
    name: "Steel & Iron",
    category: "ferrous",
    image: "/assets/ferrous/long_iron.jpg",
    description: "Structural steel, cast iron, light sheet, and prepared/unprepared scrap. Bulk volumes accepted.",
  },
  {
    name: "Vehicles",
    category: "ferrous",
    image: "/assets/ferrous/vehicles_accepted.jpg",
    description: "Cars, trucks, and farm equipment. Fluids must be drained; titles required for vehicles.",
  },
];

// --- Prohibited Items Data (Inspired by All Metal Recycling) ---
const prohibitedItems = [
  {
    name: "Hazardous Waste",
    description: "Any materials containing hazardous substances like asbestos, PCBs, or chemicals.",
  },
  {
    name: "Sealed Containers",
    description: "Closed tanks, cylinders, or drums that may contain gases or liquids.",
  },
  {
    name: "Explosives or Ammunition",
    description: "Firearms, bullets, or any explosive materials.",
  },
  {
    name: "Radioactive Materials",
    description: "Items with radioactive contamination, including smoke detectors.",
  },
  {
    name: "Tires or Rubber",
    description: "Whole tires or large rubber items not attached to metal.",
  },
  {
    name: "Glass or Wood",
    description: "Non-metal items like glass, wood, or plastics unless minimal and attached.",
  },
  {
    name: "Medical Waste",
    description: "Syringes, biohazard materials, or hospital equipment.",
  },
  {
    name: "Municipal Waste",
    description: "Household trash, food waste, or non-recyclable debris.",
  },
];

const MaterialsPage: FC = () => {
  const [filter, setFilter] = useState("all");

  const filteredMaterials = materialsData.filter((material) => filter === "all" || material.category === filter);

  return (
    <Layout>
      <Head>
        <title>Materials We Buy | K&L Recycling</title>
        <meta name="description" content="We buy a wide range of ferrous and non-ferrous metals at competitive prices. Check what we accept and prohibit." />
      </Head>

      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center" data-aos="fade-down">
          <h1 className="text-4xl md:text-6xl font-black">Materials We Buy</h1>
          <p className="text-xl md:text-2xl mt-4 max-w-3xl mx-auto">Competitive pricing for all ferrous and non-ferrous metals. Market-based rates; contact for current quotes.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Filter Buttons */}
          <div className="flex justify-center space-x-4 mb-12" data-aos="fade-up">
            <button onClick={() => setFilter("all")} className={`font-semibold px-6 py-2 rounded-full transition ${filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}>
              All Materials
            </button>
            <button onClick={() => setFilter("non-ferrous")} className={`font-semibold px-6 py-2 rounded-full transition ${filter === "non-ferrous" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}>
              Non-Ferrous
            </button>
            <button onClick={() => setFilter("ferrous")} className={`font-semibold px-6 py-2 rounded-full transition ${filter === "ferrous" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}>
              Ferrous
            </button>
          </div>

          {/* Materials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMaterials.map((material, index) => (
              <div key={material.name} className="material-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <Image src={material.image} alt={material.name} fill className="w-full h-full object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900">{material.name}</h3>
                  <p className="text-gray-600 mt-2">{material.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New: Prohibited Items Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-12" data-aos="fade-up">
            What We Don&apos;t Buy / Prohibited Items
          </h2>
          <p className="text-center text-lg text-gray-700 mb-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            For safety and environmental reasons, we cannot accept the following items.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {prohibitedItems.map((item, index) => (
              <div key={item.name} className="warning-card p-6" data-aos="fade-up" data-aos-delay={index * 50}>
                <h3 className="text-xl font-bold text-red-600">{item.name}</h3>
                <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MaterialsPage;
