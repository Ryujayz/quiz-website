// Quiz functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get subject from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const subject = urlParams.get('subject');
    
    // If no subject specified, redirect to homepage
    if (!subject || !quizData[subject]) {
        window.location.href = 'index.html';
        return;
    }
    
    // Initialize quiz
    const quiz = quizData[subject];
    let currentQuestionIndex = 0;
    let userAnswers = new Array(quiz.questions.length).fill(null);
    let timeLeft = quiz.timeLimit * 60; // Convert to seconds
    let timerInterval;
    
    // DOM Elements
    const quizTitleElement = document.getElementById('quizTitle');
    const quizDescriptionElement = document.getElementById('quizDescription');
    const questionNumberElement = document.getElementById('questionNumber');
    const questionTextElement = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    const prevButton = document.getElementById('prevBtn');
    const nextButton = document.getElementById('nextBtn');
    const submitButton = document.getElementById('submitBtn');
    const progressFillElement = document.getElementById('progressFill');
    const progressTextElement = document.getElementById('progressText');
    const timerElement = document.getElementById('timer');
    const questionsListElement = document.getElementById('questionsList');
    const resultsModal = document.getElementById('resultsModal');
    
    // Initialize quiz page
    function initQuiz() {
        // Set quiz title and description
        if (quizTitleElement) quizTitleElement.textContent = quiz.title;
        if (quizDescriptionElement) quizDescriptionElement.textContent = quiz.description;
        
        // Start timer
        startTimer();
        
        // Create question indicators
        createQuestionIndicators();
        
        // Load first question
        loadQuestion(currentQuestionIndex);
        
        // Update progress
        updateProgress();
        
        // Set up event listeners for navigation buttons
        if (prevButton) prevButton.addEventListener('click', goToPreviousQuestion);
        if (nextButton) nextButton.addEventListener('click', goToNextQuestion);
        if (submitButton) submitButton.addEventListener('click', showResults);
        
        // Set initial button states
        updateNavigationButtons();
    }
    
    // Start the countdown timer
    function startTimer() {
        updateTimerDisplay();
        
        timerInterval = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();
            
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                showResults();
            }
            
            // Add warning class when time is running low
            if (timeLeft <= 300) { // 5 minutes or less
                if (timerElement) timerElement.classList.add('warning');
            }
        }, 1000);
    }
    
    // Update timer display
    function updateTimerDisplay() {
        if (!timerElement) return;
        
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    
    // Create question indicators
    function createQuestionIndicators() {
        if (!questionsListElement) return;
        
        questionsListElement.innerHTML = '';
        
        quiz.questions.forEach((question, index) => {
            const indicator = document.createElement('div');
            indicator.className = 'question-indicator';
            indicator.textContent = index + 1;
            indicator.addEventListener('click', () => goToQuestion(index));
            
            questionsListElement.appendChild(indicator);
        });
        
        updateQuestionIndicators();
    }
    
    // Update question indicators based on current question and answered status
    function updateQuestionIndicators() {
        const indicators = document.querySelectorAll('.question-indicator');
        
        indicators.forEach((indicator, index) => {
            indicator.classList.remove('current', 'answered');
            
            if (index === currentQuestionIndex) {
                indicator.classList.add('current');
            }
            
            if (userAnswers[index] !== null) {
                indicator.classList.add('answered');
            }
        });
    }
    
    // Load a specific question
    function loadQuestion(index) {
        const question = quiz.questions[index];
        
        // Update question number and text
        if (questionNumberElement) {
            questionNumberElement.textContent = `Soal ${index + 1} dari ${quiz.questions.length}`;
        }
        
        if (questionTextElement) {
            questionTextElement.textContent = question.question;
        }
        
        // Clear and create options
        if (optionsContainer) {
            optionsContainer.innerHTML = '';
            
            question.options.forEach((option, optionIndex) => {
                const optionElement = document.createElement('div');
                optionElement.className = 'option';
                
                if (userAnswers[index] === optionIndex) {
                    optionElement.classList.add('selected');
                }
                
                optionElement.innerHTML = `
                    <div class="option-letter">${String.fromCharCode(65 + optionIndex)}</div>
                    <div class="option-text">${option}</div>
                `;
                
                optionElement.addEventListener('click', () => selectOption(optionIndex));
                optionsContainer.appendChild(optionElement);
            });
        }
        
        // Update question indicators
        updateQuestionIndicators();
        
        // Update navigation buttons
        updateNavigationButtons();
    }
    
    // Select an option for the current question
    function selectOption(optionIndex) {
        userAnswers[currentQuestionIndex] = optionIndex;
        
        // Update UI to show selected option
        const options = document.querySelectorAll('.option');
        options.forEach((option, index) => {
            option.classList.remove('selected');
            if (index === optionIndex) {
                option.classList.add('selected');
            }
        });
        
        // Update question indicators
        updateQuestionIndicators();
        
        // Update progress
        updateProgress();
        
        // Enable next/submit button if answer is selected
        updateNavigationButtons();
    }
    
    // Go to the next question
    function goToNextQuestion() {
        // Check if current question has been answered
        if (userAnswers[currentQuestionIndex] === null) {
            // Show warning message
            showAnswerWarning();
            return;
        }
        
        if (currentQuestionIndex < quiz.questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion(currentQuestionIndex);
        }
    }
    
    // Go to the previous question
    function goToPreviousQuestion() {
        // Allow going back even if not answered
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion(currentQuestionIndex);
        }
    }
    
    // Go to a specific question
    function goToQuestion(index) {
        currentQuestionIndex = index;
        loadQuestion(currentQuestionIndex);
    }
    
    // Show warning if trying to go next without answering
    function showAnswerWarning() {
        // Create warning element
        let warningEl = document.querySelector('.answer-warning');
        
        if (!warningEl) {
            warningEl = document.createElement('div');
            warningEl.className = 'answer-warning';
            warningEl.innerHTML = '<i class="fas fa-exclamation-circle"></i> Pilih jawaban terlebih dahulu sebelum melanjutkan!';
            optionsContainer.parentNode.insertBefore(warningEl, optionsContainer.nextSibling);
            
            // Remove warning after 3 seconds
            setTimeout(() => {
                if (warningEl) {
                    warningEl.style.opacity = '0';
                    warningEl.style.transform = 'translateY(-10px)';
                    setTimeout(() => {
                        if (warningEl && warningEl.parentNode) {
                            warningEl.parentNode.removeChild(warningEl);
                        }
                    }, 300);
                }
            }, 3000);
        }
    }
    
    // Update navigation buttons state
    function updateNavigationButtons() {
        const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;
        const isAnswered = userAnswers[currentQuestionIndex] !== null;
        
        // Update previous button
        if (prevButton) {
            prevButton.disabled = currentQuestionIndex === 0;
            
            // Add/remove style based on state
            if (prevButton.disabled) {
                prevButton.style.opacity = '0.6';
                prevButton.style.cursor = 'not-allowed';
            } else {
                prevButton.style.opacity = '1';
                prevButton.style.cursor = 'pointer';
            }
        }
        
        // Update next/submit button
        if (nextButton && submitButton) {
            // Show/hide appropriate button
            if (isLastQuestion) {
                nextButton.style.display = 'none';
                submitButton.style.display = 'flex';
                
                // Enable/disable submit button
                submitButton.disabled = !isAnswered;
                submitButton.style.opacity = isAnswered ? '1' : '0.6';
                submitButton.style.cursor = isAnswered ? 'pointer' : 'not-allowed';
                submitButton.title = isAnswered ? 'Kumpulkan jawaban' : 'Jawab soal terlebih dahulu';
            } else {
                nextButton.style.display = 'flex';
                submitButton.style.display = 'none';
                
                // Enable/disable next button
                nextButton.disabled = !isAnswered;
                nextButton.style.opacity = isAnswered ? '1' : '0.6';
                nextButton.style.cursor = isAnswered ? 'pointer' : 'not-allowed';
                nextButton.title = isAnswered ? 'Lanjut ke soal berikutnya' : 'Jawab soal terlebih dahulu';
            }
        }
    }
    
    // Update progress bar and text
    function updateProgress() {
        const answeredCount = userAnswers.filter(answer => answer !== null).length;
        const totalQuestions = quiz.questions.length;
        const progressPercentage = (answeredCount / totalQuestions) * 100;
        
        if (progressFillElement) {
            progressFillElement.style.width = `${progressPercentage}%`;
        }
        
        if (progressTextElement) {
            progressTextElement.textContent = `${answeredCount} dari ${totalQuestions} soal terjawab`;
        }
    }
    
    // Calculate and display results
    function showResults() {
        // Check if all questions are answered
        const unansweredQuestions = userAnswers.filter(answer => answer === null).length;
        
        if (unansweredQuestions > 0) {
            if (confirm(`Masih ada ${unansweredQuestions} soal yang belum dijawab. Apakah Anda yakin ingin mengumpulkan?`)) {
                // User confirmed, proceed with submission
                proceedToResults();
            }
            // If user cancels, do nothing
            return;
        }
        
        // All questions answered, proceed
        proceedToResults();
    }
    
    // Proceed to show results
    function proceedToResults() {
        clearInterval(timerInterval);
        
        // Calculate score
        let correctCount = 0;
        quiz.questions.forEach((question, index) => {
            if (userAnswers[index] === question.correctAnswer) {
                correctCount++;
            }
        });
        
        const score = (correctCount / quiz.questions.length) * 100;
        const timeUsed = (quiz.timeLimit * 60) - timeLeft;
        
        // Save results to localStorage
        saveResults(subject, score, correctCount, quiz.questions.length);
        
        // Display results modal
        displayResults(score, correctCount, quiz.questions.length, timeUsed);
    }
    
    // Save results to localStorage
    function saveResults(subject, score, correctCount, totalQuestions) {
        const results = JSON.parse(localStorage.getItem('quizResults') || '{}');
        results[subject] = {
            score: score,
            correct: correctCount,
            total: totalQuestions,
            date: new Date().toISOString()
        };
        localStorage.setItem('quizResults', JSON.stringify(results));
    }
    
    // Display results in modal
    function displayResults(score, correctCount, totalQuestions, timeUsed) {
        if (!resultsModal) return;
        
        // Determine result icon and message
        let resultIcon, resultMessage, resultClass;
        
        if (score >= 90) {
            resultIcon = 'fas fa-trophy';
            resultMessage = 'Luar Biasa!';
            resultClass = 'excellent';
        } else if (score >= 70) {
            resultIcon = 'fas fa-star';
            resultMessage = 'Bagus!';
            resultClass = 'good';
        } else if (score >= 50) {
            resultIcon = 'fas fa-check-circle';
            resultMessage = 'Cukup Baik';
            resultClass = 'average';
        } else {
            resultIcon = 'fas fa-redo';
            resultMessage = 'Perlu Belajar Lagi';
            resultClass = 'poor';
        }
        
        // Format time used
        const minutesUsed = Math.floor(timeUsed / 60);
        const secondsUsed = timeUsed % 60;
        const timeUsedFormatted = `${minutesUsed} menit ${secondsUsed} detik`;
        
        // Populate results modal
        resultsModal.innerHTML = `
            <div class="results-content">
                <div class="results-icon ${resultClass}">
                    <i class="${resultIcon}"></i>
                </div>
                <h2>${resultMessage}</h2>
                <div class="score-display">${score.toFixed(1)}%</div>
                <p>Anda menjawab ${correctCount} dari ${totalQuestions} soal dengan benar</p>
                
                <div class="results-details">
                    <h3>Detail Hasil</h3>
                    <div class="detail-item">
                        <span>Mata Pelajaran:</span>
                        <span>${quiz.title}</span>
                    </div>
                    <div class="detail-item">
                        <span>Skor:</span>
                        <span>${score.toFixed(1)}%</span>
                    </div>
                    <div class="detail-item">
                        <span>Jawaban Benar:</span>
                        <span>${correctCount} dari ${totalQuestions}</span>
                    </div>
                    <div class="detail-item">
                        <span>Waktu Digunakan:</span>
                        <span>${timeUsedFormatted}</span>
                    </div>
                </div>
                
                <div class="results-actions">
                    <button class="results-btn retry" id="retryBtn">
                        <i class="fas fa-redo"></i> Coba Lagi
                    </button>
                    <button class="results-btn review" id="reviewBtn">
                        <i class="fas fa-list-check"></i> Review Jawaban
                    </button>
                    <button class="results-btn home" id="homeBtn">
                        <i class="fas fa-home"></i> Kembali ke Home
                    </button>
                </div>
            </div>
        `;
        
        // Show modal
        resultsModal.style.display = 'flex';
        
        // Add event listeners to result buttons
        document.getElementById('retryBtn').addEventListener('click', () => {
            window.location.href = `quiz.html?subject=${subject}`;
        });
        
        document.getElementById('reviewBtn').addEventListener('click', () => {
            resultsModal.style.display = 'none';
            showReviewAnswers();
        });
        
        document.getElementById('homeBtn').addEventListener('click', () => {
            window.location.href = 'index.html';
        });
        
        // Close modal when clicking outside
        resultsModal.addEventListener('click', (e) => {
            if (e.target === resultsModal) {
                resultsModal.style.display = 'none';
            }
        });
    }
    
    // Show review of answers
    function showReviewAnswers() {
        // Create review interface
        const reviewContainer = document.createElement('div');
        reviewContainer.className = 'review-container';
        reviewContainer.innerHTML = `
            <div class="review-header">
                <h2>Review Jawaban</h2>
                <button id="closeReviewBtn" class="nav-btn">
                    <i class="fas fa-times"></i> Tutup Review
                </button>
            </div>
            <div class="review-questions">
                ${quiz.questions.map((question, index) => {
                    const userAnswer = userAnswers[index];
                    const isCorrect = userAnswer === question.correctAnswer;
                    const userAnswerText = userAnswer !== null ? question.options[userAnswer] : 'Tidak dijawab';
                    const correctAnswerText = question.options[question.correctAnswer];
                    
                    return `
                        <div class="review-question ${isCorrect ? 'correct' : 'incorrect'}">
                            <h3>Soal ${index + 1}: ${question.question}</h3>
                            <div class="review-answer">
                                <p><strong>Jawaban Anda:</strong> ${userAnswerText}</p>
                                ${!isCorrect ? `<p><strong>Jawaban Benar:</strong> ${correctAnswerText}</p>` : ''}
                            </div>
                            <div class="explanation">
                                <p><strong>Penjelasan:</strong> ${question.explanation}</p>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
        
        // Insert review container before the quiz container
        const quizContainer = document.querySelector('.quiz-container');
        quizContainer.parentNode.insertBefore(reviewContainer, quizContainer);
        quizContainer.style.display = 'none';
        
        // Add event listener to close review button
        document.getElementById('closeReviewBtn').addEventListener('click', () => {
            reviewContainer.remove();
            quizContainer.style.display = 'block';
        });
    }
    
    // Initialize the quiz when page loads
    initQuiz();
});