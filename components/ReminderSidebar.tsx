import React, { useState, useEffect } from 'react';

interface ReminderSidebarProps {
  onClose: () => void;
  onSetReminder: (time: string) => void;
  initialTime: string;
}

const ReminderSidebar: React.FC<ReminderSidebarProps> = ({ onClose, onSetReminder, initialTime }) => {
  const [time, setTime] = useState(initialTime);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setTime(initialTime);
  }, [initialTime]);
  
  const handleSetReminder = () => {
    if (time) {
      onSetReminder(time);
      const [hour, minute] = time.split(':');
      const ampm = parseInt(hour) >= 12 ? 'PM' : 'AM';
      const displayHour = parseInt(hour) % 12 || 12;
      setMessage(`Reminder set for ${displayHour}:${minute} ${ampm} daily!`);
      setTimeout(() => setMessage(''), 3000);
    }
  };
  
  const handleClearReminder = () => {
      onSetReminder(''); // Pass empty string to clear
      setTime('');
      setMessage('Reminder cleared!');
      setTimeout(() => setMessage(''), 3000);
  }

  return (
    <aside className="w-80 bg-gray-800 p-4 flex flex-col border-l border-gray-700/50 overflow-y-auto flex-shrink-0">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-cyan-400">Daily Reminder</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col space-y-4">
        <p className="text-sm text-gray-300">Choose a time to receive a daily notification to solve a DSA problem.</p>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-gray-200 focus:outline-none focus:ring-1 focus:ring-cyan-500"
        />
        <div className="flex space-x-2">
            <button
              onClick={handleSetReminder}
              disabled={!time}
              className="flex-1 bg-cyan-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-cyan-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
            >
              Set Reminder
            </button>
            <button
              onClick={handleClearReminder}
              disabled={!initialTime}
              className="flex-1 bg-red-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
            >
              Clear
            </button>
        </div>
        {message && <p className="text-center text-green-400 text-sm mt-2">{message}</p>}
      </div>
    </aside>
  );
};

export default ReminderSidebar;
