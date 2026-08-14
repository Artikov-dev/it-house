import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

/**
 * QuestionCard renders the question text and 4 shuffled answer choices in Uzbek.
 */
export default function QuestionCard({
  question,
  options,
  selectedAnswerId,
  onSelectOption
}) {
  const letters = ['A', 'B', 'C', 'D'];

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 border border-white/15 animate-slide-up shadow-2xl relative overflow-hidden">
      {/* Figma background decorative element */}
      <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#A259FF]/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-[#1ABCFE]/20 rounded-full blur-2xl pointer-events-none" />

      {/* Question Header Badge */}
      <div className="flex items-center gap-2">
        <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-purple-300 bg-purple-500/20 border border-purple-500/30 rounded-full">
          Figma Bilim Testi
        </span>
      </div>

      {/* Question Title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-relaxed">
        {question.question}
      </h2>

      {/* Answer Options Grid */}
      <div className="grid grid-cols-1 gap-3.5 pt-2">
        {options.map((option, index) => {
          const isSelected = selectedAnswerId === option.id;
          const letter = letters[index] || String.fromCharCode(65 + index);

          return (
            <button
              key={`${question.id}-${option.id}`}
              type="button"
              onClick={() => onSelectOption(option.id)}
              className={`
                group relative flex items-center gap-4 p-4 sm:p-5 rounded-2xl text-left transition-all duration-200 ease-out border cursor-pointer select-none
                ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#A259FF]/25 to-[#1ABCFE]/25 border-[#1ABCFE] shadow-[0_0_20px_rgba(26,188,254,0.35)] ring-2 ring-[#1ABCFE]/50 translate-x-1'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/25 hover:translate-x-1'
                }
              `}
            >
              {/* Option Letter Badge */}
              <div
                className={`
                  flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl font-black text-sm sm:text-base shrink-0 transition-colors duration-200
                  ${
                    isSelected
                      ? 'bg-[#1ABCFE] text-slate-950 shadow-md shadow-[#1ABCFE]/40 font-black'
                      : 'bg-white/10 text-gray-300 group-hover:bg-white/20 group-hover:text-white'
                  }
                `}
              >
                {letter}
              </div>

              {/* Option Text */}
              <span className="flex-1 text-base sm:text-lg font-semibold text-gray-100 leading-snug">
                {option.text}
              </span>

              {/* Selection Checkbox Icon */}
              <div className="shrink-0">
                {isSelected ? (
                  <CheckCircle2 className="w-6 h-6 text-[#1ABCFE] animate-fade-in" />
                ) : (
                  <Circle className="w-6 h-6 text-gray-500 group-hover:text-gray-400 transition-colors" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
