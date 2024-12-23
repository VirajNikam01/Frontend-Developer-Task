import { User } from "./columns";

async function getUsersList(): Promise<User[]> {
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();
    return data?.users
}

export { getUsersList }