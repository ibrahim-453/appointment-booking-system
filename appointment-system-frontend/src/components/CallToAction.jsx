import React from "react";
import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="w-full bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center">

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Start Booking Your Appointments Today
        </h2>

        <p className="text-white/80 text-sm sm:text-base max-w-lg mb-10">
          Join thousands of users who have simplified their lives with Book Well.
          Experience the ultimate convenience.
        </p>

        <Link 
        to="/signup"
        className="bg-white text-primary font-semibold text-sm sm:text-base px-12 py-4 rounded-xl cursor-pointer hover:bg-white/90 transition-colors duration-200">
          Create Free Account
        </Link>

      </div>
    </section>
  );
}

export default CallToAction;