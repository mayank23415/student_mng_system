import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import authRoutes from "./routes/auth.route";
import taskRoutes from "./routes/task.route";

// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectDB();

// Create an Express application
const app = express();

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Define routes for authentication
app.use("/api/auth", authRoutes);

// Define routes for tasks
app.use("/api/tasks", taskRoutes);

// Export the Express application
export default app;
