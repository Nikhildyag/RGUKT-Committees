import express from "express";
import cors from "cors";
import adminRouter from "./routes/admin.routes.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1/admins", adminRouter);
export default app;
