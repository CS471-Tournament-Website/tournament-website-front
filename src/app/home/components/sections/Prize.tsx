import Image from "next/image";

export default function Prize() {
  const prizes = [
    { place: 2, size: 80, amount: 100000, color: "#D1D5DB", svg: "/second-place-trophy.svg" },
    { place: 1, size: 100, amount: 150000, color: "#FBBF24", svg: "/first-place-trophy.svg" },
    { place: 3, size: 70, amount: 50000, color: "#FB923C", svg: "/third-place-trophy.svg" },
  ];

  const totalPrize = prizes.reduce((sum, prize) => sum + prize.amount, 0);
  const formattedPrize = totalPrize.toLocaleString("en-TH");
  
  return (
    <div className="flex flex-col gap-5">
      <div className="font-bold text-xl flex items-center gap-2">
        Prize!
        <div>
          <Image
            src="/trophy.png"
            alt="trophy image"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 items-center">
        <div className="flex flex-col gap-4 text-lg">
          <div className="flex items-baseline pl-10">
            <div className="font-bold underline underline-offset-1">
              Join
            </div>
            <div className="mx-2">for a chance to</div>
            <div className="font-bold underline underline-offset-1">
              win prizes
            </div>
            <div className="mx-2">worth a total of</div>
          </div>
          <div className="flex items-center gap-2 mb-8 pl-20 text-primary-color">
            {formattedPrize.split("").map((char, index) => (
              <div
                key={index}
                className={`h-20 ${
                  char === ","
                    ? "bg-transparent"
                    : "bg-white border border-gray-300 w-14"
                } rounded flex items-center justify-center text-5xl font-bold`}
              >
                {char}
              </div>
            ))}
            <div className="text-5xl font-bold">$</div>
          </div>
        </div>
        <div className="grid grid-cols-3 justify-center items-end px-14 gap-5">
          {prizes.map((prize) => (
            <div
              key={prize.place}
              className="flex flex-col items-center"
              style={{
                marginTop: prize.place === 1 ? "-20px" : "0",
              }}
            >
              <Image 
                src={prize.svg} 
                alt={"Trophy for place ${prize.place}"} 
                width={prize.size} 
                height={prize.size}
                className="mb-2"
              />
              <div
                className={"text-center border-4 border-secondary-color p-2 rounded-b-xl w-full"}
              >
                <div
                  className={"text-lg text-primary-color font-bold drop-shadow-2xl"}
                >
                  <div>
                    {prize.amount.toLocaleString("en-US")} $
                  </div>
                  <div className="text-sm text-secondary-color">
                    {
                      prize.place == 1 ? "1st Place" : 
                        prize.place == 2 ? "2nd Place" : "3rd Place"
                    }
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
