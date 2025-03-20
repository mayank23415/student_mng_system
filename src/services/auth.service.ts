import bcrypt from "bcryptjs";
import { findUserByEmail, createUser } from "../repositories/user.repository";

/**
 * Logs in a user by verifying their email and password.
 *
 * @param email - The email address of the user attempting to log in.
 * @param password - The password of the user attempting to log in.
 * @returns An object containing a success message and the user's role if login is successful.
 * @throws Will throw an error if the email is not found or if the password does not match.
 */
export const loginUser = async (email: string, password: string) => {
  const user = await findUserByEmail(email);
  if (!user) throw new Error("Invalid Credentials");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid Credentials");

  return { message: "Login successful", role: user.role };
};

/**
 * Registers a new student by hashing their password and saving their details.
 *
 * @param name - The name of the student to register.
 * @param email - The email address of the student to register.
 * @param department - The department of the student to register.
 * @param password - The password of the student to register.
 * @returns The created user object.
 * @throws Will throw an error if the user creation fails.
 */
export const registerStudent = async (name: string, email: string, department: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return createUser({ name, email, department, password: hashedPassword, role: "student" });
};
