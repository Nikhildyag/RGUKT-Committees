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

//create feedback in the user side
router.route("/create-feedback").post(createFeedback);

//get the feedbacks for the department side
router
  .route("/get/feedbacksForDepartment")
  .get(verifyDepartmentJWT, getFeedbacksForDepartment);

//get the feedbacks for the central side
router
  .route("/get/feedbacksForCentral")
  .get(verifyCentralJWT, getFeedbacksForCentral);
export default router;
