"use client";

import { useUser } from '../contexts/UserContext';

export default function NavBar() {
  const { currentUser } = useUser();

  return (
    <div className="grid grid-cols-[4fr_1fr] m-7 text-lg">
      <div className="flex">
        <ul className="flex gap-14">
          <li>Tournament Handler</li>
          <li>Home</li>
          <li>All Tournaments</li>
          <li>Current Tournament</li>
        </ul>
      </div>
      <div className="flex justify-end gap-5">
        {currentUser ? (
          <div>
            <div>Username: {currentUser.username}</div>
            <div>
              <img src={currentUser.iconLink} alt="User Icon" />
            </div>
          </div>
        ) : (
          <div>
            <button onClick={() => alert('Login functionality here')}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

