import { Incharge } from "../models/incharge.model.js";

// const committees = [
//   "academic",
//   "amenities",
//   "greening",
//   "career",
//   "cultural",
//   "oppurtunities",
//   "environment",
//   "external",
//   "grievance",
//   "health",
//   "hostel",
//   "mess",
//   "photography",
//   "placement",
//   "safety",
//   "social",
//   "sports",
//   "innovation",
//   "excellence",
// ]; // List of departments

// const usersData = committees.flatMap((committee) =>
//   Array.from({ length: 1 }, (_, index) => ({
//     username: `${committee}incharge`,
//     password: "rgukt123",
//     committee_name: committee,
//     fullName: "Faculty Name",
//     department: "Department Name",
//   }))
// );

// const createBulk = async (req, res) => {
//   try {
//     for (let userData of usersData) {
//       // Assuming User.create() is a method to create users in your model
//       await Incharge.create(userData);
//       console.log(`Created user: ${userData.username}`);
//     }
//     console.log("Bulk user creation completed.");
//     return res.status(200).json({ message: "completed" });
//   } catch (error) {
//     console.error("Error creating users:", error);
//   }
// };

const createIncharge = async (req, res) => {
  try {
    //getting the inputs from the user
    const { username, password, fullName, department, role, committee_name } =
      req.body;

    //checking if all the fields are there or not
    if (!username || !password || !fullName || !department || !committee_name) {
      return res
        .status(400)
        .json({ message: "All fields which are marked * are must" });
    }

    //checking if iscentral is given or not
    // if (!isCentral) isCentral = false;
    //console.log(isCentral);

    //checking if the admin already registered or not
    const existedIncharge = await Incharge.findOne({ username });
    if (existedIncharge)
      return res.status(400).json({ message: "you are already registered" });

    //creating the new admin
    const newIncharge = await Incharge.create({
      fullName,
      username,
      password,
      department,
      role,
      committee_name,
    });

    console.log(newIncharge);
    //checking if the new Admin is created or not
    const createdIncharge = await Incharge.findById(newIncharge._id).select(
      "-password"
    );
    if (!createdIncharge) {
      return res
        .status(500)
        .json({ message: "Something went wrong while creating the Incharge" });
    }

    //all are correct
    return res
      .status(200)
      .json({ message: "New Incharge registered successfully" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const loginIncharge = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: "All fields are required" });
  const inchargeMember = await Incharge.findOne({ username });
  if (!inchargeMember)
    return res.status(400).json({ message: "you are not authorized" });
  const isPasswordValid = await inchargeMember.isPasswordCorrect(password);
  if (!isPasswordValid)
    return res.status(400).json({ message: "your password is not valid" });
  const inchargeToken = await inchargeMember.generateAccessToken();
  const options = {
    httpOnly: true,
    secure: true, // Ensure this is true if using HTTPS
    sameSite: "None",
  };
  return res
    .status(200)
    .cookie("inchargeToken", inchargeToken, options)
    .json({ member: inchargeMember, inchargeToken });
};

const getIncharge = async (req, res) => {
  try {
    const { _id } = req.member;
    //console.log(department);
    const incharge = await Incharge.findById(_id);
    if (!incharge) {
      return res.status(400).json({ message: "you are not logged in" });
    }
    return res.status(200).json({ incharge });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export { createIncharge, loginIncharge, getIncharge };
