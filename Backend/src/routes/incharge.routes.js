import { Router } from "express";
import {
  // createBulk,
  createIncharge,
  getIncharge,
  loginIncharge,
} from "../controllers/incharge.controller.js";
const router = Router();
router.route("/create-incharge").post(createIncharge);
router.route("/login-incharge").post(loginIncharge);
router.route("/get-incharge").get(getIncharge);
// router.route("/login-incharge1").post(createBulk);
export default router;
