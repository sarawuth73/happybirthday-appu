// Sequential message display
document.addEventListener('DOMContentLoaded', function() {
    // Start the sequence after a short delay
    setTimeout(startMessageSequence, 500);
});

function startMessageSequence() {
    // Message 1 is already visible with typing animation
    
    // Remove cursor after message 1 finishes (4 seconds)
    setTimeout(function() {
        const cursor1 = document.getElementById('cursor1');
        if (cursor1 && cursor1.parentNode) {
            cursor1.parentNode.removeChild(cursor1);
        }
    }, 4000);
    
    // Show message 2 with fade in after message 1 finishes (4 seconds)
    setTimeout(function() {
        const message2Container = document.getElementById('message2-container');
        message2Container.classList.remove('hidden');
        // Trigger reflow to ensure the element is displayed
        message2Container.offsetHeight;
        message2Container.classList.add('fade-in');
    }, 4000);
    
    // Remove cursor after message 2 finishes (additional 7 seconds)
    setTimeout(function() {
        const cursor2 = document.getElementById('cursor2');
        if (cursor2 && cursor2.parentNode) {
            cursor2.parentNode.removeChild(cursor2);
        }
    }, 11000);
    
    // Show message 3 with fade in after message 2 finishes (additional 7 seconds)
    setTimeout(function() {
        const message3Container = document.getElementById('message3-container');
        message3Container.classList.remove('hidden');
        // Trigger reflow to ensure the element is displayed
        message3Container.offsetHeight;
        message3Container.classList.add('fade-in');
    }, 11000);
    
    // Remove cursor after message 3 finishes (additional 7 seconds)
    setTimeout(function() {
        const cursor3 = document.getElementById('cursor3');
        if (cursor3 && cursor3.parentNode) {
            cursor3.parentNode.removeChild(cursor3);
        }
    }, 18000);
    
    // Show start button with fade in after message 3 finishes (additional 7 seconds)
    setTimeout(function() {
        const button = document.getElementById('startButton');
        button.classList.remove('hidden');
        // Trigger reflow to ensure the element is displayed
        button.offsetHeight;
        button.classList.add('fade-in');
    }, 18000);
    
    // Create floating hearts around the cake continuously
    setInterval(createCakeHearts, 2000);
}

// Create floating hearts around the cake
function createCakeHearts() {
    const cakeContainer = document.getElementById('cake-container');
    if (!cakeContainer) return;
    
    const rect = cakeContainer.getBoundingClientRect();
    
    // Create 5 hearts in a circle around the cake
    for (let i = 0; i < 5; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.className = 'cake-heart';
        
        // Position hearts in a circle around the cake
        const angle = (i / 5) * Math.PI * 2;
        const radius = 60;
        const x = rect.left + rect.width/2 + Math.cos(angle) * radius - 15;
        const y = rect.top + rect.height/2 + Math.sin(angle) * radius - 15;
        
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        heart.style.animationDelay = (i * 0.2) + 's';
        
        document.body.appendChild(heart);
        
        // Remove heart after animation completes
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 3000);
    }
}

// Step Navigation Functions
let currentStep = 1;
const totalSteps = 5;

// Modified to handle image slideshow
function showStep(step) {
    console.log(`Showing step ${step}`);
    
    // Stop intro music when moving to step 4 (game section)
    if (step === 4) {
        const introMusic = document.getElementById('introMusic');
        if (introMusic) {
            introMusic.pause();
            introMusic.currentTime = 0; // Reset to beginning
        }
        
        // Play glitch music when moving to step 4
        const glitchMusic = document.getElementById('glitchMusic');
        if (glitchMusic) {
            glitchMusic.volume = 0.7; // Set volume to 70%
            glitchMusic.currentTime = 0; // Reset to beginning
            glitchMusic.play().catch(e => console.log("Glitch audio play failed:", e));
        }
    }
    
    // Hide all steps
    for (let i = 1; i <= totalSteps; i++) {
        const stepElement = document.getElementById(`step${i}`);
        if (stepElement) {
            stepElement.classList.remove('active');
            console.log(`Hiding step ${i}`);
        }
    }
    
    // Show current step
    const targetStep = document.getElementById(`step${step}`);
    if (targetStep) {
        targetStep.classList.add('active');
        console.log(`Showing step ${step}`);
    } else {
        console.error(`Step ${step} not found`);
    }
    
    // Update step indicators
    const indicators = document.querySelectorAll('.step-indicator');
    indicators.forEach((indicator, index) => {
        if (index + 1 === step) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
    
    currentStep = step;
    
    // Remove dark theme when leaving step 4
    if (currentStep !== 4) {
        document.body.classList.remove('game1-dark-theme');
    }
    
    // Initialize image slideshow when entering step 3
    if (step === 3) {
        initializeImageViewer();
    }
    
    // Initialize mini game when entering step 4
    if (step === 4) {
        initMiniGame();
    }
    
    // Removed automatic gift randomizer - now only happens when button is clicked
}

// Array of image and video data for the viewer - using local images and videos
// To add a video, include an entry with type: "video" like this:
// { src: "./videos/your-video.mp4", caption: "Your video caption", type: "video" }
const imageData = [
    {
        src: "./img/appu/1.jpg",
        caption: "ยิ้มทีโลกสดใส 🤭",
        type: "image"
    },
    {
        src: "./img/appu/2.jpg",
        caption: "เหมียวอะไร ยืมเงินได้ป่าว 😜",
        type: "image"
    },
     {
        src: "./img/appu/1.mp4",
        caption: "งับอิจินีซางับอาริกาโตะ !!!",
        type: "video"
    },
    {
        src: "./img/appu/3.jpg",
        caption: "อาหมวยน่ารัก !!!",
        type: "image"
    },
    {
        src: "./img/appu/4.jpg",
        caption: "อย่าทำหน้าแบบนี้ เดี๋ยวใจละลายไม่รู้ตัว 🫠",
        type: "image"
    },
    {
        src: "./img/appu/5.jpg",
        caption: "อุ้ย ! นักเรียนญี่ปุ่น โมเอะ โมเอะ บีมมมมมม",
        type: "image"
    },
    {
        src: "./img/appu/6.jpg",
        caption: "ชูสองนิ้วแบร่ 😜",
        type: "image"
    },
    {
        src: "./img/appu/7.jpg",
        caption: "เด็กเหม่ง  !!!",
        type: "image"
    },
     {
        src: "./img/appu/2.mp4",
        caption: "หึ้ยยยยยยย !!!",
        type: "video"
    },
      {
        src: "./img/appu/3.mp4",
        caption: "เอ้ยยยยย !!!",
        type: "video"
    },
    {
        src: "./img/appu/15.jpg",
        caption: "หาวววววว !!!",
        type: "image"
    },
    {
        src: "./img/appu/18.jpg",
        caption: "หัวใจน่ารัก ❤️",
        type: "image"
    },
    {
        src: "./img/appu/19.jpg",
        caption: "❤️",
        type: "image"
    },
      {
        src: "./img/appu/4.mp4",
        caption: "ตระกูลจางบุก !!!",
        type: "video"
    },
      {
        src: "./img/appu/5.mp4",
        caption: "ตีหนึ่งที่คูเมือง By แอปปู้ว !!!",
        type: "video"
    },
    {
        src: "./img/appu/20.jpg",
        caption: "ของขวัญวันเกิดเมื่อปีที่แล้ว",
        type: "image"
    },
    {
        src: "./img/appu/21.jpg",
        caption: "หนึ่งปีผ่านไป",
        type: "image"
    },
    {
        src: "./img/appu/22.jpg",
        caption: "ทำไมไวจังนะ",
        type: "image"
    },
    {
        src: "./img/appu/23.jpg",
        caption: "และวันนี้ก็มาถึง",
        type: "image"
    }
   
];

let currentImageIndex = 0;

// Function to initialize the image viewer
function initializeImageViewer() {
    currentImageIndex = 0;
    // Clear caption before showing first image
    clearCaption();
    showCurrentImage();
    updateImageCounter();
    updateNavigationButtons();
    
    // Disable the main next button initially
    const nextButton = document.getElementById('nextButton');
    nextButton.disabled = true;
    
    // No automatic slideshow - user must manually navigate
}

// Function to show the current image or video with 3D slide effect
function showCurrentImage() {
    const container = document.getElementById('singleImageContainer');
    const imageDataItem = imageData[currentImageIndex];
    
    // Clear the container
    container.innerHTML = '';
    
    // Check if it's a video or image
    if (imageDataItem.type === 'video') {
        // Create video element
        const video = document.createElement('video');
        video.src = imageDataItem.src;
        video.className = 'gallery-video';
        video.controls = true;
        video.autoplay = true;
        video.loop = true;
        video.muted = false;
        video.playsInline = true; // For mobile devices
        
        // Add event listener to ensure video plays on mobile
        video.addEventListener('loadeddata', function() {
            // Attempt to play the video
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    // Auto-play was prevented
                    // Show a "Play" button so that user can start playback
                    console.log("Auto-play prevented, user interaction required");
                });
            }
        });
        
        // Add video to container
        container.appendChild(video);
    } else {
        // Create image element (default)
        const img = document.createElement('img');
        img.src = imageDataItem.src;
        img.alt = `Memory ${currentImageIndex + 1}`;
        img.className = 'gallery-image';
        
        // Add image to container
        container.appendChild(img);
    }
    
    // Update navigation controls
    updateNavigationButtons();
    updateImageCounter();
    
    // Add floating hearts effect for romantic theme
    createFloatingHeartsForImage();
    
    // Apply typing effect to caption outside the container
    if (imageDataItem.caption) {
        setTimeout(() => {
            typeCaption(imageDataItem.caption);
        }, 500);
    }
}

// Function to apply typing effect to caption
function typeCaption(text) {
    const captionDisplay = document.getElementById('captionDisplay');
    if (!captionDisplay) return;
    
    // Clear any existing content
    captionDisplay.innerHTML = '';
    
    // Create span for typing effect
    const typingSpan = document.createElement('span');
    typingSpan.className = 'typing-caption';
    typingSpan.textContent = text;
    captionDisplay.appendChild(typingSpan);
}

// Function to go to the next image
function nextImage() {
    if (currentImageIndex < imageData.length - 1) {
        currentImageIndex++;
        // Clear caption before showing new image
        clearCaption();
        showCurrentImage();
        
        // Enable and fade in the main next button when we reach the last image
        if (currentImageIndex === imageData.length - 1) {
            const nextButton = document.getElementById('nextButton');
            if (nextButton) {
                nextButton.disabled = false;
                // Remove hidden class and add fade-in effect
                nextButton.classList.remove('hidden');
                // Trigger reflow to ensure the element is displayed
                nextButton.offsetHeight;
                nextButton.classList.add('fade-in');
            }
        }
    }
}

// Function to clear the caption display
function clearCaption() {
    const captionDisplay = document.getElementById('captionDisplay');
    if (captionDisplay) {
        captionDisplay.innerHTML = '';
    }
}

// Function to go to the previous image
function prevImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        // Clear caption before showing new image
        clearCaption();
        showCurrentImage();
    }
}

// Function to update the image counter
function updateImageCounter() {
    const counterOverlay = document.getElementById('imageCounterOverlay');
    
    // We've removed the counter display, so this function now does nothing
    // but we keep it for compatibility with existing code
}

// Function to update navigation button states
function updateNavigationButtons() {
    // Update overlay buttons
    const prevBtnOverlay = document.getElementById('prevImageBtnOverlay');
    const nextBtnOverlay = document.getElementById('nextImageBtnOverlay');
    
    if (prevBtnOverlay) prevBtnOverlay.disabled = currentImageIndex === 0;
    if (nextBtnOverlay) nextBtnOverlay.disabled = currentImageIndex === imageData.length - 1;
}

function nextStep() {
    // Play intro music when the start button is clicked
    const introMusic = document.getElementById('introMusic');
    if (introMusic && currentStep === 1) {
        // Play the intro music
        introMusic.volume = 0.7; // Set volume to 70%
        introMusic.play().catch(e => console.log("Audio play failed:", e));
    }
    
    if (currentStep < totalSteps) {
        showStep(currentStep + 1);
    }
}

function prevStep() {
    if (currentStep > 1) {
        showStep(currentStep - 1);
    }
}

// Gift Randomizer Function
function randomizeGift() {
    const imageContainer = document.getElementById('image-container');
    const giftCongratsEl = document.getElementById('gift-congrats');
    const giftBtn = document.getElementById('random-gift-btn');
    
    // Create and play Tada sound
    const tadaSound = new Audio('mp3/Tada.mp3');
    tadaSound.play().catch(e => console.log("Tada sound play failed:", e));
    
    // Clear previous images
    imageContainer.innerHTML = '';
    
    // Disable button during randomization
    giftBtn.disabled = true;
    giftCongratsEl.textContent = 'กำลังสุ่มของขวัญ...';
    
    // Array of original gift images
    const giftImages = [
        'img/gif/1.jpg', 'img/gif/2.webp', 'img/gif/3.jpg', 'img/gif/4.jpg', 'img/gif/5.jpg',
        'img/gif/6.jpg', 'img/gif/8.jpeg', 'img/gif/9.jpg', 'img/gif/10.jpeg', 'img/gif/11.avif',
        'img/gif/12.avif', 'img/gif/14.jpg', 'img/gif/15.jpg', 'img/gif/16.jpg', 'img/gif/17.jpg'
    ];
    
    // Simulate randomization effect
    let counter = 0;
    
    const interval = setInterval(() => {
        // Show random images during simulation
        const randomImg = giftImages[Math.floor(Math.random() * giftImages.length)];
        imageContainer.innerHTML = `<img src="${randomImg}" alt="Random gift" style="width: 200px; height: 200px; object-fit: cover; border-radius: 10px; opacity: 0.7;">`;
        counter++;
        
        // Increased counter from 5 to 15 for longer randomization
        if (counter > 15) {
            clearInterval(interval);
            // Show the specific image (img/13.avif) as the final result
            imageContainer.innerHTML = `
                <div style="position: relative; display: inline-block;">
                    <img src="img/gif/13.avif" alt="Special gift" style="width: 250px; height: 250px; object-fit: cover; border-radius: 15px; border: 5px solid #FF1493; box-shadow: 0 0 30px rgba(255, 20, 147, 0.7);">
                    <div style="position: absolute; top: -15px; right: -15px; background: #FF1493; color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-weight: bold; font-size: 20px;">★</div>
                </div>
            `;
            giftCongratsEl.textContent = 'นี่คือของขวัญพิเศษของคุณ!';
            giftBtn.disabled = false;
            
            // Trigger celebration effect
            triggerCelebration();
        }
    }, 200); // Increased interval from 100ms to 200ms for slower randomization
}

// Celebration effect function
function triggerCelebration() {
    const celebration = document.getElementById('celebration');
    if (!celebration) return;
    
    celebration.style.display = 'block';
    celebration.innerHTML = '';
    
    // Create confetti
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 5 + 's';
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        celebration.appendChild(confetti);
    }
    
    // Create sparkles
    for (let i = 0; i < 30; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + 'vw';
        sparkle.style.top = Math.random() * 100 + 'vh';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        celebration.appendChild(sparkle);
    }
    
    // Hide celebration after animation
    setTimeout(() => {
        if (celebration) {
            celebration.style.display = 'none';
        }
    }, 5000);
}

function getRandomColor() {
    const colors = [
        'var(--confetti-1)',
        'var(--confetti-2)',
        'var(--confetti-3)',
        'var(--confetti-4)',
        'var(--confetti-5)',
        'var(--primary-pink)',
        'var(--dark-pink)',
        'var(--hot-pink)',
        'var(--gold)'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Function to open the 3D envelope with enhanced effects
function openEnvelope3D() {
    const envelope3d = document.querySelector('.envelope-3d');
    const flap = document.querySelector('.envelope-flap');
    const letter3d = document.querySelector('.letter-3d');
    const envelopeContainer = document.getElementById('envelope3DContainer');
    const envelopeLabel = document.querySelector('.envelope-label-3d');
    
    // Add extraction class to container for initial lift effect
    if (envelopeContainer) {
        envelopeContainer.classList.add('extracting');
    }
    
    // Add classes for 3D animations with delays
    setTimeout(() => {
        if (envelope3d) {
            envelope3d.classList.add('envelope-opened');
        }
    }, 200);
    
    setTimeout(() => {
        if (flap) {
            flap.classList.add('flap-opened');
        }
    }, 500);
    
    setTimeout(() => {
        if (letter3d) {
            letter3d.classList.add('letter-visible');
        }
    }, 900);
    
    // Enhanced extraction effect
    setTimeout(() => {
        if (envelopeContainer) {
            envelopeContainer.classList.add('lifting');
        }
    }, 1200);
    
    // After animation, keep the envelope and letter visible
    setTimeout(() => {
        // Change the label text to indicate the letter is open
        if (envelopeLabel) {
            envelopeLabel.textContent = "จดหมายเปิดแล้ว";
        }
        
        // Make the next button visible
        const nextButton = document.querySelector('#step2 .nav-buttons .nav-btn:nth-child(2)');
        if (nextButton) {
            nextButton.classList.remove('hidden');
        }
        
        // Add celebration effect
        triggerCelebration();
        
        // Create additional floating hearts
        createFloatingHearts();
        
        // Create paper rustling effect
        createPaperRustle();
    }, 2200);
}

// Function to create paper rustling effect
function createPaperRustle() {
    const container = document.querySelector('.envelope-3d-container');
    if (!container) return;
    
    // Create small paper pieces
    for (let i = 0; i < 10; i++) {
        const piece = document.createElement('div');
        piece.className = 'paper-piece';
        piece.style.left = Math.random() * 100 + '%';
        piece.style.top = Math.random() * 100 + '%';
        piece.style.animationDelay = Math.random() * 1 + 's';
        piece.style.width = (Math.random() * 10 + 5) + 'px';
        piece.style.height = (Math.random() * 10 + 5) + 'px';
        container.appendChild(piece);
        
        // Remove piece after animation
        setTimeout(() => {
            if (piece.parentNode) {
                piece.parentNode.removeChild(piece);
            }
        }, 2000);
    }
}

// Function to create floating hearts effect
function createFloatingHearts() {
    const container = document.querySelector('.envelope-3d-container');
    if (!container) return;
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.className = 'floating-heart';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        container.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 3000);
    }
}

// Function to create floating hearts for image viewer
function createFloatingHeartsForImage() {
    const container = document.querySelector('.image-container-3d');
    if (!container) return;
    
    // Create floating hearts around the image
    for (let i = 0; i < 8; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.className = 'floating-heart-image';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heart.style.fontSize = (Math.random() * 15 + 10) + 'px';
        container.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 3000);
    }
}

// Mini Game Implementation
const questions = [
    {
        question: "คำถามจิตวิทยา: ถ้าคุณเห็นคนร้องไห้ คุณจะทำอะไร?",
        answers: ["ปลอบโยน", "ถามว่าเป็นอะไร", "ให้ความเป็นส่วนตัว", "มองผ่านๆ ไป"],
        correct: 1,
        explanation: "คนที่เห็นใจผู้อื่นจะถามว่าเกิดอะไรขึ้นเพื่อแสดงความห่วงใย"
    },
    {
        question: "คำถามจิตวิทยา: ถ้าเพื่อนคุณทะเลาะกัน คุณจะทำอย่างไร?",
        answers: ["เข้าไปไกล่เกลี่ย", "เลือกข้างเพื่อน", "ไม่สนใจ", "รอให้สงบลงเอง"],
        correct: 0,
        explanation: "คนที่มีอารมณ์สติปัญญาดีจะพยายามช่วยไกล่เกลี่ยเพื่อรักษาความสัมพันธ์"
    },
    {
        question: "คำถามจิตวิทยา: คุณชอบใช้เวลาว่างอย่างไร?",
        answers: ["อ่านหนังสือ", "ออกไปเที่ยว", "ดูทีวี", "นอนพักผ่อน"],
        correct: 0,
        explanation: "คนที่มีความสนใจในการเรียนรู้มักจะอ่านหนังสือเพื่อพัฒนาตัวเอง"
    },
    {
        question: "คำถามจิตวิทยา: ถ้าเจอปัญหาใหญ่ คุณจะทำอย่างไร?",
        answers: ["วิตกกังวล", "วางแผนแก้ไข", "เล่าให้คนอื่นฟัง", "หนีจากปัญหา"],
        correct: 1,
        explanation: "คนที่มีความเข้มแข็งทางจิตใจจะวางแผนแก้ไขปัญหาอย่างเป็นระบบ"
    },
    {
        question: "คำถามจิตวิทยา: คุณมีวิธีจัดการกับความเครียดอย่างไร?",
        answers: ["ออกกำลังกาย", "พูดคุยกับเพื่อน", "ทำสมาธิ", "ทั้งหมดข้างต้น"],
        correct: 3,
        explanation: "การมีหลายวิธีจัดการความเครียดแสดงถึงความยืดหยุ่นทางอารมณ์"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let gamesCompleted = 0; // Track how many games have been completed

// Game variables
let currentGame = 0;
let game1Data = {
    symbols: ['★','✦','✪','✩','✰','☀','☁','☂','☄','☾','☽','⚡','❄','❤','✖','☢'],
    chosen: [],
    revealedCards: [],
    score: 0,
    hintsUsed: 0,
    maxHints: 3,
    hintActive: false,
    // Add wrong attempts tracking
    wrongAttempts: 0,
    maxWrongAttempts: 3,
    // We'll store the actual symbols for each card to reference later
    cardSymbols: []
};

let game2Data = {
    currentQuestionIndex: 0,
    questionPool: []
};

let game3Data = {
    round: 1,
    usedNumbers: [],
    allPlayers: [
        { name: "แอปปู้ว", isBot: false, choice: null, score: 10, alive: true },
        { name: "พลอย", isBot: true, choice: null, score: 10, alive: true },
        { name: "ฟ้า", isBot: true, choice: null, score: 10, alive: true },
        { name: "แพรว", isBot: true, choice: null, score: 10, alive: true },
        { name: "บอส", isBot: true, choice: null, score: 10, alive: true },
    ]
};

let game4Data = {
    colors: ["#FF69B4", "#FF1493", "#FFC0CB", "#FFB6C1"],
    correctColor: ""
};

let game5Data = {
    emotions: [
        { emoji: "😊", name: "happy" },
        { emoji: "😢", name: "sad" },
        { emoji: "😠", name: "angry" },
        { emoji: "😲", name: "surprised" }
    ],
    correctEmotion: ""
};

function initMiniGame() {
    currentGame = 0;
    score = 0;
    gamesCompleted = 0;
    
    // Hide all game screens
    for (let i = 1; i <= 5; i++) {
        const gameElement = document.getElementById(`game${i}`);
        if (gameElement) {
            gameElement.style.display = 'none';
        }
    }
    
    // Show and start the first game immediately
    const game1Element = document.getElementById('game1');
    if (game1Element) {
        game1Element.style.display = 'block';
    }
    initGame1();
    
    // Hide result screen
    const gameResultElement = document.getElementById('game-result');
    if (gameResultElement) {
        gameResultElement.style.display = 'none';
    }
    
    // Hide the next button initially
    const gameNextBtn = document.getElementById('game-next-btn');
    if (gameNextBtn) {
        gameNextBtn.style.display = 'none';
    }
}

// Function to start a specific game
function startGame(gameNumber) {
    // Hide all game screens
    for (let i = 1; i <= 5; i++) {
        const gameElement = document.getElementById(`game${i}`);
        if (gameElement) {
            gameElement.style.display = 'none';
        }
    }
    
    // Set current game
    currentGame = gameNumber;
    
    // Initialize the requested game
    switch (gameNumber) {
        case 1:
            const game1Element = document.getElementById('game1');
            if (game1Element) {
                game1Element.style.display = 'block';
            }
            initGame1();
            break;
        case 2:
            const game2Element = document.getElementById('game2');
            if (game2Element) {
                game2Element.style.display = 'block';
            }
            initGame2();
            break;
        case 3:
            const game3Element = document.getElementById('game3');
            if (game3Element) {
                game3Element.style.display = 'block';
            }
            initGame3();
            break;
        case 4:
            const game4Element = document.getElementById('game4');
            if (game4Element) {
                game4Element.style.display = 'block';
            }
            initGame4();
            break;
        case 5:
            const game5Element = document.getElementById('game5');
            if (game5Element) {
                game5Element.style.display = 'block';
            }
            initGame5();
            break;
        default:
            // If game number is invalid, start with game 1
            startGame(1);
            break;
    }
}

// Game 1: Match the Pictures (Sequential Memory Game)
function initGame1() {
    // Reset game state
    game1Data.chosen = [];
    game1Data.revealedCards = [];
    game1Data.score = 0;
    game1Data.hintsUsed = 0;
    game1Data.hintActive = false;
    game1Data.wrongAttempts = 0; // Reset wrong attempts
    game1Data.cardSymbols = [];
    
    // Get DOM elements
    const intro = document.getElementById('intro');
    const startBtn = document.getElementById('start');
    const grid = document.getElementById('memory-grid');
    const endMsg = document.getElementById('end-message');
    const gameTitle = document.getElementById('game1-title');
    const gameTitleCursor = document.getElementById('game-title-cursor');
    const inviteCursor = document.getElementById('invite-cursor');
    const hintContainer = document.getElementById('hint-container');
    const hintCount = document.getElementById('hint-count');
    const wrongAttemptsContainer = document.getElementById('wrong-attempts-container');
    
    // Set initial state
    if (intro) intro.style.opacity = '0';
    if (startBtn) startBtn.style.opacity = '0';
    if (grid) grid.style.display = 'none';
    if (endMsg) endMsg.textContent = '';
    if (hintContainer) hintContainer.style.display = 'none';
    if (wrongAttemptsContainer) wrongAttemptsContainer.style.display = 'none'; // Hide wrong attempts container initially
    if (hintCount) hintCount.textContent = game1Data.maxHints;
    
    // Remove invite cursor after typing animation completes (3 seconds)
    setTimeout(function() {
        if (inviteCursor && inviteCursor.parentNode) {
            inviteCursor.parentNode.removeChild(inviteCursor);
        }
        // Show brain emoji after invite text typing completes
        const brainEmoji = document.getElementById('brain-emoji');
        if (brainEmoji) {
            brainEmoji.style.display = 'block';
        }
        // Show game title with fade-in effect after brain emoji is visible
        setTimeout(function() {
            if (gameTitle) gameTitle.style.opacity = '1';
            // Show intro text after game title is visible
            setTimeout(function() {
                if (intro) intro.style.opacity = '1';
                // Show start button after intro text is visible
                setTimeout(function() {
                    if (startBtn) startBtn.style.opacity = '1';
                }, 1500);
            }, 1500);
        }, 1000);
    }, 3000);
    
    // Remove any existing event listeners to prevent duplicates
    if (startBtn) {
        startBtn.removeEventListener('click', startMemoryGame);
        // Add event listener
        startBtn.addEventListener('click', startMemoryGame);
    }
}

function startMemoryGame() {
    // Stop glitch music when starting Game 1
    const glitchMusic = document.getElementById('glitchMusic');
    if (glitchMusic) {
        glitchMusic.pause();
        glitchMusic.currentTime = 0; // Reset to beginning
    }
    
    const intro = document.getElementById('intro');
    const startBtn = document.getElementById('start');
    const grid = document.getElementById('memory-grid');
    const endMsg = document.getElementById('end-message');
    const hintContainer = document.getElementById('hint-container');
    const hintCount = document.getElementById('hint-count');
    const wrongAttemptsContainer = document.getElementById('wrong-attempts-container');
    const wrongCount = document.getElementById('wrong-count');
    const maxWrongCount = document.getElementById('max-wrong-count');
    
    // Apply dark theme to entire system
    document.body.classList.add('game1-dark-theme');
    
    // Show initial countdown in intro text
    if (intro) intro.textContent = 'จดจำให้ดี... คุณมีเวลา 5 วินาที';
    if (startBtn) startBtn.style.display = 'none';
    if (endMsg) endMsg.textContent = '';
    if (grid) {
        grid.innerHTML = '';
        grid.style.display = 'grid';
    }
    if (hintContainer) hintContainer.style.display = 'block';
    if (wrongAttemptsContainer) wrongAttemptsContainer.style.display = 'block'; // Show wrong attempts counter
    if (wrongCount) wrongCount.textContent = '0';
    if (maxWrongCount) maxWrongCount.textContent = game1Data.maxWrongAttempts;
    
    // Reset game state
    game1Data.revealedCards = [];
    game1Data.score = 0;
    game1Data.hintsUsed = 0;
    game1Data.hintActive = false;
    game1Data.wrongAttempts = 0; // Reset wrong attempts
    if (hintCount) hintCount.textContent = game1Data.maxHints;
    
    // Start countdown from 5
    let count = 5;
    
    // Update intro text with countdown every second
    const countdownInterval = setInterval(() => {
        if (count >= 0 && intro) {
            intro.textContent = `จดจำให้ดี... คุณมีเวลา ${count} วินาที`;
        }
        
        count--;
        
        // When countdown completes, show the message and hide cards
        if (count < 0) {
            clearInterval(countdownInterval);
            // Show the message after countdown completes
            if (intro) intro.textContent = 'ตอนนี้... ทุกอย่างหายไปแล้ว. จงจำและเลือกให้ถูก';
            
            // Hide all cards
            document.querySelectorAll('.card').forEach(c => {
                c.classList.remove('revealed');
                c.textContent = '';
            });
            
            // Add click events for card selection
            addClickEvents();
        }
    }, 1000);

    // Select 8 random symbols
    const selected = shuffle([...game1Data.symbols]).slice(0, 8);
    // Create pairs
    const cards = shuffle([...selected, ...selected]);
    
    // Store the symbols for each card
    game1Data.cardSymbols = [...cards];

    // Create card elements
    if (grid) {
        cards.forEach((symbol, index) => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.textContent = symbol;
            card.dataset.index = index;
            grid.appendChild(card);
        });

        // Reveal all cards for 5 seconds
        document.querySelectorAll('.card').forEach(c => c.classList.add('revealed'));
    }
}

function addClickEvents() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            if (card.classList.contains('revealed') || game1Data.revealedCards.length === 2) return;
            revealCard(card);
        });
    });
}

function revealCard(card) {
    const index = card.dataset.index;
    const symbol = game1Data.cardSymbols[index];
    card.textContent = symbol;
    card.classList.add('revealed');
    game1Data.revealedCards.push(card);

    if (game1Data.revealedCards.length === 2) {
        checkMatch();
    }
}

function checkMatch() {
    const [card1, card2] = game1Data.revealedCards;
    const symbol1 = game1Data.cardSymbols[card1.dataset.index];
    const symbol2 = game1Data.cardSymbols[card2.dataset.index];
    
    // Get overlay element
    const overlay = document.getElementById('game-overlay');
    const wrongCount = document.getElementById('wrong-count');
    
    if (symbol1 === symbol2) {
        // Show green overlay for correct match
        if (overlay) {
            overlay.classList.remove('wrong');
            overlay.classList.add('correct');
            overlay.style.display = 'block';
        }
        
        card1.classList.add('correct');
        card2.classList.add('correct');
        game1Data.score++;
        
        // Hide overlay after 500ms as specified
        setTimeout(() => {
            if (overlay) {
                overlay.style.display = 'none';
                overlay.classList.remove('correct');
            }
        }, 500);
        
        game1Data.revealedCards = [];
        if (game1Data.score === 8) {
            endMemoryGame(true);
        }
    } else {
        // Increment wrong attempts
        game1Data.wrongAttempts++;
        // Update wrong attempts display
        if (wrongCount) {
            wrongCount.textContent = game1Data.wrongAttempts;
        }
        
        // Show red overlay for wrong match across entire system
        if (overlay) {
            overlay.classList.remove('correct');
            overlay.classList.add('wrong');
            overlay.style.display = 'block';
        }
        
        card1.classList.add('wrong');
        card2.classList.add('wrong');
        
        // Hide overlay and end game after 500ms as specified
        setTimeout(() => {
            if (overlay) {
                overlay.style.display = 'none';
                overlay.classList.remove('wrong');
            }
            
            // Check if player has exceeded maximum wrong attempts
            if (game1Data.wrongAttempts >= game1Data.maxWrongAttempts) {
                // End game immediately when player makes 3 wrong selections
                endMemoryGame(false);
            } else {
                // Just reset the cards but continue playing
                game1Data.revealedCards = [];
                // Remove wrong class after a short delay
                setTimeout(() => {
                    card1.classList.remove('wrong');
                    card2.classList.remove('wrong');
                    card1.textContent = '';
                    card2.textContent = '';
                }, 500);
            }
        }, 500);
    }
}

function endMemoryGame(success) {
    const grid = document.getElementById('memory-grid');
    const endMsg = document.getElementById('end-message');
    const startBtn = document.getElementById('start');
    const intro = document.getElementById('intro');
    const restartBtn = document.getElementById('restart-game');
    const gameNextBtn = document.getElementById('game-next-btn');
    
    // Only remove dark theme when player wins the game
    if (success) {
        document.body.classList.remove('game1-dark-theme');
    }
    // Keep dark theme when player loses
    
    if (grid) grid.style.display = 'none';
    if (success) {
        if (endMsg) endMsg.textContent = 'คุณจำได้ทั้งหมด... หรือจริงๆ แล้วระบบกำลังจำคุณ?';
        // Add to overall score
        score += 1;
        // Show restart button and next button
        if (restartBtn) restartBtn.style.display = 'inline-block';
        if (gameNextBtn) gameNextBtn.style.display = 'inline-block';
        // Automatically proceed to next game after a delay
        setTimeout(() => {
            showGameResult();
        }, 3000);
    } else {
        // Show how many wrong attempts were made
        if (endMsg) endMsg.textContent = `คุณล้มเหลวในการจดจำหลังจากผิด ${game1Data.wrongAttempts} ครั้ง... แต่ใครกันแน่ที่ถูกทดสอบ?`;
        if (restartBtn) restartBtn.style.display = 'inline-block';
        game1Data.score = 0;
        // Do not automatically proceed to next game when player loses
    }
}

function restartGame1() {
    // Hide restart button and next button
    const restartBtn = document.getElementById('restart-game');
    const gameNextBtn = document.getElementById('game-next-btn');
    if (restartBtn) restartBtn.style.display = 'none';
    if (gameNextBtn) gameNextBtn.style.display = 'none';
    
    // Hide end message
    const endMsg = document.getElementById('end-message');
    if (endMsg) endMsg.textContent = '';
    
    // Reset and start the game again
    startMemoryGame();
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function useHint() {
    // Check if hints are available and no hint is currently active
    if (game1Data.hintsUsed >= game1Data.maxHints || game1Data.hintActive) {
        return;
    }
    
    // Mark hint as active
    game1Data.hintActive = true;
    game1Data.hintsUsed++;
    
    // Update hint count display
    const hintCountElement = document.getElementById('hint-count');
    if (hintCountElement) {
        hintCountElement.textContent = game1Data.maxHints - game1Data.hintsUsed;
    }
    
    // Get all unrevealed cards
    const cards = Array.from(document.querySelectorAll('.card:not(.revealed)'));
    
    // If no unrevealed cards, exit
    if (cards.length === 0) {
        game1Data.hintActive = false;
        return;
    }
    
    // Select 3 random cards (or all remaining if less than 3)
    const numToReveal = Math.min(3, cards.length);
    const shuffledCards = shuffle([...cards]);
    const selectedCards = shuffledCards.slice(0, numToReveal);
    
    // Reveal selected cards
    selectedCards.forEach(card => {
        const index = card.dataset.index;
        const symbol = game1Data.cardSymbols[index];
        card.textContent = symbol;
        card.classList.add('revealed');
        card.classList.add('hint-revealed');
    });
    
    // Show hint timer
    const hintTimer = document.getElementById('hint-timer');
    if (hintTimer) {
        hintTimer.style.display = 'block';
    
        // Start 5-second countdown
        let secondsLeft = 5;
        hintTimer.textContent = `คำใบ้จะหายไปใน ${secondsLeft} วินาที`;
        
        const hintInterval = setInterval(() => {
            secondsLeft--;
            if (secondsLeft >= 0 && hintTimer) {
                hintTimer.textContent = `คำใบ้จะหายไปใน ${secondsLeft} วินาที`;
            }
            
            // When countdown completes, hide cards and reset
            if (secondsLeft < 0) {
                clearInterval(hintInterval);
                if (hintTimer) {
                    hintTimer.style.display = 'none';
                }
                
                // Hide the revealed cards
                selectedCards.forEach(card => {
                    if (!card.classList.contains('correct') && !card.classList.contains('wrong')) {
                        card.classList.remove('revealed');
                        card.classList.remove('hint-revealed');
                        card.textContent = '';
                    }
                });
                
                // Mark hint as inactive
                game1Data.hintActive = false;
            }
        }, 1000);
    }
}

// Initialize Game 2 (Psychology Quiz)
function initGame2() {
    game2Data.currentQuestionIndex = 0;
    // Create a shuffled copy of questions to prevent repetition
    game2Data.questionPool = shuffle([...questions]);
    showQuestion();
}

function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    const resultContainer = document.getElementById('result-container');
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');
    
    // Hide result container and show question container
    if (questionContainer) questionContainer.style.display = 'block';
    if (resultContainer) resultContainer.style.display = 'none';
    
    // Get current question from the shuffled pool
    const question = game2Data.questionPool[game2Data.currentQuestionIndex];
    
    // Set question text
    if (questionText) questionText.textContent = question.question;
    
    // Clear previous answers
    if (answersContainer) answersContainer.innerHTML = '';
    
    // Create answer buttons
    if (answersContainer) {
        question.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.className = 'nav-btn';
            button.textContent = answer;
            button.onclick = () => checkAnswer(index);
            answersContainer.appendChild(button);
        });
    }
}

function checkAnswer(selectedIndex) {
    // Get current question from the shuffled pool
    const question = game2Data.questionPool[game2Data.currentQuestionIndex];
    const resultText = document.getElementById('result-text');
    const questionContainer = document.getElementById('question-container');
    const resultContainer = document.getElementById('result-container');
    const nextQuestionBtn = document.getElementById('next-question-btn');
    const gameNextBtn = document.getElementById('game-next-btn');
    
    // Hide question container and show result container
    if (questionContainer) questionContainer.style.display = 'none';
    if (resultContainer) resultContainer.style.display = 'block';
    
    // Check if answer is correct
    if (selectedIndex === question.correct) {
        if (resultText) {
            resultText.innerHTML = `ถูกต้อง! ✅<br><small style="font-size: 1rem;">${question.explanation}</small>`;
            resultText.style.color = 'var(--hot-pink)';
        }
        score++;
        
        // Check if there are more questions
        if (game2Data.currentQuestionIndex < game2Data.questionPool.length - 1) {
            if (nextQuestionBtn) {
                nextQuestionBtn.style.display = 'inline-block';
                nextQuestionBtn.onclick = nextQuestion;
            }
        } else {
            // Game finished
            if (nextQuestionBtn) nextQuestionBtn.style.display = 'none';
            if (resultText) {
                resultText.innerHTML += `<br><span style="font-size: 1.2rem;">คะแนนของคุณ: ${score}/${game2Data.questionPool.length}</span>`;
            }
            
            // Enable the main next button to proceed to gift randomization
            setTimeout(() => {
                showGameResult();
            }, 3000);
        }
    } else {
        // Wrong answer - show explanation and allow retry with a new shuffled question set
        if (resultText) {
            resultText.innerHTML = `ผิด! ❌<br>คำตอบที่ถูกคือ: ${question.answers[question.correct]}<br><small style="font-size: 1rem;">${question.explanation}</small><br><br>คำถามจะเปลี่ยนในรอบถัดไป!`;
            resultText.style.color = 'var(--dark-pink)';
        }
        
        // Show retry button that restarts with a new shuffled question set
        if (nextQuestionBtn) {
            nextQuestionBtn.style.display = 'inline-block';
            nextQuestionBtn.textContent = 'คำถามถัดไป';
            nextQuestionBtn.onclick = () => {
                // Create a new shuffled question set when player answers incorrectly
                game2Data.currentQuestionIndex = 0;
                game2Data.questionPool = shuffle([...questions]);
                showQuestion(); // Show the first question from the new shuffled set
            };
        }
    }
}

function nextQuestion() {
    game2Data.currentQuestionIndex++;
    showQuestion();
    
    // Reset button text in case it was changed
    const nextQuestionBtn = document.getElementById('next-question-btn');
    if (nextQuestionBtn) nextQuestionBtn.textContent = 'คำถามถัดไป';
}

// Game 3: K♦️ คันชั่ง – Dark Psychological Edition
function initGame3() {
    // Reset game state
    game3Data.round = 1;
    game3Data.usedNumbers = [];
    game3Data.allPlayers = [
         { name: "แอปปู้ว", isBot: false, choice: null, score: 10, alive: true },
        { name: "พลอย", isBot: true, choice: null, score: 10, alive: true },
        { name: "ฟ้า", isBot: true, choice: null, score: 10, alive: true },
        { name: "แพรว", isBot: true, choice: null, score: 10, alive: true },
        { name: "บอส", isBot: true, choice: null, score: 10, alive: true },
    ];
    
    // Get DOM elements
    const gameArea = document.getElementById('game3-area');
    const roundInfo = document.getElementById('game3-round-info');
    const board = document.getElementById('game3-board');
    const playersDiv = document.getElementById('game3-players');
    const resultDiv = document.getElementById('game3-result');
    const nextRoundBtn = document.getElementById('game3-next-round');
    const restartBtn = document.getElementById('game3-restart');
    const nextGameBtn = document.getElementById('game3-next-game');
    const overlay = document.getElementById('game3-overlay');
    
    // Set initial state
    if (gameArea) gameArea.style.display = 'block';
    if (roundInfo) roundInfo.textContent = '';
    if (board) board.innerHTML = '';
    if (playersDiv) playersDiv.innerHTML = '';
    if (resultDiv) resultDiv.innerHTML = '';
    if (nextRoundBtn) {
        nextRoundBtn.style.display = 'none';
        // Add event listener for next round button
        nextRoundBtn.onclick = () => startGame3Round();
    }
    if (restartBtn) {
        restartBtn.style.display = 'none';
        // Add event listener for restart button
        restartBtn.onclick = () => initGame3();
    }
    if (nextGameBtn) {
        // Add event listener for next game button
        nextGameBtn.onclick = () => {
            // Move to next game (Game 4)
            startGame4();
        };
    }
    if (overlay) {
        overlay.style.display = 'none';
        overlay.innerHTML = '';
    }
    
    startGame3Round();
}

function startGame3Round() {
    // Reset round state
    game3Data.usedNumbers = [];
    const resultDiv = document.getElementById('game3-result');
    const nextRoundBtn = document.getElementById('game3-next-round');
    const restartBtn = document.getElementById('game3-restart');
    const nextGameBtn = document.getElementById('game3-next-game');
    
    if (resultDiv) resultDiv.innerHTML = '';
    if (nextRoundBtn) nextRoundBtn.style.display = 'none';
    if (restartBtn) restartBtn.style.display = 'none';
    if (nextGameBtn) nextGameBtn.style.display = 'none';
    
    // Check game end conditions
    const alivePlayers = game3Data.allPlayers.filter(p => p.alive);
    if (game3Data.round > 10 || alivePlayers.length <= 1) {
        endGame3();
        return;
    }
    
    // Update round info
    const roundInfo = document.getElementById('game3-round-info');
    if (roundInfo) roundInfo.textContent = `รอบที่ ${game3Data.round}/10`;
    
    // Reset player choices
    game3Data.allPlayers.forEach(p => p.choice = null);
    
    // Render game elements
    renderGame3Board();
    renderGame3Players();
}

function renderGame3Board() {
    const board = document.getElementById('game3-board');
    if (!board) return;
    
    board.innerHTML = '';
    for (let i = 0; i <= 100; i++) {
        const cell = document.createElement("div");
        cell.className = "game3-num";
        cell.textContent = i;
        if (game3Data.usedNumbers.includes(i)) {
            cell.classList.add("game3-chosen");
        } else {
            cell.onclick = () => player3Choose(i);
        }
        board.appendChild(cell);
    }
}

function renderGame3Players() {
    const playersDiv = document.getElementById('game3-players');
    if (!playersDiv) return;
    
    playersDiv.innerHTML = "<h3>สถานะผู้เล่น:</h3>";
    game3Data.allPlayers.forEach(p => {
        const hearts = "❤️".repeat(p.score);
        playersDiv.innerHTML += `<div id="game3-p-${p.name}" class="game3-player ${!p.alive ? 'game3-dead' : ''}">${p.name}: ${p.choice !== null ? p.choice : "❓"} | ${hearts}</div>`;
    });
}

function flashGame3Player(name) {
    const el = document.getElementById(`game3-p-${name}`);
    if (!el) return;
    el.classList.add("game3-highlight");
    setTimeout(() => el.classList.remove("game3-highlight"), 600);
}

function player3Choose(num) {
    const player = game3Data.allPlayers.find(p => !p.isBot);
    if (!player.alive || game3Data.usedNumbers.includes(num)) return;

    player.choice = num;
    game3Data.usedNumbers.push(num);
    renderGame3Board();
    renderGame3Players();

    flashGame3Player(player.name);
    setTimeout(() => bot3Turn(), 800);
}

function bot3Turn() {
    const bots = game3Data.allPlayers.filter(p => p.isBot && p.alive);
    const personalities = ["โลภ", "กลัว", "ฉลาด", "สุ่ม"];

    // Process bots sequentially
    let botIndex = 0;
    const processBot = () => {
        if (botIndex >= bots.length) {
            // All bots have made their choices, finish the round
            setTimeout(() => finishGame3Round(), 1000);
            return;
        }

        const bot = bots[botIndex];
        flashGame3Player(bot.name);

        setTimeout(() => {
            let type = personalities[Math.floor(Math.random() * personalities.length)];
            let choice = randRange(
                type === "โลภ" ? 60 : type === "กลัว" ? 0 : type === "ฉลาด" ? 35 : 0,
                type === "โลภ" ? 100 : type === "กลัว" ? 40 : type === "ฉลาด" ? 65 : 100
            );

            while (game3Data.usedNumbers.includes(choice)) {
                choice = randRange(0, 100);
            }

            game3Data.usedNumbers.push(choice);
            bot.choice = choice;
            renderGame3Players();

            botIndex++;
            processBot();
        }, 1000);
    };

    processBot();
}

function typeGame3Text(text, targetElement) {
    if (!targetElement) return;
    
    targetElement.textContent = "";
    let i = 0;
    const interval = setInterval(() => {
        targetElement.textContent += text[i];
        i++;
        if (i >= text.length) clearInterval(interval);
    }, 35);
}

function finishGame3Round() {
    const alive = game3Data.allPlayers.filter(p => p.alive);
    const choices = alive.map(p => p.choice);
    const avg = choices.reduce((a,b)=>a+b,0)/choices.length;
    const target = avg * 0.8;
    const zeroPicked = choices.includes(0);
    const hundredPicked = choices.includes(100);

    let winner;
    if (zeroPicked && hundredPicked) {
        winner = alive.find(p => p.choice === 100);
    } else {
        let minDiff = Infinity;
        alive.forEach(p => {
            const diff = Math.abs(p.choice - target);
            if (diff < minDiff) {
                minDiff = diff;
                winner = p;
            }
        });
    }

    const resultDiv = document.getElementById('game3-result');
    if (resultDiv) {
        const avgBox = document.createElement("div");
        avgBox.className = "game3-averageBox";
        avgBox.innerHTML = `⚖️ ค่าเฉลี่ยในรอบนี้คือ: ${avg.toFixed(2)}`;
        resultDiv.innerHTML = "";
        resultDiv.appendChild(avgBox);

        setTimeout(() => {
            // Create elements for fade-in effect
            const targetDiv = document.createElement("div");
            targetDiv.textContent = `🎯 เป้าหมาย (×0.8): ${target.toFixed(2)}`;
            targetDiv.style.opacity = "0";
            targetDiv.style.transition = "opacity 1s ease-in";
            targetDiv.style.marginBottom = "10px";
            resultDiv.appendChild(targetDiv);
            
            // Fade in target div
            setTimeout(() => {
                targetDiv.style.opacity = "1";
            }, 100);
            
            // Create winner div with green color after target is visible
            setTimeout(() => {
                const winnerDiv = document.createElement("div");
                winnerDiv.innerHTML = `<span style="color: #00ff00;">🏆 ผู้ชนะคือ: ${winner.name} (${winner.choice})</span>`;
                winnerDiv.style.opacity = "0";
                winnerDiv.style.transition = "opacity 1s ease-in";
                winnerDiv.style.marginTop = "10px";
                resultDiv.appendChild(winnerDiv);
                
                // Fade in winner div
                setTimeout(() => {
                    winnerDiv.style.opacity = "1";
                    
                    // Start 3-second countdown after winner is fully visible
                    setTimeout(() => {
                        // Check if player is the last one remaining
                        const player = game3Data.allPlayers.find(p => !p.isBot);
                        const alivePlayers = game3Data.allPlayers.filter(p => p.alive);
                        if (alivePlayers.length === 1 && alivePlayers[0] === player) {
                            // Show result and then start 3-second countdown
                            const nextGameBtn = document.getElementById('game3-next-game');
                            if (nextGameBtn) {
                                nextGameBtn.style.display = "block";
                                // Fade in the next game button
                                setTimeout(() => {
                                    nextGameBtn.style.opacity = "1";
                                    nextGameBtn.style.transition = "opacity 1s ease-in-out";
                                    
                                    // Start 3-second countdown
                                    let count = 3;
                                    nextGameBtn.textContent = `สามารถเล่นเกมถัดไปได้ใน ${count} วินาที`;
                                    nextGameBtn.disabled = true;
                                    
                                    const countdownInterval = setInterval(() => {
                                        count--;
                                        if (count >= 0) {
                                            nextGameBtn.textContent = `สามารถเล่นเกมถัดไปได้ใน ${count} วินาที`;
                                        }
                                        
                                        if (count < 0) {
                                            clearInterval(countdownInterval);
                                            nextGameBtn.textContent = "คลิกเพื่อเล่นเกมถัดไป";
                                            nextGameBtn.disabled = false;
                                            
                                            // Automatically proceed to next game after countdown
                                            setTimeout(() => {
                                                startGame4();
                                            }, 100);
                                        }
                                    }, 1000);
                                }, 500);
                            }
                        }
                    }, 3000); // Wait 3 seconds after winner is fully visible
                }, 100);
            }, 1000); // Delay before showing winner
        }, 1200);
    }
}

function endGame3() {
    const overlay = document.getElementById('game3-overlay');
    if (overlay) {
        overlay.innerHTML = "⚖️ เกมสิ้นสุดแล้ว ⚖️<br><br>สมดุลถูกตัดสิน";
        overlay.style.display = "flex";
    }
    
    const restartBtn = document.getElementById('game3-restart');
    if (restartBtn) {
        restartBtn.style.display = "block";
        // Add fade-in effect for the restart button
        setTimeout(() => {
            restartBtn.style.opacity = "1";
            restartBtn.style.transition = "opacity 1s ease-in-out";
        }, 500);
    }
    
    // Check if player won the game
    const player = game3Data.allPlayers.find(p => !p.isBot);
    const alivePlayers = game3Data.allPlayers.filter(p => p.alive);
    
    // Only show next game button if player is still alive
    if (player.alive) {
        // First show the result, then show the 3-second countdown
        setTimeout(() => {
            const nextGameBtn = document.getElementById('game3-next-game');
            if (nextGameBtn) {
                nextGameBtn.style.display = "block";
                // Fade in the next game button
                setTimeout(() => {
                    nextGameBtn.style.opacity = "1";
                    nextGameBtn.style.transition = "opacity 1s ease-in-out";
                    
                    // Start 3-second countdown
                    let count = 3;
                    nextGameBtn.textContent = `สามารถเล่นเกมถัดไปได้ใน ${count} วินาที`;
                    nextGameBtn.disabled = true;
                    
                    const countdownInterval = setInterval(() => {
                        count--;
                        if (count >= 0) {
                            nextGameBtn.textContent = `สามารถเล่นเกมถัดไปได้ใน ${count} วินาที`;
                        }
                        
                        if (count < 0) {
                            clearInterval(countdownInterval);
                            nextGameBtn.textContent = "คลิกเพื่อเล่นเกมถัดไป";
                            nextGameBtn.disabled = false;
                            
                            // Automatically proceed to next game after countdown
                            setTimeout(() => {
                                startGame4();
                            }, 100);
                        }
                    }, 1000);
                }, 500);
            }
        }, 3000); // Wait 3 seconds to show the result before showing the countdown
        
        // Disable number selection by clearing the board
        const board = document.getElementById('game3-board');
        if (board) board.innerHTML = '';
        
        return;
    }

    // Show result and then start 3-second countdown
    const nextGameBtn = document.getElementById('game3-next-game');
    if (nextGameBtn) {
        nextGameBtn.style.display = "block";
        // Fade in the next game button
        setTimeout(() => {
            nextGameBtn.style.opacity = "1";
            nextGameBtn.style.transition = "opacity 1s ease-in-out";
            
            // Start 3-second countdown
            let count = 3;
            nextGameBtn.textContent = `สามารถเล่นเกมถัดไปได้ใน ${count} วินาที`;
            nextGameBtn.disabled = true;
            
            const countdownInterval = setInterval(() => {
                count--;
                if (count >= 0) {
                    nextGameBtn.textContent = `สามารถเล่นเกมถัดไปได้ใน ${count} วินาที`;
                }
                
                if (count < 0) {
                    clearInterval(countdownInterval);
                    nextGameBtn.textContent = "คลิกเพื่อเล่นเกมถัดไป";
                    nextGameBtn.disabled = false;
                    
                    // Automatically proceed to next game after countdown
                    setTimeout(() => {
                        startGame4();
                    }, 100);
                }
            }, 1000);
        }, 500);
    }
}

function showGame3NextButton() {
    // This function is no longer needed as we're handling the button display in finishGame3Round and endGame3
}

function randRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Game 4: Color Game
function initGame4() {
    // Reset result
    const colorResult = document.getElementById('color-result');
    const colorChoices = document.getElementById('color-choices');
    
    if (colorResult) colorResult.innerHTML = '';
    if (colorChoices) colorChoices.style.display = 'block';
    
    // Select a random color
    const randomIndex = Math.floor(Math.random() * game4Data.colors.length);
    game4Data.correctColor = game4Data.colors[randomIndex];
    
    // Display the color
    const colorDisplay = document.getElementById('color-display');
    if (colorDisplay) {
        colorDisplay.style.backgroundColor = game4Data.correctColor;
    }
    
    // After a delay, hide color and show choices
    setTimeout(() => {
        if (colorDisplay) {
            colorDisplay.style.backgroundColor = '#f0f0f0';
        }
        if (colorChoices) {
            colorChoices.style.display = 'block';
        }
    }, 2000);
}

function checkColor(selectedColor) {
    const isCorrect = selectedColor === game4Data.correctColor;
    const colorResult = document.getElementById('color-result');
    const colorChoices = document.getElementById('color-choices');
    
    if (isCorrect) {
        if (colorResult) {
            colorResult.innerHTML = `<p style="color: green; font-size: 1.3rem;">✅ ถูกต้อง! นี่คือสีที่คุณเห็น</p>
                                    <div style="width: 100px; height: 100px; margin: 10px auto; border-radius: 50%; background-color: ${game4Data.correctColor};"></div>`;
        }
        score += 1;
    } else {
        if (colorResult) {
            colorResult.innerHTML = `<p style="color: red; font-size: 1.3rem;">❌ ผิด! นี่คือสีที่คุณควรเลือก:</p>
                                    <div style="width: 100px; height: 100px; margin: 10px auto; border-radius: 50%; background-color: ${game4Data.correctColor};"></div>`;
        }
    }
    
    // Hide choices
    if (colorChoices) colorChoices.style.display = 'none';
    
    // Show result after a delay
    setTimeout(() => {
        showGameResult();
    }, 3000);
}

// Game 5: Emotion Game
function initGame5() {
    // Reset result
    const emotionResult = document.getElementById('emotion-result');
    const emotionChoices = document.getElementById('emotion-choices');
    
    if (emotionResult) emotionResult.innerHTML = '';
    
    // Select a random emotion
    const randomIndex = Math.floor(Math.random() * game5Data.emotions.length);
    game5Data.correctEmotion = game5Data.emotions[randomIndex].name;
    
    // Display the emotion
    const emotionDisplay = document.getElementById('emotion-display');
    if (emotionDisplay) {
        emotionDisplay.textContent = game5Data.emotions[randomIndex].emoji;
    }
    
    // Show choices
    if (emotionChoices) emotionChoices.style.display = 'block';
}

function checkEmotion(selectedEmotion) {
    const isCorrect = selectedEmotion === game5Data.correctEmotion;
    const emotionResult = document.getElementById('emotion-result');
    const emotionChoices = document.getElementById('emotion-choices');
    
    // Hide choices
    if (emotionChoices) emotionChoices.style.display = 'none';
    
    // Find the correct emoji for display
    const correctEmojiObj = game5Data.emotions.find(e => e.name === game5Data.correctEmotion);
    const selectedEmojiObj = game5Data.emotions.find(e => e.name === selectedEmotion);
    
    const correctEmoji = correctEmojiObj ? correctEmojiObj.emoji : '';
    const selectedEmoji = selectedEmojiObj ? selectedEmojiObj.emoji : '';
    
    if (isCorrect) {
        if (emotionResult) {
            emotionResult.innerHTML = `<p style="color: green; font-size: 1.3rem;">✅ คุณชนะเกมอารมณ์! นี่คืออารมณ์ที่คุณเห็น: ${correctEmoji}</p>`;
        }
        score += 1;
        // ไม่ต้องรอ 3 วิ ไม่ต้องไปหน้าไหน ค้างไว้ที่หน้าชนะ
        // ไม่ต้องเรียก showGameResult()
    } else {
        if (emotionResult) {
            emotionResult.innerHTML = `<p style="color: red; font-size: 1.3rem;">❌ ผิด! คุณเลือก: ${selectedEmoji}</p>
                                      <p style="font-size: 1.3rem; margin-top: 10px;">อารมณ์ที่ถูกต้องคือ: ${correctEmoji}</p>`;
        }
        // ยังเรียก showGameResult() หลัง 3 วิ เฉพาะกรณีผิด
        setTimeout(() => {
            showGameResult();
        }, 3000);
    }
}

// Show final game result
function showGameResult() {
    // If this is the end of a single game (not the entire sequence)
    if (currentGame >= 1 && currentGame <= 5) {
        // Mark this game as completed
        if (gamesCompleted < currentGame) {
            gamesCompleted = currentGame;
        }
        
        // If this was the last game, show final results
        if (currentGame === 5) {
            // Hide all game screens
            for (let i = 1; i <= 5; i++) {
                const gameElement = document.getElementById(`game${i}`);
                if (gameElement) gameElement.style.display = 'none';
            }
            
            // Show result screen
            const gameResultElement = document.getElementById('game-result');
            if (gameResultElement) gameResultElement.style.display = 'block';
            
            // Display result message
            const finalResult = document.getElementById('final-result');
            if (finalResult) {
                if (score > 0) {
                    finalResult.innerHTML = `🎉 ยินดีด้วย! คุณได้คะแนน ${score} คะแนน<br>จากเกมจิตวิทยา`;
                } else {
                    finalResult.innerHTML = `👏 ขอบคุณที่เล่นเกมกับเรา!<br>คุณได้คะแนน ${score} คะแนน`;
                }
            }
            
            // Enable the next button
            const gameNextBtn = document.getElementById('game-next-btn');
            if (gameNextBtn) gameNextBtn.disabled = false;
        } else {
            // Move to next game automatically
            setTimeout(() => {
                startGame(currentGame + 1);
            }, 2000);
        }
    }
}

// Reset game to menu
function resetGame() {
    // Hide result screen and show menu
    const gameResultElement = document.getElementById('game-result');
    const gameMenuElement = document.getElementById('game-menu');
    const gameNextBtn = document.getElementById('game-next-btn');
    
    if (gameResultElement) gameResultElement.style.display = 'none';
    if (gameMenuElement) gameMenuElement.style.display = 'block';
    
    // Reset score and completed games
    score = 0;
    gamesCompleted = 0;
    
    // Disable the next button
    if (gameNextBtn) gameNextBtn.disabled = true;
}
