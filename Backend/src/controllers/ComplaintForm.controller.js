import { Complaint } from "../models/complaintForm.model.js";

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

export { createComplaint };
