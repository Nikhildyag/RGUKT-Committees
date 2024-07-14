import { Message } from "../models/messages.model.js";

const getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    if (!messages)
      return res.status(400).json({ message: "No messages found" });
    // console.log(messages);
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
};

const createMessage = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const { _id, department, committee_name } = req.member;
    const newMessage = await Message.create({
      message,
      sender_id: _id,
      department,
      committee_name,
    });
    if (!newMessage) {
      return res.status(500).json({ message: "unable to send message" });
    }
    return res.status(200).json({ newMessage });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export { getMessages, createMessage };
