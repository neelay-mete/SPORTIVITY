import React from 'react';
import { Users, Trophy, Disc, Activity, Heart, Dumbbell } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Club {
  name: string;
  sport: string;
  members: number;
  icon: LucideIcon;
}

const clubs: Club[] = [
  { name: 'City FC', sport: 'Football', members: 120, icon: Trophy },
  { name: 'Hoops Basketball Club', sport: 'Basketball', members: 85, icon: Disc },
  { name: 'Ace Tennis Academy', sport: 'Tennis', members: 60, icon: Activity },
  { name: 'Strikers Cricket Club', sport: 'Cricket', members: 100, icon: Trophy },
  { name: 'City Runners', sport: 'Running', members: 75, icon: Activity },
  { name: 'Cardio Club', sport: 'Cardio', members: 50, icon: Heart },
  { name: 'Iron Fitness Club', sport: 'Fitness', members: 200, icon: Dumbbell }
];

const Clubs: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400">Sports Clubs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {clubs.map((club) => (
          <div key={club.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform hover:scale-105 transition duration-300">
            <div className="flex items-center mb-4">
              <club.icon className="w-8 h-8 text-blue-500 mr-3" />
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{club.name}</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Sport: {club.sport}</p>
            <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
              <Users className="w-4 h-4 mr-2" />
              <span>{club.members} members</span>
            </div>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition w-full">
              Join Club
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clubs;