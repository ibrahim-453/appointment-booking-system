import React, { useState } from 'react'
import PricingSection from './PricingSection';

function Price() {
    const [tab, setTab] = useState("users");
  return (
    <div className="w-full min-h-screen bg-background">
      <div className="text-center py-16">
        <h1 className="text-3xl text-secondary font-bold mb-3">
          Choose Your Plan
        </h1>

        <div className="inline-flex items-center border border-secondary/15 rounded-full p-1 bg-white">
            {["users", "professionals"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition-all ${
                  tab === t
                    ? "bg-secondary text-background shadow-sm"
                    : "text-secondary/60 hover:text-secondary"
                }`}
              >
                {t === "users" ? "For Users" : "For Professionals"}
              </button>
            ))}
          </div>
      </div>
      <PricingSection
        tab={tab}
      />
    </div>
  );
}

export default Price