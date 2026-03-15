import React from "react";
import hero from '../assets/hero.png'

function Hero() {
  const highlights = [
    "Real-time availability",
    "Easy rescheduling",
    "Instant booking confirmation",
    "Secure and reliable system",
  ];

  return (
    <main className="w-full min-h-[500px] bg-background border-b-2 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-11">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight tracking-tight mb-2">
            Book Your Appointment{" "}
            <span className="text-primary">in Seconds</span>
          </h1>

          <p className="text-base text-secondary/70 font-medium leading-relaxed max-w-2xl">
            Skip the waiting lines. Schedule appointments with your preferred
            service provider anytime, from anywhere.
          </p>

          <p className="text-md text-secondary/55 leading-relaxed max-w-2xl">
            Our appointment booking system makes scheduling simple and reliable.
            Choose a service, pick a time that works for you, and confirm your
            appointment instantly. Manage upcoming bookings, reschedule when
            needed, and stay organized without the hassle of phone calls.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-background transition-all hover:bg-secondary active:scale-95">
              Book an Appointment
            </button>
            <button className="rounded-full border border-primary/30 px-5 py-2.5 text-sm font-semibold text-secondary transition-all hover:bg-primary/5 active:scale-95">
              View Available Services
            </button>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {highlights.map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 text-md text-secondary/70"
              >
                <span className="text-accent font-bold">✔</span>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div>
          <img className="rounded-md w-100 h-60" src={hero} alt="Book Well Appointment System" />
        </div>
      </div>
    </main>
  );
}

export default Hero;
