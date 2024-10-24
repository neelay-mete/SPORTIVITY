import React from 'react';
import { Trophy, Users, Calendar, Activity, Disc, Heart, Dumbbell } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface SportIconProps {
  name: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition duration-300">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

const SportIcon: React.FC<SportIconProps> = ({ name, icon }) => (
  <div className="text-center">
    <div className="bg-gray-200 dark:bg-gray-700 rounded-full p-4 mb-2 mx-auto w-16 h-16 flex items-center justify-center transform hover:rotate-12 transition duration-300">
      {icon}
    </div>
    <span className="text-sm font-medium dark:text-gray-300">{name}</span>
  </div>
);

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-blue-600 dark:text-blue-400">Welcome to Sportivity</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Your ultimate platform for sports clubs, events, and live scores
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard
          icon={<Users className="w-12 h-12 text-blue-500" />}
          title="Clubs"
          description="Join or create sports clubs in your area"
        />
        <FeatureCard
          icon={<Calendar className="w-12 h-12 text-green-500" />}
          title="Events"
          description="Discover and participate in exciting sports events"
        />
        <FeatureCard
          icon={<Activity className="w-12 h-12 text-red-500" />}
          title="Live Scores"
          description="Stay updated with real-time scores across various sports"
        />
        <FeatureCard
          icon={<Trophy className="w-12 h-12 text-yellow-500" />}
          title="Achievements"
          description="Track your progress and earn rewards"
        />
      </div>

      <section className="mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-gray-200">Featured Sports</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-8">
          <SportIcon name="Football" icon={<Trophy className="w-8 h-8" />} />
          <SportIcon name="Basketball" icon={<Disc className="w-8 h-8" />} />
          <SportIcon name="Tennis" icon={<Activity className="w-8 h-8" />} />
          <SportIcon name="Cricket" icon={<Trophy className="w-8 h-8" />} />
          <SportIcon name="Running" icon={<Activity className="w-8 h-8" />} />
          <SportIcon name="Cardio" icon={<Heart className="w-8 h-8" />} />
          <SportIcon name="Fitness" icon={<Dumbbell className="w-8 h-8" />} />
        </div>
      </section>
    </div>
  );
};

export default Home;