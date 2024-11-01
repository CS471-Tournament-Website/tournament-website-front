import Image from "next/image";

export default function Footer() {
  return (
    <div className="h-1/5 grid grid-cols-4 items-start gap-3" style={{
      backgroundColor: "#FBFBFB"
    }}>
      <div className="flex flex-col p-10 gap-4">
        <div className="font-bold text-base">
          Tournament Handler
        </div>
        <div className="text-sm">
          Lorem Ipsum is simply dummy text of the printing and type setting industry. 
        </div>
      </div>
      <div className="flex flex-col p-10 gap-4">
        <div className="font-bold text-base">
          Follow Us
        </div>
        <div className="flex">
          <div className="grid grid-cols-1 text-sm gap-3">
            <div className="flex">
              <Image
                src={"/icons/discord-icon.png"} 
                alt={"discord-icon"} 
                width={20}
                height={20}
              />
              <div className="pl-2">
                osu! Thailand
              </div>
            </div>
            <div className="flex flex-row">
              <Image
                src={"/icons/facebook-icon.png"} 
                alt={"facebook-icon"} 
                width={20}
                height={20}
              />
              <div className="pl-2">
                osu! Thailand
              </div>
            </div>
            <div className="flex flex-row">
              <Image
                src={"/icons/twitch-icon.png"} 
                alt={"twitch-icon"} 
                width={20}
                height={20}
              />
              <div className="pl-2">
                osu! Thailand
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-10 gap-4">
        <div className="font-bold text-base">
          Quick Links
        </div>
        <div className="flex flex-col text-sm gap-3">
          <div>
            Home 
          </div>
          <div>
            Tournament Info 
          </div>
          <div>
            Tournament Rules 
          </div>
        </div>
      </div>
      <div className="flex flex-col p-10 gap-4">
        <div className="font-bold text-base">
          Contributors
        </div>
        <div className="flex flex-col text-sm gap-3">
          <div>
            1. 
          </div>
          <div>
            2. 
          </div>
          <div>
            3. 
          </div>
          <div>
            4. 
          </div>
        </div>
      </div>
    </div>
  );
}
