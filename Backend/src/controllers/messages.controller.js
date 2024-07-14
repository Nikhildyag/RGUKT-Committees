import { Central } from "../models/centralMember.model.js";
import { Department } from "../models/departmentCommittee.model.js";
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

const getDepartmentMessages = async (req, res) => {
  try {
    console.log(req);
    const { _id } = req.member;
    if (!_id) return res.status(400).json({ message: "you are not logged in" });
    const departmentMember = await Department.findById(_id);
    if (!departmentMember)
      return res.status(400).json("you are not authorized");
    const { department } = departmentMember;
    const messages = await Message.find({ department });
    if (!messages)
      return res.status(400).json({ message: "Messages are not found" });
    return res.status(200).json({ messages });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getCentralMessages = async (req, res) => {
  try {
    const { _id } = req.member;
    if (!_id) return res.status(400).json({ message: "you are not logged in" });
    const centralMember = await Central.findById(_id);
    if (!centralMember) return res.status(400).json("you are not authorized");
    const { committee_name } = centralMember;
    const messages = await Message.find({ committee_name });
    if (!messages)
      return res.status(400).json({ message: "Messages are not found" });
    return res.status(200).json({ messages });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export {
  getMessages,
  createMessage,
  getDepartmentMessages,
  getCentralMessages,
};
