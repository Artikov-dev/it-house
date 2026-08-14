/**
 * Fisher-Yates shuffle algorithm to randomize question options.
 * Preserves the option ID so correct answer evaluation remains 100% accurate.
 */
export function shuffleAnswers(options) {
  if (!options || !Array.isArray(options)) return [];
  
  const shuffled = [...options];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
