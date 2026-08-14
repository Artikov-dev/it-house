/**
 * Calculates score metrics and generates feedback message in Uzbek for Full Foundation Test.
 * @param {Array} questions - Original questions list
 * @param {Object} userAnswers - Map of questionId -> selectedOptionId
 */
export function calculateScore(questions, userAnswers) {
  let correctCount = 0;

  questions.forEach((q) => {
    const selected = userAnswers[q.id];
    if (selected && selected === q.correctOptionId) {
      correctCount++;
    }
  });

  const totalQuestions = questions.length;
  const incorrectCount = totalQuestions - correctCount;
  const percentage = Math.round((correctCount / totalQuestions) * 100);

  let message = "";
  let emoji = "🏆";
  let badgeColor = "from-emerald-500 to-teal-600";

  if (percentage >= 90) {
    message = "Ajoyib natija! 🏆 Siz Full Foundation bo‘yicha mukammal bilimga egasiz!";
    emoji = "🏆";
    badgeColor = "from-amber-400 to-yellow-500";
  } else if (percentage >= 70) {
    message = "Barakalla! 🎨 Full Foundation bo‘yicha bilimlaringiz juda yaxshi!";
    emoji = "🎨";
    badgeColor = "from-purple-500 to-indigo-600";
  } else if (percentage >= 50) {
    message = "Yaxshi harakat! ⭐ Bilimlaringizni yanada mustahkamlang!";
    emoji = "⭐";
    badgeColor = "from-blue-400 to-cyan-500";
  } else {
    message = "O‘rganishda davom eting! 🚀 Takrorlash va amaliyot muvaffaqiyat kalitidir!";
    emoji = "🚀";
    badgeColor = "from-rose-500 to-pink-600";
  }

  return {
    totalQuestions,
    correctCount,
    incorrectCount,
    percentage,
    message,
    emoji,
    badgeColor
  };
}
