import React from 'react';

const AchievementsSection: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Achievements</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Achievement 1: Description of the achievement.</li>
        <li>Achievement 2: Description of the achievement.</li>
        <li>Achievement 3: Description of the achievement.</li>
        {/* Add more achievements as needed */}
      </ul>
    </div>
  );
};

export default AchievementsSection;
