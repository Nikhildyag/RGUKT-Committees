import mongoose, { Schema } from "mongoose";
const ComplaintSchema = new Schema({
  committee_name: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
  },
  studentId: {
    type: String,
  },
  year: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "forwarded", "resolved"],
    default: "pending",
  },
});
export const Complaint = mongoose.model("Complaint", ComplaintSchema);
