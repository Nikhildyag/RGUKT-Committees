import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema(
  {
    sender_id: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    committee_name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Message = mongoose.model("Message", messageSchema);
