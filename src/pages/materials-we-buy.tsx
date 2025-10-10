import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

const ferrousMetals = [
  {
    name: "Sheet Iron & Tin",
    description: "Includes appliances, miscellaneous steel items, and light-gauge metal.",
    imageUrl: "/assets/ferrous/tin.jpg",
  },
  {
    name: "Unprepared Steel",
    description: "Steel over 1/4 inch thick and longer than 5 feet.",
    imageUrl: "/assets/ferrous/long_iron.jpg",
  },
  {
    name: "Prepared Steel",
    description: "Steel over 1/4 inch thick and cut to 5 feet or less.",
    imageUrl: "/assets/ferrous/steel_cable.jpg",
  },
  {
    name: "Motor Blocks",
    description: "Cast iron engine blocks, with or without steel components.",
    imageUrl: "/assets/non-ferrous/electric_motors.jpg",
  },
  {
    name: "Cast Iron",
    description: "Clean cast iron, including pipes, machinery parts, and radiators.",
    imageUrl: "/assets/ferrous/dealer_clips.jpg",
  },
  {
    name: "Car Bodies",
    description: "Complete or stripped automobile bodies. Please contact us for preparation requirements.",
    imageUrl: "/assets/ferrous/vehicles_accept_large.jpg",
  },
];

const nonFerrousMetals = [
  {
    name: "Copper (Bare Bright, #1, #2)",
    description: "Clean, unalloyed, and uncoated copper wire or tubing.",
    imageUrl: "/assets/non-ferrous/copper_1.jpg",
  },
  {
    name: "Insulated Copper Wire",
    description: "Various grades of copper wire with insulation intact.",
    imageUrl: "/assets/non-ferrous/icw_1.jpg",
  },
  {
    name: "Aluminum (Sheet, Cast, Cans)",
    description: "Includes siding, gutters, window frames, and beverage cans.",
    imageUrl: "/assets/non-ferrous/aluminum_cast.jpg",
  },
  {
    name: "Aluminum Wheels",
    description: "Clean aluminum car and truck wheels.",
    imageUrl: "/assets/non-ferrous/aluminum_whl.jpg",
  },
  {
    name: "Brass (Red & Yellow)",
    description: "Includes plumbing fixtures, fittings, and decorative items.",
    imageUrl: "/assets/non-ferrous/brass.jpg",
  },
  {
    name: "Stainless Steel",
    description: "Clean, non-magnetic stainless steel sinks, appliances, and industrial parts.",
    imageUrl: "/assets/non-ferrous/stainlesssteel.jpg",
  },
  {
    name: "Lead",
    description: "Includes wheel weights, pipes, and sheeting.",
    imageUrl: "/assets/non-ferrous/cu_br_rad.jpg",
  },
  {
    name: "Radiators",
    description: "Aluminum, copper/brass, and aluminum-copper car radiators.",
    imageUrl: "/assets/non-ferrous/brass1.jpg",
  },
  {
    name: "Electric Motors",
    description: "AC/DC electric motors of various sizes.",
    imageUrl: "/assets/non-ferrous/electric_motors.jpg",
  },
  {
    name: "Sealed Units",
    description: "Compressors from refrigerators and air conditioning units.",
    imageUrl: "/assets/non-ferrous/compressors.jpg",
  },
  {
    name: "Starters & Alternators",
    description: "From vehicles and heavy equipment.",
    imageUrl: "/assets/non-ferrous/icw_1.jpg",
  },
];

const MaterialsPage = () => {
  return (
    <>
      <Head>
        <title>Materials We Buy | K&L Recycling</title>
        <meta name="description" content="A comprehensive list of ferrous and non-ferrous metals we purchase, including steel, iron, copper, aluminum, and more. Turn your scrap into cash today." />
      </Head>
      <div className="bg-slate-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-heading-5xl font-bold tracking-tight text-slate-gray-900">Materials We Buy</h1>
            <p className="mt-4 max-w-3xl mx-auto text-body-lg leading-8 text-slate-gray-600">We purchase a wide variety of scrap metals at competitive prices. Below is a general list of materials we accept. If you have something not on this list, please contact us.</p>
          </div>

          {/* Ferrous Metals */}
          <div className="mt-20">
            <h2 className="text-heading-4xl font-bold text-royal-blue-700 border-b-4 border-royal-blue-200 pb-4 mb-8">Ferrous Metals (Magnetic)</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {ferrousMetals.map((metal, index) => (
                <motion.div key={metal.name} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 group cursor-pointer" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <div className="relative h-48 overflow-hidden">
                    <Image src={metal.imageUrl} alt={metal.name} fill className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute top-4 right-4 bg-green-500 group-hover:bg-royal-blue-700 text-white px-3 py-1 rounded-full text-sm font-bold transition-colors duration-300">Contact for Price</div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">{metal.name}</h3>
                    <p className="mt-2 text-base text-gray-600 text-sm mb-4 line-clamp-3">{metal.description}</p>

                    <div className="text-sm text-royal-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4 font-medium">Click to learn more →</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Non-Ferrous Metals */}
          <div className="mt-20">
            <h2 className="text-heading-4xl font-bold text-royal-blue-700 border-b-4 border-royal-blue-200 pb-4 mb-8">Non-Ferrous Metals (Non-Magnetic)</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {nonFerrousMetals.map((metal, index) => (
                <motion.div key={metal.name} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 group cursor-pointer" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <div className="relative h-48 overflow-hidden">
                    <Image src={metal.imageUrl} alt={metal.name} fill className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute top-4 right-4 bg-green-500 group-hover:bg-royal-blue-700 text-white px-3 py-1 rounded-full text-sm font-bold transition-colors duration-300">{metal.name.includes("Copper") ? "$3.50-$4.50/lb" : metal.name.includes("Aluminum") ? "$0.50-$1.20/lb" : metal.name.includes("Brass") ? "$1.80-$2.50/lb" : metal.name.includes("Stainless") ? "$0.25-$0.45/lb" : "Contact for Price"}</div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">{metal.name}</h3>
                    <p className="mt-2 text-base text-gray-600 text-sm mb-4 line-clamp-3">{metal.description}</p>

                    <div className="text-sm text-royal-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4 font-medium">Click to learn more →</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MaterialsPage;
