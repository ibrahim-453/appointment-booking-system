import React from "react";

function Work() {
  const flowCards = [
    {
      title: "Browse Professionals",
      data: "Find the perfect expert based on ratings and availability",
    },
    {
      title: "Choose Time",
      data: "Select a convenient slot that fits your busy schedule",
    },
    {
      title: "Select Package and Process Payment",
      data: "Choose package that fits you and pay online with multiple payment options",
    },
    {
      title: "Get Token",
      data: "Get your digital booking token and receive reminders",
    },
  ];

  return (
    <section className="w-full bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-secondary tracking-tight mb-12">
          How it Works
        </h2>
        <div className="hidden sm:flex items-start justify-between">
          {flowCards.map((card, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center relative"
            >
              {index !== flowCards.length - 1 && (
                <div className="absolute top-9 left-1/2 w-full border-t-2 border-accent z-0" />
              )}
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border-2 border-accent text-secondary font-bold text-xl lg:text-2xl flex justify-center items-center z-10 bg-background shrink-0">
                {index + 1}
              </div>
              <div className="mt-6 text-center px-2">
                <h3 className="text-sm lg:text-base font-semibold text-secondary">
                  {card.title}
                </h3>
                <p className="text-xs lg:text-sm font-medium text-gray-600 mt-2">
                  {card.data}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex sm:hidden flex-col items-start gap-0 pl-4">
          {flowCards.map((card, index) => (
            <div key={index} className="flex items-start gap-4 relative">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border-2 border-accent text-secondary font-bold text-base flex justify-center items-center bg-background z-10 shrink-0">
                  {index + 1}
                </div>
                {index !== flowCards.length - 1 && (
                  <div className="w-px h-16 border-l-2 border-accent" />
                )}
              </div>
              <div className="pt-2 pb-8">
                <h3 className="text-sm font-semibold text-secondary">
                  {card.title}
                </h3>
                <p className="text-xs font-medium text-gray-600 mt-1">
                  {card.data}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
