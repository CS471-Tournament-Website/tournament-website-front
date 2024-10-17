import React from "react";
import Image from "next/image";

export default function TournamentDetails() {
  const sponsorListExample = [
    {
      name: "น้ำจิ้มไก่ตราแม่ประนอม",
      picLink:
        "https://down-th.img.susercontent.com/file/bf095aacc85a4f56fdc7e83755d9ff37",
    },
    {
      name: "Twitch",
      picLink:
        "https://cdn.m7g.twitch.tv/ba46b4e5e395b11efd34/assets/uploads/core-header.png?h=207&w=394&fm=jpg&auto=format",
    },
  ];

  const prizes = [
    { place: 2, amount: 100000, color: "bg-gray-300"},
    { place: 1, amount: 150000, color: "bg-yellow-400"},
    { place: 3, amount: 50000, color: "bg-orange-400"},
  ];
  const totalPrize = prizes.reduce((sum, prize) => sum + prize.amount, 0);

  return (
    <div className="flex flex-col gap-20 w-full">
      <div className="flex flex-col gap-5">
        <p className="text-primary-color font-bold text-lg">Sponsors</p>
        <div className="flex gap-10">
          {sponsorListExample.map((sponsor, index) => (
            <img
              key={index}
              src={sponsor.picLink}
              alt={sponsor.name}
              className="w-16 h-16 object-cover rounded-full"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-primary-color font-bold text-lg flex items-center gap-2">
          Prize!
          <span>
            <Image
              src="/trophy.png"
              alt="trophy image"
              width={20}
              height={20}
            />
          </span>
        </p>
        <div className="flex gap-4 items-center">
          <div className="flex flex-col gap-4">
            <div className="flex items-baseline pl-10">
              <span className="font-bold text-2xl underline underline-offset-1">Join</span>
              <span className="mx-2">for a chance to</span>
              <span className="font-bold text-2xl underline underline-offset-1">win prizes</span>
              <span className="mx-2">worth a total of</span>
            </div>
            <div className="flex items-center gap-5 mb-8 pl-20">
              {totalPrize
                .toString()
                .split("")
                .map((digit, index) => (
                  <div
                    key={index}
                    className="w-16 h-20 bg-white border border-gray-300 rounded flex items-center justify-center text-5xl font-bold"
                  >
                    {digit}
                  </div>
                ))}
              <span className="text-5xl font-bold">$</span>
            </div>
          </div>
          <div className="flex justify-center items-end gap-8 pl-36">
            {prizes.map((prize) => (
              <div 
                key={prize.place} 
                className="flex flex-col items-center"
                style={{ 
                  marginTop: prize.place === 1 ? '-20px' : '0' 
                }}
              >
                {/* WILL DO CUSTOMIZED TROPHIES LATER <3 */}
                <div className={`${prize.place === 1 ? 'w-36 h-36' : 'w-24 h-24'} ${prize.color} rounded-lg mb-2 flex items-center justify-center`}>
                  <Image
                    src="/trophy.png"
                    alt="trophy"
                    width={prize.place === 1 ? 56: 48}
                    height={prize.place === 1 ? 56 : 48}
                  />
                </div>
                <div className={`text-center border-4 border-secondary-color p-2 rounded-b-xl ${prize.place === 1 ? 'w-36 py-5' : 'w-24'}`}>
                  <div className={`text-sm text-gray-600  ${prize.place === 1 ? "text-2xl font-bold" : "text-lg font-bold"}`}>{prize.amount.toLocaleString()}</div>
                  <div className="text-xs text-gray-500">
                    {prize.place === 1 ? "1st Place" : prize.place === 2 ? "2nd Place" : "3rd Place"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
