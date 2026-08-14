import React from 'react';

/**
 * Modern progress bar component showing current question number in Uzbek.
 */
export default function ProgressBar({ currentQuestionIndex, totalQuestions }) {
  const currentNumber = currentQuestionIndex + 1;
  const percentage = Math.round((currentNumber / totalQuestions) * 100);

  return (
    <div className="w-full space-y-3 mb-6">
      <div className="flex items-center justify-between text-sm sm:text-base font-bold">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#A259FF]/20 text-[#A259FF] border border-[#A259FF]/40 text-xs font-black">
            {currentNumber}
          </span>
          <span className="text-gray-200">
            Savol: <span className="text-white font-extrabold">{currentNumber}</span> /{' '}
            <span className="text-gray-400">{totalQuestions}</span>
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#1ABCFE] font-extrabold text-sm">
          <span>{percentage}%</span>
        </div>
      </div>

      {/* Progress Bar Track */}
      <div className="relative w-full h-3.5 bg-slate-800/80 rounded-full overflow-hidden p-0.5 border border-white/10 backdrop-blur-md">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#A259FF] via-[#1ABCFE] to-[#0ACF83] transition-all duration-500 ease-out shadow-[0_0_12px_rgba(26,188,254,0.5)]"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
