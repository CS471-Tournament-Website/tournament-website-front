import CountdownTimer from "@/components/CounterDownTimer";
import NoTour from "@/components/noTour";
import TournamentDetails from "@/components/TournamentDetails";

export default function Home() {
  const tournament = true;

  return (
    <div className="h-screen">
      <div
        className="w-svh"
        style={{
          backgroundImage: `url('/background.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {tournament ? <CountdownTimer date={"Enter the date"} /> : <NoTour />}
        <div className="text-end -translate-y-5 pr-6 italic">
          pattern by @designstuff
        </div>
      </div>
      <div className="text-center text-4xl font-semibold tracking-wider bg-secondary-color text-white py-7">
        Welcome to osu! Thailand Tournament
      </div>
      <div className="w-svh px-36 py-16">{tournament ? <TournamentDetails /> : ""}</div>
    </div>
  );
}
