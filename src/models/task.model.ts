import mongoose, { Schema, Document } from "mongoose";

export interface ITask extends Document {
  studentId: string;
  description: string;
  dueDate: Date;
  status: "pending" | "completed" | "overdue";
}

/**
 * @typedef {Object} TaskSchema
 * @property {mongoose.Schema.Types.ObjectId} studentId - The ID of the student associated with the task. This field is required and references the User model.
 * @property {string} description - The description of the task. This field is required.
 * @property {Date} dueDate - The due date of the task. This field is required.
 * @property {("pending"|"completed"|"overdue")} status - The status of the task. This field is required and must be one of "pending", "completed", or "overdue". Defaults to "pending".
 */
const TaskSchema: Schema = new Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  description: { type: String, required: true },
  dueDate: { type: Date, required: true },
  status: { type: String, enum: ["pending", "completed", "overdue"], default: "pending" }
});

export default mongoose.model<ITask>("Task", TaskSchema);
