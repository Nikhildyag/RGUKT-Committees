import express from "express";
import cors from "cors";
import adminRouter from "./routes/admin.routes.js";
import DepartmentRouter from "./routes/departmentMember.routes.js";
import centralRouter from "./routes/centralMember.routes.js";
import cookieParser from "cookie-parser";
const app = express();
const corsOptions = {
  origin: ["http://localhost:3000"], // Frontend domain
  credentials: true, // Allow credentials (cookies) to be sent
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/admins", adminRouter);
app.use("/api/v1/department", DepartmentRouter);
app.use("/api/v1/central", centralRouter);
export default app;
