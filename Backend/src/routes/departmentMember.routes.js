import { Router } from "express";
import {
  createDepartmentMember,
  loginDepartmentMember,
  updateDepartmentMember,
  getCommitteMembers,
  fetchParticularDepartment,
} from "../controllers/departmentCommittee.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();
router.route("/signup").post(createDepartmentMember);
router.route("/login").post(loginDepartmentMember);
router.route("/update/:memberId").post(verifyJWT, updateDepartmentMember);
router.route("/get/committeemembers").post(getCommitteMembers);
router.route("/get/committee/departmentMembers").get(verifyJWT,fetchParticularDepartment);
export default router;
