"use client";

import { useEffect, useRef, useState } from "react";
import { useUser } from "../contexts/UserContext";

const dropDownOptions = [
  { label: "Tournament Info" },
  { label: "Tournament Rules" },
  { label: "Team Registration" },
  { label: "Qualifier Lobby" },
];

export default function NavBar() {
  const { currentUser } = useUser();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
      timeoutRef.current = null;
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="grid grid-cols-[4fr_1fr] mx-6 my-5 text-lg">
      <div className="flex">
        <ul className="flex gap-10 font-medium text-sm align-middle items-center">
          <li className="text-primary-color font-bold text-lg">
            Tournament Handler
          </li>
          <li className="text-tertiary-color font-bold cursor-pointer">
            Home
          </li>
          <li className="cursor-pointer">All Tournaments</li>
          <li
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="inline-block">
              <button
                className="flex items-center"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                Thailand Endurance Cup Season 4
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <ul className="absolute mt-2 bg-white border border-gray-300 shadow-lg rounded-md z-10 w-48">
                  {dropDownOptions.map((option, id) => (
                    <li
                      key={id}
                      className="p-2 hover:bg-secondary-color hover:text-white cursor-pointer"
                      onClick={() =>
                        alert(`You clicked on ${option.label}`)
                      }
                    >
                      {option.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        </ul>
      </div>

      <div className="flex justify-end gap-5 items-center text-sm font-semibold">
        {currentUser ? (
          <>
            <div className="text-gray-700">
              Username: {currentUser.username}
            </div>
            <div>
              <img
                src={currentUser.iconLink}
                alt="User Icon"
                className="w-8 h-8 rounded-full"
              />
            </div>
          </>
        ) : (
          <div>
            <button
              onClick={() => alert("Login functionality here")}
              className="px-4 py-2 bg-primary-color text-white rounded hover:bg-primary-dark"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
