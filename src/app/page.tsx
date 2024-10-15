export default function Home() {
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
        <div className="py-36">
          <div className="text-center font-semibold text-6xl text-primary-color pb-14">
            Thailand Endurance Cup
          </div>
          <div className="text-center">
            <span className="tracking-wider text-4xl text-primary-color leading-relaxed">
              The tournament is coming soon! <br /> Get ready for the
              excitement!
            </span>
          </div>
        </div>
        <div className="text-end -translate-y-5 pr-6 italic">
          pattern by @designstuff
        </div>
      </div>
      <div className="text-center text-4xl font-semibold tracking-wider bg-secondary-color text-white py-7">
        Welcome to osu! Thailand Tournament
      </div>
    </div>
  );
}
