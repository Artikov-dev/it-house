import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { RotateCcw, Award, CheckCircle, XCircle, Sparkles, TrendingUp } from 'lucide-react';
import Button from './Button';

/**
 * Result component in Uzbek.
 */
export default function Result({ studentName, scoreData, onTryAgain, onGetCertificate }) {
  const { totalQuestions, correctCount, incorrectCount, percentage, message, badgeColor } = scoreData;

  useEffect(() => {
    // Fire confetti for good scores
    if (percentage >= 50) {
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (e) {
        console.warn('Confetti error:', e);
      }
    }
  }, [percentage]);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-8 animate-slide-up py-4 px-2">
      {/* Header Banner */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-extrabold text-sm backdrop-blur-md">
          <Sparkles className="w-4 h-4" />
          <span>🎉 Test Yakunlandi!</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-outfit text-white tracking-tight">
          {studentName.firstName} {studentName.lastName}
        </h1>

        <p className="text-[#1ABCFE] font-extrabold text-lg sm:text-xl">
          Figma Boshlang‘ich Test Natijalari
        </p>
      </div>

      {/* Main Score Card */}
      <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/15 text-center space-y-8 shadow-2xl relative overflow-hidden">
        {/* Glowing Background Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#A259FF]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Animated Score Circle */}
        <div className="relative inline-flex items-center justify-center">
          <svg className="w-44 h-44 sm:w-52 sm:h-52 transform -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r="40%"
              className="stroke-slate-800"
              strokeWidth="14"
              fill="transparent"
            />
            <circle
              cx="50%"
              cy="50%"
              r="40%"
              className="stroke-[#1ABCFE] transition-all duration-1000 ease-out"
              strokeWidth="14"
              strokeDasharray={2 * Math.PI * 75}
              strokeDashoffset={2 * Math.PI * 75 * (1 - percentage / 100)}
              strokeLinecap="round"
              fill="transparent"
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center text-center">
            <span className="text-4xl sm:text-5xl font-black font-outfit text-white tracking-tight">
              {percentage}%
            </span>
            <span className="text-sm font-bold text-gray-400 mt-0.5">
              {correctCount} / {totalQuestions} To‘g‘ri
            </span>
          </div>
        </div>

        {/* Dynamic Score Feedback Message Box */}
        <div className={`p-5 rounded-2xl bg-gradient-to-r ${badgeColor} text-white font-bold text-base sm:text-lg shadow-lg max-w-xl mx-auto backdrop-blur-md`}>
          {message}
        </div>

        {/* Detailed Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-lg mx-auto">
          {/* Total Questions */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
            <div className="flex items-center justify-center text-purple-400">
              <TrendingUp className="w-5 h-5" />
            </div>
            <p className="text-2xl font-black text-white">{totalQuestions}</p>
            <p className="text-xs font-semibold text-gray-400 uppercase">Jami</p>
          </div>

          {/* Correct */}
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-1">
            <div className="flex items-center justify-center text-emerald-400">
              <CheckCircle className="w-5 h-5" />
            </div>
            <p className="text-2xl font-black text-emerald-400">{correctCount}</p>
            <p className="text-xs font-semibold text-emerald-300 uppercase">To‘g‘ri</p>
          </div>

          {/* Incorrect */}
          <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 space-y-1">
            <div className="flex items-center justify-center text-rose-400">
              <XCircle className="w-5 h-5" />
            </div>
            <p className="text-2xl font-black text-rose-400">{incorrectCount}</p>
            <p className="text-xs font-semibold text-rose-300 uppercase">Noto‘g‘ri</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-white/10">
          <Button
            onClick={onTryAgain}
            variant="secondary"
            size="lg"
            icon={RotateCcw}
            className="w-full sm:w-auto"
          >
            Qayta Topshirish
          </Button>

          <Button
            onClick={onGetCertificate}
            variant="primary"
            size="lg"
            icon={Award}
            className="w-full sm:w-auto"
          >
            Sertifikatni Olish
          </Button>
        </div>
      </div>
    </div>
  );
}
