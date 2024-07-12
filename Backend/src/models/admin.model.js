import mongoose, { mongo, Schema } from "mongoose";
import bcrypt from "bcrypt";
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
    fullName: {
      type: String,
      required: true,
      lowercase: true,
    },
    department: {
      type: String,
      required: true,
    },
    iscentral: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

adminSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

adminSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export const Admin = mongoose.model("Admin", adminSchema);
