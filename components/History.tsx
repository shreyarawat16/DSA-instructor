
import React from 'react';

const History: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-gray-900">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-cyan-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h1 className="text-2xl font-bold text-gray-100 mb-2">Chat History</h1>
      <p className="text-gray-400">This feature is coming soon!</p>
      <p className="text-gray-400">Your past conversations will be saved here.</p>
    </div>
  );
};

export default History;
