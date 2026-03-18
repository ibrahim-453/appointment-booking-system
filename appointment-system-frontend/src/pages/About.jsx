import React from "react";
import Hero from "../components/Hero";
import about from "../assets/light_mode_about.png";
import storyImg from "../assets/story.png";
import whyImg from "../assets/why.png";
import proImg from "../assets/pro_dashboard.png";
import {
  Zap,
  ShieldCheck,
  Ticket,
  CalendarClock,
  LayoutGrid,
  Wrench,
  CheckCircle2,
  Clock,
  TrendingUp,
  BadgeDollarSign,
  Users,
  Store,
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Easy Booking",
    description:
      "Book appointments in just a few clicks without registration hurdles.",
    icon: <Zap className="w-7 h-7 text-gray-300" />,
  },
  {
    title: "Secure Payments",
    description:
      "Multiple payment options with industry-standard encryption protocols.",
    icon: <ShieldCheck className="w-7 h-7 text-gray-300" />,
  },
  {
    title: "Instant Tokens",
    description:
      "Get your booking confirmation and digital token instantly via SMS or Email.",
    icon: <Ticket className="w-7 h-7 text-gray-300" />,
  },
  {
    title: "Flexible Rescheduling",
    description:
      "Plans changed? Easily reschedule or cancel with our flexible policies.",
    icon: <CalendarClock className="w-7 h-7 text-gray-300" />,
  },
  {
    title: "Wide Categories",
    description:
      "Access a massive directory of doctors, salons, legal experts, and more.",
    icon: <LayoutGrid className="w-7 h-7 text-gray-300" />,
  },
  {
    title: "Pro Tools",
    description:
      "Dedicated dashboard for professionals to manage staff and schedules.",
    icon: <Wrench className="w-7 h-7 text-gray-300" />,
  },
];

const reasons = [
  {
    title: "Verified Professionals Only",
    description:
      "Every professional on our platform goes through a rigorous vetting process.",
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden fees. You see exactly what you pay before you book.",
  },
  {
    title: "Real-Time Support",
    description:
      "Our support team is available 24/7 to help with any booking issues.",
  },
];

const proFeatures = [
  {
    label: "Manage Availability",
    icon: <Clock className="w-4 h-4 text-primary" />,
  },
  {
    label: "Set Custom Pricing",
    icon: <BadgeDollarSign className="w-4 h-4 text-primary" />,
  },
  {
    label: "Track Earnings",
    icon: <TrendingUp className="w-4 h-4 text-primary" />,
  },
  {
    label: "Team Management",
    icon: <Users className="w-4 h-4 text-primary" />,
  },
];

function About() {
  const stats = [
    { value: "2026", label: "Year Founded" },
    { value: "150+", label: "Cities Covered" },
  ];

  return (
    <div className="w-full min-h-screen">
      <Hero
        titleLines={[
          <>
            Take Control of Your <span className="text-primary">Time</span>
          </>,
          "With Effortless",
          <>
            <span className="text-primary">Appointment</span> Booking
          </>,
        ]}
        description="Our mission is to save time and reduce stress by providing a reliable, secure, and intuitive platform for appointment management. Whether you're a customer or a professional, BookWell keeps everything organized, accessible, and seamless."
        primaryBtnText="Explore Our Services"
        primaryBtnLink="/services"
        secondaryBtnText=""
        highlights=""
        image={about}
      />
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-3xl flex flex-col lg:flex-row gap-0 overflow-hidden">
            <div className="w-full lg:w-[45%] shrink-0">
              <img
                src={storyImg}
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center gap-5 px-8 py-10 lg:py-12">
              <p className="text-xs font-semibold tracking-widest text-primary uppercase">
                Our Story
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary leading-snug">
                Solving Scheduling and Trust Issues
              </h2>
              <p className="text-sm text-secondary/70 leading-relaxed">
                Book Well was founded to bridge the gap between busy individuals
                and skilled professionals. We recognized that the traditional
                way of booking — endless phone calls and manual tracking — was
                outdated and prone to errors.
              </p>
              <p className="text-sm text-secondary/70 leading-relaxed">
                Our mission is to empower both sides of the marketplace:
                providing users with a hassle-free discovery engine and
                professionals with the tools they need to grow their business
                efficiently.
              </p>
              <div className="flex items-center gap-12 mt-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-1">
                    <span className="text-2xl font-bold text-primary">
                      {stat.value}
                    </span>
                    <span className="text-xs text-secondary/50">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              What We Offer
            </h2>
            <p className="text-sm text-white max-w-xl mx-auto leading-relaxed">
              Comprehensive features designed to make your life easier and your
              business more profitable.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-4 bg-accent border border-secondary/10 rounded-xl px-6 py-7 hover:border-primary/30 transition-colors"
              >
                {feature.icon}
                <h3 className="text-base font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-white leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-sm flex flex-col lg:flex-row overflow-hidden">
            <div className="flex flex-col justify-center gap-8 px-8 sm:px-12 py-12 w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary">
                Why Choose Book Well?
              </h2>
              <div className="flex flex-col gap-6">
                {reasons.map((reason) => (
                  <div key={reason.title} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-bold text-secondary">
                        {reason.title}
                      </p>
                      <p className="text-sm text-secondary/60 leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative w-full lg:w-1/2">
              <img
                src={whyImg}
                alt="Why Choose Book Well"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 right-6 bg-green-500 text-white rounded-xl px-5 py-3 flex flex-col items-center shadow-lg">
                <span className="text-2xl font-bold leading-none">98%</span>
                <span className="text-xs mt-1 opacity-90">
                  User Satisfaction
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 shrink-0">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-secondary/10">
                <img
                  src={proImg}
                  alt="Pro Dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 w-full lg:w-1/2">
              <p className="text-xs font-semibold tracking-widest text-primary uppercase">
                Grow Your Business
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary leading-snug">
                Designed for Professionals
              </h2>
              <p className="text-sm text-secondary/70 leading-relaxed">
                Scale your practice with our dedicated pro tools. Take control
                of your time, maximize your earnings, and give your clients an
                experience they'll love.
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {proFeatures.map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    {item.icon}
                    <span className="text-sm font-semibold text-secondary">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
              <Link to="/professional-signup" className="self-start flex items-center gap-2 bg-secondary text-background font-semibold text-sm px-7 py-3.5 rounded-xl hover:bg-secondary/90 active:scale-95 transition-all mt-2">
                Join as Professional
                <Store className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
