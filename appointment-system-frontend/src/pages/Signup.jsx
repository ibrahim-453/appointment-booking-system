import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../validations/authSchema";
import { Link } from "react-router-dom";
import logo from "../assets/images/light_mode_logo.png";
import sideImg from "../assets/images/signup.png";
import {
  Eye,
  EyeOff,
  ShieldCheck,
  Zap,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import GoogleButton from "../components/GoogleButton";
import usePasswordToggle from "../hooks/ShowPassword";
import useConfirmPasswordToggle from "../hooks/ShowConfirmPassword";

function Signup() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm({ resolver: yupResolver(signupSchema), mode:"onChange"});

  const { isVisible, togglePassword } = usePasswordToggle()
  const { showPassword, toggleConfirmPassword } = useConfirmPasswordToggle()

  const password = watch("password", "");
  const { score, label, barColor, textColor } = getPasswordStrength(password);

  const highlights = [
  {
    icon: <ShieldCheck className="w-5 h-5 text-primary" />,
    title: "Secure",
    desc: "End-to-end encrypted bookings",
  },
  {
    icon: <Zap className="w-5 h-5 text-primary" />,
    title: "Fast",
    desc: "Book in under 60 seconds",
  },
];
function getPasswordStrength(password) {
  if (!password) return { score: 0, label: "", barColor: "" };
  let score = 0;
  if (password.length >= 6) score++;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  const map = {
   1: { 
            label: "Week",
            barColor: "bg-red-500",
            textColor: "text-red-500"
        },
        2: {
            label: "Fair",
            barColor: "bg-orange-500",
            textColor: "text-orange-500"
        },
        3: {
            label: "Good",
            barColor: "bg-yellow-500",
            textColor: "text-yellow-500"
        },
        4: {
            label: "Strong",
            barColor: "bg-green-400",
            textColor: "text-green-400"
        },
        5: {
            label: "Very Strong",
            barColor: "bg-green-500",
            textColor: "text-green-500"
        }
  };
  return { score, ...(map[score] || {}) };
}
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="w-full min-h-screen bg-background flex flex-col lg:flex-row">
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img
          src={sideImg}
          alt="BookWell team"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/30 to-transparent" />
        <div className="relative z-10 flex flex-col justify-end px-12 pb-14 gap-8 w-full">
          <div>
            <h2 className="text-3xl font-bold text-white leading-snug mb-3">
              Simplify your scheduling experience.
            </h2>
            <p className="text-white/80 text-sm leading-relaxed max-w-sm">
              Join thousands of professionals and clients who trust Book Well
              for their daily appointments.
            </p>
          </div>
          <div className="flex gap-4">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="flex-1 bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-4 flex flex-col gap-2"
              >
                {h.icon}
                <p className="text-white font-semibold text-sm">{h.title}</p>
                <p className="text-white/70 text-xs">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12 overflow-y-auto">
        <div className="flex items-center gap-3 mb-8">
          <img src={logo} alt="BookWell" className="h-10 w-10 object-contain" />
          <span className="text-xl font-bold text-secondary">Book Well</span>
        </div>
        <div className="mb-7">
          <h1 className="text-2xl sm:text-3xl font-bold text-secondary mb-1">
            Create Your Account
          </h1>
          <p className="text-sm text-secondary/60">
            Start booking appointments or offer your services in minutes.
          </p>
        </div>
        <div className="mb-6">
          <GoogleButton />
        </div>
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-secondary/10" />
          <span className="text-xs text-secondary/40 font-medium tracking-widest">
            OR
          </span>
          <div className="flex-1 h-px bg-secondary/10" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-secondary">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className={`w-full border rounded-xl px-4 py-3 text-sm text-secondary placeholder:text-secondary/35 outline-none focus:border-primary transition-colors bg-background ${
                errors.name ? "border-red-400" : "border-secondary/15"
              }`}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-secondary">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              className={`w-full border rounded-xl px-4 py-3 text-sm text-secondary placeholder:text-secondary/35 outline-none focus:border-primary transition-colors bg-background ${
                errors.email ? "border-red-400" : "border-secondary/15"
              }`}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col gap-1.5 flex-1">
              <label className="text-sm font-medium text-secondary">
                Password
              </label>
              <div className="relative">
                <input
                  type={isVisible ? "text" : "password"}
                  placeholder="••••••••"
                  className={`w-full border rounded-xl px-4 py-3 pr-10 text-sm text-secondary placeholder:text-secondary/35 outline-none focus:border-primary transition-colors bg-background ${
                    errors.password ? "border-red-400" : "border-secondary/15"
                  }`}
                  {...register("password")}
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute right-3 top-3.5 text-secondary/40 hover:text-secondary"
                >
                  {isVisible ? (
                    <Eye className="w-4 h-4" />
                  ) : (
                    <EyeOff className="w-4 h-4" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}
              {password.length > 0 && (
                <div className="flex flex-col gap-1">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full ${
                          i <= score ? barColor : "bg-secondary/15"
                        }`}
                      />
                    ))}
                  </div>
                  <p
                    className={`text-[11px] font-semibold tracking-widest ${textColor}`}
                  >
                    {label}
                  </p>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-1.5 flex-1">
              <label className="text-sm font-medium text-secondary">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className={`w-full border rounded-xl px-4 py-3 pr-10 text-sm text-secondary placeholder:text-secondary/35 outline-none focus:border-primary transition-colors bg-background ${
                    errors.confirmPassword
                      ? "border-red-400"
                      : "border-secondary/15"
                  }`}
                  {...register("confirmPassword")}
                />
                <button
                  type="button"
                  onClick={toggleConfirmPassword}
                  className="absolute right-3 top-3.5 text-secondary/40 hover:text-secondary transition-colors"
                >
                  {showPassword ? (
                    <Eye className="w-4 h-4" />
                  ) : (
                    <EyeOff className="w-4 h-4" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-xs text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-secondary">
              Phone Number{" "}
              <span className="text-secondary/40 font-normal">(Optional)</span>
            </label>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              className={`w-full border rounded-xl px-4 py-3 text-sm text-secondary placeholder:text-secondary/35 outline-none focus:border-primary transition-colors bg-background ${
                errors.phone ? "border-red-400" : "border-secondary/15"
              }`}
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-xs text-red-500">{errors.phone.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting || !isValid}
            className="w-full bg-primary text-white font-semibold text-sm py-3.5 rounded-xl hover:bg-primary/90 active:scale-95 transition-all mt-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100"
          >
            {isSubmitting ? "Signing up..." : "Sign Up"}
          </button>
        </form>
        <div className="flex items-start gap-4 bg-secondary/5 border border-secondary/10 rounded-xl px-5 py-4 mt-6">
          <div className="w-9 h-9 bg-primary/15 rounded-lg flex items-center justify-center shrink-0">
            <Briefcase className="w-5 h-5 text-primary" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-secondary">
              Join as a Professional
            </p>
            <p className="text-xs text-secondary/60 leading-relaxed">
              Offer your services, manage bookings, and grow your business on
              Book Well.
            </p>
            <Link
              to="/pro-signup"
              className="flex items-center gap-1 text-xs font-semibold text-primary mt-1 hover:underline"
            >
              Become a Partner <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
        <p className="text-sm text-secondary/60 text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary font-semibold hover:underline"
          >
            Log In
          </Link>
        </p>
        <p className="text-[11px] text-secondary/35 text-center mt-4 uppercase tracking-wide">
          By signing up, you agree to our{" "}
          <Link to="/terms" className="underline hover:text-secondary/60">
            Terms of Service
          </Link>{" "}
          &{" "}
          <Link to="/privacy" className="underline hover:text-secondary/60">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
