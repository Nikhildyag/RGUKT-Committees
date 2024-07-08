import { Admin } from "../models/admin.model.js";

const createAdmin = async (req, res) => {
  try {
    //getting the inputs from the user
    const { email, password, fullName, department, isCentral } = req.body;

    //checking if all the fields are there or not
    if (!email || !password || !fullName || !department) {
      return res
        .status(400)
        .json({ message: "All fields which are marked * are must" });
    }

    //checking if iscentral is given or not
    // if (!isCentral) isCentral = false;
    //console.log(isCentral);

    //checking if the admin already registered or not
    const existedAdmin = await Admin.findOne({ email });
    if (existedAdmin)
      return res.status(400).json({ message: "you are already registered" });

    //creating the new admin
    const newAdmin = await Admin.create({
      fullName,
      email,
      password,
      department,
      isCentral,
    });

    console.log(newAdmin);
    //checking if the new Admin is created or not
    const createdAdmin = await Admin.findById(newAdmin._id).select("-password");
    if (!createdAdmin) {
      return res
        .status(500)
        .json({ message: "Something went wrong while creating the admin" });
    }

    //all are correct
    return res
      .status(200)
      .json({ message: "New admin registered successfully" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: "All fields are required" });
  const admin = await Admin.findOne({ email });
  if (!admin)
    return res.status(400).json({ message: "you are not authorized" });
  const isPasswordValid = await admin.isPasswordCorrect(password);
  if (!isPasswordValid)
    return res.status(400).json({ message: "your password is not valid" });
  return res.status(200).json({ user: admin });
};
export { createAdmin, loginAdmin };
