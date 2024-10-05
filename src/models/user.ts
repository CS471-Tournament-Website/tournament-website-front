import { User } from "@/types/user";

export class UserModel implements User {
  constructor(
    private _username: User["username"],
    private _role: User["role"],
    private _iconLink: User["iconLink"]
  ) {}

  public get username(): User["username"] {
    return this._username;
  }

  public get role(): User["role"] {
    return this._role;
  }

  public get iconLink(): User["iconLink"] {
    return this._iconLink;
  }
}
