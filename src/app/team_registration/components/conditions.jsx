"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Conditions(props) {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter()
  return (
    <div className="w-full max-w-full p-4">
      <div className="px-4">
        <div className="flex w-full justify-between">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 font-medium text-lg p-3 w-full"
          >
            Conditions
            <Image
              className={`transform transition-transform duration-200 ${
                isOpen ? "rotate-0" : "-rotate-90"
              }`}
              src="/arrow.svg"
              alt="drop down"
              width={20}
              height={20}
            />
          </button>
          {props.admin ? <div className="p-3 font-semibold cursor-pointer" onClick={() => router.push("/admin/edit/tournament?id=TBD")}>Edit</div> : null}
        </div>
        <div
          className={`transition-all duration-200 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-4 space-y-4">
            <ul className="list-disc pl-6 space-y-4">
              <li className="text-gray-800">
                Players can register since{" "}
                <span className="underline">12 Jan 2024 20:30:00</span> to{" "}
                <span className="underline">12 May 2024 20:30:00</span>
              </li>

              <li className="text-gray-800">
                Teams must include <span className="font-medium">3</span>{" "}
                members.
              </li>

              <li className="text-gray-800">
                Average rank must be from{" "}
                <span className="font-medium">1234</span> to{" "}
                <span className="font-medium">1458</span>.
              </li>

              <li className="flex items-center gap-2 text-gray-800">
                Only Thai Players
                <img
                  src="/api/placeholder/20/15"
                  alt="Thai flag"
                  className="inline-block"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
