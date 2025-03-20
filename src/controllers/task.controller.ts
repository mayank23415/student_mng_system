import { Request, Response } from "express";
import { assignTask, getStudentTasks, changeTaskStatus, getAllStudents } from "../services/task.service";

// Handler to assign a task to a student
export const assignTaskHandler = async (req: Request, res: Response) => {
    try {
        const { studentId, description, dueDate } = req.body;
        const task = await assignTask(studentId, description, new Date(dueDate));
        res.status(201).json(task); // Respond with the created task
    } catch (error) {
        res.status(400).json({ message: (error as Error).message }); // Handle errors
    }
};

// Handler to get tasks assigned to a specific student
export const getStudentTasksHandler = async (req: Request, res: Response) => {
    try {
        const studentId = req.params.studentId;
        const tasks = await getStudentTasks(studentId);
        res.json(tasks); // Respond with the list of tasks
    } catch (error) {
        res.status(400).json({ message: (error as Error).message }); // Handle errors
    }
};

// Handler to change the status of a task
export const changeTaskStatusHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { taskId, status } = req.body;
        await changeTaskStatus(taskId, status);

        res.status(200).json({ message: "Task status updated successfully" }); // Respond with success message
        return; // Ensure function returns void
    } catch (error) {
        res.status(400).json({ message: (error as Error).message }); // Handle errors
        return; // Ensure function returns void
    }
};

// Handler to get all students
export const getStudents = async (req: Request, res: Response): Promise<void> => {
    try {
        const students = await getAllStudents();
        res.status(200).json({ students }); // Respond with the list of students
    } catch (error) {
        res.status(500).json({ message: (error as Error).message }); // Handle errors
    }
};