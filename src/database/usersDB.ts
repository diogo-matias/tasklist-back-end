import { User } from "../models/User";
interface user {
  id: string;
  email: string;
  password: string;
}

export const usersDB: User[] = [];

export function findUserById(id: string) {
  return usersDB.find((user) => user.id === id);
}

export function findUserByEmail(email: string) {
  return usersDB.find((user) => user.email === email);
}

export function auth(email: string, password: string) {
  const user = usersDB.find((user) => {
    return user.email === email && user.password === password;
  });

  if (!user) return false;

  return user;
}

export function parseUsers(users: user[]) {
  const response = usersDB.map((user) => {
    return user.parseKeys();
  });

  return response;
}
