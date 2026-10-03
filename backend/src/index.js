import express, { json } from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();
app.use(json());

const PORT = process.env.PORT || 3000;

app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "healthy" });
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
  connectDB();
});
