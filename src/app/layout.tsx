import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kaizeningenieria.cl"),
  title: {
    default: "Kaizen Ingeniería | HDPE y Fibra de Vidrio en Antofagasta",
    template: "%s | Kaizen Ingeniería",
  },
  description: "Servicios líderes de HDPE en Antofagasta (termofusión y geomembranas) y Fibra de Vidrio en Antofagasta (revestimientos FRP, estanques y reparaciones). Ingeniería minera 24/7.",
  keywords: [
    "hdpe antofagasta",
    "hdpe en antofagasta",
    "fibra de vidrio antofagasta",
    "fibra de vidrio en antofagasta",
    "termofusion hdpe antofagasta",
    "revestimientos fibra de vidrio antofagasta",
    "estanques fibra de vidrio antofagasta",
    "tuberias hdpe antofagasta",
    "geomembranas antofagasta",
    "Kaizen Ingeniería"
  ],
  authors: [{ name: "Kaizen Ingeniería SpA" }],
  openGraph: {
    title: "Kaizen Ingeniería | HDPE y Fibra de Vidrio en Antofagasta",
    description: "Especialistas en HDPE y Fibra de Vidrio en Antofagasta. Termofusión de cañerías, geomembranas, revestimientos FRP de estanques y mantención industrial minera.",
    url: "https://kaizeningenieria.cl",
    siteName: "Kaizen Ingeniería",
    locale: "es_CL",
    type: "website",
  },
  verification: {
    google: "6S6rWK9-x6IP3WOyDmOEP1sU8IvDkBCcgjTlUOXW-HY",
  },
  icons: {
    icon: "/Recurso 2.png",
    shortcut: "/Recurso 2.png",
    apple: "/Recurso 2.png",
  },
};

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Kaizen Ingeniería",
  alternateName: "Kaizen Ingeniería SpA - HDPE y Fibra de Vidrio Antofagasta",
  image: "https://kaizeningenieria.cl/Recurso%202.png",
  url: "https://kaizeningenieria.cl",
  telephone: "+56985835695",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Antofagasta",
    addressLocality: "Antofagasta",
    addressRegion: "Región de Antofagasta",
    addressCountry: "CL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.65,
    longitude: -70.4,
  },
  areaServed: [
    { "@type": "City", name: "Antofagasta" },
    { "@type": "City", name: "Calama" },
    { "@type": "City", name: "Mejillones" },
    { "@type": "City", name: "Tocopilla" },
    { "@type": "City", name: "Sierra Gorda" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Ingeniería Minera e Industrial",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Servicios de HDPE en Antofagasta",
          description: "Termofusión de tuberías HDPE, piping minero de alta presión, electrofusión y sellado de geomembranas en Antofagasta.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fibra de Vidrio en Antofagasta (FRP)",
          description: "Revestimiento de estanques en fibra de vidrio, resinas viniléster antiácido y reparación estructural in situ en faenas de Antofagasta.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Protección Anticorrosiva y Granallado",
          description: "Sistemas de recubrimientos industriales bajo normas SSPC y NACE para infraestructura minera en Antofagasta.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-[#E32819] selection:text-white">
        {children}
        {/* Google Analytics 4 */}
        {GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== "G-XXXXXXXXXX" && (
          <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
        )}
      </body>
    </html>
  );
}
