
import React from 'react';
import ChatInterface from './components/ChatInterface';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans flex flex-col">
      <header className="bg-gray-800 shadow-lg sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3">
          <h1 className="text-xl md:text-2xl font-bold text-cyan-400">
            DSA Instructor AI
          </h1>
          <p className="text-sm text-gray-400">Your no-nonsense guide to Data Structures & Algorithms</p>
        </div>
      </header>
      <main className="flex-grow flex flex-col">
        <ChatInterface />
      </main>
    </div>
  );
};

export default App;
