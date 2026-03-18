import React from "react";

function Trust() {
  const stats = [
    { value: "10,000+", label: "Appointments Successfully Booked" },
    { value: "500+", label: "Professionals & Service Providers" },
    { value: "98%", label: "Customer Satisfaction Rate" },
    { value: "24/7", label: "Online Booking Availability" },
  ];

  return (
    <section className="w-full min-h-[300px] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-secondary mb-10">
          Trusted by People for{" "}
          <span className="text-primary">Seamless Scheduling</span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-primary/10 border border-primary/10 rounded-2xl overflow-hidden">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center text-center gap-1.5 py-8 px-4"
            >
              <span className="text-3xl sm:text-4xl font-bold text-primary">
                {stat.value}
              </span>
              <span className="text-sm text-secondary/60 leading-snug max-w-[140px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trust;
