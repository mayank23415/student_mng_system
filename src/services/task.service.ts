import { createTask, getTasksByStudentId, updateTaskStatus } from "../repositories/task.repository";
import { findAllStudents } from "../repositories/user.repository";

/**
 * Assigns a task to a student.
 *
 * @param studentId - The ID of the student to whom the task is assigned.
 * @param description - A brief description of the task.
 * @param dueDate - The due date for the task.
 * @returns A promise that resolves to the created task object.
 */
export const assignTask = async (studentId: string, description: string, dueDate: Date) => {
  return createTask({ studentId, description, dueDate, status: "pending" });
};

/**
 * Retrieves tasks associated with a specific student.
 *
 * @param {string} studentId - The unique identifier of the student.
 * @returns {Promise<any>} A promise that resolves to the tasks of the student.
 */
export const getStudentTasks = async (studentId: string) => {
  return getTasksByStudentId(studentId);
};


/**
 * Changes the status of a task to the specified status.
 *
 * @param taskId - The unique identifier of the task to be updated.
 * @param status - The new status to set for the task. Currently, only "completed" is supported.
 * @returns A promise that resolves when the task status has been updated.
 */
export const changeTaskStatus = async (taskId: string, status: "completed") => {
  return updateTaskStatus(taskId, status);
};


/**
 * Retrieves all students from the database.
 *
 * @returns A promise that resolves to an array of student objects.
 */
export const getAllStudents = async () => {
  return await findAllStudents();
};