import { IUser } from "../interfaces/user.interface";

const { VITE_BASE_URL } = import.meta.env;
console.log(VITE_BASE_URL);

export async function fetchUsers(): Promise<IUser[]> {
  try {
    const response = await fetch(`${VITE_BASE_URL}/users`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const users: IUser[] = await response.json();
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
