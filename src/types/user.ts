export interface User {
  username: string;
  role: "Spectator" | "Participant" | "Staff";
  profileLink: string | null;
}
