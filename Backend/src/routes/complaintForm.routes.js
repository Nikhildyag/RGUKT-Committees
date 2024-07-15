import { Router } from "express";
import {
  createComplaint,
  getComplaintsForCentral,
  getComplaintsforDepartment,
  getparticularComplaint,
  updateComplaint,
} from "../controllers/ComplaintForm.controller.js";
import {
  verifyCentralJWT,
  verifyDepartmentJWT,
} from "../middlewares/auth.middleware.js";

const router = Router();
router.route("/create-complaint").post(createComplaint);
router.route("/update-complaint").post(verifyDepartmentJWT, updateComplaint);
router
  .route("/get/ComplaintsForDepartment")
  .get(verifyDepartmentJWT, getComplaintsforDepartment);
router
  .route("/get/ComplaintsForCentral")
  .get(verifyCentralJWT, getComplaintsForCentral);
router
  .route("/get/particularComplaint/:complaintId")
  .get(verifyDepartmentJWT, getparticularComplaint);
router
  .route("/get/particularComplaintForCentral/:complaintId")
  .get(verifyCentralJWT, getparticularComplaint);
export default router;
