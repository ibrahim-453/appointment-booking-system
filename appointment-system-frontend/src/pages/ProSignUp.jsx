import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import logo from "../assets/images/light_mode_logo.png";
import sideImg from "../assets/images/prosignup.png";
import { Link, useNavigate } from "react-router-dom";
import { professionalSignUpSchema } from "../validations/authSchema";
import usePasswordToggle from "../hooks/ShowPassword";
import useConfirmPasswordToggle from "../hooks/ShowConfirmPassword";
import { ChevronDown, Eye, EyeOff } from "lucide-react";
import { professionalRegisterApi } from "../api/authApi";
import GoogleButton from "../components/GoogleButton";
function ProSignUp() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm({ resolver: yupResolver(professionalSignUpSchema), mode: "onChange" });
  const navigate = useNavigate();
  const getPasswordStrength = (password) => {
    let score = 0;
    if (password.length > 6) score++;
    if (password.length > 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    const map = {
      1: {
        label: "Weak",
        barColor: "bg-red-500",
        textColor: "text-red-500",
      },
      2: {
        label: "Fair",
        barColor: "bg-orange-500",
        textColor: "text-orange-500",
      },
      3: {
        label: "Good",
        barColor: "bg-yellow-500",
        textColor: "text-yellow-500",
      },
      4: {
        label: "Strong",
        barColor: "bg-green-400",
        textColor: "text-green-400",
      },
      5: {
        label: "Very Strong",
        barColor: "bg-green-500",
        textColor: "text-green-500",
      },
    };
    return { score, ...(map[score] || {}) };
  };

  const { isVisible, togglePassword } = usePasswordToggle();
  const { showPassword, toggleConfirmPassword } = useConfirmPasswordToggle();
  const password = watch("password", "");
  const { score, label, barColor, textColor } = getPasswordStrength(password);

  const onSubmit = async (data) => {
    try {
      const res = await professionalRegisterApi(data)
      if(res && res.data && res.data.success){
        reset()
        navigate("/login")
      }
    } catch (error) {
       console.log("Something went wrong. Please Register again", error.message);
       reset()
    }
  };

  return (
    <div className="w-full min-h-screen bg-background flex">
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12 overflow-y-auto">
        <div className="flex items-center gap-3 mb-8">
          <img src={logo} alt="BookWell" className="h-10 w-10 object-contain" />
          <span className="text-xl font-bold text-secondary">Book Well</span>
        </div>
        <div className="mb-7">
          <h1 className="text-2xl sm:text-3xl font-bold text-secondary mb-1">
            Create Your Professional Account
          </h1>
          <p className="text-sm text-secondary/60">
            Join Book Well as a Professional to offer your services
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
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-secondary">
              Business Name
            </label>
            <input
              type="text"
              placeholder="Business Name"
              className={`w-full border rounded-xl px-4 py-3 text-sm text-secondary placeholder:text-secondary/35 outline-none focus:border-primary transition-colors bg-background ${
                errors.businessName ? "border-red-400" : "border-secondary/15"
              }`}
              {...register("businessName")}
            />
            {errors.businessName && (
              <p className="text-xs text-red-500">
                {errors.businessName.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-secondary">
              Service Category
            </label>

            <div className="relative">
              <select
                id="service"
                {...register("serviceCategory")}
                className={`w-full appearance-none rounded-xl px-4 py-3 pr-10 text-sm 
              bg-background text-secondary border outline-none 
                focus:ring-2 focus:ring-primary/20 focus:border-primary
                transition-all duration-200
                ${errors.serviceCategory ? "border-red-400" : "border-secondary/15"}`}
              >
                <option value="">Select Service</option>
                <option value="doctor">Doctor</option>
                <option value="carInspection">Car Inspection</option>
                <option value="fitness">Health & Fitness</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-secondary/50">
                <ChevronDown className="w-4 h-4 " />
              </div>
            </div>
            {errors.serviceCategory && (
              <p className="text-xs text-red-500">
                {errors.serviceCategory.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-secondary">
              Experience
            </label>
            <div className="relative">
              <select
                id="experience"
                {...register("experience")}
                className={`w-full appearance-none rounded-xl px-4 py-3 pr-10 text-sm 
              bg-background text-secondary border outline-none 
                focus:ring-2 focus:ring-primary/20 focus:border-primary
                transition-all duration-200
                ${errors.experience ? "border-red-400" : "border-secondary/15"}`}
              >
                <option value="">Select Experience</option>
                <option value="1+">1+ Years</option>
                <option value="3+">3+ Years</option>
                <option value="5+">5+ Years</option>
              </select>

              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-secondary/50">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
            {errors.experience && (
              <p className="text-xs text-red-500">
                {errors.experience.message}
              </p>
            )}
          </div>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-15">
            <div className="flex flex-col gap-1.5 flex-1">
              <label className="text-sm font-medium text-secondary">
                Password
              </label>
              <div className="relative">
                <input
                  type={isVisible ? "text" : "password"}
                  placeholder="••••••••"
                  className={`w-full border rounded-xl px-4 py-3 text-secondary placeholder:text-secondary/30 outline-none focus:border-primary ${errors.password ? "border-red-400" : "border-secondary/15"}`}
                  {...register("password")}
                />
                <button
                  type="button"
                  className="absolute right-3 top-3.5 text-secondary/40 hover:text-secondary"
                  onClick={togglePassword}
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
                        className={`h-1 flex-1 rounded-full ${i <= score ? barColor : "bg-secondary/15"}`}
                      ></div>
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
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-secondary">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className={`w-full border rounded-xl px-4 py-3 text-secondary placeholder:text-secondary/30 outline-none focus:border-primary ${errors.confirmPassword ? "border-red-400" : "border-secondary/15"}`}
                  {...register("confirmPassword")}
                />
                <button
                  type="button"
                  className="absolute right-3 top-3.5 text-secondary/40 hover:text-secondary"
                  onClick={toggleConfirmPassword}
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
              className={`w-full border rounded-xl px-4 py-3 text-secondary placeholder:text-secondary/30 outline-none focus:border-primary ${errors.phone ? "border-red-400" : "border-secondary/15"}`}
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
            {isSubmitting ? "Creating Account..." : "Sign Up"}
          </button>
        </form>
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
      <div className="hidden lg:w-1/2 lg:flex relative overflow-hidden">
        <img
          src={sideImg}
          alt="Professional Book Well Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/40 to-transparent" />
      </div>
    </div>
  );
}

export default ProSignUp;
