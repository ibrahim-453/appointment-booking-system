import joi from "joi";

const registerProfessionalSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  businessName: joi.string().optional(),
  serviceCategory: joi.string().optional(),
  experience: joi.string().optional(),
  phone: joi
    .string()
    .pattern(/^[0-9]{11}$/)
    .optional(),
});

const completeProfileSchema = joi.object({
  businessName: joi.string().optional(),
  category: joi.string().optional(),
  experience: joi.string().optional(),
  about: joi.string().max(1000).required(),
  credential: joi
    .array()
    .items(
      joi.object({
        title: joi.string().required(),
        issuingOrganization: joi.string().required(),
        year: joi
          .number()
          .integer()
          .min(1950)
          .max(new Date().getFullYear())
          .required(),
      }),
    )
    .optional(),
  location: joi
    .object({
      city: joi.string().required(),
      address: joi.string().required(),
    })
    .required(),
  headline: joi.string().max(100).required(),
  fee: joi.number().positive().required(),
  currency: joi.string().default("PKR"),
  availability: joi
    .array()
    .items(
      joi.object({
        day: joi
          .string()
          .valid(
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          )
          .required(),
        slots: joi
          .array()
          .items(
            joi.object({
              startTime: joi
                .string()
                .pattern(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)
                .required(),
              endTime: joi
                .string()
                .pattern(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)
                .required(),
              isBooked: joi.bool().default(false),
            }),
          )
          .min(1)
          .required(),
      }),
    )
    .min(1)
    .required(),
});
export { registerProfessionalSchema, completeProfileSchema };
