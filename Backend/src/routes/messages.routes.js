import { Router } from "express"; 
import { getMessages, createMessage, } from '../controllers/messages.controller.js'
const router = Router();
router.route('/recive/messages').get(getMessages);
router.route('/send/message').post(createMessage);

export default router;