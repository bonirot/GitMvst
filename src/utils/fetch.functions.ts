import { IProfile } from "../interfaces/profile.interface";
import { IRepository } from "../interfaces/repo.interface";

const url = "https://api.github.com";

export async function fetchUsers() {
  try {
    const response = await fetch(`${url}/users`);
    // if (!response.ok) {
    //   throw new Error("Network response was not ok");
    // }
    const users = await response.json();
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

export async function fetchUserProfile(username: string) {
  try {
    const response = await fetch(`${url}/users/${username}`);
    const profile: IProfile = await response.json();
    return profile;
  } catch (error) {
    console.error("Error fetching profiles:", error);
    throw error;
  }
}

export async function fetchRepos(username: string) {
  try {
    const response = await fetch(`${url}/users/${username}/repos`);
    const repos: IRepository[] = await response.json();
    return repos;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    throw error;
  }
}
