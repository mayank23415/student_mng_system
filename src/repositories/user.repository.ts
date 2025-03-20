import User, { IUser } from "../models/user.model";

/**
 * Finds a user by their email address.
 * @param email - The email address of the user to find.
 * @returns A promise that resolves to the user document if found, or null if not found.
 */
export const findUserByEmail = async (email: string) => {
  return User.findOne({ email });
};

/**
 * Creates a new user with the given data.
 * @param userData - An object containing the user data to create.
 * @returns A promise that resolves to the newly created user document.
 */
export const createUser = async (userData: Partial<IUser>) => {
  return new User(userData).save();
};

/**
 * Finds all users with the role of "student".
 * @returns A promise that resolves to an array of student user documents, excluding their passwords.
 */
export const findAllStudents = async () => {
  return await User.find({ role: "student" }).select("-password"); // Exclude passwords
};