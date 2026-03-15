import React from "react";

function Services() {
  const serviceCards = [
    {
      icon: "📅",
      title: "Online Appointment Booking",
      desc: "Quickly schedule appointments with available professionals using real-time time slots.",
    },
    {
      icon: "🗂️",
      title: "Service Provider Directory",
      desc: "Browse providers, view their profiles, services, and availability before booking.",
    },
    {
      icon: "🔧",
      title: "Appointment Management",
      desc: "View upcoming bookings, reschedule appointments, or cancel when plans change.",
    },
    {
      icon: "🔔",
      title: "Automated Notifications",
      desc: "Receive reminders and updates so you never miss an appointment.",
    },
    {
      icon: "📋",
      title: "Service Details",
      desc: "Explore detailed information about services, pricing, and provider availability before making a booking.",
    },
  ];

  return (
    <section className="w-full bg-background border-b-2 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className=" flex flex-col justify-center items-center mb-10">
          <h2 className=" text-center text-3xl sm:text-4xl font-bold text-secondary tracking-tight mb-3">
            Simple Tools to{" "}
            <span className="text-primary">Manage Your Appointments</span>
          </h2>
          <div className="max-w-2xl">
            <p className="text-sm text-secondary/55 leading-relaxed">
              Our platform provides everything you need to schedule, manage, and
              track appointments easily. Whether you are booking a service or
              managing multiple schedules, everything is designed to be fast and
              convenient.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {serviceCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-3 p-5 rounded-2xl border border-primary/10 hover:border-primary/30 hover:shadow-sm transition-all bg-background"
            >
              <span className="text-2xl">{card.icon}</span>
              <h3 className="text-sm font-semibold text-secondary">
                {card.title}
              </h3>
              <p className="text-xs text-secondary/55 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
