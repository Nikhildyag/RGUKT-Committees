import { Router } from "express";
import {
  getMessages,
  createMessage,
} from "../controllers/messages.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();
router.route("/recive/messages").get(verifyJWT, getMessages);
router.route("/send/message").post(verifyJWT, createMessage);

export default router;
