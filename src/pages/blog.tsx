import React, { FC, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import { allPosts } from "@/data/posts";

const POSTS_PER_PAGE = 9;

const BlogPage: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = allPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Layout>
      <Head>
        <title>Blog - Recycling Industry Insights | K&L Recycling</title>
        <meta name="description" content="Stay informed with the latest recycling industry news, tips, and insights from K&L Recycling experts. Learn how to maximize scrap value and contribute to sustainable practices." />
        <link rel="canonical" href="https://www.klrecycling.com/blog" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-royal-blue-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Blog</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">Expert insights, industry trends, and valuable tips for maximizing your scrap metal value and supporting sustainable practices.</p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Latest Posts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover expert advice on scrap metal recycling, industry updates, and sustainable practices</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {paginatedPosts.map((post, index) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="relative overflow-hidden">
                  <Image src={post.image} alt={post.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" width={600} height={384} />
                  <div className="absolute top-4 left-4">
                    <span className="bg-royal-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">{post.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-royal-blue-700 transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center text-royal-blue-600 font-semibold group-hover:text-royal-blue-700">
                    Read More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2">
              <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors">
                ← Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button key={page} onClick={() => handlePageChange(page)} className={`px-4 py-2 rounded-lg transition-colors ${currentPage === page ? "bg-royal-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                  {page}
                </button>
              ))}

              <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors">
                Next →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Stay Informed</h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">Get the latest industry insights, tips, and company updates delivered directly to your inbox.</p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white" />
              <button className="bg-white text-royal-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
