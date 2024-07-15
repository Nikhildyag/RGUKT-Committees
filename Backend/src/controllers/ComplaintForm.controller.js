import { Complaint } from "../models/complaintForm.model.js";

//creating the complaint
const createComplaint = async (req, res) => {
  try {
    const {
      committee_name,
      fullName,
      studentId,
      year,
      department,
      category,
      description,
    } = req.body;
    if (!committee_name || !year || !department || !category || !description) {
      return res.status(400).json({ message: "Fields marked * are required" });
    }
    const complaint = await Complaint.create({
      committee_name,
      fullName,
      studentId,
      year,
      department,
      category,
      description,
    });
    if (!complaint) {
      return res
        .status(400)
        .json({ message: "Something went wrong while submitting" });
    }
    return res
      .status(200)
      .json({ message: "complaint submmitted successfully", complaint });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

//fetch the complaints for department
const getComplaintsforDepartment = async (req, res) => {
  try {
    const { department, committee_name } = req.member;
    if (!department || !committee_name) {
      return res.status(400).json({ message: "you are not logged in" });
    }
    const complaints = await Complaint.find({ department, committee_name });
    if (!complaints) {
      return res.status(400).json({ message: "No complaints found" });
    }
    return res.status(200).json({ complaints });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getComplaintsForCentral = async (req, res) => {
  try {
    const { committee_name } = req.member;
    if (!committee_name) {
      return res.status(400).json({ message: "you are not logged in" });
    }
    const complaints = await Complaint.find({ committee_name });
    if (!complaints) {
      return res.status(400).json({ message: "No complaints found" });
    }
    return res.status(200).json({ complaints });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export { createComplaint, getComplaintsforDepartment, getComplaintsForCentral };
