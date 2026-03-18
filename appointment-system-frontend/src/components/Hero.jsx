import React from "react";
import defaultHero from "../assets/light_mode_hero.png";
import { Link } from "react-router-dom";
function Hero({
  titleLines = [
    "Book Your Appointments",
    <>
      with <span className="text-primary">Trusted Professionals</span>
    </>,
    "Instantly.",
  ],
  description = `Streamline your schedule with our all-in-one platform. From health
  checkups to legal consultations, find and book your preferred
  experts in seconds.`,
  primaryBtnText = "Get Started",
  secondaryBtnText = "View Available Services",
  primaryBtnLink = "/signup",
  secondaryBtnLink = "/services",
  highlights = [
    "Real-time availability",
    "Easy rescheduling",
    "Instant booking confirmation",
    "Secure and reliable system",
  ],
  image = defaultHero,
}) {
  return (
    <main className="w-full min-h-[500px] bg-background border-b-2 border-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-11">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-6 w-full lg:w-1/2 text-center lg:text-left items-center lg:items-start">
            {titleLines?.length > 0 && (
              <div className="flex flex-col">
                {titleLines.map((line, index) => (
                  <h1
                    key={index}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-secondary"
                  >
                    {line}
                  </h1>
                ))}
              </div>
            )}
            {description && (
              <p className="text-sm sm:text-base text-secondary leading-relaxed max-w-xl">
                {description}
              </p>
            )}
            {(primaryBtnText || secondaryBtnText) && (
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3">
                {primaryBtnText && (
                  <Link
                    to={primaryBtnLink}
                    className="rounded-full bg-primary px-8 py-2.5 text-sm font-semibold text-background transition-all hover:bg-secondary active:scale-95"
                  >
                    {primaryBtnText}
                  </Link>
                )}
                {secondaryBtnText && (
                  <Link
                    to={secondaryBtnLink}
                    className="rounded-full border border-primary/30 px-5 py-2.5 text-sm font-semibold text-secondary transition-all hover:bg-primary/5 active:scale-95"
                  >
                    {secondaryBtnText}
                  </Link>
                )}
              </div>
            )}
            {highlights?.length > 0 && (
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2">
                {highlights.map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-2 text-sm sm:text-base text-secondary/70"
                  >
                    <span className="text-accent font-bold">✔</span>
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
          {image && (
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                className="rounded-md w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto object-cover"
                src={image}
                alt="Book Well Appointment System"
                loading="eager"
                fetchpriority="high"
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Hero;
