import { Feedback } from "../models/feedback.model.js";

const createFeedback = async (req, res) => {
  try {
    const { committee_name, department, year, description } = req.body;
    if (!committee_name || !department || !year || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const feedback = await Feedback.create({
      committee_name,
      department,
      year,
      description,
    });
    if (!feedback) {
      return res
        .status(500)
        .json({ message: "Something went wrong which submitting" });
    }
    return res
      .status(200)
      .json({ message: "submitted successfully", feedback });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

//fetch the feedbacks for department
const getFeedbacksForDepartment = async (req, res) => {
  //console.log(req.member);
  try {
    const { department, committee_name } = req.member;

    if (!department || !committee_name) {
      return res.status(400).json({ message: "you are not logged in" });
    }
    const feebacks = await Feedback.find({ department, committee_name });
    if (!feebacks) {
      return res.status(400).json({ message: "No feebacks found" });
    }
    feebacks.reverse();
    return res.status(200).json({ feebacks });
  } catch (error) {
    // console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

//fetch the feedbacks for central
const getFeedbacksForCentral = async (req, res) => {
  try {
    const { committee_name } = req.member;
    if (!committee_name) {
      return res.status(400).json({ message: "you are not logged in" });
    }
    const feebacks = await Feedback.find({ committee_name });
    if (!feebacks) {
      return res.status(400).json({ message: "No feebacks found" });
    }
    feebacks.reverse();
    return res.status(200).json({ feebacks });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export { createFeedback, getFeedbacksForDepartment, getFeedbacksForCentral };
