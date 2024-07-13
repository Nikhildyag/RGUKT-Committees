import { Router } from "express";
import {
  createcentralMember,
  getcentralCommitteMembers,
  loginCentralMember,
  updateCentralMember,
} from "../controllers/centralCommittee.controller.js";
const router = Router();
router.route("/signup").post(createcentralMember);
router.route("/login").post(loginCentralMember);
router.route("/update/:memberId").post(updateCentralMember);
router.route("/get/centralcommitteemembers").post(getcentralCommitteMembers);
export default router;
