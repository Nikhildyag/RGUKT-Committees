import { Router } from "express";
import {
  // createBulk,
  createIncharge,
  getIncharge,
  getIncharge1,
  loginIncharge,
} from "../controllers/incharge.controller.js";
import {
  verifyCentralJWT,
  verifyDepartmentJWT,
  verifyInchargeJWT,
} from "../middlewares/auth.middleware.js";
const router = Router();
router.route("/create-incharge").post(createIncharge);
router.route("/login-incharge").post(loginIncharge);
router.route("/get-incharge").get(verifyInchargeJWT, getIncharge);
router.route("/get-incharge1").get(verifyDepartmentJWT, getIncharge1);
router.route("/get-incharge2").get(verifyCentralJWT, getIncharge1);
// router.route("/login-incharge1").post(createBulk);
export default router;
