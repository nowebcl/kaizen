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

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-[#E32819] selection:text-white relative">
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
