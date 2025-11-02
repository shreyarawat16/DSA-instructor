import React from 'react';

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  toggleInterviewSidebar: () => void;
  toggleReminderSidebar: () => void;
  toggleLinkedInSidebar: () => void;
  startNewChat: () => void;
}

const NavItem: React.FC<{
  viewName: string;
  label: string;
  icon: React.ReactElement;
  activeView: string;
  onClick: (view: string) => void;
}> = ({ viewName, label, icon, activeView, onClick }) => {
  const isActive = activeView === viewName;
  return (
    <li>
      <button
        onClick={() => onClick(viewName)}
        className={`flex items-center w-full text-left p-3 rounded-lg transition-colors ${
          isActive
            ? 'bg-cyan-600/20 text-cyan-300'
            : 'text-gray-400 hover:bg-gray-700 hover:text-gray-200'
        }`}
      >
        <span className="mr-3">{icon}</span>
        <span className="font-medium">{label}</span>
      </button>
    </li>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ 
    activeView, 
    setActiveView, 
    toggleInterviewSidebar, 
    toggleReminderSidebar,
    toggleLinkedInSidebar,
    startNewChat 
}) => {
  return (
    <aside className="w-64 bg-gray-800 p-4 flex flex-col border-r border-gray-700/50">
      <div className="mb-4">
        <h1 className="text-xl font-bold text-cyan-400">DSA Instructor AI</h1>
        <p className="text-sm text-gray-400">Learning Hub</p>
      </div>
      
      <button
        onClick={startNewChat}
        className="flex items-center justify-center w-full bg-cyan-600 text-white font-semibold p-2.5 rounded-lg mb-4 hover:bg-cyan-500 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        New Chat
      </button>

      <nav className="flex-grow">
        <ul className="space-y-2">
          <NavItem
            viewName="dashboard"
            label="Dashboard"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>}
            activeView={activeView}
            onClick={setActiveView}
          />
          <NavItem
            viewName="playground"
            label="Playground"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
            activeView={activeView}
            onClick={setActiveView}
          />
          <NavItem
            viewName="history"
            label="Chat History"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
            activeView={activeView}
            onClick={setActiveView}
          />
          <NavItem
            viewName="tutorials"
            label="Tutorials"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v11.494M12 6.253A2.25 2.25 0 009.75 4H6.75A2.25 2.25 0 004.5 6.253v11.494A2.25 2.25 0 006.75 20h3M12 6.253A2.25 2.25 0 0114.25 4h3A2.25 2.25 0 0119.5 6.253v11.494A2.25 2.25 0 0117.25 20h-3" /></svg>}
            activeView={activeView}
            onClick={setActiveView}
          />
        </ul>
        <div className="border-t border-gray-700 my-4"></div>
         <ul className="space-y-2">
            <li>
              <button onClick={toggleReminderSidebar} className="flex items-center w-full text-left p-3 rounded-lg transition-colors text-gray-400 hover:bg-gray-700 hover:text-gray-200">
                <span className="mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                </span>
                <span className="font-medium">Daily Reminder</span>
              </button>
            </li>
            <li>
              <button onClick={toggleLinkedInSidebar} className="flex items-center w-full text-left p-3 rounded-lg transition-colors text-gray-400 hover:bg-gray-700 hover:text-gray-200">
                <span className="mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-2.098 1.5-3.698 3.5-3.698 2.005 0 3.5 1.601 3.5 3.698v8.4h4.968v-9.09c0-3.528-1.926-6.4-5.454-6.4-3.528 0-5.455 2.872-5.455 6.4v.091z"/></svg>
                </span>
                <span className="font-medium">LinkedIn Post</span>
              </button>
            </li>
           <li>
              <button
                onClick={toggleInterviewSidebar}
                className={`flex items-center w-full text-left p-3 rounded-lg transition-colors text-gray-400 hover:bg-gray-700 hover:text-gray-200`}
              >
                <span className="mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </span>
                <span className="font-medium">Interview Qs</span>
              </button>
            </li>
            <li>
              <a
                href="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center w-full text-left p-3 rounded-lg transition-colors text-gray-400 hover:bg-gray-700 hover:text-gray-200"
              >
                <span className="mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </span>
                <span className="font-medium">Striver's A2Z Sheet</span>
              </a>
            </li>
         </ul>
      </nav>
      <div className="mt-auto text-center text-xs text-gray-500">
        <p>Powered by Gemini</p>
      </div>
    </aside>
  );
};

export default Sidebar;