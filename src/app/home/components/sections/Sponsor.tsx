import Image from "next/image";

export default function Sponsor() {
  const sponsorList = [
    {
      name: "น้ำจิ้มไก่ตราแม่ประนอม",
      link: "https://down-th.img.susercontent.com/file/bf095aacc85a4f56fdc7e83755d9ff37",
    },
    {
      name: "Twitch",
      link: "https://cdn.m7g.twitch.tv/ba46b4e5e395b11efd34/assets/uploads/core-header.png?h=207&w=394&fm=jpg&auto=format",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <div className="font-bold text-lg">Sponsors</div>
        <div>
          <Image src="/person-fill.png" alt="person" width={20} height={20} />
        </div>
      </div>
      <div className="flex items-center justify-center gap-10">
        {sponsorList.map((sponsor, index) => (
          <img
            key={index}
            src={sponsor.link}
            alt={sponsor.name}
            className="w-16 h-16 object-cover rounded-full"
          />
        ))}
      </div>
    </div>
  );
}
