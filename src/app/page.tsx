import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import AboutSection from "@/components/AboutSection";
import ProjectsGallery from "@/components/ProjectsGallery";
import ClientsCarousel from "@/components/ClientsCarousel";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import NewsSection from "@/components/NewsSection";
import FaqContactSection from "@/components/FaqContactSection";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { SITE_DATA } from "@/data/content";

export const metadata = {
  title: "HDPE y Fibra de Vidrio en Antofagasta | Kaizen Ingeniería",
  description: "Especialistas en HDPE en Antofagasta (termofusión, piping y geomembranas) y Fibra de Vidrio en Antofagasta (revestimientos FRP de estanques y tinas). Cobertura minera 24/7.",
  keywords: [
    "hdpe antofagasta",
    "hdpe en antofagasta",
    "fibra de vidrio antofagasta",
    "fibra de vidrio en antofagasta",
    "termofusion hdpe antofagasta",
    "revestimientos fibra de vidrio antofagasta",
    "estanques fibra de vidrio antofagasta",
    "geomembranas hdpe antofagasta",
    "soldadura hdpe antofagasta"
  ],
};

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SITE_DATA.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-[#E32819] selection:text-white relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* 4 Feature Cards (Overlap with Hero) */}
      <FeatureCards />

      {/* About Section: Ingeniería con propósito */}
      <AboutSection />

      {/* Projects Gallery */}
      <ProjectsGallery />

      {/* Client Logos Carousel */}
      <ClientsCarousel />

      {/* Services Section */}
      <ServicesSection />

      {/* Portfolio / Sectors Section */}
      <PortfolioSection />

      {/* News & SEO Technical Articles Section */}
      <NewsSection />

      {/* FAQ & Contact Form Section */}
      <FaqContactSection />

      {/* Footer & Google Map */}
      <Footer />

      {/* Floating CTA WhatsApp & Top Button */}
      <FloatingContact />
    </main>
  );
}
