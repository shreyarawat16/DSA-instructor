import React, { useState, useEffect, useCallback } from 'react';
import { generateCodingQuestion } from '../services/geminiService';

interface ChatInterfaceProps {
  setActiveView: (view: string) => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ setActiveView }) => {
  const [challenge, setChallenge] = useState('Loading challenge...');
  const [isChallengeLoading, setIsChallengeLoading] = useState(true);

  const POPULAR_TOPICS = ['Arrays', 'Linked Lists', 'Stacks', 'Queues', 'Trees', 'Graphs', 'Sorting', 'Dynamic Programming'];

  const fetchChallenge = useCallback(async () => {
    setIsChallengeLoading(true);
    const newChallenge = await generateCodingQuestion();
    setChallenge(newChallenge);
    setIsChallengeLoading(false);
  }, []);

  useEffect(() => {
    fetchChallenge();
  }, [fetchChallenge]);
  
  const handleTopicClick = () => {
    setActiveView('tutorials');
  }

  return (
    <div className="flex flex-col flex-grow h-full overflow-y-auto p-6 space-y-8 bg-gray-900">
      <header>
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-400 mt-1">Your DSA learning command center.</p>
      </header>
      
      <section className="bg-gray-800/50 rounded-lg p-5 shadow-lg border border-gray-700">
        <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold text-cyan-400">Today's Challenge</h2>
            <button 
                onClick={fetchChallenge} 
                disabled={isChallengeLoading}
                className="text-sm bg-cyan-600/50 hover:bg-cyan-600/80 disabled:opacity-50 disabled:cursor-wait text-white font-semibold py-1 px-3 rounded-full transition-colors"
            >
                {isChallengeLoading ? 'Loading...' : 'New Question'}
            </button>
        </div>
        <p className="text-gray-300 whitespace-pre-wrap">{challenge}</p>
      </section>

      <section>
          <h2 className="text-xl font-bold text-cyan-400 mb-4">Explore Topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {POPULAR_TOPICS.map(topic => (
                  <button 
                      key={topic}
                      onClick={handleTopicClick}
                      className="bg-gray-700 hover:bg-gray-600 text-gray-200 font-medium py-3 px-4 rounded-lg text-center transition-all duration-200 hover:scale-105"
                  >
                      {topic}
                  </button>
              ))}
          </div>
      </section>

      <section className="bg-cyan-900/30 rounded-lg p-5 text-center border border-cyan-700/50">
          <h2 className="text-xl font-bold text-cyan-300 mb-2">Have a Question?</h2>
          <p className="text-gray-300 mb-4">Jump into the Playground to chat with your AI instructor directly.</p>
          <button
            onClick={() => setActiveView('playground')}
            className="bg-cyan-600 text-white font-bold rounded-full py-2 px-6 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
          >
            Go to Playground
          </button>
      </section>
    </div>
  );
};

export default ChatInterface;