import { Message } from "../models/messages.model.js";

const getMessages = async (req, res) => {
  try {
      const messages = await Message.find();
      console.log(messages)
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
    
};

const createMessage = async (req, res) => {
    console.log(req)
    const {  message } = req.body;
    console.log(message)
  const newMessage = await Message.create({  message });
  try {
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save message' });
  }
};

export {
  getMessages,
  createMessage,
};
