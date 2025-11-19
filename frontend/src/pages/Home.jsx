import Navbar from "../components/Navbar";
import AboutUsSection from "../components/AboutUsSection";
import OurServices from "../components/OurServices";
import DashboardPreview from "../components/DashboardPreview";
import ContactUsSection from "../components/ContactUsSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050404] text-white overflow-x-hidden flex flex-col scroll-smooth">
      {/* NAVBAR + HERO */}
      <Navbar />

      {/* ABOUT US */}
      <section id="about">
        <AboutUsSection />
      </section>

      {/* OUR SERVICES */}
      <section id="services">
        <OurServices />
      </section>

      {/* ANALYTICS / INSIGHTS */}
      <section id="dashboard-preview">
        <DashboardPreview />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <ContactUsSection />
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
