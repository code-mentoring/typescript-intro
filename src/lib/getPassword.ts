import { User } from "./types";
import { lookupUser } from "./lookupUser";

export function getPassword(userOrUserId: string | User): string {
  if (typeof userOrUserId === 'string') return lookupUser(userOrUserId).password;
  return userOrUserId.password;
}
