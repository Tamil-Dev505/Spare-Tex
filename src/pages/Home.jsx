import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutCompany from "../components/AboutCompany";
import Gallery from "../components/Gallery";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutCompany />
      <Gallery />
      <WhyChooseUs />
      <ContactUs />
      <Footer />
    </>
  );
}
