import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import ChatInterface from './components/ChatInterface';
import History from './components/History';
import Tutorials from './components/Tutorials';
import Playground from './components/Playground';
import InterviewQuestionsSidebar from './components/InterviewQuestionsSidebar';
import ReminderSidebar from './components/ReminderSidebar';
import LinkedInPostSidebar from './components/LinkedInPostSidebar';


const App: React.FC = () => {
  const [activeView, setActiveView] = useState('dashboard');
  const [isInterviewSidebarOpen, setIsInterviewSidebarOpen] = useState(false);
  const [isReminderSidebarOpen, setIsReminderSidebarOpen] = useState(false);
  const [isLinkedInSidebarOpen, setIsLinkedInSidebarOpen] = useState(false);
  const [chatSessionId, setChatSessionId] = useState(Date.now());
  const [reminderTime, setReminderTime] = useState<string>(() => localStorage.getItem('dsaReminderTime') || '');

  const notificationTimerId = useRef<number | null>(null);

  useEffect(() => {
    const showNotification = () => {
      new Notification("DSA Practice Reminder", {
        body: "Time to solve a DSA problem! Keep your skills sharp. 💪",
        icon: '/vite.svg',
      });
    };
    
    // Always clear previous timer on re-run
    if (notificationTimerId.current) {
        clearTimeout(notificationTimerId.current);
    }

    if (!reminderTime) return; // Exit if no time is set

    const schedule = () => {
        const [hour, minute] = reminderTime.split(':').map(Number);
        
        const scheduleNext = () => {
            const now = new Date();
            let nextNotificationTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute, 0, 0);

            if (now.getTime() > nextNotificationTime.getTime()) {
                nextNotificationTime.setDate(nextNotificationTime.getDate() + 1);
            }
            
            const timeUntilNextNotification = nextNotificationTime.getTime() - now.getTime();

            notificationTimerId.current = window.setTimeout(() => {
                showNotification();
                scheduleNext(); // Re-schedule for the next day
            }, timeUntilNextNotification);
        }
        scheduleNext();
    };

    if ('Notification' in window) {
        if (Notification.permission !== 'granted') {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') schedule();
            });
        } else {
            schedule();
        }
    }

    return () => {
        if (notificationTimerId.current) {
            clearTimeout(notificationTimerId.current);
        }
    };
  }, [reminderTime]);

  const handleSetReminder = (time: string) => {
    localStorage.setItem('dsaReminderTime', time);
    setReminderTime(time);
  };

  const startNewChat = () => {
    setChatSessionId(Date.now());
    setActiveView('playground');
  };

  const closeAllSidebars = () => {
    setIsInterviewSidebarOpen(false);
    setIsReminderSidebarOpen(false);
    setIsLinkedInSidebarOpen(false);
  };

  const toggleReminderSidebar = () => {
      if(!isReminderSidebarOpen) closeAllSidebars();
      setIsReminderSidebarOpen(prev => !prev);
  }
  
  const toggleLinkedInSidebar = () => {
      if(!isLinkedInSidebarOpen) closeAllSidebars();
      setIsLinkedInSidebarOpen(prev => !prev);
  }

  const toggleInterviewSidebar = () => {
      if(!isInterviewSidebarOpen) closeAllSidebars();
      setIsInterviewSidebarOpen(prev => !prev);
  }


  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <ChatInterface setActiveView={setActiveView} />;
      case 'history':
        return <History />;
      case 'tutorials':
        return <Tutorials />;
      case 'playground':
        return <Playground key={chatSessionId} />;
      default:
        return <ChatInterface setActiveView={setActiveView} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 font-sans">
      <Sidebar 
        activeView={activeView} 
        setActiveView={setActiveView}
        toggleInterviewSidebar={toggleInterviewSidebar}
        toggleReminderSidebar={toggleReminderSidebar}
        toggleLinkedInSidebar={toggleLinkedInSidebar}
        startNewChat={startNewChat}
      />
      <main className="flex-1 flex flex-col overflow-hidden">
        {renderContent()}
      </main>
      {isInterviewSidebarOpen && <InterviewQuestionsSidebar onClose={() => setIsInterviewSidebarOpen(false)} />}
      {isReminderSidebarOpen && <ReminderSidebar onClose={() => setIsReminderSidebarOpen(false)} onSetReminder={handleSetReminder} initialTime={reminderTime} />}
      {isLinkedInSidebarOpen && <LinkedInPostSidebar onClose={() => setIsLinkedInSidebarOpen(false)} />}
    </div>
  );
};

export default App;