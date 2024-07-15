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

//create incharge
router.route("/create-incharge").post(createIncharge);

//login incharge
router.route("/login-incharge").post(loginIncharge);

//for incharge level
router.route("/get-incharge").get(verifyInchargeJWT, getIncharge);

//for department level
router.route("/get-incharge1").get(verifyDepartmentJWT, getIncharge1);

// for central level
router.route("/get-incharge2").get(verifyCentralJWT, getIncharge1);
// router.route("/login-incharge1").post(createBulk);
export default router;
