// pages/blog/[slug].tsx
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { allPosts } from "../../data/posts";
import type { BlogPost } from "../../types";

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = allPosts.find((p) => p.slug === params!.slug);

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
};

const PostPage: NextPage<{ post: BlogPost }> = ({ post }) => (
  <Layout>
    <SEO title={`${post.title} | Blog | K&L Recycling`} description={post.excerpt || post.title} image={post.image} />

    <article className="prose mx-auto py-20 px-6 lg:prose-lg">
      <header className="mb-8 text-center">
        <h1 className="mb-2 font-extrabold">{post.title}</h1>
        <time className="text-gray-500">{post.date}</time>
        <div className="relative mt-6 mx-auto h-64 w-full">
          <Image src={post.image} alt={post.title} fill className="rounded-lg object-cover" />
        </div>
      </header>

      <section className="mt-8" dangerouslySetInnerHTML={{ __html: post.content }} />

      {/* Optionally: related posts, share buttons, etc. */}
    </article>
  </Layout>
);

export default PostPage;
