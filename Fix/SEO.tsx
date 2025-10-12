import Head from "next/head";
import { FC } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string;
  twitterCard?: "summary" | "summary_large_image";
  structuredData?: object;
  type?: "website" | "article" | "profile" | "book" | "video.other";
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    publisher?: string;
    section?: string;
    tags?: string[];
  };
  businessSchema?: {
    name: string;
    description: string;
    address: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    telephone: string;
    email?: string;
    openingHours?: string;
  };
}

const SEO: FC<SEOProps> = ({ title, description = "Leading East Texas scrap metal recycling company in Tyler TX since 1956. Industrial recycling services, roll-off container rental, demolition debris handling.", image = "https://www.klrecycling.com/images/hero_background_high_res.jpg", url = "https://www.klrecycling.com", keywords = "East Texas scrap metal recycling, scrap yard Tyler TX, bulk material handling Texas, industrial recycling services, roll-off container rental East Texas", twitterCard = "summary_large_image", structuredData, type = "website", article, businessSchema }) => {
  const siteName = "K&L Recycling";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;

  // Generate business schema if provided
  const generateBusinessSchema = () => {
    if (!businessSchema) return null;

    return {
      "@context": "https://schema.org",
      "@type": "RecyclingCenter",
      name: businessSchema.name,
      description: businessSchema.description,
      address: {
        "@type": "PostalAddress",
        streetAddress: businessSchema.address.streetAddress,
        addressLocality: businessSchema.address.addressLocality,
        addressRegion: businessSchema.address.addressRegion,
        postalCode: businessSchema.address.postalCode,
        addressCountry: businessSchema.address.addressCountry,
      },
      telephone: businessSchema.telephone,
      email: businessSchema.email,
      sameAs: ["https://www.facebook.com/klrecycling"],
      areaServed: [
        {
          "@type": "Place",
          name: "East Texas",
        },
        {
          "@type": "Place",
          name: "Tyler, TX",
        },
      ],
      serviceType: ["Scrap Metal Recycling", "Industrial Recycling Services", "Roll-off Container Rental", "Demolition Debris Handling"],
      openingHours: businessSchema.openingHours || "Mo-Fr 08:00-17:00",
      priceRange: "$$",
    };
  };

  // Generate article schema if provided
  const generateArticleSchema = () => {
    if (!article) return null;

    return {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description: description,
      image: image,
      author: {
        "@type": "Organization",
        name: article.author || siteName,
      },
      publisher: {
        "@type": "Organization",
        name: article.publisher || siteName,
      },
      datePublished: article.publishedTime,
      dateModified: article.modifiedTime,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
      },
      keywords: article.tags?.join(", ") || keywords,
      articleSection: article.section,
    };
  };

  // Combine all schemas
  const allSchemas = [generateBusinessSchema(), generateArticleSchema(), structuredData].filter(Boolean);

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content={siteName} />
      <link rel="canonical" href={url} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/images/logo.png" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${siteName} - ${description}`} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={`${siteName} - ${description}`} />

      {/* Article specific Open Graph */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:modified_time" content={article.modifiedTime} />
          <meta property="article:author" content={article.author} />
          <meta property="article:publisher" content={article.publisher} />
          <meta property="article:section" content={article.section} />
          {article.tags?.map((tag) => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Structured Data */}
      {allSchemas.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(allSchemas.length === 1 ? allSchemas[0] : allSchemas),
          }}
        />
      )}
    </Head>
  );
};

export default SEO;
