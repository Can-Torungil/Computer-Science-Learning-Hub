// IB Computer Science Learning App Data
const appData = {
    flashcards: {
        "system-fundamentals": [
            {
                question: "What is the purpose of change management in system implementation?",
                answer: "Change management is a structured approach to transitioning individuals, teams, and organizations from a current state to a desired future state when a new system is implemented. It involves preparing and supporting users through the change by communicating benefits, providing training, and addressing resistance to ensure smooth adoption."
            },
            {
                question: "What are the four main system implementation methods?",
                answer: "1) Parallel Running - old and new systems run simultaneously; 2) Pilot Running - new system introduced to a small part of organization first; 3) Phased Implementation - gradual replacement in stages; 4) Direct Changeover - complete switch at a specific point in time."
            },
            {
                question: "What is a legacy system and what challenges does it present?",
                answer: "A legacy system is an old or outdated computer system that is still in use. Challenges include compatibility issues with newer systems, obsolete technologies, difficulty integrating with modern systems, and potential data format mismatches."
            },
            {
                question: "What is the difference between SaaS and on-premises hosting?",
                answer: "SaaS (Software as a Service) is hosted by a third party over the internet, requiring no local infrastructure but depending on internet connectivity. On-premises hosting runs on the organization's own hardware, providing greater control and customization but requiring internal IT expertise and maintenance."
            },
            {
                question: "What are the main causes of data loss?",
                answer: "Data loss can be caused by: 1) Hardware failures (disk crashes, power surges); 2) Software bugs or system crashes; 3) Human error (accidental deletion); 4) Malicious activities (viruses, ransomware, hacking); 5) Natural disasters or power outages."
            },
            {
                question: "What is the purpose of alpha testing?",
                answer: "Alpha testing is performed internally by developers before releasing software to external users. It uses simulated data in a controlled environment to catch bugs early in development and ensure basic functionality works correctly."
            },
            {
                question: "What is the difference between black-box and white-box testing?",
                answer: "Black-box testing focuses on system functionality without knowledge of internal code structure - testers provide inputs and verify outputs. White-box testing examines internal code logic and structure, with testers having full knowledge of the system's implementation."
            },
            {
                question: "What are the components of a computer system?",
                answer: "A computer system consists of: 1) Hardware - physical components (CPU, memory, storage, peripherals); 2) Software - programs and instructions; 3) Peripheral devices - input/output devices; 4) Network components - communication infrastructure; 5) Human resources - users and IT staff."
            },
            {
                question: "What is the role of a DNS server?",
                answer: "A DNS server translates human-readable domain names (like www.example.com) into IP addresses that computers use to identify each other on the network. It's essential for internet usability as it allows us to use memorable names instead of numeric addresses."
            },
            {
                question: "What are stakeholders in system development?",
                answer: "Stakeholders are individuals or groups with an interest in the system's success, including: end users, business owners/clients, project managers, development team, IT/maintenance staff, vendors/suppliers, and regulators. Each has different concerns and requirements."
            }
        ],
        "computer-organization": [
            {
                question: "What is Von Neumann Architecture?",
                answer: "Von Neumann Architecture is a stored-program model where both instructions and data are stored in the same memory. The CPU fetches and executes instructions sequentially, but this can create a bottleneck on shared buses."
            },
            {
                question: "What is the ALU and what does it do?",
                answer: "The ALU (Arithmetic Logic Unit) executes integer arithmetic operations and Boolean operations. It acts on register values under control unit control signals. For example, ADD R1,R2 → R3 uses the ALU to sum registers."
            },
            {
                question: "What is the Control Unit (CU) responsible for?",
                answer: "The Control Unit orchestrates the sequence of execution, manages memory access over buses, moves data between CPU and memory, and manages cache contents. It houses the IR (current instruction) and PC (next instruction address)."
            },
            {
                question: "What are the main CPU registers and their functions?",
                answer: "MAR (Memory Address Register) holds the address to access memory. MDR/MBR (Memory Data/Buffer Register) holds data/instruction being transferred. PC (Program Counter) holds the address of the next instruction. IR (Instruction Register) holds the current instruction. GPRs (General Purpose Registers) provide working storage."
            },
            {
                question: "What are the three types of system buses?",
                answer: "1) Address Bus - carries addresses from CPU to memory (width limits addressable memory); 2) Data Bus - bidirectional data transfer between CPU, memory, and peripherals; 3) Control Bus - carries control/command/status signals among components."
            },
            {
                question: "What is primary memory and what types exist?",
                answer: "Primary memory is working memory used at runtime, including RAM (fast, volatile, read/write), cache (very fast, small), and ROM/firmware (non-volatile, read-mostly). Usually 'primary' refers to RAM."
            },
            {
                question: "What is virtual memory and how does it work?",
                answer: "Virtual memory extends apparent RAM onto disk through paging/swapping between RAM and disk. Pros: provides more memory than physically available. Cons: slower access times and risk of thrashing when overused."
            },
            {
                question: "Why is cache memory important?",
                answer: "Cache memory is small, high-speed memory closer to the CPU that reduces average memory access time by exploiting temporal and spatial locality. The CPU checks cache first before accessing main memory."
            },
            {
                question: "What are the four stages of the machine instruction cycle?",
                answer: "1) Fetch - PC→MAR, memory→MDR, MDR→IR, PC++; 2) Decode - CU interprets the opcode; 3) Execute - CU signals units for ALU operations/loads/stores/branches; 4) Store - write back to register/memory, possibly update PC on branch."
            },
            {
                question: "What is the difference between direct and sequential access storage?",
                answer: "Direct access storage (HDD/SSD, USB, CD/DVD) allows random access to any location. Sequential access storage (tapes) requires reading data in order and is typically used for backup/archive purposes."
            },
            {
                question: "What are the main functions of an Operating System?",
                answer: "An OS manages hardware/software resources and provides user interfaces. Key responsibilities include: peripherals & drivers, concurrency/multitasking, resource monitoring, memory management (including paging), security/accounting, program/data management, and UI (CLI/GUI)."
            },
            {
                question: "What is multitasking/time-sharing?",
                answer: "Multitasking makes many processes appear simultaneous through time slicing. The OS loads/unloads processes into RAM and schedules CPU time among them, creating the illusion of concurrent execution."
            },
            {
                question: "What are drivers and why are they important?",
                answer: "Drivers are software that provide a standard interface to varied hardware, enabling plug-and-play functionality. Some devices need ADC/DAC conversion (microphones/speakers, sensors) which drivers handle."
            },
            {
                question: "What are the main categories of application software?",
                answer: "Word processors (MS Word, Google Docs), spreadsheets (Excel, Calc), DBMS (MySQL, PostgreSQL), email clients, web browsers, CAD software, graphics editors (Photoshop, GIMP), and specialized applications for specific use cases."
            },
            {
                question: "What are the core GUI building blocks?",
                answer: "Common GUI features include toolbars (quick-access actions), menus (hierarchical commands), dialog boxes (modal interaction), windows, icons, pointing devices, and generic GUI components - collectively known as WIMP (Windows, Icons, Menus, Pointers)."
            },
            {
                question: "What is the difference between analog and digital data?",
                answer: "Analog data is continuous (like sound waves), while digital data is discrete (represented by binary digits). Computers digitize analog data to store and process it, converting continuous signals into discrete binary values."
            },
            {
                question: "What is two's complement and why is it used?",
                answer: "Two's complement is the standard scheme for representing signed integers in binary. It allows both positive and negative numbers to be represented and processed using the same arithmetic operations."
            },
            {
                question: "What is the difference between ASCII and Unicode?",
                answer: "ASCII is a legacy character set supporting about 256 characters (including extended ASCII). Unicode is a universal character set that aims to represent all languages and is a superset of ASCII, supporting many more characters."
            },
            {
                question: "How does audio sampling work?",
                answer: "Audio sampling periodically measures analog signals (typically at ~44 kHz for quality) to digitize them. Formats like WAV store uncompressed audio, while MP3 uses lossy compression. CDs store audio as pits/lands read by laser as binary data."
            },
            {
                question: "What is the difference between raster and vector graphics?",
                answer: "Raster graphics store images as grids of pixels with specific color values. Vector graphics store shapes, lines, and fills as mathematical descriptions. Raster is good for photos, vector is better for line art and logos and produces smaller files."
            }
        ],
        "networks": [
            {
                question: "What is a network?",
                answer: "A network is a collection of computing devices connected to share data and resources. Connections can be wired (cables, fiber) or wireless (radio, infrared)."
            },
            {
                question: "What is a LAN and what are its characteristics?",
                answer: "LAN (Local Area Network) covers a small geographic area like an office or school. It has high speed, limited distance, and is usually owned and managed by one organization. Example: School lab connecting all classroom PCs to one printer."
            },
            {
                question: "What is a WAN and how does it differ from a LAN?",
                answer: "WAN (Wide Area Network) covers large areas like countries or continents. It uses telephone lines, satellites, and radio waves. The Internet is the largest WAN and has collective ownership, not controlled by one company."
            },
            {
                question: "What are MAN, SAN, and VLAN?",
                answer: "MAN (Metropolitan Area Network) covers a city with high-speed fiber, managed by one entity like government. SAN (Storage Area Network) is a high-speed LAN for storage servers and data devices. VLAN (Virtual LAN) is a logical grouping inside a LAN that's flexible and software-defined."
            },
            {
                question: "What are PAN, WLAN, and P2P networks?",
                answer: "PAN (Personal Area Network) connects personal devices within 10 meters using Bluetooth or USB. WLAN (Wireless LAN) is a LAN using radio waves like Wi-Fi. P2P (Peer-to-Peer) has no central server; each device acts as both client and server, supporting file sharing."
            },
            {
                question: "What is the difference between Internet, Intranet, and Extranet?",
                answer: "Internet is the global network of networks. Intranet is internal-only, allowing employees to access resources securely within an organization. Extranet provides controlled external access, like ATM networks for customers."
            },
            {
                question: "Why are network standards and protocols important?",
                answer: "Protocols are formal rules for communication (format, order, actions). Without standards, there would be incompatibility. Standards enable compatibility, interoperability, lower costs, and innovation. Example: TCP/IP enabled Internet growth."
            },
            {
                question: "What are network layers and why are they used?",
                answer: "Communication is broken into layers (OSI model, TCP/IP). Each layer has a specific role from physical transmission to application data. Benefits include modular design and easier troubleshooting."
            },
            {
                question: "What is a VPN and how does it work?",
                answer: "VPN (Virtual Private Network) creates a secure private connection across a public network. It's used by businesses for remote work and connecting global branches. Components include NAS (Network Access Server) for authentication and client software that establishes encrypted tunnels."
            },
            {
                question: "What are the different types of VPNs?",
                answer: "Site-to-site VPN connects entire offices. Remote access VPN allows individuals to connect remotely. Secure VPNs encrypt and authenticate all traffic. Trusted VPNs rely on provider's network security. Hybrid VPNs combine secure and trusted approaches."
            },
            {
                question: "What are the advantages and disadvantages of VPNs?",
                answer: "Advantages: Cheaper than leased lines, enables remote work. Disadvantages: Requires proper security setup, ISP performance limits reliability."
            },
            {
                question: "What is a data packet and why are protocols necessary?",
                answer: "A data packet is a small unit of binary data with headers and payload. Protocols are sets of rules for data exchange that solve integrity, flow control, deadlocks, congestion, and error checking problems."
            },
            {
                question: "Why do transmission speeds vary?",
                answer: "Transmission speed depends on the medium used, distance, network congestion, time of day, and weather conditions. Network latency refers to delays in packet travel."
            },
            {
                question: "Why is data compression important in networks?",
                answer: "Bandwidth is limited, so compression reduces transmission size. There are tradeoffs between lossless compression (no data lost, like ZIP) and lossy compression (some quality lost, like JPEG for images, MP3 for audio, MP4 for video)."
            },
            {
                question: "What are the main types of transmission media?",
                answer: "Transmission media include electrical signals (copper cables), light signals (fiber optics), and radio/microwave/infrared (wireless). Cable types include twisted pair (cheap, flexible, interference-prone), coaxial (shielded, expensive, stiff), and fiber optic (expensive, long distance, no interference)."
            },
            {
                question: "What are the different transmission modes?",
                answer: "Simplex is one-way communication only. Half-duplex allows both ways but with turn-taking. Full duplex allows simultaneous two-way communication."
            },
            {
                question: "What is the difference between serial and parallel transmission?",
                answer: "Serial transmission sends bits one after another, making it reliable for long distances. Parallel transmission sends many bits simultaneously, making it faster but unreliable over distance."
            },
            {
                question: "What is packet switching?",
                answer: "Packet switching breaks messages into packets. Each packet may take different routes and is reassembled at the destination. It uses routers and repeaters to direct and boost signals."
            },
            {
                question: "What are the advantages of wireless networks?",
                answer: "Wireless networks provide convenience, mobility, productivity, deployment ease, expandability, and cost savings compared to wired networks."
            },
            {
                question: "What are the disadvantages of wireless networks?",
                answer: "Wireless networks have security issues, limited range, interference problems, and generally slower speeds compared to wired connections."
            },
            {
                question: "What hardware and software components are needed for wireless networks?",
                answer: "Hardware includes routers (direct packets, provide Wi-Fi), adapters (connect devices to Wi-Fi), and extenders (boost Wi-Fi signal). Software includes router software, SSID (unique network name), and configuration tools."
            },
            {
                question: "What are the characteristics of different wireless technologies?",
                answer: "Wi-Fi has short range (~20m) but high speed. WiMAX provides long-range wireless broadband (~70 Mbps). LTE/3G/4G/5G are mobile Internet standards with evolving speeds for cellular networks."
            },
            {
                question: "What are the main network security methods?",
                answer: "Network security methods include encryption (WEP, WPA, WPA2/AES), authentication (passwords, enterprise login), and MAC filtering. WPA2 with AES encryption and strong passwords is considered the best practice."
            },
            {
                question: "What are the pros and cons of different security methods?",
                answer: "WPA2 with strong passwords is the best option. WEP is weak and easily compromised. MAC filtering deters casual users but not expert attackers. Best practice combines multiple methods for enhanced security."
            }
        ],
        "computational-thinking": [
            {
                question: "What is computational thinking?",
                answer: "Computational thinking is the foundation of computer science. It involves solving problems systematically and logically, breaking them into smaller pieces, and creating solutions that can be carried out by a computer."
            },
            {
                question: "What are the four key aspects of computational thinking?",
                answer: "The four key aspects are: 1) Decomposition - breaking problems into smaller sub-problems; 2) Pattern recognition - identifying similarities and trends; 3) Abstraction - focusing on essential details, ignoring irrelevant complexity; 4) Algorithms - step-by-step instructions to solve a problem."
            },
            {
                question: "What is decomposition and how does it help in problem-solving?",
                answer: "Decomposition is breaking a complex problem into smaller, manageable parts. It helps by making problems easier to understand, allowing different people to work on different parts, and enabling the use of existing solutions for similar sub-problems."
            },
            {
                question: "What is pattern recognition in computational thinking?",
                answer: "Pattern recognition is identifying similarities and trends within data or problems. It helps simplify problem-solving by allowing us to apply known solutions to similar situations and avoid redundant work."
            },
            {
                question: "What is abstraction and why is it important?",
                answer: "Abstraction is focusing on essential details while ignoring irrelevant complexity. It's important because it allows us to create general solutions that work for many similar problems, making our thinking more efficient and our solutions more reusable."
            },
            {
                question: "What is an algorithm?",
                answer: "An algorithm is a precise, step-by-step set of instructions to solve a problem. It must be finite, unambiguous, and correct. Algorithms can be implemented by computers or followed by humans."
            },
            {
                question: "What is procedural thinking?",
                answer: "Procedural thinking involves solving problems by following ordered steps where the order matters. Solutions must be carried out in sequence, allowing mapping of complex tasks into clear, manageable steps."
            },
            {
                question: "What is logical thinking in computational thinking?",
                answer: "Logical thinking uses rules and Boolean logic to solve problems. It involves if/else conditions, Boolean logic (AND, OR, NOT), and reasoning. For example, a login system must check both username AND password before granting access."
            },
            {
                question: "What is concurrent thinking?",
                answer: "Concurrent thinking involves solving parts of a problem in parallel rather than sequentially. For example, a web browser loads text, images, and videos simultaneously to improve performance and user experience."
            },
            {
                question: "What is problem identification in problem-solving?",
                answer: "Problem identification is clearly defining the problem by determining inputs, processes, and outputs. For example, an ATM system: Input = PIN + withdrawal amount, Process = verify account + check balance, Output = cash + updated balance."
            },
            {
                question: "What is problem decomposition in system design?",
                answer: "Problem decomposition breaks a system into modules or components. For example, an e-commerce site can be decomposed into payment module, shopping cart module, and product catalog module, each handling specific functionality."
            },
            {
                question: "What is problem representation and what tools are used?",
                answer: "Problem representation uses visual and textual tools to help programmers visualize solutions before coding. Common tools include flowcharts (diagrams with shapes for processes, inputs, outputs, decisions), pseudocode (structured language-like representation), and structure diagrams."
            },
            {
                question: "What are the characteristics of a good algorithm?",
                answer: "A good algorithm must be: 1) Finite - it must eventually stop; 2) Unambiguous - each step must be clearly defined; 3) Correct - it must solve the problem as intended; 4) Efficient - it should use resources appropriately."
            },
            {
                question: "What is pseudocode and how is it useful?",
                answer: "Pseudocode is a structured, plain language approximation of code that helps programmers plan algorithms before implementation. It's useful because it's language-independent and helps visualize the logic without worrying about syntax details."
            },
            {
                question: "What is a flowchart and what shapes are used?",
                answer: "A flowchart is a diagram that represents an algorithm using shapes: rectangles for processes, parallelograms for input/output, diamonds for decisions, and circles for start/end points. It provides a visual representation of the algorithm flow."
            },
            {
                question: "What are common searching algorithms?",
                answer: "Common searching algorithms include: 1) Linear Search - sequentially checks each element until found; 2) Binary Search - divides a sorted list repeatedly to locate an item efficiently. Linear search works on any list, binary search requires a sorted list."
            },
            {
                question: "What are common sorting algorithms?",
                answer: "Common sorting algorithms include: 1) Bubble Sort - compares adjacent pairs and swaps them repeatedly; 2) Selection Sort - finds the smallest element and places it in order step by step; 3) Insertion Sort - inserts items into the correct place in a sorted section."
            },
            {
                question: "What is traversal in algorithms?",
                answer: "Traversal is the process of following a path through a data structure to visit each element exactly once. It's commonly used with trees and graphs to access or process all elements systematically."
            },
            {
                question: "What is top-down design?",
                answer: "Top-down design is a problem-solving strategy that starts with a broad overview and refines it into increasingly detailed levels. It breaks the main problem into major components, then each component into smaller parts, continuing until all details are specified."
            },
            {
                question: "What is stepwise refinement?",
                answer: "Stepwise refinement is a process of breaking problems into progressively smaller, more manageable steps. Each step is refined further until the solution is detailed enough to implement directly."
            },
            {
                question: "What is a trace table?",
                answer: "A trace table is a tool used to test algorithms step by step with sample data. It shows how variables change as the algorithm executes, helping to verify correctness and understand the algorithm's behavior."
            },
            {
                question: "What is a program and how does it relate to algorithms?",
                answer: "A program is the implementation of an algorithm in a specific programming language that a computer can execute. While an algorithm is the logical solution, a program is the actual code that carries out that solution."
            },
            {
                question: "What is the difference between high-level and low-level programming languages?",
                answer: "High-level languages (like Java, Python) are closer to human language, more portable, and easier to read/write. Low-level languages (like assembly, machine code) are closer to the computer's hardware, faster to execute, but hardware-specific and harder to program."
            },
            {
                question: "What are variables and constants?",
                answer: "Variables are named storage locations that can change their value during program execution. Constants are named storage locations with fixed values that cannot be changed. Example: CONSTANT PI = 3.14, radius ← 5, area ← PI * radius * radius."
            },
            {
                question: "What are the main data types in programming?",
                answer: "Main data types include: Integer (whole numbers), Real/Float (decimal numbers), Boolean (true/false values), Character (single symbol), String (sequence of characters). Each type determines what kind of data can be stored and what operations can be performed."
            },
            {
                question: "What are the different types of operators in programming?",
                answer: "Three main types of operators: 1) Arithmetic: + - * / % (addition, subtraction, multiplication, division, modulus); 2) Relational: < > = != <= >= (comparison operators); 3) Logical: AND OR NOT (Boolean operations)."
            },
            {
                question: "What are the three main control structures?",
                answer: "The three main control structures are: 1) Sequence - step-by-step execution in order; 2) Selection - branching with if/else, switch statements; 3) Iteration - loops like for, while, repeat-until that repeat code blocks."
            },
            {
                question: "What are subroutines and what types exist?",
                answer: "Subroutines are reusable blocks of code that perform specific tasks. Two types: 1) Procedures - perform a task but don't return a value; 2) Functions - perform a task and return a value. Example: FUNCTION Square(x) RETURN x * x END FUNCTION."
            },
            {
                question: "What is the difference between structured and unstructured programming?",
                answer: "Structured programming is modular, readable, and reusable with clear organization and flow. Unstructured programming is disorganized 'spaghetti code' that's hard to debug and maintain, with tangled control flow and poor organization."
            },
            {
                question: "What are the three main types of programming errors?",
                answer: "Three main types: 1) Syntax errors - violate language rules, caught during compilation; 2) Logic errors - produce wrong results due to faulty logic; 3) Runtime errors - cause program crashes while running, often due to invalid operations."
            },
            {
                question: "What is the difference between compilation and interpretation?",
                answer: "A compiler translates the entire program into machine code before execution, resulting in faster execution but requiring compilation time. An interpreter translates code line-by-line during execution, allowing immediate feedback but slower execution."
            },
            {
                question: "What are the basic concepts of Object-Oriented Programming (OOP)?",
                answer: "Basic OOP concepts include: 1) Class - a blueprint or template for creating objects; 2) Object - an instance of a class with specific attributes and behaviors; 3) Encapsulation, inheritance, and polymorphism are advanced OOP concepts introduced later."
            }
        ],
        "abstract-data-structures": [
            {
                question: "What is an Abstract Data Type (ADT)?",
                answer: "An ADT is a mathematical model for data types defined by its behavior from the user's perspective, independent of implementation details. It specifies what operations can be performed and their behavior, but not how they are implemented."
            },
            {
                question: "What is the difference between a stack and a queue?",
                answer: "A stack follows LIFO (Last In, First Out) principle where elements are added and removed from the same end (top). A queue follows FIFO (First In, First Out) principle where elements are added at the rear and removed from the front."
            },
            {
                question: "What is a linked list and how does it differ from an array?",
                answer: "A linked list is a linear data structure where elements are stored in nodes, each containing data and a reference to the next node. Unlike arrays, linked lists allow dynamic memory allocation, efficient insertion/deletion at any position, but have slower random access."
            },
            {
                question: "What are the main operations of a stack?",
                answer: "Main stack operations are: PUSH (add element to top), POP (remove element from top), TOP/PEEK (view top element without removing), and IS_EMPTY (check if stack is empty)."
            },
            {
                question: "What are the main operations of a queue?",
                answer: "Main queue operations are: ENQUEUE (add element to rear), DEQUEUE (remove element from front), FRONT (view front element without removing), REAR (view rear element), and IS_EMPTY (check if queue is empty)."
            },
            {
                question: "What is a binary tree?",
                answer: "A binary tree is a hierarchical data structure where each node has at most two children (left and right). It has a root node and each node can have 0, 1, or 2 children."
            },
            {
                question: "What are the three main ways to traverse a binary tree?",
                answer: "The three main traversal methods are: 1) Pre-order (root → left → right), 2) In-order (left → root → right), 3) Post-order (left → right → root). Each visits every node exactly once."
            },
            {
                question: "What is a binary search tree (BST)?",
                answer: "A BST is a binary tree where for each node: all values in the left subtree are less than the node's value, and all values in the right subtree are greater than the node's value. This property enables efficient searching."
            },
            {
                question: "What are the advantages and disadvantages of arrays?",
                answer: "Arrays offer: fast random access (O(1)), memory efficiency, cache-friendly. Disadvantages include: fixed size, expensive insertion/deletion in middle, need to shift elements."
            },
            {
                question: "What are the advantages and disadvantages of linked lists?",
                answer: "Linked lists offer: dynamic size, efficient insertion/deletion anywhere, no memory waste. Disadvantages include: no random access (O(n)), extra memory for pointers, not cache-friendly."
            },
            {
                question: "What is a hash table?",
                answer: "A hash table is a data structure that uses a hash function to map keys to array indices, enabling average O(1) time complexity for search, insert, and delete operations."
            },
            {
                question: "What is a collision in hash tables and how is it handled?",
                answer: "A collision occurs when two different keys hash to the same index. Common resolution methods include: chaining (linked list at each index), open addressing (find next available slot), and double hashing."
            },
            {
                question: "What is a heap and what are its properties?",
                answer: "A heap is a complete binary tree where parent nodes are always greater than or equal to (max-heap) or less than or equal to (min-heap) their children. The root is always the maximum or minimum element."
            },
            {
                question: "What is a priority queue?",
                answer: "A priority queue is a data structure where elements are removed based on priority rather than insertion order. Higher priority elements are removed first, often implemented using heaps."
            },
            {
                question: "What is the time complexity of basic operations on different data structures?",
                answer: "Arrays: access O(1), search O(n), insert/delete O(n). Linked lists: access O(n), search O(n), insert/delete O(1) if position known. Hash tables: average O(1) for all operations. BST: balanced tree gives O(log n) for search, insert, delete."
            },
            {
                question: "What is a circular queue?",
                answer: "A circular queue is a queue where the last position connects back to the first position, making efficient use of array space. When the queue reaches the end, it wraps around to the beginning."
            },
            {
                question: "What is a doubly linked list?",
                answer: "A doubly linked list is a linked list where each node contains data and pointers to both the next and previous nodes, enabling traversal in both directions but requiring more memory."
            },
            {
                question: "What are the different types of trees?",
                answer: "Tree types include: binary tree (max 2 children per node), binary search tree (ordered), AVL tree (self-balancing), red-black tree (balanced), B-tree (multi-way), and trie (prefix tree for strings)."
            },
            {
                question: "What is a graph and how is it represented?",
                answer: "A graph is a collection of vertices connected by edges. It can be represented as: adjacency matrix (2D array), adjacency list (array of linked lists), or edge list (list of edges)."
            },
            {
                question: "What is the difference between a directed and undirected graph?",
                answer: "In a directed graph, edges have direction (one-way connections). In an undirected graph, edges have no direction (two-way connections). Directed graphs use arrows, undirected graphs use simple lines."
            },
            {
                question: "What are common graph traversal algorithms?",
                answer: "Common graph traversal algorithms are: Depth-First Search (DFS) - explores as far as possible along each branch, and Breadth-First Search (BFS) - explores all neighbors before moving to next level."
            },
            {
                question: "What is dynamic programming and how does it relate to data structures?",
                answer: "Dynamic programming solves problems by breaking them into overlapping subproblems and storing solutions to avoid recomputation. It often uses arrays or tables to store intermediate results, making it efficient for optimization problems."
            },
            {
                question: "What is recursion and how is it used with data structures?",
                answer: "Recursion is a technique where a function calls itself to solve smaller instances of the same problem. It's commonly used with tree traversal, linked list operations, and divide-and-conquer algorithms."
            },
            {
                question: "What is a balanced tree and why is it important?",
                answer: "A balanced tree maintains similar height in all subtrees, ensuring O(log n) time complexity for operations. Without balancing, trees can become linear (like linked lists), degrading performance to O(n)."
            },
            {
                question: "What is space-time complexity tradeoff?",
                answer: "Space-time complexity tradeoff refers to the relationship where using more memory (space) can reduce execution time, or vice versa. For example, hash tables use extra space for fast lookups, while arrays use less space but slower searches."
            }
        ],
        "resource-management": [
            {
                question: "What is primary memory (RAM)?",
                answer: "Primary memory (RAM) is temporary working memory that holds programs and data while they are active. It provides fast access for the CPU but loses data when power is turned off."
            },
            {
                question: "What is secondary storage?",
                answer: "Secondary storage includes HDDs and SSDs used for long-term data storage. It provides permanent storage but is slower than RAM for data access."
            },
            {
                question: "What is the CPU's role in resource management?",
                answer: "The CPU executes instructions and coordinates all tasks in the system. It performs calculations and manages the flow of data between different components."
            },
            {
                question: "What is cache memory?",
                answer: "Cache is very fast memory located close to the CPU that reduces CPU-RAM latency by storing frequently accessed data and instructions for quick retrieval."
            },
            {
                question: "What is network bandwidth?",
                answer: "Network bandwidth is the data transfer capability of a network connection, determining how much data can be transmitted per unit of time."
            },
            {
                question: "What is a GPU and what does it do?",
                answer: "A GPU (Graphics Processing Unit) is specialized hardware for graphics rendering and parallel mathematical tasks. It handles 3D graphics, video processing, and computational tasks."
            },
            {
                question: "What are I/O devices?",
                answer: "Input/output devices include keyboards, mice, printers, scanners, cameras, and other hardware that allow interaction with the environment and data input/output operations."
            },
            {
                question: "How is primary memory used?",
                answer: "Primary memory holds programs and data while they are active, providing the CPU with fast access to currently executing instructions and working data."
            },
            {
                question: "How is secondary storage used?",
                answer: "Secondary storage keeps inactive programs and large files permanently, providing long-term data persistence and storage for files not currently in use."
            },
            {
                question: "How is cache used in resource management?",
                answer: "Cache reduces CPU-RAM latency by storing frequently accessed data and instructions, allowing the CPU to access information much faster than from main memory."
            },
            {
                question: "How does the network resource enable system communication?",
                answer: "Network resources enable communication between systems, allowing data transfer, internet connectivity, and distributed computing across multiple devices."
            },
            {
                question: "How are I/O devices used in computer systems?",
                answer: "I/O devices allow interaction with the environment through input (scanners, cameras, keyboards) and output (printers, displays, speakers) operations."
            },
            {
                question: "What are the main limitations of computer systems?",
                answer: "Computer systems have finite resources (limited RAM, CPU cycles, storage), constraints (power, heat, cost), shared use requirements, and performance bottlenecks."
            },
            {
                question: "What is deadlock in resource management?",
                answer: "Deadlock occurs when two or more processes wait forever for each other's resources, creating a circular dependency that prevents any process from proceeding."
            },
            {
                question: "What is starvation in resource management?",
                answer: "Starvation happens when some processes never get the resources they need because other processes with higher priority continuously receive resource allocation."
            },
            {
                question: "What is thrashing?",
                answer: "Thrashing occurs when the system spends more time swapping memory between RAM and disk than executing actual program instructions, severely degrading performance."
            },
            {
                question: "What is resource leakage?",
                answer: "Resource leakage happens when allocated resources (like memory) are not properly released after use, leading to gradual resource depletion and system degradation."
            },
            {
                question: "What are the main responsibilities of the Operating System in resource management?",
                answer: "The OS manages memory allocation, device management, security (authentication/authorization), provides user interface (CLI/GUI), and enables multitasking through CPU scheduling."
            },
            {
                question: "How does the OS manage memory?",
                answer: "The OS allocates RAM fairly to processes, manages paging and virtual memory, prevents memory conflicts between programs, and handles memory deallocation when programs finish."
            },
            {
                question: "How does the OS handle device management?",
                answer: "The OS uses drivers to interface with hardware devices, handles interrupts from devices, manages device queues, and provides a standardized interface for programs to access hardware."
            },
            {
                question: "What security functions does the OS provide?",
                answer: "The OS provides authentication (passwords, biometrics), authorization (file permissions, user roles), encryption, firewalls, and audit trails to protect system resources and data."
            },
            {
                question: "What user interfaces does the OS provide?",
                answer: "The OS provides both CLI (command-line interface) for text-based interaction and GUI (graphical user interface) for visual interaction with windows, icons, and menus."
            },
            {
                question: "How does the OS enable multitasking?",
                answer: "The OS allows concurrent execution of tasks by scheduling CPU time slices among multiple processes, switching between them rapidly to create the illusion of simultaneous execution."
            },
            {
                question: "What is round-robin scheduling?",
                answer: "Round-robin scheduling gives each process equal time slices in a circular order, ensuring fair CPU allocation and preventing any single process from monopolizing the processor."
            },
            {
                question: "What is priority-based scheduling?",
                answer: "Priority-based scheduling allocates CPU time based on process priority levels, with higher-priority jobs receiving CPU time before lower-priority ones."
            },
            {
                question: "What is first-come, first-served (FCFS) scheduling?",
                answer: "FCFS scheduling processes jobs in the order they arrive, using a queue system where the first process to request CPU time gets it first."
            },
            {
                question: "What is shortest-job-first scheduling?",
                answer: "Shortest-job-first scheduling prioritizes processes with the shortest expected execution time to minimize average wait time and improve overall system efficiency."
            },
            {
                question: "What is paging in memory management?",
                answer: "Paging splits memory into fixed-size blocks called pages, allowing efficient memory allocation and supporting virtual memory systems."
            },
            {
                question: "What is segmentation in memory management?",
                answer: "Segmentation divides memory into variable-sized logical blocks (like code, stack, heap segments) that represent different parts of a program's memory requirements."
            },
            {
                question: "How does virtual memory work?",
                answer: "Virtual memory extends RAM using disk storage, allowing more programs to run simultaneously by swapping inactive memory pages between RAM and disk as needed."
            },
            {
                question: "What are interrupts in computer systems?",
                answer: "Interrupts are signals that alert the CPU of urgent events requiring immediate attention, such as keyboard input, printer ready signals, or hardware faults."
            },
            {
                question: "What is polling in device management?",
                answer: "Polling is a method where the CPU repeatedly checks device status to determine if a device needs attention. It's simple but less efficient than interrupt-driven systems."
            },
            {
                question: "What is a Real-Time Operating System (RTOS)?",
                answer: "An RTOS is designed to handle critical tasks with strict timing requirements, commonly used in aircraft systems, medical devices, and industrial control systems."
            },
            {
                question: "What is a single-user operating system?",
                answer: "A single-user OS is designed to support one user at a time, typically found on personal computers and laptops for general computing tasks."
            },
            {
                question: "What is a multi-user operating system?",
                answer: "A multi-user OS allows multiple users to share system resources simultaneously, commonly used on servers and mainframe systems."
            },
            {
                question: "What is an embedded operating system?",
                answer: "An embedded OS is designed for specialized devices with limited resources, such as cars, washing machines, and IoT devices."
            },
            {
                question: "What are the advantages of dedicated operating systems?",
                answer: "Dedicated OSs are optimized for their specific purpose, providing high efficiency, reliability, and performance for particular applications or environments."
            },
            {
                question: "What are the disadvantages of dedicated operating systems?",
                answer: "Dedicated OSs are less flexible, have limited hardware support, and can be costly to design and maintain compared to general-purpose operating systems."
            },
            {
                question: "What is abstraction in operating systems?",
                answer: "Abstraction hides hardware complexity from users and programmers, providing simple interfaces (like storing a 'file') instead of dealing with low-level details (like disk sectors)."
            },
            {
                question: "What is virtualization?",
                answer: "Virtualization allows an OS to emulates hardware or resources, creating virtual environments like virtual machines, virtual memory, or cloud computing infrastructure."
            },
            {
                question: "What are virtual machines?",
                answer: "Virtual machines are software emulations of computer systems that run on top of physical hardware, allowing multiple operating systems to run on the same machine."
            },
            {
                question: "How does cloud computing use virtualization?",
                answer: "Cloud computing uses virtualization to create virtual servers, storage, and networks, allowing multiple users to share physical infrastructure while maintaining isolation."
            }
        ],
        "control": [
            {
                question: "What is a control system?",
                answer: "A control system manages, directs, or regulates other devices or systems. It can be manual (human-controlled) or automated (machine-controlled), and is essential in modern technology from traffic lights to medical devices."
            },
            {
                question: "How does an automatic door control system work?",
                answer: "An automatic door uses sensors to detect motion, a processor interprets the sensor input and activates a motor to open the door, demonstrating the basic sensor-processor-output control cycle."
            },
            {
                question: "How does a heating system control work?",
                answer: "A heating system uses a thermostat to measure temperature, a processor interprets the temperature reading and controls a heater to maintain the desired temperature, showing feedback control principles."
            },
            {
                question: "How does an elevator control system work?",
                answer: "An elevator system receives input from buttons pressed by users, a processor decides the optimal floor order and sequence, then a motor moves the cabin to the requested floors efficiently."
            },
            {
                question: "How do robots function as control systems?",
                answer: "Robots use sensors to detect their environment, actuators to perform physical actions, and processors to coordinate sensor data with actuator responses, enabling autonomous behavior and decision-making."
            },
            {
                question: "How do GPS systems work as control systems?",
                answer: "GPS systems track user location via satellite signals, process location data to determine current position, and guide users with directions and navigation instructions to reach their destination."
            },
            {
                question: "What is a microprocessor?",
                answer: "A microprocessor is a general-purpose processor (CPU on a chip) found in PCs, smartphones, and laptops. It executes a broad range of programs and applications with high versatility."
            },
            {
                question: "What is a microcontroller?",
                answer: "A microcontroller is a specialized processor with integrated memory and I/O ports, designed for specific control tasks. It's found in washing machines, cars, and microwave ovens, and is small, cheap, and energy-efficient."
            },
            {
                question: "What is the difference between microprocessors and microcontrollers?",
                answer: "Microprocessors are general-purpose and versatile, executing broad ranges of programs. Microcontrollers are task-focused, specialized processors with integrated memory and I/O, designed for specific control applications."
            },
            {
                question: "What factors should be considered when evaluating input devices?",
                answer: "When evaluating input devices, consider accuracy (precision of data capture), range (minimum/maximum values measurable), and frequency of data collection (real-time vs periodic measurements)."
            },
            {
                question: "What is the sensor-processor-output relationship?",
                answer: "The sensor-processor-output relationship forms the basic control cycle: sensors detect environmental conditions (like temperature), processors interpret input data and apply algorithms, and output transducers perform actions (like activating motors or heaters)."
            },
            {
                question: "What is an open-loop control system?",
                answer: "An open-loop system has no feedback from output to input. It operates with predetermined actions regardless of actual results, like a microwave timer that runs for a fixed time regardless of food temperature."
            },
            {
                question: "What is a closed-loop control system?",
                answer: "A closed-loop system (feedback control) measures output and uses this information to adjust input. For example, a thermostat heating system adjusts based on current room temperature to maintain the desired setting."
            },
            {
                question: "What are autonomous agents?",
                answer: "Autonomous agents are software or hardware systems that act independently to achieve goals. They react to their environment, learn from experience, and adapt their behavior without human intervention."
            },
            {
                question: "What are examples of autonomous agents?",
                answer: "Examples include Roomba vacuum robots that clean floors independently, self-driving cars that navigate roads, and trading algorithms in finance that make investment decisions based on market conditions."
            }
        ],
        "object-oriented-programming": [
            {
                question: "What are the four pillars of object-oriented programming?",
                answer: "The four pillars are: 1) Encapsulation - bundling data and methods together with controlled access; 2) Inheritance - creating new classes based on existing ones to reuse code; 3) Polymorphism - objects taking different forms through method overriding and overloading; 4) Abstraction - hiding complex implementation details behind simple interfaces."
            },
            {
                question: "What is a class in OOP?",
                answer: "A class is a blueprint or template for creating objects. It defines the attributes (data fields) and methods (functions) that objects of that class will have, along with access modifiers and constructors."
            },
            {
                question: "What is an object in OOP?",
                answer: "An object is an instance of a class with specific values for its attributes. It can use the methods defined in its class and has its own state and behavior."
            },
            {
                question: "What is encapsulation in OOP?",
                answer: "Encapsulation is the bundling of data and methods together in a class, with controlled access through access modifiers (private, protected, public). It hides internal implementation details and ensures data integrity."
            },
            {
                question: "What is inheritance in OOP?",
                answer: "Inheritance allows a class to inherit properties and methods from another class. The child class (subclass) extends the parent class (superclass), promoting code reusability and creating an 'is-a' relationship."
            },
            {
                question: "What is polymorphism in OOP?",
                answer: "Polymorphism allows objects of different classes to be treated as objects of a common parent class. It enables method overriding (runtime polymorphism) and method overloading (compile-time polymorphism)."
            },
            {
                question: "What is abstraction in OOP?",
                answer: "Abstraction hides complex implementation details behind simple interfaces. It focuses on what an object does rather than how it does it, achieved through abstract classes and interfaces."
            },
            {
                question: "What are access modifiers in OOP?",
                answer: "Access modifiers control the visibility and accessibility of class members. They include: private (accessible only within the class), protected (accessible within class and subclasses), and public (accessible from anywhere)."
            },
            {
                question: "What is a constructor in OOP?",
                answer: "A constructor is a special method that initializes objects when they are created. It has the same name as the class, is called automatically, and can be overloaded with different parameter lists."
            },
            {
                question: "What is method overriding in OOP?",
                answer: "Method overriding occurs when a subclass provides a specific implementation of a method that is already defined in its parent class. It enables runtime polymorphism and must have the same signature as the parent method."
            },
            {
                question: "What is method overloading in OOP?",
                answer: "Method overloading allows multiple methods with the same name but different parameters (number, type, or order) within the same class. It enables compile-time polymorphism and improves code readability."
            },
            {
                question: "What is an abstract class in OOP?",
                answer: "An abstract class is a class that cannot be instantiated and may contain abstract methods (methods without implementation). It serves as a blueprint for subclasses and enforces a common interface."
            },
            {
                question: "What is an interface in OOP?",
                answer: "An interface defines a contract that classes must implement. It contains only method signatures (no implementation) and constants. A class can implement multiple interfaces, enabling multiple inheritance of behavior."
            },
            {
                question: "What is the difference between abstract classes and interfaces?",
                answer: "Abstract classes can have both abstract and concrete methods, support single inheritance, and can have constructors. Interfaces contain only method signatures, support multiple inheritance, and cannot have constructors or instance variables."
            },
            {
                question: "What is composition in OOP?",
                answer: "Composition is a 'has-a' relationship where a class contains objects of other classes as members. It provides stronger coupling than inheritance and promotes code reusability through object containment."
            },
            {
                question: "What is aggregation in OOP?",
                answer: "Aggregation is a 'has-a' relationship where a class contains references to other objects, but those objects can exist independently. It represents a weaker form of association than composition."
            },
            {
                question: "What is association in OOP?",
                answer: "Association represents a relationship between two classes where objects of one class are related to objects of another class. It can be one-to-one, one-to-many, or many-to-many."
            },
            {
                question: "What is a static method in OOP?",
                answer: "A static method belongs to the class rather than to any specific instance. It can be called without creating an object of the class and can only access static members."
            },
            {
                question: "What is a static variable in OOP?",
                answer: "A static variable (class variable) belongs to the class rather than to any specific instance. All instances of the class share the same static variable, and it is initialized only once."
            },
            {
                question: "What is a final method in OOP?",
                answer: "A final method cannot be overridden by subclasses. It ensures that the method implementation remains unchanged in the inheritance hierarchy, providing security and preventing unwanted modifications."
            },
            {
                question: "What is a final class in OOP?",
                answer: "A final class cannot be extended or inherited by other classes. It prevents further inheritance and ensures that the class implementation cannot be modified through subclassing."
            },
            {
                question: "What is a final variable in OOP?",
                answer: "A final variable (constant) cannot be modified after initialization. It must be initialized either at declaration or in the constructor, and its value remains constant throughout the program execution."
            },
            {
                question: "What is the 'this' keyword in OOP?",
                answer: "The 'this' keyword refers to the current object instance. It is used to distinguish between instance variables and parameters with the same name, and to call other constructors or methods of the same class."
            },
            {
                question: "What is the 'super' keyword in OOP?",
                answer: "The 'super' keyword refers to the parent class. It is used to call the parent class constructor, access parent class methods, or refer to parent class variables from within a subclass."
            },
            {
                question: "What is a package in OOP?",
                answer: "A package is a namespace that organizes related classes and interfaces. It helps avoid naming conflicts, provides access control, and makes code more maintainable and reusable."
            },
            {
                question: "What is a getter method in OOP?",
                answer: "A getter method (accessor) is a public method that returns the value of a private instance variable. It provides controlled access to encapsulated data while maintaining data integrity."
            },
            {
                question: "What is a setter method in OOP?",
                answer: "A setter method (mutator) is a public method that sets or modifies the value of a private instance variable. It can include validation logic to ensure data integrity and proper object state."
            },
            {
                question: "What is the difference between composition and inheritance?",
                answer: "Composition represents a 'has-a' relationship and provides stronger coupling, while inheritance represents an 'is-a' relationship and provides weaker coupling. Composition is generally preferred for code reusability and flexibility."
            },
            {
                question: "What are the benefits of OOP?",
                answer: "OOP benefits include: code reusability through inheritance, better organization through encapsulation, flexibility through polymorphism, easier maintenance and debugging, and modeling real-world concepts more naturally."
            },
            {
                question: "What are the disadvantages of OOP?",
                answer: "OOP disadvantages include: increased complexity for simple programs, potential performance overhead, steep learning curve, and over-engineering for small applications."
            },
            {
                question: "What is a singleton pattern in OOP?",
                answer: "A singleton pattern ensures that a class has only one instance and provides global access to that instance. It is useful for managing shared resources like database connections or configuration settings."
            },
            {
                question: "What is a factory pattern in OOP?",
                answer: "A factory pattern creates objects without specifying their exact class. It provides an interface for creating objects in a superclass but allows subclasses to alter the type of objects created."
            },
            {
                question: "What is method chaining in OOP?",
                answer: "Method chaining allows multiple method calls to be chained together in a single statement. Each method returns an object, enabling fluent interfaces and more readable code."
            },
            {
                question: "What is data hiding in OOP?",
                answer: "Data hiding is a principle of encapsulation where internal data is kept private and can only be accessed through public methods. It protects data integrity and prevents unauthorized access."
            },
            {
                question: "What is a virtual method in OOP?",
                answer: "A virtual method can be overridden in a derived class and enables runtime polymorphism. The actual method called depends on the type of object at runtime, not the type of reference."
            },
            {
                question: "What is the Liskov Substitution Principle?",
                answer: "The Liskov Substitution Principle states that objects of a superclass should be replaceable with objects of a subclass without altering the correctness of the program. It ensures proper inheritance design."
            },
            {
                question: "What is the Open/Closed Principle?",
                answer: "The Open/Closed Principle states that software entities should be open for extension but closed for modification. This promotes adding new functionality through inheritance and composition without changing existing code."
            }
        ]
    },

    tests: {
        "system-fundamentals": [
            {
                question: "Which system implementation method involves running both old and new systems simultaneously?",
                options: ["Pilot Running", "Parallel Running", "Phased Implementation", "Direct Changeover"],
                correct: 1,
                difficulty: "easy",
                explanation: "Parallel running involves operating both the old and new systems simultaneously to verify results and provide a safety net."
            },
            {
                question: "What is the primary advantage of using SaaS (Software as a Service)?",
                options: ["Greater data control", "No local infrastructure needed", "Better customization", "Faster processing"],
                correct: 1,
                difficulty: "medium",
                explanation: "SaaS eliminates the need for local infrastructure as the software is hosted by a third party over the internet."
            },
            {
                question: "Which testing phase involves internal testing by developers using simulated data?",
                options: ["Beta Testing", "Alpha Testing", "User Acceptance Testing", "Integration Testing"],
                correct: 1,
                difficulty: "easy",
                explanation: "Alpha testing is performed internally by developers in a controlled environment using simulated data."
            },
            {
                question: "What is the main purpose of change management in system implementation?",
                options: ["Technical system integration", "User adoption and transition", "Data migration", "System testing"],
                correct: 1,
                difficulty: "medium",
                explanation: "Change management focuses on preparing and supporting users through the transition to ensure successful adoption of the new system."
            },
            {
                question: "Which component of a computer system refers to the people who use and maintain it?",
                options: ["Hardware", "Software", "Network", "Human Resources"],
                correct: 3,
                difficulty: "easy",
                explanation: "Human resources in computing context refers to the people who interact with and manage computer systems."
            },
            {
                question: "What is the main advantage of phased implementation over direct changeover?",
                options: ["Lower cost", "Gradual transition with reduced risk", "Faster completion", "Better user training"],
                correct: 1,
                difficulty: "medium",
                explanation: "Phased implementation allows gradual transition with reduced risk, as each phase can be tested and adjusted before moving to the next."
            },
            {
                question: "In white-box testing, what aspect of the system is examined?",
                options: ["User interface only", "Internal code logic and structure", "External functionality only", "Performance metrics"],
                correct: 1,
                difficulty: "medium",
                explanation: "White-box testing examines internal code logic and structure, with testers having full knowledge of the system's implementation."
            },
            {
                question: "What is the primary risk of using legacy systems in modern environments?",
                options: ["Higher performance", "Compatibility issues with newer systems", "Better security", "Lower maintenance costs"],
                correct: 1,
                difficulty: "medium",
                explanation: "Legacy systems often face compatibility issues with newer systems, making integration and data exchange difficult."
            },
            {
                question: "Which backup strategy provides the fastest recovery time?",
                options: ["Full backup", "Incremental backup", "Differential backup", "Mirror backup"],
                correct: 3,
                difficulty: "medium",
                explanation: "Mirror backup creates an exact copy of data, providing the fastest recovery time as no restoration process is needed."
            },
            {
                question: "What is the main difference between beta testing and user acceptance testing?",
                options: ["Beta testing is internal, UAT is external", "Beta testing uses real users, UAT uses simulated data", "Beta testing is automated, UAT is manual", "There is no difference"],
                correct: 1,
                difficulty: "medium",
                explanation: "Beta testing involves real users testing the system in a real environment, while UAT typically uses controlled scenarios with simulated data."
            },
            {
                question: "In system development, what does the term 'stakeholder' encompass?",
                options: ["Only end users", "Only developers", "Anyone with an interest in the system's success", "Only management"],
                correct: 2,
                difficulty: "easy",
                explanation: "Stakeholders include anyone with an interest in the system's success - users, developers, management, vendors, and regulators."
            },
            {
                question: "What is the primary purpose of a disaster recovery plan?",
                options: ["Prevent disasters", "Ensure business continuity after disruptions", "Reduce system costs", "Improve user satisfaction"],
                correct: 1,
                difficulty: "medium",
                explanation: "A disaster recovery plan ensures business continuity by providing procedures to restore systems and data after disruptions."
            },
            {
                question: "Which factor is most critical when selecting a hosting solution for a business system?",
                options: ["Cost alone", "Security and reliability requirements", "Popularity of the provider", "Latest technology trends"],
                correct: 1,
                difficulty: "hard",
                explanation: "Security and reliability requirements are most critical as they directly impact business operations and data protection."
            },
            {
                question: "What is the fundamental difference between system maintenance and system development?",
                options: ["Maintenance is cheaper", "Development creates new systems, maintenance improves existing ones", "Maintenance is faster", "Development is more complex"],
                correct: 1,
                difficulty: "hard",
                explanation: "System development creates new systems from scratch, while system maintenance involves improving, updating, and fixing existing systems."
            },
            {
                question: "In the context of system implementation, what does 'resistance to change' typically refer to?",
                options: ["Technical system resistance", "User reluctance to adopt new systems", "Hardware compatibility issues", "Software bugs"],
                correct: 1,
                difficulty: "hard",
                explanation: "Resistance to change refers to user reluctance to adopt new systems, often due to fear of learning new processes or losing familiar workflows."
            },
            {
                question: "What is the most effective approach to minimize data loss during system migration?",
                options: ["Rely on automatic backups", "Use multiple backup strategies with verification", "Skip backup for small datasets", "Use only cloud storage"],
                correct: 1,
                difficulty: "hard",
                explanation: "Multiple backup strategies with verification provide the most comprehensive protection against data loss during system migration."
            },
            {
                question: "Which system implementation method poses the highest risk but offers the fastest transition?",
                options: ["Parallel Running", "Pilot Running", "Phased Implementation", "Direct Changeover"],
                correct: 3,
                difficulty: "hard",
                explanation: "Direct changeover poses the highest risk as there's no fallback system, but it offers the fastest transition by switching completely at once."
            },
            {
                question: "What is the primary challenge in maintaining system compatibility across different platforms?",
                options: ["User preferences", "Varying hardware architectures and operating systems", "Cost considerations", "Training requirements"],
                correct: 1,
                difficulty: "hard",
                explanation: "Varying hardware architectures and operating systems create the primary challenge in maintaining system compatibility across platforms."
            },
            {
                question: "In system testing, what does 'regression testing' specifically address?",
                options: ["New feature testing", "Ensuring new changes don't break existing functionality", "Performance testing", "User interface testing"],
                correct: 1,
                difficulty: "hard",
                explanation: "Regression testing ensures that new changes or fixes don't break existing functionality by re-testing previously working features."
            },
            {
                question: "What is the most critical factor in determining the success of a system implementation?",
                options: ["Technical complexity", "User adoption and acceptance", "System performance", "Cost efficiency"],
                correct: 1,
                difficulty: "hard",
                explanation: "User adoption and acceptance is most critical as even technically perfect systems fail if users don't adopt them effectively."
            },
            {
                question: "Which approach best addresses the challenge of legacy system integration with modern systems?",
                options: ["Complete replacement", "Middleware and API integration", "User training", "Performance optimization"],
                correct: 1,
                difficulty: "hard",
                explanation: "Middleware and API integration provides a bridge between legacy systems and modern systems, allowing gradual modernization while maintaining functionality."
            },
            {
                question: "What is the primary advantage of using cloud-based hosting for system scalability?",
                options: ["Fixed costs", "Automatic resource scaling based on demand", "Better security", "Simpler maintenance"],
                correct: 1,
                difficulty: "hard",
                explanation: "Cloud-based hosting provides automatic resource scaling based on demand, allowing systems to handle varying loads efficiently."
            }
        ],
        "computer-organization": [
            {
                question: "What is the Von Neumann bottleneck?",
                options: ["Slow CPU speed", "Limited cache memory", "Shared instruction/data path", "Small RAM capacity"],
                correct: 2,
                difficulty: "medium",
                explanation: "The Von Neumann bottleneck occurs because both instructions and data share the same memory and bus, creating a potential bottleneck when the CPU needs to access memory."
            },
            {
                question: "Which register holds the address of the next instruction to be executed?",
                options: ["IR (Instruction Register)", "MAR (Memory Address Register)", "PC (Program Counter)", "MDR (Memory Data Register)"],
                correct: 2,
                difficulty: "easy",
                explanation: "The Program Counter (PC) holds the address of the next instruction to be fetched and executed."
            },
            {
                question: "What does the ALU primarily handle?",
                options: ["Memory management", "Integer arithmetic and Boolean operations", "Input/output operations", "Network communication"],
                correct: 1,
                difficulty: "easy",
                explanation: "The ALU (Arithmetic Logic Unit) executes integer arithmetic operations and Boolean operations under control unit signals."
            },
            {
                question: "Which type of memory is non-volatile and typically stores firmware?",
                options: ["RAM", "Cache", "ROM", "Virtual Memory"],
                correct: 2,
                difficulty: "easy",
                explanation: "ROM (Read-Only Memory) is non-volatile and typically stores firmware like BIOS, though it's often replaced by flash memory today."
            },
            {
                question: "What is the purpose of cache memory?",
                options: ["To store permanent data", "To reduce average memory access time", "To increase RAM capacity", "To backup important files"],
                correct: 1,
                difficulty: "medium",
                explanation: "Cache memory reduces average memory access time by storing frequently accessed data closer to the CPU, exploiting temporal and spatial locality."
            },
            {
                question: "In the fetch stage of the instruction cycle, what happens after PC→MAR?",
                options: ["Instruction is decoded", "ALU performs operation", "Memory→MDR, MDR→IR, PC++", "Result is stored"],
                correct: 2,
                difficulty: "medium",
                explanation: "After PC→MAR, the fetch stage continues with memory→MDR (getting the instruction), MDR→IR (loading into instruction register), and PC++ (incrementing program counter)."
            },
            {
                question: "What is the main advantage of virtual memory?",
                options: ["Faster access than RAM", "More memory than physically available", "Non-volatile storage", "Direct hardware access"],
                correct: 1,
                difficulty: "medium",
                explanation: "Virtual memory extends apparent RAM by using disk storage, providing more memory than physically available, though with slower access times."
            },
            {
                question: "Which bus carries control and status signals between components?",
                options: ["Address Bus", "Data Bus", "Control Bus", "System Bus"],
                correct: 2,
                difficulty: "easy",
                explanation: "The Control Bus carries control/command/status signals among components, coordinating their operations."
            },
            {
                question: "What happens during the 'Fetch' stage of the machine instruction cycle?",
                options: ["Instructions are executed", "PC is incremented and instruction is loaded into IR", "Results are stored", "ALU performs calculations"],
                correct: 1,
                difficulty: "medium",
                explanation: "During Fetch: PC→MAR; memory→MDR; MDR→IR; PC++. The instruction is loaded from memory into the Instruction Register and PC is incremented."
            },
            {
                question: "Which type of secondary storage provides the fastest access times?",
                options: ["Magnetic tape", "Hard disk drive (HDD)", "Solid state drive (SSD)", "CD-ROM"],
                correct: 2,
                difficulty: "medium",
                explanation: "SSDs provide the fastest access times among secondary storage options due to their lack of moving parts and use of flash memory technology."
            },
            {
                question: "What is the purpose of virtual memory in computer systems?",
                options: ["Increase physical RAM speed", "Extend apparent RAM using disk storage", "Replace physical RAM", "Improve CPU performance"],
                correct: 1,
                difficulty: "medium",
                explanation: "Virtual memory extends apparent RAM using disk storage, allowing programs to use more memory than physically available through paging and swapping."
            },
            {
                question: "Which register holds the memory address for read/write operations?",
                options: ["PC (Program Counter)", "IR (Instruction Register)", "MAR (Memory Address Register)", "MDR (Memory Data Register)"],
                correct: 2,
                difficulty: "easy",
                explanation: "The MAR (Memory Address Register) holds the memory address that the CPU wants to access for read or write operations."
            },
            {
                question: "What is the primary function of device drivers in an operating system?",
                options: ["Manage CPU scheduling", "Provide standardized interface to hardware", "Handle memory allocation", "Control user access"],
                correct: 1,
                difficulty: "medium",
                explanation: "Device drivers provide a standardized interface between the operating system and specific hardware devices, enabling plug-and-play functionality."
            },
            {
                question: "In the context of CPU architecture, what does 'pipelining' achieve?",
                options: ["Reduces CPU cost", "Increases instruction throughput by overlapping execution stages", "Decreases memory usage", "Improves reliability"],
                correct: 1,
                difficulty: "hard",
                explanation: "Pipelining increases instruction throughput by allowing multiple instructions to be in different stages of execution simultaneously, overlapping fetch, decode, execute, and store operations."
            },
            {
                question: "What is the fundamental limitation of the Von Neumann architecture?",
                options: ["High power consumption", "Sequential instruction processing creating potential bottleneck", "Limited memory capacity", "Complex instruction set"],
                correct: 1,
                difficulty: "hard",
                explanation: "The fundamental limitation is the sequential instruction processing where both instructions and data share the same memory and bus, creating the Von Neumann bottleneck."
            },
            {
                question: "Which memory management technique involves dividing memory into fixed-size blocks?",
                options: ["Segmentation", "Paging", "Virtual memory", "Cache mapping"],
                correct: 1,
                difficulty: "hard",
                explanation: "Paging involves dividing memory into fixed-size blocks (pages), allowing efficient memory allocation and virtual memory implementation."
            },
            {
                question: "What is the primary advantage of using interrupts over polling in I/O operations?",
                options: ["Simpler programming", "CPU efficiency - CPU can do other work instead of constantly checking", "Lower hardware cost", "Faster data transfer"],
                correct: 1,
                difficulty: "hard",
                explanation: "Interrupts improve CPU efficiency by allowing the CPU to perform other tasks instead of constantly polling device status, only responding when devices need attention."
            },
            {
                question: "Which factor most significantly affects CPU performance in modern processors?",
                options: ["Clock speed alone", "Number of cores and cache size", "Physical size", "Power consumption"],
                correct: 1,
                difficulty: "hard",
                explanation: "In modern processors, the combination of number of cores and cache size most significantly affects performance, as multi-core processing and cache efficiency are crucial for modern workloads."
            },
            {
                question: "What is the primary purpose of the Memory Management Unit (MMU) in computer systems?",
                options: ["Increase memory speed", "Translate virtual addresses to physical addresses", "Reduce memory cost", "Improve memory reliability"],
                correct: 1,
                difficulty: "hard",
                explanation: "The MMU translates virtual addresses generated by the CPU into physical addresses in memory, enabling virtual memory and memory protection."
            },
            {
                question: "Which storage hierarchy principle explains why cache memory improves performance?",
                options: ["Cost principle", "Locality of reference principle", "Size principle", "Speed principle"],
                correct: 1,
                difficulty: "hard",
                explanation: "The locality of reference principle (temporal and spatial locality) explains why cache memory improves performance by storing recently accessed data and nearby data."
            },
            {
                question: "What is the primary challenge in designing multi-core processor systems?",
                options: ["Power consumption", "Cache coherence and memory consistency", "Physical size", "Cost"],
                correct: 1,
                difficulty: "hard",
                explanation: "Cache coherence and memory consistency are primary challenges as multiple cores must maintain consistent views of shared memory and cache states."
            },
            {
                question: "Which aspect of computer architecture most directly impacts the performance of parallel processing applications?",
                options: ["CPU clock speed", "Memory bandwidth and cache hierarchy", "Storage capacity", "Network speed"],
                correct: 1,
                difficulty: "hard",
                explanation: "Memory bandwidth and cache hierarchy most directly impact parallel processing performance as parallel applications often require efficient data sharing between cores."
            },
            {
                question: "What is the primary advantage of using RISC (Reduced Instruction Set Computer) architecture over CISC (Complex Instruction Set Computer)?",
                options: ["More complex instructions", "Simpler hardware design enabling higher clock speeds", "Better compatibility", "Lower memory usage"],
                correct: 1,
                difficulty: "hard",
                explanation: "RISC architecture's simpler hardware design enables higher clock speeds and more efficient pipelining compared to CISC's complex instruction decoding."
            }
        ],
        "networks": [
            {
                question: "What type of network covers a small geographic area like an office or school?",
                options: ["WAN", "LAN", "MAN", "PAN"],
                correct: 1,
                difficulty: "easy",
                explanation: "LAN (Local Area Network) covers small geographic areas with high speed, limited distance, and is usually owned by one organization."
            },
            {
                question: "What is the main characteristic of a P2P network?",
                options: ["Uses a central server", "Each device acts as both client and server", "Only supports wired connections", "Requires government approval"],
                correct: 1,
                difficulty: "medium",
                explanation: "P2P (Peer-to-Peer) networks have no central server; each device acts as both client and server, supporting file sharing."
            },
            {
                question: "Which network type provides controlled external access like ATM networks?",
                options: ["Intranet", "Internet", "Extranet", "LAN"],
                correct: 2,
                difficulty: "medium",
                explanation: "Extranet provides controlled external access for customers, suppliers, or partners while maintaining security."
            },
            {
                question: "What is the primary purpose of network protocols?",
                options: ["Increase network speed", "Provide formal rules for communication", "Reduce hardware costs", "Enable wireless connections"],
                correct: 1,
                difficulty: "easy",
                explanation: "Protocols are formal rules for communication that define format, order, and actions, enabling compatibility and interoperability."
            },
            {
                question: "What does VPN stand for and what is its main purpose?",
                options: ["Virtual Private Network - creates secure connections", "Very Private Network - increases speed", "Verified Public Network - reduces costs", "Visual Protocol Network - improves graphics"],
                correct: 0,
                difficulty: "easy",
                explanation: "VPN (Virtual Private Network) creates a secure private connection across a public network, used for remote work and connecting branch offices."
            },
            {
                question: "Which transmission medium is most expensive but provides the best performance over long distances?",
                options: ["Twisted pair cable", "Coaxial cable", "Fiber optic cable", "Wireless radio"],
                correct: 2,
                difficulty: "medium",
                explanation: "Fiber optic cable is expensive but provides high speed, long distance capability, and no interference from electrical signals."
            },
            {
                question: "What is packet switching?",
                options: ["Sending data in continuous streams", "Breaking messages into packets that may take different routes", "Using only wired connections", "Encrypting all data transmissions"],
                correct: 1,
                difficulty: "medium",
                explanation: "Packet switching breaks messages into packets that can take different routes and are reassembled at the destination."
            },
            {
                question: "Which wireless technology has the shortest range but highest speed?",
                options: ["WiMAX", "Wi-Fi", "LTE", "Bluetooth"],
                correct: 1,
                difficulty: "medium",
                explanation: "Wi-Fi has short range (~20m) but high speed, making it ideal for local area networks."
            },
            {
                question: "What is the main advantage of using fiber optic cables over copper cables?",
                options: ["Lower cost", "No electromagnetic interference and longer distance", "Easier installation", "Better compatibility"],
                correct: 1,
                difficulty: "medium",
                explanation: "Fiber optic cables provide no electromagnetic interference and can transmit data over much longer distances compared to copper cables."
            },
            {
                question: "What does VPN stand for and what is its primary purpose?",
                options: ["Virtual Private Network - creates secure connections", "Very Private Network - increases speed", "Verified Public Network - improves reliability", "Variable Protocol Network - reduces costs"],
                correct: 0,
                difficulty: "easy",
                explanation: "VPN stands for Virtual Private Network and creates secure private connections across public networks like the internet."
            },
            {
                question: "Which network security method involves filtering devices based on their MAC addresses?",
                options: ["WPA2 encryption", "MAC filtering", "VPN tunneling", "Firewall rules"],
                correct: 1,
                difficulty: "medium",
                explanation: "MAC filtering allows only devices with specific MAC addresses to connect to the network, providing basic access control."
            },
            {
                question: "What is the primary difference between serial and parallel transmission?",
                options: ["Serial is faster", "Serial sends bits one after another, parallel sends multiple bits simultaneously", "Parallel is more reliable", "Serial uses more wires"],
                correct: 1,
                difficulty: "medium",
                explanation: "Serial transmission sends bits sequentially one after another, while parallel transmission sends multiple bits simultaneously on different wires."
            },
            {
                question: "Which network layer in the OSI model handles routing and forwarding?",
                options: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"],
                correct: 2,
                difficulty: "medium",
                explanation: "The Network Layer (Layer 3) handles routing and forwarding of data packets between different networks."
            },
            {
                question: "What is the main disadvantage of wireless networks compared to wired networks?",
                options: ["Higher cost", "Security vulnerabilities and potential interference", "Slower installation", "Limited range"],
                correct: 1,
                difficulty: "easy",
                explanation: "Wireless networks face security vulnerabilities and potential interference from other devices, unlike wired networks."
            },
            {
                question: "Which protocol is responsible for translating domain names to IP addresses?",
                options: ["HTTP", "DNS", "FTP", "SMTP"],
                correct: 1,
                difficulty: "medium",
                explanation: "DNS (Domain Name System) translates human-readable domain names like www.example.com into IP addresses that computers use."
            },
            {
                question: "What is the primary challenge in implementing packet switching networks?",
                options: ["Cost", "Complex routing algorithms and packet reassembly", "Speed", "Security"],
                correct: 1,
                difficulty: "hard",
                explanation: "Packet switching requires sophisticated routing algorithms to determine optimal paths and mechanisms to reassemble packets at the destination."
            },
            {
                question: "Which factor most significantly affects network latency in global communications?",
                options: ["Bandwidth", "Physical distance and signal propagation time", "Number of users", "Protocol overhead"],
                correct: 1,
                difficulty: "hard",
                explanation: "Physical distance and signal propagation time are fundamental limits that most significantly affect network latency in global communications."
            },
            {
                question: "What is the primary advantage of using layered network protocols?",
                options: ["Reduced cost", "Modularity, easier troubleshooting, and interoperability", "Increased speed", "Better security"],
                correct: 1,
                difficulty: "hard",
                explanation: "Layered protocols provide modularity, making it easier to troubleshoot problems, modify individual layers, and ensure interoperability between different systems."
            },
            {
                question: "Which network topology provides the highest fault tolerance?",
                options: ["Bus topology", "Ring topology", "Mesh topology", "Star topology"],
                correct: 2,
                difficulty: "hard",
                explanation: "Mesh topology provides the highest fault tolerance as each node connects to multiple other nodes, providing multiple paths for data transmission."
            },
            {
                question: "What is the fundamental difference between circuit switching and packet switching?",
                options: ["Circuit switching is digital", "Circuit switching establishes dedicated path, packet switching shares network resources", "Packet switching is faster", "Circuit switching uses less bandwidth"],
                correct: 1,
                difficulty: "hard",
                explanation: "Circuit switching establishes a dedicated communication path for the entire duration, while packet switching shares network resources dynamically."
            },
            {
                question: "Which network security threat is most effectively mitigated by using encryption?",
                options: ["Denial of Service attacks", "Data interception and eavesdropping", "MAC address spoofing", "Physical network damage"],
                correct: 1,
                difficulty: "hard",
                explanation: "Encryption effectively mitigates data interception and eavesdropping by making intercepted data unreadable without the proper decryption key."
            },
            {
                question: "What is the primary challenge in scaling wireless networks to support more users?",
                options: ["Cost", "Limited spectrum and interference management", "Power consumption", "Security"],
                correct: 1,
                difficulty: "hard",
                explanation: "Limited spectrum availability and interference management are primary challenges in scaling wireless networks as more users compete for the same frequency bands."
            },
            {
                question: "Which network protocol characteristic is most critical for real-time applications?",
                options: ["High bandwidth", "Low latency and jitter control", "Strong encryption", "Large packet size"],
                correct: 1,
                difficulty: "hard",
                explanation: "Low latency and jitter control are most critical for real-time applications like video calls and gaming, where timing is essential."
            },
            {
                question: "What is the primary advantage of using Quality of Service (QoS) in network management?",
                options: ["Reduced costs", "Guaranteed bandwidth and priority for critical applications", "Better security", "Simpler configuration"],
                correct: 1,
                difficulty: "hard",
                explanation: "QoS provides guaranteed bandwidth and priority handling for critical applications, ensuring important traffic gets preferential treatment during congestion."
            },
            {
                question: "Which network design principle is most important for ensuring system reliability?",
                options: ["Cost optimization", "Redundancy and fault tolerance", "Speed maximization", "Security hardening"],
                correct: 1,
                difficulty: "hard",
                explanation: "Redundancy and fault tolerance are most important for reliability, ensuring the network continues operating even when individual components fail."
            }
        ],
        "computational-thinking": [
            {
                question: "Which aspect of computational thinking involves identifying similarities and trends?",
                options: ["Decomposition", "Pattern Recognition", "Abstraction", "Algorithms"],
                correct: 1,
                difficulty: "easy",
                explanation: "Pattern recognition is identifying similarities and trends within data or problems, helping to apply known solutions to similar situations."
            },
            {
                question: "What is procedural thinking?",
                options: ["Thinking in parallel", "Following ordered steps where sequence matters", "Using Boolean logic", "Breaking problems into parts"],
                correct: 1,
                difficulty: "medium",
                explanation: "Procedural thinking involves solving problems by following ordered steps where the order matters, allowing mapping of complex tasks into clear steps."
            },
            {
                question: "What is the main purpose of pseudocode?",
                options: ["To write executable code", "To plan algorithms before implementation", "To debug programs", "To compile programs"],
                correct: 1,
                difficulty: "easy",
                explanation: "Pseudocode is a structured, plain language approximation of code that helps programmers plan algorithms before implementation."
            },
            {
                question: "Which algorithm divides a sorted list repeatedly to locate an item?",
                options: ["Linear Search", "Binary Search", "Bubble Sort", "Selection Sort"],
                correct: 1,
                difficulty: "medium",
                explanation: "Binary search divides a sorted list repeatedly to locate an item efficiently, while linear search checks each element sequentially."
            },
            {
                question: "What is the difference between a procedure and a function?",
                options: ["No difference", "Functions return values, procedures don't", "Procedures are faster", "Functions are more complex"],
                correct: 1,
                difficulty: "medium",
                explanation: "Functions perform a task and return a value, while procedures perform a task but don't return a value."
            },
            {
                question: "Which type of error violates language rules and is caught during compilation?",
                options: ["Logic error", "Runtime error", "Syntax error", "Semantic error"],
                correct: 2,
                difficulty: "easy",
                explanation: "Syntax errors violate language rules and are caught during compilation, while logic errors produce wrong results and runtime errors cause crashes."
            },
            {
                question: "What is the main advantage of high-level programming languages?",
                options: ["Faster execution", "Hardware-specific", "Closer to human language and portable", "More memory efficient"],
                correct: 2,
                difficulty: "medium",
                explanation: "High-level languages are closer to human language, more portable, and easier to read/write compared to low-level languages."
            },
            {
                question: "What is a trace table used for?",
                options: ["To write algorithms", "To test algorithms step by step with sample data", "To compile programs", "To debug syntax errors"],
                correct: 1,
                difficulty: "medium",
                explanation: "A trace table is used to test algorithms step by step with sample data, showing how variables change as the algorithm executes."
            },
            {
                question: "What is the main purpose of using pseudocode in algorithm design?",
                options: ["To make code run faster", "To represent algorithms in structured, language-like format", "To debug programs", "To compile code"],
                correct: 1,
                difficulty: "easy",
                explanation: "Pseudocode represents algorithms in a structured, language-like format that's easier to understand and modify than actual programming code."
            },
            {
                question: "Which control structure is used for making decisions in programs?",
                options: ["Sequence", "Selection", "Iteration", "Recursion"],
                correct: 1,
                difficulty: "easy",
                explanation: "Selection (if/else, switch) is used for making decisions and choosing between different paths in program execution."
            },
            {
                question: "What is the primary advantage of using flowcharts in algorithm design?",
                options: ["Faster execution", "Visual representation of algorithm flow", "Better memory usage", "Easier debugging"],
                correct: 1,
                difficulty: "medium",
                explanation: "Flowcharts provide visual representation of algorithm flow, making it easier to understand the logic and identify potential issues."
            },
            {
                question: "Which sorting algorithm has the best average-case time complexity?",
                options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Insertion Sort"],
                correct: 2,
                difficulty: "medium",
                explanation: "Merge Sort has O(n log n) average-case time complexity, which is better than the O(n²) complexity of bubble, selection, and insertion sorts."
            },
            {
                question: "What is the main difference between binary search and linear search?",
                options: ["Binary search is faster", "Binary search requires sorted data and has O(log n) complexity", "Linear search is more accurate", "Binary search uses more memory"],
                correct: 1,
                difficulty: "medium",
                explanation: "Binary search requires sorted data and has O(log n) time complexity, making it much faster than linear search's O(n) complexity."
            },
            {
                question: "What does 'stepwise refinement' mean in problem-solving?",
                options: ["Making programs run faster", "Breaking problems into progressively smaller steps", "Using fewer variables", "Writing shorter code"],
                correct: 1,
                difficulty: "medium",
                explanation: "Stepwise refinement involves breaking complex problems into progressively smaller, more manageable steps until they can be easily solved."
            },
            {
                question: "Which programming paradigm focuses on breaking problems into smaller, manageable parts?",
                options: ["Procedural programming", "Object-oriented programming", "Functional programming", "All of the above"],
                correct: 3,
                difficulty: "medium",
                explanation: "All programming paradigms focus on breaking problems into smaller parts, though they do so in different ways (functions, objects, etc.)."
            },
            {
                question: "What is the primary challenge in designing efficient algorithms for large datasets?",
                options: ["Memory limitations", "Time complexity and scalability", "User interface design", "Database connectivity"],
                correct: 1,
                difficulty: "hard",
                explanation: "Time complexity and scalability are primary challenges as algorithms must perform efficiently even as dataset size increases exponentially."
            },
            {
                question: "Which algorithmic design technique is most effective for problems with overlapping subproblems?",
                options: ["Greedy algorithms", "Dynamic programming", "Divide and conquer", "Backtracking"],
                correct: 1,
                difficulty: "hard",
                explanation: "Dynamic programming is most effective for problems with overlapping subproblems, as it stores solutions to avoid recalculating them."
            },
            {
                question: "What is the fundamental trade-off in algorithm design between time and space complexity?",
                options: ["Time is always more important", "Space is always more important", "Can use more memory to reduce execution time or vice versa", "No trade-off exists"],
                correct: 2,
                difficulty: "hard",
                explanation: "The fundamental trade-off allows using more memory (space) to reduce execution time, or accepting longer execution time to use less memory."
            },
            {
                question: "Which problem-solving strategy is most effective for NP-complete problems?",
                options: ["Exact algorithms", "Heuristic algorithms and approximation methods", "Brute force", "Random algorithms"],
                correct: 1,
                difficulty: "hard",
                explanation: "For NP-complete problems, heuristic algorithms and approximation methods are most effective as they provide good solutions in reasonable time."
            },
            {
                question: "What is the primary advantage of using recursion in algorithm design?",
                options: ["Faster execution", "Elegant solution for problems with recursive structure", "Lower memory usage", "Easier debugging"],
                correct: 1,
                difficulty: "hard",
                explanation: "Recursion provides elegant solutions for problems with recursive structure, making code more readable and naturally expressing the problem's structure."
            },
            {
                question: "Which factor most significantly impacts the choice of algorithm for a specific problem?",
                options: ["Programming language", "Data size and time constraints", "Developer preference", "Hardware specifications"],
                correct: 1,
                difficulty: "hard",
                explanation: "Data size and time constraints most significantly impact algorithm choice as they determine whether an algorithm can meet performance requirements."
            },
            {
                question: "What is the primary challenge in implementing parallel algorithms?",
                options: ["Cost", "Synchronization and data consistency", "Memory usage", "Code complexity"],
                correct: 1,
                difficulty: "hard",
                explanation: "Synchronization and data consistency are primary challenges in parallel algorithms as multiple threads must coordinate and maintain data integrity."
            },
            {
                question: "Which algorithmic complexity class represents problems that can be solved in polynomial time?",
                options: ["P", "NP", "NP-complete", "Exponential"],
                correct: 0,
                difficulty: "hard",
                explanation: "Class P represents problems that can be solved in polynomial time, making them efficiently solvable by computers."
            },
            {
                question: "What is the primary advantage of using divide-and-conquer algorithms?",
                options: ["Lower memory usage", "Breaking complex problems into simpler subproblems", "Faster compilation", "Better error handling"],
                correct: 1,
                difficulty: "hard",
                explanation: "Divide-and-conquer algorithms break complex problems into simpler subproblems, making them easier to solve and often more efficient."
            },
            {
                question: "Which approach is most effective for optimizing algorithm performance in real-world applications?",
                options: ["Always use the fastest algorithm", "Profile and measure actual performance with real data", "Use theoretical complexity analysis only", "Choose algorithms based on popularity"],
                correct: 1,
                difficulty: "hard",
                explanation: "Profiling and measuring actual performance with real data is most effective as theoretical analysis may not account for real-world factors like cache behavior and data patterns."
            }
        ],
        "abstract-data-structures": [
            {
                question: "Which data structure follows LIFO (Last In, First Out) principle?",
                options: ["Queue", "Stack", "Array", "Linked List"],
                correct: 1,
                difficulty: "easy",
                explanation: "A stack follows the LIFO principle where elements are added and removed from the same end (top)."
            },
            {
                question: "What is the main advantage of a linked list over an array?",
                options: ["Faster random access", "Dynamic size allocation", "Better cache performance", "Lower memory usage"],
                correct: 1,
                difficulty: "medium",
                explanation: "Linked lists allow dynamic memory allocation and efficient insertion/deletion at any position, unlike arrays which have fixed size."
            },
            {
                question: "Which tree traversal method visits nodes in the order: left → root → right?",
                options: ["Pre-order", "In-order", "Post-order", "Level-order"],
                correct: 1,
                difficulty: "medium",
                explanation: "In-order traversal visits the left subtree, then the root, then the right subtree, which produces sorted output for BSTs."
            },
            {
                question: "What is the average time complexity of search operations in a hash table?",
                options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
                correct: 0,
                difficulty: "easy",
                explanation: "Hash tables provide average O(1) time complexity for search, insert, and delete operations due to the hash function mapping."
            },
            {
                question: "Which data structure is typically used to implement a priority queue?",
                options: ["Stack", "Queue", "Heap", "Hash table"],
                correct: 2,
                difficulty: "medium",
                explanation: "Heaps are commonly used to implement priority queues because they maintain elements in priority order with efficient access to the highest/lowest priority element."
            },
            {
                question: "What happens when a collision occurs in a hash table?",
                options: ["The hash function is changed", "Two keys map to the same index", "The table size is doubled", "All elements are rehashed"],
                correct: 1,
                difficulty: "medium",
                explanation: "A collision occurs when two different keys hash to the same index, which is resolved using techniques like chaining or open addressing."
            },
            {
                question: "Which operation is NOT typically performed on a stack?",
                options: ["PUSH", "POP", "DEQUEUE", "PEEK"],
                correct: 2,
                difficulty: "easy",
                explanation: "DEQUEUE is a queue operation that removes from the front. Stack operations include PUSH (add to top), POP (remove from top), and PEEK (view top element)."
            },
            {
                question: "What is the time complexity of inserting an element at the beginning of a linked list?",
                options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
                correct: 0,
                difficulty: "medium",
                explanation: "Inserting at the beginning of a linked list is O(1) because you only need to update the head pointer, regardless of the list size."
            },
            {
                question: "Which data structure is best for implementing a function call stack?",
                options: ["Queue", "Stack", "Array", "Tree"],
                correct: 1,
                difficulty: "easy",
                explanation: "Stack is best for function call stack because it follows LIFO principle, allowing functions to return in reverse order of their calls."
            },
            {
                question: "What is the main advantage of using a hash table?",
                options: ["Ordered storage", "Average O(1) access time", "Memory efficiency", "Easy sorting"],
                correct: 1,
                difficulty: "easy",
                explanation: "Hash tables provide average O(1) access time for insertion, deletion, and lookup operations when hash function distributes keys well."
            },
            {
                question: "Which tree traversal visits nodes in the order: left subtree, root, right subtree?",
                options: ["Pre-order", "In-order", "Post-order", "Level-order"],
                correct: 1,
                difficulty: "medium",
                explanation: "In-order traversal visits left subtree first, then root, then right subtree, which gives sorted order in binary search trees."
            },
            {
                question: "What is the primary advantage of using a binary search tree?",
                options: ["Memory efficiency", "Average O(log n) search time", "Easy insertion", "Fast deletion"],
                correct: 1,
                difficulty: "medium",
                explanation: "Binary search trees provide average O(log n) search time by maintaining sorted order and using binary search principle."
            },
            {
                question: "Which data structure is most suitable for implementing a priority queue?",
                options: ["Array", "Linked List", "Heap", "Stack"],
                correct: 2,
                difficulty: "medium",
                explanation: "Heap is most suitable for priority queue as it efficiently maintains the highest (or lowest) priority element at the root."
            },
            {
                question: "What is the main difference between a stack and a queue?",
                options: ["Stack is faster", "Stack uses LIFO, queue uses FIFO", "Queue uses more memory", "Stack is more secure"],
                correct: 1,
                difficulty: "medium",
                explanation: "Stack follows LIFO (Last In, First Out) principle, while queue follows FIFO (First In, First Out) principle."
            },
            {
                question: "Which graph traversal algorithm uses a queue data structure?",
                options: ["Depth-First Search (DFS)", "Breadth-First Search (BFS)", "Dijkstra's algorithm", "A* algorithm"],
                correct: 1,
                difficulty: "medium",
                explanation: "Breadth-First Search uses a queue to explore nodes level by level, ensuring all nodes at the same distance are visited before moving to the next level."
            },
            {
                question: "What is the primary challenge in implementing efficient hash tables?",
                options: ["Memory usage", "Hash collisions and collision resolution", "Key ordering", "Value storage"],
                correct: 1,
                difficulty: "hard",
                explanation: "Hash collisions occur when different keys map to the same hash value, requiring collision resolution strategies like chaining or open addressing."
            },
            {
                question: "Which data structure is most efficient for implementing a LRU (Least Recently Used) cache?",
                options: ["Array", "Hash table + Doubly linked list", "Stack", "Binary tree"],
                correct: 1,
                difficulty: "hard",
                explanation: "Hash table provides O(1) access while doubly linked list allows O(1) insertion/deletion, making it ideal for LRU cache implementation."
            },
            {
                question: "What is the primary advantage of using balanced trees (like AVL or Red-Black trees)?",
                options: ["Lower memory usage", "Guaranteed O(log n) height and operations", "Faster insertion", "Easier implementation"],
                correct: 1,
                difficulty: "hard",
                explanation: "Balanced trees maintain guaranteed O(log n) height through self-balancing mechanisms, ensuring consistent performance regardless of insertion order."
            },
            {
                question: "Which algorithm is most suitable for finding the shortest path in a weighted graph with negative edges?",
                options: ["Dijkstra's algorithm", "Bellman-Ford algorithm", "BFS", "DFS"],
                correct: 1,
                difficulty: "hard",
                explanation: "Bellman-Ford algorithm can handle negative edge weights, unlike Dijkstra's algorithm which assumes non-negative weights."
            },
            {
                question: "What is the primary challenge in implementing concurrent data structures?",
                options: ["Memory efficiency", "Thread safety and synchronization", "Performance", "Complexity"],
                correct: 1,
                difficulty: "hard",
                explanation: "Concurrent data structures must ensure thread safety and proper synchronization to prevent race conditions and data corruption in multi-threaded environments."
            },
            {
                question: "Which data structure is most suitable for implementing a database index?",
                options: ["Array", "B-tree", "Stack", "Queue"],
                correct: 1,
                difficulty: "hard",
                explanation: "B-trees are ideal for database indexes as they minimize disk I/O operations and maintain sorted order for efficient range queries."
            },
            {
                question: "What is the primary advantage of using persistent data structures?",
                options: ["Lower memory usage", "Maintain multiple versions without modifying existing ones", "Faster access", "Easier implementation"],
                correct: 1,
                difficulty: "hard",
                explanation: "Persistent data structures maintain multiple versions simultaneously, allowing access to previous states without modifying existing data."
            },
            {
                question: "Which graph algorithm is most suitable for detecting cycles in directed graphs?",
                options: ["BFS", "DFS with color coding", "Dijkstra's algorithm", "Floyd-Warshall algorithm"],
                correct: 1,
                difficulty: "hard",
                explanation: "DFS with color coding (white, gray, black) is most suitable for cycle detection as it can identify back edges that indicate cycles."
            },
            {
                question: "What is the primary challenge in implementing efficient string matching algorithms?",
                options: ["Memory usage", "Handling multiple pattern matching and text preprocessing", "Character encoding", "Case sensitivity"],
                correct: 1,
                difficulty: "hard",
                explanation: "Efficient string matching requires sophisticated algorithms like KMP or Rabin-Karp that preprocess patterns and handle multiple matches efficiently."
            },
            {
                question: "Which data structure is most suitable for implementing a spell checker?",
                options: ["Array", "Trie (prefix tree)", "Stack", "Queue"],
                correct: 1,
                difficulty: "hard",
                explanation: "Trie is ideal for spell checkers as it efficiently stores and searches words with common prefixes, enabling fast prefix matching and autocomplete."
            }
        ],
        "resource-management": [
            {
                question: "What technique allows programs to use more memory than physically available?",
                options: ["Cache Memory", "Virtual Memory", "RAM", "ROM"],
                correct: 1,
                difficulty: "medium",
                explanation: "Virtual memory uses secondary storage as an extension of main memory, allowing programs to use more memory than physically available."
            },
            {
                question: "What is the main purpose of cache memory?",
                options: ["Long-term storage", "Reduce CPU-RAM latency", "Network communication", "Graphics processing"],
                correct: 1,
                difficulty: "easy",
                explanation: "Cache memory is very fast memory located close to the CPU that reduces CPU-RAM latency by storing frequently accessed data and instructions."
            },
            {
                question: "What happens in a deadlock situation?",
                options: ["Processes run faster", "Two or more processes wait forever for each other's resources", "Memory is freed automatically", "CPU usage increases"],
                correct: 1,
                difficulty: "medium",
                explanation: "Deadlock occurs when two or more processes wait forever for each other's resources, creating a circular dependency that prevents any process from proceeding."
            },
            {
                question: "What is thrashing in resource management?",
                options: ["Fast memory access", "System spends more time swapping than executing", "Efficient CPU usage", "Quick file operations"],
                correct: 1,
                difficulty: "medium",
                explanation: "Thrashing occurs when the system spends more time swapping memory between RAM and disk than executing actual program instructions, severely degrading performance."
            },
            {
                question: "Which scheduling algorithm gives each process equal time slices?",
                options: ["Priority-based", "Round-robin", "Shortest-job-first", "First-come, first-served"],
                correct: 1,
                difficulty: "easy",
                explanation: "Round-robin scheduling gives each process equal time slices in a circular order, ensuring fair CPU allocation."
            },
            {
                question: "What is the difference between paging and segmentation?",
                options: ["Paging uses fixed blocks, segmentation uses variable blocks", "They are the same thing", "Paging is faster", "Segmentation uses more memory"],
                correct: 0,
                difficulty: "hard",
                explanation: "Paging splits memory into fixed-size blocks called pages, while segmentation divides memory into variable-sized logical blocks (code, stack, heap segments)."
            },
            {
                question: "What type of operating system is designed for critical tasks with strict timing requirements?",
                options: ["Single-user OS", "Multi-user OS", "Real-Time OS (RTOS)", "Embedded OS"],
                correct: 2,
                difficulty: "medium",
                explanation: "An RTOS is designed to handle critical tasks with strict timing requirements, commonly used in aircraft systems, medical devices, and industrial control systems."
            },
            {
                question: "What is the main advantage of virtualization?",
                options: ["Faster hardware", "Emulates hardware or resources for multiple environments", "Uses less memory", "Simpler programming"],
                correct: 1,
                difficulty: "medium",
                explanation: "Virtualization allows an OS to emulate hardware or resources, creating virtual environments like virtual machines, virtual memory, or cloud computing infrastructure."
            },
            {
                question: "What is the primary purpose of an operating system?",
                options: ["Run applications", "Manage hardware and software resources", "Connect to internet", "Store files"],
                correct: 1,
                difficulty: "easy",
                explanation: "The primary purpose of an operating system is to manage hardware and software resources, providing a platform for applications to run."
            },
            {
                question: "Which scheduling algorithm gives equal time slices to all processes?",
                options: ["Priority-based", "First-Come-First-Served", "Round-robin", "Shortest Job First"],
                correct: 2,
                difficulty: "easy",
                explanation: "Round-robin scheduling gives equal time slices to all processes in a circular manner, ensuring fair CPU allocation."
            },
            {
                question: "What is the main advantage of using paging in memory management?",
                options: ["Faster access", "Efficient memory allocation and virtual memory support", "Lower cost", "Better security"],
                correct: 1,
                difficulty: "medium",
                explanation: "Paging provides efficient memory allocation by dividing memory into fixed-size blocks and enables virtual memory implementation."
            },
            {
                question: "Which resource management technique prevents processes from accessing each other's memory?",
                options: ["Scheduling", "Memory protection", "Virtualization", "Caching"],
                correct: 1,
                difficulty: "medium",
                explanation: "Memory protection prevents processes from accessing each other's memory space, ensuring system stability and security."
            },
            {
                question: "What is the primary cause of thrashing in virtual memory systems?",
                options: ["Too much RAM", "Insufficient physical memory causing excessive paging", "Slow CPU", "Network issues"],
                correct: 1,
                difficulty: "medium",
                explanation: "Thrashing occurs when there's insufficient physical memory, causing the system to spend more time swapping pages than executing processes."
            },
            {
                question: "Which operating system component manages device drivers?",
                options: ["Kernel", "User interface", "File system", "Network stack"],
                correct: 0,
                difficulty: "medium",
                explanation: "The kernel manages device drivers, providing a standardized interface between the operating system and hardware devices."
            },
            {
                question: "What is the primary advantage of using interrupts over polling for I/O operations?",
                options: ["Simpler programming", "CPU efficiency - CPU can do other work instead of constantly checking", "Lower hardware cost", "Faster data transfer"],
                correct: 1,
                difficulty: "medium",
                explanation: "Interrupts improve CPU efficiency by allowing the CPU to perform other tasks instead of constantly polling device status."
            },
            {
                question: "What is the primary challenge in designing real-time operating systems?",
                options: ["Cost", "Meeting strict timing deadlines and predictability", "Memory usage", "User interface"],
                correct: 1,
                difficulty: "hard",
                explanation: "Real-time operating systems must meet strict timing deadlines and provide predictable behavior, which is challenging in complex systems."
            },
            {
                question: "Which memory management technique provides better memory utilization: paging or segmentation?",
                options: ["Segmentation", "Paging", "Both are equal", "Depends on application"],
                correct: 3,
                difficulty: "hard",
                explanation: "The choice depends on the application - paging reduces external fragmentation, while segmentation provides logical organization and reduces internal fragmentation."
            },
            {
                question: "What is the primary challenge in implementing efficient CPU scheduling algorithms?",
                options: ["Memory usage", "Balancing fairness, throughput, and response time", "Cost", "Complexity"],
                correct: 1,
                difficulty: "hard",
                explanation: "CPU scheduling algorithms must balance fairness, throughput, and response time, which often involves trade-offs between different performance metrics."
            },
            {
                question: "Which resource management strategy is most effective for preventing deadlock?",
                options: ["Ignore deadlock", "Deadlock prevention through resource ordering", "Detection and recovery", "Avoidance algorithms"],
                correct: 3,
                difficulty: "hard",
                explanation: "Deadlock avoidance algorithms like Banker's algorithm are most effective as they prevent deadlock by ensuring the system never enters an unsafe state."
            },
            {
                question: "What is the primary advantage of using microkernel architecture in operating systems?",
                options: ["Better performance", "Improved reliability and modularity", "Lower memory usage", "Simpler design"],
                correct: 1,
                difficulty: "hard",
                explanation: "Microkernel architecture improves reliability and modularity by running most OS services in user space, isolating them from kernel failures."
            },
            {
                question: "Which virtualization technique provides the best performance for guest operating systems?",
                options: ["Full virtualization", "Paravirtualization", "Hardware-assisted virtualization", "Container virtualization"],
                correct: 2,
                difficulty: "hard",
                explanation: "Hardware-assisted virtualization provides the best performance by using CPU features to accelerate virtualization operations."
            },
            {
                question: "What is the primary challenge in implementing efficient cache management in multi-core systems?",
                options: ["Memory usage", "Cache coherence and consistency", "Cost", "Complexity"],
                correct: 1,
                difficulty: "hard",
                explanation: "Cache coherence and consistency are primary challenges as multiple cores must maintain consistent views of shared memory and cache states."
            },
            {
                question: "Which resource allocation strategy is most suitable for real-time systems?",
                options: ["Best-fit", "First-fit", "Priority-based allocation", "Round-robin"],
                correct: 2,
                difficulty: "hard",
                explanation: "Priority-based allocation is most suitable for real-time systems as it ensures critical tasks get resources first to meet timing constraints."
            },
            {
                question: "What is the primary advantage of using containerization over traditional virtualization?",
                options: ["Better security", "Lower resource overhead and faster startup", "Easier management", "Better isolation"],
                correct: 1,
                difficulty: "hard",
                explanation: "Containerization provides lower resource overhead and faster startup by sharing the host OS kernel instead of running separate guest OS instances."
            },
            {
                question: "Which operating system design principle is most important for ensuring system reliability?",
                options: ["Performance optimization", "Fault tolerance and error recovery", "Cost reduction", "Feature richness"],
                correct: 1,
                difficulty: "hard",
                explanation: "Fault tolerance and error recovery are most important for reliability as they ensure the system continues operating even when components fail."
            }
        ],
        "control": [
            {
                question: "What is the basic control cycle in control systems?",
                options: ["Input-Output-Process", "Sensor-Processor-Output", "Data-Process-Action", "Sense-Decide-Act"],
                correct: 1,
                difficulty: "easy",
                explanation: "The basic control cycle consists of sensors detecting environmental conditions, processors interpreting data and making decisions, and output transducers performing actions."
            },
            {
                question: "What is the main difference between microprocessors and microcontrollers?",
                options: ["Size", "General-purpose vs specialized", "Speed", "Cost"],
                correct: 1,
                difficulty: "medium",
                explanation: "Microprocessors are general-purpose and versatile, while microcontrollers are specialized processors with integrated memory and I/O ports designed for specific control tasks."
            },
            {
                question: "What type of control system has no feedback from output to input?",
                options: ["Closed-loop", "Open-loop", "Feedback system", "Adaptive system"],
                correct: 1,
                difficulty: "easy",
                explanation: "An open-loop system has no feedback from output to input and operates with predetermined actions regardless of actual results."
            },
            {
                question: "What are autonomous agents?",
                options: ["Human operators", "Software or hardware systems that act independently", "Remote control devices", "Manual control systems"],
                correct: 1,
                difficulty: "medium",
                explanation: "Autonomous agents are software or hardware systems that act independently to achieve goals, react to their environment, learn from experience, and adapt their behavior."
            },
            {
                question: "What are the main advantages of feedback systems?",
                options: ["Lower cost", "Improved accuracy and adaptability", "Simpler design", "Faster processing"],
                correct: 1,
                difficulty: "medium",
                explanation: "Feedback systems improve accuracy and adaptability by continuously monitoring output and adjusting input accordingly, compensating for disturbances and maintaining desired performance."
            },
            {
                question: "What factors should be considered when evaluating input devices?",
                options: ["Cost and size only", "Accuracy, range, and frequency", "Color and design", "Brand and warranty"],
                correct: 1,
                difficulty: "medium",
                explanation: "When evaluating input devices, consider accuracy (precision of data capture), range (minimum/maximum values measurable), and frequency of data collection (real-time vs periodic)."
            },
            {
                question: "What is a distributed control system?",
                options: ["Single processor controlling all devices", "Multiple processors working together", "Manual control system", "Simple feedback system"],
                correct: 1,
                difficulty: "medium",
                explanation: "A distributed system uses multiple processors working together and sharing tasks, making it more robust, scalable, and fault-tolerant than centralized systems."
            },
            {
                question: "What are examples of autonomous agents?",
                options: ["Traffic lights", "Roomba vacuum robots", "Manual car steering", "Simple calculators"],
                correct: 1,
                difficulty: "easy",
                explanation: "Examples of autonomous agents include Roomba vacuum robots that clean floors independently, self-driving cars, and trading algorithms that make decisions based on market conditions."
            },
            {
                question: "What is the main difference between microprocessors and microcontrollers?",
                options: ["Size", "General-purpose vs specialized", "Speed", "Cost"],
                correct: 1,
                difficulty: "easy",
                explanation: "Microprocessors are general-purpose and versatile, while microcontrollers are specialized processors with integrated memory and I/O ports designed for specific control tasks."
            },
            {
                question: "What type of control system has no feedback from output to input?",
                options: ["Closed-loop", "Open-loop", "Feedback system", "Adaptive system"],
                correct: 1,
                difficulty: "easy",
                explanation: "An open-loop system has no feedback from output to input and operates with predetermined actions regardless of actual results."
            },
            {
                question: "What are the main advantages of feedback systems?",
                options: ["Lower cost", "Improved accuracy and adaptability", "Simpler design", "Faster processing"],
                correct: 1,
                difficulty: "medium",
                explanation: "Feedback systems improve accuracy and adaptability by continuously monitoring output and adjusting input accordingly, compensating for disturbances and maintaining desired performance."
            },
            {
                question: "What factors should be considered when evaluating input devices?",
                options: ["Cost and size only", "Accuracy, range, and frequency", "Color and design", "Brand and warranty"],
                correct: 1,
                difficulty: "medium",
                explanation: "When evaluating input devices, consider accuracy (precision of data capture), range (minimum/maximum values measurable), and frequency of data collection (real-time vs periodic)."
            },
            {
                question: "What is a distributed control system?",
                options: ["Single processor controlling all devices", "Multiple processors working together", "Manual control system", "Simple feedback system"],
                correct: 1,
                difficulty: "medium",
                explanation: "A distributed system uses multiple processors working together and sharing tasks, making it more robust, scalable, and fault-tolerant than centralized systems."
            },
            {
                question: "What is the primary advantage of using microcontrollers in embedded systems?",
                options: ["Higher performance", "Integrated memory, I/O, and energy efficiency", "Better compatibility", "Easier programming"],
                correct: 1,
                difficulty: "medium",
                explanation: "Microcontrollers provide integrated memory and I/O ports with energy efficiency, making them ideal for embedded systems with specific control tasks."
            },
            {
                question: "What is the primary challenge in designing autonomous control systems?",
                options: ["Cost", "Decision-making and adaptability in uncertain environments", "Power consumption", "Size"],
                correct: 1,
                difficulty: "medium",
                explanation: "Autonomous control systems must make intelligent decisions and adapt to uncertain, changing environments without human intervention."
            },
            {
                question: "What is the primary challenge in implementing real-time control systems?",
                options: ["Cost", "Meeting strict timing constraints and predictability", "Memory usage", "User interface"],
                correct: 1,
                difficulty: "hard",
                explanation: "Real-time control systems must meet strict timing constraints and provide predictable behavior, which is challenging in complex, dynamic environments."
            },
            {
                question: "Which control system architecture is most suitable for large-scale industrial applications?",
                options: ["Centralized", "Distributed", "Hybrid", "Decentralized"],
                correct: 1,
                difficulty: "hard",
                explanation: "Distributed control systems are most suitable for large-scale industrial applications as they provide scalability, fault tolerance, and better performance."
            },
            {
                question: "What is the primary challenge in implementing adaptive control systems?",
                options: ["Cost", "Learning and adapting to changing system dynamics", "Memory usage", "Complexity"],
                correct: 1,
                difficulty: "hard",
                explanation: "Adaptive control systems must learn and adapt to changing system dynamics, requiring sophisticated algorithms and real-time parameter adjustment."
            },
            {
                question: "Which control strategy is most effective for systems with uncertain parameters?",
                options: ["Fixed-gain control", "Robust control", "Optimal control", "PID control"],
                correct: 1,
                difficulty: "hard",
                explanation: "Robust control is most effective for systems with uncertain parameters as it maintains performance despite parameter variations and disturbances."
            },
            {
                question: "What is the primary challenge in implementing distributed control systems?",
                options: ["Cost", "Coordination and communication between subsystems", "Memory usage", "Complexity"],
                correct: 1,
                difficulty: "hard",
                explanation: "Distributed control systems must coordinate and communicate effectively between subsystems, which is challenging due to communication delays and synchronization issues."
            },
            {
                question: "Which control approach is most suitable for systems with multiple objectives?",
                options: ["Single-objective control", "Multi-objective optimization", "Fixed control", "Simple feedback"],
                correct: 1,
                difficulty: "hard",
                explanation: "Multi-objective optimization is most suitable for systems with multiple objectives as it can balance competing requirements and find optimal trade-offs."
            },
            {
                question: "What is the primary challenge in implementing intelligent control systems?",
                options: ["Cost", "Integrating AI techniques with control theory", "Memory usage", "Complexity"],
                correct: 1,
                difficulty: "hard",
                explanation: "Intelligent control systems must integrate AI techniques like machine learning with control theory, which requires sophisticated algorithms and real-time processing."
            },
            {
                question: "Which control strategy is most effective for systems with time-varying dynamics?",
                options: ["Fixed control", "Adaptive control", "Robust control", "Simple feedback"],
                correct: 1,
                difficulty: "hard",
                explanation: "Adaptive control is most effective for systems with time-varying dynamics as it can adjust control parameters in real-time to maintain performance."
            },
            {
                question: "What is the primary advantage of using model predictive control (MPC)?",
                options: ["Simplicity", "Handling constraints and optimizing future behavior", "Cost", "Speed"],
                correct: 1,
                difficulty: "hard",
                explanation: "Model predictive control handles constraints and optimizes future behavior by predicting system response and solving optimization problems at each time step."
            },
            {
                question: "Which control system design principle is most important for ensuring safety in critical applications?",
                options: ["Performance optimization", "Fault tolerance and fail-safe mechanisms", "Cost reduction", "Feature richness"],
                correct: 1,
                difficulty: "hard",
                explanation: "Fault tolerance and fail-safe mechanisms are most important for safety in critical applications as they ensure the system remains safe even when components fail."
            }
        ],
        "object-oriented-programming": [
            {
                question: "Which OOP principle involves bundling data and methods together?",
                options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
                correct: 2,
                difficulty: "medium",
                explanation: "Encapsulation involves bundling data and methods together within a class, providing controlled access through access modifiers."
            },
            {
                question: "What is the main difference between method overriding and method overloading?",
                options: ["Overriding changes method name, overloading changes parameters", "Overriding is in different classes, overloading is in same class", "Overriding is compile-time, overloading is runtime", "There is no difference"],
                correct: 1,
                difficulty: "medium",
                explanation: "Method overriding occurs in different classes (parent-child relationship), while method overloading occurs within the same class with different parameters."
            },
            {
                question: "What is the difference between an abstract class and an interface?",
                options: ["Abstract classes can have constructors, interfaces cannot", "Interfaces support multiple inheritance, abstract classes do not", "Both can have method implementations", "Both A and B"],
                correct: 3,
                difficulty: "hard",
                explanation: "Abstract classes can have constructors and concrete methods, while interfaces cannot. Interfaces support multiple inheritance, but abstract classes support only single inheritance."
            },
            {
                question: "What does the 'super' keyword do in OOP?",
                options: ["Refers to the current object", "Refers to the parent class", "Creates a new object", "Deletes an object"],
                correct: 1,
                difficulty: "easy",
                explanation: "The 'super' keyword refers to the parent class and is used to call parent class constructors, methods, or access parent class variables from within a subclass."
            },
            {
                question: "What is composition in OOP?",
                options: ["Inheriting from multiple classes", "A 'has-a' relationship between classes", "Method overriding", "Creating abstract methods"],
                correct: 1,
                difficulty: "medium",
                explanation: "Composition is a 'has-a' relationship where a class contains objects of other classes as members, providing stronger coupling than inheritance."
            },
            {
                question: "What are the four pillars of OOP?",
                options: ["Class, Object, Method, Variable", "Encapsulation, Inheritance, Polymorphism, Abstraction", "Public, Private, Protected, Static", "Constructor, Destructor, Getter, Setter"],
                correct: 1,
                difficulty: "easy",
                explanation: "The four pillars of OOP are Encapsulation (bundling data and methods), Inheritance (code reusability), Polymorphism (different forms), and Abstraction (hiding complexity)."
            },
            {
                question: "What is a static method in OOP?",
                options: ["A method that cannot be overridden", "A method that belongs to the class, not instances", "A method that is always private", "A method that creates objects"],
                correct: 1,
                difficulty: "medium",
                explanation: "A static method belongs to the class rather than to any specific instance and can be called without creating an object of the class."
            },
            {
                question: "What is the purpose of getter and setter methods?",
                options: ["To create objects", "To provide controlled access to private data", "To override parent methods", "To implement interfaces"],
                correct: 1,
                difficulty: "medium",
                explanation: "Getter and setter methods provide controlled access to private instance variables, maintaining data integrity and encapsulation principles."
            },
            {
                question: "What is the main difference between a class and an object?",
                options: ["Class is faster", "Class is a blueprint, object is an instance", "Object is more secure", "Class uses more memory"],
                correct: 1,
                difficulty: "easy",
                explanation: "A class is a blueprint or template that defines the structure and behavior, while an object is an instance of that class with specific values."
            },
            {
                question: "What is the main advantage of using inheritance in OOP?",
                options: ["Better performance", "Code reusability and 'is-a' relationships", "Lower memory usage", "Easier debugging"],
                correct: 1,
                difficulty: "easy",
                explanation: "Inheritance promotes code reusability and creates 'is-a' relationships, allowing child classes to inherit properties and methods from parent classes."
            },
            {
                question: "What is the primary advantage of using composition over inheritance?",
                options: ["Better performance", "Greater flexibility and weaker coupling", "Lower memory usage", "Easier implementation"],
                correct: 1,
                difficulty: "medium",
                explanation: "Composition provides greater flexibility and weaker coupling compared to inheritance, making systems more maintainable and adaptable."
            },
            {
                question: "What is the main difference between method overriding and method overloading?",
                options: ["Overriding changes method name", "Overriding is in different classes, overloading is in same class", "Overloading is faster", "Overriding uses more memory"],
                correct: 1,
                difficulty: "medium",
                explanation: "Method overriding occurs in different classes (parent-child relationship), while method overloading occurs within the same class with different parameters."
            },
            {
                question: "What is the primary purpose of using abstract classes?",
                options: ["Better performance", "Define common interface and shared behavior", "Lower memory usage", "Easier debugging"],
                correct: 1,
                difficulty: "medium",
                explanation: "Abstract classes define common interfaces and shared behavior for subclasses, enforcing a contract while allowing some method implementations."
            },
            {
                question: "What is the main advantage of using interfaces in OOP?",
                options: ["Better performance", "Multiple inheritance of behavior", "Lower memory usage", "Easier implementation"],
                correct: 1,
                difficulty: "medium",
                explanation: "Interfaces enable multiple inheritance of behavior, allowing classes to implement multiple interfaces and providing flexible design options."
            },
            {
                question: "What is the primary challenge in designing effective OOP systems?",
                options: ["Performance", "Balancing abstraction and complexity", "Memory usage", "Cost"],
                correct: 1,
                difficulty: "medium",
                explanation: "Designing effective OOP systems requires balancing abstraction and complexity, ensuring the system is maintainable without over-engineering."
            },
            {
                question: "What is the primary challenge in implementing efficient OOP design patterns?",
                options: ["Cost", "Balancing flexibility and performance", "Memory usage", "Complexity"],
                correct: 1,
                difficulty: "hard",
                explanation: "Implementing design patterns requires balancing flexibility and performance, as patterns often introduce abstraction layers that can impact efficiency."
            },
            {
                question: "Which OOP design principle is most important for maintaining code quality?",
                options: ["Performance optimization", "Single Responsibility Principle", "Cost reduction", "Feature richness"],
                correct: 1,
                difficulty: "hard",
                explanation: "The Single Responsibility Principle is most important as it ensures each class has one reason to change, improving maintainability and reducing coupling."
            },
            {
                question: "What is the primary challenge in implementing effective inheritance hierarchies?",
                options: ["Cost", "Avoiding deep hierarchies and maintaining Liskov Substitution Principle", "Memory usage", "Complexity"],
                correct: 1,
                difficulty: "hard",
                explanation: "Effective inheritance requires avoiding deep hierarchies and maintaining the Liskov Substitution Principle to ensure proper substitutability."
            },
            {
                question: "Which OOP concept is most effective for implementing plugin architectures?",
                options: ["Inheritance", "Interfaces and polymorphism", "Composition", "Encapsulation"],
                correct: 1,
                difficulty: "hard",
                explanation: "Interfaces and polymorphism are most effective for plugin architectures as they allow dynamic loading and interaction with unknown implementations."
            },
            {
                question: "What is the primary challenge in implementing efficient OOP memory management?",
                options: ["Cost", "Managing object lifecycles and preventing memory leaks", "Performance", "Complexity"],
                correct: 1,
                difficulty: "hard",
                explanation: "OOP memory management requires careful management of object lifecycles and prevention of memory leaks, especially in languages without garbage collection."
            },
            {
                question: "Which OOP design pattern is most suitable for implementing event-driven systems?",
                options: ["Singleton", "Observer", "Factory", "Builder"],
                correct: 1,
                difficulty: "hard",
                explanation: "The Observer pattern is most suitable for event-driven systems as it allows objects to notify multiple observers about state changes."
            },
            {
                question: "What is the primary challenge in implementing efficient OOP serialization?",
                options: ["Cost", "Handling object graphs and version compatibility", "Memory usage", "Complexity"],
                correct: 1,
                difficulty: "hard",
                explanation: "OOP serialization requires handling complex object graphs and maintaining version compatibility across different software versions."
            },
            {
                question: "Which OOP concept is most effective for implementing dependency injection?",
                options: ["Inheritance", "Interfaces and abstraction", "Composition", "Encapsulation"],
                correct: 1,
                difficulty: "hard",
                explanation: "Interfaces and abstraction are most effective for dependency injection as they allow injecting different implementations without changing client code."
            },
            {
                question: "What is the primary advantage of using design patterns in OOP?",
                options: ["Better performance", "Proven solutions to common design problems", "Lower memory usage", "Easier implementation"],
                correct: 1,
                difficulty: "hard",
                explanation: "Design patterns provide proven solutions to common design problems, improving code quality and maintainability."
            },
            {
                question: "Which OOP design principle is most important for ensuring system extensibility?",
                options: ["Performance optimization", "Open/Closed Principle", "Cost reduction", "Feature richness"],
                correct: 1,
                difficulty: "hard",
                explanation: "The Open/Closed Principle is most important for extensibility as it allows adding new functionality without modifying existing code."
            }
        ]
    },

    presentations: {
        "system-fundamentals": {
            title: "🚀 System Fundamentals: Building the Foundation",
            slides: [
                {
                    title: "Topic 1: System Fundamentals",
                    content: `
                        <h3>🚀 System Fundamentals: Building the Foundation</h3>
                        <p><strong>Topic 1 of the IB Computer Science HL Curriculum</strong></p>
                        <p>This topic covers the essential foundations of computer systems, including planning, development, implementation, and maintenance of computer systems.</p>
                        
                        <h3>Context and Need</h3>
                        <p>Before designing a new computer system, organizations must identify the context and requirements for the system. A systems analyst typically examines the current system via methods like:</p>
                        <ul>
                            <li>Surveys and interviews</li>
                            <li>Observation and document tracing</li>
                            <li>Analysis of current processes</li>
                        </ul>
                        
                        <h3>Key Considerations</h3>
                        <ul>
                            <li>Which existing infrastructure can be reused</li>
                            <li>Required new hardware/software</li>
                            <li>Ethical or social impacts</li>
                            <li>Business needs and scalability demands</li>
                        </ul>
                        
                        <p>Proper upfront planning ensures the new system will be effective and aligned with organizational objectives.</p>
                    `
                },
                {
                    title: "Change Management",
                    content: `
                        <h3>Change Management in System Implementation</h3>
                        <p>Implementing a new system involves significant change, so a change management plan is critical.</p>
                        
                        <h3>What is Change Management?</h3>
                        <p>Change management is the process of preparing, equipping, and supporting people to adopt the new system.</p>
                        
                        <h3>Key Factors to Consider</h3>
                        <ul>
                            <li>Employee training and development</li>
                            <li>Clear communication of benefits</li>
                            <li>User involvement in the change process</li>
                            <li>Managing workflow alterations</li>
                            <li>Stakeholder alignment</li>
                        </ul>
                        
                        <p>Without a proper plan, transitioning from the old to new system may fail. Change management addresses the human element of system change, increasing the likelihood of smooth and successful implementation.</p>
                    `
                },
                {
                    title: "Legacy Systems and Compatibility",
                    content: `
                        <h3>Legacy Systems</h3>
                        <p>A legacy system is an older existing system that may use outdated technology. When introducing a new system, compatibility with legacy systems can be challenging.</p>
                        
                        <h3>Common Compatibility Issues</h3>
                        <ul>
                            <li>Data format mismatches</li>
                            <li>Communication protocol differences</li>
                            <li>Hardware incompatibilities</li>
                            <li>Language or unit differences</li>
                            <li>Software environment conflicts</li>
                        </ul>
                        
                        <h3>Business Mergers</h3>
                        <p>In business mergers, two organizations likely have different systems. Making them work together can be difficult if data structures or software environments differ.</p>
                        
                        <h3>Solutions</h3>
                        <ul>
                            <li>Data conversion tools</li>
                            <li>Interface development</li>
                            <li>Phased integration</li>
                            <li>Careful planning and testing</li>
                        </ul>
                    `
                },
                {
                    title: "Hosting Solutions",
                    content: `
                        <h3>Local vs Remote Hosting</h3>
                        <p>Organizations must decide whether to host a new system on local hardware or use remote hosting.</p>
                        
                        <h3>On-Premises (Local) Hosting</h3>
                        <ul>
                            <li><strong>Advantages:</strong> Greater customization, control over data and security</li>
                            <li><strong>Disadvantages:</strong> Higher maintenance costs, need for in-house IT expertise</li>
                        </ul>
                        
                        <h3>Remote Hosting (SaaS)</h3>
                        <ul>
                            <li><strong>Advantages:</strong> No infrastructure maintenance, vendor expertise, automatic updates</li>
                            <li><strong>Disadvantages:</strong> Data security concerns, internet dependency, less control</li>
                        </ul>
                        
                        <h3>Making the Choice</h3>
                        <p>The choice depends on:</p>
                        <ul>
                            <li>Budget constraints</li>
                            <li>Required control level</li>
                            <li>Scalability needs</li>
                            <li>Trust in external providers</li>
                        </ul>
                    `
        },
                {
                    title: "System Implementation Methods",
                    content: `
                        <h3>Four Main Implementation Methods</h3>
                        
                        <h3>1. Parallel Running</h3>
                        <ul>
                            <li><strong>Method:</strong> Old and new systems run simultaneously</li>
                            <li><strong>Advantage:</strong> Safety net if new system fails</li>
                            <li><strong>Disadvantage:</strong> Costly and labor-intensive</li>
                        </ul>
                        
                        <h3>2. Pilot Running</h3>
                        <ul>
                            <li><strong>Method:</strong> New system introduced to small part of organization</li>
                            <li><strong>Advantage:</strong> Limits risk, allows training on small scale</li>
                            <li><strong>Disadvantage:</strong> Pilot group work may be impacted</li>
                        </ul>
                        
                        <h3>3. Phased Implementation</h3>
                        <ul>
                            <li><strong>Method:</strong> Gradual replacement in stages</li>
                            <li><strong>Advantage:</strong> Users adapt gradually</li>
                            <li><strong>Disadvantage:</strong> Complex interdependencies</li>
                        </ul>
                        
                        <h3>4. Direct Changeover</h3>
                        <ul>
                            <li><strong>Method:</strong> Complete switch at specific point</li>
                            <li><strong>Advantage:</strong> Fastest, least resource-intensive</li>
                            <li><strong>Disadvantage:</strong> Risky - no backup system</li>
                        </ul>
                    `
                },
                {
                    title: "Data Migration and Testing",
                    content: `
                        <h3>Data Migration Challenges</h3>
                        <p>Data migration is the process of transferring data from old system to new system. Common issues include:</p>
                        <ul>
                            <li>Incompatible file formats</li>
                            <li>Obsolete data structures</li>
                            <li>Data validation failures</li>
                            <li>Character encoding differences</li>
                            <li>Unit or measurement differences</li>
                            <li>Unsupported storage media</li>
                        </ul>
                        
                        <h3>Types of Testing</h3>
                        <ul>
                            <li><strong>Alpha Testing:</strong> Internal testing by developers</li>
                            <li><strong>Beta Testing:</strong> Testing by limited external users</li>
                            <li><strong>White-box Testing:</strong> Testing with knowledge of internal code</li>
                            <li><strong>Black-box Testing:</strong> Testing without knowledge of internal code</li>
                            <li><strong>User Acceptance Testing:</strong> End-user verification of system readiness</li>
                        </ul>
                        
                        <h3>Prevention Strategies</h3>
                        <ul>
                            <li>Clean and standardize data beforehand</li>
                            <li>Test migration on sample data</li>
                            <li>Maintain backups</li>
                            <li>Plan for rollback procedures</li>
                        </ul>
                    `
        },
                {
                    title: "User Documentation and Training",
                    content: `
                        <h3>Importance of User Documentation</h3>
                        <p>User documentation refers to manuals, help files, or guides that explain how to use the new system. Good documentation is critical for successful system adoption.</p>
                        
                        <h3>Benefits of Quality Documentation</h3>
                        <ul>
                            <li>Improves user adoption rates</li>
                            <li>Reduces need for extensive formal training</li>
                            <li>Lowers support costs</li>
                            <li>Increases user satisfaction</li>
                            <li>Serves as a training tool</li>
                        </ul>
                        
                        <h3>Methods of Providing Documentation</h3>
                        <ul>
                            <li><strong>Help Files:</strong> Built-in software assistance</li>
                            <li><strong>Online Documentation:</strong> Web-based knowledge base</li>
                            <li><strong>Printed Manuals:</strong> Physical or downloadable guides</li>
                        </ul>
                        
                        <h3>User Training Methods</h3>
                        <ul>
                            <li><strong>Self-Instruction:</strong> Users learn at their own pace</li>
                            <li><strong>Formal Classes:</strong> Instructor-led training sessions</li>
                            <li><strong>Remote Training:</strong> Online or one-on-one coaching</li>
                        </ul>
                    `
                },
                {
                    title: "Data Loss Prevention",
                    content: `
                        <h3>Causes of Data Loss</h3>
                        <p>Data loss can occur due to various reasons:</p>
                        
                        <h3>Malicious Causes</h3>
                        <ul>
                            <li>Virus or malware attacks</li>
                            <li>Ransomware encryption</li>
                            <li>Insider threats or hackers</li>
                            <li>Phishing leading to accidental deletion</li>
                        </ul>
                        
                        <h3>Technical Causes</h3>
                        <ul>
                            <li>Hardware failure (disk crashes)</li>
                            <li>Software bugs or system crashes</li>
                            <li>Power surges or outages</li>
                            <li>Natural disasters</li>
                        </ul>
                        
                        <h3>Human Causes</h3>
                        <ul>
                            <li>Accidental file deletion</li>
                            <li>Wrong drive formatting</li>
                            <li>Inadequate backup procedures</li>
                        </ul>
                        
                        <h3>Prevention Methods</h3>
                        <ul>
                            <li>Regular backups (multiple copies, offsite storage)</li>
                            <li>Backup power supplies (UPS)</li>
                            <li>Hardware redundancy (RAID arrays)</li>
                            <li>Data encryption</li>
                            <li>Anti-malware and firewalls</li>
                            <li>Physical security measures</li>
                            <li>Access controls and user training</li>
                            <li>Disaster recovery planning</li>
                        </ul>
                    `
        },
                {
                    title: "System Components and Networks",
                    content: `
                        <h3>Components of a Computer System</h3>
                        
                        <h3>1. Hardware</h3>
                        <p>Physical parts you can touch: CPU, memory, storage devices, peripherals</p>
                        
                        <h3>2. Software</h3>
                        <p>Programs and instructions: system software (OS, drivers) and application software</p>
                        
                        <h3>3. Peripheral Devices</h3>
                        <ul>
                            <li>Input devices: keyboard, mouse, scanner</li>
                            <li>Output devices: monitor, printer, speakers</li>
                            <li>Storage devices: external drives</li>
                        </ul>
                        
                        <h3>4. Network Components</h3>
                        <p>Hardware and protocols for communication: network cards, routers, switches</p>
                        
                        <h3>5. Human Resources</h3>
                        <p>End-users and IT staff who use and maintain the system</p>
                        
                        <h3>Computer Roles in Networks</h3>
                        <ul>
                            <li><strong>Client:</strong> Requests services from other computers</li>
                            <li><strong>Server:</strong> Provides services to clients</li>
                            <li><strong>Router:</strong> Directs network traffic between networks</li>
                            <li><strong>Firewall:</strong> Monitors and controls network traffic</li>
                        </ul>
                    `
                },
                {
                    title: "Social and Ethical Considerations",
                    content: `
                        <h3>Social and Ethical Issues in Networked World</h3>
                        
                        <h3>Privacy Concerns</h3>
                        <ul>
                            <li>Personal data collection and storage</li>
                            <li>Unauthorized access to information</li>
                            <li>Data breaches and identity theft</li>
                            <li>Surveillance and monitoring</li>
                        </ul>
                        
                        <h3>Social Impact</h3>
                        <ul>
                            <li>Cyberbullying and online harassment</li>
                            <li>Digital divide and unequal access</li>
                            <li>Changes in social interaction patterns</li>
                            <li>Work-life balance issues</li>
                        </ul>
                        
                        <h3>Ethical Questions</h3>
                        <ul>
                            <li>Freedom of speech vs. harmful content</li>
                            <li>Intellectual property and digital piracy</li>
                            <li>AI decision-making responsibility</li>
                            <li>Environmental impact of technology</li>
                        </ul>
                        
                        <h3>Stakeholders in System Development</h3>
                        <ul>
                            <li>End users</li>
                            <li>Business owners/clients</li>
                            <li>Project managers and development team</li>
                            <li>IT/maintenance staff</li>
                            <li>Vendors/suppliers</li>
                            <li>Regulators and domain experts</li>
                        </ul>
                        
                        <h3>Requirements Gathering Methods</h3>
                        <ul>
                            <li>Interviews and surveys</li>
                            <li>Direct observation</li>
                            <li>Workshops and focus groups</li>
                            <li>Document analysis</li>
                        </ul>
                    `
                }
            ]
        },
        "computer-organization": {
            title: "⚙️ Computer Organization: Inside the Machine",
            slides: [
                {
                    title: "Topic 2: Computer Organization",
                    content: `
                        <h3>⚙️ Computer Organization: Inside the Machine</h3>
                        <p><strong>Topic 2 of the IB Computer Science HL Curriculum</strong></p>
                        <p>This topic explores the internal workings of computer systems, including CPU architecture, memory systems, and how computers execute instructions.</p>
                        
                        <h3>Von Neumann's Revolutionary Idea</h3>
                        <p>The Von Neumann architecture introduced the concept of a <strong>stored-program computer</strong> where both instructions and data are stored in the same memory.</p>
                        
                        <h3>Key Characteristics</h3>
                        <ul>
                            <li>CPU fetches and executes instructions sequentially</li>
                            <li>Shared memory for both data and instructions</li>
                            <li>Single bus system for data transfer</li>
                        </ul>
                        
                        <h3>The Von Neumann Bottleneck</h3>
                        <p>The shared instruction/data path can create a bottleneck because the CPU must access memory for both instructions and data through the same bus.</p>
                        
                        <p><strong>Why it matters:</strong> Modern machines still follow Von Neumann fundamentals. Even parallel systems are built from Von Neumann-style processors.</p>
                    `
                },
                {
                    title: "Major System Components",
                    content: `
                        <h3>Core Components</h3>
                        <ul>
                            <li><strong>CPU (Central Processing Unit):</strong> The brain that executes instructions</li>
                            <li><strong>Memory:</strong> Stores programs and data</li>
                            <li><strong>I/O Devices:</strong> Interface with the external world</li>
                        </ul>
                        
                        <h3>How They Work Together</h3>
                        <ul>
                            <li>Program resides in memory</li>
                            <li>CPU fetches one instruction at a time</li>
                            <li>Instructions are decoded and executed</li>
                            <li>Results are stored back to memory</li>
                        </ul>
                        
                        <h3>Example: Game Loop</h3>
                        <p>A game's main loop lives in RAM. The CPU repeatedly fetches, decodes, and executes instructions to update game state, handle input, and render graphics.</p>
                    `
                },
                {
                    title: "Arithmetic Logic Unit (ALU)",
                    content: `
                        <h3>ALU Functions</h3>
                        <ul>
                            <li><strong>Integer Arithmetic:</strong> Addition, subtraction, multiplication, division</li>
                            <li><strong>Boolean Operations:</strong> AND, OR, NOT, XOR logic operations</li>
                            <li><strong>Comparison:</strong> Greater than, less than, equal to</li>
                        </ul>
                        
                        <h3>How It Works</h3>
                        <ul>
                            <li>Acts on register values under CU control signals</li>
                            <li>Receives operands from registers</li>
                            <li>Performs the specified operation</li>
                            <li>Outputs result to destination register</li>
                        </ul>
                        
                        <h3>Example</h3>
                        <p><code>ADD R1, R2 → R3</code><br>
                        This instruction uses the ALU to add the values in registers R1 and R2, storing the result in register R3.</p>
                    `
                },
                {
                    title: "Control Unit (CU)",
                    content: `
                        <h3>Control Unit Responsibilities</h3>
                        <ul>
                            <li><strong>Orchestrates execution sequence:</strong> Determines which instruction to execute next</li>
                            <li><strong>Memory access management:</strong> Controls data movement over buses</li>
                            <li><strong>Data movement:</strong> Coordinates transfers between CPU and memory</li>
                            <li><strong>Cache management:</strong> Manages cache contents and policies</li>
                        </ul>
                        
                        <h3>Key Registers</h3>
                        <ul>
                            <li><strong>IR (Instruction Register):</strong> Holds the current instruction being decoded/executed</li>
                            <li><strong>PC (Program Counter):</strong> Holds the address of the next instruction to fetch</li>
                        </ul>
                        
                        <h3>Control Flow</h3>
                        <p>The CU interprets instruction opcodes and generates control signals that coordinate the ALU, memory, and other components to execute the instruction.</p>
                    `
                },
                {
                    title: "CPU Registers",
                    content: `
                        <h3>Memory-Related Registers</h3>
                        <ul>
                            <li><strong>MAR (Memory Address Register):</strong> Holds the address to access in memory</li>
                            <li><strong>MDR/MBR (Memory Data/Buffer Register):</strong> Holds data or instruction being transferred to/from memory</li>
                        </ul>
                        
                        <h3>Control Registers</h3>
                        <ul>
                            <li><strong>PC (Program Counter):</strong> Address of next instruction to fetch</li>
                            <li><strong>IR (Instruction Register):</strong> Current instruction being executed</li>
                        </ul>
                        
                        <h3>Working Storage</h3>
                        <ul>
                            <li><strong>GPRs (General Purpose Registers):</strong> Temporary storage for calculations and data manipulation</li>
                        </ul>
                        
                        <h3>Characteristics</h3>
                        <p>Registers are very small but extremely fast storage located inside the CPU. They provide immediate access to data and instructions without the delay of memory access.</p>
                    `
                },
                {
                    title: "System Bus Architecture",
                    content: `
                        <h3>The Three-Bus System</h3>
                        
                        <h3>1. Address Bus</h3>
                        <ul>
                            <li>Carries addresses from CPU to memory</li>
                            <li>Unidirectional (CPU → Memory)</li>
                            <li>Width determines addressable memory space</li>
                        </ul>
                        
                        <h3>2. Data Bus</h3>
                        <ul>
                            <li>Bidirectional data transfer</li>
                            <li>Carries data between CPU, memory, and peripherals</li>
                            <li>Width affects data transfer speed</li>
                        </ul>
                        
                        <h3>3. Control Bus</h3>
                        <ul>
                            <li>Carries control/command/status signals</li>
                            <li>Coordinates operations between components</li>
                            <li>Includes read/write signals, interrupts, etc.</li>
                        </ul>
                        
                        <h3>Address Bus Width Impact</h3>
                        <ul>
                            <li>32-bit address bus ≈ 4 GiB addressable memory</li>
                            <li>64-bit address bus ≈ 16 EiB theoretical limit</li>
                        </ul>
                    `
                },
                {
                    title: "Primary Memory Overview",
                    content: `
                        <h3>What is Primary Memory?</h3>
                        <p>Primary memory is the working memory used at runtime, including:</p>
                        <ul>
                            <li><strong>RAM (Random Access Memory):</strong> Main working memory</li>
                            <li><strong>Cache:</strong> High-speed temporary storage</li>
                            <li><strong>ROM/Firmware:</strong> Non-volatile system software</li>
                        </ul>
                        
                        <h3>Memory Hierarchy</h3>
                        <p>Memory is organized in a hierarchy from fastest/smallest to slowest/largest:</p>
                        <ul>
                            <li>L1 Cache → L2 Cache → Main RAM → Storage → Network</li>
                        </ul>
                        
                        <h3>Key Characteristics</h3>
                        <ul>
                            <li>Fast access times (nanoseconds)</li>
                            <li>Volatile (except ROM)</li>
                            <li>Directly accessible by CPU</li>
                            <li>Limited capacity compared to secondary storage</li>
                        </ul>
                    `
                },
                {
                    title: "RAM vs ROM",
                    content: `
                        <h3>RAM (Random Access Memory)</h3>
                        <ul>
                            <li><strong>Volatile:</strong> Loses data when power is off</li>
                            <li><strong>Read/Write:</strong> Can both read from and write to</li>
                            <li><strong>Fast:</strong> Orders of magnitude faster than secondary storage</li>
                            <li><strong>Unique addresses:</strong> Each memory location has a unique address</li>
                            <li><strong>Used by programs:</strong> Stores active programs and data</li>
                        </ul>
                        
                        <h3>ROM (Read-Only Memory)</h3>
                        <ul>
                            <li><strong>Non-volatile:</strong> Retains data when power is off</li>
                            <li><strong>Read-mostly:</strong> Primarily for reading (some types allow limited writing)</li>
                            <li><strong>Stores firmware:</strong> BIOS, boot loaders, system firmware</li>
                            <li><strong>Modern replacement:</strong> Often replaced by flash memory today</li>
                        </ul>
                        
                        <h3>Use Cases</h3>
                        <ul>
                            <li><strong>RAM:</strong> Active programs, current data, temporary storage</li>
                            <li><strong>ROM:</strong> System startup code, hardware configuration</li>
                        </ul>
                    `
                },
                {
                    title: "Virtual Memory",
                    content: `
                        <h3>What is Virtual Memory?</h3>
                        <p>Virtual memory extends apparent RAM by using disk storage as an extension of main memory.</p>
                        
                        <h3>How It Works</h3>
                        <ul>
                            <li><strong>Paging:</strong> Memory is divided into fixed-size pages</li>
                            <li><strong>Swapping:</strong> Pages are moved between RAM and disk as needed</li>
                            <li><strong>Page tables:</strong> Track which pages are in RAM vs disk</li>
                        </ul>
                        
                        <h3>Advantages</h3>
                        <ul>
                            <li>More memory than physically available</li>
                            <li>Allows larger programs to run</li>
                            <li>Memory isolation between processes</li>
                        </ul>
                        
                        <h3>Disadvantages</h3>
                        <ul>
                            <li><strong>Slower access:</strong> Disk access is much slower than RAM</li>
                            <li><strong>Thrashing:</strong> Excessive paging when insufficient RAM</li>
                            <li><strong>Complexity:</strong> Requires sophisticated memory management</li>
                        </ul>
                    `
                },
                {
                    title: "Cache Memory",
                    content: `
                        <h3>Why Cache Memory?</h3>
                        <p>Cache memory is small, high-speed memory located closer to the CPU that reduces average memory access time.</p>
                        
                        <h3>Key Principles</h3>
                        <ul>
                            <li><strong>Temporal Locality:</strong> Recently accessed data is likely to be accessed again</li>
                            <li><strong>Spatial Locality:</strong> Data near recently accessed data is likely to be accessed soon</li>
                        </ul>
                        
                        <h3>Cache Levels</h3>
                        <ul>
                            <li><strong>L1 Cache:</strong> Fastest, smallest (typically 32-64 KB)</li>
                            <li><strong>L2 Cache:</strong> Larger, slightly slower (typically 256 KB - 1 MB)</li>
                            <li><strong>L3 Cache:</strong> Even larger, shared between cores (typically 2-16 MB)</li>
                        </ul>
                        
                        <h3>Operation</h3>
                        <p>When the CPU needs data, it first checks cache. If found (cache hit), data is retrieved quickly. If not found (cache miss), data is fetched from main memory and stored in cache.</p>
                    `
                },
                {
                    title: "Machine Instruction Cycle",
                    content: `
                        <h3>The Four Stages</h3>
                        
                        <h3>1. Fetch</h3>
                        <ul>
                            <li>PC → MAR (put address in Memory Address Register)</li>
                            <li>Memory → MDR (get instruction from memory)</li>
                            <li>MDR → IR (load instruction into Instruction Register)</li>
                            <li>PC++ (increment Program Counter)</li>
                        </ul>
                        
                        <h3>2. Decode</h3>
                        <ul>
                            <li>CU interprets the opcode in IR</li>
                            <li>Determines what operation to perform</li>
                            <li>Identifies operands and destination</li>
                        </ul>
                        
                        <h3>3. Execute</h3>
                        <ul>
                            <li>CU signals appropriate units</li>
                            <li>ALU operations, memory loads/stores, branches</li>
                            <li>Actual computation or data movement</li>
                        </ul>
                        
                        <h3>4. Store</h3>
                        <ul>
                            <li>Write back results to register or memory</li>
                            <li>Possibly update PC for branch instructions</li>
                            <li>Prepare for next instruction</li>
                        </ul>
                        
                        <p><strong>Everything you program compiles down to repeated cycles of these steps.</strong></p>
                    `
                },
                {
                    title: "Secondary Memory",
                    content: `
                        <h3>Why Secondary Storage?</h3>
                        <ul>
                            <li><strong>Non-volatile:</strong> Retains data when power is off</li>
                            <li><strong>Long-term storage:</strong> Persistent data storage</li>
                            <li><strong>Large capacity:</strong> Much larger than primary memory</li>
                            <li><strong>Cost-effective:</strong> Cheaper per byte than RAM</li>
                        </ul>
                        
                        <h3>Access Methods</h3>
                        
                        <h3>Direct Access</h3>
                        <ul>
                            <li>HDD/SSD, USB drives, CD/DVD</li>
                            <li>Random access to any location</li>
                            <li>Used for: local storage, program files, user data</li>
                        </ul>
                        
                        <h3>Sequential Access</h3>
                        <ul>
                            <li>Magnetic tapes</li>
                            <li>Must read data in order</li>
                            <li>Used for: backup, archival storage</li>
                        </ul>
                        
                        <h3>Use Cases</h3>
                        <ul>
                            <li>Program storage and installation</li>
                            <li>Data backup and archival</li>
                            <li>Data transfer between systems</li>
                            <li>Virtual memory paging</li>
                        </ul>
                    `
                },
                {
                    title: "Operating System Functions",
                    content: `
                        <h3>What is an Operating System?</h3>
                        <p>Software that manages hardware and software resources while providing productive and efficient user interfaces.</p>
                        
                        <h3>Core Components</h3>
                        <ul>
                            <li><strong>Kernel:</strong> Core program handling low-level I/O and CPU coordination</li>
                            <li><strong>User Interface:</strong> CLI (Command Line) or GUI (Graphical User Interface)</li>
                        </ul>
                        
                        <h3>Main Responsibilities</h3>
                        <ul>
                            <li>Peripherals and drivers management</li>
                            <li>Concurrency and multitasking</li>
                            <li>Resource monitoring and allocation</li>
                            <li>Memory management (including paging)</li>
                            <li>Security and accounting</li>
                            <li>Program and data management</li>
                            <li>User interface provision</li>
                        </ul>
                    `
                },
                {
                    title: "Peripherals and Drivers",
                    content: `
                        <h3>Device Drivers</h3>
                        <p>Drivers provide a standard interface to varied hardware, enabling plug-and-play functionality.</p>
                        
                        <h3>Driver Functions</h3>
                        <ul>
                            <li>Translate OS commands to hardware-specific instructions</li>
                            <li>Handle hardware initialization and configuration</li>
                            <li>Manage data transfer between OS and device</li>
                            <li>Provide error handling and status reporting</li>
                        </ul>
                        
                        <h3>Specialized Devices</h3>
                        <p>Some devices require additional processing:</p>
                        <ul>
                            <li><strong>ADC (Analog-to-Digital Converter):</strong> Microphones, sensors</li>
                            <li><strong>DAC (Digital-to-Analog Converter):</strong> Speakers, displays</li>
                        </ul>
                        
                        <h3>Benefits</h3>
                        <ul>
                            <li>Hardware abstraction for applications</li>
                            <li>Consistent interface across different devices</li>
                            <li>Easy hardware upgrades and replacements</li>
                        </ul>
                    `
                },
                {
                    title: "Concurrency and Time-Sharing",
                    content: `
                        <h3>Multitasking Concept</h3>
                        <p>Many processes appear to run simultaneously through time-sharing, even though only one process can use the CPU at a time.</p>
                        
                        <h3>How Time-Sharing Works</h3>
                        <ul>
                            <li><strong>Time Slices:</strong> Each process gets a small amount of CPU time</li>
                            <li><strong>Context Switching:</strong> OS saves current process state and loads next process</li>
                            <li><strong>Process Scheduling:</strong> OS determines which process runs next</li>
                        </ul>
                        
                        <h3>OS Responsibilities</h3>
                        <ul>
                            <li>Load and unload processes into RAM</li>
                            <li>Schedule CPU time among processes</li>
                            <li>Manage process priorities</li>
                            <li>Handle process synchronization</li>
                        </ul>
                        
                        <h3>Benefits</h3>
                        <ul>
                            <li>Better resource utilization</li>
                            <li>Improved user experience</li>
                            <li>Ability to run multiple applications</li>
                        </ul>
                    `
                },
                {
                    title: "Resource Monitoring and Memory Management",
                    content: `
                        <h3>Resource Allocation</h3>
                        <p>The OS must fairly allocate system resources among competing processes:</p>
                        <ul>
                            <li><strong>CPU Time:</strong> Scheduling algorithms determine process execution order</li>
                            <li><strong>Memory:</strong> Allocating RAM to processes and managing virtual memory</li>
                            <li><strong>I/O Devices:</strong> Coordinating access to shared devices</li>
                        </ul>
                        
                        <h3>Memory Protection</h3>
                        <ul>
                            <li>Prevent processes from overwriting each other's memory</li>
                            <li>Memory segmentation and paging</li>
                            <li>Access control and permissions</li>
                        </ul>
                        
                        <h3>Virtual Memory Management</h3>
                        <ul>
                            <li>Page table management</li>
                            <li>Page replacement algorithms</li>
                            <li>Handling page faults</li>
                            <li>Memory compaction and optimization</li>
                        </ul>
                    `
                },
                {
                    title: "Security and Accounting",
                    content: `
                        <h3>Authentication and Authorization</h3>
                        <ul>
                            <li><strong>Authentication:</strong> Verifying user identity (login, passwords, biometrics)</li>
                            <li><strong>Authorization:</strong> Determining what resources users can access</li>
                            <li><strong>Access Control:</strong> File permissions, user groups, role-based access</li>
                        </ul>
                        
                        <h3>Network Security</h3>
                        <ul>
                            <li><strong>Firewalls:</strong> Filter incoming and outgoing network traffic</li>
                            <li><strong>Port Management:</strong> Control which network ports are accessible</li>
                            <li><strong>Intrusion Detection:</strong> Monitor for suspicious activities</li>
                        </ul>
                        
                        <h3>Audit Trails and Logging</h3>
                        <ul>
                            <li>Record system events and user activities</li>
                            <li>Security monitoring and analysis</li>
                            <li>Compliance with regulations</li>
                            <li>Forensic analysis capabilities</li>
                        </ul>
                        
                        <h3>Multi-User Considerations</h3>
                        <p>Especially critical in multi-user systems where security breaches could affect multiple users.</p>
                    `
                },
                {
                    title: "Program/Data Management and User Interfaces",
                    content: `
                        <h3>Program and Data Management</h3>
                        <ul>
                            <li><strong>File System:</strong> Organize and track files and directories</li>
                            <li><strong>Resource Tracking:</strong> Monitor which resources each process uses</li>
                            <li><strong>Memory Coordination:</strong> Manage primary ↔ secondary memory transfers</li>
                            <li><strong>Process Management:</strong> Create, schedule, and terminate processes</li>
                        </ul>
                        
                        <h3>User Interfaces</h3>
                        
                        <h3>GUI (Graphical User Interface)</h3>
                        <ul>
                            <li>Windows, macOS, Linux desktop environments</li>
                            <li>Visual elements: windows, icons, menus, pointers (WIMP)</li>
                            <li>Point-and-click interaction</li>
                            <li>User-friendly for beginners</li>
                        </ul>
                        
                        <h3>CLI (Command Line Interface)</h3>
                        <ul>
                            <li>Shell environments (bash, PowerShell, cmd)</li>
                            <li>Text-based commands</li>
                            <li>Powerful for advanced users</li>
                            <li>Scriptable and automatable</li>
                        </ul>
                    `
                },
                {
                    title: "Application Software Categories",
                    content: `
                        <h3>Productivity Software</h3>
                        <ul>
                            <li><strong>Word Processors:</strong> Create and edit documents (MS Word, Google Docs)</li>
                            <li><strong>Spreadsheets:</strong> Tabular data and formulas (Excel, Calc)</li>
                            <li><strong>Presentations:</strong> Slide shows and multimedia presentations</li>
                        </ul>
                        
                        <h3>Database and Communication</h3>
                        <ul>
                            <li><strong>DBMS:</strong> Database management systems (MySQL, PostgreSQL, SQL Server)</li>
                            <li><strong>Email Clients:</strong> Compose, send, receive messages using TCP/IP protocols</li>
                            <li><strong>Web Browsers:</strong> Retrieve and render web content over HTTP/HTTPS</li>
                        </ul>
                        
                        <h3>Specialized Applications</h3>
                        <ul>
                            <li><strong>CAD Software:</strong> Computer-aided design for engineering and architecture</li>
                            <li><strong>Graphics Editors:</strong> Create and edit images (Photoshop, GIMP, Illustrator)</li>
                            <li><strong>Media Players:</strong> Audio and video playback</li>
                            <li><strong>Development Tools:</strong> IDEs, compilers, debuggers</li>
                        </ul>
                    `
                },
                {
                    title: "Common GUI Features",
                    content: `
                        <h3>Core GUI Elements</h3>
                        
                        <h3>Navigation and Control</h3>
                        <ul>
                            <li><strong>Toolbars:</strong> Quick-access buttons for common actions</li>
                            <li><strong>Menus:</strong> Hierarchical command structures</li>
                            <li><strong>Dialog Boxes:</strong> Modal windows for options and input</li>
                        </ul>
                        
                        <h3>WIMP Interface</h3>
                        <ul>
                            <li><strong>Windows:</strong> Containers for applications and content</li>
                            <li><strong>Icons:</strong> Visual representations of files, programs, and functions</li>
                            <li><strong>Menus:</strong> Command lists and options</li>
                            <li><strong>Pointers:</strong> Cursor controlled by pointing devices (mouse, touchpad)</li>
                        </ul>
                        
                        <h3>Generic GUI Components</h3>
                        <ul>
                            <li>Buttons, checkboxes, radio buttons</li>
                            <li>Text fields and labels</li>
                            <li>Scroll bars and sliders</li>
                            <li>Tab controls and panels</li>
                            <li>Context menus and tooltips</li>
                        </ul>
                    `
                }
            ]
        },
        "networks": {
            title: "🌐 Networks: Connecting the Digital World",
            slides: [
                {
                    title: "Topic 3: Networks",
                    content: `
                        <h3>🌐 Networks: Connecting the Digital World</h3>
                        <p><strong>Topic 3 of the IB Computer Science HL Curriculum</strong></p>
                        <p>This topic covers computer networks, protocols, and communication systems that enable devices to share data and resources across the globe.</p>
                        
                        <h3>Introduction to Networks</h3>
                        <p>Networks are the backbone of modern computing: systems that allow devices to communicate, share resources, and provide global connectivity.</p>
                        
                        <h3>What is a Network?</h3>
                        <p>A collection of computing devices connected to share data and resources.</p>
                        
                        <h3>Connection Types</h3>
                        <ul>
                            <li><strong>Wired:</strong> Cables, fiber optic</li>
                            <li><strong>Wireless:</strong> Radio waves, infrared</li>
                        </ul>
                        
                        <p>Networks enable everything from local file sharing to global internet communication.</p>
                    `
                },
                {
                    title: "LAN (Local Area Network)",
                    content: `
                        <h3>Local Area Network Characteristics</h3>
                        <ul>
                            <li><strong>Geographic Coverage:</strong> Small area (office, school, building)</li>
                            <li><strong>Speed:</strong> High speed connections</li>
                            <li><strong>Distance:</strong> Limited range</li>
                            <li><strong>Ownership:</strong> Usually owned and managed by one organization</li>
                        </ul>
                        
                        <h3>Example</h3>
                        <p>School lab connecting all classroom PCs to one shared printer and file server.</p>
                        
                        <h3>Typical Uses</h3>
                        <ul>
                            <li>Office networks</li>
                            <li>School computer labs</li>
                            <li>Home networks</li>
                            <li>Small business networks</li>
                        </ul>
                    `
                },
                {
                    title: "WAN (Wide Area Network)",
                    content: `
                        <h3>Wide Area Network Characteristics</h3>
                        <ul>
                            <li><strong>Geographic Coverage:</strong> Large areas (countries, continents)</li>
                            <li><strong>Transmission Media:</strong> Telephone lines, satellites, radio waves</li>
                            <li><strong>Ownership:</strong> Collective ownership, not controlled by one company</li>
                        </ul>
                        
                        <h3>The Internet</h3>
                        <p>The Internet is the largest WAN, connecting networks worldwide.</p>
                        
                        <h3>Components</h3>
                        <ul>
                            <li>Routers connect different LANs</li>
                            <li>Telecommunications infrastructure</li>
                            <li>Satellite and wireless links</li>
                        </ul>
                    `
                },
                {
                    title: "MAN, SAN, VLAN",
                    content: `
                        <h3>MAN (Metropolitan Area Network)</h3>
                        <ul>
                            <li>Covers a city or metropolitan area</li>
                            <li>High-speed fiber connections</li>
                            <li>Managed by one entity (government, ISP)</li>
                            <li>Connects multiple LANs within a city</li>
                        </ul>
                        
                        <h3>SAN (Storage Area Network)</h3>
                        <ul>
                            <li>High-speed LAN specifically for storage</li>
                            <li>Connects storage servers and data devices</li>
                            <li>Optimized for data access and backup</li>
                        </ul>
                        
                        <h3>VLAN (Virtual LAN)</h3>
                        <ul>
                            <li>Logical grouping inside a physical LAN</li>
                            <li>Flexible, software-defined networks</li>
                            <li>Allows network segmentation without physical rewiring</li>
                        </ul>
                    `
                },
                {
                    title: "PAN, WLAN, P2P",
                    content: `
                        <h3>PAN (Personal Area Network)</h3>
                        <ul>
                            <li>Connects personal devices within 10 meters</li>
                            <li>Technologies: Bluetooth, USB, infrared</li>
                            <li>Examples: Phone ↔ laptop, wireless headphones</li>
                        </ul>
                        
                        <h3>WLAN (Wireless LAN)</h3>
                        <ul>
                            <li>LAN using radio waves instead of cables</li>
                            <li>Wi-Fi technology</li>
                            <li>Same functionality as wired LAN but wireless</li>
                        </ul>
                        
                        <h3>P2P (Peer-to-Peer)</h3>
                        <ul>
                            <li>No central server</li>
                            <li>Each device acts as both client and server</li>
                            <li>Supports file sharing and distributed computing</li>
                            <li>Examples: BitTorrent, blockchain networks</li>
                        </ul>
                    `
                },
                {
                    title: "Internet, Intranet, Extranet",
                    content: `
                        <h3>Internet</h3>
                        <ul>
                            <li>Global network of networks</li>
                            <li>Public access worldwide</li>
                            <li>TCP/IP protocol suite</li>
                        </ul>
                        
                        <h3>Intranet</h3>
                        <ul>
                            <li>Private internal network</li>
                            <li>Employees access resources securely</li>
                            <li>Uses same technologies as Internet</li>
                            <li>Restricted to organization members</li>
                        </ul>
                        
                        <h3>Extranet</h3>
                        <ul>
                            <li>Controlled external access</li>
                            <li>Examples: ATM networks, supplier portals</li>
                            <li>Allows limited access to external users</li>
                            <li>Maintains security while enabling collaboration</li>
                        </ul>
                    `
                },
                {
                    title: "Network Standards & Protocols",
                    content: `
                        <h3>Why Standards Matter</h3>
                        <p>A protocol is a formal set of rules for communication that defines format, order, and actions.</p>
                        
                        <h3>Without Standards</h3>
                        <ul>
                            <li>Incompatibility between devices</li>
                            <li>Communication failures</li>
                            <li>Higher development costs</li>
                        </ul>
                        
                        <h3>With Standards</h3>
                        <ul>
                            <li>Compatibility between different manufacturers</li>
                            <li>Interoperability across networks</li>
                            <li>Lower costs through competition</li>
                            <li>Innovation and growth</li>
                        </ul>
                        
                        <h3>Example</h3>
                        <p>TCP/IP enabled the Internet's growth by providing universal communication standards.</p>
                        
                        <h3>Analogy</h3>
                        <p>Like a phone call - if both people talk at once, there's no communication. Protocols ensure orderly exchange.</p>
                    `
                },
                {
                    title: "Network Layers",
                    content: `
                        <h3>Layered Communication</h3>
                        <p>Communication is broken into layers (OSI model, TCP/IP stack) where each layer has a specific role.</p>
                        
                        <h3>Layer Hierarchy</h3>
                        <ul>
                            <li><strong>Physical Layer:</strong> Actual transmission medium</li>
                            <li><strong>Data Link Layer:</strong> Error detection and correction</li>
                            <li><strong>Network Layer:</strong> Routing and addressing</li>
                            <li><strong>Transport Layer:</strong> Reliable data delivery</li>
                            <li><strong>Application Layer:</strong> User applications and data</li>
                        </ul>
                        
                        <h3>Benefits of Layering</h3>
                        <ul>
                            <li><strong>Modular Design:</strong> Each layer can be developed independently</li>
                            <li><strong>Easier Troubleshooting:</strong> Problems can be isolated to specific layers</li>
                            <li><strong>Standardization:</strong> Clear interfaces between layers</li>
                            <li><strong>Flexibility:</strong> Changes in one layer don't affect others</li>
                        </ul>
                    `
                },
                {
                    title: "VPN (Virtual Private Network)",
                    content: `
                        <h3>What is a VPN?</h3>
                        <p>A VPN creates a secure private connection across a public network (like the Internet).</p>
                        
                        <h3>Common Uses</h3>
                        <ul>
                            <li>Business remote work</li>
                            <li>Connecting global branch offices</li>
                            <li>Secure access to company resources</li>
                            <li>Bypassing geographic restrictions</li>
                        </ul>
                        
                        <h3>How It Works</h3>
                        <ul>
                            <li>Creates encrypted tunnel through public network</li>
                            <li>Appears as if devices are on same private network</li>
                            <li>Data is encrypted and authenticated</li>
                        </ul>
                    `
                },
                {
                    title: "VPN Components",
                    content: `
                        <h3>NAS (Network Access Server)</h3>
                        <ul>
                            <li>Authenticates users</li>
                            <li>Gateway into the private network</li>
                            <li>Manages user access and permissions</li>
                            <li>Establishes secure connections</li>
                        </ul>
                        
                        <h3>Client Software</h3>
                        <ul>
                            <li>Installed on user devices</li>
                            <li>Establishes encrypted tunnel</li>
                            <li>Handles authentication process</li>
                            <li>Manages connection to VPN server</li>
                        </ul>
                        
                        <h3>Encryption</h3>
                        <ul>
                            <li>Protects data in transit</li>
                            <li>Prevents unauthorized access</li>
                            <li>Ensures data integrity</li>
                        </ul>
                    `
                },
                {
                    title: "VPN Types",
                    content: `
                        <h3>Site-to-Site VPN</h3>
                        <ul>
                            <li>Connects entire offices or networks</li>
                            <li>Permanent connections between locations</li>
                            <li>Used by businesses with multiple locations</li>
                        </ul>
                        
                        <h3>Remote Access VPN</h3>
                        <ul>
                            <li>Individuals connect remotely</li>
                            <li>Temporary connections</li>
                            <li>Used by remote workers and travelers</li>
                        </ul>
                        
                        <h3>Security Models</h3>
                        <ul>
                            <li><strong>Secure VPN:</strong> All traffic encrypted and authenticated</li>
                            <li><strong>Trusted VPN:</strong> Relies on provider's network security</li>
                            <li><strong>Hybrid VPN:</strong> Combines secure and trusted approaches</li>
                        </ul>
                    `
                },
                {
                    title: "VPN Pros & Cons",
                    content: `
                        <h3>Advantages ✅</h3>
                        <ul>
                            <li><strong>Cost-effective:</strong> Cheaper than leased lines</li>
                            <li><strong>Remote Work:</strong> Enables secure remote access</li>
                            <li><strong>Scalability:</strong> Easy to add new users</li>
                            <li><strong>Global Reach:</strong> Works anywhere with Internet</li>
                        </ul>
                        
                        <h3>Disadvantages ❌</h3>
                        <ul>
                            <li><strong>Complexity:</strong> Requires proper security setup</li>
                            <li><strong>ISP Dependency:</strong> Performance limited by Internet connection</li>
                            <li><strong>Security Risks:</strong> Vulnerable if not properly configured</li>
                            <li><strong>Latency:</strong> May introduce delays</li>
                        </ul>
                    `
                },
                {
                    title: "Protocols & Data Packets",
                    content: `
                        <h3>Protocol</h3>
                        <p>A set of rules for data exchange between devices on a network.</p>
                        
                        <h3>Data Packet</h3>
                        <p>A small unit of binary data containing:</p>
                        <ul>
                            <li><strong>Headers:</strong> Control information (source, destination, sequence)</li>
                            <li><strong>Payload:</strong> Actual data being transmitted</li>
                            <li><strong>Trailer:</strong> Error checking information</li>
                        </ul>
                        
                        <h3>Why Packets?</h3>
                        <ul>
                            <li>Efficient use of network resources</li>
                            <li>Error recovery for individual packets</li>
                            <li>Fair sharing of bandwidth</li>
                            <li>Flexible routing</li>
                        </ul>
                    `
                },
                {
                    title: "Why Protocols Are Necessary",
                    content: `
                        <h3>Problems Protocols Solve</h3>
                        
                        <h3>Integrity</h3>
                        <ul>
                            <li>Ensuring data arrives complete and unmodified</li>
                            <li>Example: Checksums verify data integrity</li>
                        </ul>
                        
                        <h3>Flow Control</h3>
                        <ul>
                            <li>Synchronizing sender and receiver speeds</li>
                            <li>Example: Xon-Xoff flow control</li>
                        </ul>
                        
                        <h3>Deadlock Prevention</h3>
                        <ul>
                            <li>Preventing systems from waiting indefinitely</li>
                            <li>Timeout mechanisms</li>
                        </ul>
                        
                        <h3>Congestion Management</h3>
                        <ul>
                            <li>Preventing network overload</li>
                            <li>Example: DCCP (Datagram Congestion Control Protocol)</li>
                        </ul>
                        
                        <h3>Error Checking</h3>
                        <ul>
                            <li>Detecting and correcting transmission errors</li>
                            <li>Examples: Parity check, checksum</li>
                        </ul>
                    `
                },
                {
                    title: "Transmission Speed Factors",
                    content: `
                        <h3>Why Speeds Vary</h3>
                        <p>Transmission speed depends on several factors:</p>
                        
                        <h3>Physical Factors</h3>
                        <ul>
                            <li><strong>Transmission Medium:</strong> Fiber > Copper > Wireless</li>
                            <li><strong>Distance:</strong> Longer distances = slower speeds</li>
                            <li><strong>Weather:</strong> Affects wireless signals</li>
                        </ul>
                        
                        <h3>Network Factors</h3>
                        <ul>
                            <li><strong>Congestion:</strong> More users = slower speeds</li>
                            <li><strong>Time of Day:</strong> Peak hours slower</li>
                            <li><strong>Protocol Overhead:</strong> Error checking reduces speed</li>
                        </ul>
                        
                        <h3>Network Latency</h3>
                        <p>Delays in packet travel from source to destination, measured in milliseconds.</p>
                    `
                },
                {
                    title: "Data Compression",
                    content: `
                        <h3>Why Compress Data?</h3>
                        <p>Bandwidth is limited and expensive, so compression reduces transmission size.</p>
                        
                        <h3>Lossless Compression</h3>
                        <ul>
                            <li>No data lost during compression</li>
                            <li>Perfect reconstruction of original data</li>
                            <li>Examples: ZIP files, PNG images</li>
                            <li>Lower compression ratios</li>
                        </ul>
                        
                        <h3>Lossy Compression</h3>
                        <ul>
                            <li>Some quality lost for higher compression</li>
                            <li>Cannot perfectly reconstruct original</li>
                            <li>Examples: JPEG (images), MP3 (audio), MP4 (video)</li>
                            <li>Much higher compression ratios</li>
                        </ul>
                        
                        <h3>Tradeoffs</h3>
                        <p>Choose lossless for critical data, lossy for media where some quality loss is acceptable.</p>
                    `
                },
                {
                    title: "Transmission Media Types",
                    content: `
                        <h3>Electrical Signals</h3>
                        <ul>
                            <li><strong>Copper Cables:</strong> Twisted pair, coaxial</li>
                            <li>Affected by electromagnetic interference</li>
                            <li>Limited distance and speed</li>
                        </ul>
                        
                        <h3>Light Signals</h3>
                        <ul>
                            <li><strong>Fiber Optics:</strong> Glass or plastic fibers</li>
                            <li>No electromagnetic interference</li>
                            <li>Very high speed and long distance</li>
                        </ul>
                        
                        <h3>Wireless</h3>
                        <ul>
                            <li><strong>Radio/Microwave/Infrared:</strong> No physical connection</li>
                            <li>Affected by weather and obstacles</li>
                            <li>Convenient but less reliable</li>
                        </ul>
                    `
                },
                {
                    title: "Cable Types",
                    content: `
                        <h3>Twisted Pair</h3>
                        <ul>
                            <li><strong>Advantages:</strong> Cheap, flexible, easy to install</li>
                            <li><strong>Disadvantages:</strong> Interference-prone, limited distance</li>
                            <li><strong>Use:</strong> Ethernet cables, phone lines</li>
                        </ul>
                        
                        <h3>Coaxial</h3>
                        <ul>
                            <li><strong>Advantages:</strong> Shielded, less interference</li>
                            <li><strong>Disadvantages:</strong> Expensive, stiff, harder to install</li>
                            <li><strong>Use:</strong> Cable TV, some network connections</li>
                        </ul>
                        
                        <h3>Fiber Optic</h3>
                        <ul>
                            <li><strong>Advantages:</strong> Long distance, high speed, no interference</li>
                            <li><strong>Disadvantages:</strong> Expensive, fragile, requires special equipment</li>
                            <li><strong>Use:</strong> Internet backbone, long-distance connections</li>
                        </ul>
                    `
                },
                {
                    title: "Transmission Modes",
                    content: `
                        <h3>Simplex</h3>
                        <ul>
                            <li>One-way communication only</li>
                            <li>Data flows in one direction</li>
                            <li>Examples: TV broadcasts, radio</li>
                        </ul>
                        
                        <h3>Half-Duplex</h3>
                        <ul>
                            <li>Two-way communication but turn-taking</li>
                            <li>Only one direction at a time</li>
                            <li>Examples: Walkie-talkies, CB radio</li>
                        </ul>
                        
                        <h3>Full Duplex</h3>
                        <ul>
                            <li>Simultaneous two-way communication</li>
                            <li>Both directions at the same time</li>
                            <li>Examples: Telephone, modern networks</li>
                        </ul>
                    `
                },
                {
                    title: "Serial vs Parallel Transmission",
                    content: `
                        <h3>Serial Transmission</h3>
                        <ul>
                            <li>Bits sent one after another</li>
                            <li>Reliable for long distances</li>
                            <li>Less susceptible to interference</li>
                            <li>Used in most network connections</li>
                        </ul>
                        
                        <h3>Parallel Transmission</h3>
                        <ul>
                            <li>Multiple bits sent simultaneously</li>
                            <li>Faster over short distances</li>
                            <li>Prone to timing issues over distance</li>
                            <li>Used in computer buses, not networks</li>
                        </ul>
                        
                        <h3>Why Serial for Networks?</h3>
                        <p>Serial transmission is more reliable over long distances and less affected by signal degradation.</p>
                    `
                },
                {
                    title: "Packet Switching",
                    content: `
                        <h3>What is Packet Switching?</h3>
                        <p>Breaking messages into packets that can take different routes and be reassembled at the destination.</p>
                        
                        <h3>How It Works</h3>
                        <ol>
                            <li>Message is divided into packets</li>
                            <li>Each packet has destination address</li>
                            <li>Packets may take different routes</li>
                            <li>Packets are reassembled at destination</li>
                        </ol>
                        
                        <h3>Key Components</h3>
                        <ul>
                            <li><strong>Routers:</strong> Direct packets toward destination</li>
                            <li><strong>Repeaters:</strong> Boost signals to prevent degradation</li>
                            <li><strong>Switches:</strong> Connect devices within networks</li>
                        </ul>
                        
                        <h3>Advantages</h3>
                        <ul>
                            <li>Efficient use of network resources</li>
                            <li>Fault tolerance (alternate routes)</li>
                            <li>Fair bandwidth sharing</li>
                        </ul>
                    `
                },
                {
                    title: "Wireless Network Advantages",
                    content: `
                        <h3>Primary Advantages</h3>
                        
                        <h3>Convenience</h3>
                        <ul>
                            <li>No cables to install or manage</li>
                            <li>Easy device connection</li>
                            <li>Flexible device placement</li>
                        </ul>
                        
                        <h3>Mobility</h3>
                        <ul>
                            <li>Users can move around freely</li>
                            <li>Laptops, tablets, smartphones</li>
                            <li>Seamless connectivity</li>
                        </ul>
                        
                        <h3>Productivity</h3>
                        <ul>
                            <li>Access from anywhere in range</li>
                            <li>Collaboration and flexibility</li>
                            <li>Remote work capabilities</li>
                        </ul>
                    `
                },
                {
                    title: "More Wireless Advantages",
                    content: `
                        <h3>Deployment Ease</h3>
                        <ul>
                            <li>Quick setup without wiring</li>
                            <li>Less disruptive installation</li>
                            <li>Easy to relocate</li>
                        </ul>
                        
                        <h3>Expandability</h3>
                        <ul>
                            <li>Easy to add new devices</li>
                            <li>Scalable infrastructure</li>
                            <li>Guest access capabilities</li>
                        </ul>
                        
                        <h3>Cost Savings</h3>
                        <ul>
                            <li>No cable installation costs</li>
                            <li>Lower maintenance requirements</li>
                            <li>Reduced infrastructure costs</li>
                        </ul>
                    `
                },
                {
                    title: "Wireless Network Disadvantages",
                    content: `
                        <h3>Security Issues</h3>
                        <ul>
                            <li>Wireless signals can be intercepted</li>
                            <li>Eavesdropping risks</li>
                            <li>Unauthorized access possibilities</li>
                            <li>Requires strong encryption</li>
                        </ul>
                        
                        <h3>Performance Limitations</h3>
                        <ul>
                            <li>Limited range compared to wired</li>
                            <li>Interference from other devices</li>
                            <li>Generally slower speeds</li>
                            <li>Signal degradation with distance</li>
                        </ul>
                        
                        <h3>Reliability Concerns</h3>
                        <ul>
                            <li>Affected by physical obstacles</li>
                            <li>Weather interference</li>
                            <li>Network congestion</li>
                        </ul>
                    `
                },
                {
                    title: "Wireless Hardware",
                    content: `
                        <h3>Router</h3>
                        <ul>
                            <li>Directs data packets</li>
                            <li>Provides Wi-Fi access point</li>
                            <li>Connects to Internet</li>
                            <li>Manages network traffic</li>
                        </ul>
                        
                        <h3>Adapters</h3>
                        <ul>
                            <li>Connect devices to Wi-Fi</li>
                            <li>Built into most modern devices</li>
                            <li>USB adapters for older devices</li>
                            <li>PCI cards for desktop computers</li>
                        </ul>
                        
                        <h3>Extenders</h3>
                        <ul>
                            <li>Boost Wi-Fi signal range</li>
                            <li>Extend coverage to dead zones</li>
                            <li>Multiple access points</li>
                            <li>Mesh network systems</li>
                        </ul>
                    `
                },
                {
                    title: "Wireless Software Components",
                    content: `
                        <h3>Router Software</h3>
                        <ul>
                            <li>Firmware for router operation</li>
                            <li>Network configuration settings</li>
                            <li>Security protocols</li>
                            <li>Quality of Service (QoS) management</li>
                        </ul>
                        
                        <h3>SSID (Service Set Identifier)</h3>
                        <ul>
                            <li>Unique network name</li>
                            <li>Identifies wireless network</li>
                            <li>Visible to users scanning for networks</li>
                            <li>Can be hidden for security</li>
                        </ul>
                        
                        <h3>Configuration Tools</h3>
                        <ul>
                            <li>Web-based router administration</li>
                            <li>Mobile apps for network management</li>
                            <li>Network monitoring software</li>
                        </ul>
                    `
                },
                {
                    title: "Wireless Technology Characteristics",
                    content: `
                        <h3>Wi-Fi</h3>
                        <ul>
                            <li><strong>Range:</strong> Short (~20 meters)</li>
                            <li><strong>Speed:</strong> High (up to several Gbps)</li>
                            <li><strong>Use:</strong> Local area networks</li>
                            <li><strong>Standard:</strong> IEEE 802.11</li>
                        </ul>
                        
                        <h3>WiMAX</h3>
                        <ul>
                            <li><strong>Range:</strong> Long (~50 km)</li>
                            <li><strong>Speed:</strong> Moderate (~70 Mbps)</li>
                            <li><strong>Use:</strong> Wireless broadband</li>
                            <li><strong>Standard:</strong> IEEE 802.16</li>
                        </ul>
                        
                        <h3>LTE/3G/4G/5G</h3>
                        <ul>
                            <li><strong>Range:</strong> Cellular network coverage</li>
                            <li><strong>Speed:</strong> Evolving (3G < 4G < 5G)</li>
                            <li><strong>Use:</strong> Mobile Internet standards</li>
                            <li><strong>Evolution:</strong> 5G offers much higher speeds</li>
                        </ul>
                    `
                },
                {
                    title: "Network Security Methods",
                    content: `
                        <h3>Encryption</h3>
                        <ul>
                            <li><strong>WEP:</strong> Weak, easily compromised</li>
                            <li><strong>WPA:</strong> Better than WEP</li>
                            <li><strong>WPA2/AES:</strong> Strong encryption standard</li>
                            <li>Protects data in transit</li>
                        </ul>
                        
                        <h3>Authentication</h3>
                        <ul>
                            <li><strong>Passwords:</strong> Shared keys or individual passwords</li>
                            <li><strong>Enterprise Login:</strong> RADIUS servers</li>
                            <li><strong>Certificate-based:</strong> Digital certificates</li>
                            <li>Verifies user identity</li>
                        </ul>
                        
                        <h3>MAC Filtering</h3>
                        <ul>
                            <li>Only allows listed devices</li>
                            <li>Uses device MAC addresses</li>
                            <li>Deters casual users</li>
                            <li>Not secure against expert attackers</li>
                        </ul>
                    `
                },
                {
                    title: "Security Method Pros & Cons",
                    content: `
                        <h3>Best Practice ✅</h3>
                        <ul>
                            <li><strong>WPA2 + Strong Password:</strong> Best combination</li>
                            <li>AES encryption provides strong protection</li>
                            <li>Regular password changes</li>
                            <li>Multiple security layers</li>
                        </ul>
                        
                        <h3>Avoid ❌</h3>
                        <ul>
                            <li><strong>WEP:</strong> Weak and easily cracked</li>
                            <li>Default passwords</li>
                            <li>Open networks without encryption</li>
                            <li>Relying only on MAC filtering</li>
                        </ul>
                        
                        <h3>Combined Approach</h3>
                        <p>Use multiple methods together: WPA2 encryption + strong authentication + MAC filtering + regular updates.</p>
                    `
                }
            ]
        },
        "computational-thinking": {
            title: "🧠 Computational Thinking: The Art of Problem Solving",
            slides: [
                {
                    title: "Topic 4: Computational Thinking",
                    content: `
                        <h3>🧠 Computational Thinking: The Art of Problem Solving</h3>
                        <p><strong>Topic 4 of the IB Computer Science HL Curriculum</strong></p>
                        <p>This topic covers the fundamental thinking processes used to solve problems systematically and create algorithms that computers can execute.</p>
                        
                        <h3>What is Computational Thinking?</h3>
                        <p>Computational thinking is the foundation of computer science. It involves solving problems systematically and logically, breaking them into smaller pieces, and creating solutions that can be carried out by a computer.</p>
                        
                        <h3>Key Aspects</h3>
                        <ul>
                            <li><strong>Decomposition:</strong> Breaking problems into smaller sub-problems</li>
                            <li><strong>Pattern Recognition:</strong> Identifying similarities and trends</li>
                            <li><strong>Abstraction:</strong> Focusing on essential details, ignoring irrelevant complexity</li>
                            <li><strong>Algorithms:</strong> Step-by-step instructions to solve a problem</li>
                        </ul>
                        
                        <h3>Example</h3>
                        <p>Designing a game → decompose into input handling, graphics, physics, and scoring modules.</p>
                    `
                },
                {
                    title: "Key Aspects of Computational Thinking",
                    content: `
                        <h3>Decomposition</h3>
                        <ul>
                            <li>Breaking problems into smaller sub-problems</li>
                            <li>Makes complex problems manageable</li>
                            <li>Allows different people to work on different parts</li>
                            <li>Enables reuse of existing solutions</li>
                        </ul>
                        
                        <h3>Pattern Recognition</h3>
                        <ul>
                            <li>Identifying similarities and trends</li>
                            <li>Applying known solutions to similar problems</li>
                            <li>Avoiding redundant work</li>
                            <li>Finding efficiency opportunities</li>
                        </ul>
                        
                        <h3>Abstraction</h3>
                        <ul>
                            <li>Focusing on essential details</li>
                            <li>Ignoring irrelevant complexity</li>
                            <li>Creating general solutions</li>
                            <li>Making problems more reusable</li>
                        </ul>
                        
                        <h3>Algorithms</h3>
                        <ul>
                            <li>Step-by-step instructions</li>
                            <li>Precise and unambiguous</li>
                            <li>Finite and correct</li>
                            <li>Can be implemented by computers</li>
                        </ul>
                    `
                },
                {
                    title: "Thinking Procedurally",
                    content: `
                        <h3>Procedural Thinking</h3>
                        <p>Order matters → solutions must be carried out in sequence.</p>
                        
                        <h3>Key Characteristics</h3>
                        <ul>
                            <li>Sequential execution of steps</li>
                            <li>Each step depends on previous steps</li>
                            <li>Clear flow from start to finish</li>
                            <li>Logical progression</li>
                        </ul>
                        
                        <h3>Benefits</h3>
                        <ul>
                            <li>Allows mapping of complex tasks into clear steps</li>
                            <li>Makes debugging easier</li>
                            <li>Enables step-by-step verification</li>
                            <li>Facilitates understanding and maintenance</li>
                        </ul>
                        
                        <h3>Example</h3>
                        <p>Baking a cake: gather ingredients → mix → bake → cool → decorate</p>
                    `
                },
                {
                    title: "Thinking Logically",
                    content: `
                        <h3>Logical Thinking</h3>
                        <p>Logic = the rules computers follow.</p>
                        
                        <h3>Components</h3>
                        <ul>
                            <li><strong>If/else conditions:</strong> Decision making based on criteria</li>
                            <li><strong>Boolean logic:</strong> AND, OR, NOT operations</li>
                            <li><strong>Reasoning:</strong> Drawing conclusions from premises</li>
                        </ul>
                        
                        <h3>Example: Login System</h3>
                        <p>A login system must check both username AND password before granting access.</p>
                        
                        <h3>Boolean Logic Rules</h3>
                        <ul>
                            <li>AND: Both conditions must be true</li>
                            <li>OR: At least one condition must be true</li>
                            <li>NOT: Reverses the condition</li>
                        </ul>
                    `
                },
                {
                    title: "Thinking Concurrently",
                    content: `
                        <h3>Concurrent Thinking</h3>
                        <p>Solving parts of a problem in parallel.</p>
                        
                        <h3>Benefits</h3>
                        <ul>
                            <li>Improved performance</li>
                            <li>Better resource utilization</li>
                            <li>Enhanced user experience</li>
                            <li>Scalability</li>
                        </ul>
                        
                        <h3>Example: Web Browser</h3>
                        <p>A web browser loads text, images, and videos simultaneously rather than one at a time.</p>
                        
                        <h3>Real-World Applications</h3>
                        <ul>
                            <li>Multi-core processors</li>
                            <li>Network downloads</li>
                            <li>Database queries</li>
                            <li>Graphics rendering</li>
                        </ul>
                    `
                },
                {
                    title: "Problem Identification",
                    content: `
                        <h3>Problem Identification Process</h3>
                        <ol>
                            <li><strong>Define the problem clearly</strong></li>
                            <li><strong>Decide inputs:</strong> What data is needed?</li>
                            <li><strong>Decide processes:</strong> What operations are required?</li>
                            <li><strong>Decide outputs:</strong> What results are expected?</li>
                        </ol>
                        
                        <h3>Example: ATM System</h3>
                        <ul>
                            <li><strong>Input:</strong> PIN + withdrawal amount</li>
                            <li><strong>Process:</strong> Verify account + check balance</li>
                            <li><strong>Output:</strong> Cash + updated balance</li>
                        </ul>
                        
                        <h3>Benefits of Clear Problem Definition</h3>
                        <ul>
                            <li>Prevents scope creep</li>
                            <li>Ensures all requirements are met</li>
                            <li>Facilitates testing</li>
                            <li>Improves communication</li>
                        </ul>
                    `
                },
                {
                    title: "Problem Decomposition",
                    content: `
                        <h3>Breaking into Modules</h3>
                        <p>Divide complex systems into manageable components.</p>
                        
                        <h3>Example: E-commerce Site</h3>
                        <ul>
                            <li><strong>Payment Module:</strong> Handles transactions and billing</li>
                            <li><strong>Shopping Cart Module:</strong> Manages item selection</li>
                            <li><strong>Product Catalog Module:</strong> Displays available items</li>
                            <li><strong>User Management Module:</strong> Handles accounts and authentication</li>
                        </ul>
                        
                        <h3>Benefits of Decomposition</h3>
                        <ul>
                            <li>Easier to understand and maintain</li>
                            <li>Multiple developers can work simultaneously</li>
                            <li>Modules can be tested independently</li>
                            <li>Reusable components</li>
                        </ul>
                    `
                },
                {
                    title: "Problem Representation",
                    content: `
                        <h3>Representation Tools</h3>
                        <p>Use visual and textual tools to help programmers visualize solutions before coding.</p>
                        
                        <h3>Flowcharts</h3>
                        <ul>
                            <li>Diagrams with shapes for processes, inputs, outputs, decisions</li>
                            <li>Visual representation of algorithm flow</li>
                            <li>Easy to understand and communicate</li>
                        </ul>
                        
                        <h3>Pseudocode</h3>
                        <ul>
                            <li>Structured, language-like representation</li>
                            <li>Language-independent</li>
                            <li>Focuses on logic, not syntax</li>
                        </ul>
                        
                        <h3>Structure Diagrams</h3>
                        <ul>
                            <li>Show relationships between components</li>
                            <li>Hierarchical representation</li>
                            <li>System architecture overview</li>
                        </ul>
                    `
                },
                {
                    title: "Algorithms",
                    content: `
                        <h3>Algorithm Characteristics</h3>
                        <p>Precise step-by-step instructions that must be:</p>
                        <ul>
                            <li><strong>Finite:</strong> Must eventually stop</li>
                            <li><strong>Unambiguous:</strong> Each step clearly defined</li>
                            <li><strong>Correct:</strong> Solves the problem as intended</li>
                            <li><strong>Efficient:</strong> Uses resources appropriately</li>
                        </ul>
                        
                        <h3>Algorithm Design Process</h3>
                        <ol>
                            <li>Understand the problem</li>
                            <li>Plan the solution</li>
                            <li>Design the algorithm</li>
                            <li>Test with sample data</li>
                            <li>Refine and optimize</li>
                        </ol>
                        
                        <h3>Example Algorithm</h3>
                        <p>Finding the maximum number in a list: Start with first number → compare with next → keep larger → repeat until end.</p>
                    `
                },
                {
                    title: "Algorithm Design Tools",
                    content: `
                        <h3>Pseudocode</h3>
                        <p>Plain language approximating code - structured, language-independent representation.</p>
                        
                        <h3>Flowcharts</h3>
                        <p>Diagrams with shapes for:</p>
                        <ul>
                            <li>Rectangles: Processes</li>
                            <li>Parallelograms: Input/Output</li>
                            <li>Diamonds: Decisions</li>
                            <li>Circles: Start/End points</li>
                        </ul>
                        
                        <h3>Benefits</h3>
                        <ul>
                            <li>Visualize logic before coding</li>
                            <li>Communicate with non-programmers</li>
                            <li>Debug and verify algorithms</li>
                            <li>Document solutions</li>
                        </ul>
                        
                        <h3>Example Shapes</h3>
                        <p>Start (oval) → Input (parallelogram) → Decision (diamond) → Process (rectangle) → Output (parallelogram) → End (oval)</p>
                    `
                },
                {
                    title: "Common Algorithms",
                    content: `
                        <h3>Searching Algorithms</h3>
                        <ul>
                            <li><strong>Linear Search:</strong> Sequentially check each element until found</li>
                            <li><strong>Binary Search:</strong> Divide sorted list repeatedly to locate item</li>
                        </ul>
                        
                        <h3>Sorting Algorithms</h3>
                        <ul>
                            <li><strong>Bubble Sort:</strong> Compare adjacent pairs, swap repeatedly</li>
                            <li><strong>Selection Sort:</strong> Find smallest, place in order step by step</li>
                            <li><strong>Insertion Sort:</strong> Insert items into correct place in sorted section</li>
                        </ul>
                        
                        <h3>Traversal Algorithms</h3>
                        <ul>
                            <li>Following a path in a data structure</li>
                            <li>Visiting each element exactly once</li>
                            <li>Used with trees and graphs</li>
                        </ul>
                        
                        <h3>Algorithm Efficiency</h3>
                        <p>Different algorithms have different time and space complexity - choose based on requirements.</p>
                    `
                },
                {
                    title: "Problem-Solving Strategies",
                    content: `
                        <h3>Top-Down Design</h3>
                        <ul>
                            <li>Start broad, refine into details</li>
                            <li>Break main problem into major components</li>
                            <li>Each component refined into smaller parts</li>
                            <li>Continue until all details specified</li>
                        </ul>
                        
                        <h3>Stepwise Refinement</h3>
                        <ul>
                            <li>Break problems into progressively smaller steps</li>
                            <li>Each step refined further</li>
                            <li>Continue until implementation-ready</li>
                        </ul>
                        
                        <h3>Trace Tables</h3>
                        <ul>
                            <li>Test algorithms step by step with sample data</li>
                            <li>Show how variables change during execution</li>
                            <li>Verify correctness and understand behavior</li>
                            <li>Debug and optimize algorithms</li>
                        </ul>
                    `
                },
                {
                    title: "Programming Basics",
                    content: `
                        <h3>Program vs Algorithm</h3>
                        <p>A program is the implementation of an algorithm in code that a computer can execute.</p>
                        
                        <h3>Programming Languages</h3>
                        <ul>
                            <li><strong>Low-level:</strong> Machine code, assembly language</li>
                            <li><strong>High-level:</strong> Java, Python, C++, etc.</li>
                        </ul>
                        
                        <h3>Language Characteristics</h3>
                        <ul>
                            <li><strong>Low-level:</strong> Hardware-specific, fast, hard to program</li>
                            <li><strong>High-level:</strong> Portable, readable, easier to program</li>
                        </ul>
                        
                        <h3>Programming Process</h3>
                        <ol>
                            <li>Analyze the problem</li>
                            <li>Design the algorithm</li>
                            <li>Write the code</li>
                            <li>Test and debug</li>
                            <li>Maintain and update</li>
                        </ol>
                    `
                },
                {
                    title: "Variables and Constants",
                    content: `
                        <h3>Variables</h3>
                        <ul>
                            <li>Named storage that can change</li>
                            <li>Hold different values during execution</li>
                            <li>Must be declared before use</li>
                            <li>Have specific data types</li>
                        </ul>
                        
                        <h3>Constants</h3>
                        <ul>
                            <li>Fixed value that cannot change</li>
                            <li>Improves code readability</li>
                            <li>Prevents accidental modification</li>
                            <li>Makes maintenance easier</li>
                        </ul>
                        
                        <h3>Example in Pseudocode</h3>
                        <pre>
CONSTANT PI = 3.14
radius ← 5
area ← PI * radius * radius
                        </pre>
                        
                        <h3>Benefits of Constants</h3>
                        <ul>
                            <li>Single point of change</li>
                            <li>Clear meaning and purpose</li>
                            <li>Prevent magic numbers</li>
                        </ul>
                    `
                },
                {
                    title: "Data Types",
                    content: `
                        <h3>Fundamental Data Types</h3>
                        
                        <h3>Integer</h3>
                        <ul>
                            <li>Whole numbers (positive, negative, zero)</li>
                            <li>Examples: 42, -17, 0</li>
                            <li>Used for counting, indexing</li>
                        </ul>
                        
                        <h3>Real/Float</h3>
                        <ul>
                            <li>Decimal numbers</li>
                            <li>Examples: 3.14, -2.5, 0.0</li>
                            <li>Used for measurements, calculations</li>
                        </ul>
                        
                        <h3>Boolean</h3>
                        <ul>
                            <li>True/false values</li>
                            <li>Used for conditions and flags</li>
                            <li>Essential for decision making</li>
                        </ul>
                        
                        <h3>Character and String</h3>
                        <ul>
                            <li><strong>Char:</strong> Single character ('A', '1', '@')</li>
                            <li><strong>String:</strong> Sequence of characters ("Hello", "123")</li>
                        </ul>
                    `
                },
                {
                    title: "Operators",
                    content: `
                        <h3>Arithmetic Operators</h3>
                        <ul>
                            <li>+ (addition)</li>
                            <li>- (subtraction)</li>
                            <li>* (multiplication)</li>
                            <li>/ (division)</li>
                            <li>% (modulus - remainder)</li>
                        </ul>
                        
                        <h3>Relational Operators</h3>
                        <ul>
                            <li>< (less than)</li>
                            <li>> (greater than)</li>
                            <li>= (equal to)</li>
                            <li>!= (not equal to)</li>
                            <li><= (less than or equal)</li>
                            <li>>= (greater than or equal)</li>
                        </ul>
                        
                        <h3>Logical Operators</h3>
                        <ul>
                            <li>AND - both conditions must be true</li>
                            <li>OR - at least one condition must be true</li>
                            <li>NOT - reverses the condition</li>
                        </ul>
                        
                        <h3>Operator Precedence</h3>
                        <p>Different operators have different priority levels - understanding precedence is crucial for correct calculations.</p>
                    `
                },
                {
                    title: "Control Structures",
                    content: `
                        <h3>Sequence</h3>
                        <ul>
                            <li>Step-by-step execution in order</li>
                            <li>Each statement executed once</li>
                            <li>Default flow of programs</li>
                        </ul>
                        
                        <h3>Selection</h3>
                        <ul>
                            <li>Branching based on conditions</li>
                            <li>if/else statements</li>
                            <li>switch/case statements</li>
                            <li>Decision making in programs</li>
                        </ul>
                        
                        <h3>Iteration</h3>
                        <ul>
                            <li>Repeating code blocks</li>
                            <li>for loops - fixed number of repetitions</li>
                            <li>while loops - repeat while condition is true</li>
                            <li>repeat-until loops - repeat until condition is true</li>
                        </ul>
                        
                        <h3>Combining Structures</h3>
                        <p>Control structures can be nested and combined to create complex program logic.</p>
                    `
                },
                {
                    title: "Pseudocode Example",
                    content: `
                        <h3>Even/Odd Number Checker</h3>
                        <pre>
INPUT number
IF number MOD 2 = 0 THEN
   OUTPUT "Even"
ELSE
   OUTPUT "Odd"
END IF
                        </pre>
                        
                        <h3>Algorithm Steps</h3>
                        <ol>
                            <li>Get a number from the user</li>
                            <li>Check if the remainder when divided by 2 is 0</li>
                            <li>If remainder is 0, output "Even"</li>
                            <li>Otherwise, output "Odd"</li>
                        </ol>
                        
                        <h3>Pseudocode Benefits</h3>
                        <ul>
                            <li>Language-independent</li>
                            <li>Focus on logic, not syntax</li>
                            <li>Easy to understand and modify</li>
                            <li>Good for planning and communication</li>
                        </ul>
                    `
                },
                {
                    title: "Flowchart Example",
                    content: `
                        <h3>Even/Odd Flowchart</h3>
                        <p>Start → Input number → Decision (even/odd?) → Output result → End</p>
                        
                        <h3>Flowchart Symbols</h3>
                        <ul>
                            <li><strong>Oval:</strong> Start/End</li>
                            <li><strong>Parallelogram:</strong> Input/Output</li>
                            <li><strong>Diamond:</strong> Decision</li>
                            <li><strong>Rectangle:</strong> Process</li>
                            <li><strong>Arrows:</strong> Flow direction</li>
                        </ul>
                        
                        <h3>Flowchart Benefits</h3>
                        <ul>
                            <li>Visual representation</li>
                            <li>Easy to follow logic flow</li>
                            <li>Good for complex algorithms</li>
                            <li>Universal understanding</li>
                        </ul>
                        
                        <h3>When to Use Flowcharts</h3>
                        <p>Best for algorithms with multiple decision points and complex branching logic.</p>
                    `
                },
                {
                    title: "Subroutines",
                    content: `
                        <h3>Types of Subroutines</h3>
                        
                        <h3>Procedures</h3>
                        <ul>
                            <li>Perform a task</li>
                            <li>No return value</li>
                            <li>Used for actions and operations</li>
                            <li>Example: Print message, display menu</li>
                        </ul>
                        
                        <h3>Functions</h3>
                        <ul>
                            <li>Perform a task</li>
                            <li>Return a value</li>
                            <li>Used for calculations and data processing</li>
                            <li>Example: Calculate area, find maximum</li>
                        </ul>
                        
                        <h3>Example Function (Pseudocode)</h3>
                        <pre>
FUNCTION Square(x)
   RETURN x * x
END FUNCTION
                        </pre>
                        
                        <h3>Benefits of Subroutines</h3>
                        <ul>
                            <li>Code reusability</li>
                            <li>Modular design</li>
                            <li>Easier testing and debugging</li>
                            <li>Improved readability</li>
                        </ul>
                    `
                },
                {
                    title: "Structured vs Unstructured Programming",
                    content: `
                        <h3>Structured Programming</h3>
                        <ul>
                            <li>Modular design</li>
                            <li>Readable code</li>
                            <li>Reusable components</li>
                            <li>Clear organization</li>
                            <li>Easy to maintain</li>
                        </ul>
                        
                        <h3>Unstructured Programming</h3>
                        <ul>
                            <li>"Spaghetti code"</li>
                            <li>Hard to debug</li>
                            <li>Difficult to maintain</li>
                            <li>Tangled control flow</li>
                            <li>Poor organization</li>
                        </ul>
                        
                        <h3>Benefits of Structured Programming</h3>
                        <ul>
                            <li>Faster development</li>
                            <li>Fewer bugs</li>
                            <li>Easier collaboration</li>
                            <li>Better scalability</li>
                        </ul>
                        
                        <h3>Best Practices</h3>
                        <p>Use clear naming, proper indentation, comments, and modular design.</p>
                    `
                },
                {
                    title: "Debugging and Testing",
                    content: `
                        <h3>Types of Errors</h3>
                        
                        <h3>Syntax Errors</h3>
                        <ul>
                            <li>Violate language rules</li>
                            <li>Caught during compilation</li>
                            <li>Examples: missing semicolons, typos</li>
                        </ul>
                        
                        <h3>Logic Errors</h3>
                        <ul>
                            <li>Wrong results due to faulty logic</li>
                            <li>Program runs but produces incorrect output</li>
                            <li>Harder to find and fix</li>
                        </ul>
                        
                        <h3>Runtime Errors</h3>
                        <ul>
                            <li>Program crashes while running</li>
                            <li>Often due to invalid operations</li>
                            <li>Examples: division by zero, invalid input</li>
                        </ul>
                        
                        <h3>Testing Methods</h3>
                        <ul>
                            <li>Unit tests - test individual components</li>
                            <li>Integration tests - test component interactions</li>
                            <li>Dry runs - trace through code manually</li>
                        </ul>
                    `
                },
                {
                    title: "Compilation vs Interpretation",
                    content: `
                        <h3>Compiler</h3>
                        <ul>
                            <li>Translates entire code into machine code before execution</li>
                            <li>Faster execution</li>
                            <li>Requires compilation time</li>
                            <li>Platform-specific output</li>
                        </ul>
                        
                        <h3>Interpreter</h3>
                        <ul>
                            <li>Translates line by line at runtime</li>
                            <li>Immediate feedback</li>
                            <li>Slower execution</li>
                            <li>Platform-independent</li>
                        </ul>
                        
                        <h3>Examples</h3>
                        <ul>
                            <li><strong>Compiled:</strong> C, C++, Java (bytecode)</li>
                            <li><strong>Interpreted:</strong> Python, JavaScript, Ruby</li>
                        </ul>
                        
                        <h3>Trade-offs</h3>
                        <p>Choose based on development speed vs execution speed requirements.</p>
                    `
                },
                {
                    title: "High-level vs Low-level Languages",
                    content: `
                        <h3>High-level Languages</h3>
                        <ul>
                            <li>Closer to human language</li>
                            <li>Portable across platforms</li>
                            <li>Easier to read and write</li>
                            <li>Examples: Java, Python, C#</li>
                        </ul>
                        
                        <h3>Low-level Languages</h3>
                        <ul>
                            <li>Closer to machine code</li>
                            <li>Faster execution</li>
                            <li>Hardware-specific</li>
                            <li>Examples: Assembly, Machine code</li>
                        </ul>
                        
                        <h3>Language Spectrum</h3>
                        <p>Machine Code → Assembly → C → Java/Python → SQL</p>
                        <p>(Low-level) ← → (High-level)</p>
                        
                        <h3>Choosing a Language</h3>
                        <p>Consider: performance needs, development time, platform requirements, team expertise.</p>
                    `
                },
                {
                    title: "OOP Basics (Preview)",
                    content: `
                        <h3>Object-Oriented Programming Concepts</h3>
                        
                        <h3>Class</h3>
                        <ul>
                            <li>Blueprint or template</li>
                            <li>Defines attributes and methods</li>
                            <li>Like a cookie cutter</li>
                        </ul>
                        
                        <h3>Object</h3>
                        <ul>
                            <li>Instance of a class</li>
                            <li>Has specific attribute values</li>
                            <li>Like a cookie made from the cutter</li>
                        </ul>
                        
                        <h3>Advanced OOP Concepts (Later Topics)</h3>
                        <ul>
                            <li><strong>Encapsulation:</strong> Data hiding and protection</li>
                            <li><strong>Inheritance:</strong> Code reuse through classes</li>
                            <li><strong>Polymorphism:</strong> Multiple forms of the same interface</li>
                        </ul>
                        
                        <h3>Example</h3>
                        <p>Class: Car → Objects: red Honda, blue Toyota, green Ford</p>
                    `
                },
                {
                    title: "Closing Summary",
                    content: `
                        <h3>Computational Thinking</h3>
                        <ul>
                            <li>Decomposition - breaking problems into parts</li>
                            <li>Abstraction - focusing on essential details</li>
                            <li>Algorithms - step-by-step solutions</li>
                        </ul>
                        
                        <h3>Problem-Solving</h3>
                        <ul>
                            <li>Structured tools like pseudocode and flowcharts</li>
                            <li>Systematic approach to complex problems</li>
                            <li>Clear representation before implementation</li>
                        </ul>
                        
                        <h3>Programming</h3>
                        <ul>
                            <li>Implementing solutions in code</li>
                            <li>Using variables, control structures, and subroutines</li>
                            <li>From algorithm to working program</li>
                        </ul>
                        
                        <h3>Foundation for Success</h3>
                        <p>Topic 4 builds the practical foundation to turn ideas into working programs. These concepts are essential for all future programming topics.</p>
                    `
                }
            ]
        },
        "abstract-data-structures": {
            title: "📊 Abstract Data Structures: Organizing Information",
            slides: [
                {
                    title: "Topic 5: Abstract Data Structures",
                    content: `
                        <h3>📊 Abstract Data Structures: Organizing Information</h3>
                        <p><strong>Topic 5 of the IB Computer Science HL Curriculum</strong></p>
                        <p>This topic covers advanced data structures and algorithms for organizing and manipulating data efficiently in computer programs.</p>
                        
                        <h3>What are Abstract Data Structures?</h3>
                        <p>Abstract data structures are ways of organizing and storing data in a computer so that it can be accessed and modified efficiently. They define the logical structure and operations without specifying implementation details.</p>
                        
                        <h3>Key Concepts</h3>
                        <ul>
                            <li><strong>Abstract Data Type (ADT):</strong> Mathematical model defining behavior</li>
                            <li><strong>Implementation Independence:</strong> Focus on what, not how</li>
                            <li><strong>Operation Interface:</strong> Well-defined methods for data manipulation</li>
                        </ul>
                        
                        <h3>Why Study Data Structures?</h3>
                        <ul>
                            <li>Efficient problem solving</li>
                            <li>Optimal resource usage</li>
                            <li>Foundation for algorithm design</li>
                            <li>Real-world applications</li>
                        </ul>
                    `
                },
                {
                    title: "Linear Data Structures",
                    content: `
                        <h3>Arrays</h3>
                        <ul>
                            <li>Fixed-size collection of elements</li>
                            <li>Elements stored in contiguous memory</li>
                            <li>Indexed access (0, 1, 2, ...)</li>
                            <li>Time complexity: Access O(1), Search O(n)</li>
                        </ul>
                        
                        <h3>Linked Lists</h3>
                        <ul>
                            <li>Dynamic size collection</li>
                            <li>Elements stored in nodes with pointers</li>
                            <li>Sequential access only</li>
                            <li>Time complexity: Access O(n), Insert/Delete O(1)</li>
                        </ul>
                        
                        <h3>Comparison</h3>
                        <p><strong>Arrays:</strong> Fast access, fixed size, memory efficient<br>
                        <strong>Linked Lists:</strong> Dynamic size, flexible insertion/deletion, extra memory for pointers</p>
                    `
                },
                {
                    title: "Stacks",
                    content: `
                        <h3>Stack Properties</h3>
                        <ul>
                            <li>LIFO (Last In, First Out) principle</li>
                            <li>Elements added and removed from same end (top)</li>
                            <li>Like a stack of plates or books</li>
                        </ul>
                        
                        <h3>Stack Operations</h3>
                        <ul>
                            <li><strong>PUSH:</strong> Add element to top</li>
                            <li><strong>POP:</strong> Remove element from top</li>
                            <li><strong>TOP/PEEK:</strong> View top element without removing</li>
                            <li><strong>IS_EMPTY:</strong> Check if stack is empty</li>
                        </ul>
                        
                        <h3>Applications</h3>
                        <ul>
                            <li>Function call management</li>
                            <li>Expression evaluation</li>
                            <li>Undo operations</li>
                            <li>Browser back button</li>
                        </ul>
                        
                        <h3>Time Complexity</h3>
                        <p>All operations: O(1) - constant time</p>
                    `
                },
                {
                    title: "Queues",
                    content: `
                        <h3>Queue Properties</h3>
                        <ul>
                            <li>FIFO (First In, First Out) principle</li>
                            <li>Elements added at rear, removed from front</li>
                            <li>Like a line of people waiting</li>
                        </ul>
                        
                        <h3>Queue Operations</h3>
                        <ul>
                            <li><strong>ENQUEUE:</strong> Add element to rear</li>
                            <li><strong>DEQUEUE:</strong> Remove element from front</li>
                            <li><strong>FRONT:</strong> View front element without removing</li>
                            <li><strong>REAR:</strong> View rear element</li>
                            <li><strong>IS_EMPTY:</strong> Check if queue is empty</li>
                        </ul>
                        
                        <h3>Applications</h3>
                        <ul>
                            <li>Process scheduling</li>
                            <li>Print job management</li>
                            <li>Breadth-first search</li>
                            <li>Buffer management</li>
                        </ul>
                        
                        <h3>Time Complexity</h3>
                        <p>All operations: O(1) - constant time</p>
                    `
                },
                {
                    title: "Trees",
                    content: `
                        <h3>Tree Structure</h3>
                        <ul>
                            <li>Hierarchical data structure</li>
                            <li>Consists of nodes connected by edges</li>
                            <li>One root node, no cycles</li>
                            <li>Parent-child relationships</li>
                        </ul>
                        
                        <h3>Tree Terminology</h3>
                        <ul>
                            <li><strong>Root:</strong> Top node (no parent)</li>
                            <li><strong>Leaf:</strong> Node with no children</li>
                            <li><strong>Height:</strong> Longest path from root to leaf</li>
                            <li><strong>Depth:</strong> Distance from root to a node</li>
                        </ul>
                        
                        <h3>Binary Trees</h3>
                        <ul>
                            <li>Each node has at most 2 children</li>
                            <li>Left child and right child</li>
                            <li>Used in many algorithms</li>
                        </ul>
                        
                        <h3>Applications</h3>
                        <ul>
                            <li>File systems</li>
                            <li>Decision trees</li>
                            <li>Expression parsing</li>
                            <li>Database indexing</li>
                        </ul>
                    `
                },
                {
                    title: "Binary Search Trees",
                    content: `
                        <h3>BST Properties</h3>
                        <ul>
                            <li>Binary tree with ordering property</li>
                            <li>Left subtree < node < right subtree</li>
                            <li>Enables efficient searching</li>
                        </ul>
                        
                        <h3>BST Operations</h3>
                        <ul>
                            <li><strong>Search:</strong> O(log n) in balanced tree</li>
                            <li><strong>Insert:</strong> O(log n) in balanced tree</li>
                            <li><strong>Delete:</strong> O(log n) in balanced tree</li>
                            <li><strong>In-order traversal:</strong> Gives sorted sequence</li>
                        </ul>
                        
                        <h3>Advantages</h3>
                        <ul>
                            <li>Fast search operations</li>
                            <li>Maintains sorted order</li>
                            <li>Efficient range queries</li>
                        </ul>
                        
                        <h3>Disadvantages</h3>
                        <ul>
                            <li>Can become unbalanced</li>
                            <li>Worst case: O(n) operations</li>
                            <li>Need balancing mechanisms</li>
                        </ul>
                        
                        <h3>Balancing</h3>
                        <p>AVL trees, Red-Black trees maintain balance automatically</p>
                    `
                },
                {
                    title: "Tree Traversal",
                    content: `
                        <h3>Three Main Traversal Methods</h3>
                        
                        <h3>Pre-order (Root → Left → Right)</h3>
                        <ul>
                            <li>Visit root first</li>
                            <li>Then traverse left subtree</li>
                            <li>Then traverse right subtree</li>
                            <li>Used for copying trees</li>
                        </ul>
                        
                        <h3>In-order (Left → Root → Right)</h3>
                        <ul>
                            <li>Traverse left subtree first</li>
                            <li>Visit root</li>
                            <li>Then traverse right subtree</li>
                            <li>Gives sorted order for BSTs</li>
                        </ul>
                        
                        <h3>Post-order (Left → Right → Root)</h3>
                        <ul>
                            <li>Traverse left subtree first</li>
                            <li>Traverse right subtree</li>
                            <li>Visit root last</li>
                            <li>Used for deleting trees</li>
                        </ul>
                        
                        <h3>Level-order (Breadth-First)</h3>
                        <ul>
                            <li>Visit nodes level by level</li>
                            <li>Left to right within each level</li>
                            <li>Uses a queue</li>
                        </ul>
                    `
                },
                {
                    title: "Hash Tables",
                    content: `
                        <h3>Hash Table Concept</h3>
                        <ul>
                            <li>Data structure using hash function</li>
                            <li>Maps keys to array indices</li>
                            <li>Average O(1) time complexity</li>
                        </ul>
                        
                        <h3>Hash Function</h3>
                        <ul>
                            <li>Converts key to array index</li>
                            <li>Should distribute keys uniformly</li>
                            <li>Should be fast to compute</li>
                            <li>Example: key % table_size</li>
                        </ul>
                        
                        <h3>Collision Resolution</h3>
                        <ul>
                            <li><strong>Chaining:</strong> Linked list at each index</li>
                            <li><strong>Open Addressing:</strong> Find next available slot</li>
                            <li><strong>Double Hashing:</strong> Use second hash function</li>
                        </ul>
                        
                        <h3>Applications</h3>
                        <ul>
                            <li>Database indexing</li>
                            <li>Caching systems</li>
                            <li>Symbol tables</li>
                            <li>Set implementations</li>
                        </ul>
                        
                        <h3>Performance</h3>
                        <p>Average case: O(1), Worst case: O(n) with poor hash function</p>
                    `
                },
                {
                    title: "Heaps",
                    content: `
                        <h3>Heap Properties</h3>
                        <ul>
                            <li>Complete binary tree</li>
                            <li>Heap property: parent ≥ children (max-heap) or parent ≤ children (min-heap)</li>
                            <li>Root is always maximum or minimum</li>
                        </ul>
                        
                        <h3>Heap Operations</h3>
                        <ul>
                            <li><strong>Insert:</strong> O(log n)</li>
                            <li><strong>Extract Max/Min:</strong> O(log n)</li>
                            <li><strong>Peek:</strong> O(1)</li>
                        </ul>
                        
                        <h3>Heapify Process</h3>
                        <ul>
                            <li>Maintains heap property</li>
                            <li>Bubble up or down as needed</li>
                            <li>Ensures tree remains valid heap</li>
                        </ul>
                        
                        <h3>Applications</h3>
                        <ul>
                            <li>Priority queues</li>
                            <li>Heap sort algorithm</li>
                            <li>Graph algorithms (Dijkstra)</li>
                            <li>Memory management</li>
                        </ul>
                        
                        <h3>Array Representation</h3>
                        <p>Heaps are often stored in arrays for efficiency</p>
                    `
                },
                {
                    title: "Graphs",
                    content: `
                        <h3>Graph Structure</h3>
                        <ul>
                            <li>Collection of vertices (nodes) and edges</li>
                            <li>Vertices connected by edges</li>
                            <li>Can represent relationships</li>
                        </ul>
                        
                        <h3>Graph Types</h3>
                        <ul>
                            <li><strong>Directed:</strong> Edges have direction (arrows)</li>
                            <li><strong>Undirected:</strong> Edges have no direction</li>
                            <li><strong>Weighted:</strong> Edges have values</li>
                            <li><strong>Unweighted:</strong> All edges equal</li>
                        </ul>
                        
                        <h3>Graph Representations</h3>
                        <ul>
                            <li><strong>Adjacency Matrix:</strong> 2D array, O(V²) space</li>
                            <li><strong>Adjacency List:</strong> Array of lists, O(V+E) space</li>
                            <li><strong>Edge List:</strong> List of edges</li>
                        </ul>
                        
                        <h3>Applications</h3>
                        <ul>
                            <li>Social networks</li>
                            <li>Maps and navigation</li>
                            <li>Computer networks</li>
                            <li>Dependency graphs</li>
                        </ul>
                    `
                },
                {
                    title: "Graph Traversal",
                    content: `
                        <h3>Depth-First Search (DFS)</h3>
                        <ul>
                            <li>Explores as far as possible along each branch</li>
                            <li>Uses stack (recursion or explicit)</li>
                            <li>Time complexity: O(V + E)</li>
                            <li>Space complexity: O(V)</li>
                        </ul>
                        
                        <h3>Breadth-First Search (BFS)</h3>
                        <ul>
                            <li>Explores all neighbors before moving to next level</li>
                            <li>Uses queue</li>
                            <li>Time complexity: O(V + E)</li>
                            <li>Finds shortest path in unweighted graphs</li>
                        </ul>
                        
                        <h3>DFS Applications</h3>
                        <ul>
                            <li>Topological sorting</li>
                            <li>Cycle detection</li>
                            <li>Path finding</li>
                            <li>Strongly connected components</li>
                        </ul>
                        
                        <h3>BFS Applications</h3>
                        <ul>
                            <li>Shortest path (unweighted)</li>
                            <li>Level-order traversal</li>
                            <li>Social network analysis</li>
                            <li>Web crawling</li>
                        </ul>
                    `
                },
                {
                    title: "Time and Space Complexity",
                    content: `
                        <h3>Common Time Complexities</h3>
                        <ul>
                            <li><strong>O(1):</strong> Constant time - array access, hash table lookup</li>
                            <li><strong>O(log n):</strong> Logarithmic - binary search, balanced tree operations</li>
                            <li><strong>O(n):</strong> Linear - linear search, single traversal</li>
                            <li><strong>O(n log n):</strong> Linearithmic - efficient sorting algorithms</li>
                            <li><strong>O(n²):</strong> Quadratic - bubble sort, nested loops</li>
                        </ul>
                        
                        <h3>Data Structure Comparison</h3>
                        <table>
                            <tr><th>Structure</th><th>Access</th><th>Search</th><th>Insert</th><th>Delete</th></tr>
                            <tr><td>Array</td><td>O(1)</td><td>O(n)</td><td>O(n)</td><td>O(n)</td></tr>
                            <tr><td>Linked List</td><td>O(n)</td><td>O(n)</td><td>O(1)</td><td>O(1)</td></tr>
                            <tr><td>BST</td><td>O(log n)</td><td>O(log n)</td><td>O(log n)</td><td>O(log n)</td></tr>
                            <tr><td>Hash Table</td><td>O(1)</td><td>O(1)</td><td>O(1)</td><td>O(1)</td></tr>
                        </table>
                        
                        <h3>Space-Time Tradeoffs</h3>
                        <p>Using more memory can often reduce time complexity. Choose based on requirements.</p>
                    `
                },
                {
                    title: "Advanced Data Structures",
                    content: `
                        <h3>Priority Queues</h3>
                        <ul>
                            <li>Elements removed by priority, not insertion order</li>
                            <li>Often implemented using heaps</li>
                            <li>Applications: task scheduling, Dijkstra's algorithm</li>
                        </ul>
                        
                        <h3>Circular Queues</h3>
                        <ul>
                            <li>Queue where last position connects to first</li>
                            <li>Efficient use of array space</li>
                            <li>Applications: buffers, round-robin scheduling</li>
                        </ul>
                        
                        <h3>Doubly Linked Lists</h3>
                        <ul>
                            <li>Each node has pointers to next and previous</li>
                            <li>Enables bidirectional traversal</li>
                            <li>Applications: browser history, undo/redo</li>
                        </ul>
                        
                        <h3>Balanced Trees</h3>
                        <ul>
                            <li>AVL trees: height-balanced</li>
                            <li>Red-Black trees: color-balanced</li>
                            <li>B-trees: multi-way trees for databases</li>
                            <li>Tries: prefix trees for strings</li>
                        </ul>
                    `
                },
                {
                    title: "Choosing Data Structures",
                    content: `
                        <h3>Factors to Consider</h3>
                        <ul>
                            <li><strong>Access patterns:</strong> Random vs sequential</li>
                            <li><strong>Operation frequency:</strong> Which operations are most common</li>
                            <li><strong>Memory constraints:</strong> Available space</li>
                            <li><strong>Time requirements:</strong> Performance needs</li>
                        </ul>
                        
                        <h3>Decision Guidelines</h3>
                        <ul>
                            <li><strong>Frequent random access:</strong> Arrays or Hash tables</li>
                            <li><strong>Frequent insertions/deletions:</strong> Linked lists</li>
                            <li><strong>Need sorted order:</strong> BST or sorted arrays</li>
                            <li><strong>LIFO behavior:</strong> Stacks</li>
                            <li><strong>FIFO behavior:</strong> Queues</li>
                            <li><strong>Priority-based:</strong> Heaps or priority queues</li>
                        </ul>
                        
                        <h3>Real-World Examples</h3>
                        <ul>
                            <li><strong>Database indexing:</strong> B-trees</li>
                            <li><strong>Compiler symbol tables:</strong> Hash tables</li>
                            <li><strong>Function calls:</strong> Stacks</li>
                            <li><strong>Print queues:</strong> Queues</li>
                            <li><strong>File systems:</strong> Trees</li>
                        </ul>
                    `
                },
                {
                    title: "Summary and Best Practices",
                    content: `
                        <h3>Key Takeaways</h3>
                        <ul>
                            <li>Choose data structures based on problem requirements</li>
                            <li>Understand time and space complexity tradeoffs</li>
                            <li>Consider both average and worst-case performance</li>
                            <li>Balance simplicity with efficiency</li>
                        </ul>
                        
                        <h3>Best Practices</h3>
                        <ul>
                            <li>Start with simple structures, optimize if needed</li>
                            <li>Profile your application to identify bottlenecks</li>
                            <li>Use standard library implementations when available</li>
                            <li>Document your choices and reasoning</li>
                        </ul>
                        
                        <h3>Common Mistakes</h3>
                        <ul>
                            <li>Over-optimizing prematurely</li>
                            <li>Ignoring worst-case scenarios</li>
                            <li>Not considering memory usage</li>
                            <li>Choosing based on familiarity rather than suitability</li>
                        </ul>
                        
                        <h3>Future Learning</h3>
                        <p>Advanced topics include persistent data structures, concurrent data structures, and specialized structures for specific domains.</p>
                    `
                }
            ]
        },
        "resource-management": {
            title: "🔧 Resource Management: Optimizing System Performance",
            slides: [
                {
                    title: "Topic 6: Resource Management",
                    content: `
                        <h3>🔧 Resource Management: Optimizing System Performance</h3>
                        <p><strong>Topic 6 of the IB Computer Science HL Curriculum</strong></p>
                        <p>This topic covers how operating systems manage computer resources efficiently to ensure optimal performance and fair resource allocation.</p>
                        
                        <h3>What is Resource Management?</h3>
                        <p>Computers depend on resources—both hardware and software—that must be efficiently managed by the operating system. Resource management ensures fair use, performance, and security.</p>
                        
                        <h3>Why Resource Management Matters</h3>
                        <ul>
                            <li><strong>Fair Allocation:</strong> Multiple programs competing for resources</li>
                            <li><strong>Performance:</strong> Optimal use of available resources</li>
                            <li><strong>Security:</strong> Controlled access to system resources</li>
                            <li><strong>Reliability:</strong> Preventing resource conflicts and failures</li>
                        </ul>
                        
                        <h3>Key Concepts</h3>
                        <ul>
                            <li>Resource allocation and scheduling</li>
                            <li>Memory management and virtual memory</li>
                            <li>Process scheduling and multitasking</li>
                            <li>Device management and drivers</li>
                        </ul>
                    `
                },
                {
                    title: "System Resources",
                    content: `
                        <h3>Primary Memory (RAM)</h3>
                        <ul>
                            <li>Temporary working space for active programs</li>
                            <li>Fast access for CPU operations</li>
                            <li>Volatile - loses data when power is off</li>
                            <li>Limited capacity requiring efficient management</li>
                        </ul>
                        
                        <h3>Secondary Storage</h3>
                        <ul>
                            <li>HDDs and SSDs for long-term data storage</li>
                            <li>Permanent storage for files and programs</li>
                            <li>Slower than RAM but much larger capacity</li>
                            <li>Used for virtual memory and file systems</li>
                        </ul>
                        
                        <h3>Processor (CPU)</h3>
                        <ul>
                            <li>Executes instructions and coordinates all tasks</li>
                            <li>Performs calculations and data processing</li>
                            <li>Must be shared among multiple processes</li>
                            <li>Requires scheduling for fair allocation</li>
                        </ul>
                        
                        <h3>Other Key Resources</h3>
                        <ul>
                            <li><strong>Cache:</strong> Very fast memory close to CPU</li>
                            <li><strong>Network Bandwidth:</strong> Data transfer capability</li>
                            <li><strong>GPU:</strong> Specialized for graphics and parallel tasks</li>
                            <li><strong>I/O Devices:</strong> Input/output hardware (keyboard, printer)</li>
                        </ul>
                    `
                },
                {
                    title: "Resource Usage",
                    content: `
                        <h3>Primary Memory Usage</h3>
                        <ul>
                            <li>Holds programs and data while active</li>
                            <li>Provides CPU with fast access to instructions</li>
                            <li>Stores working variables and temporary data</li>
                            <li>Must be managed to prevent conflicts</li>
                        </ul>
                        
                        <h3>Secondary Storage Usage</h3>
                        <ul>
                            <li>Keeps inactive programs and large files</li>
                            <li>Provides permanent data persistence</li>
                            <li>Used for virtual memory paging</li>
                            <li>Stores operating system and applications</li>
                        </ul>
                        
                        <h3>CPU Usage</h3>
                        <ul>
                            <li>Performs calculations and coordinates tasks</li>
                            <li>Executes program instructions sequentially</li>
                            <li>Must be shared fairly among processes</li>
                            <li>Requires efficient scheduling algorithms</li>
                        </ul>
                        
                        <h3>Specialized Resource Usage</h3>
                        <ul>
                            <li><strong>Cache:</strong> Reduces CPU-RAM latency</li>
                            <li><strong>Network:</strong> Enables communication between systems</li>
                            <li><strong>GPU:</strong> Renders 3D graphics and parallel tasks</li>
                            <li><strong>I/O Devices:</strong> Allow interaction with environment</li>
                        </ul>
                    `
                },
                {
                    title: "System Limitations",
                    content: `
                        <h3>Finite Resources</h3>
                        <ul>
                            <li><strong>Limited RAM:</strong> Cannot hold unlimited programs</li>
                            <li><strong>CPU Cycles:</strong> Finite processing power</li>
                            <li><strong>Storage Capacity:</strong> Limited disk space</li>
                            <li><strong>Network Bandwidth:</strong> Fixed connection speed</li>
                        </ul>
                        
                        <h3>Physical Constraints</h3>
                        <ul>
                            <li><strong>Power Consumption:</strong> Limited battery/electrical supply</li>
                            <li><strong>Heat Generation:</strong> Components can overheat</li>
                            <li><strong>Cost:</strong> Expensive to add more resources</li>
                            <li><strong>Size:</strong> Physical limitations in devices</li>
                        </ul>
                        
                        <h3>Shared Use Requirements</h3>
                        <ul>
                            <li>Many processes must compete for resources</li>
                            <li>Need fair allocation mechanisms</li>
                            <li>Must prevent resource monopolization</li>
                            <li>Requires conflict resolution strategies</li>
                        </ul>
                        
                        <h3>Performance Bottlenecks</h3>
                        <ul>
                            <li><strong>Slow Disk:</strong> I/O operations can be limiting</li>
                            <li><strong>Weak CPU:</strong> Insufficient processing power</li>
                            <li><strong>Small Memory:</strong> Excessive paging/swapping</li>
                            <li><strong>Network Latency:</strong> Slow communication</li>
                        </ul>
                        
                        <p><strong>Understanding limitations helps design efficient systems.</strong></p>
                    `
                },
                {
                    title: "Resource Problems",
                    content: `
                        <h3>Deadlock</h3>
                        <ul>
                            <li>Processes wait forever for each other's resources</li>
                            <li>Circular dependency prevents progress</li>
                            <li>Example: Process A needs Resource B, Process B needs Resource A</li>
                            <li>System becomes unresponsive</li>
                        </ul>
                        
                        <h3>Starvation</h3>
                        <ul>
                            <li>Some processes never get needed resources</li>
                            <li>Higher priority processes continuously get resources</li>
                            <li>Low priority processes are indefinitely delayed</li>
                            <li>Can lead to system inefficiency</li>
                        </ul>
                        
                        <h3>Thrashing</h3>
                        <ul>
                            <li>System spends more time swapping than executing</li>
                            <li>Excessive paging between RAM and disk</li>
                            <li>Severely degrades performance</li>
                            <li>Usually caused by insufficient memory</li>
                        </ul>
                        
                        <h3>Resource Leakage</h3>
                        <ul>
                            <li>Allocated resources not properly released</li>
                            <li>Gradual resource depletion over time</li>
                            <li>Memory leaks are most common</li>
                            <li>Can eventually crash the system</li>
                        </ul>
                        
                        <h3>Prevention Strategies</h3>
                        <ul>
                            <li>Deadlock detection and recovery</li>
                            <li>Priority aging to prevent starvation</li>
                            <li>Adequate memory allocation</li>
                            <li>Proper resource cleanup in programs</li>
                        </ul>
                    `
                },
                {
                    title: "Operating System Responsibilities",
                    content: `
                        <h3>Core OS Functions</h3>
                        <p>The operating system acts as mediator between hardware and users/programs, managing resources efficiently and securely.</p>
                        
                        <h3>Memory Management</h3>
                        <ul>
                            <li>Allocates RAM fairly to processes</li>
                            <li>Manages paging and virtual memory</li>
                            <li>Prevents memory conflicts between programs</li>
                            <li>Handles memory deallocation when programs finish</li>
                        </ul>
                        
                        <h3>Device Management</h3>
                        <ul>
                            <li>Uses drivers to interface with hardware</li>
                            <li>Handles interrupts from devices</li>
                            <li>Manages device queues and access</li>
                            <li>Provides standardized interface for programs</li>
                        </ul>
                        
                        <h3>Security</h3>
                        <ul>
                            <li>Authentication (passwords, biometrics)</li>
                            <li>Authorization (permissions, user roles)</li>
                            <li>Encryption and firewalls</li>
                            <li>Audit trails and logging</li>
                        </ul>
                        
                        <h3>User Interface</h3>
                        <ul>
                            <li>CLI (command-line interface)</li>
                            <li>GUI (graphical user interface)</li>
                            <li>Provides interaction methods</li>
                        </ul>
                        
                        <h3>Multitasking</h3>
                        <ul>
                            <li>Allows concurrent execution of tasks</li>
                            <li>Schedules CPU time slices</li>
                            <li>Creates illusion of simultaneous execution</li>
                        </ul>
                    `
                },
                {
                    title: "Memory Management Details",
                    content: `
                        <h3>RAM Allocation</h3>
                        <ul>
                            <li>Fair distribution among active processes</li>
                            <li>Prevents one program from using all memory</li>
                            <li>Dynamic allocation as programs start/stop</li>
                            <li>Memory protection between processes</li>
                        </ul>
                        
                        <h3>Virtual Memory</h3>
                        <ul>
                            <li>Extends RAM using disk storage</li>
                            <li>Allows more programs to run simultaneously</li>
                            <li>Swaps inactive pages between RAM and disk</li>
                            <li>Can cause thrashing if overused</li>
                        </ul>
                        
                        <h3>Paging</h3>
                        <ul>
                            <li>Memory split into fixed-size blocks (pages)</li>
                            <li>Enables efficient memory allocation</li>
                            <li>Supports virtual memory systems</li>
                            <li>Reduces external fragmentation</li>
                        </ul>
                        
                        <h3>Segmentation</h3>
                        <ul>
                            <li>Variable-sized logical blocks</li>
                            <li>Code, stack, heap segments</li>
                            <li>Represents different parts of program memory</li>
                            <li>More intuitive than paging</li>
                        </ul>
                        
                        <h3>Memory Protection</h3>
                        <ul>
                            <li>Prevents processes from accessing each other's memory</li>
                            <li>Hardware and software protection mechanisms</li>
                            <li>Essential for system stability</li>
                        </ul>
                    `
                },
                {
                    title: "Device Management Details",
                    content: `
                        <h3>Device Drivers</h3>
                        <ul>
                            <li>Software bridging OS and specific hardware</li>
                            <li>Enables plug-and-play functionality</li>
                            <li>Provides standardized interface</li>
                            <li>Handles hardware-specific operations</li>
                        </ul>
                        
                        <h3>Interrupt Handling</h3>
                        <ul>
                            <li>Signals CPU of urgent events</li>
                            <li>Examples: keyboard input, printer ready, hardware fault</li>
                            <li>Allows efficient I/O operations</li>
                            <li>Higher priority than regular processes</li>
                        </ul>
                        
                        <h3>Polling vs Interrupts</h3>
                        <ul>
                            <li><strong>Polling:</strong> CPU repeatedly checks device status</li>
                            <li><strong>Interrupts:</strong> Device signals CPU when ready</li>
                            <li>Interrupts more efficient than polling</li>
                            <li>Polling simpler but wasteful of CPU time</li>
                        </ul>
                        
                        <h3>Device Queues</h3>
                        <ul>
                            <li>Manages requests for device access</li>
                            <li>Prevents conflicts between processes</li>
                            <li>Implements fair scheduling for devices</li>
                            <li>Handles device busy conditions</li>
                        </ul>
                        
                        <h3>I/O Management</h3>
                        <ul>
                            <li>Coordinates input/output operations</li>
                            <li>Buffers data between devices and memory</li>
                            <li>Handles different device speeds</li>
                        </ul>
                    `
                },
                {
                    title: "Security Functions",
                    content: `
                        <h3>Authentication</h3>
                        <ul>
                            <li>Verifies user identity</li>
                            <li>Methods: passwords, biometrics, smart cards</li>
                            <li>Prevents unauthorized access</li>
                            <li>Multi-factor authentication for high security</li>
                        </ul>
                        
                        <h3>Authorization</h3>
                        <ul>
                            <li>Controls what authenticated users can do</li>
                            <li>File permissions (read, write, execute)</li>
                            <li>User roles and privileges</li>
                            <li>Principle of least privilege</li>
                        </ul>
                        
                        <h3>Encryption</h3>
                        <ul>
                            <li>Protects data in storage and transmission</li>
                            <li>Symmetric and asymmetric encryption</li>
                            <li>Digital certificates and signatures</li>
                            <li>Secure communication protocols</li>
                        </ul>
                        
                        <h3>Firewalls</h3>
                        <ul>
                            <li>Network security barriers</li>
                            <li>Filters incoming and outgoing traffic</li>
                            <li>Blocks unauthorized network access</li>
                            <li>Can be hardware or software based</li>
                        </ul>
                        
                        <h3>Audit and Logging</h3>
                        <ul>
                            <li>Records system activities</li>
                            <li>Security event monitoring</li>
                            <li>Compliance and forensic analysis</li>
                            <li>Intrusion detection systems</li>
                        </ul>
                    `
                },
                {
                    title: "User Interface Types",
                    content: `
                        <h3>Command-Line Interface (CLI)</h3>
                        <ul>
                            <li>Text-based interaction with system</li>
                            <li>Commands typed at prompt</li>
                            <li>Powerful for advanced users</li>
                            <li>Examples: Windows Command Prompt, Unix shell</li>
                        </ul>
                        
                        <h3>Graphical User Interface (GUI)</h3>
                        <ul>
                            <li>Visual interaction with windows, icons, menus</li>
                            <li>Point-and-click operations</li>
                            <li>User-friendly for beginners</li>
                            <li>Examples: Windows desktop, macOS, Linux desktops</li>
                        </ul>
                        
                        <h3>GUI Components</h3>
                        <ul>
                            <li><strong>Windows:</strong> Individual application areas</li>
                            <li><strong>Icons:</strong> Visual representations of files/programs</li>
                            <li><strong>Menus:</strong> Hierarchical command structures</li>
                            <li><strong>Pointers:</strong> Mouse cursor for interaction</li>
                        </ul>
                        
                        <h3>Modern Interface Trends</h3>
                        <ul>
                            <li>Touch interfaces for mobile devices</li>
                            <li>Voice commands and speech recognition</li>
                            <li>Gesture-based controls</li>
                            <li>Virtual and augmented reality interfaces</li>
                        </ul>
                        
                        <h3>Accessibility Features</h3>
                        <ul>
                            <li>Screen readers for visually impaired</li>
                            <li>High contrast modes</li>
                            <li>Keyboard navigation alternatives</li>
                            <li>Text size and color adjustments</li>
                        </ul>
                    `
                },
                {
                    title: "Multitasking and Scheduling",
                    content: `
                        <h3>Multitasking Concept</h3>
                        <ul>
                            <li>Concurrent execution of multiple tasks</li>
                            <li>CPU switches rapidly between processes</li>
                            <li>Creates illusion of simultaneous execution</li>
                            <li>Essential for modern computing</li>
                        </ul>
                        
                        <h3>CPU Scheduling</h3>
                        <ul>
                            <li>Determines which process runs next</li>
                            <li>Manages time slices (quantum)</li>
                            <li>Prevents process monopolization</li>
                            <li>Optimizes system performance</li>
                        </ul>
                        
                        <h3>Context Switching</h3>
                        <ul>
                            <li>Process of switching between processes</li>
                            <li>Saves current process state</li>
                            <li>Loads next process state</li>
                            <li>Overhead cost of multitasking</li>
                        </ul>
                        
                        <h3>Process States</h3>
                        <ul>
                            <li><strong>Running:</strong> Currently executing on CPU</li>
                            <li><strong>Ready:</strong> Waiting for CPU time</li>
                            <li><strong>Blocked:</strong> Waiting for I/O or other resource</li>
                            <li><strong>Terminated:</strong> Process completed</li>
                        </ul>
                        
                        <h3>Benefits of Multitasking</h3>
                        <ul>
                            <li>Improved system utilization</li>
                            <li>Better user responsiveness</li>
                            <li>Ability to run multiple applications</li>
                            <li>Background processing capabilities</li>
                        </ul>
                    `
                },
                {
                    title: "Scheduling Algorithms",
                    content: `
                        <h3>Round-Robin Scheduling</h3>
                        <ul>
                            <li>Equal time slices for all processes</li>
                            <li>Circular queue implementation</li>
                            <li>Ensures fair CPU allocation</li>
                            <li>Prevents process monopolization</li>
                            <li>Good for interactive systems</li>
                        </ul>
                        
                        <h3>Priority-Based Scheduling</h3>
                        <ul>
                            <li>Higher priority jobs run first</li>
                            <li>System vs user process priorities</li>
                            <li>Can lead to starvation of low priority processes</li>
                            <li>Used in real-time systems</li>
                        </ul>
                        
                        <h3>First-Come, First-Served (FCFS)</h3>
                        <ul>
                            <li>Processes run in arrival order</li>
                            <li>Simple queue-based implementation</li>
                            <li>Can cause convoy effect</li>
                            <li>Non-preemptive scheduling</li>
                        </ul>
                        
                        <h3>Shortest-Job-First (SJF)</h3>
                        <ul>
                            <li>Prioritizes shortest expected execution time</li>
                            <li>Minimizes average wait time</li>
                            <li>Difficult to predict job length</li>
                            <li>Optimal for batch systems</li>
                        </ul>
                        
                        <h3>Scheduling Criteria</h3>
                        <ul>
                            <li><strong>CPU Utilization:</strong> Keep CPU busy</li>
                            <li><strong>Throughput:</strong> Jobs completed per time unit</li>
                            <li><strong>Turnaround Time:</strong> Total time from submission to completion</li>
                            <li><strong>Waiting Time:</strong> Time spent waiting in ready queue</li>
                            <li><strong>Response Time:</strong> Time from request to first response</li>
                        </ul>
                    `
                },
                {
                    title: "Dedicated Operating Systems",
                    content: `
                        <h3>Real-Time Operating System (RTOS)</h3>
                        <ul>
                            <li>Handles critical tasks with strict timing requirements</li>
                            <li>Used in aircraft, medical devices, industrial control</li>
                            <li>Guaranteed response times</li>
                            <li>Hard vs soft real-time requirements</li>
                        </ul>
                        
                        <h3>Single-User Operating System</h3>
                        <ul>
                            <li>Supports one user at a time</li>
                            <li>Found on personal computers and laptops</li>
                            <li>Optimized for personal productivity</li>
                            <li>Examples: Windows, macOS, Linux desktop</li>
                        </ul>
                        
                        <h3>Multi-User Operating System</h3>
                        <ul>
                            <li>Supports multiple simultaneous users</li>
                            <li>Resource sharing and isolation</li>
                            <li>Used on servers and mainframes</li>
                            <li>Examples: Linux servers, Unix, Windows Server</li>
                        </ul>
                        
                        <h3>Embedded Operating System</h3>
                        <ul>
                            <li>Designed for specialized devices</li>
                            <li>Limited resources and specific functions</li>
                            <li>Used in cars, washing machines, IoT devices</li>
                            <li>Real-time constraints often required</li>
                        </ul>
                        
                        <h3>Advantages of Dedicated OS</h3>
                        <ul>
                            <li><strong>Optimized:</strong> Tailored for specific purpose</li>
                            <li><strong>Efficient:</strong> No unnecessary features</li>
                            <li><strong>Reliable:</strong> Focused functionality</li>
                            <li><strong>Predictable:</strong> Consistent performance</li>
                        </ul>
                        
                        <h3>Disadvantages of Dedicated OS</h3>
                        <ul>
                            <li><strong>Inflexible:</strong> Limited to specific tasks</li>
                            <li><strong>Limited Support:</strong> Fewer hardware drivers</li>
                            <li><strong>Costly:</strong> Expensive to design and maintain</li>
                            <li><strong>Specialized:</strong> Requires expert knowledge</li>
                        </ul>
                    `
                },
                {
                    title: "Abstraction and Virtualization",
                    content: `
                        <h3>Abstraction</h3>
                        <ul>
                            <li>Hides hardware complexity from users/programmers</li>
                            <li>Provides simple interfaces for complex operations</li>
                            <li>Example: Store a "file" instead of managing disk sectors</li>
                            <li>Makes computing more accessible and manageable</li>
                        </ul>
                        
                        <h3>Benefits of Abstraction</h3>
                        <ul>
                            <li><strong>Simplicity:</strong> Easier to understand and use</li>
                            <li><strong>Portability:</strong> Code works on different hardware</li>
                            <li><strong>Maintainability:</strong> Changes hidden from users</li>
                            <li><strong>Productivity:</strong> Focus on application logic</li>
                        </ul>
                        
                        <h3>Virtualization</h3>
                        <ul>
                            <li>OS emulates hardware or resources</li>
                            <li>Creates virtual environments</li>
                            <li>Enables resource sharing and isolation</li>
                            <li>Foundation for cloud computing</li>
                        </ul>
                        
                        <h3>Virtual Machine Examples</h3>
                        <ul>
                            <li><strong>VMware, VirtualBox:</strong> Run multiple OS on same hardware</li>
                            <li><strong>Virtual Memory:</strong> Extend RAM using disk</li>
                            <li><strong>Cloud Computing:</strong> Virtual servers and infrastructure</li>
                            <li><strong>Containers:</strong> Lightweight virtualization (Docker)</li>
                        </ul>
                        
                        <h3>Cloud Computing</h3>
                        <ul>
                            <li>Virtual servers, storage, and networks</li>
                            <li>Multiple users share physical infrastructure</li>
                            <li>Maintains isolation between users</li>
                            <li>Scalable and cost-effective</li>
                        </ul>
                        
                        <h3>Benefits of Virtualization</h3>
                        <ul>
                            <li><strong>Resource Efficiency:</strong> Better hardware utilization</li>
                            <li><strong>Isolation:</strong> Secure separation of environments</li>
                            <li><strong>Flexibility:</strong> Easy to create/modify environments</li>
                            <li><strong>Cost Savings:</strong> Reduced hardware requirements</li>
                        </ul>
                    `
                },
                {
                    title: "Summary and Best Practices",
                    content: `
                        <h3>Key Takeaways</h3>
                        <ul>
                            <li>Resources include memory, CPU, storage, devices</li>
                            <li>OS manages allocation, security, and scheduling</li>
                            <li>Problems include deadlock, starvation, thrashing</li>
                            <li>Techniques: scheduling, paging, interrupts, virtualization</li>
                        </ul>
                        
                        <h3>Resource Management Principles</h3>
                        <ul>
                            <li><strong>Fair Allocation:</strong> Prevent resource monopolization</li>
                            <li><strong>Efficient Use:</strong> Maximize system performance</li>
                            <li><strong>Security:</strong> Controlled access to resources</li>
                            <li><strong>Reliability:</strong> Prevent system failures</li>
                        </ul>
                        
                        <h3>Best Practices</h3>
                        <ul>
                            <li>Monitor resource usage regularly</li>
                            <li>Implement proper resource cleanup</li>
                            <li>Use appropriate scheduling algorithms</li>
                            <li>Design systems with resource limitations in mind</li>
                        </ul>
                        
                        <h3>Common Issues to Avoid</h3>
                        <ul>
                            <li>Memory leaks in programs</li>
                            <li>Resource deadlocks</li>
                            <li>Inadequate memory allocation</li>
                            <li>Poor scheduling algorithm choices</li>
                        </ul>
                        
                        <h3>Future Considerations</h3>
                        <ul>
                            <li>Cloud computing and distributed systems</li>
                            <li>Mobile device resource constraints</li>
                            <li>Green computing and energy efficiency</li>
                            <li>Real-time system requirements</li>
                        </ul>
                        
                        <p><strong>Efficient resource management makes computers usable, scalable, and reliable.</strong></p>
                    `
                }
            ]
        },
        "control": {
            title: "🎮 Control Systems: Automation and Intelligence",
            slides: [
                {
                    title: "Topic 7: Control Systems",
                    content: `
                        <h3>🎮 Control Systems: Automation and Intelligence</h3>
                        <p><strong>Topic 7 of the IB Computer Science HL Curriculum</strong></p>
                        <p>This topic covers control systems, automation, and how computers can manage and regulate other devices and systems.</p>
                        
                        <h3>What are Control Systems?</h3>
                        <p>A control system manages, directs, or regulates other devices or systems. It can be manual (human-controlled) or automated (machine-controlled).</p>
                        
                        <h3>Modern Society Dependence</h3>
                        <p>Modern society relies heavily on automated control systems, from traffic lights to medical devices. These systems ensure safety, efficiency, and convenience in daily life.</p>
                        
                        <h3>Key Characteristics</h3>
                        <ul>
                            <li><strong>Management:</strong> Directs system behavior</li>
                            <li><strong>Regulation:</strong> Maintains desired performance</li>
                            <li><strong>Automation:</strong> Reduces human intervention</li>
                            <li><strong>Reliability:</strong> Consistent operation</li>
                        </ul>
                        
                        <h3>Applications</h3>
                        <ul>
                            <li>Traffic management systems</li>
                            <li>Medical devices and monitoring</li>
                            <li>Industrial automation</li>
                            <li>Smart home systems</li>
                        </ul>
                    `
                },
                {
                    title: "Examples of Control Systems",
                    content: `
                        <h3>Automatic Doors</h3>
                        <ul>
                            <li>Sensors detect motion</li>
                            <li>Processor activates motor</li>
                            <li>Door opens automatically</li>
                            <li>Demonstrates sensor-processor-output cycle</li>
                        </ul>
                        
                        <h3>Heating Systems</h3>
                        <ul>
                            <li>Thermostat measures temperature</li>
                            <li>Processor controls heater</li>
                            <li>Maintains desired temperature</li>
                            <li>Shows feedback control principles</li>
                        </ul>
                        
                        <h3>Elevators</h3>
                        <ul>
                            <li>Input buttons for floor selection</li>
                            <li>Processor decides optimal floor order</li>
                            <li>Motor moves cabin efficiently</li>
                            <li>Optimizes travel time and energy</li>
                        </ul>
                        
                        <h3>Robots</h3>
                        <ul>
                            <li>Sensors + actuators enable autonomous behavior</li>
                            <li>Processors coordinate sensor data</li>
                            <li>Perform physical actions</li>
                            <li>Adapt to changing environments</li>
                        </ul>
                        
                        <h3>GPS Systems</h3>
                        <ul>
                            <li>Track and guide users</li>
                            <li>Process location data</li>
                            <li>Provide navigation instructions</li>
                            <li>Real-time route optimization</li>
                        </ul>
                    `
                },
                {
                    title: "Microprocessors in Control Systems",
                    content: `
                        <h3>What are Microprocessors?</h3>
                        <ul>
                            <li>General-purpose processors (CPU on a chip)</li>
                            <li>Found in PCs, smartphones, laptops</li>
                            <li>Execute broad range of programs</li>
                            <li>High versatility and flexibility</li>
                        </ul>
                        
                        <h3>Characteristics</h3>
                        <ul>
                            <li><strong>Versatile:</strong> Handle multiple applications</li>
                            <li><strong>Powerful:</strong> High processing capability</li>
                            <li><strong>Flexible:</strong> Programmable for various tasks</li>
                            <li><strong>Complex:</strong> Sophisticated architecture</li>
                        </ul>
                        
                        <h3>Applications</h3>
                        <ul>
                            <li>Personal computers and laptops</li>
                            <li>Smartphones and tablets</li>
                            <li>Gaming consoles</li>
                            <li>High-performance control systems</li>
                        </ul>
                        
                        <h3>Advantages</h3>
                        <ul>
                            <li>Broad application range</li>
                            <li>High processing power</li>
                            <li>Extensive software support</li>
                            <li>Upgradeable and flexible</li>
                        </ul>
                    `
                },
                {
                    title: "Microcontrollers in Control Systems",
                    content: `
                        <h3>What are Microcontrollers?</h3>
                        <ul>
                            <li>Specialized processors with integrated memory + I/O ports</li>
                            <li>Designed for specific control tasks</li>
                            <li>Found in washing machines, cars, microwave ovens</li>
                            <li>Small, cheap, energy-efficient</li>
                        </ul>
                        
                        <h3>Key Features</h3>
                        <ul>
                            <li><strong>Integrated:</strong> CPU + memory + I/O in one chip</li>
                            <li><strong>Specialized:</strong> Task-focused design</li>
                            <li><strong>Efficient:</strong> Low power consumption</li>
                            <li><strong>Compact:</strong> Small physical size</li>
                        </ul>
                        
                        <h3>Applications</h3>
                        <ul>
                            <li>Home appliances (washing machines, ovens)</li>
                            <li>Automotive systems</li>
                            <li>IoT devices</li>
                            <li>Industrial control systems</li>
                        </ul>
                        
                        <h3>Microprocessors vs Microcontrollers</h3>
                        <p><strong>Microprocessors:</strong> Versatile, general-purpose<br>
                        <strong>Microcontrollers:</strong> Task-focused, specialized</p>
                        
                        <h3>Advantages</h3>
                        <ul>
                            <li>Cost-effective for specific tasks</li>
                            <li>Low power consumption</li>
                            <li>Simple integration</li>
                            <li>Reliable for embedded applications</li>
                        </ul>
                    `
                },
                {
                    title: "Input Devices in Control Systems",
                    content: `
                        <h3>Evaluating Input Devices</h3>
                        <p>Choose input devices based on specific requirements and system needs.</p>
                        
                        <h3>Key Evaluation Criteria</h3>
                        <ul>
                            <li><strong>Accuracy:</strong> Precision of data capture</li>
                            <li><strong>Range:</strong> Minimum/maximum values measurable</li>
                            <li><strong>Frequency:</strong> How often data is collected (real-time vs periodic)</li>
                        </ul>
                        
                        <h3>Accuracy Considerations</h3>
                        <ul>
                            <li>High accuracy needed for critical applications</li>
                            <li>Medical devices require precise measurements</li>
                            <li>General monitoring may accept lower accuracy</li>
                            <li>Cost vs accuracy trade-offs</li>
                        </ul>
                        
                        <h3>Range Requirements</h3>
                        <ul>
                            <li>Temperature sensor: -40°C to 125°C</li>
                            <li>Pressure sensor: 0-1000 psi</li>
                            <li>Light sensor: 0-100,000 lux</li>
                            <li>Determines application suitability</li>
                        </ul>
                        
                        <h3>Frequency of Data Collection</h3>
                        <ul>
                            <li><strong>Real-time:</strong> Critical monitoring applications</li>
                            <li><strong>Periodic:</strong> Routine measurements</li>
                            <li><strong>Event-driven:</strong> Triggered by specific conditions</li>
                            <li>Affects processor load and responsiveness</li>
                        </ul>
                        
                        <h3>Examples</h3>
                        <ul>
                            <li>Temperature sensor: wide range, frequent readings</li>
                            <li>Motion sensor: less frequent, event-driven</li>
                            <li>Pressure sensor: continuous monitoring</li>
                        </ul>
                    `
                },
                {
                    title: "Sensor-Processor-Output Relationship",
                    content: `
                        <h3>Basic Control Cycle</h3>
                        <p>This cycle is at the heart of all control systems, forming the fundamental relationship between system components.</p>
                        
                        <h3>Sensor Component</h3>
                        <ul>
                            <li>Detects environment conditions (e.g., temperature)</li>
                            <li>Converts physical phenomena to electrical signals</li>
                            <li>Examples: temperature, light, pressure, motion sensors</li>
                            <li>Provides input data to the system</li>
                        </ul>
                        
                        <h3>Processor Component</h3>
                        <ul>
                            <li>Interprets input data</li>
                            <li>Applies control algorithms</li>
                            <li>Makes decisions based on programmed logic</li>
                            <li>Determines appropriate responses</li>
                        </ul>
                        
                        <h3>Output Transducer Component</h3>
                        <ul>
                            <li>Performs physical actions (e.g., motor, heater, buzzer)</li>
                            <li>Executes processor commands</li>
                            <li>Examples: motors for movement, heaters for temperature control</li>
                            <li>Completes the control cycle</li>
                        </ul>
                        
                        <h3>System Flow</h3>
                        <p><strong>Environment → Sensor → Processor → Output Transducer → Environment</strong></p>
                        
                        <h3>Continuous Operation</h3>
                        <ul>
                            <li>Cycle repeats continuously</li>
                            <li>Real-time response to changes</li>
                            <li>Maintains desired system behavior</li>
                            <li>Adapts to environmental variations</li>
                        </ul>
                    `
                },
                {
                    title: "Open-Loop Control Systems",
                    content: `
                        <h3>Open-Loop System Characteristics</h3>
                        <ul>
                            <li>No feedback from output to input</li>
                            <li>Predetermined actions regardless of results</li>
                            <li>Simple and cost-effective</li>
                            <li>Limited adaptability</li>
                        </ul>
                        
                        <h3>Example: Microwave Timer</h3>
                        <ul>
                            <li>Timer runs for fixed duration</li>
                            <li>No measurement of food temperature</li>
                            <li>No adjustment based on actual results</li>
                            <li>Simple but potentially inaccurate</li>
                        </ul>
                        
                        <h3>Advantages</h3>
                        <ul>
                            <li>Simple design and implementation</li>
                            <li>Lower cost</li>
                            <li>Predictable behavior</li>
                            <li>No feedback system complexity</li>
                        </ul>
                        
                        <h3>Disadvantages</h3>
                        <ul>
                            <li>Cannot compensate for disturbances</li>
                            <li>No error correction</li>
                            <li>May not achieve desired results</li>
                            <li>Limited adaptability</li>
                        </ul>
                        
                        <h3>Applications</h3>
                        <ul>
                            <li>Simple timing operations</li>
                            <li>Basic on/off controls</li>
                            <li>Sequential operations</li>
                            <li>Low-accuracy requirements</li>
                        </ul>
                        
                        <h3>When to Use</h3>
                        <ul>
                            <li>Simple, well-defined processes</li>
                            <li>Consistent environmental conditions</li>
                            <li>Cost is primary concern</li>
                            <li>High accuracy not required</li>
                        </ul>
                    `
                },
                {
                    title: "Closed-Loop Control Systems",
                    content: `
                        <h3>Closed-Loop System (Feedback Control)</h3>
                        <ul>
                            <li>Output is measured and used to adjust input</li>
                            <li>Continuous monitoring and adjustment</li>
                            <li>Higher accuracy and adaptability</li>
                            <li>More complex but effective</li>
                        </ul>
                        
                        <h3>Example: Thermostat Heating</h3>
                        <ul>
                            <li>Measures current room temperature</li>
                            <li>Compares with desired temperature</li>
                            <li>Adjusts heater based on difference</li>
                            <li>Maintains consistent temperature</li>
                        </ul>
                        
                        <h3>Feedback Benefits</h3>
                        <ul>
                            <li><strong>Improved Accuracy:</strong> Continuous error correction</li>
                            <li><strong>Adaptability:</strong> Responds to environmental changes</li>
                            <li><strong>Disturbance Rejection:</strong> Compensates for external factors</li>
                            <li><strong>Stability:</strong> Maintains desired performance</li>
                        </ul>
                        
                        <h3>System Components</h3>
                        <ul>
                            <li><strong>Setpoint:</strong> Desired output value</li>
                            <li><strong>Sensor:</strong> Measures actual output</li>
                            <li><strong>Comparator:</strong> Calculates error (difference)</li>
                            <li><strong>Controller:</strong> Determines correction needed</li>
                            <li><strong>Actuator:</strong> Implements correction</li>
                        </ul>
                        
                        <h3>Advantages</h3>
                        <ul>
                            <li>High accuracy and precision</li>
                            <li>Automatic error correction</li>
                            <li>Adapts to changing conditions</li>
                            <li>Robust performance</li>
                        </ul>
                        
                        <h3>Disadvantages</h3>
                        <ul>
                            <li>More complex design</li>
                            <li>Higher cost</li>
                            <li>Potential for instability</li>
                            <li>Requires tuning and maintenance</li>
                        </ul>
                    `
                },
                {
                    title: "Social & Ethical Impacts - Positive",
                    content: `
                        <h3>Positive Impacts of Embedded Systems</h3>
                        <p>Embedded control systems provide significant benefits to society while raising important ethical considerations.</p>
                        
                        <h3>Efficiency Improvements</h3>
                        <ul>
                            <li>Automated processes reduce manual labor</li>
                            <li>Optimized resource utilization</li>
                            <li>Reduced waste and energy consumption</li>
                            <li>Increased productivity in manufacturing</li>
                        </ul>
                        
                        <h3>Safety Enhancements</h3>
                        <ul>
                            <li>Car ABS brakes reduce accidents</li>
                            <li>Medical monitoring devices save lives</li>
                            <li>Industrial safety systems prevent injuries</li>
                            <li>Automatic emergency responses</li>
                        </ul>
                        
                        <h3>Precision and Quality</h3>
                        <ul>
                            <li>Consistent product quality</li>
                            <li>Precise medical procedures</li>
                            <li>Accurate measurement and control</li>
                            <li>Reduced human error</li>
                        </ul>
                        
                        <h3>Quality of Life</h3>
                        <ul>
                            <li>Smart home automation</li>
                            <li>Assistive technologies for disabled</li>
                            <li>Environmental monitoring</li>
                            <li>Convenience and comfort</li>
                        </ul>
                        
                        <h3>Economic Benefits</h3>
                        <ul>
                            <li>Increased productivity</li>
                            <li>Lower operational costs</li>
                            <li>New job opportunities in tech</li>
                            <li>Innovation and economic growth</li>
                        </ul>
                    `
                },
                {
                    title: "Social & Ethical Impacts - Negative",
                    content: `
                        <h3>Negative Impacts of Embedded Systems</h3>
                        <p>Society must balance technological benefits with ethical issues and social consequences.</p>
                        
                        <h3>Job Displacement</h3>
                        <ul>
                            <li>Automation eliminates manual jobs</li>
                            <li>Workers need retraining for new skills</li>
                            <li>Economic inequality may increase</li>
                            <li>Traditional industries disrupted</li>
                        </ul>
                        
                        <h3>Privacy Concerns</h3>
                        <ul>
                            <li>GPS tracking and location monitoring</li>
                            <li>Surveillance systems and facial recognition</li>
                            <li>Data collection without consent</li>
                            <li>Personal information exposure</li>
                        </ul>
                        
                        <h3>Technology Dependence</h3>
                        <ul>
                            <li>Reduced human skills and abilities</li>
                            <li>Over-reliance on automated systems</li>
                            <li>Loss of manual problem-solving</li>
                            <li>Vulnerability to system failures</li>
                        </ul>
                        
                        <h3>Ethical Dilemmas</h3>
                        <ul>
                            <li>Autonomous weapons and military systems</li>
                            <li>Algorithmic bias and discrimination</li>
                            <li>Decision-making responsibility</li>
                            <li>Transparency and accountability</li>
                        </ul>
                        
                        <h3>Social Isolation</h3>
                        <ul>
                            <li>Reduced human interaction</li>
                            <li>Digital divide and inequality</li>
                            <li>Loss of community connections</li>
                            <li>Mental health implications</li>
                        </ul>
                        
                        <h3>Balancing Benefits and Risks</h3>
                        <p>Society must carefully consider how to maximize benefits while minimizing negative impacts through thoughtful policy and design.</p>
                    `
                },
                {
                    title: "Centralized Control Systems",
                    content: `
                        <h3>Centralized Systems</h3>
                        <ul>
                            <li>Single central processor controlling all devices</li>
                            <li>Centralized decision-making</li>
                            <li>Simplified management and coordination</li>
                            <li>Single point of control</li>
                        </ul>
                        
                        <h3>Example: Mainframe Computing</h3>
                        <ul>
                            <li>Mainframe controlling multiple terminals</li>
                            <li>Centralized data processing</li>
                            <li>Unified user interface</li>
                            <li>Centralized security and management</li>
                        </ul>
                        
                        <h3>Advantages</h3>
                        <ul>
                            <li><strong>Easier Management:</strong> Single control point</li>
                            <li><strong>Simpler Coordination:</strong> Centralized decisions</li>
                            <li><strong>Consistent Behavior:</strong> Uniform system response</li>
                            <li><strong>Lower Complexity:</strong> Fewer communication protocols</li>
                        </ul>
                        
                        <h3>Disadvantages</h3>
                        <ul>
                            <li><strong>Single Point of Failure:</strong> System vulnerability</li>
                            <li><strong>Limited Scalability:</strong> Central processor bottleneck</li>
                            <li><strong>Performance Bottlenecks:</strong> Processing limitations</li>
                            <li><strong>System-Wide Failures:</strong> Complete system shutdown</li>
                        </ul>
                        
                        <h3>Applications</h3>
                        <ul>
                            <li>Traditional mainframe systems</li>
                            <li>Small-scale control systems</li>
                            <li>Simple automation tasks</li>
                            <li>Centralized monitoring systems</li>
                        </ul>
                        
                        <h3>When to Use</h3>
                        <ul>
                            <li>Small to medium-scale systems</li>
                            <li>Simple coordination requirements</li>
                            <li>Cost-sensitive applications</li>
                            <li>Limited scalability needs</li>
                        </ul>
                    `
                },
                {
                    title: "Distributed Control Systems",
                    content: `
                        <h3>Distributed Systems</h3>
                        <ul>
                            <li>Multiple processors working together</li>
                            <li>Shared tasks and responsibilities</li>
                            <li>Distributed decision-making</li>
                            <li>Networked communication</li>
                        </ul>
                        
                        <h3>Examples</h3>
                        <ul>
                            <li><strong>Internet Servers:</strong> Global distributed network</li>
                            <li><strong>Autonomous Vehicles:</strong> Vehicle-to-vehicle communication</li>
                            <li><strong>Smart Grids:</strong> Distributed energy management</li>
                            <li><strong>Cloud Computing:</strong> Distributed processing power</li>
                        </ul>
                        
                        <h3>Advantages</h3>
                        <ul>
                            <li><strong>Robustness:</strong> No single point of failure</li>
                            <li><strong>Scalability:</strong> Easy to add more processors</li>
                            <li><strong>Fault Tolerance:</strong> System continues with partial failures</li>
                            <li><strong>Performance:</strong> Parallel processing capabilities</li>
                        </ul>
                        
                        <h3>Disadvantages</h3>
                        <ul>
                            <li><strong>Complexity:</strong> Difficult to design and manage</li>
                            <li><strong>Communication Overhead:</strong> Network requirements</li>
                            <li><strong>Synchronization:</strong> Coordination challenges</li>
                            <li><strong>Debugging:</strong> Harder to troubleshoot</li>
                        </ul>
                        
                        <h3>Key Features</h3>
                        <ul>
                            <li>Distributed processing power</li>
                            <li>Fault tolerance and redundancy</li>
                            <li>Load balancing capabilities</li>
                            <li>Scalable architecture</li>
                        </ul>
                        
                        <h3>Applications</h3>
                        <ul>
                            <li>Large-scale industrial systems</li>
                            <li>Internet and web services</li>
                            <li>Autonomous vehicle networks</li>
                            <li>Smart city infrastructure</li>
                        </ul>
                    `
                },
                {
                    title: "Autonomous Agents",
                    content: `
                        <h3>What are Autonomous Agents?</h3>
                        <ul>
                            <li>Software or hardware systems that act independently</li>
                            <li>React to environment and learn from experience</li>
                            <li>Adapt behavior without human intervention</li>
                            <li>Achieve goals through independent action</li>
                        </ul>
                        
                        <h3>Key Characteristics</h3>
                        <ul>
                            <li><strong>Independence:</strong> Operate without constant human control</li>
                            <li><strong>Reactivity:</strong> Respond to environmental changes</li>
                            <li><strong>Learning:</strong> Improve performance through experience</li>
                            <li><strong>Adaptation:</strong> Modify behavior based on feedback</li>
                        </ul>
                        
                        <h3>Examples of Autonomous Agents</h3>
                        <ul>
                            <li><strong>Roomba Vacuum Robots:</strong> Clean floors independently</li>
                            <li><strong>Self-Driving Cars:</strong> Navigate roads autonomously</li>
                            <li><strong>Trading Algorithms:</strong> Make financial decisions</li>
                            <li><strong>Smart Home Systems:</strong> Manage household functions</li>
                        </ul>
                        
                        <h3>Capabilities</h3>
                        <ul>
                            <li>Environmental perception and understanding</li>
                            <li>Decision-making based on goals</li>
                            <li>Learning from past experiences</li>
                            <li>Adaptation to new situations</li>
                        </ul>
                        
                        <h3>Future of AI-Driven Control</h3>
                        <p>Autonomous agents represent the future of AI-driven control, combining traditional control systems with artificial intelligence capabilities for more sophisticated and adaptive behavior.</p>
                        
                        <h3>Applications</h3>
                        <ul>
                            <li>Robotics and automation</li>
                            <li>Autonomous vehicles</li>
                            <li>Smart city management</li>
                            <li>Personal assistants and chatbots</li>
                        </ul>
                    `
                },
                {
                    title: "Summary and Future Directions",
                    content: `
                        <h3>Key Takeaways</h3>
                        <ul>
                            <li>Control systems = sensor-processor-output cycle</li>
                            <li>Microprocessors = general purpose; Microcontrollers = task-specific</li>
                            <li>Feedback distinguishes open vs closed loops</li>
                            <li>Social/ethical impacts must be considered</li>
                            <li>Autonomous agents extend control systems with independence + adaptability</li>
                        </ul>
                        
                        <h3>Control System Fundamentals</h3>
                        <ul>
                            <li><strong>Basic Cycle:</strong> Sensor detection → Processor interpretation → Output action</li>
                            <li><strong>Feedback Systems:</strong> Improve accuracy and adaptability</li>
                            <li><strong>System Architecture:</strong> Centralized vs distributed approaches</li>
                            <li><strong>Input Evaluation:</strong> Accuracy, range, and frequency considerations</li>
                        </ul>
                        
                        <h3>Technology Evolution</h3>
                        <ul>
                            <li>From simple mechanical controls to intelligent systems</li>
                            <li>Integration of AI and machine learning</li>
                            <li>Increased autonomy and adaptability</li>
                            <li>Networked and distributed architectures</li>
                        </ul>
                        
                        <h3>Social Responsibility</h3>
                        <ul>
                            <li>Balance technological benefits with ethical considerations</li>
                            <li>Address job displacement and privacy concerns</li>
                            <li>Ensure equitable access to technology</li>
                            <li>Maintain human oversight and control</li>
                        </ul>
                        
                        <h3>Future Directions</h3>
                        <ul>
                            <li>Increased autonomy in control systems</li>
                            <li>Better integration of AI and control theory</li>
                            <li>Enhanced human-machine collaboration</li>
                            <li>Ethical AI and responsible automation</li>
                        </ul>
                        
                        <p><strong>Control systems continue to evolve, becoming more intelligent, autonomous, and integrated into every aspect of modern life.</strong></p>
                    `
                }
            ]
        },
        "object-oriented-programming": {
            title: "🏗️ Object-Oriented Programming: Building with Objects",
            slides: [
                {
                    title: "Topic 8: Object-Oriented Programming",
                    content: `
                        <h3>🏗️ Object-Oriented Programming: Building with Objects</h3>
                        <p><strong>Topic 8 of the IB Computer Science HL Curriculum</strong></p>
                        <p>This topic covers object-oriented programming principles, design patterns, and how to build maintainable and scalable software systems.</p>
                        
                        <h3>What is Object-Oriented Programming?</h3>
                        <p>Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects" that contain data (attributes) and code (methods). It organizes software design around data and objects rather than functions and logic.</p>
                        
                        <h3>Key Benefits</h3>
                        <ul>
                            <li><strong>Code Reusability:</strong> Write once, use many times</li>
                            <li><strong>Modularity:</strong> Break complex problems into smaller parts</li>
                            <li><strong>Maintainability:</strong> Easier to update and debug</li>
                            <li><strong>Scalability:</strong> Easy to extend and modify</li>
                        </ul>
                        
                        <h3>Real-World Analogy</h3>
                        <p>Think of a car as an object. It has properties (color, model, speed) and behaviors (accelerate, brake, turn). Multiple cars can share the same blueprint (class) but have different values for their properties.</p>
                        
                        <h3>Why Use OOP?</h3>
                        <ul>
                            <li>Models real-world concepts naturally</li>
                            <li>Improves code organization and structure</li>
                            <li>Enables team development</li>
                            <li>Supports large-scale software development</li>
                        </ul>
                    `
                },
                {
                    title: "The Four Pillars of OOP",
                    content: `
                        <h3>1. Encapsulation</h3>
                        <ul>
                            <li>Bundling data and methods together within a class</li>
                            <li>Controlled access through access modifiers</li>
                            <li>Hides internal implementation details</li>
                            <li>Ensures data integrity and security</li>
                        </ul>
                        
                        <h3>2. Inheritance</h3>
                        <ul>
                            <li>Creating new classes based on existing ones</li>
                            <li>Promotes code reusability</li>
                            <li>Establishes "is-a" relationships</li>
                            <li>Child classes inherit parent properties and methods</li>
                        </ul>
                        
                        <h3>3. Polymorphism</h3>
                        <ul>
                            <li>Objects taking different forms</li>
                            <li>Method overriding (runtime polymorphism)</li>
                            <li>Method overloading (compile-time polymorphism)</li>
                            <li>Same interface, different implementations</li>
                        </ul>
                        
                        <h3>4. Abstraction</h3>
                        <ul>
                            <li>Hiding complex implementation details</li>
                            <li>Focus on what an object does, not how</li>
                            <li>Achieved through abstract classes and interfaces</li>
                            <li>Simplifies complex systems</li>
                        </ul>
                    `
                },
                {
                    title: "Classes and Objects",
                    content: `
                        <h3>What is a Class?</h3>
                        <ul>
                            <li>A blueprint or template for creating objects</li>
                            <li>Defines attributes (data fields) and methods (functions)</li>
                            <li>Specifies access modifiers and constructors</li>
                            <li>Acts as a data type for objects</li>
                        </ul>
                        
                        <h3>What is an Object?</h3>
                        <ul>
                            <li>An instance of a class with specific values</li>
                            <li>Has its own state (attribute values) and behavior (methods)</li>
                            <li>Can interact with other objects</li>
                            <li>Exists in memory during program execution</li>
                        </ul>
                        
                        <h3>Class vs Object Analogy</h3>
                        <p><strong>Class:</strong> Cookie cutter (blueprint)<br>
                        <strong>Object:</strong> Individual cookie (instance)</p>
                        
                        <h3>Example Structure</h3>
                        <ul>
                            <li><strong>Class:</strong> Car</li>
                            <li><strong>Attributes:</strong> color, model, speed</li>
                            <li><strong>Methods:</strong> accelerate(), brake(), turn()</li>
                            <li><strong>Objects:</strong> myCar, yourCar, companyCar</li>
                        </ul>
                        
                        <h3>Creating Objects</h3>
                        <ul>
                            <li>Declaration: Car myCar;</li>
                            <li>Instantiation: myCar = new Car();</li>
                            <li>Combined: Car myCar = new Car();</li>
                        </ul>
                    `
                },
                {
                    title: "Encapsulation Deep Dive",
                    content: `
                        <h3>What is Encapsulation?</h3>
                        <p>Encapsulation is the bundling of data and methods together within a class, with controlled access through access modifiers. It's like a capsule that protects and controls access to its contents.</p>
                        
                        <h3>Access Modifiers</h3>
                        <ul>
                            <li><strong>Private:</strong> Accessible only within the same class</li>
                            <li><strong>Protected:</strong> Accessible within class and subclasses</li>
                            <li><strong>Public:</strong> Accessible from anywhere in the program</li>
                            <li><strong>Package-private:</strong> Accessible within the same package</li>
                        </ul>
                        
                        <h3>Data Hiding</h3>
                        <ul>
                            <li>Internal data is kept private</li>
                            <li>Access only through public methods</li>
                            <li>Protects data integrity</li>
                            <li>Prevents unauthorized access</li>
                        </ul>
                        
                        <h3>Getter and Setter Methods</h3>
                        <ul>
                            <li><strong>Getter (Accessor):</strong> Returns private data</li>
                            <li><strong>Setter (Mutator):</strong> Modifies private data</li>
                            <li>Can include validation logic</li>
                            <li>Maintains controlled access</li>
                        </ul>
                        
                        <h3>Benefits of Encapsulation</h3>
                        <ul>
                            <li>Data security and integrity</li>
                            <li>Flexibility in implementation changes</li>
                            <li>Easier debugging and maintenance</li>
                            <li>Better code organization</li>
                        </ul>
                        
                        <h3>Example</h3>
                        <p>Bank account with private balance, public methods for deposit/withdraw with validation</p>
                    `
                },
                {
                    title: "Inheritance Deep Dive",
                    content: `
                        <h3>What is Inheritance?</h3>
                        <p>Inheritance allows a class to inherit properties and methods from another class. The child class (subclass) extends the parent class (superclass), creating an "is-a" relationship.</p>
                        
                        <h3>Key Concepts</h3>
                        <ul>
                            <li><strong>Superclass (Parent):</strong> Base class being inherited</li>
                            <li><strong>Subclass (Child):</strong> Class that inherits</li>
                            <li><strong>Extends:</strong> Keyword for inheritance</li>
                            <li><strong>Single Inheritance:</strong> One parent class only</li>
                        </ul>
                        
                        <h3>Benefits of Inheritance</h3>
                        <ul>
                            <li><strong>Code Reusability:</strong> Don't repeat yourself</li>
                            <li><strong>Hierarchical Classification:</strong> Natural organization</li>
                            <li><strong>Polymorphism:</strong> Enables method overriding</li>
                            <li><strong>Maintainability:</strong> Changes in parent affect all children</li>
                        </ul>
                        
                        <h3>Inheritance Example</h3>
                        <ul>
                            <li><strong>Parent:</strong> Animal (eat, sleep)</li>
                            <li><strong>Child:</strong> Dog (bark, wag tail)</li>
                            <li><strong>Child:</strong> Cat (meow, climb)</li>
                            <li>Both inherit eat() and sleep() from Animal</li>
                        </ul>
                        
                        <h3>The 'super' Keyword</h3>
                        <ul>
                            <li>Refers to the parent class</li>
                            <li>Call parent constructor: super()</li>
                            <li>Access parent methods: super.methodName()</li>
                            <li>Must be first statement in constructor</li>
                        </ul>
                        
                        <h3>Method Overriding</h3>
                        <ul>
                            <li>Subclass provides specific implementation</li>
                            <li>Same method signature as parent</li>
                            <li>Enables runtime polymorphism</li>
                            <li>Use @Override annotation</li>
                        </ul>
                    `
                },
                {
                    title: "Polymorphism Deep Dive",
                    content: `
                        <h3>What is Polymorphism?</h3>
                        <p>Polymorphism allows objects of different classes to be treated as objects of a common parent class. The same interface can have different implementations, enabling flexibility and extensibility.</p>
                        
                        <h3>Types of Polymorphism</h3>
                        <ul>
                            <li><strong>Runtime Polymorphism:</strong> Method overriding</li>
                            <li><strong>Compile-time Polymorphism:</strong> Method overloading</li>
                        </ul>
                        
                        <h3>Method Overriding (Runtime)</h3>
                        <ul>
                            <li>Subclass provides specific implementation</li>
                            <li>Same method signature as parent</li>
                            <li>Actual method called depends on object type</li>
                            <li>Enables dynamic method dispatch</li>
                        </ul>
                        
                        <h3>Method Overloading (Compile-time)</h3>
                        <ul>
                            <li>Multiple methods with same name</li>
                            <li>Different parameters (number, type, order)</li>
                            <li>Compiler determines which method to call</li>
                            <li>Improves code readability</li>
                        </ul>
                        
                        <h3>Polymorphism Example</h3>
                        <ul>
                            <li><strong>Parent:</strong> Shape (draw method)</li>
                            <li><strong>Child:</strong> Circle (overrides draw)</li>
                            <li><strong>Child:</strong> Rectangle (overrides draw)</li>
                            <li>Same method call, different behaviors</li>
                        </ul>
                        
                        <h3>Virtual Methods</h3>
                        <ul>
                            <li>Can be overridden in derived classes</li>
                            <li>Enable runtime polymorphism</li>
                            <li>Method resolution at runtime</li>
                            <li>Default in Java, explicit in C++</li>
                        </ul>
                        
                        <h3>Benefits</h3>
                        <ul>
                            <li>Code flexibility and extensibility</li>
                            <li>Uniform interface for different objects</li>
                            <li>Easier maintenance and updates</li>
                            <li>Natural modeling of real-world scenarios</li>
                        </ul>
                    `
                },
                {
                    title: "Abstraction Deep Dive",
                    content: `
                        <h3>What is Abstraction?</h3>
                        <p>Abstraction hides complex implementation details behind simple interfaces. It focuses on what an object does rather than how it does it, making systems easier to understand and use.</p>
                        
                        <h3>Abstract Classes</h3>
                        <ul>
                            <li>Cannot be instantiated directly</li>
                            <li>May contain abstract methods (no implementation)</li>
                            <li>Can have concrete methods with implementation</li>
                            <li>Can have constructors and instance variables</li>
                            <li>Supports single inheritance</li>
                        </ul>
                        
                        <h3>Interfaces</h3>
                        <ul>
                            <li>Define contracts that classes must implement</li>
                            <li>Contain only method signatures and constants</li>
                            <li>Cannot have constructors or instance variables</li>
                            <li>Support multiple inheritance</li>
                            <li>All methods are implicitly public and abstract</li>
                        </ul>
                        
                        <h3>Abstract Classes vs Interfaces</h3>
                        <table>
                            <tr><th>Feature</th><th>Abstract Class</th><th>Interface</th></tr>
                            <tr><td>Instantiation</td><td>Cannot be instantiated</td><td>Cannot be instantiated</td></tr>
                            <tr><td>Methods</td><td>Abstract + Concrete</td><td>Only signatures</td></tr>
                            <tr><td>Inheritance</td><td>Single</td><td>Multiple</td></tr>
                            <tr><td>Constructors</td><td>Can have</td><td>Cannot have</td></tr>
                            <tr><td>Variables</td><td>Any type</td><td>Only constants</td></tr>
                        </table>
                        
                        <h3>When to Use Abstract Classes</h3>
                        <ul>
                            <li>Share code among related classes</li>
                            <li>Have common state or behavior</li>
                            <li>Want to provide default implementations</li>
                            <li>Need constructors or instance variables</li>
                        </ul>
                        
                        <h3>When to Use Interfaces</h3>
                        <ul>
                            <li>Define contracts for unrelated classes</li>
                            <li>Want multiple inheritance of behavior</li>
                            <li>Need to implement multiple interfaces</li>
                            <li>Define constants that multiple classes use</li>
                        </ul>
                    `
                },
                {
                    title: "Class Relationships",
                    content: `
                        <h3>Types of Class Relationships</h3>
                        <p>Understanding relationships between classes is crucial for designing effective object-oriented systems.</p>
                        
                        <h3>Inheritance (Is-A)</h3>
                        <ul>
                            <li>Represents "is-a" relationship</li>
                            <li>Child class is a type of parent class</li>
                            <li>Example: Dog is-a Animal</li>
                            <li>Single inheritance in most languages</li>
                        </ul>
                        
                        <h3>Composition (Has-A)</h3>
                        <ul>
                            <li>Represents "has-a" relationship</li>
                            <li>Class contains objects of other classes</li>
                            <li>Strong coupling - objects cannot exist independently</li>
                            <li>Example: Car has-a Engine</li>
                        </ul>
                        
                        <h3>Aggregation (Has-A)</h3>
                        <ul>
                            <li>Represents "has-a" relationship</li>
                            <li>Weaker form of composition</li>
                            <li>Objects can exist independently</li>
                            <li>Example: University has-a Student</li>
                        </ul>
                        
                        <h3>Association</h3>
                        <ul>
                            <li>Objects are related but independent</li>
                            <li>Can be one-to-one, one-to-many, or many-to-many</li>
                            <li>Example: Student attends Course</li>
                        </ul>
                        
                        <h3>Composition vs Inheritance</h3>
                        <ul>
                            <li><strong>Composition:</strong> "Has-a" relationship, stronger coupling</li>
                            <li><strong>Inheritance:</strong> "Is-a" relationship, weaker coupling</li>
                            <li><strong>Prefer composition</strong> for flexibility</li>
                            <li><strong>Use inheritance</strong> for true "is-a" relationships</li>
                        </ul>
                        
                        <h3>Benefits of Proper Relationships</h3>
                        <ul>
                            <li>Better code organization</li>
                            <li>Improved maintainability</li>
                            <li>Easier testing and debugging</li>
                            <li>More flexible design</li>
                        </ul>
                    `
                },
                {
                    title: "Advanced OOP Concepts",
                    content: `
                        <h3>Static Members</h3>
                        <ul>
                            <li><strong>Static Variables:</strong> Belong to class, shared by all instances</li>
                            <li><strong>Static Methods:</strong> Called without creating objects</li>
                            <li><strong>Static Blocks:</strong> Execute when class is first loaded</li>
                            <li>Cannot access non-static members directly</li>
                        </ul>
                        
                        <h3>Final Keyword</h3>
                        <ul>
                            <li><strong>Final Variables:</strong> Constants, cannot be modified</li>
                            <li><strong>Final Methods:</strong> Cannot be overridden</li>
                            <li><strong>Final Classes:</strong> Cannot be extended</li>
                            <li>Provides security and immutability</li>
                        </ul>
                        
                        <h3>This Keyword</h3>
                        <ul>
                            <li>Refers to current object instance</li>
                            <li>Distinguish instance variables from parameters</li>
                            <li>Call other constructors: this()</li>
                            <li>Pass current object as parameter</li>
                        </ul>
                        
                        <h3>Packages</h3>
                        <ul>
                            <li>Namespace for organizing classes</li>
                            <li>Avoid naming conflicts</li>
                            <li>Provide access control</li>
                            <li>Improve code maintainability</li>
                        </ul>
                        
                        <h3>Design Patterns</h3>
                        <ul>
                            <li><strong>Singleton:</strong> Single instance of a class</li>
                            <li><strong>Factory:</strong> Create objects without specifying exact class</li>
                            <li><strong>Observer:</strong> One-to-many dependency between objects</li>
                            <li><strong>Strategy:</strong> Define family of algorithms</li>
                        </ul>
                        
                        <h3>Method Chaining</h3>
                        <ul>
                            <li>Multiple method calls in single statement</li>
                            <li>Each method returns an object</li>
                            <li>Enables fluent interfaces</li>
                            <li>Improves code readability</li>
                        </ul>
                    `
                },
                {
                    title: "OOP Design Principles",
                    content: `
                        <h3>SOLID Principles</h3>
                        <p>Five fundamental principles for designing maintainable and scalable object-oriented systems.</p>
                        
                        <h3>S - Single Responsibility Principle</h3>
                        <ul>
                            <li>A class should have only one reason to change</li>
                            <li>One responsibility per class</li>
                            <li>Easier to maintain and test</li>
                            <li>Reduces coupling between classes</li>
                        </ul>
                        
                        <h3>O - Open/Closed Principle</h3>
                        <ul>
                            <li>Open for extension, closed for modification</li>
                            <li>Add new functionality without changing existing code</li>
                            <li>Achieved through inheritance and polymorphism</li>
                            <li>Prevents breaking existing functionality</li>
                        </ul>
                        
                        <h3>L - Liskov Substitution Principle</h3>
                        <ul>
                            <li>Objects of superclass should be replaceable with subclass objects</li>
                            <li>Subclass should not break parent class behavior</li>
                            <li>Ensures proper inheritance design</li>
                            <li>Maintains program correctness</li>
                        </ul>
                        
                        <h3>I - Interface Segregation Principle</h3>
                        <ul>
                            <li>Clients should not depend on interfaces they don't use</li>
                            <li>Many specific interfaces better than one general</li>
                            <li>Reduces coupling and dependencies</li>
                            <li>Improves system flexibility</li>
                        </ul>
                        
                        <h3>D - Dependency Inversion Principle</h3>
                        <ul>
                            <li>Depend on abstractions, not concretions</li>
                            <li>High-level modules should not depend on low-level modules</li>
                            <li>Both should depend on abstractions</li>
                            <li>Enables loose coupling and flexibility</li>
                        </ul>
                        
                        <h3>Benefits of SOLID Principles</h3>
                        <ul>
                            <li>More maintainable code</li>
                            <li>Easier to test and debug</li>
                            <li>Better code reusability</li>
                            <li>Reduced technical debt</li>
                        </ul>
                    `
                },
                {
                    title: "OOP Best Practices",
                    content: `
                        <h3>Class Design</h3>
                        <ul>
                            <li>Keep classes focused and cohesive</li>
                            <li>Use meaningful names for classes and methods</li>
                            <li>Minimize number of parameters in methods</li>
                            <li>Prefer composition over inheritance</li>
                        </ul>
                        
                        <h3>Encapsulation Best Practices</h3>
                        <ul>
                            <li>Make instance variables private</li>
                            <li>Use getters and setters for controlled access</li>
                            <li>Validate data in setter methods</li>
                            <li>Don't expose internal implementation details</li>
                        </ul>
                        
                        <h3>Inheritance Guidelines</h3>
                        <ul>
                            <li>Use inheritance for true "is-a" relationships</li>
                            <li>Don't inherit just to reuse code</li>
                            <li>Keep inheritance hierarchies shallow</li>
                            <li>Consider using interfaces for multiple inheritance</li>
                        </ul>
                        
                        <h3>Polymorphism Tips</h3>
                        <ul>
                            <li>Use method overriding for runtime polymorphism</li>
                            <li>Use method overloading for convenience</li>
                            <li>Design for the interface, not implementation</li>
                            <li>Use abstract classes for shared behavior</li>
                        </ul>
                        
                        <h3>Common Mistakes to Avoid</h3>
                        <ul>
                            <li>Over-engineering simple solutions</li>
                            <li>Creating deep inheritance hierarchies</li>
                            <li>Using inheritance for code reuse only</li>
                            <li>Ignoring access modifiers</li>
                            <li>Not following naming conventions</li>
                        </ul>
                        
                        <h3>Testing OOP Code</h3>
                        <ul>
                            <li>Unit test individual methods</li>
                            <li>Test inheritance relationships</li>
                            <li>Mock dependencies for isolated testing</li>
                            <li>Test polymorphism with different implementations</li>
                        </ul>
                    `
                },
                {
                    title: "OOP vs Other Paradigms",
                    content: `
                        <h3>Object-Oriented vs Procedural</h3>
                        <ul>
                            <li><strong>OOP:</strong> Data and methods together, objects as basic units</li>
                            <li><strong>Procedural:</strong> Data and functions separate, functions as basic units</li>
                            <li><strong>OOP:</strong> Better for large, complex systems</li>
                            <li><strong>Procedural:</strong> Simpler for small, straightforward programs</li>
                        </ul>
                        
                        <h3>OOP Advantages</h3>
                        <ul>
                            <li>Code reusability through inheritance</li>
                            <li>Better organization through encapsulation</li>
                            <li>Flexibility through polymorphism</li>
                            <li>Easier maintenance and debugging</li>
                            <li>Natural modeling of real-world concepts</li>
                        </ul>
                        
                        <h3>OOP Disadvantages</h3>
                        <ul>
                            <li>Increased complexity for simple programs</li>
                            <li>Potential performance overhead</li>
                            <li>Steep learning curve</li>
                            <li>Over-engineering for small applications</li>
                            <li>Memory overhead from object creation</li>
                        </ul>
                        
                        <h3>When to Use OOP</h3>
                        <ul>
                            <li>Large, complex software systems</li>
                            <li>Team development projects</li>
                            <li>Systems requiring frequent updates</li>
                            <li>Applications with complex data relationships</li>
                            <li>GUI applications and frameworks</li>
                        </ul>
                        
                        <h3>When NOT to Use OOP</h3>
                        <ul>
                            <li>Simple, single-purpose scripts</li>
                            <li>Performance-critical applications</li>
                            <li>Small, throwaway programs</li>
                            <li>Systems with simple data flow</li>
                            <li>Legacy systems with procedural code</li>
                        </ul>
                        
                        <h3>Hybrid Approaches</h3>
                        <ul>
                            <li>Use OOP for complex parts</li>
                            <li>Use procedural for simple utilities</li>
                            <li>Combine paradigms as needed</li>
                            <li>Choose based on problem requirements</li>
                        </ul>
                    `
                },
                {
                    title: "Summary and Future Directions",
                    content: `
                        <h3>Key Takeaways</h3>
                        <ul>
                            <li>OOP is based on objects with data and behavior</li>
                            <li>Four pillars: Encapsulation, Inheritance, Polymorphism, Abstraction</li>
                            <li>Classes define blueprints, objects are instances</li>
                            <li>Proper relationships between classes are crucial</li>
                            <li>Design principles guide good OOP practice</li>
                        </ul>
                        
                        <h3>Core Concepts Mastery</h3>
                        <ul>
                            <li><strong>Encapsulation:</strong> Data hiding and controlled access</li>
                            <li><strong>Inheritance:</strong> Code reusability and "is-a" relationships</li>
                            <li><strong>Polymorphism:</strong> Flexibility and extensibility</li>
                            <li><strong>Abstraction:</strong> Simplification of complex systems</li>
                        </ul>
                        
                        <h3>Advanced Topics</h3>
                        <ul>
                            <li>Design patterns and their applications</li>
                            <li>SOLID principles for maintainable code</li>
                            <li>Reflection and meta-programming</li>
                            <li>Concurrent and parallel programming with objects</li>
                        </ul>
                        
                        <h3>Modern OOP Trends</h3>
                        <ul>
                            <li>Functional programming integration</li>
                            <li>Reactive programming with objects</li>
                            <li>Microservices architecture</li>
                            <li>Cloud-native object-oriented applications</li>
                        </ul>
                        
                        <h3>Best Practices Summary</h3>
                        <ul>
                            <li>Design for maintainability and testability</li>
                            <li>Follow SOLID principles</li>
                            <li>Use appropriate design patterns</li>
                            <li>Keep classes focused and cohesive</li>
                            <li>Prefer composition over inheritance</li>
                        </ul>
                        
                        <p><strong>Object-Oriented Programming provides a powerful paradigm for building maintainable, scalable, and robust software systems that model real-world concepts effectively.</strong></p>
                    `
                }
            ]
        }
    }
};

// Make appData globally available
window.appData = appData;