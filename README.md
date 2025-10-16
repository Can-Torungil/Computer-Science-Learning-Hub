# IB Computer Science Learning Hub

A comprehensive learning application designed specifically for IB Computer Science students. This app provides interactive study tools including flashcards, tests, phrase matching games, and detailed presentations to help students master the IB Computer Science curriculum.

## Features

### 🃏 Interactive Flashcards
- Study key concepts with flipable flashcards
- Filter by topic (Algorithms, Data Structures, Networks, Databases, OOP)
- Shuffle functionality for varied study sessions
- Progress tracking with visual indicators

### 📝 Tests & Quizzes
- Comprehensive question bank covering all IB CS topics
- Multiple difficulty levels (Easy, Medium, Hard)
- Instant feedback with detailed explanations
- Score tracking and answer review
- Randomized question selection

### 🧩 Phrase Matching Game
- Match terms with their definitions
- Interactive drag-and-drop style gameplay
- Progress tracking and statistics
- Topic-specific matching sets

### 📊 Presentation Mode
- Detailed slide-based presentations
- Comprehensive coverage of IB CS topics
- Interactive navigation between slides
- Rich content with code examples and explanations

## Topics Covered

- **Algorithms**: Sorting, searching, complexity analysis
- **Data Structures**: Arrays, linked lists, stacks, queues, trees, hash tables
- **Networks**: TCP/IP, protocols, network topologies, security
- **Databases**: SQL, normalization, ACID properties, relationships
- **Object-Oriented Programming**: Encapsulation, inheritance, polymorphism, abstraction
- **System Fundamentals**: Computer architecture, operating systems, memory management

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software installation required

### Installation & Setup

1. **Clone or download the project files**
   ```bash
   git clone <repository-url>
   cd ib-computer-science-app
   ```

2. **Install dependencies (optional - for development)**
   ```bash
   npm install
   ```

3. **Run the application**
   
   **Option 1: Simple HTTP Server**
   ```bash
   npm start
   ```
   Then open your browser to `http://localhost:3000`

   **Option 2: Live Server (for development)**
   ```bash
   npm run dev
   ```

   **Option 3: Direct File Access**
   Simply open `index.html` in your web browser

## How to Use

### Navigation
- Use the top navigation bar to switch between different study modes
- Click on feature cards on the home page for quick access

### Flashcards
1. Select a topic from the dropdown menu
2. Click "Start" to begin studying
3. Click on cards to flip them and reveal answers
4. Use navigation buttons to move between cards
5. Use "Shuffle" to randomize the order

### Tests
1. Choose your topic and difficulty level
2. Click "Start Test" to begin
3. Select your answer for each question
4. Navigate between questions using Previous/Next buttons
5. Review your score and explanations when finished

### Matching Game
1. Select a topic for the matching game
2. Click "Start Game" to begin
3. Click on a term and its corresponding definition
4. Watch your progress as you match pairs
5. Use "Reset" to start over

### Presentations
1. Choose a presentation topic
2. Click "Start Presentation" to begin
3. Navigate through slides using Previous/Next buttons
4. Study the detailed content and examples

## Technical Details

### Built With
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **Vanilla JavaScript**: No external frameworks, pure ES6+ JavaScript
- **Font Awesome**: Icons for enhanced user interface

### Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Responsive Design
The app is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## File Structure

```
ib-computer-science-app/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── app.js             # Main JavaScript application logic
├── data.js            # IB Computer Science content and data
├── package.json       # Node.js dependencies and scripts
└── README.md          # This documentation file
```

## Customization

### Adding New Content
To add new flashcards, tests, or matching pairs:

1. **Flashcards**: Add new entries to the `appData.flashcards` object in `data.js`
2. **Tests**: Add new questions to the `appData.tests` object in `data.js`
3. **Matching**: Add new pairs to the `appData.matching` object in `data.js`
4. **Presentations**: Add new slides to the `appData.presentations` object in `data.js`

### Styling
Modify `styles.css` to customize:
- Color scheme
- Typography
- Layout and spacing
- Animations and transitions

## Contributing

This is an educational project designed for IB Computer Science students. Contributions are welcome:

1. Fork the repository
2. Create a feature branch
3. Add new content or improve existing features
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For questions or issues:
- Check the browser console for any JavaScript errors
- Ensure you're using a modern web browser
- Verify all files are in the same directory

## Future Enhancements

Potential features for future versions:
- User progress tracking and statistics
- Custom flashcard creation
- Export/import functionality
- Offline mode support
- Additional IB CS topics
- Collaborative study features

---

**Happy Studying!** 🎓

This app is designed to make IB Computer Science learning engaging and effective. Use it regularly to reinforce your understanding of key concepts and prepare for your exams.
