import { Router } from "express";
import { createComplaint } from "../controllers/ComplaintForm.controller.js";

const router = Router();
router.route("/create-complaint").post(createComplaint);
export default router;
