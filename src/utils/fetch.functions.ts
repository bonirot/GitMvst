import { IProfile } from "../interfaces/profile.interface";
import { IRepository } from "../interfaces/repo.interface";

const { VITE_BASE_URL } = import.meta.env;

export async function fetchUsers() {
  try {
    const response = await fetch(`${VITE_BASE_URL}/users`);
    const users = await response.json();
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

export async function fetchUserProfile(username: string) {
  try {
    const response = await fetch(`${VITE_BASE_URL}/users/${username}`);
    const profile: IProfile = await response.json();
    return profile;
  } catch (error) {
    console.error("Error fetching profiles:", error);
    throw error;
  }
}

export async function fetchRepos(username: string | undefined) {
  try {
    const response = await fetch(`${VITE_BASE_URL}/users/${username}/repos`);
    const repos: IRepository[] = await response.json();
    return repos;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    throw error;
  }
}
