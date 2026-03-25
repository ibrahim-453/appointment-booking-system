import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import contactImg from "../assets/contact.png";
import {
  CalendarCheck,
  CreditCard,
  UserCheck,
  HelpCircle,
  Mail,
  Phone,
  Clock,
  ChevronRight,
  ChevronDown,
  Send,
  Zap,
} from "lucide-react";

const categories = [
  {
    icon: <CalendarCheck className="w-5 h-5 text-primary" />,
    title: "Booking Support",
    desc: "Reschedule, cancel or modify your appointments.",
  },
  {
    icon: <CreditCard className="w-5 h-5 text-primary" />,
    title: "Payment Support",
    desc: "Invoices, refunds, and billing inquiries.",
  },
  {
    icon: <UserCheck className="w-5 h-5 text-primary" />,
    title: "Professional Support",
    desc: "Help for practitioners and medical staff.",
  },
  {
    icon: <HelpCircle className="w-5 h-5 text-primary" />,
    title: "General Inquiry",
    desc: "Anything else you'd like to ask us.",
  },
];

const quickLinks = [
  "Frequently Asked Questions",
  "Comprehensive Help Center",
  "Step-by-Step Booking Guide",
];

const faqs = [
  {
    q: "How do I book an appointment?",
    a: "Simply search for your preferred service or provider on our homepage, select an available time slot, and confirm your details. You'll receive an instant confirmation email.",
  },
  {
    q: "Can I cancel or reschedule?",
    a: "Yes, you can cancel or reschedule any appointment up to 24 hours in advance from your dashboard with no extra charges.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit/debit cards, PayPal, and various local payment options depending on your region.",
  },
  {
    q: "Is my personal data secure?",
    a: "Absolutely. We use end-to-end encryption and follow strict data protection standards to keep your information safe.",
  },
];

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-secondary/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-secondary text-secondary hover:text-white transition-colors"
      >
        <span className="text-sm font-semibold">{faq.q}</span>
        <ChevronDown
          className={`w-4 h-4 shrink-0 ml-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-4 bg-white">
          <p className="text-sm text-secondary leading-relaxed">{faq.a}</p>
        </div>
      )}
    </div>
  );
}

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="w-full min-h-screen bg-background flex flex-col">
      <section className="w-full bg-white border-b border-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex flex-col gap-6 w-full lg:w-1/2">
              <p className="text-xs font-semibold tracking-widest text-primary uppercase">
                Support Center
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-secondary leading-tight">
                Get in Touch <br />
                <span className="text-primary">with Us</span>
              </h1>
              <p className="text-sm text-secondary/60 leading-relaxed max-w-md">
                Have questions or need help with your appointments? Our team is
                dedicated to providing you with the best experience possible.
              </p>
              <button className="self-start bg-primary text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 active:scale-95 transition-all">
                Browse Help Center
              </button>
            </div>
            <div className="relative w-full lg:w-1/2 flex justify-center">
              <div className="w-full max-w-md rounded-2xl overflow-hidden">
                <img
                  src={contactImg}
                  alt="Support agent"
                  className="w-full h-72 sm:h-80 object-cover"
                />
              </div>
              <div className="absolute bottom-4 right-4 sm:right-8 bg-background rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-secondary">
                    Fast Response
                  </p>
                  <p className="text-[11px] text-secondary/50">
                    Usually under 2 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-2">
              Choose a Category
            </h2>
            <p className="text-sm text-secondary/55">
              Find specialized help for your specific needs
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((cat) => (
              <button
                key={cat.title}
                className="flex flex-col gap-3 bg-white border border-secondary/10 rounded-xl px-5 py-6 text-left hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  {cat.icon}
                </div>
                <p className="text-sm font-bold text-secondary">{cat.title}</p>
                <p className="text-xs text-secondary/55 leading-relaxed">
                  {cat.desc}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-16 bg-secondary/5 border-t border-b border-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 bg-white border border-secondary/10 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-secondary mb-6">
                Send us a Message
              </h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex flex-col gap-1.5 flex-1">
                    <label className="text-sm font-medium text-secondary">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className={`w-full border rounded-xl px-4 py-3 text-sm text-secondary placeholder:text-secondary/35 outline-none focus:border-primary transition-colors bg-background ${
                        errors.name ? "border-red-400" : "border-secondary/15"
                      }`}
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5 flex-1">
                    <label className="text-sm font-medium text-secondary">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className={`w-full border rounded-xl px-4 py-3 text-sm text-secondary placeholder:text-secondary/35 outline-none focus:border-primary transition-colors bg-background ${
                        errors.email ? "border-red-400" : "border-secondary/15"
                      }`}
                      {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-secondary">
                    Subject
                  </label>
                  <select
                    className={`w-full border rounded-xl px-4 py-3 text-sm text-secondary outline-none focus:border-primary transition-colors bg-background ${
                      errors.subject ? "border-red-400" : "border-secondary/15"
                    }`}
                    {...register("subject", { required: true })}
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Booking Support">Booking Support</option>
                    <option value="Payment Support">Payment Support</option>
                    <option value="Professional Support">
                      Professional Support
                    </option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-secondary">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="How can we help you today?"
                    className={`w-full border rounded-xl px-4 py-3 text-sm text-secondary placeholder:text-secondary/35 outline-none focus:border-primary transition-colors bg-background resize-none ${
                      errors.message ? "border-red-400" : "border-secondary/15"
                    }`}
                    {...register("message", {
                      required: "Message is required",
                    })}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !isValid}
                  className="self-start flex items-center gap-2 bg-primary text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 active:scale-95 transition-all disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            <div className="flex flex-col gap-5 w-full lg:w-80 shrink-0">
              <div className="bg-secondary rounded-2xl p-6 flex flex-col gap-5">
                <h3 className="text-base font-bold text-background">
                  Contact Information
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-background" />
                    </div>
                    <div>
                      <p className="text-xs text-background/50 mb-0.5">
                        Email Support
                      </p>
                      <p className="text-sm font-semibold text-background">
                        support@bookwell.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-background" />
                    </div>
                    <div>
                      <p className="text-xs text-background/50 mb-0.5">
                        Call Us
                      </p>
                      <p className="text-sm font-semibold text-background">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-background" />
                    </div>
                    <div>
                      <p className="text-xs text-background/50 mb-0.5">
                        Business Hours
                      </p>
                      <p className="text-sm font-semibold text-background">
                        Mon - Fri, 9AM - 6PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-secondary/10 rounded-2xl p-5 flex flex-col gap-3">
                <h3 className="text-sm font-bold text-secondary">
                  Quick Help Links
                </h3>
                {quickLinks.map((link) => (
                  <Link
                    key={link}
                    to="/"
                    className="flex items-center justify-between text-sm text-secondary/60 hover:text-primary transition-colors py-1 border-b border-secondary/5 last:border-0"
                  >
                    {link}
                    <ChevronRight className="w-4 h-4 shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-accent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Quick Answers
            </h2>
            <p className="text-sm text-white/80">
              Check if your question has already been answered
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} faq={faq} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
