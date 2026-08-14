export const questions = [
  {
    id: 1,
    question: "JavaScriptda o‘zgaruvchi e'lon qilish uchun qaysi kalit so‘zlardan foydalanish mumkin?",
    options: [
      { id: "A", text: "var, let, const" },
      { id: "B", text: "variable, let, define" },
      { id: "C", text: "int, string, const" },
      { id: "D", text: "new, var, value" }
    ],
    correctOptionId: "A"
  },
  {
    id: 2,
    question: "Quyidagi kod natijasi nima bo‘ladi?",
    code: `let age = 15;\nage = 16;\n\nconsole.log(age);`,
    options: [
      { id: "A", text: "15" },
      { id: "B", text: "16" },
      { id: "C", text: "15 16" },
      { id: "D", text: "Xatolik" }
    ],
    correctOptionId: "B"
  },
  {
    id: 3,
    question: "Quyidagi kodda nima chiqadi?",
    code: `const name = "Ali";\nname = "Vali";\n\nconsole.log(name);`,
    options: [
      { id: "A", text: "Ali" },
      { id: "B", text: "Vali" },
      { id: "C", text: "AliVali" },
      { id: "D", text: "Xatolik yuz beradi" }
    ],
    correctOptionId: "D"
  },
  {
    id: 4,
    question: "Quyidagi kod natijasi nima?",
    code: `let x = 5;\nlet y = 3;\n\nconsole.log(x + y * 2);`,
    options: [
      { id: "A", text: "16" },
      { id: "B", text: "11" },
      { id: "C", text: "13" },
      { id: "D", text: "10" }
    ],
    correctOptionId: "B"
  },
  {
    id: 5,
    question: "Quyidagi ifodaning natijasi qancha?",
    code: `10 + 2 * 3`,
    options: [
      { id: "A", text: "36" },
      { id: "B", text: "16" },
      { id: "C", text: "12" },
      { id: "D", text: "18" }
    ],
    correctOptionId: "B"
  },
  {
    id: 6,
    question: "Quyidagi ifodaning natijasi qancha?",
    code: `(10 + 2) * 3`,
    options: [
      { id: "A", text: "16" },
      { id: "B", text: "32" },
      { id: "C", text: "36" },
      { id: "D", text: "30" }
    ],
    correctOptionId: "C"
  },
  {
    id: 7,
    question: "for loop qachon foydali?",
    options: [
      { id: "A", text: "Biror amalni bir necha marta takrorlashda" },
      { id: "B", text: "Faqat CSS yozishda" },
      { id: "C", text: "Faqat o‘zgaruvchi yaratishda" },
      { id: "D", text: "HTML element yaratishda" }
    ],
    correctOptionId: "A"
  },
  {
    id: 8,
    question: "Quyidagi kod necha marta Hello chiqaradi?",
    code: `for (let i = 0; i < 5; i++) {\n    console.log("Hello");\n}`,
    options: [
      { id: "A", text: "4" },
      { id: "B", text: "5" },
      { id: "C", text: "6" },
      { id: "D", text: "Cheksiz" }
    ],
    correctOptionId: "B"
  },
  {
    id: 9,
    question: "Quyidagi kodning natijasi nima?",
    code: `for (let i = 1; i <= 3; i++) {\n    console.log(i);\n}`,
    options: [
      { id: "A", text: "0 1 2" },
      { id: "B", text: "1 2 3" },
      { id: "C", text: "1 2" },
      { id: "D", text: "0 1 2 3" }
    ],
    correctOptionId: "B"
  },
  {
    id: 10,
    question: "Quyidagi loopda i qiymatlari qaysilar bo‘ladi?",
    code: `for (let i = 0; i < 10; i += 2) {\n    console.log(i);\n}`,
    options: [
      { id: "A", text: "0 1 2 3 4 5 6 7 8 9" },
      { id: "B", text: "2 4 6 8 10" },
      { id: "C", text: "0 2 4 6 8" },
      { id: "D", text: "1 3 5 7 9" }
    ],
    correctOptionId: "C"
  },
  {
    id: 11,
    question: "Quyidagi kod necha marta ishlaydi?",
    code: `let i = 1;\n\nwhile (i <= 5) {\n    console.log(i);\n    i++;\n}`,
    options: [
      { id: "A", text: "4" },
      { id: "B", text: "5" },
      { id: "C", text: "6" },
      { id: "D", text: "Cheksiz" }
    ],
    correctOptionId: "B"
  },
  {
    id: 12,
    question: "Quyidagi kodda muammo nimada?",
    code: `let i = 1;\n\nwhile (i <= 5) {\n    console.log(i);\n}`,
    options: [
      { id: "A", text: "while ishlamaydi" },
      { id: "B", text: "console.log() noto‘g‘ri" },
      { id: "C", text: "i o‘zgarmagani uchun loop cheksiz davom etadi" },
      { id: "D", text: "let ishlatib bo‘lmaydi" }
    ],
    correctOptionId: "C"
  },
  {
    id: 13,
    question: "break nima qiladi? Natija qanday bo‘ladi?",
    code: `for (let i = 1; i <= 10; i++) {\n    if (i === 5) {\n        break;\n    }\n    console.log(i);\n}`,
    options: [
      { id: "A", text: "1 2 3 4" },
      { id: "B", text: "1 2 3 4 5" },
      { id: "C", text: "5 6 7 8 9 10" },
      { id: "D", text: "1 2 3 4 5 6 7 8 9 10" }
    ],
    correctOptionId: "A"
  },
  {
    id: 14,
    question: "continue nima qiladi?",
    code: `for (let i = 1; i <= 5; i++) {\n    if (i === 3) {\n        continue;\n    }\n    console.log(i);\n}`,
    options: [
      { id: "A", text: "1 2 3 4 5" },
      { id: "B", text: "1 2 4 5" },
      { id: "C", text: "1 2" },
      { id: "D", text: "Loop to‘xtaydi" }
    ],
    correctOptionId: "B"
  },
  {
    id: 15,
    question: "Quyidagi kodning natijasini toping:",
    code: `for (let i = 1; i <= 5; i++) {\n    if (i === 2) continue;\n    if (i === 4) break;\n    console.log(i);\n}`,
    options: [
      { id: "A", text: "1 2 3 4" },
      { id: "B", text: "1 3" },
      { id: "C", text: "1 3 4" },
      { id: "D", text: "2 3" }
    ],
    correctOptionId: "B"
  },
  {
    id: 16,
    question: "for...of odatda nimani olish uchun ishlatiladi?",
    code: `let fruits = ["apple", "banana", "orange"];`,
    options: [
      { id: "A", text: "Array elementlarining qiymatlarini" },
      { id: "B", text: "Array indekslarini" },
      { id: "C", text: "CSS propertylarini" },
      { id: "D", text: "HTML taglarini" }
    ],
    correctOptionId: "A"
  },
  {
    id: 17,
    question: "Quyidagi kod natijasi nima?",
    code: `let fruits = ["apple", "banana", "orange"];\n\nfor (let fruit of fruits) {\n    console.log(fruit);\n}`,
    options: [
      { id: "A", text: "0 1 2" },
      { id: "B", text: "apple banana orange" },
      { id: "C", text: "fruit fruit fruit" },
      { id: "D", text: "Xatolik" }
    ],
    correctOptionId: "B"
  },
  {
    id: 18,
    question: "for...in array bilan ishlatilganda odatda nimani beradi?",
    code: `let colors = ["red", "blue", "green"];\n\nfor (let index in colors) {\n    console.log(index);\n}`,
    options: [
      { id: "A", text: "red blue green" },
      { id: "B", text: "0 1 2" },
      { id: "C", text: "1 2 3" },
      { id: "D", text: "index index index" }
    ],
    correctOptionId: "B"
  },
  {
    id: 19,
    question: "Qaysi holatda for...of mantiqan to‘g‘riroq?",
    options: [
      { id: "A", text: "Array ichidagi qiymatlarni olish kerak bo‘lsa" },
      { id: "B", text: "Object property nomlarini olish kerak bo‘lsa" },
      { id: "C", text: "HTML yaratish kerak bo‘lsa" },
      { id: "D", text: "CSS rangini o‘zgartirish kerak bo‘lsa" }
    ],
    correctOptionId: "A"
  },
  {
    id: 20,
    question: "Quyidagi kod nima chiqaradi?",
    code: `let numbers = [10, 20, 30];\n\nfor (let number of numbers) {\n    if (number === 20) {\n        continue;\n    }\n    console.log(number);\n}`,
    options: [
      { id: "A", text: "10 20 30" },
      { id: "B", text: "20" },
      { id: "C", text: "10 30" },
      { id: "D", text: "10 20" }
    ],
    correctOptionId: "C"
  },
  {
    id: 21,
    question: "Quyidagi { } nima?",
    code: `if (true) {\n    let age = 15;\n    console.log(age);\n}`,
    options: [
      { id: "A", text: "Function" },
      { id: "B", text: "Block" },
      { id: "C", text: "Array" },
      { id: "D", text: "Object" }
    ],
    correctOptionId: "B"
  },
  {
    id: 22,
    question: "Quyidagi kodda age tashqarida ishlaydimi?",
    code: `if (true) {\n    let age = 15;\n}\n\nconsole.log(age);`,
    options: [
      { id: "A", text: "Ha, 15 chiqadi" },
      { id: "B", text: "Yo‘q, chunki let block scope'ga ega" },
      { id: "C", text: "undefined chiqadi" },
      { id: "D", text: "true chiqadi" }
    ],
    correctOptionId: "B"
  },
  {
    id: 23,
    question: "Quyidagi kodni diqqat bilan ko‘ring: Natija qanday?",
    code: `let x = 10;\n\n{\n    let x = 20;\n    console.log(x);\n}\n\nconsole.log(x);`,
    options: [
      { id: "A", text: "10 10" },
      { id: "B", text: "20 20" },
      { id: "C", text: "20 10" },
      { id: "D", text: "10 20" }
    ],
    correctOptionId: "C"
  },
  {
    id: 24,
    question: "HTMLda eng katta sarlavha uchun qaysi tag ishlatiladi?",
    options: [
      { id: "A", text: "<heading>" },
      { id: "B", text: "<h6>" },
      { id: "C", text: "<h1>" },
      { id: "D", text: "<title>" }
    ],
    correctOptionId: "C"
  },
  {
    id: 25,
    question: "Quyidagilardan qaysi biri HTMLda link yaratadi?",
    options: [
      { id: "A", text: "<link>" },
      { id: "B", text: "<a>" },
      { id: "C", text: "<href>" },
      { id: "D", text: "<url>" }
    ],
    correctOptionId: "B"
  },
  {
    id: 26,
    question: "CSSda elementning matn rangini o‘zgartirish uchun qaysi property ishlatiladi?",
    options: [
      { id: "A", text: "text-color" },
      { id: "B", text: "font-color" },
      { id: "C", text: "color" },
      { id: "D", text: "background-color" }
    ],
    correctOptionId: "C"
  },
  {
    id: 27,
    question: "CSSdagi padding nimani bildiradi?",
    options: [
      { id: "A", text: "Element tashqarisidagi masofa" },
      { id: "B", text: "Element ichidagi content bilan border orasidagi masofa" },
      { id: "C", text: "Matn kattaligi" },
      { id: "D", text: "Elementning balandligi" }
    ],
    correctOptionId: "B"
  },
  {
    id: 28,
    question: "CSSdagi margin va padding farqini eng to‘g‘ri ko‘rsatgan javob qaysi?",
    options: [
      { id: "A", text: "Ikkalasi bir xil" },
      { id: "B", text: "margin tashqi, padding ichki bo‘shliq" },
      { id: "C", text: "padding tashqi, margin ichki bo‘shliq" },
      { id: "D", text: "Ikkalasi faqat matnga ta'sir qiladi" }
    ],
    correctOptionId: "B"
  },
  {
    id: 29,
    question: "Quyidagi kod natijasi nima?",
    code: `let result = 0;\n\nfor (let i = 1; i <= 5; i++) {\n    if (i === 3) {\n        continue;\n    }\n    result += i;\n}\n\nconsole.log(result);`,
    options: [
      { id: "A", text: "15" },
      { id: "B", text: "12" },
      { id: "C", text: "9" },
      { id: "D", text: "8" }
    ],
    correctOptionId: "B"
  },
  {
    id: 30,
    question: "🔥 Eng murakkab savol: Quyidagi kodning aniq natijasini toping:",
    code: `let result = 0;\n\nfor (let i = 1; i <= 5; i++) {\n    if (i === 2) {\n        continue;\n    }\n    if (i === 4) {\n        break;\n    }\n    result += i * 2;\n}\n\nconsole.log(result);`,
    options: [
      { id: "A", text: "8" },
      { id: "B", text: "10" },
      { id: "C", text: "12" },
      { id: "D", text: "14" }
    ],
    correctOptionId: "A"
  }
];
