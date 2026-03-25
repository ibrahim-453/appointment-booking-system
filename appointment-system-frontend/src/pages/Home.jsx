import React from "react";
import Hero from "../components/Hero";
import Trust from "../components/Trust";
import Testimonials from "../components/Testimonials";
import Work from "../components/Work";
import CallToAction from "../components/CallToAction";
import Price from "../components/Price";

function Home() {
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <Trust />
      <Work />
      <Testimonials />
      <Price />
      <CallToAction />
    </div>
  )
}

export default Home;

