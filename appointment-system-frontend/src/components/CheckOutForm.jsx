import React, { useMemo, useState } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Controller, useForm } from "react-hook-form";
import { Loader2, Lock } from "lucide-react";
import Select from "react-select";
import countryList from "react-select-country-list";

const stripeStyle = {
  style: {
    base: {
      fontSize: "14px",
      color: "#143F5D",
      fontFamily: "inherit",
      "::placeholder": {
        color: "#143F5D66",
      },
    },
    invalid: {
      color: "#ef4444",
    },
  },
};

function CheckOutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState(null);

  const countryOptions = useMemo(() => {
    return countryList()
      .getData()
      .map((country) => ({
        value: country.value,
        label: country.label,
      }));
  }, []);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    if (!stripe || !elements) return;

    setCardError(null);

    const cardNumberElement = elements.getElement(CardNumberElement);

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: cardNumberElement,
      billing_details: {
        name: data.name,
        email: data.email,
        address: {
          line1: data.address,
          city: data.city,
          state: data.state,
          postal_code: data.postal_code,
          country: data.country,
        },
      },
    });

    if (error) {
      setCardError(error.message);
    } else {
      console.log(paymentMethod.id);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-6 rounded-sm bg-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Secure Checkout
            </span>
          </div>
          <h1 className="text-2xl font-bold text-secondary">Payment Details</h1>
          <p className="text-sm text-secondary/50 mt-1">
            Your information is encrypted and secure.
          </p>
        </div>
        <div className="bg-white rounded-2xl border border-secondary/10 shadow-sm shadow-secondary/5 p-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="block text-sm font-semibold text-secondary mb-1.5">
                  Full Name
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 rounded-lg border border-secondary/20
                bg-white text-secondary placeholder-secondary/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition duration-200 text-sm"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label className="block text-sm font-semibold text-secondary mb-1.5">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-secondary/20
                bg-white text-secondary placeholder-secondary/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition duration-200 text-sm"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="block text-sm font-semibold text-secondary mb-1.5">
                Address
              </label>
              <input
                {...register("address", { required: "Address is required" })}
                type="text"
                placeholder="123 Main Street"
                className="w-full px-4 py-2.5 rounded-lg border border-secondary/20
                bg-white text-secondary placeholder-secondary/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition duration-200 text-sm"
              />
              {errors.address && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.address.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="block text-sm font-semibold text-secondary mb-1.5">
                  City
                </label>
                <input
                  {...register("city", { required: "City is required" })}
                  type="text"
                  placeholder="New York"
                  className="w-full px-4 py-2.5 rounded-lg border border-secondary/20
                bg-white text-secondary placeholder-secondary/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition duration-200 text-sm"
                />
                {errors.city && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.city.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label className="block text-sm font-semibold text-secondary mb-1.5">
                  State
                </label>
                <input
                  {...register("state", { required: "State is required" })}
                  type="text"
                  placeholder="NY"
                  className="w-full px-4 py-2.5 rounded-lg border border-secondary/20
                bg-white text-secondary placeholder-secondary/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition duration-200 text-sm"
                />
                {errors.state && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.state.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="block text-sm font-semibold text-secondary mb-1.5">
                  Postal Code
                </label>
                <input
                  {...register("postal_code", {
                    required: "Postal code is required",
                  })}
                  type="text"
                  placeholder="10001"
                  className="w-full px-4 py-2.5 rounded-lg border border-secondary/20 bg-white text-secondary placeholder-secondary/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition duration-200 text-sm"
                />
                {errors.postal_code && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.postal_code.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label className="block text-sm font-semibold text-secondary mb-1.5">
                  Country
                </label>

                <Controller
                  name="country"
                  control={control}
                  rules={{ required: "Country is required" }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={countryOptions}
                      placeholder="Select country"
                      className="w-full px-4 py-2.5 rounded-lg border border-secondary/20 bg-white text-secondary placeholder-secondary/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition duration-200 text-sm"
                      classNamePrefix="react-select"
                      value={countryOptions.find(c => c.value === field.value)}
                      onChange={(selected) => field.onChange(selected.value)}
                    />
                  )}
                />

                {errors.country && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.country.message}
                  </p>
                )}
              </div>
            </div>

            <div className="border-t border-secondary/10 my-1" />

            <div className="flex flex-col gap-1">
              <label className="block text-sm font-semibold text-secondary mb-1.5">
                Card Number
              </label>
              <div
                className="w-full px-4 py-2.5 rounded-lg border border-secondary/20
                bg-white focus-within:ring-2 focus-within:ring-primary/50 focus-within:border-primary transition duration-200 text-sm"
              >
                <CardNumberElement options={stripeStyle} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="block text-sm font-semibold text-secondary mb-1.5">
                  Expiry Date
                </label>
                <div
                  className="w-full px-4 py-2.5 rounded-lg border border-secondary/20
                bg-white focus-within:ring-2 focus-within:ring-primary/50 focus-within:border-primary transition duration-200 text-sm"
                >
                  <CardExpiryElement options={stripeStyle} />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="block text-sm font-semibold text-secondary mb-1.5">
                  CVC
                </label>
                <div
                  className="w-full px-4 py-2.5 rounded-lg border border-secondary/20
                bg-white focus-within:ring-2 focus-within:ring-primary/50 focus-within:border-primary transition duration-200 text-sm"
                >
                  <CardCvcElement options={stripeStyle} />
                </div>
              </div>
            </div>

            {cardError && (
              <p className="text-red-500 text-xs mt-1">{cardError}</p>
            )}

            <button
              type="submit"
              disabled={!stripe || isSubmitting}
              className="mt-2 w-full py-3 px-6 rounded-lg font-semibold text-sm text-white
                bg-primary hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed
                transition-colors duration-200 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  Pay Now
                </>
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-secondary/40 mt-5">
          Payments are processed securely via Stripe. We never store your card
          details.
        </p>
      </div>
    </div>
  );
}

export default CheckOutForm;
