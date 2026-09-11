import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function SEO({
  title = "Apex Movement",
  description = "Apex Movement: The world's leading parkour coaching collective. Physics-based training protocols and biomechanical analysis.",
  image,
  url,
}: SEOProps) {
  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : 'https://ais-pre-xbevpiihumjbnvp7hdpvn2-67113201427.us-west2.run.app';
  const resolvedImage = image || `${currentOrigin}/apex-brick-logo-blur.jpg`;
  const resolvedUrl = url || currentOrigin;

  const fullTitle = title === "Apex Movement" ? title : `${title} | Apex Movement`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Apex Movement",
    "url": resolvedUrl,
    "description": description,
    "logo": resolvedImage,
    "sameAs": []
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Apex Movement Parkour Coaching",
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Apex Movement",
      "sameAs": resolvedUrl
    }
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={resolvedUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={resolvedImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={resolvedUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={resolvedImage} />

      {/* JSON-LD Schemas */}
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(courseSchema)}</script>
    </Helmet>
  );
}
