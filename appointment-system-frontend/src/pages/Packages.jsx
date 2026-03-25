import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Users, Briefcase, ChevronDown } from "lucide-react";
import PricingSection from "../components/PricingSection";

const userComparison = [
  {
    feature: "Reschedule Limit",
    single: "3 per booking",
    monthly: "8 per month",
    annual: "Unlimited",
  },
  {
    feature: "Reschedule Fee",
    single: "$3 after limit",
    monthly: "Free",
    annual: "Free",
  },
  {
    feature: "Refund Policy",
    single: "< 24h Window",
    monthly: "< 12h Window",
    annual: "Instant / Flexible",
  },
  {
    feature: "Booking Priority",
    single: "Standard",
    monthly: "High",
    annual: "Highest",
  },
  {
    feature: "Support Level",
    single: "Community",
    monthly: "Priority Email",
    annual: "24/7 Concierge",
  },
];

const proComparison = [
  {
    feature: "Bookings",
    starter: "20/mo",
    growth: "Unlimited",
    enterprise: "Unlimited",
  },
  {
    feature: "Scheduling",
    starter: "Basic",
    growth: "Advanced",
    enterprise: "Custom",
  },
  {
    feature: "Pricing",
    starter: "Fixed",
    growth: "Custom",
    enterprise: "Full Control",
  },
  {
    feature: "Visibility",
    starter: "Standard",
    growth: "Priority",
    enterprise: "Top",
  },
  {
    feature: "Analytics",
    starter: "Basic",
    growth: "Advanced",
    enterprise: "Custom",
  },
  {
    feature: "Support",
    starter: "Community",
    growth: "Priority",
    enterprise: "24/7",
  },
];

const faqs = [
  {
    q: "Can I cancel my subscription anytime?",
    a: "Yes, you can cancel your Monthly or Annual plan at any time from your account settings. You'll continue to have access until the end of your billing cycle.",
  },
  {
    q: "How do reschedule limits work?",
    a: "Reschedule limits are per booking for Single Appointments and per month for Monthly plans. If you exceed the limit, a small processing fee applies to maintain professional availability.",
  },
  {
    q: "What is the refund policy?",
    a: "Cancellations made more than 24 hours before the appointment are fully refundable. For premium plans, this window is even more flexible.",
  },
  {
    q: "Can I switch between User and Professional roles?",
    a: "Absolutely! You can hold both roles on a single account. Pricing and dashboards will toggle depending on which view you are using.",
  },
];

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-secondary/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-secondary/5 transition-colors"
      >
        <span className="text-sm font-semibold text-secondary">{faq.q}</span>
        <ChevronDown
          className={`w-4 h-4 text-secondary/40 shrink-0 ml-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-4 bg-white">
          <p className="text-sm text-secondary/60 leading-relaxed">{faq.a}</p>
        </div>
      )}
    </div>
  );
}
function Packages() {
  const [tab, setTab] = useState("users");
  const rows = tab === "users" ? userComparison : proComparison;
  const columns =
    tab === "users"
      ? ["single", "monthly", "annual"]
      : ["starter", "growth", "enterprise"];

  return (
    <div className="w-full min-h-screen bg-background">
      <section className="w-full pt-16 pb-10 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-3">
            Flexible Plans for <span className="text-primary">Every User</span>
          </h1>
          <p className="text-sm text-secondary/55 max-w-lg mx-auto leading-relaxed mb-8">
            Choose the plan that fits your scheduling needs perfectly. Whether
            you're booking services or offering them, we have you covered.
          </p>
          <div className="inline-flex items-center border border-secondary/15 rounded-full p-1 bg-white">
            {["users", "professionals"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
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
      </section>
            <PricingSection tab={tab} />
        <section className="w-full py-16 bg-background border-t border-secondary/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary text-center mb-10">
              Compare Our Plans
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-secondary/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-secondary/5 border-b border-secondary/10">
                    <th className="text-left px-5 py-4 text-xs font-semibold text-secondary/50 uppercase tracking-wider w-1/4">
                      Features
                    </th>
                    {columns.map((c) => (
                      <th className="px-5 py-4 text-xs font-semibold text-secondary/50 uppercase tracking-wider text-center">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-secondary/5">
                  {rows.map((row) => (
                    <tr
                      key={row.feature}
                      className="hover:bg-secondary/5 transition-colors"
                    >
                      <td className="px-5 py-4 text-secondary/70 font-medium">
                        {row.feature}
                      </td>
                      {columns.map((c) => (
                        <td
                          key={c}
                          className="px-5 py-4 text-secondary/55 text-center"
                        >
                          {row[c]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      <section className="w-full py-16 bg-background border-t border-secondary/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-2">
              Designed for Everyone
            </h2>
            <p className="text-sm text-secondary/55">
              We balance the needs of both sides of the marketplace.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-bold text-secondary">For Users</h3>
              <p className="text-sm text-secondary/60 leading-relaxed">
                Experience seamless wellness. Find and book experts in seconds
                with our intuitive interface. Enjoy flexible rescheduling
                options that adapt to your busy lifestyle.
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  "Book easily across categories",
                  "Manage all appointments in one place",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-secondary/70"
                  >
                    <Check className="w-4 h-4 text-green-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-bold text-secondary">
                For Professionals
              </h3>
              <p className="text-sm text-secondary/60 leading-relaxed">
                Grow your business without the headache. Manage your calendar,
                set custom pricing, and reach new clients who value your
                expertise.
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  "Automated scheduling & reminders",
                  "Professional profile and reviews",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-secondary/70"
                  >
                    <Check className="w-4 h-4 text-green-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full min-h-[600px] py-22 bg-background border-t border-secondary/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-2">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} faq={faq} />
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-16 bg-accent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-5 items-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-background">
            Ready to Book Well?
          </h2>
          <p className="text-sm text-background/70 leading-relaxed max-w-md">
            Join thousands of users who have streamlined their wellness journey.
            Choose your plan and get started today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/signup"
              className="bg-white text-secondary font-semibold text-sm px-7 py-3 rounded-full hover:bg-white/90 active:scale-95 transition-all"
            >
              Get Started Now
            </Link>
            <Link
              to="/contact"
              className="border border-white/30 text-white font-semibold text-sm px-7 py-3 rounded-full hover:bg-white/10 active:scale-95 transition-all"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Packages;
