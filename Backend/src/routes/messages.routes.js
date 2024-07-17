import { Router } from "express";
import {
  getMessages,
  createMessage,
  getDepartmentMessages,
  getCentralMessages,
  getCentralMembersChat,
} from "../controllers/messages.controller.js";
import {
  verifyCentralJWT,
  verifyDepartmentJWT,
  verifyInchargeJWT,
} from "../middlewares/auth.middleware.js";
const router = Router();

//to fetch all the messages
router.route("/recive/messages").get(getMessages);

//to send message
router.route("/send/message").post(verifyDepartmentJWT, createMessage);

//to send message for central members
router.route("/send/messageForCentral").post(verifyCentralJWT, createMessage);

//for department use
router
  .route("/get/departmentMessage")
  .get(verifyDepartmentJWT, getDepartmentMessages);

//for central use
router.route("/get/centralMessage").post(verifyCentralJWT, getCentralMessages);

router
  .route("/get/centralMessage1")
  .post(verifyInchargeJWT, getCentralMessages);

//get central members chat
router
  .route("/get/centralMembersChat")
  .get(verifyCentralJWT, getCentralMembersChat);
export default router;
