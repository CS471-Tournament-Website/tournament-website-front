"use client"

import { lobbiesMocks } from "@/app/_mocks/lobby_mocks";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Lobby } from "@/types/lobby";
import { ChevronLeft, ChevronRight, Clock, User as LucideUser, Users } from 'lucide-react';
import React, { useState } from 'react';
import ProfileCard from "./profileComponent";

const LobbyCard: React.FC<Lobby> = ({ name, date, time, referees, teams }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card 
      className="w-full max-w-4xl p-4 pt-7 mx-auto cursor-pointer min-h-[180px]"
      onClick={() => setShowDetails(!showDetails)}>
      <CardContent>
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold mb-2">{name}</h2>
            <div className="flex items-center text-gray-700 mb-2">
              <Clock className="w-4 h-4 mr-2" />
              <span>{date} {time}</span>
            </div>
            <div className="flex items-center text-gray-700 mb-2">
              <LucideUser className="w-4 h-4 mr-2" />
              <span>Referees {referees.length}/1</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Users className="w-4 h-4 mr-2" />
              <span>Team {teams.length}/8</span>
            </div>
          </div>
          <Button className="bg-primary-color">Delete</Button>
        </div>
        <div
          className={`mt-3 text-gray-600 transition-all duration-300 ease-in-out overflow-hidden ${
            showDetails ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="font-semibold mb-2">Referees</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {referees.map((ref, index) => (
              <ProfileCard key={index} imgUrl={
                ref.profileLink == null ? "/anonymous-profile.png" : ref.profileLink
              } name={ref.username} />
            ))}
          </div>
          <div className="font-semibold mt-4 mb-2">Teams</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {teams.map((team, index) => (
              <ProfileCard key={index} imgUrl={
                team.teamProfileLink == null ? "/anonymous-profile.png" : team.teamProfileLink
              } name={team.teamName} />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const LobbyCardList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 5;

  const lobbies = lobbiesMocks;
  const filteredLobbies = lobbies.filter(lobby =>
    lobby.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredLobbies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentLobbies = filteredLobbies.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full max-w-4xl flex flex-col min-h-[161vh]">
      <div className="flex mb-4 items-center">
        <div className="flex items-center w-full max-w-md">
          <Input
            type="text"
            placeholder="Search Users by Name, Email or Date"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="border p-2 pl-4 rounded w-full bg-gray-100"
          />
        </div>
        <div className="ml-4 text-gray-700">
          Showing <span className="font-bold">{Math.min(endIndex, filteredLobbies.length)}</span> from <span className="font-bold">{filteredLobbies.length}</span> results
        </div>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 py-6 border-t mt-auto"> {/* Added mt-auto */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(page => {
                return (
                  page === 1 ||
                  page === totalPages ||
                  Math.abs(page - currentPage) <= 1
                );
              })
              .map((page, index, array) => (
                <React.Fragment key={page}>
                  {index > 0 && array[index - 1] !== page - 1 && (
                    <span className="px-2">...</span>
                  )}
                  <Button
                    variant={currentPage === page ? "default" : "outline"}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 ${currentPage === page ? 'bg-primary-color hover:bg-primary-color/90' : ''}`}
                  >
                    {page}
                  </Button>
                </React.Fragment>
              ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}

      <div className="flex-1">
        <div className="space-y-4 mb-8">
          {currentLobbies.map((lobby, index) => (
            <LobbyCard key={index} {...lobby} />
          ))}
        </div>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 py-6 border-t mt-auto"> {/* Added mt-auto */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(page => {
                return (
                  page === 1 ||
                  page === totalPages ||
                  Math.abs(page - currentPage) <= 1
                );
              })
              .map((page, index, array) => (
                <React.Fragment key={page}>
                  {index > 0 && array[index - 1] !== page - 1 && (
                    <span className="px-2">...</span>
                  )}
                  <Button
                    variant={currentPage === page ? "default" : "outline"}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 ${currentPage === page ? 'bg-primary-color hover:bg-primary-color/90' : ''}`}
                  >
                    {page}
                  </Button>
                </React.Fragment>
              ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default LobbyCardList;
