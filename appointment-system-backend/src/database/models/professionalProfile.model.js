import mongoose from "mongoose";

const slotSchema = new mongoose.Schema(
  {
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    isBooked: {
      type: Boolean,
      default: false,
    },
  },
  { _id: false },
);

const availabilitySchema = new mongoose.Schema(
  {
    day: {
      type: String,
      enum: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      required: true,
    },
    slots: [slotSchema],
  },
  { _id: false },
);

const credentialSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    issuingOrganization: {
      type: String,
      default: null,
    },
    year: {
      type: Number,
      default: null,
    },
  },
  { _id: false },
);

const professionalProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    businessName: {
      type: String,
      default: null,
    },
    serviceCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      default: null,
    },
    experience: {
      type: String,
      default: null,
    },
    headline: {
      type: String,
      default: null,
    },
    about: {
      type: String,
      default: null,
    },
    location: {
      city: {
        type: String,
        default: null,
      },
      address: {
        type: String,
        default: null,
      },
    },
    fee: {
      type: Number,
      default: null,
    },
    credentials: [credentialSchema],
    availability: [availabilitySchema],

    averageRating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    totalReviews: {
      type: Number,
      default: 0,
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const ProfessionalProfile = mongoose.model(
  "ProfessionalProfile",
  professionalProfileSchema,
);
export default ProfessionalProfile;
