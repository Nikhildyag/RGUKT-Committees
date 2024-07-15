import { Router } from "express";
import {
  createComplaint,
  getComplaintsForCentral,
  getComplaintsforDepartment,
  updateComplaint,
} from "../controllers/ComplaintForm.controller.js";
import { verifyDepartmentJWT } from "../middlewares/auth.middleware.js";

const router = Router();
router.route("/create-complaint").post(createComplaint);
router.route("/update-complaint").post(verifyDepartmentJWT, updateComplaint);
router
  .route("/get/ComplaintsForDepartment")
  .get(verifyDepartmentJWT, getComplaintsforDepartment);
router
  .route("/get/ComplaintsForCentral")
  .get(verifyDepartmentJWT, getComplaintsForCentral);
export default router;
