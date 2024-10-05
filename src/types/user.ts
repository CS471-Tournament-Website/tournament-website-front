export interface User {
  username: string;
  role: "Spectator" | "Participant" | "Staff";
  iconLink: string | null;
}
