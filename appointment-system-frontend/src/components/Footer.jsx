import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/dark_mode_logo.png";

function Footer() {
  const quickLinks = [
    { title: "About Us", path: "/about" },
    { title: "Our Services", path: "/services" },
    { title: "Pricing Plans", path: "/packages" },
    { title: "Become a Pro", path: "/signup" },
  ];

  const support = [
    { title: "Help Center", path: "/help" },
    { title: "Privacy Policy", path: "/privacy" },
    { title: "Terms of Service", path: "/terms" },
    { title: "Contact Support", path: "/contact" },
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
    <footer className="w-full bg-secondary border-t-2 border-b-2 border-dashed border-primary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                className="object-contain w-10 h-10"
                src={logo}
                alt="Book Well Logo"
              />
              <span className="text-xl font-bold text-background">
                Book Well
              </span>
            </div>
            <p className="text-sm text-background/50 leading-relaxed">
              The world's most intuitive appointment booking platform connecting
              clients with top-tier professionals seamlessly.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-background">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.path}
                    className="text-sm text-background/50 hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-background">Support</h4>
            <ul className="flex flex-col gap-3">
              {support.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.path}
                    className="text-sm text-background/50 hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-background">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3 text-sm text-background/50">
                <svg
                  className="w-4 h-4 shrink-0 text-background/50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                support@bookwell.com
              </li>
              <li className="flex items-center gap-3 text-sm text-background/50">
                <svg
                  className="w-4 h-4 shrink-0 text-background/50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
                </svg>
                +1 (555) 123-4567
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-1">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.path}
                  aria-label={s.name}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-background/30 text-background/50 hover:border-primary hover:text-primary transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-dashed border-primary/20 pt-6">
          <p className="text-xs text-center text-background/40">
            &copy; 2026 Book Well. All rights reserved. Built with love for
            modern scheduling.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
