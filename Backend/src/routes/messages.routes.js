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

//to fetch all the messages
router.route("/recive/messages").get(getMessages);

//to send message
router.route("/send/message").post(verifyDepartmentJWT, createMessage);

//for department use
router
  .route("/get/departmentMessage")
  .get(verifyDepartmentJWT, getDepartmentMessages);

//for central use
router.route("/get/centralMessage").post(verifyCentralJWT, getCentralMessages);
export default router;
