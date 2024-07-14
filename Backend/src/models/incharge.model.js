import mongoose, { mongo, Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const InchargeSchema = new Schema(
  {
    username: {
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
    committee_name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "Incharge",
    },
  },
  { timestamps: true }
);

InchargeSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

InchargeSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

InchargeSchema.methods.generateAccessToken = function () {
  try {
    const token = jwt.sign(
      {
        _id: this._id,
        username: this.username,
        committee_name: this.committee_name,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: 432000,
      }
    );
    return token;
  } catch (error) {
    console.log("Error generating access token:", error);
  }
};

export const Incharge = mongoose.model("Incharge", InchargeSchema);
