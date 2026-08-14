import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

/**
 * Minimalist Black & White QuestionCard component.
 */
export default function QuestionCard({
  question,
  options,
  selectedAnswerId,
  onSelectOption
}) {
  const letters = ['A', 'B', 'C', 'D'];

  return (
    <div
      id={`question-${question.id}`}
      className="rounded-2xl p-5 sm:p-7 space-y-4 bg-zinc-900/70 border border-zinc-800 shadow-xl relative overflow-hidden scroll-mt-28"
    >
      {/* Header Badge */}
      <div className="flex items-center justify-between gap-2">
        <span className="px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-widest text-zinc-400 bg-zinc-950 border border-zinc-800 rounded-lg">
          SAVOL #{question.id}
        </span>

        {selectedAnswerId ? (
          <span className="text-[11px] font-mono font-bold text-zinc-300 bg-zinc-800/80 border border-zinc-700 px-2.5 py-0.5 rounded-lg flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-white" /> JAVOB BERILDI
          </span>
        ) : (
          <span className="text-[11px] font-mono text-zinc-500 bg-zinc-950/60 border border-zinc-850 px-2.5 py-0.5 rounded-lg">
            TANLANMAGAN
          </span>
        )}
      </div>

      {/* Question Text */}
      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white leading-relaxed">
        {question.question}
      </h3>

      {/* Code Snippet Box */}
      {question.code && (
        <div className="rounded-xl bg-black border border-zinc-800 p-4 overflow-x-auto my-2 font-mono text-xs sm:text-sm text-zinc-200 leading-relaxed">
          <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest pb-1 select-none">
            KOD PARCHASI:
          </div>
          <pre className="font-mono whitespace-pre text-zinc-100">{question.code}</pre>
        </div>
      )}

      {/* Answer Options Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
        {options.map((option, optIdx) => {
          const isSelected = selectedAnswerId === option.id;
          const letter = letters[optIdx] || option.id;

          return (
            <button
              key={`${question.id}-${option.id}`}
              type="button"
              onClick={() => onSelectOption(question.id, option.id)}
              className={`
                group relative flex items-center gap-3 p-3.5 rounded-xl text-left transition-all duration-150 ease-out border cursor-pointer select-none
                ${
                  isSelected
                    ? 'bg-white text-black border-white shadow-md font-bold'
                    : 'bg-zinc-950/60 border-zinc-800 text-zinc-300 hover:bg-zinc-800/50 hover:border-zinc-700 hover:text-white'
                }
              `}
            >
              {/* Option Letter Badge */}
              <div
                className={`
                  flex items-center justify-center w-7 h-7 rounded-lg font-mono font-black text-xs shrink-0 transition-colors duration-150
                  ${
                    isSelected
                      ? 'bg-black text-white'
                      : 'bg-zinc-800 text-zinc-300 group-hover:bg-zinc-700 group-hover:text-white'
                  }
                `}
              >
                {letter}
              </div>

              {/* Option Text */}
              <span className={`flex-1 text-xs sm:text-sm leading-snug ${isSelected ? 'font-extrabold text-black' : 'font-medium'}`}>
                {option.text}
              </span>

              {/* Selection Checkbox Icon */}
              <div className="shrink-0">
                {isSelected ? (
                  <CheckCircle2 className="w-4 h-4 text-black" />
                ) : (
                  <Circle className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
