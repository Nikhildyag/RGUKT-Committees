import { Router } from "express";
import {
  createDepartmentMember,
  loginDepartmentMember,
  updateDepartmentMember,
  getCommitteMembers,
  fetchParticularDepartment,
  createBulk,
  fetchParticularDepartmentForCentral,
} from "../controllers/departmentCommittee.controller.js";
import {
  verifyCentralJWT,
  verifyDepartmentJWT,
} from "../middlewares/auth.middleware.js";
const router = Router();

//for department creation
router.route("/signup").post(createDepartmentMember);

//for the department login
router.route("/login").post(loginDepartmentMember);

//updating the details of department
router
  .route("/update/:memberId")
  .post(verifyDepartmentJWT, updateDepartmentMember);

//for user level
router.route("/get/committeemembers").post(getCommitteMembers);

//for creating the credentials
router.route("/login1").post(createBulk);

//for department level
router
  .route("/get/committee/departmentMembers")
  .get(verifyDepartmentJWT, fetchParticularDepartment);

//for central members
router
  .route("/get/committee/departmentMembers")
  .get(verifyCentralJWT, fetchParticularDepartmentForCentral);
export default router;
