"use client";

import Image from "next/image";
import React, { useState } from "react";

interface TeamMember {
  username: string;
  profilePicture: string;
  rank: number;
}

interface Team {
  id: string;
  name: string;
  teamPicture: string;
  captain: TeamMember;
  members: TeamMember[];
  status: "Unapproved" | "Approved" | "Rejected" | "Selected";
  createdAt: string;
  selectedStatus: string | null;
  isSelected: boolean;
}

// Updated mock data with 5 members per team
const mockTeams: Team[] = [
  {
    id: "1",
    name: "Speed Demons",
    teamPicture: "/api/placeholder/64/64",
    captain: {
      username: "JohnRacer",
      profilePicture: "/api/placeholder/32/32",
      rank: 1324,
    },
    members: [
      {
        username: "AliceDrift",
        profilePicture: "/api/placeholder/32/32",
        rank: 1425,
      },
      {
        username: "BobTurbo",
        profilePicture: "/api/placeholder/32/32",
        rank: 1356,
      },
      {
        username: "CharlieSpeed",
        profilePicture: "/api/placeholder/32/32",
        rank: 1389,
      },
      {
        username: "DianaNitro",
        profilePicture: "/api/placeholder/32/32",
        rank: 1412,
      },
    ],
    status: "Unapproved",
    createdAt: "2024-01-15T10:00:00Z",
    selectedStatus: null,
    isSelected: false,
  },
  {
    id: "2",
    name: "Drift Kings",
    teamPicture: "/api/placeholder/64/64",
    captain: {
      username: "MarySpeed",
      profilePicture: "/api/placeholder/32/32",
      rank: 1445,
    },
    members: [
      {
        username: "TomRush",
        profilePicture: "/api/placeholder/32/32",
        rank: 1398,
      },
      {
        username: "SarahDash",
        profilePicture: "/api/placeholder/32/32",
        rank: 1402,
      },
      {
        username: "PaulDrift",
        profilePicture: "/api/placeholder/32/32",
        rank: 1367,
      },
      {
        username: "LisaZoom",
        profilePicture: "/api/placeholder/32/32",
        rank: 1434,
      },
    ],
    status: "Approved",
    createdAt: "2024-01-16T11:30:00Z",
    selectedStatus: null,
    isSelected: false,
  },
  {
    id: "3",
    name: "Circuit Masters",
    teamPicture: "/api/placeholder/64/64",
    captain: {
      username: "DaveRace",
      profilePicture: "/api/placeholder/32/32",
      rank: 1289,
    },
    members: [
      {
        username: "EvaLap",
        profilePicture: "/api/placeholder/32/32",
        rank: 1367,
      },
      {
        username: "ChrisTrack",
        profilePicture: "/api/placeholder/32/32",
        rank: 1334,
      },
      {
        username: "AnnaSpeed",
        profilePicture: "/api/placeholder/32/32",
        rank: 1401,
      },
      {
        username: "MikeRush",
        profilePicture: "/api/placeholder/32/32",
        rank: 1378,
      },
    ],
    status: "Rejected",
    createdAt: "2024-01-17T09:15:00Z",
    selectedStatus: null,
    isSelected: false,
  },
];

const Register: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>(mockTeams);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedTab, setSelectedTab] = useState<string>("All");
  const [selectAll, setSelectAll] = useState<boolean>(false);

  const tabs: string[] = [
    "All",
    "Unapproved",
    "Approved",
    "Rejected",
    "Selected",
  ];

  const handleStatusChange = (id: string, newStatus: string | null) => {
    setTeams(
      teams.map((team) => {
        if (team.id === id) {
          if (newStatus === null) {
            console.log(team);

            return { ...team, selectedStatus: null };
          }
          return { ...team, selectedStatus: newStatus };
        }
        return team;
      })
    );
  };

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setTeams(
      teams.map((team) => ({
        ...team,
        isSelected: newSelectAll,
      }))
    );
  };

  const handleTeamSelect = (id: string) => {
    setTeams(
      teams.map((team) => {
        if (team.id === id) {
          return { ...team, isSelected: !team.isSelected };
        }
        return team;
      })
    );
    // Update selectAll state based on whether all teams are selected
    const allSelected = teams.every((team) => team.isSelected);
    setSelectAll(allSelected);
  };

  const filteredTeams = teams.filter((team) => {
    const matchesSearch =
      team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.captain.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.members.some((member) =>
        member.username.toLowerCase().includes(searchTerm.toLowerCase())
      );

    if (selectedTab === "Selected") {
      return team.isSelected && matchesSearch;
    }
    if (selectedTab === "All") return matchesSearch;
    return team.status === selectedTab && matchesSearch;
  });

  const getStatusColor = (status: Team["status"]): string => {
    const colors = {
      Approved: "text-green-600",
      Rejected: "text-red-600",
      Unapproved: "text-gray-600",
      Selected: "text-blue-600",
    };
    return colors[status];
  };

  // ... (previous interfaces and state management code remains the same)

  return (
    <div className="flex w-full max-w-6xl mx-auto px-4 gap-4">
      <div className="w-12 flex flex-col pt-[72px]">
        {/* Header checkbox - aligned with tabs */}
        <label className="h-4 flex items-center justify-center cursor-pointer mb-6">
          <input
            type="checkbox"
            checked={selectAll}
            onChange={handleSelectAll}
            className="w-4 h-4 rounded border-gray-300"
          />
        </label>

        {/* Team checkboxes */}
        <div className="flex flex-col gap-4">
          {filteredTeams.map((team) => (
            <label
              key={team.id}
              className="h-[156px] flex items-center justify-center cursor-pointer"
            >
              <input
                type="checkbox"
                checked={team.isSelected}
                onChange={() => handleTeamSelect(team.id)}
                className="w-4 h-4 rounded border-gray-300"
              />
            </label>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1">
        {/* Tabs */}
        <div className="flex gap-4 mb-4 border-b">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`py-2 px-4 ${
                selectedTab === tab
                  ? "border-b-2 border-blue-500 font-medium"
                  : "text-gray-500"
              }`}
            >
              {tab}
              <span className="ml-2 text-sm text-gray-400">
                {tab === "Selected"
                  ? teams.filter((team) => team.isSelected).length
                  : teams.filter((team) => tab === "All" || team.status === tab)
                      .length}
              </span>
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative mb-6 flex justify-between items-center">
          <div className="absolute inset-y-0 left-0 pl-3 flex-none flex items-center pointer-events-none">
            <Image src={"/search.png"} alt="search" width={15} height={15} />
          </div>
          <input
            type="text"
            className="block w-7/12 pl-10 pr-3 py-2 border rounded-md"
            placeholder="Search teams..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <p>
            Showing {filteredTeams.length} out of {teams.length}
          </p>
          <div className="flex gap-2">
            <button>Accept</button>
            <button>Reject</button>
          </div>
        </div>

        {/* Team List */}
        <div className="space-y-4">
          {filteredTeams.map((team) => (
            <div key={team.id} className="border rounded-lg p-4 bg-white">
              <div className="flex items-center gap-4">
                {/* Team Picture */}
                <div className="flex-shrink-0">
                  <img
                    src={team.teamPicture}
                    alt={`${team.name} team`}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                </div>

                {/* Team Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    {/* Team Info */}
                    <div className="flex-1">
                      <h3 className="font-medium text-lg">{team.name}</h3>
                      <div className="flex flex-col gap-4 mt-2">
                        {/* First Row: Captain + 2 Members */}
                        <div className="grid grid-cols-3 gap-4">
                          {/* Captain */}
                          <div className="flex items-center gap-2">
                            <div className="relative">
                              <img
                                src={team.captain.profilePicture}
                                alt={team.captain.username}
                                className="w-8 h-8 rounded-full object-cover"
                              />
                              <span className="absolute -bottom-1 -right-1 bg-yellow-400 text-xs px-1 rounded-full">
                                C
                              </span>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm text-gray-600">
                                {team.captain.username}
                              </span>
                              <span className="text-xs text-gray-400">
                                #{team.captain.rank}
                              </span>
                            </div>
                          </div>

                          {/* First 2 Members */}
                          {team.members.slice(0, 2).map((member, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2"
                            >
                              <img
                                src={member.profilePicture}
                                alt={member.username}
                                className="w-8 h-8 rounded-full object-cover"
                              />
                              <div className="flex flex-col">
                                <span className="text-sm text-gray-600">
                                  {member.username}
                                </span>
                                <span className="text-xs text-gray-400">
                                  #{member.rank}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Second Row: 3 Members */}
                        <div className="grid grid-cols-3 gap-4">
                          {team.members.slice(2).map((member, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2"
                            >
                              <img
                                src={member.profilePicture}
                                alt={member.username}
                                className="w-8 h-8 rounded-full object-cover"
                              />
                              <div className="flex flex-col">
                                <span className="text-sm text-gray-600">
                                  {member.username}
                                </span>
                                <span className="text-xs text-gray-400">
                                  #{member.rank}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Status and Actions */}
                    <div className="flex flex-col gap-2 items-start">
                      <div
                        className={`text-sm font-medium ${getStatusColor(
                          team.status
                        )}`}
                      >
                        {team.status}
                      </div>
                      {team.status === "Unapproved" && (
                        <div className="flex flex-col gap-2">
                          {/* Approve Option */}
                          <label className="flex items-center gap-2 cursor-pointer">
                            <div className="relative w-4 h-4 border border-gray-400 rounded-full">
                              {team.selectedStatus === "Approved" && (
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-600 rounded-full" />
                              )}
                            </div>
                            <span
                              className="text-sm text-gray-600"
                              onClick={() =>
                                handleStatusChange(team.id, "Approved")
                              }
                            >
                              Approve
                            </span>
                          </label>

                          {/* Reject Option */}
                          <label className="flex items-center gap-2 cursor-pointer">
                            <div className="relative w-4 h-4 border border-gray-400 rounded-full">
                              {team.selectedStatus === "Rejected" && (
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-600 rounded-full" />
                              )}
                            </div>
                            <span
                              className="text-sm text-gray-600"
                              onClick={() =>
                                handleStatusChange(team.id, "Rejected")
                              }
                            >
                              Reject
                            </span>
                          </label>

                          {/* Clear Button */}
                          <button
                            onClick={() => handleStatusChange(team.id, null)}
                            className="text-sm text-gray-500 hover:text-gray-700"
                          >
                            Clear
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Register;
