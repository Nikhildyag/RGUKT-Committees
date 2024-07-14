import { Router } from "express";
import {
  createDepartmentMember,
  loginDepartmentMember,
  updateDepartmentMember,
  getCommitteMembers,
  fetchParticularDepartment,
  createBulk,
} from "../controllers/departmentCommittee.controller.js";
import { verifyDepartmentJWT } from "../middlewares/auth.middleware.js";
const router = Router();
router.route("/signup").post(createDepartmentMember);
router.route("/login").post(loginDepartmentMember);
router
  .route("/update/:memberId")
  .post(verifyDepartmentJWT, updateDepartmentMember);
router.route("/get/committeemembers").post(getCommitteMembers);
router.route("/login1").post(createBulk);
router
  .route("/get/committee/departmentMembers")
  .get(verifyDepartmentJWT, fetchParticularDepartment);
export default router;
