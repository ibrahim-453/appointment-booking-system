import React from "react";
import Hero from "../components/Hero";
import Trust from "../components/Trust";
import Testimonials from "../components/Testimonials";
import Work from "../components/Work";
import Package from "../components/Package";
import CallToAction from "../components/CallToAction";

function Home() {
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <Trust />
      <Work />
      <Package />
      <Testimonials />
      <CallToAction />
    </div>
  )
}

export default Home;

