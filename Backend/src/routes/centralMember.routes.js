import { Router } from "express";
import {
  createcentralMember,
  getcentralCommitteMembers,
  getCentralMembersByLogin,
  loginCentralMember,
  updateCentralMember,
} from "../controllers/centralCommittee.controller.js";
import {
  verifyCentralJWT,
  verifyDepartmentJWT,
} from "../middlewares/auth.middleware.js";
const router = Router();
router.route("/signup").post(createcentralMember);
router.route("/login").post(loginCentralMember);
router.route("/update/:memberId").post(verifyCentralJWT, updateCentralMember);
router.route("/get/centralcommitteemembers").post(getcentralCommitteMembers);
router
  .route("/get/centralMembersByLogin")
  .get(verifyDepartmentJWT, getCentralMembersByLogin);
export default router;
