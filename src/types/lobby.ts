import { Team } from "./team";
import { User } from "./user";

export interface Lobby {
  name: string;
  date: string;
  time: string;
  referees: User[];
  teams: Team[];
}
