"use client"

import CreateLobbyForm from "./components/createLobby";
import LobbyCardList from "./components/lobbyCard";

export default function QualfierLobby() {
  return (
    <div className="pt-[5rem]">
      <div className="h-[15vh] bg-secondary-color flex items-center justify-center">
        <div className="text-center text-4xl font-semibold tracking-wider text-white">
          Welcome to osu! Thailand Tournament
        </div>
      </div>
      <div className="flex pt-5 pl-16 gap-6 text-primary-color">
        <div>Tournament Info</div>
        <div>Tournament Rules</div>
        <div>Team Registration</div>
        <div>Qualifier Lobby</div>
      </div>
      <div className="flex py-10 justify-center text-2xl font-bold">
        Qualifier Lobby
      </div>
      <div className="grid grid-cols-[1fr_2fr_1fr]">
        <div></div>
        <div className="py-5 space-y-4">
          <div className="-mt-4">
            <CreateLobbyForm />
          </div>
          <div>
            <LobbyCardList />
          </div>
        </div>
      </div>
    </div>
  );
}
