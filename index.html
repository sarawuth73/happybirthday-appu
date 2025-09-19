<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>สุขสันต์วันเกิดนะคนดี</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <style>
        :root {
            --primary-pink: #FFC0CB;
            --secondary-pink: #FFB6C1;
            --dark-pink: #FF69B4;
            --text-color: #333;
            --bg-color: #FFF0F5; /* Lavender Blush */
            --red-envelope: #e74c3c;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Kanit', sans-serif;
            background-color: var(--bg-color);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            text-align: center;
            color: var(--text-color);
            padding: 20px;
        }

        .main-container {
            background-color: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            width: 100%;
        }
        
        h1 {
            color: var(--dark-pink);
            font-size: 2.8rem;
            margin-bottom: 10px;
        }

        h2 {
            font-weight: 300;
            font-size: 1.5rem;
            margin-bottom: 30px;
        }

        .button-group {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        /* --- ✨ SECTION ที่แก้ไขปุ่ม --- */
        .btn {
            padding: 18px 25px; /* เพิ่มความสูงเล็กน้อย */
            border: none;
            border-radius: 12px; /* [แก้ไข] เปลี่ยนจาก 50px เป็น 12px เพื่อให้เป็นสี่เหลี่ยมมน */
            font-family: 'Kanit', sans-serif;
            font-size: 1.2rem;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 12px;
            font-weight: 500;
            /* [แก้ไข] ปรับเงาให้นุ่มนวลเหมือนการ์ด */
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08); 
        }

        .btn:hover {
            /* [แก้ไข] เอฟเฟกต์ตอน hover ให้ดูเหมือนการ์ดยกขึ้น */
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 8px 25px rgba(255, 105, 180, 0.3); /* เพิ่มเงาสีชมพูฟุ้งๆ */
        }
        /* --- จบ Section ที่แก้ไข --- */
        
        /* Specific Button Styles */
        #open-card-btn {
            background-color: var(--red-envelope);
            color: white;
        }

        #open-memory-btn {
            background-color: var(--dark-pink);
            color: white;
        }

        #random-gift-btn {
            background-color: var(--primary-pink);
            color: var(--text-color);
        }

        /* Modal Styles (Pop-ups) */
        .modal {
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.4s ease, visibility 0s linear 0.4s;
        }

        .modal.show {
            opacity: 1;
            visibility: visible;
            transition: opacity 0.4s ease;
        }

        .modal-content {
            background-color: white;
            padding: 30px;
            border-radius: 15px;
            max-width: 90%;
            width: 500px;
            text-align: center;
            position: relative;
            transform: scale(0.9);
            transition: transform 0.4s ease;
        }
        
        .modal.show .modal-content {
            transform: scale(1);
        }

        .close-btn {
            position: absolute;
            top: 10px;
            right: 15px;
            font-size: 2rem;
            color: #aaa;
            cursor: pointer;
            transition: color 0.2s;
        }

        .close-btn:hover {
            color: #333;
        }
        
        /* Card Modal */
        #card-modal p {
            font-size: 1.2rem;
            line-height: 1.8;
            margin-top: 20px;
        }
        
        /* Memory Modal */
        .memory-gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 15px;
            margin-top: 20px;
        }
        
        .memory-gallery img {
            width: 100%;
            height: 120px;
            object-fit: cover;
            border-radius: 10px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .memory-gallery img:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        
        /* Gift Modal */
        #gift-result {
            font-size: 2rem;
            font-weight: bold;
            color: var(--dark-pink);
            margin: 20px 0;
            min-height: 50px;
        }
        
        #gift-modal h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
        }

    </style>
</head>
<body>

    <div class="main-container">
        <h1>Happy Birthday!</h1>
        <h2>มีความสุขมากๆนะ ที่รัก</h2>
        <div class="button-group">
            <button class="btn" id="open-card-btn">
                <i class="fa-solid fa-envelope"></i>
                เปิดการ์ดอวยพร
            </button>
            <button class="btn" id="open-memory-btn">
                <i class="fa-solid fa-images"></i>
                รูปภาพความทรงจำ
            </button>
            <button class="btn" id="random-gift-btn">
                <i class="fa-solid fa-gift"></i>
                สุ่มของขวัญพิเศษ
            </button>
        </div>
    </div>

    <div id="card-modal" class="modal">
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <i class="fa-solid fa-cake-candles" style="font-size: 3rem; color: var(--dark-pink);"></i>
            <h2>ถึงคนพิเศษของฉัน</h2>
            <p>
                สุขสันต์วันเกิดนะ! ขอให้วันนี้และทุกๆ วันของเธอมีแต่รอยยิ้มและความสุข
                ขอบคุณที่เข้ามาเป็นสิ่งดีๆ ในชีวิตนะ รักเธอที่สุดเลย ❤️
            </p>
        </div>
    </div>

    <div id="memory-modal" class="modal">
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <i class="fa-solid fa-heart" style="font-size: 3rem; color: var(--primary-pink);"></i>
            <h2>ความทรงจำของเรา</h2>
            <div class="memory-gallery">
                <img src="https://via.placeholder.com/150/FFC0CB/000000?Text=You" alt="Memory 1">
                <img src="https://via.placeholder.com/150/FFB6C1/000000?Text=And" alt="Memory 2">
                <img src="https://via.placeholder.com/150/FF69B4/FFFFFF?Text=Me" alt="Memory 3">
                <img src="https://via.placeholder.com/150/FFF0F5/000000?Text=Love" alt="Memory 4">
                <img src="https://via.placeholder.com/150/DB7093/FFFFFF?Text=HBD" alt="Memory 5">
                <img src="https://via.placeholder.com/150/C71585/FFFFFF?Text=นะค้าบ" alt="Memory 6">
            </div>
        </div>
    </div>
    
    <div id="gift-modal" class="modal">
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h3>กำลังสุ่มของขวัญ...</h3>
            <div id="gift-result">🎁</div>
            <p id="gift-congrats" style="visibility: hidden;">ยินดีด้วย! ของขวัญของคุณคือ...</p>
        </div>
    </div>


    <script>
        // --- Get Elements ---
        const openCardBtn = document.getElementById('open-card-btn');
        const openMemoryBtn = document.getElementById('open-memory-btn');
        const randomGiftBtn = document.getElementById('random-gift-btn');

        const cardModal = document.getElementById('card-modal');
        const memoryModal = document.getElementById('memory-modal');
        const giftModal = document.getElementById('gift-modal');

        const closeBtns = document.querySelectorAll('.close-btn');
        
        // --- Functions to open/close modals ---
        function openModal(modal) {
            modal.classList.add('show');
        }

        function closeModal(modal) {
            modal.classList.remove('show');
        }

        // --- Event Listeners for opening modals ---
        openCardBtn.addEventListener('click', () => openModal(cardModal));
        openMemoryBtn.addEventListener('click', () => openModal(memoryModal));

        // --- Event Listener for closing modals ---
        closeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                closeModal(cardModal);
                closeModal(memoryModal);
                closeModal(giftModal);
            });
        });
        
        // Close modal when clicking outside of the content
        window.addEventListener('click', (event) => {
            if (event.target === cardModal) closeModal(cardModal);
            if (event.target === memoryModal) closeModal(memoryModal);
            if (event.target === giftModal) closeModal(giftModal);
        });

        // --- Gift Randomizer Logic ---
        randomGiftBtn.addEventListener('click', () => {
            const gifts = ['สร้อยคอ', 'ดอกไม้', 'กำไลข้อมือ', 'แหวน', 'ตุ๊กตา', 'ดินเนอร์'];
            const fixedResult = 'สร้อยคอ'; // <--- ผลลัพธ์ที่ต้องการ
            const giftResultEl = document.getElementById('gift-result');
            const giftCongratsEl = document.getElementById('gift-congrats');

            // Reset state
            giftResultEl.style.color = 'var(--dark-pink)';
            giftCongratsEl.style.visibility = 'hidden';
            
            openModal(giftModal);
            
            let randomInterval = setInterval(() => {
                const randomGift = gifts[Math.floor(Math.random() * gifts.length)];
                giftResultEl.textContent = randomGift;
            }, 100); // สุ่มทุกๆ 0.1 วินาที

            // Stop randomizing after 3 seconds and show the fixed result
            setTimeout(() => {
                clearInterval(randomInterval);
                giftResultEl.textContent = fixedResult;
                giftCongratsEl.style.visibility = 'visible';
                
                // Add a little celebration effect
                giftResultEl.style.transform = 'scale(1.2)';
                giftResultEl.style.transition = 'transform 0.3s ease';
                setTimeout(() => {
                    giftResultEl.style.transform = 'scale(1)';
                }, 300);

            }, 3000); // ทำงานหลังจาก 3 วินาที
        });

    </script>
</body>
</html>