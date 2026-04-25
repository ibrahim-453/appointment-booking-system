import { useNavigate } from 'react-router-dom';
import React, { useContext } from "react";
import logo from "../assets/images/light_mode_logo.png";
import loginImg from "../assets/images/login.png";
import { useForm } from "react-hook-form";
import usePasswordToggle from "../hooks/ShowPassword";
import { Eye, EyeOff } from "lucide-react";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../validations/authSchema";
import GoogleButton from "../components/GoogleButton";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm({ resolver: yupResolver(loginSchema), mode: "onChange" });
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()
  const { isVisible, togglePassword } = usePasswordToggle();
  const onSubmit = async (data) => {
    try {
      await login(data);
      navigate("/");
      reset();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <div className="w-full min-h-screen bg-background flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12 overflow-y-auto">
        <div className="flex items-center gap-3 mb-8">
          <img src={logo} alt="BookWell" className="h-10 w-10 object-contain" />
          <span className="text-xl font-bold text-secondary">Book Well</span>
        </div>
        <div className="mb-7">
          <h1 className="text-2xl sm:text-3xl font-bold text-secondary mb-1">
            Welcome Back
          </h1>
          <p className="text-sm text-secondary/60">
            Login to continue booking or managing your appointments
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
            <label className="text-sm font-medium text-secondary">Email</label>
            <input
              type="email"
              placeholder="name@example.com"
              className={`w-full border rounded-xl px-4 py-3 text-sm text-secondary placeholder:text-secondary/35 outline-none focus:border-primary transition-colors bg-background ${
                errors.email ? "border-red-400" : "border-secondary/15"
              }`}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>
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
                {...register("password", { required: true })}
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
              <p className="text-xs text-red-500">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting || !isValid}
            className="w-full bg-primary text-white font-semibold text-sm py-3.5 rounded-xl hover:bg-primary/90 active:scale-95 transition-all mt-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100"
          >
            {isSubmitting ? "Logging In..." : "Login"}
          </button>
        </form>
        <p className="text-sm text-secondary/60 text-center mt-6">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-primary font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img
          src={loginImg}
          alt="BookWell team"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/30 to-transparent" />
        </div>
      </div>
  );
}

export default Login;
