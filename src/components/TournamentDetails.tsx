export default function TournamentDetails() {
  const sponsorListExample = [
    {
      name: "น้ำจิ้มไก่ตราแม่ประนอม",
      picLink:
        "https://down-th.img.susercontent.com/file/bf095aacc85a4f56fdc7e83755d9ff37",
    },
    { name: "Twitch", picLink: "https://cdn.m7g.twitch.tv/ba46b4e5e395b11efd34/assets/uploads/core-header.png?h=207&w=394&fm=jpg&auto=format" },
  ];

  return (
    <div className="flex w-full">
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
    </div>
  );
}
