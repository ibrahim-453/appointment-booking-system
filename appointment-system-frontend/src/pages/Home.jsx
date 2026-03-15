import React from "react";
import Hero from "../components/Hero";
import Trust from "../components/Trust";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <Trust />
      <Services />
      <Testimonials />
    </div>
  )
}

export default Home;

