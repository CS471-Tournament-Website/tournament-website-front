import { User } from "@/types/user";

export class UserModel implements User {
  constructor(
    private _username: User["username"],
    private _role: User["role"],
    private _profileLink: User["profileLink"]
  ) {}

  get username(): string {
    return this._username;
  }

  get role(): "Spectator" | "Participant" | "Staff" {
    return this._role;
  }

  get profileLink(): string | null {
    return this._profileLink;
  }
}
