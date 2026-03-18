import React from "react";

function Package() {
  const packages = [
    {
      name: "Single Booking",
      price: "$5",
      cycle: "/ booking",
      features: ["Instant Confirmation", "Basic reminders"],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Monthly Plan",
      price: "$15",
      cycle: "/ month",
      cta: "Start Free Trial",
      features: [
        "Unlimited Bookings",
        "SMS and Email Notifications",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Annual Plan",
      price: "$150",
      cycle: "/ year",
      cta: "Start Now",
      features: [
        "Monthly Plan Features",
        "2 months free trial",
        "Advanced analytics",
        "Custom integrations",
      ],
      popular: false,
    },
  ];
  return (
    <div className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-secondary">
            Pricing Plans
          </h1>
          <p className="text-gray-500 max-w-md">
            Choose the perfect plan for your scheduling needs
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-background rounded-2xl p-8 flex flex-col gap-6 shadow-lg hover:shadow-xl transition-all duration-300
          ${pkg.popular ? "border-2 border-accent scale-105" : "border border-gray-200"}`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-white text-xs px-4 py-1 rounded-full shadow-md">
                    Most Popular
                  </span>
                </div>
              )}
              <h2 className="text-xl font-semibold text-secondary text-center">
                {pkg.name}
              </h2>
              <div className="text-center">
                <span className="text-4xl font-bold text-secondary">
                  {pkg.price}
                </span>
                <span className="text-sm text-gray-500 ml-1">{pkg.cycle}</span>
              </div>
              <div className="border-t border-gray-200"></div>
              <ul className="flex flex-col gap-3">
                {pkg.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-secondary text-sm"
                  >
                    <span className="text-green-500 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`font-semibold border-2 px-4 py-2 rounded-md cursor-pointer transition duration-300
                  ${
                    pkg.popular
                    ? "bg-accent text-background border-accent hover:bg-white hover:text-primary hover:border-primary"
                    : "text-primary border-primary hover:bg-accent hover:text-background hover:border-accent"
                    }`}
              >
                {pkg.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Package;
