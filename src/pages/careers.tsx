import React, { FC, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";

interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary?: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

const CAREERS_DATA: JobPosting[] = [
  {
    id: "operations-manager",
    title: "Facility Operations Manager",
    department: "Operations",
    location: "Tyler, TX",
    type: "Full-time",
    description: "Lead our main facility operations, managing daily activities, supervising staff, and ensuring efficient metal processing operations.",
    requirements: ["5+ years of industrial operations management experience", "Knowledge of scrap metal processing preferred", "Leadership and team management skills", "OSHA compliance knowledge", "Problem-solving abilities"],
    benefits: ["Competitive compensation + performance bonuses", "Health, dental, and vision insurance", "401(k) with company matching", "Paid time off and holidays", "Professional development opportunities"],
  },
  {
    id: "equipment-operator",
    title: "Heavy Equipment Operator",
    department: "Operations",
    location: "Multiple Locations",
    type: "Full-time",
    description: "Operate heavy machinery including cranes, forklifts, and processing equipment to handle scrap metal materials safely and efficiently.",
    requirements: ["Valid heavy equipment operator certification", "2+ years of equipment operating experience", "OSHA 10 certification preferred", "Physical stamina and safety consciousness", "Ability to work in outdoor conditions"],
    benefits: ["Competitive hourly wage", "Overtime pay opportunities", "Health insurance after 90 days", "Paid training and certification", "Safety bonus program"],
  },
  {
    id: "scale-operator",
    title: "Scale House Operator",
    department: "Administration",
    location: "All Locations",
    type: "Full-time",
    description: "Manage customer transactions, weigh incoming materials, provide pricing information, and maintain accurate transaction records.",
    requirements: ["High school diploma or equivalent", "Strong computer and math skills", "Customer service experience", "Attention to detail", "Ability to work various shifts"],
    benefits: ["Competitive hourly wage", "Health insurance after 90 days", "Paid time off", "Employee discount program", "Stable work environment"],
  },
  {
    id: "maintenance-technician",
    title: "Maintenance Technician",
    department: "Maintenance",
    location: "Tyler, TX",
    type: "Full-time",
    description: "Maintain and repair heavy equipment, machinery, and facility infrastructure to ensure safe and efficient operations.",
    requirements: ["Mechanic/technical certification or 3+ years experience", "Diesel and heavy equipment repair experience", "Welding and fabrication skills", "Electrical and hydraulic system knowledge", "Valid driver's license"],
    benefits: ["Competitive hourly wage + overtime", "Tool allowance", "Health, dental, and vision insurance", "401(k) with company matching", "Continuing education support"],
  },
  {
    id: "sales-representative",
    title: "Sales Representative",
    department: "Sales",
    location: "Tyler, TX",
    type: "Full-time",
    description: "Develop and maintain relationships with industrial and commercial customers, promoting our services and closing sales.",
    requirements: ["2+ years of sales experience preferred", "Strong communication and relationship-building skills", "Knowledge of industrial operations beneficial", "Valid driver's license and willingness to travel", "Results-oriented mindset"],
    benefits: ["Base salary + uncapped commission", "Company vehicle provided", "Health, dental, and vision insurance", "401(k) with company matching", "Training and professional development"],
  },
  {
    id: "truck-driver",
    title: "Commercial Truck Driver",
    department: "Transportation",
    location: "Tyler, TX",
    type: "Full-time",
    description: "Safely operate commercial trucks to deliver containers and pick up materials from customer locations.",
    requirements: ["Valid Commercial Driver's License (CDL)", "Clean driving record", "2+ years commercial driving experience", "Ability to lift heavy objects", "Customer service orientation"],
    benefits: ["Competitive hourly wage", "Health insurance after 90 days", "Paid CDL training assistance", "Overtime opportunities", "Safety bonus program"],
  },
];

const CareersPage: FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);
  const [filterLocation, setFilterLocation] = useState<string>("all");
  const [filterDepartment, setFilterDepartment] = useState<string>("all");

  const departments = ["Operations", "Administration", "Maintenance", "Sales", "Transportation"];
  const locations = ["Tyler, TX", "Multiple Locations", "All Locations"];

  const filteredJobs = CAREERS_DATA.filter((job) => {
    const matchesLocation = filterLocation === "all" || job.location === filterLocation;
    const matchesDepartment = filterDepartment === "all" || job.department === filterDepartment;
    return matchesLocation && matchesDepartment;
  });

  return (
    <Layout>
      <Head>
        <title>Careers at K&L Recycling | Join Our Team</title>
        <meta name="description" content="Join the K&L Recycling family. We offer competitive pay, excellent benefits, and career opportunities in scrap metal recycling across Texas and Kansas." />
        <link rel="canonical" href="https://www.klrecycling.com/careers" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-royal-blue-900 to-electric-blue-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6">Join Our Team</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">Family-owned since 1956, we're looking for dedicated individuals ready to build their career in the metal recycling industry. Competitive pay, excellent benefits, and growth opportunities await.</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="#jobs" className="bg-white text-royal-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors text-lg">
                View Open Positions
              </a>
              <a href="mailto:careers@klrecycling.com" className="border-2 border-white text-white hover:bg-white hover:text-royal-blue-600 font-bold py-4 px-8 rounded-xl transition-colors text-lg">
                Email Your Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work at K&L */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Why Choose K&L?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">More than just a job - join a family business with a legacy of excellence and community commitment.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Leaders</h3>
              <p className="text-gray-600">68+ years of metal recycling expertise and innovation</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Pay</h3>
              <p className="text-gray-600">Above-market wages plus performance bonuses and benefits</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Family Culture</h3>
              <p className="text-gray-600">Local family business with genuine community values</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Growth Opportunities</h3>
              <p className="text-gray-600">Career advancement and professional development programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">What Our Team Says</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">TJ</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Tyler Johnson</div>
                  <div className="text-sm text-gray-500">Equipment Operator, 8 years</div>
                </div>
              </div>
              <p className="text-gray-700 italic">"K&L is more than a workplace - it's a family. The stability and respect you feel here can't be found elsewhere."</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">MR</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Maria Rodriguez</div>
                  <div className="text-sm text-gray-500">Scale Operator, 5 years</div>
                </div>
              </div>
              <p className="text-gray-700 italic">"Great benefits, fair pay, and a supportive team that makes coming to work enjoyable every day."</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">BS</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Brandon Smith</div>
                  <div className="text-sm text-gray-500">Maintenance Tech, 12 years</div>
                </div>
              </div>
              <p className="text-gray-700 italic">"I've grown from apprentice to lead technician. K&L invests in its people and their professional development."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section id="jobs" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Current Openings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Browse our current career opportunities and find your place in the K&L family</p>
          </div>

          {/* Filters */}
          <div className="bg-gray-50 p-6 rounded-2xl mb-12">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <select value={filterLocation} onChange={(e) => setFilterLocation(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option value="all">All Locations</option>
                  <option value="Tyler, TX">Tyler, TX</option>
                  <option value="Multiple Locations">Multiple Locations</option>
                  <option value="All Locations">All Locations</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                <select value={filterDepartment} onChange={(e) => setFilterDepartment(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option value="all">All Departments</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-end">
                <div className="text-sm text-gray-500">
                  {filteredJobs.length} job{filteredJobs.length !== 1 ? "s" : ""} available
                </div>
              </div>
            </div>
          </div>

          {/* Job Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>📍 {job.location}</span>
                      <span>🏢 {job.department}</span>
                      <span>⏰ {job.type}</span>
                    </div>
                  </div>
                  {job.salary && <div className="text-lg font-bold text-green-600">{job.salary}</div>}
                </div>

                <p className="text-gray-600 mb-6">{job.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Requirements:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {job.requirements.slice(0, 3).map((req, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">Includes competitive benefits package</div>
                  <button onClick={() => setSelectedJob(job)} className="bg-royal-blue-600 hover:bg-royal-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No openings match your criteria</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters or check back later for new opportunities.</p>
              <button
                onClick={() => {
                  setFilterLocation("all");
                  setFilterDepartment("all");
                }}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Show All Jobs
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{selectedJob.title}</h2>
                <div className="flex items-center space-x-4 mt-2 text-gray-600">
                  <span>📍 {selectedJob.location}</span>
                  <span>🏢 {selectedJob.department}</span>
                  <span>⏰ {selectedJob.type}</span>
                  {selectedJob.salary && <span className="font-bold text-green-600">{selectedJob.salary}</span>}
                </div>
              </div>
              <button onClick={() => setSelectedJob(null)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-96">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Job Description</h3>
                  <p className="text-gray-600 mb-6">{selectedJob.description}</p>

                  <h3 className="text-lg font-bold text-gray-900 mb-3">Requirements</h3>
                  <ul className="space-y-2 text-gray-600">
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Benefits & Perks</h3>
                  <ul className="space-y-2 text-green-700 mb-6">
                    {selectedJob.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">About Us</h4>
                    <p className="text-blue-800 text-sm mb-3">K&L Recycling has been East Texas' trusted scrap metal partner since 1956. We treat our employees like family, offering stable careers with growth opportunities in a rewarding industry.</p>
                    <div className="text-xs text-blue-600">Equal Opportunity Employer • Drug-free Workplace • ISN Certified</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
              <div className="flex justify-end space-x-4">
                <a href={`mailto:careers@klrecycling.com?subject=Application for ${selectedJob.title}&body=I am interested in applying for the ${selectedJob.title} position.`} className="bg-royal-blue-600 hover:bg-royal-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Apply by Email
                </a>
                <a href="tel:+18005338081" className="border border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors">
                  Call to Apply
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Apply Section */}
      <section className="py-20 bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Whether you're a seasoned professional or just starting your career, we offer opportunities for growth and advancement in a stable, family-oriented business.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="mailto:careers@klrecycling.com" className="bg-white text-royal-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors text-lg">
              📧 Email Your Resume
            </a>
            <a href="tel:+18005338081" className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-royal-blue-600 transition-colors text-lg">
              📞 Call (800) 533-8081
            </a>
          </div>
          <div className="mt-6 text-blue-100">
            <p className="text-sm">K&L Recycling is an equal opportunity employer. Applications accepted year-round.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CareersPage;
