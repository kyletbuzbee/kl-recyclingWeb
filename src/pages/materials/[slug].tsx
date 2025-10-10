import React, { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import { getMaterialDetail, allMaterialDetails } from "@/data/materialDetails";
import { MaterialDetail } from "@/types";

interface MaterialDetailPageProps {
  material: MaterialDetail | null;
}

const MaterialDetailPage: FC<MaterialDetailPageProps> = ({ material }) => {
  if (!material) {
    return (
      <Layout>
        <Head>
          <title>Material Not Found | K&L Recycling</title>
        </Head>
        <section className="bg-gray-800 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-black">Material Not Found</h1>
            <p className="text-xl mt-4">The requested material was not found.</p>
            <Link href="/materials" className="inline-block bg-royal-blue-600 hover:bg-royal-blue-700 font-bold py-3 px-8 rounded-xl transition-colors text-lg mt-8">
              Back to Materials
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>
          {material.name} Recycling | K&L Recycling - {material.description}
        </title>
        <meta name="description" content={`Get current ${material.name.toLowerCase()} prices and recycling information. We accept all grades including ${material.grades.map((g) => g.name).join(", ")}. ${material.currentPrice.value} ${material.currentPrice.unit} as of ${material.currentPrice.lastUpdated}.`} />
        <meta name="keywords" content={material.seoKeywords.join(", ")} />
        <link rel="canonical" href={`https://www.klrecycling.com/materials/${material.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: `${material.name} Recycling Services`,
            description: material.description,
            image: `https://www.klrecycling.com${material.image}`,
            offers: {
              "@type": "Offer",
              priceSpecification: {
                "@type": "PriceSpecification",
                price: material.currentPrice.value,
                priceCurrency: "USD",
                valueAddedTaxIncluded: false,
              },
            },
            manufacturer: {
              "@type": "Organization",
              name: "K&L Recycling",
            },
          })}
        </script>
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-royal-blue-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="text-blue-200 mb-6">
                <Link href="/materials" className="hover:text-white transition-colors">
                  Materials ←
                </Link>
                <span className="mx-2">•</span>
                <span>{material.name}</span>
              </nav>
              <h1 className="text-4xl md:text-6xl font-black mb-6">{material.name} Recycling</h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">{material.description}</p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-sm text-blue-200 mb-2">Current Market Value</div>
                <div className="text-3xl font-black">
                  ${material.currentPrice.value.toFixed(2)} <span className="text-xl font-normal">{material.currentPrice.unit}</span>
                </div>
                <div className="text-sm text-blue-300 mt-1">Updated {material.currentPrice.lastUpdated}</div>
              </div>
            </div>
            <div className="relative h-96">
              <Image src={material.image} alt={material.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover rounded-xl" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Material Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">About {material.name}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">{material.longDescription}</p>

            {/* Grades and Pricing */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Current Values & Grades</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {material.grades.map((grade, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">{grade.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{grade.description}</p>
                    <div className="text-2xl font-bold text-green-600">
                      ${grade.marketValue.toFixed(2)} <span className="text-sm text-gray-500">{material.currentPrice.unit}</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">Range: {grade.priceRange}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Preparation Tips */}
            <div className="bg-blue-50 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Preparation Tips for Maximum Value
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {material.preparationTips.map((tip, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mr-3 flex-shrink-0">✓</span>
                      <span className="text-gray-700">{tip}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Common Sources */}
            <div className="bg-green-50 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Sources</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {material.commonSources.map((source, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-600 rounded-full text-sm font-semibold mr-3 flex-shrink-0">•</span>
                      <span className="text-gray-700">{source}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Recycle Your {material.name}?</h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">Get current market value at our facilities. We offer competitive prices and immediate payment for your scrap metal.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/contact" className="bg-white text-royal-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors text-lg">
              Get Quote
            </Link>
            <a href="tel:+17135550123" className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-royal-blue-600 transition-colors text-lg">
              Call (713) 555-0123
            </a>
          </div>
          <div className="mt-8 text-blue-100">
            <p className="text-sm">* Prices are subject to change based on current market conditions and material quality. Contact us for the most up-to-date pricing.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allMaterialDetails.map((material) => ({
    params: { slug: material.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const material = getMaterialDetail(slug);

  if (!material) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      material,
    },
  };
};

export default MaterialDetailPage;
