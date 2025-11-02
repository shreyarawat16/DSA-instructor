import React from 'react';

const questionsData = {
  "Array": [
    { name: "Two Sum", lc: "https://leetcode.com/problems/two-sum/", gfg: "https://www.geeksforgeeks.org/check-if-pair-with-given-sum-exists-in-array/", difficulty: "Easy" },
    { name: "Best Time to Buy and Sell Stock", lc: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", gfg: "https://www.geeksforgeeks.org/stock-buy-sell/", difficulty: "Easy" },
    { name: "Contains Duplicate", lc: "https://leetcode.com/problems/contains-duplicate/", gfg: "https://www.geeksforgeeks.org/find-duplicates-in-on-time-and-constant-extra-space/", difficulty: "Easy" },
    { name: "Product of Array Except Self", lc: "https://leetcode.com/problems/product-of-array-except-self/", gfg: "https://www.geeksforgeeks.org/a-product-array-puzzle/", difficulty: "Medium" },
    { name: "Maximum Subarray", lc: "https://leetcode.com/problems/maximum-subarray/", gfg: "https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/", difficulty: "Medium" },
    { name: "3Sum", lc: "https://leetcode.com/problems/3sum/", gfg: "https://www.geeksforgeeks.org/find-a-triplet-that-sum-to-a-given-value/", difficulty: "Medium" },
  ],
  "String": [
    { name: "Longest Substring Without Repeating Characters", lc: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", gfg: "https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/", difficulty: "Medium" },
    { name: "Valid Anagram", lc: "https://leetcode.com/problems/valid-anagram/", gfg: "https://www.geeksforgeeks.org/check-whether-two-strings-are-anagram-of-each-other/", difficulty: "Easy" },
    { name: "Longest Palindromic Substring", lc: "https://leetcode.com/problems/longest-palindromic-substring/", gfg: "https://www.geeksforgeeks.org/longest-palindromic-substring/", difficulty: "Medium" },
    { name: "Valid Parentheses", lc: "https://leetcode.com/problems/valid-parentheses/", gfg: "https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/", difficulty: "Easy" },
  ],
  "Linked List": [
    { name: "Reverse Linked List", lc: "https://leetcode.com/problems/reverse-linked-list/", gfg: "https://www.geeksforgeeks.org/reverse-a-linked-list/", difficulty: "Easy" },
    { name: "Merge Two Sorted Lists", lc: "https://leetcode.com/problems/merge-two-sorted-lists/", gfg: "https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/", difficulty: "Easy" },
    { name: "Linked List Cycle", lc: "https://leetcode.com/problems/linked-list-cycle/", gfg: "https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/", difficulty: "Easy" },
    { name: "Remove Nth Node From End of List", lc: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", gfg: "https://www.geeksforgeeks.org/delete-nth-node-from-end-of-linked-list/", difficulty: "Medium" },
  ],
  "Two Pointers": [
      { name: "Container With Most Water", lc: "https://leetcode.com/problems/container-with-most-water/", gfg: "https://www.geeksforgeeks.org/container-with-most-water/", difficulty: "Medium" },
      { name: "Trapping Rain Water", lc: "https://leetcode.com/problems/trapping-rain-water/", gfg: "https://www.geeksforgeeks.org/trapping-rain-water/", difficulty: "Hard" },
      { name: "Sort Colors", lc: "https://leetcode.com/problems/sort-colors/", gfg: "https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/", difficulty: "Medium" },
      { name: "Valid Palindrome", lc: "https://leetcode.com/problems/valid-palindrome/", gfg: "https://www.geeksforgeeks.org/program-to-check-if-a-string-is-palindrome-or-not/", difficulty: "Easy" },
  ],
  "Sliding Window": [
      { name: "Minimum Window Substring", lc: "https://leetcode.com/problems/minimum-window-substring/", gfg: "https://www.geeksforgeeks.org/find-the-smallest-window-in-a-string-containing-all-characters-of-another-string/", difficulty: "Hard" },
      { name: "Sliding Window Maximum", lc: "https://leetcode.com/problems/sliding-window-maximum/", gfg: "https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/", difficulty: "Hard" },
      { name: "Permutation in String", lc: "https://leetcode.com/problems/permutation-in-string/", gfg: "https://www.geeksforgeeks.org/anagram-substring-search-search-for-all-permutations/", difficulty: "Medium" },
      { name: "Longest Repeating Character Replacement", lc: "https://leetcode.com/problems/longest-repeating-character-replacement/", gfg: "https://www.geeksforgeeks.org/longest-substring-with-at-most-k-distinct-characters/", difficulty: "Medium" },
  ],
  "Heap": [
      { name: "Kth Largest Element in an Array", lc: "https://leetcode.com/problems/kth-largest-element-in-an-array/", gfg: "https://www.geeksforgeeks.org/kth-largest-element-in-a-stream/", difficulty: "Medium" },
      { name: "Find Median from Data Stream", lc: "https://leetcode.com/problems/find-median-from-data-stream/", gfg: "https://www.geeksforgeeks.org/median-of-stream-of-integers-running-integers/", difficulty: "Hard" },
      { name: "Merge k Sorted Lists", lc: "https://leetcode.com/problems/merge-k-sorted-lists/", gfg: "https://www.geeksforgeeks.org/merge-k-sorted-linked-lists/", difficulty: "Hard" },
      { name: "Top K Frequent Elements", lc: "https://leetcode.com/problems/top-k-frequent-elements/", gfg: "https://www.geeksforgeeks.org/find-k-most-frequent-numbers-in-a-stream/", difficulty: "Medium" },
  ],
  "Dynamic Programming": [
      { name: "Climbing Stairs", lc: "https://leetcode.com/problems/climbing-stairs/", gfg: "https://www.geeksforgeeks.org/count-ways-to-reach-the-nth-stair/", difficulty: "Easy" },
      { name: "Coin Change", lc: "https://leetcode.com/problems/coin-change/", gfg: "https://www.geeksforgeeks.org/coin-change-dp-7/", difficulty: "Medium" },
      { name: "Longest Increasing Subsequence", lc: "https://leetcode.com/problems/longest-increasing-subsequence/", gfg: "https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/", difficulty: "Medium" },
      { name: "Word Break", lc: "https://leetcode.com/problems/word-break/", gfg: "https://www.geeksforgeeks.org/word-break-problem-dp-32/", difficulty: "Medium" },
  ],
  "Graph": [
      { name: "Number of Islands", lc: "https://leetcode.com/problems/number-of-islands/", gfg: "https://www.geeksforgeeks.org/find-number-of-islands/", difficulty: "Medium" },
      { name: "Clone Graph", lc: "https://leetcode.com/problems/clone-graph/", gfg: "https://www.geeksforgeeks.org/clone-an-undirected-graph/", difficulty: "Medium" },
      { name: "Course Schedule", lc: "https://leetcode.com/problems/course-schedule/", gfg: "https://www.geeksforgeeks.org/find-whether-it-is-possible-to-finish-all-tasks-or-not-from-given-dependencies/", difficulty: "Medium" },
      { name: "Pacific Atlantic Water Flow", lc: "https://leetcode.com/problems/pacific-atlantic-water-flow/", gfg: "https://www.geeksforgeeks.org/pacific-atlantic-water-flow/", difficulty: "Medium" },
  ],
};

const DifficultyBadge: React.FC<{ difficulty: string }> = ({ difficulty }) => {
    const baseClasses = "text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0";
    let colorClasses = "";
  
    switch (difficulty.toLowerCase()) {
      case 'easy':
        colorClasses = "bg-green-800/70 text-green-300";
        break;
      case 'medium':
        colorClasses = "bg-yellow-800/70 text-yellow-300";
        break;
      case 'hard':
        colorClasses = "bg-red-800/70 text-red-300";
        break;
      default:
        colorClasses = "bg-gray-700 text-gray-300";
    }
  
    return <span className={`${baseClasses} ${colorClasses}`}>{difficulty}</span>;
};

interface InterviewQuestionsSidebarProps {
  onClose: () => void;
}

const InterviewQuestionsSidebar: React.FC<InterviewQuestionsSidebarProps> = ({ onClose }) => {
  return (
    <aside className="w-80 bg-gray-800 p-4 flex flex-col border-l border-gray-700/50 overflow-y-auto flex-shrink-0">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-cyan-400">Interview Questions</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="space-y-2">
        {Object.entries(questionsData).map(([topic, questions]) => (
          <details key={topic} className="group rounded-md transition-colors hover:bg-gray-700/50">
            <summary className="cursor-pointer list-none flex items-center justify-between p-2">
              <span className="font-semibold text-gray-200">{topic}</span>
              <svg className="h-5 w-5 text-gray-400 group-open:rotate-90 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </summary>
            <ul className="p-2 pl-4 mt-1 space-y-3">
              {questions.map(q => (
                <li key={q.name} className="text-sm text-gray-300 border-l-2 border-gray-600 pl-3 py-1">
                  <div className="flex items-center justify-between mb-1.5 gap-2">
                    <p className="font-medium">{q.name}</p>
                    <DifficultyBadge difficulty={q.difficulty} />
                  </div>
                  <div className="flex space-x-3 mb-2">
                    <a href={q.lc} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline text-xs font-semibold">LEETCODE</a>
                    <a href={q.gfg} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline text-xs font-semibold">GFG</a>
                  </div>
                  <details className="group/notes">
                    <summary className="cursor-pointer list-none text-xs text-gray-400 hover:text-gray-200 flex items-center">
                      Notes
                      <svg className="h-4 w-4 ml-1 group-open/notes:rotate-90 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </summary>
                    <div className="mt-2">
                      <textarea
                        className="w-full bg-gray-900 border border-gray-600 rounded-md p-2 text-xs text-gray-300 focus:outline-none focus:ring-1 focus:ring-cyan-500 resize-y"
                        placeholder="Your notes, approach, edge cases..."
                        rows={4}
                      ></textarea>
                    </div>
                  </details>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </aside>
  );
};

export default InterviewQuestionsSidebar;