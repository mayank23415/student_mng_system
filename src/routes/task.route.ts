import express from "express";
import { assignTaskHandler, getStudentTasksHandler, changeTaskStatusHandler, getStudents } from "../controllers/task.controller";

// Import express and task controller functions

const router = express.Router();

// Define the routes for the task-related endpoints
router.post("/assign", assignTaskHandler); // Admin assigns task
router.get("/student/:studentId", getStudentTasksHandler); // Student views tasks
router.patch("/update-status", changeTaskStatusHandler); // Student updates task status
router.get("/students", getStudents); // Get all students


export default router;
