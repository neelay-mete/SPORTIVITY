import React from 'react';
import { Calendar, MapPin, Trophy, Disc, Activity, Heart, Dumbbell } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Event {
  name: string;
  date: string;
  location: string;
  sport: string;
  icon: LucideIcon;
}

const events: Event[] = [
  { name: 'City Marathon', date: '2024-05-15', location: 'Downtown', sport: 'Running', icon: Activity },
  { name: 'Summer Basketball Tournament', date: '2024-07-10', location: 'City Arena', sport: 'Basketball', icon: Disc },
  { name: 'Tennis Open', date: '2024-08-20', location: 'Central Courts', sport: 'Tennis', icon: Activity },
  { name: 'Cricket Championship', date: '2024-09-05', location: 'National Stadium', sport: 'Cricket', icon: Trophy },
  { name: 'City Run', date: '2024-06-30', location: 'City Circuit', sport: 'Running', icon: Activity },
  { name: 'Cardio Challenge', date: '2024-07-25', location: 'Fitness Center', sport: 'Cardio', icon: Heart },
  { name: 'Fitness Expo', date: '2024-08-05', location: 'Convention Center', sport: 'Fitness', icon: Dumbbell }
];

const Events: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform hover:scale-105 transition duration-300">
            <div className="flex items-center mb-4">
              <event.icon className="w-8 h-8 text-blue-500 mr-3" />
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{event.name}</h2>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{new Date(event.date).toLocaleDateString('en-US', { 
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{event.location}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Sport: {event.sport}</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition w-full">
              Register
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;