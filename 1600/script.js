// Presentation State & Global References
let currentSlide = 1;
const totalSlides = 10;

// Slide Titles Map for Overview Drawer
const slideTitles = [
  "1-Slayd: JavaScript Data Types",
  "2-Slayd: 8 ta Data Type Guruhi",
  "3-Slayd: String Data Type",
  "4-Slayd: Number va BigInt",
  "5-Slayd: Boolean Data Type",
  "6-Slayd: Undefined va Null",
  "7-Slayd: Object Data Type",
  "8-Slayd: Symbol Data Type",
  "9-Slayd: typeof Operatori",
  "10-Slayd: Mini Quiz + Xulosa"
];

// 1. Live Code Executor function (Exposed on window)
window.runSnippet = function(slideNum) {
  const outputEl = document.getElementById(`output-${slideNum}`);
  if (!outputEl) return;

  outputEl.innerHTML = '';
  const logs = [];

  // Capture console.log
  const originalLog = console.log;
  console.log = function (...args) {
    logs.push(args.map((a) => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' '));
    originalLog.apply(console, args);
  };

  try {
    if (slideNum === 1) {
      // 1-SLAYD: JavaScript Data Types (Ma'lumot turlari)
      let name = "Ali";       // String (Matn)
      let age = 20;          // Number (Son)
      let isStudent = true;   // Boolean (Mantiqiy)
      console.log("Ismi:", name, "| typeof:", typeof name);
      console.log("Yoshi:", age, "| typeof:", typeof age);
      console.log("Talabami:", isStudent, "| typeof:", typeof isStudent);
    } else if (slideNum === 2) {
      // 2-SLAYD: 8 ta Data Type Guruhi (Primitive va Non-Primitive)
      // Primitive turlar: String, Number, BigInt, Boolean, Undefined, Null, Symbol
      // Non-Primitive tur: Object
      let str = "Salom";                   // Primitive (String)
      let num = 100;                       // Primitive (Number)
      let user = { name: "Ali", age: 20 }; // Non-Primitive (Object)
      console.log("Primitive misol:", str, "(typeof:", typeof str, ")");
      console.log("Primitive misol:", num, "(typeof:", typeof num, ")");
      console.log("Non-Primitive misol:", user, "(typeof:", typeof user, ")");
    } else if (slideNum === 3) {
      // 3-SLAYD: String Data Type (Matnli ma'lumotlar)
      let name = "Ali";                  // Qo'shtirnoq ichidagi matn
      let city = 'Tashkent';             // Birtirnoq ichidagi matn
      let a = "Bu 'yaxshi' fikr";        // Matn ichida birtirnoq ishlatish
      let b = 'Uning ismi "Ali"';        // Matn ichida qo'shtirnoq ishlatish
      let message = "Welcome to JavaScript!";
      console.log("typeof name:", typeof name); // "string"
      console.log("a:", a);
      console.log("b:", b);
      console.log("message:", message);
    } else if (slideNum === 4) {
      // 4-SLAYD: Number va BigInt (Sonlar va Katta sonlar)
      let age = 20;                      // Butun son (Integer)
      let price = 15.5;                  // O'nlik kasr son (Float)
      let exp = 123e5;                   // Eksponentsial ko'rinish (12300000)
      console.log("typeof age:", typeof age);
      console.log("exp qiymati:", exp);

      // BigInt: Juda katta sonlar uchun, oxirida 'n' yoziladi
      let bigNumber = 1234567890123456789012345n;
      console.log("bigNumber:", bigNumber);
      console.log("typeof bigNumber:", typeof bigNumber); // "bigint"
    } else if (slideNum === 5) {
      // 5-SLAYD: Boolean Data Type (Mantiqiy tur: true yoki false)
      let isStudent = true;              // Rost (To'g'ri)
      let age = 20;
      console.log("5 == 5 :", 5 == 5);     // true (Tenglik sharti)
      console.log("5 == 8 :", 5 == 8);     // false (Noto'g'ri shart)
      console.log("age >= 18 :", age >= 18); // true

      if (age >= 18) {
        console.log("▶ Kirishga ruxsat berildi!");
      }
    } else if (slideNum === 6) {
      // 6-SLAYD: Undefined va Null (Qiymatsizlik hollar)
      let car;                           // 1. Undefined: O'zgaruvchi e'lon qilingan, lekin qiymat berilmagan
      console.log("car qiymati:", car);     // undefined
      console.log("typeof car:", typeof car); // "undefined"

      let selectedUser = null;           // 2. Null: Ataylab bo'sh qiymat berilgan
      console.log("selectedUser:", selectedUser); // null
      console.log("typeof null:", typeof null);  // "object" (JavaScript'dagi tarixiy xatolik/bug)
    } else if (slideNum === 7) {
      // 7-SLAYD: Object Data Type (Murakkab ma'lumot turi)
      const person = {                   // Key-Value (Kalit-Qiymat) juftligi
        firstName: "John",
        lastName: "Doe",
        age: 20
      };
      console.log("Ismi:", person.firstName); // John
      console.log("Yoshi:", person.age);       // 20

      // Array (Massiv) ham Object turiga kiradi
      const cars = ["BMW", "Volvo"];
      console.log("typeof cars:", typeof cars); // "object"
    } else if (slideNum === 8) {
      // 8-SLAYD: Symbol Data Type (Noyob va o'zgarmas identifikator)
      const id1 = Symbol("id");          // Noyob ID yaratish
      const id2 = Symbol("id");          // Yana bir noyob ID yaratish
      console.log("id1 === id2 :", id1 === id2); // false (Ikkita Symbol bir xil nomda bo'lsa ham teng bo'lmaydi!)
      console.log("typeof id1 :", typeof id1);   // "symbol"
    } else if (slideNum === 9) {
      // 9-SLAYD: typeof Operatori (Ma'lumot turini aniqlash)
      console.log('typeof "Hello":', typeof "Hello");        // "string"
      console.log('typeof 25:', typeof 25);                 // "number"
      console.log('typeof 25n:', typeof 25n);               // "bigint"
      console.log('typeof true:', typeof true);             // "boolean"
      console.log('typeof undefined:', typeof undefined);    // "undefined"
      console.log('typeof Symbol("id"):', typeof Symbol("id"));// "symbol"
      console.log('typeof {}:', typeof {});                 // "object"
      console.log('typeof null:', typeof null);             // "object"
    }
  } catch (err) {
    logs.push("Xatolik: " + err.message);
  } finally {
    console.log = originalLog;
  }

  // Render logs inside output element
  logs.forEach((msg) => {
    const line = document.createElement('div');
    line.className = 'term-line';
    line.textContent = `> ${msg}`;
    outputEl.appendChild(line);
  });
};

// Navigation Control Functions
function goToSlide(slideNum) {
  if (slideNum < 1 || slideNum > totalSlides) return;
  currentSlide = slideNum;
  updateSlideView();
}

function nextSlide() {
  if (currentSlide < totalSlides) {
    currentSlide++;
    updateSlideView();
  }
}

function prevSlide() {
  if (currentSlide > 1) {
    currentSlide--;
    updateSlideView();
  }
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch((err) => console.warn(err));
  } else {
    if (document.exitFullscreen) document.exitFullscreen();
  }
}

function updateSlideView() {
  const slides = document.querySelectorAll('.slide');
  const progressBar = document.getElementById('progressBar');
  const slideCounter = document.getElementById('slideCounter');
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const slideDotsContainer = document.getElementById('slideDots');

  slides.forEach((slide) => {
    const num = parseInt(slide.getAttribute('data-slide'));
    if (num === currentSlide) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });

  if (progressBar) progressBar.style.width = `${(currentSlide / totalSlides) * 100}%`;
  if (slideCounter) slideCounter.textContent = `${currentSlide} / ${totalSlides}`;

  if (slideDotsContainer) {
    const dots = slideDotsContainer.querySelectorAll('.dot-item');
    dots.forEach((dot, idx) => {
      if (idx + 1 === currentSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  if (btnPrev) btnPrev.disabled = currentSlide === 1;
  if (btnNext) btnNext.disabled = currentSlide === totalSlides;
}

function createSlideDots() {
  const slideDotsContainer = document.getElementById('slideDots');
  if (!slideDotsContainer) return;
  slideDotsContainer.innerHTML = '';
  for (let i = 1; i <= totalSlides; i++) {
    const dot = document.createElement('div');
    dot.className = `dot-item ${i === currentSlide ? 'active' : ''}`;
    dot.setAttribute('title', `Slayd ${i}`);
    dot.addEventListener('click', () => goToSlide(i));
    slideDotsContainer.appendChild(dot);
  }
}

function createOverviewGrid() {
  const gridSlidesList = document.getElementById('gridSlidesList');
  const gridModal = document.getElementById('gridModal');
  if (!gridSlidesList) return;
  gridSlidesList.innerHTML = '';
  slideTitles.forEach((title, idx) => {
    const item = document.createElement('div');
    item.className = 'grid-slide-thumb';
    item.innerHTML = `
      <span class="thumb-num">SLAYD ${idx + 1}</span>
      <span class="thumb-title">${title.split(':')[1] || title}</span>
    `;
    item.addEventListener('click', () => {
      goToSlide(idx + 1);
      if (gridModal) gridModal.classList.remove('open');
    });
    gridSlidesList.appendChild(item);
  });
}

// 2. Interactive Mini Quiz System
const quizQuestions = [
  {
    q: "1. \"Hello\" qanday data type?",
    opts: ["A) Number", "B) String", "C) Boolean", "D) Object"],
    ans: 1,
    exp: "To'g'ri! Qo'shtirnoq ichidagi har qanday matn String hisoblanadi."
  },
  {
    q: "2. 25n qanday data type?",
    opts: ["A) Number", "B) String", "C) BigInt", "D) Boolean"],
    ans: 2,
    exp: "To'g'ri! Oxirida 'n' harfi bo'lgan sonlar BigInt hisoblanadi."
  },
  {
    q: "3. Boolean nechta qiymatga ega?",
    opts: ["A) 1", "B) 2", "C) 3", "D) 4"],
    ans: 1,
    exp: "To'g'ri! Boolean faqat 2 xil qiymatga ega: true va false."
  },
  {
    q: "4. Qiymat berilmagan o'zgaruvchining qiymati nima? (let x;)",
    opts: ["A) null", "B) false", "C) undefined", "D) object"],
    ans: 2,
    exp: "To'g'ri! O'zgaruvchi e'lon qilinib, qiymat berilmasa undefined bo'ladi."
  },
  {
    q: "5. Quyidagi kod nima qaytaradi? typeof \"JavaScript\"",
    opts: ["A) \"number\"", "B) \"object\"", "C) \"boolean\"", "D) \"string\""],
    ans: 3,
    exp: "To'g'ri! typeof \"JavaScript\" -> \"string\" qaytaradi."
  }
];

let currentQuizIdx = 0;

function initQuiz() {
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const qObj = quizQuestions[currentQuizIdx];
  const questionEl = document.getElementById('quizQuestion');
  const optionsEl = document.getElementById('quizOptions');
  const feedbackEl = document.getElementById('quizFeedback');
  const progressNumEl = document.querySelector('.quiz-progress-num');

  if (!questionEl || !optionsEl) return;

  if (progressNumEl) progressNumEl.textContent = `SAVOL ${currentQuizIdx + 1} / ${quizQuestions.length}`;
  questionEl.textContent = qObj.q;
  optionsEl.innerHTML = '';
  if (feedbackEl) feedbackEl.textContent = '';

  qObj.opts.forEach((optText, optIdx) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt-btn';
    btn.textContent = optText;
    btn.addEventListener('click', () => checkQuizAnswer(optIdx));
    optionsEl.appendChild(btn);
  });
}

function checkQuizAnswer(selectedIdx) {
  const qObj = quizQuestions[currentQuizIdx];
  const buttons = document.querySelectorAll('.quiz-opt-btn');
  const feedbackEl = document.getElementById('quizFeedback');

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === qObj.ans) {
      btn.classList.add('correct');
    } else if (idx === selectedIdx) {
      btn.classList.add('wrong');
    }
  });

  if (feedbackEl) {
    if (selectedIdx === qObj.ans) {
      feedbackEl.style.color = '#22c55e';
      feedbackEl.textContent = '🎉 ' + qObj.exp;
    } else {
      feedbackEl.style.color = '#ef4444';
      feedbackEl.textContent = '❌ Noto\'g\'ri. ' + qObj.exp;
    }
  }

  setTimeout(() => {
    if (currentQuizIdx < quizQuestions.length - 1) {
      currentQuizIdx++;
      renderQuizQuestion();
    } else if (feedbackEl) {
      feedbackEl.style.color = '#f7df1e';
      feedbackEl.textContent = '🏆 Barcha savollarga javob berdingiz! Barakalla!';
    }
  }, 2200);
}

// 3. Bind All Global UI Listeners
function initApp() {
  createSlideDots();
  createOverviewGrid();
  updateSlideView();
  initQuiz();

  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const btnGrid = document.getElementById('btnGrid');
  const btnFullscreen = document.getElementById('btnFullscreen');
  const gridModal = document.getElementById('gridModal');
  const btnCloseGrid = document.getElementById('btnCloseGrid');

  if (btnPrev) btnPrev.onclick = prevSlide;
  if (btnNext) btnNext.onclick = nextSlide;
  if (btnGrid && gridModal) btnGrid.onclick = () => gridModal.classList.add('open');
  if (btnCloseGrid && gridModal) btnCloseGrid.onclick = () => gridModal.classList.remove('open');
  if (btnFullscreen) btnFullscreen.onclick = toggleFullscreen;

  // Keyboard Shortcuts
  document.onkeydown = function(e) {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
      nextSlide();
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      prevSlide();
    } else if (e.key === 'f' || e.key === 'F') {
      toggleFullscreen();
    } else if (e.key >= '1' && e.key <= '9') {
      goToSlide(parseInt(e.key));
    } else if (e.key === '0') {
      goToSlide(10);
    }
  };
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
