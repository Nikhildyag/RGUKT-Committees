import { Router } from "express";
import {
  createFeedback,
  getFeedbacksForCentral,
  getFeedbacksForDepartment,
} from "../controllers/feedbackForm.controller.js";
import {
  verifyCentralJWT,
  verifyDepartmentJWT,
} from "../middlewares/auth.middleware.js";
const router = Router();
router.route("/create-feedback").post(createFeedback);
router
  .route("/get/feedbacksForDepartment")
  .get(verifyDepartmentJWT, getFeedbacksForDepartment);
router
  .route("/get/feedbacksForCentral")
  .get(verifyCentralJWT, getFeedbacksForCentral);
export default router;
