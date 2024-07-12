import { Router } from "express";
import {
  createDepartmentMember,
  loginDepartmentMember,
  updateDepartmentMember,
  getCommitteMembers,
} from "../controllers/departmentCommittee.controller.js";
const router = Router();
router.route("/signup").post(createDepartmentMember);
router.route("/login").post(loginDepartmentMember);
router.route("/update/:memberId").post(updateDepartmentMember);
router.route('/get/committemembers').post(getCommitteMembers)
export default router;
