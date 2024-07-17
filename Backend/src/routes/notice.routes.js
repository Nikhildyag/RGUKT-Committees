import { Router } from "express";
import { createNotice, showNotices } from "../controllers/notice.controller";
const router = Router();
router.route("/create-notice").post(createNotice);
router.route("get/notices").get(showNotices);
export default router;
