import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  department: string;
  password: string;
  role: "admin" | "student";
}

/**
 * @typedef {Object} UserSchema
 * @property {string} name - The name of the user. This field is required.
 * @property {string} email - The email of the user. This field is required and must be unique.
 * @property {string} [department] - The department of the user. This field is optional.
 * @property {string} password - The password of the user. This field is required.
 * @property {("admin"|"student")} role - The role of the user. This field is required and must be either "admin" or "student".
 */
const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  department: { type: String },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "student"], required: true }
});

export default mongoose.model<IUser>("User", UserSchema);
