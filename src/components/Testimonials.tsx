import React, { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedCounter from "./AnimatedCounter";

interface ClientTestimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  company?: string;
  location?: string;
  serviceUsed: string;
  verified: boolean;
  date: string;
  rating: number;
  photo?: string;
  projectPhoto?: string;
}

const testimonials: ClientTestimonial[] = [
  {
    id: "john-d-manufacturing",
    quote: "K&L's container service is night and day compared to our last vendor. They are always on time, which has completely eliminated our production bottlenecks. The team treats us like family, not just another customer.",
    name: "John D.",
    title: "Operations Manager",
    company: "East Texas Manufacturing",
    location: "Tyler, TX",
    serviceUsed: "Roll-Off Containers",
    verified: true,
    date: "March 2024",
    rating: 5,
    photo: "/assets/client-photos/john-d.jpg",
  },
  {
    id: "sarah-p-construction",
    quote: "Their team is professional, their pricing is transparent, and they are a true partner in our demolition projects. The compliance paperwork was handled perfectly, and we never had a safety concern. Highly recommend.",
    name: "Sarah P.",
    title: "Project Lead",
    company: "Fritcher Construction",
    location: "Palestine, TX",
    serviceUsed: "Industrial Demolition",
    verified: true,
    date: "February 2024",
    rating: 5,
    projectPhoto: "/assets/services/Construction.jpg",
  },
  {
    id: "mike-r-fabricator",
    quote: "Working with K&L has significantly increased our scrap revenue. Their guidance on sorting materials has been invaluable for our bottom line. We went from selling mixed scrap to getting premium prices for properly sorted materials.",
    name: "Mike R.",
    title: "Facility Director",
    company: "Texas Industrial Fabricators",
    location: "Mineola, TX",
    serviceUsed: "Material Processing & Sorting",
    verified: true,
    date: "January 2024",
    rating: 5,
    photo: "/assets/client-photos/mike-r.jpg",
  },
  {
    id: "local-farm-jim",
    quote: "We've been bringing our farm equipment and scrap metal to K&L for over 20 years. Fair prices, honest weights, and they remember your name. That's what family-owned business means.",
    name: "Jim K.",
    title: "Owner",
    company: "K Country Farms",
    location: "Anderson County, TX",
    serviceUsed: "Farm Equipment Recycling",
    verified: true,
    date: "November 2023",
    rating: 5,
  },
  {
    id: "lisa-automotive",
    quote: "The mobile crushing service was exactly what we needed for our dealership's trade-ins. They came to our lot, processed everything safely, and we got paid immediately. Professional, efficient, and fair.",
    name: "Lisa M.",
    title: "General Manager",
    company: "Lone Star Auto Sales",
    location: "Tyler, TX",
    serviceUsed: "Mobile Car Crushing",
    verified: true,
    date: "October 2023",
    rating: 5,
    projectPhoto: "/assets/layout/hero-background.jpg",
  },
  {
    id: "county-facility",
    quote: "K&L handled our municipal scrap collection flawlessly. Their DISA certification gave us the confidence we needed for this government contract. Excellent environmental compliance throughout.",
    name: "Robert T.",
    title: "Public Works Director",
    company: "Nacogdoches County",
    location: "Nacogdoches, TX",
    serviceUsed: "Government Contract",
    verified: true,
    date: "September 2023",
    rating: 5,
  },
];

const Testimonials: FC = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-royal-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-electric-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 gradient-text" data-aos="fade-up">
            What Our Partners Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Real customers. Real experiences. Real results from East Texas businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              {/* Service Badge */}
              <div className="absolute top-4 left-4 bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">{testimonial.serviceUsed}</div>

              {/* Verification Badge */}
              {testimonial.verified && (
                <div className="absolute top-4 right-4 flex items-center bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Verified {testimonial.date}
                </div>
              )}

              {/* Project Photo (if available) */}
              {testimonial.projectPhoto && (
                <div className="mb-4 rounded-lg overflow-hidden">
                  <Image src={testimonial.projectPhoto} alt={`${testimonial.company} project`} width={400} height={200} className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
              )}

              {/* Client Photo or Quote Icon */}
              <div className="mb-6 relative flex justify-center">
                {testimonial.photo ? (
                  <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300">
                    <Image src={testimonial.photo} alt={testimonial.name} width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-16 h-16 bg-gradient-to-r from-royal-blue-500 to-electric-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                )}
                {/* Floating particles */}
                <div className="absolute -top-2 -right-2 w-2 h-2 bg-royal-blue-400 rounded-full animate-float opacity-60"></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-electric-blue-400 rounded-full animate-float animation-delay-2000 opacity-40"></div>
              </div>

              {/* Rating stars */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ⭐
                  </span>
                ))}
              </div>

              <p className="text-base text-gray-700 mb-6 leading-relaxed line-clamp-4">"{testimonial.quote}"</p>

              {/* Author info */}
              <div className="border-t border-gray-100 pt-6">
                <cite className="block not-italic font-bold text-gray-900 text-lg">{testimonial.name}</cite>
                <div className="text-gray-600 text-sm mt-1">
                  <p>{testimonial.title}</p>
                  {testimonial.company && <p className="font-medium text-blue-600">{testimonial.company}</p>}
                  {testimonial.location && <p className="text-gray-500">{testimonial.location}</p>}
                </div>

                {/* Service specific badge */}
                <div className="mt-3 flex flex-wrap gap-1">
                  <span className="inline-block bg-gradient-to-r from-royal-blue-50 to-electric-blue-50 text-royal-blue-700 text-xs font-semibold px-3 py-1 rounded-full">{testimonial.verified ? "Verified Customer" : "Customer"}</span>
                  {testimonial.serviceUsed && <span className="inline-block bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">{testimonial.serviceUsed}</span>}
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-royal-blue-500/5 to-electric-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators with animated counters */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-black text-gray-900 mb-6">Trusted by East Texas Since 1956</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl mb-2">👥</div>
              <AnimatedCounter value={500} suffix="+" title="Verified Customers" className="mb-2" duration={2500} />
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⭐</div>
              <AnimatedCounter value={4} suffix=".9/5" prefix="" title="Average Rating" className="mb-2" duration={2000} />
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🕒</div>
              <AnimatedCounter value={68} suffix="+" title="Years Experience" className="mb-2" duration={2800} />
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <AnimatedCounter value={100} suffix="%" title="Satisfaction Rate" className="mb-2" duration={2200} />
            </div>
          </div>
          <div className="text-center border-t border-gray-100 pt-6">
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">All testimonials are from verified customers with documented service history. Dates show when services were provided. These numbers represent real results that build trust through transparency.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Testimonials);
