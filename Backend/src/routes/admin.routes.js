import { Router } from "express";
import { createAdmin, loginAdmin } from "../controllers/admin.controller.js";
const router = Router();
router.route("/create-admin").post(createAdmin);
router.route("/login-admin").post(loginAdmin);
export default router;
