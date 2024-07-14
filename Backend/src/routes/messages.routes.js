import { Router } from "express";
import {
  getMessages,
  createMessage,
  getDepartmentMessages,
  getCentralMessages,
} from "../controllers/messages.controller.js";
const router = Router();
router.route("/recive/messages").get(getMessages);
router.route("/send/message").post(createMessage);
router.route("/get/departmentMessage").get(getDepartmentMessages);
router.route("/get/centralMessage").get(getCentralMessages);
export default router;
