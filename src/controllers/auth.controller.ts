import { NextFunction, Request, Response } from "express";
import { loginUser, registerStudent } from "../services/auth.service";

// Controller for admin login
export const adminLogin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Hardcoded admin credentials
    if (email === "admin@admin.com" && password === "admin") {
      res.status(200).json({ message: "Login successful", role: "admin" });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    next(error); // Pass error to the error handler middleware
  }
};

// Controller for student login
export const studentLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await loginUser(email, password); // Authenticate user and get token
    res.json(token);
  } catch (error) {
    res.status(401).json({ message: (error as Error).message }); // Return error message if authentication fails
  }
};

// Controller for registering a new student
export const registerStudentHandler = async (req: Request, res: Response) => {
  try {
    const { name, email, department, password } = req.body;
    const student = await registerStudent(name, email, department, password); // Register new student
    res.status(201).json(student); // Return the created student object
  } catch (error) {
    res.status(400).json({ message: (error as Error).message }); // Return error message if registration fails
  }
};
