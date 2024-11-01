"use client"

import Footer from "@/components/Footer";
import CountdownTimer from "./components/CounterDownTimer";
import NoTour from "./components/NoRecentTour";
import TournamentSection from "./components/TournamentSection";

export default function Home() {
  const isTournamentActive = true;

  return (
    <div className="h-screen">
      <div
        className="h-[85vh]"
        style={{
          backgroundImage: `url('/background.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-full flex items-center justify-center">
          {isTournamentActive ? <CountdownTimer date={"2024-12-12T10:00:00"} /> : <NoTour />}
        </div>
        <div className="absolute bottom-28 right-6 italic text-gray-600 bg-white bg-opacity-50 px-2 py-1 rounded">
          pattern by @designstuff
        </div>
      </div>
      <div className="h-[15vh] bg-secondary-color flex items-center justify-center">
        <div className="text-center text-4xl font-semibold tracking-wider text-white">
          Welcome to osu! Thailand Tournament
        </div>
      </div>
      {isTournamentActive ? <TournamentSection /> : ""}
      <Footer />
    </div>
  );
}
