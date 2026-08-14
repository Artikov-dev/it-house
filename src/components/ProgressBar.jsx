import React from 'react';

/**
 * Minimalist Black & White Progress Bar component.
 */
export default function ProgressBar({ currentQuestionIndex, totalQuestions }) {
  const currentNumber = currentQuestionIndex + 1;
  const percentage = Math.round((currentNumber / totalQuestions) * 100);

  return (
    <div className="w-full space-y-2 mb-4 font-mono">
      <div className="flex items-center justify-between text-xs font-bold text-zinc-400">
        <div>
          SAVOL: <span className="text-white font-extrabold">{currentNumber}</span> / {totalQuestions}
        </div>
        <div className="text-white font-black">{percentage}%</div>
      </div>

      {/* Progress Track */}
      <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
        <div
          className="h-full bg-white transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
