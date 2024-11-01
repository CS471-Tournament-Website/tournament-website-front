import React from 'react';

interface ProfileCardProps {
  imgUrl: string;
  name: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ imgUrl, name }) => {
  return (
    <div className="flex items-center space-x-2">
      <img
        src={imgUrl == null ? "./anonymous-profile.png" : imgUrl}
        alt={name}
        className="w-8 h-8 rounded-full"
      />
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
};

export default ProfileCard;
