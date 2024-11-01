"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, User, Users } from 'lucide-react';
import React, { useState } from 'react';

interface Lobby {
  name: string;
  date: string;
  time: string;
  referees: string;
  teams: string;
}

const LobbyCard: React.FC<Lobby> = ({ name, date, time, referees, teams }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card className="w-full max-w-4xl p-4 mb-4 mx-auto cursor-pointer" onClick={() => setShowDetails(!showDetails)}>
      <CardContent>
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold mb-2">{name}</h2>
            <div className="flex items-center text-gray-700 mb-2">
              <Clock className="w-4 h-4 mr-2" />
              <span>{date} {time}</span>
            </div>
            <div className="flex items-center text-gray-700 mb-2">
              <User className="w-4 h-4 mr-2" />
              <span>Referees {referees}</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Users className="w-4 h-4 mr-2" />
              <span>Team {teams}</span>
            </div>
          </div>
          <Button className="bg-primary-color">Delete</Button>
        </div>
        <div
          className={`mt-4 text-gray-600 transition-max-height duration-300 ease-in-out overflow-hidden ${
            showDetails ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p>Additional details about the lobby can be shown here.</p>
        </div>
      </CardContent>
    </Card>
  );
};

const LobbyCardList: React.FC = () => {
  const lobbies: Lobby[] = [
    {
      name: 'Qualifier Lobby Name 2',
      date: '12 May 2024',
      time: '10:00 - 14:00',
      referees: '1/1',
      teams: '2/3'
    },
    {
      name: 'Qualifier Lobby Name 2',
      date: '12 May 2024',
      time: '10:00 - 14:00',
      referees: '0/1',
      teams: '2/3'
    },
    {
      name: 'Qualifier Lobby Name 3',
      date: '12 May 2024',
      time: '10:00 - 14:00',
      referees: '0/1',
      teams: '2/3'
    }
  ];

  return (
    <div className="space-y-4">
      {lobbies.map((lobby, index) => (
        <LobbyCard key={index} {...lobby} />
      ))}
    </div>
  );
};

export default LobbyCardList;
