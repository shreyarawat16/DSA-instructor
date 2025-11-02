import React from 'react';

const tutorialsData = [
  { 
    id: 'array', 
    title: 'Arrays', 
    description: 'Learn about contiguous memory, indexing, and basic operations.',
    content: `An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together. This makes it easier to calculate the position of each element by simply adding an offset to a base value.

**Key Concepts:**
- **Elements:** The items stored in an array.
- **Index:** The numerical position of an element in the array, typically starting from 0.
- **Fixed Size:** Most traditional arrays have a fixed size, which must be specified when the array is created.

**Common Operations:**
- **Access:** O(1) - Accessing an element by its index is very fast.
- **Search:** O(n) - In the worst case, you may have to scan the entire array.
- **Insertion:** O(n) - Inserting an element may require shifting other elements.
- **Deletion:** O(n) - Deleting an element may also require shifting.`
  },
  { 
    id: 'string', 
    title: 'Strings', 
    description: 'Master string manipulation, searching, and pattern matching algorithms.',
    content: `A string is a sequence of characters. In most programming languages, strings are implemented as an array of characters. They are used to represent text.

**Key Concepts:**
- **Immutability:** In many languages (like Java, Python), strings are immutable, meaning they cannot be changed after creation. Any "modification" creates a new string.
- **Character Encoding:** Characters are stored using an encoding standard like ASCII or Unicode.

**Common Operations:**
- **Concatenation:** Joining two strings together.
- **Substring:** Extracting a part of a string.
- **Searching:** Finding the index of a character or substring.
- **Length:** Getting the number of characters in a string.`
  },
  { 
    id: 'stack', 
    title: 'Stacks', 
    description: 'Understand the Last-In, First-Out (LIFO) principle with practical examples.',
    content: `A stack is a linear data structure that follows a particular order in which the operations are performed. The order is Last-In, First-Out (LIFO). A good analogy is a stack of plates; you can only take the top plate.

**Key Operations:**
- **push(item):** Adds an item to the top of the stack.
- **pop():** Removes and returns the top item from the stack.
- **peek() / top():** Returns the top item without removing it.
- **isEmpty():** Checks if the stack is empty.

**Common Applications:**
- Function call stack (managing function calls).
- Undo/redo functionality in editors.
- Expression evaluation (e.g., converting infix to postfix).`
  },
  { 
    id: 'queue', 
    title: 'Queues', 
    description: 'Explore the First-In, First-Out (FIFO) data structure and its applications.',
    content: `A queue is a linear data structure that follows the First-In, First-Out (FIFO) principle. This is like a queue of people waiting for a bus; the first person to join the queue is the first person to get on the bus.

**Key Operations:**
- **enqueue(item):** Adds an item to the end (rear) of the queue.
- **dequeue():** Removes and returns the item from the front of the queue.
- **front():** Returns the front item without removing it.
- **isEmpty():** Checks if the queue is empty.

**Common Applications:**
- Task scheduling in operating systems.
- Breadth-First Search (BFS) algorithm in graphs.
- Buffers in networking.`
  },
  { 
    id: 'linked-list', 
    title: 'Linked Lists', 
    description: 'Dive into nodes, pointers, and the flexibility of non-contiguous memory.',
    content: `A linked list is a linear data structure where elements are not stored at contiguous memory locations. The elements are linked using pointers. Each element is a separate object called a node, which contains data and a reference (or link) to the next node in the sequence.

**Key Concepts:**
- **Node:** Consists of data and a pointer to the next node.
- **Head:** The first node in the list.
- **Tail:** The last node in the list.

**Advantages over Arrays:**
- **Dynamic Size:** Can grow or shrink as needed.
- **Efficient Insertion/Deletion:** O(1) if you have a pointer to the node before the insertion/deletion point.

**Types:**
- **Singly Linked List:** Each node points only to the next node.
- **Doubly Linked List:** Each node points to the next and the previous node.`
  },
  { 
    id: 'binary-tree', 
    title: 'Binary Trees', 
    description: 'Grasp tree traversal, binary search trees, and balanced trees.',
    content: `A binary tree is a hierarchical data structure in which each node has at most two children, which are referred to as the left child and the right child.

**Key Concepts:**
- **Root:** The topmost node in a tree.
- **Parent/Child:** A node that has a child is a parent.
- **Leaf:** A node with no children.
- **Depth/Height:** The length of the path from the root to a node (depth) or the longest path from a node to a leaf (height).

**Tree Traversal Algorithms:**
- **In-order:** Left, Root, Right (visits nodes in ascending order in a BST).
- **Pre-order:** Root, Left, Right.
- **Post-order:** Left, Right, Root.

**Binary Search Tree (BST):** A special type of binary tree where the left child's value is less than the parent's, and the right child's value is greater.`
  },
  { 
    id: 'graph', 
    title: 'Graphs', 
    description: 'Navigate through vertices and edges using BFS, DFS, and other algorithms.',
    content: `A graph is a non-linear data structure consisting of nodes (or vertices) and edges that connect them. Graphs are used to model relationships between objects.

**Key Concepts:**
- **Vertex (Node):** A fundamental part of a graph.
- **Edge (Link):** A connection between two vertices.
- **Directed vs. Undirected:** Edges can have a direction (A -> B is not the same as B -> A) or be bidirectional.
- **Weighted vs. Unweighted:** Edges can have a weight or cost associated with them.

**Common Traversal Algorithms:**
- **Breadth-First Search (BFS):** Explores neighbor nodes first, level by level.
- **Depth-First Search (DFS):** Explores as far as possible along each branch before backtracking.`
  },
  { 
    id: 'dp', 
    title: 'Dynamic Programming', 
    description: 'Solve complex problems by breaking them down into simpler subproblems.',
    content: `Dynamic Programming (DP) is a method for solving complex problems by breaking them down into simpler, overlapping subproblems. The results of these subproblems are stored (memoized) to avoid redundant computations.

**Two Main Approaches:**
1.  **Memoization (Top-Down):** The problem is broken down recursively. If a subproblem is encountered for the first time, its solution is computed and stored. If it's encountered again, the stored result is used.
2.  **Tabulation (Bottom-Up):** The solutions to subproblems are calculated starting from the simplest cases and building up to the solution for the original problem. This is typically done iteratively.

**When to use DP:**
- The problem can be broken down into **overlapping subproblems**.
- The problem has an **optimal substructure**, meaning the optimal solution to the problem can be constructed from the optimal solutions of its subproblems.
- A classic example is calculating the nth Fibonacci number.`
  },
];

const Tutorials: React.FC = () => {
  return (
    <div className="flex flex-col h-full p-6 overflow-y-auto bg-gray-900">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-white">DSA Tutorials</h1>
        <p className="text-gray-400 mt-1">Select a topic to expand it and start learning.</p>
      </header>
      <div className="space-y-4">
        {tutorialsData.map(tutorial => (
          <details key={tutorial.id} className="group bg-gray-800 rounded-lg border border-gray-700 transition-all duration-300 open:border-cyan-500">
            <summary className="cursor-pointer list-none flex items-center justify-between p-5">
              <div>
                <h2 className="text-xl font-semibold text-cyan-400 group-hover:text-cyan-300">{tutorial.title}</h2>
                <p className="text-gray-400 text-sm mt-1">{tutorial.description}</p>
              </div>
              <div className="text-cyan-400 group-open:rotate-90 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </summary>
            <div className="p-5 border-t border-gray-700">
              <p className="text-gray-300 whitespace-pre-wrap leading-relaxed">{tutorial.content}</p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Tutorials;
