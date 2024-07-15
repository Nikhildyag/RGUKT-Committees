import mongoose, { Schema } from 'mongoose'
const ComplaintSchema = new Schema({
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
  branch: {
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
})
export const Complaint = mongoose.model('Complaint', ComplaintSchema)
