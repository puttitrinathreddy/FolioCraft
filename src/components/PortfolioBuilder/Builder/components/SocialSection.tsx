import React from 'react';

const SocialSection: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Social Links</h2>
      <ul className="space-y-2">
        <li>
          <a href="#" className="text-blue-500 hover:underline">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-500 hover:underline">
            GitHub
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-500 hover:underline">
            Twitter
          </a>
        </li>
        {/* Add more social links as needed */}
      </ul>
    </div>
  );
};

export default SocialSection;
