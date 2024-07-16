import { Router } from "express";
import {
  createcentralMember,
  getcentralCommitteMembers,
  getCentralMembersByLogin,
  loginCentralMember,
  logoutCentral,
  updateCentralMember,
} from "../controllers/centralCommittee.controller.js";
import {
  verifyCentralJWT,
  verifyDepartmentJWT,
} from "../middlewares/auth.middleware.js";
const router = Router();

//creating the central member
router.route("/signup").post(createcentralMember);

//login the central member
router.route("/login").post(loginCentralMember);

//update the central level data
router.route("/update/:memberId").post(verifyCentralJWT, updateCentralMember);

//for the user level
router.route("/get/centralcommitteemembers").post(getcentralCommitteMembers);

//for the department level
router
  .route("/get/centralMembersByLogin")
  .get(verifyDepartmentJWT, getCentralMembersByLogin);

//for the central level
router
  .route("/get/centralMembersByLogin1")
  .get(verifyCentralJWT, getCentralMembersByLogin);

router.route("/logout").get(verifyCentralJWT, logoutCentral);
export default router;
