import React, { useState } from "react";
import noImage from "../assets/images/no_dp.jpg";
import {
  Star,
  DollarSign,
  MapPin,
  Share2,
  User,
  BookOpen,
  Award,
  Clock,
  ChevronDown,
  ChevronUp,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const education = [
  { degree: "MD from New York University School of Medicine", year: "2005" },
  { degree: "B.Sc. Medical at UCSF Medical Center", year: "2001" },
  { degree: "Intern at Stanford Hospital for Public Health", year: "1999" },
];

const expertise = [
  "Internal Medicine",
  "Preventive Care",
  "Family Medicine",
  "Clinical Leadership",
];

const reviews = [
  {
    name: "John Doe",
    avatar: null,
    rating: 5,
    time: "2 days ago",
    text: "I visited and a Primary Message told me this doctor is patient everything. Highly recommend to visit his consulting rooms for your problems.",
  },
  {
    name: "Alice Tan",
    avatar: null,
    rating: 4,
    time: "1 week ago",
    text: "Amazing experience. The clinic was very calm and the booking process through Book Well was smooth and seamless.",
  },
];

const policies = [
  {
    icon: <CheckCircle className="w-4 h-4 text-primary" />,
    title: "Cancellation",
    desc: "Free cancellation up to 24h before the appointment.",
  },
  {
    icon: <CheckCircle className="w-4 h-4 text-primary" />,
    title: "Rescheduling",
    desc: "Reschedule up to 3 times at no extra charge.",
  },
  {
    icon: <CheckCircle className="w-4 h-4 text-primary" />,
    title: "Online Visits",
    desc: "Available for virtual consultations via video call.",
  },
];

const dates = [
  { day: "Mon", date: 14 },
  { day: "Tue", date: 15 },
  { day: "Wed", date: 16 },
  { day: "Thu", date: 17 },
];

const timeSlots = ["10:00 AM", "11:30 AM", "02:00 PM", "04:00 PM"];

function StarRow({ rating, size = "w-4 h-4" }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`${size} shrink-0 ${
            i < rating
              ? "text-yellow-400 fill-yellow-400"
              : "text-secondary/20 fill-transparent"
          }`}
        />
      ))}
    </div>
  );
}

function ViewDetail() {
  const [selectedDate, setSelectedDate] = useState(14);
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  const [expandReviews, setExpandReviews] = useState(false);

  return (
    <div className="w-full min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 flex flex-col gap-5">
            <div className="bg-white border border-secondary/10 rounded-2xl p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="relative shrink-0 self-start">
                  <img
                    src={noImage}
                    alt="Dr. Sarah Jenkins"
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border border-secondary/10"
                  />
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white" />
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h1 className="text-2xl font-bold text-secondary">
                        Dr. Sarah Jenkins
                      </h1>
                      <span className="bg-green-100 text-green-600 text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                        Available Today
                      </span>
                    </div>
                    <p className="text-sm text-primary font-medium mt-0.5">
                      General Practitioner · Specialist at Preventive Medicine
                      Inc.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <StarRow rating={5} />
                      <span className="text-xs text-secondary/50">
                        (128 reviews)
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-secondary/60">
                      <MapPin className="w-3.5 h-3.5" />
                      San Francisco, CA
                    </div>
                    <div className="flex items-center gap-1 text-sm text-primary font-semibold">
                      <DollarSign className="w-3.5 h-3.5" />
                      85/hr
                    </div>
                  </div>
                    <div>
                      <button className="flex items-center gap-2 border border-secondary/15 rounded-xl px-4 py-2 text-sm font-medium text-secondary hover:border-primary hover:text-primary transition-colors">
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                    </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-secondary/10 rounded-2xl p-5 sm:p-6 flex flex-col gap-4">
              <h2 className="text-base font-bold text-secondary">
                About Dr. Jenkins
              </h2>
              <p className="text-sm text-secondary/65 leading-relaxed">
                With over 15 years of experience in primary care, Dr. Sarah
                Jenkins is dedicated to providing comprehensive healthcare with
                a focus on preventive wellness. She believes in building
                long-term relationships with her patients to ensure personalised
                and effective healthcare plans.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-1">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-sm font-semibold text-secondary mb-1">
                    <BookOpen className="w-4 h-4 text-primary" />
                    Education & Experience
                  </div>
                  {education.map((e) => (
                    <li key={e.degree} className="text-sm text-secondary/50 list-disc ml-4">
                      {e.degree} <span className="text-xs text-secondary/50">({e.year})</span>
                    </li>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-sm font-semibold text-secondary mb-1">
                    <Award className="w-4 h-4 text-primary" />
                    Expertise Areas
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {expertise.map((ex) => (
                      <span
                        key={ex}
                        className="bg-primary/8 text-primary text-xs font-medium px-3 py-1 rounded-full border border-primary/15"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-secondary/10 rounded-2xl p-5 sm:p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-bold text-secondary">
                  Patient Reviews
                </h2>
                <button className="text-xs font-semibold text-primary hover:underline">
                  Write a Review
                </button>
              </div>

              <div className="flex items-center gap-5">
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-bold text-secondary">4</span>
                  <StarRow rating={4} />
                  <span className="text-xs text-secondary/45 mt-1">
                    128 Total Reviews
                  </span>
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  {[5, 4, 3, 2, 1].map((r) => (
                    <div key={r} className="flex items-center gap-2">
                      <span className="text-xs text-secondary/50 w-3">{r}</span>
                      <div className="flex-1 h-1.5 bg-secondary/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-yellow-400 rounded-full"
                          style={{
                            width:
                              r === 5
                                ? "90%"
                                : r === 4
                                  ? "60%"
                                  : r === 3
                                    ? "35%"
                                    : r === 2                                      
                                    ? "15%"
                                    : "2%",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {(expandReviews ? reviews : reviews.slice(0, 2)).map((rv) => (
                  <div
                    key={rv.name}
                    className="flex flex-col gap-2 border-b border-secondary/8 pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <User className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-secondary">
                            {rv.name}
                          </p>
                          <StarRow rating={rv.rating} size="w-3 h-3" />
                        </div>
                      </div>
                      <span className="text-xs text-secondary/40">
                        {rv.time}
                      </span>
                    </div>
                    <p className="text-sm text-secondary/60 leading-relaxed">
                      {rv.text}
                    </p>
                  </div>
                ))}
              </div>

              {reviews.length > 2 && (
                <button
                  onClick={() => setExpandReviews(!expandReviews)}
                  className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline self-start"
                >
                  {expandReviews ? (
                    <>
                      <ChevronUp className="w-3.5 h-3.5" /> Show less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-3.5 h-3.5" /> View all reviews
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          <div className="lg:col-span-1 flex flex-col gap-5">
            <div className="bg-white border border-secondary/10 rounded-2xl p-5 flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-secondary">$85</span>
                  <span className="text-sm text-secondary/50"> / session</span>
                </div>
                <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">
                  4 Available
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold text-secondary flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-primary" />
                  Select Date
                </p>
                <div className="grid grid-cols-4 gap-2">
                  {dates.map((d) => (
                    <button
                      key={d.date}
                      onClick={() => setSelectedDate(d.date)}
                      className={`flex flex-col items-center py-2.5 rounded-xl border text-sm transition-colors ${
                        selectedDate === d.date
                          ? "border-primary bg-primary text-white"
                          : "border-secondary/15 text-secondary hover:border-primary/40"
                      }`}
                    >
                      <span className="text-[11px] font-medium opacity-70">
                        {d.day}
                      </span>
                      <span className="font-bold">{d.date}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold text-secondary flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-primary" />
                  Select Time
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={`py-2.5 rounded-xl border text-xs font-medium transition-colors ${
                        selectedTime === t
                          ? "border-primary bg-primary text-white"
                          : "border-secondary/15 text-secondary hover:border-primary/40"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2 border-t border-secondary/10 pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-secondary/55">Consultation fee</span>
                  <span className="font-semibold text-secondary">$85.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-secondary/55">Platform fee</span>
                  <span className="font-semibold text-secondary">$3.00</span>
                </div>
                <div className="flex justify-between text-sm font-bold border-t border-secondary/10 pt-2 mt-1">
                  <span className="text-secondary">Total</span>
                  <span className="text-secondary">$88.00</span>
                </div>
              </div>

              <Link to="/book-appointment" className="w-full text-center bg-primary text-white font-semibold text-sm py-3.5 rounded-xl hover:bg-primary/90 active:scale-95 transition-all">
                Book Appointment →
              </Link>
            </div>

            <div className="bg-white border border-secondary/10 rounded-2xl p-5 flex flex-col gap-4">
              <h3 className="text-sm font-bold text-secondary">
                Booking Policies
              </h3>
              {policies.map((p) => (
                <div key={p.title} className="flex items-start gap-3">
                  <div className="shrink-0 mt-0.5">{p.icon}</div>
                  <div>
                    <p className="text-xs font-semibold text-secondary">
                      {p.title}
                    </p>
                    <p className="text-xs text-secondary/55 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewDetail;
