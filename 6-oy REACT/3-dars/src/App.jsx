import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Advantages from "./components/Advantages";
import Reviews from "./components/Reviews";
import ContactForm from "./components/ContactForm";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Advantages />
      <Reviews />
      <ContactForm />
      <MapSection />
      <Footer />
    </div>
  );
}
