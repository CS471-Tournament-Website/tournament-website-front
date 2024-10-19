import Agenda from "./sections/Agenda";
import Prize from "./sections/Prize";
import Sponsor from "./sections/Sponsor";
import TournamentDetail from "./sections/TournamentDetail";

export default function TournamentSection() {
  return (
    <div className="flex flex-col gap-20 w-full p-16">
      <Sponsor />
      <Prize />
      <TournamentDetail />
      <Agenda />
    </div>
  );
}
