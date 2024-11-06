import mongoose, { Schema, Document } from "mongoose";
import { IAuthentication } from "@/resources/authentication/authentication-interface";

// Define the IconUrl schema
const IconUrlSchema = new Schema({
  imageUrl: { type: String, required: true },
  thumbnailUrls: [{ type: String }],
});

// Define the Icon schema
const IconSchema = new Schema({
  name: { type: String, required: true },
  url: { type: IconUrlSchema, required: true },
});

const blockedBySchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  role: { type: String, required: true },
  status: { type: Boolean, required: true },
  isDeleted: { type: Boolean, required: true },
});

// Define the IAuthentication schema
const AuthenticationSchema = new Schema(
  {
    email: { type: String },
    phone: { type: String },
    role: { type: String, required: true },
    user_id: { type: String, required: true },
    user_name: { type: String },
    icon: { type: IconSchema },
    user_location: { type: String, required: true },
    user_country: { type: String, required: true },
    user_region: { type: String, required: true },
    user_city: { type: String, required: true },
    timezone: { type: String, required: true },
    referral_code: { type: String, required: true },
    is_active: { type: Boolean, required: true, default: true },
    is_deleted: { type: Boolean, required: true, default: false },
    last_login: { type: Date },
    is_blocked: { type: Boolean, required: true, default: false },
    blocked_by: { type: blockedBySchema },
    created_by: { type: String, required: true },
    updated_by: { type: String, required: true },
    status: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

// Create and export the model
const Authentication = mongoose.model<IAuthentication>(
  "Authentication",
  AuthenticationSchema
);

export { Authentication, AuthenticationSchema };
