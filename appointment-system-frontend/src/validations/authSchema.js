import * as yup from "yup";

const signupSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  phone: yup.string().matches(/^[0-9]{11}$/, "Phone number must be 11 digits").optional(),
});

const professionalSignUpSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  phone: yup.number().optional(),
  businessName: yup
    .string()
    .min(2, "Too short")
    .max(100, "Too long")
    .optional(),
  serviceCategory: yup.string().required("Service category is required"),
  experience: yup
    .string()
    .optional(),
});

const loginSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export {
    signupSchema,
    professionalSignUpSchema,
    loginSchema
}