import React, { useState } from 'react';
import { generateLinkedInPost } from '../services/geminiService';

interface LinkedInPostSidebarProps {
  onClose: () => void;
}

const LinkedInPostSidebar: React.FC<LinkedInPostSidebarProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    github: '',
    leetcode: '',
    linkedin: '',
    problemsCount: '',
    problemsList: '',
    dayNumber: '',
  });
  const [generatedPost, setGeneratedPost] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setError('');
    setGeneratedPost('');
    try {
      const post = await generateLinkedInPost(formData);
      setGeneratedPost(post);
    } catch (err) {
      setError('Failed to generate post. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleCopy = () => {
    if (generatedPost) {
      navigator.clipboard.writeText(generatedPost);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  
  const handlePostToLinkedIn = () => {
    if (generatedPost) {
      navigator.clipboard.writeText(generatedPost);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      window.open('https://www.linkedin.com/feed/?shareActive=true', '_blank', 'noopener,noreferrer');
    }
  };

  const isFormValid = formData.github && formData.leetcode && formData.linkedin && formData.problemsCount && formData.problemsList && formData.dayNumber;

  return (
    <aside className="w-80 bg-gray-800 p-4 flex flex-col border-l border-gray-700/50 flex-shrink-0">
        <div className="flex-grow overflow-y-auto pr-2">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-cyan-400">LinkedIn Post Generator</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col space-y-3">
        <div>
          <label className="text-sm font-medium text-gray-300 block mb-1">GitHub Profile URL</label>
          <input type="url" name="github" value={formData.github} onChange={handleChange} placeholder="https://github.com/username" className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-xs text-gray-200 focus:outline-none focus:ring-1 focus:ring-cyan-500" />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-300 block mb-1">LeetCode Profile URL</label>
          <input type="url" name="leetcode" value={formData.leetcode} onChange={handleChange} placeholder="https://leetcode.com/username" className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-xs text-gray-200 focus:outline-none focus:ring-1 focus:ring-cyan-500" />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-300 block mb-1">LinkedIn Profile URL</label>
          <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="https://linkedin.com/in/username" className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-xs text-gray-200 focus:outline-none focus:ring-1 focus:ring-cyan-500" />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-300 block mb-1">Day of Consistency</label>
          <input type="number" name="dayNumber" value={formData.dayNumber} onChange={handleChange} placeholder="e.g., 42" className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-xs text-gray-200 focus:outline-none focus:ring-1 focus:ring-cyan-500" />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-300 block mb-1">Number of Problems Solved</label>
          <input type="number" name="problemsCount" value={formData.problemsCount} onChange={handleChange} placeholder="e.g., 3" className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-xs text-gray-200 focus:outline-none focus:ring-1 focus:ring-cyan-500" />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-300 block mb-1">Problems & Submission Links</label>
          <textarea name="problemsList" value={formData.problemsList} onChange={handleChange} rows={4} placeholder="e.g., Two Sum - https://leetcode.com/submissions/detail/..." className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-xs text-gray-200 focus:outline-none focus:ring-1 focus:ring-cyan-500 resize-y"></textarea>
        </div>
        <button onClick={handleSubmit} disabled={isLoading || !isFormValid} className="w-full bg-cyan-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-cyan-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors">
          {isLoading ? 'Generating...' : 'Generate Post'}
        </button>
        {error && <p className="text-red-400 text-sm text-center">{error}</p>}
        {generatedPost && (
          <div className="mt-4">
            <h3 className="text-md font-semibold text-gray-200 mb-2">Generated Post:</h3>
            <textarea
              readOnly
              value={generatedPost}
              rows={10}
              className="w-full bg-gray-900 border border-gray-600 rounded-md p-2 text-sm text-gray-300 resize-y"
            ></textarea>
            <div className="flex space-x-2 mt-2">
                <button onClick={handleCopy} className="flex-1 bg-gray-600 hover:bg-gray-500 text-gray-100 font-semibold py-2 px-2 rounded-md transition-colors text-sm">
                    {copied ? 'Copied!' : 'Copy Text'}
                </button>
                <button onClick={handlePostToLinkedIn} className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-2 rounded-md transition-colors flex items-center justify-center space-x-2 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-2.098 1.5-3.698 3.5-3.698 2.005 0 3.5 1.601 3.5 3.698v8.4h4.968v-9.09c0-3.528-1.926-6.4-5.454-6.4-3.528 0-5.455 2.872-5.455 6.4v.091z"/></svg>
                    <span>Post on LinkedIn</span>
                </button>
            </div>
          </div>
        )}
      </div>
      </div>
    </aside>
  );
};

export default LinkedInPostSidebar;