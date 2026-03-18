import React from "react";
import test1 from "../assets/test1.jpg";
import test2 from "../assets/test2.jpg";
import test3 from "../assets/test3.jpg";
import test4 from "../assets/test4.jpg";

const testimonials = [
  {
    name: "Ayesha Khan",
    role: "Regular User",
    image: test1,
    review:
      "The booking process is very simple and fast. I was able to schedule my appointment in less than a minute without making any calls.",
    rating: 4,
  },
  {
    name: "Ahmed Raza",
    role: "Regular User",
    image: test2,
    review:
      "I really like the reminder feature. It helps me stay organized and ensures I never miss an appointment.",
    rating: 3,
  },
  {
    name: "Sara Ali",
    role: "Regular User",
    image: test3,
    review:
      "The platform is clean, easy to use, and saves a lot of time. Managing and rescheduling appointments is effortless.",
    rating: 5,
  },
  {
    name: "Usman Malik",
    role: "Regular User",
    image: test4,
    review:
      "Finding available time slots and booking instantly is extremely convenient. It has made scheduling services much easier for me.",
    rating: 4,
  },
];

function StarRating({ count }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-accent"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Testimonials() {
  return (
    <section className="w-full bg-white border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-xl mb-12">
          <p className="text-xs font-medium uppercase tracking-widest text-primary mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary tracking-tight mb-3">
            What Our <span className="text-primary">Users Say</span>
          </h2>
          <p className="text-sm text-secondary/55 leading-relaxed">
            People use our platform every day to book and manage their
            appointments easily. Here's what some of them have to say about
            their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-4 p-5 rounded-2xl border border-secondary cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex-shrink-0 overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.name}
                    loading="eager"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-secondary leading-tight">
                    {t.name}
                  </p>
                  <p className="text-xs text-secondary/45">{t.role}</p>
                </div>
              </div>

              <StarRating count={t.rating} />

              <p className="text-xs text-secondary/60 leading-relaxed flex-1">
                "{t.review}"
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 p-6 rounded-2xl border border-primary/10 bg-primary/5">
          <p className="text-sm text-secondary/70 leading-relaxed max-w-lg">
            Join thousands of users who trust our platform to schedule and
            manage their appointments{" "}
            <span className="text-primary font-medium">efficiently.</span>
          </p>
          <button className="flex-shrink-0 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-background transition-all hover:bg-secondary active:scale-95">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
