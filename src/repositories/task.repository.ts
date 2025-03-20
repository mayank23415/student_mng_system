import Task, { ITask } from "../models/task.model";

/**
 * Creates a new task.
 * @param taskData - Partial task data to create a new task.
 * @returns The created task.
 */
export const createTask = async (taskData: Partial<ITask>) => {
  return new Task(taskData).save();
};

/**
 * Retrieves tasks by student ID.
 * @param studentId - The ID of the student whose tasks are to be retrieved.
 * @returns A list of tasks associated with the given student ID.
 */
export const getTasksByStudentId = async (studentId: string) => {
  return Task.find({ studentId });
};

/**
 * Updates the status of a task.
 * @param taskId - The ID of the task to be updated.
 * @param status - The new status of the task ("pending", "completed", or "overdue").
 * @returns The updated task.
 */
export const updateTaskStatus = async (taskId: string, status: "pending" | "completed" | "overdue") => {
  return Task.findByIdAndUpdate(taskId, { status }, { new: true });
};
