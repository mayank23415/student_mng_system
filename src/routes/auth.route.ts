import express, { Request, Response } from "express";
import { studentLogin, registerStudentHandler, adminLogin } from "../controllers/auth.controller";

/**
 * Router instance for handling authentication-related routes.
 * 
 * This router is used to define and manage all the routes related to user authentication,
 * such as login, registration, password reset, etc.
 * 
 * @constant
 * @type {Router}
 */
const router = express.Router();

// Define the routes for the authentication-related endpoints
router.post("/admin_login", adminLogin);
router.post("/student_login", studentLogin);
router.post("/add_student", registerStudentHandler);

export default router;
