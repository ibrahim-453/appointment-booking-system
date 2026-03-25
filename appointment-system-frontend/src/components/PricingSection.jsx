import { Check } from 'lucide-react';
import React from 'react'

const userPlans = [
  {
    id: "single",
    name: "Single Appointment",
    price: "$0",
    period: "per booking",
    tag: null,
    note: "Pay only for what you use",
    color: false,
    features: [
      "Standard pricing",
      "3 reschedules limit",
      "Free reschedule < 24h",
      "$3 fee after 2x limit",
      "Refund if cancelled > 24h",
    ],
    cta: "Book Now",
  },
  {
    id: "monthly",
    name: "Monthly Plan",
    price: "$29",
    period: "/ month",
    tag: "MOST POPULAR",
    note: "Ideal for regular wellness",
    color: true,
    features: [
      "Priority booking access",
      "8 reschedules/mo",
      "Extended booking window",
      "Reduced service fees",
      "Exclusive member events",
    ],
    cta: "Subscribe Monthly",
  },
  {
    id: "annual",
    name: "Annual Plan",
    price: "$240",
    period: "/ year",
    tag: null,
    note: "Best value (Save $108+)",
    color: false,
    features: [
      "Maximum flexibility",
      "High reschedule limits",
      "Priority 24/7 support",
      "15% booking discounts",
      "Early access to new services",
    ],
    cta: "Subscribe Annually",
  },
];

const proPlans = [
  {
    id: "pro-starter",
    name: "Starter",
    price: "$0",
    period: "/ month",
    tag: null,
    note: "Get started for free",
    color: false,
    features: [
      "Up to 20 bookings/mo",
      "Basic calendar tools",
      "Standard listing",
      "Community support",
    ],
    cta: "Get Started Free",
  },
  {
    id: "pro-growth",
    name: "Growth",
    price: "$49",
    period: "/ month",
    tag: "MOST POPULAR",
    note: "Best for growing practices",
    color: true,
    features: [
      "Unlimited bookings",
      "Advanced scheduling",
      "Custom pricing tiers",
      "Priority listing",
      "Analytics dashboard",
    ],
    cta: "Start Growth Plan",
  },
  {
    id: "pro-enterprise",
    name: "Enterprise",
    price: "$149",
    period: "/ month",
    tag: null,
    note: "For large teams & clinics",
    color: false,
    features: [
      "Multi-staff management",
      "Dedicated account manager",
      "Custom integrations",
      "White-label options",
      "24/7 concierge support",
    ],
    cta: "Contact Sales",
  },
];

function PlanCard({ plan }) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border transition-shadow ${
        plan.color
          ? "border-primary shadow-lg shadow-primary/10 scale-[1.02]"
          : "border-secondary/10 bg-white"
      }`}
    >
      {plan.tag && (
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 pt-4 pb-0">
          <span className="bg-primary text-white text-[10px] font-bold tracking-widest px-4 py-1 rounded-full">
            {plan.tag}
          </span>
        </div>
      )}

      <div className="flex flex-col gap-5 p-6 flex-1">
        <div>
          <p className="text-sm font-semibold text-secondary mb-3">
            {plan.name}
          </p>
          <div className="flex items-end gap-1">
            <span className="text-4xl font-bold text-secondary">
              {plan.price}
            </span>
            <span className="text-sm text-secondary/50 mb-1">
              {plan.period}
            </span>
          </div>
          <p className="text-xs text-secondary/45 mt-1">{plan.note}</p>
        </div>
        <ul className="flex flex-col gap-2.5">
          {plan.features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2.5 text-sm text-secondary/70"
            >
              <Check
                className={`w-4 h-4 shrink-0 mt-0.5 ${
                  plan.color ? "text-primary" : "text-green-500"
                }`}
              />
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div className="px-6 pb-6">
        <button
          className={`w-full py-3 rounded-xl text-sm font-semibold cursor-pointer transition-all active:scale-95 ${
            plan.color
              ? "bg-primary text-white hover:bg-primary/90"
              : "border border-secondary/20 text-secondary hover:border-primary hover:text-primary"
          }`}
        >
          {plan.cta}
        </button>
      </div>
    </div>
  );
}

function PricingSection({tab}) {
   const plans = tab === "users" ? userPlans : proPlans;
  return (
    <div className="w-full min-h-screen bg-background">
      <section className="w-full pb-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch pt-6">
            {plans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default PricingSection