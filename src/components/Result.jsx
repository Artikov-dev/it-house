import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Award, CheckCircle, XCircle, TrendingUp } from 'lucide-react';
import Button from './Button';

/**
 * Minimalist Black & White Result component (without Retake option).
 */
export default function Result({ studentName, scoreData, onGetCertificate }) {
  const { totalQuestions, correctCount, incorrectCount, percentage, message } = scoreData;

  useEffect(() => {
    if (percentage >= 50) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#ffffff', '#a1a1aa', '#52525b']
        });
      } catch (e) {
        console.warn('Confetti error:', e);
      }
    }
  }, [percentage]);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8 animate-slide-up py-6 px-2">
      {/* Header Banner */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-700 bg-zinc-900 text-zinc-300 font-mono text-xs tracking-widest uppercase">
          <span>TEST YAKUNLANDI</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black font-outfit text-white tracking-tight uppercase">
          {studentName.firstName} {studentName.lastName}
        </h1>

        <p className="text-zinc-400 font-mono text-sm uppercase tracking-wider">
          FULL FOUNDATION BILIM TEST NATIJALARI
        </p>
      </div>

      {/* Main Score Card */}
      <div className="rounded-3xl p-6 sm:p-10 bg-zinc-900/80 border border-zinc-800 text-center space-y-8 shadow-2xl relative overflow-hidden">
        {/* Animated Score Circle */}
        <div className="relative inline-flex items-center justify-center">
          <svg className="w-44 h-44 sm:w-48 sm:h-48 transform -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r="40%"
              className="stroke-zinc-800"
              strokeWidth="10"
              fill="transparent"
            />
            <circle
              cx="50%"
              cy="50%"
              r="40%"
              className="stroke-white transition-all duration-1000 ease-out"
              strokeWidth="10"
              strokeDasharray={2 * Math.PI * 70}
              strokeDashoffset={2 * Math.PI * 70 * (1 - percentage / 100)}
              strokeLinecap="round"
              fill="transparent"
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center text-center">
            <span className="text-4xl sm:text-5xl font-black font-outfit text-white tracking-tight">
              {percentage}%
            </span>
            <span className="text-xs font-mono font-bold text-zinc-400 mt-1 uppercase">
              {correctCount} / {totalQuestions} TO‘G‘RI
            </span>
          </div>
        </div>

        {/* Feedback Message Box */}
        <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-zinc-200 font-medium text-sm sm:text-base max-w-lg mx-auto font-sans">
          {message}
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
          {/* Total Questions */}
          <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1">
            <div className="flex items-center justify-center text-zinc-400">
              <TrendingUp className="w-4 h-4" />
            </div>
            <p className="text-xl font-mono font-black text-white">{totalQuestions}</p>
            <p className="text-[10px] font-mono text-zinc-500 uppercase">JAMI</p>
          </div>

          {/* Correct */}
          <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1">
            <div className="flex items-center justify-center text-white">
              <CheckCircle className="w-4 h-4" />
            </div>
            <p className="text-xl font-mono font-black text-white">{correctCount}</p>
            <p className="text-[10px] font-mono text-zinc-400 uppercase">TO‘G‘RI</p>
          </div>

          {/* Incorrect */}
          <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1">
            <div className="flex items-center justify-center text-zinc-500">
              <XCircle className="w-4 h-4" />
            </div>
            <p className="text-xl font-mono font-black text-zinc-400">{incorrectCount}</p>
            <p className="text-[10px] font-mono text-zinc-500 uppercase">NOTO‘G‘RI</p>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-center pt-4 border-t border-zinc-800">
          <Button
            onClick={onGetCertificate}
            variant="primary"
            size="lg"
            icon={Award}
            className="w-full sm:w-auto"
          >
            SERTIFIKATNI OLISH
          </Button>
        </div>
      </div>
    </div>
  );
}
