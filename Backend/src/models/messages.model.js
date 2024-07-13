import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema({
  sender_id: {
    type: String,
    required: true,
  },
  message: {
    type: String,
  },
}, { timestamps: true });

export const Message= mongoose.model('Message', messageSchema);
