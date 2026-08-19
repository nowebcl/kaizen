import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kaizeningenieria.cl"),
  title: "Kaizen Ingeniería | Servicios de Ingeniería en Antofagasta",
  description: "Servicios de ingeniería en Antofagasta - Kaizen ingeniería - Expertos en protección anticorrosiva, revestimientos industriales y mantenimiento de alto desempeño.",
  keywords: ["Kaizen Ingeniería", "Antofagasta", "Protección anticorrosiva", "Revestimientos industriales", "Mantenimiento industrial", "Obras civiles minería"],
  authors: [{ name: "Kaizen Ingeniería SpA" }],
  openGraph: {
    title: "Kaizen Ingeniería | Servicios de Ingeniería en Antofagasta",
    description: "Servicios de ingeniería en Antofagasta - Kaizen ingeniería - Cotiza gratis.",
    url: "https://kaizeningenieria.cl",
    siteName: "Kaizen Ingeniería",
    locale: "es_CL",
    type: "website",
  },
  verification: {
    google: "6S6rWK9-x6IP3WOyDmOEP1sU8IvDkBCcgjTlUOXW-HY",
  },
};

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
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
