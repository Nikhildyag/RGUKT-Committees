import mongoose, { mongo, Schema } from "mongoose";
const adminSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
      lowercase: true,
      index: true,
    },
    department: {
      type: String,
      required: true,
      unique: true,
    },
    iscentral: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Admin = mongoose.model("Admin", adminSchema);
