import { Central } from "../models/centralMember.model.js";
import { Department } from "../models/departmentCommittee.model.js";
import jwt from "jsonwebtoken";

const verifyJWT = async (req, res, next) => {
  try {
    const token = req.cookies.accessToken;
    //console.log("Token received:", token); // Log the token

    if (!token) {
      return res.status(401).json({ message: "Unauthorized request" });
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const loggedInDepartmentUser = await Department.findById(
      decodedToken?._id
    ).select("-password");
    const loggedInCentralUser = await Central.findById(
      decodedToken?._id
    ).select("-password");
    // console.log(loggedInDepartmentUser);
    //console.log(loggedInCentralUser);

    if (!loggedInDepartmentUser && !loggedInCentralUser) {
      return res.status(400).json({ message: "Invalid access token" });
    }

    req.member = loggedInDepartmentUser || loggedInCentralUser;
    next();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// const verifyCentralJWT = async (req, res) => {
//   try {
//     const token = req.cookies.accessToken;
//     //console.log("Token received:", token); // Log the token

//     if (!token) {
//       return res.status(401).json({ message: "Unauthorized request" });
//     }

//     const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
//     const loggedInUser = await Central.findById(decodedToken?._id).select(
//       "-password"
//     );

//     if (!loggedInUser) {
//       return res.status(400).json({ message: "Invalid access token" });
//     }

//     req.departmentMember = loggedInUser;
//     next();
//   } catch (error) {
//     return res.status(400).json({ message: error.message });
//   }
// };

// const verifyInchargeJWT = async (req, res) => {
//   try {
//     const token = req.cookies.accessToken;
//     //console.log("Token received:", token); // Log the token

//     if (!token) {
//       return res.status(401).json({ message: "Unauthorized request" });
//     }

//     const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
//     const loggedInUser = await Incharge.findById(decodedToken?._id).select(
//       "-password"
//     );

//     if (!loggedInUser) {
//       return res.status(400).json({ message: "Invalid access token" });
//     }

//     req.departmentMember = loggedInUser;
//     next();
//   } catch (error) {
//     return res.status(400).json({ message: error.message });
//   }
// };

export { verifyJWT };
