// Main JavaScript for the quiz website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Quiz selection functionality
    const startButtons = document.querySelectorAll('.start-btn');
    const loadingModal = document.getElementById('loadingModal');
    const loadingSubject = document.getElementById('loadingSubject');
    
    startButtons.forEach(button => {
        button.addEventListener('click', function() {
            const subject = this.getAttribute('data-subject');
            
            // Show loading modal
            if (loadingModal && loadingSubject) {
                loadingSubject.textContent = `Menyiapkan soal-soal ${getSubjectName(subject)}...`;
                loadingModal.style.display = 'flex';
                
                // Simulate loading process
                simulateLoading(subject);
            }
        });
    });
    
    // Get subject name for display
    function getSubjectName(subjectKey) {
        const subjectNames = {
            'matematika': 'Matematika',
            'bahasa-inggris': 'Bahasa Inggris',
            'ips': 'IPS',
            'pemrograman': 'Pemrograman'
        };
        
        return subjectNames[subjectKey] || subjectKey;
    }
    
    // Simulate loading process and redirect to quiz page
    function simulateLoading(subject) {
        let progress = 0;
        const loadingDetails = document.querySelectorAll('.loading-details p');
        
        // Animate the spinner
        const spinner = document.querySelector('.spinner');
        if (spinner) {
            spinner.style.animation = 'spin 1s linear infinite';
        }
        
        // Simulate loading steps
        const steps = [
            "Mengambil soal dari database...",
            "Mengacak urutan soal...",
            "Menyiapkan timer...",
            "Memuat antarmuka quiz..."
        ];
        
        let currentStep = 0;
        const interval = setInterval(() => {
            if (currentStep < steps.length) {
                if (loadingDetails[currentStep]) {
                    loadingDetails[currentStep].style.opacity = '1';
                    loadingDetails[currentStep].style.transition = 'opacity 0.5s';
                }
                currentStep++;
                progress = (currentStep / steps.length) * 100;
            } else {
                clearInterval(interval);
                
                // Redirect to quiz page after loading is complete
                setTimeout(() => {
                    window.location.href = `quiz.html?subject=${subject}`;
                }, 500);
            }
        }, 800);
    }
    
    // Reset progress functionality
    const resetProgressBtn = document.getElementById('resetProgress');
    if (resetProgressBtn) {
        resetProgressBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('Apakah Anda yakin ingin mereset semua progress quiz?')) {
                localStorage.clear();
                alert('Progress quiz telah direset!');
            }
        });
    }
    
    // Add hover effects to quiz cards
    const quizCards = document.querySelectorAll('.quiz-card');
    quizCards.forEach(card => {
        const subject = card.getAttribute('data-subject');
        card.classList.add(subject);
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
