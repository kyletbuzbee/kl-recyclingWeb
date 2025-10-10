import React, { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import { getIndustryPage, industryPages } from "@/data/industries";

interface IndustryPageProps {
  industry: any;
}

const IndustryPage: FC<IndustryPageProps> = ({ industry }) => {
  if (!industry) {
    return (
      <Layout>
        <Head>
          <title>Industry Not Found | K&L Recycling</title>
        </Head>
        <section className="bg-gray-800 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-black">Industry Not Found</h1>
            <p className="text-xl mt-4">The requested industry page was not found.</p>
            <Link href="/" className="inline-block bg-royal-blue-600 hover:bg-royal-blue-700 font-bold py-3 px-8 rounded-xl transition-colors text-lg mt-8">
              Back to Home
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>{industry.title} Metal Recycling Services | K&L Recycling</title>
        <meta name="description" content={`Specialized ${industry.title.toLowerCase()} scrap metal recycling solutions in Texas. ${industry.description} Book a consultation today for competitive pricing and expert service.`} />
        <meta name="keywords" content={industry.seoKeywords.join(", ")} />
        <link rel="canonical" href={`https://www.klrecycling.com/industries/${industry.slug}`} />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-royal-blue-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-black mb-6">{industry.title}</h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-8 text-blue-100">{industry.subtitle}</h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">{industry.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-white text-royal-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors text-center">
                  Get Started Today
                </Link>
                <a href="tel:+17135550123" className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-royal-blue-600 transition-colors text-center">
                  Call (713) 555-0123
                </a>
              </div>
            </div>
            <div className="relative h-96">
              <Image src={industry.heroImage} alt={`${industry.title} metal recycling`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover rounded-xl" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Key Challenges */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Key Challenges in {industry.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We understand the unique challenges your industry faces with metal waste management</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {industry.keyChallenges.map((challenge: string, index: number) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{challenge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Our Specialized Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Tailored services designed specifically for {industry.title.toLowerCase()} operations</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {industry.ourSolutions.map((solution: any, index: number) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{solution.service}</h3>
                </div>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-blue-800 text-sm font-semibold">✓ {solution.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Generated */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Materials We Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Common metal waste streams generated by {industry.title.toLowerCase()} operations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {industry.materialsGenerated.map((material: string, index: number) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                <span className="text-gray-700 font-medium">{material}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-r from-royal-blue-100 to-electric-blue-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-xl md:text-2xl text-gray-900 font-medium mb-8 italic">"{industry.testimonial.quote}"</blockquote>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-8 h-8 text-royal-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <cite className="text-gray-900 font-semibold">{industry.testimonial.name}</cite>
              <span className="text-gray-600">{industry.testimonial.title}</span>
              <span className="text-gray-500 text-sm">{industry.testimonial.company}</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">{industry.contactCTA}</h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">Discover how our specialized {industry.title.toLowerCase()} scrap metal recycling solutions can improve your operations and bottom line.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/contact" className="bg-white text-royal-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors text-lg">
              Schedule Consultation
            </Link>
            <a href="tel:+17135550123" className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-royal-blue-600 transition-colors text-lg">
              Call (713) 555-0123
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = industryPages.map((industry) => ({
    params: { slug: industry.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const industry = getIndustryPage(slug);

  if (!industry) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      industry,
    },
  };
};

export default IndustryPage;
