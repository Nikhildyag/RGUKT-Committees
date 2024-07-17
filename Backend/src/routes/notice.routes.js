import { Router } from "express";
import { createNotice, showNotices } from "../controllers/notice.controller";
import { verifyCentralJWT } from "../middlewares/auth.middleware";
const router = Router();
router.route("/create-notice").post(verifyCentralJWT, createNotice);
router.route("get/notices").get(showNotices);
export default router;
