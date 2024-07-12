import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const departmentSchema = new Schema(
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
      default: "student Name",
    },
    department: {
      type: String,
      required: true,
    },
    committee_name: {
      type: String,
      required: true,
    },
    Id_number: {
      type: String,
      default: "B1XXXXX",
    },
    role: {
      type: String,
      enum: ["central", "department"],
      default: "department",
    },
  },
  { timestamps: true }
);

departmentSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

departmentSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

departmentSchema.methods.generateAccessToken = function () {
  try {
    const token = jwt.sign(
      {
        _id: this._id,
        username: this.username,
        department: this.department,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: 10,
      }
    );
    return token;
  } catch (error) {
    console.log("Error generating access token:", error);
  }
};

export const Department = mongoose.model("Department", departmentSchema);
