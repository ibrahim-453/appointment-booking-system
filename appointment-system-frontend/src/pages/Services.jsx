import {
  Clock,
  DollarSign,
  MapPin,
  Menu,
  Monitor,
  Search,
  Star,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";

function Services() {
  const categories = [
    "Medical",
    "Car Inspection",
    "Salon",
    "Fitness",
    "Legal Consultation",
  ];

  const profiles = [
    {
      name: "Dr. Sarah Johnson",
      profession: "Cardiologist",
      category: "Medical",
      rating: 4,
      reviewCount: 128,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      price: "$150/hour",
      next: "Today: 2:30 p.m",
      isAvailable: true,
      isOnline: true,
      inPerson: true,
      description:
        "Experienced cardiologist with over 15 years of practice. Specializes in preventive care and advanced cardiac treatments.",
    },
    {
      name: "Dr. Ahmed Khan",
      profession: "Dermatologist",
      category: "Medical",
      rating: 5,
      reviewCount: 210,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      price: "$100/hour",
      next: "Tomorrow: 11:00 a.m",
      isAvailable: true,
      isOnline: false,
      inPerson: false,
      description:
        "Skin specialist focusing on acne, allergies, and cosmetic dermatology with modern laser treatments.",
    },
    {
      name: "Dr. Emily Carter",
      profession: "Pediatrician",
      category: "Medical",
      rating: 4,
      reviewCount: 95,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      price: "$120/hour",
      next: "Today: 5:00 p.m",
      isAvailable: true,
      isOnline: true,
      inPerson: false,
      description:
        "Dedicated pediatrician providing comprehensive care for infants, children, and adolescents.",
    },
    {
      name: "Dr. Hassan Ali",
      profession: "Orthopedic Surgeon",
      category: "Medical",
      rating: 5,
      reviewCount: 180,
      image: "https://randomuser.me/api/portraits/men/76.jpg",
      price: "$200/hour",
      next: "Monday: 10:30 a.m",
      isAvailable: false,
      isOnline: false,
      inPerson: true,
      description:
        "Expert in bone, joint, and spine treatments with a focus on sports injuries and rehabilitation.",
    },
    {
      name: "Dr. Sophia Williams",
      profession: "Gynecologist",
      category: "Medical",
      rating: 4,
      reviewCount: 150,
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      price: "$130/hour",
      next: "Today: 1:00 p.m",
      isAvailable: true,
      isOnline: true,
      inPerson: true,
      description:
        "Specialist in women's health, prenatal care, and reproductive health with a patient-first approach.",
    },
    {
      name: "Dr. Daniel Lee",
      profession: "Neurologist",
      category: "Medical",
      rating: 5,
      reviewCount: 220,
      image: "https://randomuser.me/api/portraits/men/54.jpg",
      price: "$180/hour",
      next: "Tomorrow: 3:45 p.m",
      isAvailable: true,
      isOnline: false,
      inPerson: true,
      description:
        "Neurologist treating disorders of the brain and nervous system, including migraines and epilepsy.",
    },
  ];

  const [active, setActive] = useState(null);
  const [hover, setHover] = useState(0);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({
    categories: "",
    priceMin: "",
    priceMax: "",
    rating: 0,
    availability: "",
    serviceType: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 50;

  const clearAllFilters = () =>
    setFilters({
      categories: "",
      priceMin: "",
      priceMax: "",
      rating: 0,
      availability: "",
      serviceType: "",
    });

  return (
    <div className="w-full min-h-screen bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="w-full px-4 sm:px-8 py-2">
          <div className="relative">
            <div className="absolute top-2 left-3 text-secondary/40">
              <Search className="w-6 h-6" />
            </div>
            <input
              className="w-full px-10 py-2 rounded-full bg-white text-secondary text-sm font-medium border border-secondary/30 outline-none focus:border-secondary placeholder:text-secondary/40"
              type="search"
              placeholder="Search for Professionals"
            />
          </div>
        </div>

        <div className="hidden lg:flex gap-4 px-8 py-4 flex-wrap">
          {categories.map((item, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`px-5 py-1 text-sm font-medium rounded-full transition-colors duration-300 cursor-pointer border ${
                active === index
                  ? "border-none bg-primary/10 text-primary"
                  : "bg-white border-secondary/30 text-secondary/70"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex lg:hidden items-center justify-between px-4 py-3">
          <button
            onClick={() => setFiltersOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-white text-secondary text-sm font-medium"
          >
            <Menu className="w-4 h-4" />
            Filters
          </button>
        </div>

        {filtersOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setFiltersOpen(false)}
            />
            <div className="absolute left-0 top-0 h-full w-[300px] bg-white shadow-xl overflow-y-auto">
              <div className="flex items-center justify-between px-5 py-4 border-b border-secondary/10">
                <span className="text-base font-bold text-secondary">
                  Filters
                </span>
                <button onClick={() => setFiltersOpen(false)}>
                  <X className="w-5 h-5 text-secondary/60" />
                </button>
              </div>
              <div className="px-5 py-5">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <h2 className="text-base font-bold text-secondary">
                      Filters
                    </h2>
                    <button
                      onClick={clearAllFilters}
                      className="text-xs font-semibold text-primary hover:underline"
                    >
                      Clear All
                    </button>
                  </div>

                  <div className="flex flex-col gap-2.5 lg:hidden">
                    <p className="text-sm font-semibold text-secondary">
                      Category
                    </p>
                    <select
                      className="w-full border border-secondary/15 rounded-xl px-3 py-2 text-sm text-secondary outline-none focus:border-primary transition-colors bg-background"
                      value={filters.categories}
                      onChange={(e) =>
                        setFilters((prev) => ({
                          ...prev,
                          categories: e.target.value,
                        }))
                      }
                    >
                      <option value="">All Categories</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="h-px bg-secondary/10" />

                  <div className="flex flex-col gap-2.5">
                    <p className="text-sm font-semibold text-secondary">
                      Price Range
                    </p>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        inputMode="numeric"
                        className="w-full border border-secondary/15 rounded-xl px-3 py-2 text-sm text-secondary placeholder:text-secondary/35 outline-none focus:border-primary transition-colors bg-background"
                        placeholder="$Min"
                        value={filters.priceMin}
                        onChange={(e) =>
                          setFilters((prev) => ({
                            ...prev,
                            priceMin: e.target.value,
                          }))
                        }
                      />
                      <span className="text-secondary/40 text-sm shrink-0">
                        —
                      </span>
                      <input
                        type="text"
                        inputMode="numeric"
                        className="w-full border border-secondary/15 rounded-xl px-3 py-2 text-sm text-secondary placeholder:text-secondary/35 outline-none focus:border-primary transition-colors bg-background"
                        placeholder="$Max"
                        value={filters.priceMax}
                        onChange={(e) =>
                          setFilters((prev) => ({
                            ...prev,
                            priceMax: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>

                  <div className="h-px bg-secondary/10" />

                  <div className="flex flex-col gap-2.5">
                    <p className="text-sm font-semibold text-secondary">
                      Ratings
                    </p>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          onClick={() =>
                            setFilters((prev) => ({
                              ...prev,
                              rating: prev.rating === star ? 0 : star,
                            }))
                          }
                          onMouseEnter={() => setHover(star)}
                          onMouseLeave={() => setHover(0)}
                          className={`w-5 h-5 cursor-pointer transition-colors ${
                            star <= (hover || filters.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-transparent text-secondary/25"
                          }`}
                        />
                      ))}
                    </div>
                    {filters.rating > 0 && (
                      <p className="text-xs text-secondary/50">
                        {filters.rating} star{filters.rating > 1 ? "s" : ""}{" "}
                        {filters.rating === 5 ? "" : "& above"}
                      </p>
                    )}
                  </div>

                  <div className="h-px bg-secondary/10" />

                  <div className="flex flex-col gap-2.5">
                    <p className="text-sm font-semibold text-secondary">
                      Availability
                    </p>
                    {[
                      { value: "today", label: "Today" },
                      { value: "thisweek", label: "This Week" },
                      { value: "weekends", label: "Weekends" },
                    ].map((opt) => (
                      <label
                        key={opt.value}
                        className="flex items-center gap-2.5 cursor-pointer group"
                      >
                        <input
                          type="radio"
                          name="availability"
                          value={opt.value}
                          checked={filters.availability === opt.value}
                          onChange={(e) =>
                            setFilters((prev) => ({
                              ...prev,
                              availability: e.target.value,
                            }))
                          }
                          className="w-4 h-4 accent-primary cursor-pointer"
                        />
                        <span className="text-sm text-secondary/70 group-hover:text-secondary transition-colors">
                          {opt.label}
                        </span>
                      </label>
                    ))}
                    {filters.availability && (
                      <button
                        onClick={() =>
                          setFilters((prev) => ({ ...prev, availability: "" }))
                        }
                        className="text-xs text-primary hover:underline self-start"
                      >
                        Clear
                      </button>
                    )}
                  </div>

                  <div className="h-px bg-secondary/10" />

                  <div className="flex flex-col gap-2.5">
                    <p className="text-sm font-semibold text-secondary">
                      Service Type
                    </p>
                    {[
                      { value: "in-person", label: "In-person" },
                      { value: "online", label: "Online / Virtual" },
                    ].map((opt) => (
                      <label
                        key={opt.value}
                        className="flex items-center gap-2.5 cursor-pointer group"
                      >
                        <input
                          type="radio"
                          name="serviceType"
                          value={opt.value}
                          checked={filters.serviceType === opt.value}
                          onChange={(e) =>
                            setFilters((prev) => ({
                              ...prev,
                              serviceType: e.target.value,
                            }))
                          }
                          className="w-4 h-4 accent-primary cursor-pointer"
                        />
                        <span className="text-sm text-secondary/70 group-hover:text-secondary transition-colors">
                          {opt.label}
                        </span>
                      </label>
                    ))}
                    {filters.serviceType && (
                      <button
                        onClick={() =>
                          setFilters((prev) => ({ ...prev, serviceType: "" }))
                        }
                        className="text-xs text-primary hover:underline self-start"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="px-5 pb-6">
                <button
                  onClick={() => setFiltersOpen(false)}
                  className="w-full bg-primary text-white text-sm font-semibold py-3 rounded-xl"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-6 px-4 sm:px-8 py-4">
          <div className="hidden lg:flex w-[260px] shrink-0 flex-col gap-5 bg-white border border-secondary/10 rounded-2xl px-5 py-5 h-fit">
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-bold text-secondary">Filters</h2>
                <button
                  onClick={clearAllFilters}
                  className="text-xs font-semibold text-primary hover:underline"
                >
                  Clear All
                </button>
              </div>

              <div className="flex flex-col gap-2.5 lg:hidden">
                <p className="text-sm font-semibold text-secondary">Category</p>
                <select
                  className="w-full border border-secondary/15 rounded-xl px-3 py-2 text-sm text-secondary outline-none focus:border-primary transition-colors bg-background"
                  value={filters.categories}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      categories: e.target.value,
                    }))
                  }
                >
                  <option value="">All Categories</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="h-px bg-secondary/10" />

              <div className="flex flex-col gap-2.5">
                <p className="text-sm font-semibold text-secondary">
                  Price Range
                </p>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    inputMode="numeric"
                    className="w-full border border-secondary/15 rounded-xl px-3 py-2 text-sm text-secondary placeholder:text-secondary/35 outline-none focus:border-primary transition-colors bg-background"
                    placeholder="$Min"
                    value={filters.priceMin}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        priceMin: e.target.value,
                      }))
                    }
                  />
                  <span className="text-secondary/40 text-sm shrink-0">—</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    className="w-full border border-secondary/15 rounded-xl px-3 py-2 text-sm text-secondary placeholder:text-secondary/35 outline-none focus:border-primary transition-colors bg-background"
                    placeholder="$Max"
                    value={filters.priceMax}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        priceMax: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>

              <div className="h-px bg-secondary/10" />

              <div className="flex flex-col gap-2.5">
                <p className="text-sm font-semibold text-secondary">Ratings</p>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      onClick={() =>
                        setFilters((prev) => ({
                          ...prev,
                          rating: prev.rating === star ? 0 : star,
                        }))
                      }
                      onMouseEnter={() => setHover(star)}
                      onMouseLeave={() => setHover(0)}
                      className={`w-5 h-5 cursor-pointer transition-colors ${
                        star <= (hover || filters.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-transparent text-secondary/25"
                      }`}
                    />
                  ))}
                </div>
                {filters.rating > 0 && (
                  <p className="text-xs text-secondary/50">
                    {filters.rating} star{filters.rating > 1 ? "s" : ""}{" "}
                    {filters.rating === 5 ? "" : "& above"}
                  </p>
                )}
              </div>

              <div className="h-px bg-secondary/10" />

              <div className="flex flex-col gap-2.5">
                <p className="text-sm font-semibold text-secondary">
                  Availability
                </p>
                {[
                  { value: "today", label: "Today" },
                  { value: "thisweek", label: "This Week" },
                  { value: "weekends", label: "Weekends" },
                ].map((opt) => (
                  <label
                    key={opt.value}
                    className="flex items-center gap-2.5 cursor-pointer group"
                  >
                    <input
                      type="radio"
                      name="availability"
                      value={opt.value}
                      checked={filters.availability === opt.value}
                      onChange={(e) =>
                        setFilters((prev) => ({
                          ...prev,
                          availability: e.target.value,
                        }))
                      }
                      className="w-4 h-4 accent-primary cursor-pointer"
                    />
                    <span className="text-sm text-secondary/70 group-hover:text-secondary transition-colors">
                      {opt.label}
                    </span>
                  </label>
                ))}
                {filters.availability && (
                  <button
                    onClick={() =>
                      setFilters((prev) => ({ ...prev, availability: "" }))
                    }
                    className="text-xs text-primary hover:underline self-start"
                  >
                    Clear
                  </button>
                )}
              </div>

              <div className="h-px bg-secondary/10" />

              <div className="flex flex-col gap-2.5">
                <p className="text-sm font-semibold text-secondary">
                  Service Type
                </p>
                {[
                  { value: "in-person", label: "In-person" },
                  { value: "online", label: "Online / Virtual" },
                ].map((opt) => (
                  <label
                    key={opt.value}
                    className="flex items-center gap-2.5 cursor-pointer group"
                  >
                    <input
                      type="radio"
                      name="serviceType"
                      value={opt.value}
                      checked={filters.serviceType === opt.value}
                      onChange={(e) =>
                        setFilters((prev) => ({
                          ...prev,
                          serviceType: e.target.value,
                        }))
                      }
                      className="w-4 h-4 accent-primary cursor-pointer"
                    />
                    <span className="text-sm text-secondary/70 group-hover:text-secondary transition-colors">
                      {opt.label}
                    </span>
                  </label>
                ))}
                {filters.serviceType && (
                  <button
                    onClick={() =>
                      setFilters((prev) => ({ ...prev, serviceType: "" }))
                    }
                    className="text-xs text-primary hover:underline self-start"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="py-5 flex flex-col gap-5">
              <div className="flex items-center justify-between gap-4">
                <h1 className="text-lg font-bold text-secondary">
                  {profiles.length} Professionals Available
                </h1>
                <div className="flex items-center gap-2">
                  <label className="text-sm text-secondary/50 shrink-0 hidden sm:block">
                    Sort by:
                  </label>
                  <select className="border border-secondary/15 rounded-xl px-3 py-2 text-sm text-secondary outline-none focus:border-primary transition-colors bg-background">
                    {["Recommended", "Newest", "Highest Rated"].map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <main className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                {profiles.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-secondary/10 rounded-2xl overflow-hidden flex flex-col"
                  >
                    <div className="p-5 flex flex-col gap-4 flex-1">
                      <div className="flex items-start gap-4">
                        <div className="relative shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-14 h-14 rounded-full object-cover border border-secondary/10"
                          />
                          <span
                            className={`absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full border-2 border-white ${
                              item.isAvailable ? "bg-green-500" : "bg-gray-300"
                            }`}
                          />
                        </div>

                        <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                          <h2 className="text-base font-bold text-secondary truncate">
                            {item.name}
                          </h2>
                          <p className="text-xs font-medium text-primary">
                            {item.profession}
                          </p>
                          <div className="flex items-center gap-1 mt-0.5 flex-wrap">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3.5 h-3.5 shrink-0 ${
                                  i < item.rating
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-secondary/20 fill-transparent"
                                }`}
                              />
                            ))}
                            <span className="text-xs text-secondary/50 ml-0.5">
                              ({item.reviewCount} reviews)
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-sm text-secondary/60 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        <span className="flex items-center gap-1.5 border border-secondary/15 rounded-lg px-3 py-1 text-xs text-secondary/70">
                          <DollarSign className="w-3 h-3" />
                          {item.price}
                        </span>

                        {item.next && (
                          <span className="flex items-center gap-1.5 border border-secondary/15 rounded-lg px-3 py-1 text-xs text-secondary/70">
                            <Clock className="w-3 h-3 text-green-500" />
                            {item.next}
                          </span>
                        )}

                        {item.isAvailable ? (
                          <>
                            {item.isOnline && (
                              <span className="flex items-center gap-1.5 border border-secondary/15 rounded-lg px-3 py-1 text-xs text-secondary/70">
                                <Monitor className="w-3 h-3 text-primary" />
                                Online Available
                              </span>
                            )}
                            {item.inPerson && (
                              <span className="flex items-center gap-1.5 border border-secondary/15 rounded-lg px-3 py-1 text-xs text-secondary/70">
                                <MapPin className="w-3 h-3 text-secondary/50" />
                                In-person
                              </span>
                            )}
                          </>
                        ) : (
                          <span className="flex items-center gap-1.5 border border-red-200 rounded-lg px-3 py-1 text-xs text-red-400">
                            Not Available
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex border-t border-secondary/10">
                      <Link
                        to="/book-appointment"
                        className="flex-1 bg-primary text-white text-sm font-semibold py-3.5 text-center hover:bg-primary/90 transition-colors"
                      >
                        Book Appointment
                      </Link>
                      <Link
                        to="/service-detail"
                        className="flex-1 text-secondary text-sm font-semibold py-3.5 text-center hover:bg-secondary/5 transition-colors border-l border-secondary/10"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </main>
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
              maxVisible={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
