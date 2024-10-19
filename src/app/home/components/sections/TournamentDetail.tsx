import Image from "next/image";

export default function TournamentDetail() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <div className="font-bold text-lg">Tournament Details</div>
        <div>
          <Image src="/file-earmark-text-fill.png" alt="file earmark text fill image" width={20} height={20} />
        </div>
      </div>
      <div className="items-center px-10">
        <p>
          &emsp;&emsp; Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
          the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but 
          also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum...
        </p>
      </div>
      <div className="items-center px-10">
        <p>
          &emsp;&emsp; Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
          the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but 
          also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum...
        </p>
      </div>
    </div>
  );
}
