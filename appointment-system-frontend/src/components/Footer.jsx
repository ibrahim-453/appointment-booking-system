import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  const quickLinks = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/services" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  const services = [
    { title: "Online Appointment Booking", path: "/services/booking" },
    { title: "Provider Directory", path: "/services/directory" },
    { title: "Appointment Management", path: "/services/management" },
    { title: "Schedule Reminders", path: "/services/reminders" },
    { title: "Customer Support", path: "/services/support" },
  ];

  const company = [
    { title: "About Us", path: "/about" },
    { title: "Careers", path: "/careers" },
    { title: "Blog", path: "/blog" },
    { title: "Press", path: "/press" },
    { title: "Partners", path: "/partners" },
  ];

  const support = [
    { title: "Help Center", path: "/help" },
    { title: "FAQs", path: "/faqs" },
    { title: "Contact Support", path: "/contact" },
    { title: "Privacy Policy", path: "/privacy" },
    { title: "Terms of Service", path: "/terms" },
  ];

  const socials = [
    {
      name: "Facebook",
      path: "https://www.facebook.com",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      name: "X",
      path: "https://www.x.com",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      path: "https://www.linkedin.com",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      path: "https://www.instagram.com",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="w-full bg-background border-t-2 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                className="h-10 w-10 object-contain"
                src="/logo.png"
                alt="BookWell"
              />
              <span className="text-lg font-semibold text-secondary">
                BookWell
              </span>
            </div>
            <p className="text-sm text-secondary/55 leading-relaxed">
              BookWell helps you schedule and manage appointments quickly and
              easily. Find available time slots, book instantly, and keep all
              your appointments organized in one place.
            </p>
            <div className="flex items-center gap-2 mt-1">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.path}
                  aria-label={s.name}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-primary/20 text-secondary/50 hover:border-primary hover:text-primary transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10 sm:col-span-1 lg:col-span-2">
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-secondary">Company</h4>
              <ul className="flex flex-col gap-2">
                {company.map((item) => (
                  <li key={item.title}>
                    <Link
                      to={item.path}
                      className="text-sm text-secondary/55 hover:text-primary transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-secondary">Services</h4>
              <ul className="flex flex-col gap-2">
                {services.map((item) => (
                  <li key={item.title}>
                    <Link
                      to={item.path}
                      className="text-sm text-secondary/55 hover:text-primary transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-secondary">Support</h4>
              <ul className="flex flex-col gap-2">
                {support.map((item) => (
                  <li key={item.title}>
                    <Link
                      to={item.path}
                      className="text-sm text-secondary/55 hover:text-primary transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-secondary">
                Contact Information
              </h4>
              <ul className="flex flex-col gap-2">
                <li className="flex items-start gap-2 text-sm text-secondary/55">
                  <span className="text-primary mt-0.5">✉</span>
                  support@bookwell.com
                </li>
                <li className="flex items-start gap-2 text-sm text-secondary/55">
                  <span className="text-primary mt-0.5">📞</span>
                  +1 (234) 567-890
                </li>
                <li className="flex items-start gap-2 text-sm text-secondary/55">
                  <span className="text-primary mt-0.5">📍</span>
                  123 Business Avenue, City, Country
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-primary/10 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-secondary/45">
            © 2026 BookWell. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-xs text-secondary/45 hover:text-primary transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
