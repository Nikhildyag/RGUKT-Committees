import { Router } from "express";
import {
  getMessages,
  createMessage,
  getDepartmentMessages,
  getCentralMessages,
} from "../controllers/messages.controller.js";
import {
  verifyCentralJWT,
  verifyDepartmentJWT,
} from "../middlewares/auth.middleware.js";
const router = Router();
router.route("/recive/messages").get(getMessages);
router.route("/send/message").post(verifyDepartmentJWT, createMessage);
router
  .route("/get/departmentMessage")
  .get(verifyDepartmentJWT, getDepartmentMessages);
router.route("/get/centralMessage").get(verifyCentralJWT, getCentralMessages);
export default router;
