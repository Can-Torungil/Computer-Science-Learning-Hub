// IB Computer Science Learning App - Main Application
class IBComputerScienceApp {
    constructor() {
        this.currentSection = 'home';
        this.currentFlashcardIndex = 0;
        this.currentTestIndex = 0;
        this.testScore = 0;
        this.testAnswers = [];
        this.currentPresentationSlide = 0;
        
        this.initializeApp();
    }

    initializeApp() {
        this.setupNavigation();
        this.setupFlashcards();
        this.setupTests();
        this.setupPresentations();
        this.setupFeatureCards();
    }

    // Navigation System
    setupNavigation() {
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const section = e.currentTarget.dataset.section;
                this.showSection(section);
            });
        });
    }

    showSection(sectionName) {
        // Hide all sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });

        // Remove active class from all nav buttons
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        // Show selected section
        document.getElementById(sectionName).classList.add('active');
        document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');

        this.currentSection = sectionName;
    }

    setupFeatureCards() {
        const featureCards = document.querySelectorAll('.feature-card');
        featureCards.forEach(card => {
            card.addEventListener('click', (e) => {
                const section = e.currentTarget.dataset.section;
                this.showSection(section);
            });
        });
    }

    // Flashcards System
    setupFlashcards() {
        const topicSelect = document.getElementById('flashcard-topic');
        const shuffleBtn = document.getElementById('shuffle-cards');
        const flipBtn = document.getElementById('flip-card');
        const prevBtn = document.getElementById('prev-card');
        const nextBtn = document.getElementById('next-card');
        const flashcard = document.getElementById('flashcard');

        topicSelect.addEventListener('change', () => {
            this.loadFlashcards(topicSelect.value);
        });

        shuffleBtn.addEventListener('click', () => {
            this.shuffleFlashcards();
        });

        flipBtn.addEventListener('click', () => {
            this.flipFlashcard();
        });

        prevBtn.addEventListener('click', () => {
            this.previousFlashcard();
        });

        nextBtn.addEventListener('click', () => {
            this.nextFlashcard();
        });

        flashcard.addEventListener('click', () => {
            this.flipFlashcard();
        });

        // Load initial flashcards
        this.loadFlashcards('all');
    }

    loadFlashcards(topic) {
        let flashcards = [];
        
        if (topic === 'all') {
            Object.values(appData.flashcards).forEach(topicCards => {
                flashcards = flashcards.concat(topicCards);
            });
        } else {
            flashcards = appData.flashcards[topic] || [];
        }

        this.flashcards = flashcards;
        this.currentFlashcardIndex = 0;
        this.showFlashcard();
    }

    shuffleFlashcards() {
        if (this.flashcards && this.flashcards.length > 0) {
            for (let i = this.flashcards.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [this.flashcards[i], this.flashcards[j]] = [this.flashcards[j], this.flashcards[i]];
            }
            this.currentFlashcardIndex = 0;
            this.showFlashcard();
        }
    }

    showFlashcard() {
        const card = document.getElementById('flashcard');
        const question = document.getElementById('card-question');
        const answer = document.getElementById('card-answer');
        const counter = document.getElementById('card-counter');
        const progressFill = document.getElementById('progress-fill');
        const prevBtn = document.getElementById('prev-card');
        const nextBtn = document.getElementById('next-card');

        if (this.flashcards && this.flashcards.length > 0) {
            const currentCard = this.flashcards[this.currentFlashcardIndex];
            question.textContent = `💭 ${currentCard.question}`;
            answer.textContent = `💡 ${currentCard.answer}`;
            
            // Reset card to front
            card.classList.remove('flipped');
            
            // Update counter and progress
            counter.textContent = `${this.currentFlashcardIndex + 1} / ${this.flashcards.length}`;
            const progress = ((this.currentFlashcardIndex + 1) / this.flashcards.length) * 100;
            progressFill.style.width = `${progress}%`;
            
            // Update button states
            prevBtn.disabled = this.currentFlashcardIndex === 0;
            nextBtn.disabled = this.currentFlashcardIndex === this.flashcards.length - 1;
        } else {
            question.textContent = '❌ No flashcards available for this topic';
            answer.textContent = '🔄 Please select a different topic';
            counter.textContent = '0 / 0';
            progressFill.style.width = '0%';
            prevBtn.disabled = true;
            nextBtn.disabled = true;
        }
    }

    flipFlashcard() {
        const card = document.getElementById('flashcard');
        card.classList.toggle('flipped');
    }

    previousFlashcard() {
        if (this.currentFlashcardIndex > 0) {
            this.currentFlashcardIndex--;
            this.showFlashcard();
        }
    }

    nextFlashcard() {
        if (this.currentFlashcardIndex < this.flashcards.length - 1) {
            this.currentFlashcardIndex++;
            this.showFlashcard();
        }
    }

    // Tests System
    setupTests() {
        const startTestBtn = document.getElementById('start-test');
        startTestBtn.addEventListener('click', () => {
            this.startTest();
        });
    }

    startTest() {
        const topicSelect = document.getElementById('test-topic');
        const difficultySelect = document.getElementById('test-difficulty');
        const topic = topicSelect.value;
        const difficulty = difficultySelect.value;

        let questions = [];
        
        if (topic === 'all') {
            Object.values(appData.tests).forEach(topicQuestions => {
                questions = questions.concat(topicQuestions);
            });
        } else {
            questions = appData.tests[topic] || [];
        }

        // Filter by difficulty if not 'all'
        if (difficulty !== 'all') {
            questions = questions.filter(q => q.difficulty === difficulty);
        }

        if (questions.length === 0) {
            alert('No questions available for the selected criteria.');
            return;
        }

        // Shuffle questions and take first 10
        for (let i = questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [questions[i], questions[j]] = [questions[j], questions[i]];
        }
        questions = questions.slice(0, 10);

        this.testQuestions = questions;
        this.currentTestIndex = 0;
        this.testScore = 0;
        this.testAnswers = [];
        this.showTestQuestion();
    }

    showTestQuestion() {
        const container = document.getElementById('test-container');
        const question = this.testQuestions[this.currentTestIndex];
        
        container.innerHTML = `
            <div class="question-card">
                <div class="question-header">
                    <span class="question-number">Question ${this.currentTestIndex + 1} of ${this.testQuestions.length}</span>
                </div>
                <div class="question-text">${question.question}</div>
                <div class="options">
                    ${question.options.map((option, index) => `
                        <div class="option" data-index="${index}">
                            ${option}
                        </div>
                    `).join('')}
                </div>
                <div class="test-controls">
                    <button id="prev-question" class="btn btn-secondary" ${this.currentTestIndex === 0 ? 'disabled' : ''}>
                        <i class="fas fa-chevron-left"></i> Previous
                    </button>
                    <button id="next-question" class="btn btn-primary" ${this.currentTestIndex === this.testQuestions.length - 1 ? '' : 'disabled'}>
                        ${this.currentTestIndex === this.testQuestions.length - 1 ? 'Finish Test' : 'Next <i class="fas fa-chevron-right"></i>'}
                    </button>
                </div>
            </div>
        `;

        // Add event listeners
        document.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', (e) => {
                this.selectTestAnswer(parseInt(e.currentTarget.dataset.index));
            });
        });

        document.getElementById('prev-question').addEventListener('click', () => {
            this.previousTestQuestion();
        });

        document.getElementById('next-question').addEventListener('click', () => {
            if (this.currentTestIndex === this.testQuestions.length - 1) {
                this.finishTest();
            } else {
                this.nextTestQuestion();
            }
        });

        // Show previous answer if exists
        if (this.testAnswers[this.currentTestIndex] !== undefined) {
            const selectedOption = document.querySelector(`[data-index="${this.testAnswers[this.currentTestIndex]}"]`);
            if (selectedOption) {
                selectedOption.classList.add('selected');
                // Enable next button if there's an answer
                document.getElementById('next-question').disabled = false;
            }
        }
    }

    selectTestAnswer(answerIndex) {
        // Remove previous selection
        document.querySelectorAll('.option').forEach(option => {
            option.classList.remove('selected');
        });

        // Add selection to clicked option
        document.querySelector(`[data-index="${answerIndex}"]`).classList.add('selected');
        
        // Store answer
        this.testAnswers[this.currentTestIndex] = answerIndex;
        
        // Enable next button
        document.getElementById('next-question').disabled = false;
    }

    previousTestQuestion() {
        if (this.currentTestIndex > 0) {
            this.currentTestIndex--;
            this.showTestQuestion();
        }
    }

    nextTestQuestion() {
        if (this.currentTestIndex < this.testQuestions.length - 1) {
            this.currentTestIndex++;
            this.showTestQuestion();
        }
    }

    finishTest() {
        // Calculate score
        this.testScore = 0;
        this.testQuestions.forEach((question, index) => {
            if (this.testAnswers[index] === question.correct) {
                this.testScore++;
            }
        });

        const percentage = Math.round((this.testScore / this.testQuestions.length) * 100);
        const scoreAngle = (percentage / 100) * 360;

        const container = document.getElementById('test-container');
        container.innerHTML = `
            <div class="test-score">
                <h3>Test Complete!</h3>
                <div class="score-circle" style="--score-angle: ${scoreAngle}deg">
                    <div class="score-text">${percentage}%</div>
                </div>
                <p>You scored ${this.testScore} out of ${this.testQuestions.length} questions</p>
                <div class="test-controls">
                    <button id="retake-test" class="btn btn-primary">
                        <i class="fas fa-redo"></i> Retake Test
                    </button>
                    <button id="review-answers" class="btn btn-secondary">
                        <i class="fas fa-eye"></i> Review Answers
                    </button>
                </div>
            </div>
        `;

        document.getElementById('retake-test').addEventListener('click', () => {
            this.startTest();
        });

        document.getElementById('review-answers').addEventListener('click', () => {
            this.reviewTestAnswers();
        });
    }

    reviewTestAnswers() {
        const container = document.getElementById('test-container');
        let reviewHTML = '<div class="test-review"><h3>Answer Review</h3>';

        this.testQuestions.forEach((question, index) => {
            const userAnswer = this.testAnswers[index];
            const isCorrect = userAnswer === question.correct;
            
            reviewHTML += `
                <div class="question-card">
                    <div class="question-header">
                        <span class="question-number">Question ${index + 1}</span>
                        <span class="result-badge ${isCorrect ? 'correct' : 'incorrect'}">
                            ${isCorrect ? 'Correct' : 'Incorrect'}
                        </span>
                    </div>
                    <div class="question-text">${question.question}</div>
                    <div class="options">
                        ${question.options.map((option, optionIndex) => {
                            let className = 'option';
                            if (optionIndex === question.correct) className += ' correct';
                            if (optionIndex === userAnswer && !isCorrect) className += ' incorrect';
                            return `<div class="${className}">${option}</div>`;
                        }).join('')}
                    </div>
                    <div class="explanation">
                        <strong>Explanation:</strong> ${question.explanation}
                    </div>
                </div>
            `;
        });

        reviewHTML += `
            <div class="test-controls">
                <button id="back-to-test" class="btn btn-primary">
                    <i class="fas fa-arrow-left"></i> Back to Tests
                </button>
            </div>
        </div>`;

        container.innerHTML = reviewHTML;

        document.getElementById('back-to-test').addEventListener('click', () => {
            container.innerHTML = `
                <div class="test-welcome">
                    <h3>Ready to test your knowledge?</h3>
                    <p>Select a topic and difficulty level, then click "Start Test" to begin.</p>
                </div>
            `;
        });
    }


    // Presentations System
    setupPresentations() {
        const startBtn = document.getElementById('start-presentation');
        const topicSelect = document.getElementById('presentation-topic');

        startBtn.addEventListener('click', () => {
            this.startPresentation(topicSelect.value);
        });
    }

    startPresentation(topic) {
        const presentation = appData.presentations[topic];
        if (!presentation) {
            alert('No presentation available for this topic.');
            return;
        }

        this.currentPresentation = presentation;
        this.currentPresentationSlide = 0;
        this.displayPresentationSlide();
    }

    displayPresentationSlide() {
        const container = document.getElementById('presentation-container');
        const slide = this.currentPresentation.slides[this.currentPresentationSlide];
        
        container.innerHTML = `
            <div class="presentation-slide active">
                <div class="slide-header">
                    <h2 class="slide-title">📚 ${slide.title}</h2>
                </div>
                <div class="slide-content">
                    ${slide.content}
                </div>
                <div class="presentation-controls">
                    <button id="prev-slide" class="btn btn-secondary" ${this.currentPresentationSlide === 0 ? 'disabled' : ''}>
                        <i class="fas fa-chevron-left"></i> Previous
                    </button>
                    <div class="slide-counter">
                        📄 Slide ${this.currentPresentationSlide + 1} of ${this.currentPresentation.slides.length}
                    </div>
                    <button id="next-slide" class="btn btn-primary" ${this.currentPresentationSlide === this.currentPresentation.slides.length - 1 ? 'disabled' : ''}>
                        Next <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        `;

        // Add event listeners
        document.getElementById('prev-slide').addEventListener('click', () => {
            this.previousPresentationSlide();
        });

        document.getElementById('next-slide').addEventListener('click', () => {
            this.nextPresentationSlide();
        });
    }

    previousPresentationSlide() {
        if (this.currentPresentationSlide > 0) {
            this.currentPresentationSlide--;
            this.displayPresentationSlide();
        }
    }

    nextPresentationSlide() {
        if (this.currentPresentationSlide < this.currentPresentation.slides.length - 1) {
            this.currentPresentationSlide++;
            this.displayPresentationSlide();
        }
    }
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new IBComputerScienceApp();
});
