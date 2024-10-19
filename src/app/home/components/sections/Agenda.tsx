import Image from "next/image";

export default function Agenda() {
  const events = [
    {
      title: "Registration",
      date: "23/9/2024 20:00 - 23/9/2024 20:00",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },
    {
      title: "Registration",
      date: "23/9/2024 20:00 - 23/9/2024 20:00",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },
    {
      title: "Registration",
      date: "23/9/2024 20:00 - 23/9/2024 20:00",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },
  ];

  return (
    <div>
      <div className="flex items-center gap-2 mb-5">
        <div className="font-bold text-lg">Agenda</div>
        <div>
          <Image
            src="/calendar-week-fill.png"
            alt="Calendar Icon"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="relativ px-7">
        {events.map((event, index) => (
          <div key={index} className="flex items-start mb-10">
            <div className="flex flex-col items-center mr-4">
              <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
              {index < events.length - 1 && (
                <div className="w-px flex-1 bg-gray-400"></div>
              )}
            </div>
            <div>
              <div className="font-bold">
                {event.title} ({event.date})
              </div>
              <p className="text-gray-600 mt-2">{event.description}</p>
            </div>
          </div>
        ))}
        <div className="flex items-start mt-10">
          <div className="flex flex-col items-center mr-4">
            <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
          </div>
          <div className="font-bold">Season Ends</div>
        </div>
      </div>
    </div>
  );
};
