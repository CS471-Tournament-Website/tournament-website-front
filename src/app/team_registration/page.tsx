"use client";

import Conditions from "@/app/team_registration/components/conditions";
import Register from "@/app/team_registration/components/register";

export default function CreateTeam() {
  const isTournamentActive = true;

  return (
    <div className="min-h-screen pt-16 flex flex-col items-center">
      {" "}
      {/* Add padding-top to account for Navbar */}
      <div className="h-24 bg-secondary-color flex items-center justify-center w-full">
        <div className="text-center text-4xl font-bold tracking-[0.25em] text-white">
          Thailand Endurance Cup Season 4
        </div>
      </div>
      <div className="p-16 font-bold text-xl">Team Registration</div>
      <Conditions />
      <Register />
    </div>
  );
}
