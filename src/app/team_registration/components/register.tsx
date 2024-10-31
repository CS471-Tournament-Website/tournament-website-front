"use client"

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { useUser } from '@/contexts/UserContext';

const TeamRegistrationForm = () => {
    type member = {
        uuid: string,
        iconLink: string,
        username: string,
    }
    const [isOpen, setIsOpen] = useState(true);
    const [error, setError] = useState('');
    const [members, setMembers] = useState<member[]>([]);
    const [teamAvatar, setTeamAvatar] = useState<string>("/plus.png");
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { currentUser } = useUser();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setError('All inputs are required.');
    };

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setTeamAvatar(imageUrl);
        }
    };

    const memberSlots = Array.from({ length: 5 }, (_, i) => i + 1);

    return (
        <div className="w-full max-w-full p-4">
            <div className="px-4">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 font-medium text-lg p-3 w-full text-left"
                >
                    Register
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

                <div className={`transition-all duration-200 ${
                    isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                    <form onSubmit={handleSubmit} className="p-6">
                        <div className="flex gap-6">
                            {/* Team Avatar with file input */}
                            <div 
                                onClick={handleImageClick}
                                className="w-52 h-52 bg-secondary-color rounded flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                            >
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleImageChange}
                                    accept="image/*"
                                    className="hidden"
                                />
                                <Image 
                                    src={teamAvatar}
                                    alt='Team avatar'
                                    width={teamAvatar === "/plus.png" ? 50 : 128}
                                    height={teamAvatar === "/plus.png" ? 50 : 128}
                                    className="object-cover rounded"
                                    style={{
                                        width: teamAvatar === "/plus.png" ? '50px' : '100%',
                                        height: teamAvatar === "/plus.png" ? '50px' : '100%',
                                    }}
                                />
                            </div>

                            {/* Rest of the form remains the same */}
                            <div className="flex-1 space-y-4">
                                <div>
                                    <label className="block text-gray-700 mb-1">Team Name</label>
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 mb-1">Captain</label>
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <div className="w-8 h-8 bg-secondary-color rounded-full flex items-center justify-center">
                                            <Image 
                                                src={currentUser?.iconLink || "/person-fill.png"} 
                                                alt='profile pic' 
                                                width={25} 
                                                height={25}
                                            />
                                        </div>
                                        <span>(Head) {currentUser?.username || "Username"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Members Section */}
                        <div className="mt-6">
                            <label className="block text-gray-700 mb-3">Members</label>
                            <div className="grid grid-cols-2 gap-4">
                                {memberSlots.map((index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-secondary-color rounded-full flex items-center justify-center">
                                            <Image 
                                                src={members[index - 1]?.iconLink || "/person-fill.png"} 
                                                alt='' 
                                                width={25} 
                                                height={25}
                                            />
                                        </div>
                                        <div className="flex-1 relative">
                                            <span className="absolute p-2 rounded-l-lg bg-stone-300/30 border border-l-1">@</span>
                                            <input
                                                type="text"
                                                placeholder={`Username ${index}`}
                                                className="w-full pl-10 p-2 border border-gray-300 rounded-lg"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="mt-6 flex items-center gap-3">
                            <button
                                type="submit"
                                className="px-4 py-2 bg-secondary-color text-white rounded hover:bg-gray-700"
                            >
                                Register
                            </button>
                            <button
                                type="button"
                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                            >
                                Clear
                            </button>
                            {error && <span className="text-red-500 text-sm">{error}</span>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TeamRegistrationForm;