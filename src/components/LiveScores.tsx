import React from 'react';
import { Activity, Trophy, Disc } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Match {
  sport: string;
  teams: [string, string];
  score: string;
  time: string;
  icon: LucideIcon;
}

const liveScores: Match[] = [
  { sport: 'Football', teams: ['City FC', 'United FC'], score: '2 - 1', time: '75:00', icon: Trophy },
  { sport: 'Basketball', teams: ['Rockets', 'Warriors'], score: '89 - 92', time: 'Q4 2:30', icon: Disc },
  { sport: 'Tennis', teams: ['Federer', 'Nadal'], score: '6-4, 3-6, 4-3', time: 'Set 3', icon: Activity },
  { sport: 'Cricket', teams: ['India', 'Australia'], score: '245/6', time: '40 overs', icon: Trophy },
];

const LiveScores: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400">Live Scores</h1>
      <div className="space-y-6">
        {liveScores.map((match) => (
          <div key={`${match.teams[0]}-${match.teams[1]}`} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform hover:scale-105 transition duration-300">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <match.icon className="w-8 h-8 text-blue-500 mr-3" />
                <span className="font-semibold text-xl text-gray-800 dark:text-gray-200">{match.sport}</span>
              </div>
              <div className="flex items-center">
                <Activity className="w-4 h-4 text-red-500 animate-pulse mr-2" />
                <span className="text-sm text-gray-500 dark:text-gray-400">{match.time}</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex-1">
                <p className="font-medium text-gray-700 dark:text-gray-300 mb-2">{match.teams[0]}</p>
                <p className="font-medium text-gray-700 dark:text-gray-300">{match.teams[1]}</p>
              </div>
              <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                {match.score}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveScores;