import { Router } from "express";
import {
  createcentralMember,
  loginCentralMember,
  updateCentralMember,
} from "../controllers/centralCommittee.controller.js";
const router = Router();
router.route("/signup").post(createcentralMember);
router.route("/login").post(loginCentralMember);
router.route("/update/:memberId").post(updateCentralMember);
export default router;
