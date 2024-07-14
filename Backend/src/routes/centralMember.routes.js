import { Router } from "express";
import {
  createcentralMember,
  getcentralCommitteMembers,
  loginCentralMember,
  updateCentralMember,
} from "../controllers/centralCommittee.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();
router.route("/signup").post(createcentralMember);
router.route("/login").post(loginCentralMember);
router.route("/update/:memberId").post(verifyJWT, updateCentralMember);
router.route("/get/centralcommitteemembers").post(getcentralCommitteMembers);
export default router;
