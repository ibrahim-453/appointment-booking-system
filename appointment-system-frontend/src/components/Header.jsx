import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    { name: "Medical Appointment", path: "/services/medical" },
    { name: "Car Inspection", path: "/services/car-inspection" },
    { name: "Salon & Barber", path: "/services/salon" },
    { name: "Legal Consultation", path: "/services/legal" },
    { name: "Fitness & Wellness", path: "/services/fitness" },
  ];

  useEffect(() => {
    function handleClickOutside(e) {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-background border-b-2 border-accent relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <img
            className="object-contain w-10 h-10"
            src="/logo.png"
            alt="Book Well"
          />
          <h3 className="text-xl font-bold text-secondary leading-none">
            Book Well
          </h3>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <Link
            to="/"
            className="px-4 py-1.5 text-sm font-semibold text-secondary hover:bg-secondary hover:text-white transition-all duration-200 rounded-md"
          >
            Home
          </Link>

          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => setServicesOpen((prev) => !prev)}
              className=" cursor-pointer flex items-center gap-1 px-4 py-1.5 text-sm font-semibold text-secondary hover:bg-secondary hover:text-white transition-all duration-200 rounded-md"
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-56 bg-background border border-primary/20 rounded-2xl shadow-lg p-2 z-50">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-secondary/5 transition-colors"
                  >
                    <span className="text-sm text-secondary">
                      {service.name}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="px-4 py-1.5 text-sm font-semibold text-secondary hover:bg-secondary hover:text-white transition-all duration-200 rounded-md"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Link
            to="/login"
            className="px-4 py-1.5 text-sm font-semibold text-secondary hover:bg-secondary hover:text-white transition-all duration-200 rounded-md"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-1.5 text-sm font-semibold bg-secondary text-white hover:bg-primary transition-all duration-200 rounded-md"
          >
            Sign Up
          </Link>
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-secondary hover:bg-secondary/5 transition-colors"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-accent/30 px-4 pb-4 pt-2 flex flex-col gap-1">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="px-3 py-2.5 rounded-xl text-sm font-semibold text-secondary hover:bg-secondary/5 transition-colors"
          >
            Home
          </Link>

          <div>
            <button
              onClick={() => setMobileServicesOpen((prev) => !prev)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-secondary hover:bg-secondary/5 transition-colors"
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {mobileServicesOpen && (
              <div className="pl-3 mt-1 flex flex-col gap-0.5">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-secondary hover:bg-secondary/5 transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2.5 rounded-xl text-sm font-semibold text-secondary hover:bg-secondary/5 transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <div className="flex flex-col gap-2 mt-2 pt-3 border-t border-accent/20">
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center px-4 py-2.5 rounded-xl text-sm font-semibold text-secondary border border-secondary/20 hover:bg-secondary/5 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center px-4 py-2.5 rounded-xl text-sm font-semibold bg-secondary text-white hover:bg-primary transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
