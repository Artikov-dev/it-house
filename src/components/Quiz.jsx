import React, { useState, useEffect, useRef } from 'react';
import { Clock, Send, LayoutGrid } from 'lucide-react';
import QuestionCard from './QuestionCard';
import Button from './Button';

const TOTAL_TIME_SECONDS = 40 * 60; // 40 minutes timer (2400s)

/**
 * Minimalist Black & White Quiz container component displaying all 30 questions with 40-minute timer.
 */
export default function Quiz({ questions, onFinishTest }) {
  const [userAnswers, setUserAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME_SECONDS);
  const [showNavGrid, setShowNavGrid] = useState(false);
  const isFinishedRef = useRef(false);

  // 40-Minute Countdown Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          if (!isFinishedRef.current) {
            isFinishedRef.current = true;
            onFinishTest(userAnswers);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [userAnswers, onFinishTest]);

  const handleSelectOption = (questionId, optionId) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  const handleFinish = () => {
    if (isFinishedRef.current) return;
    isFinishedRef.current = true;
    onFinishTest(userAnswers);
  };

  const scrollToQuestion = (id) => {
    const el = document.getElementById(`question-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Format seconds to MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const answeredCount = Object.keys(userAnswers).length;
  const isLowTime = timeLeft <= 5 * 60;

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 animate-fade-in pb-16 px-2">
      {/* Sticky Header Panel with Live 40-Min Timer & Stats */}
      <div className="sticky top-16 z-40 bg-zinc-950/95 border border-zinc-800 backdrop-blur-xl rounded-2xl p-4 shadow-2xl space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Answered Progress */}
          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono font-bold text-xs">
              JAVOB BERILDI: {answeredCount} / {questions.length}
            </span>

            <button
              onClick={() => setShowNavGrid(!showNavGrid)}
              className="px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 text-xs font-mono font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>SAVOLLAR (1-30)</span>
            </button>
          </div>

          {/* 40-Minute Countdown Timer Badge */}
          <div
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-mono text-sm font-black border transition-all ${
              isLowTime
                ? 'bg-zinc-900 border-white text-white animate-pulse'
                : 'bg-zinc-900 border-zinc-700 text-white'
            }`}
          >
            <Clock className="w-4 h-4 text-zinc-400" />
            <span>{formatTime(timeLeft)}</span>
          </div>

          {/* Finish Button */}
          <Button
            onClick={handleFinish}
            variant="primary"
            size="sm"
            icon={Send}
          >
            TESTNI YAKUNLASH
          </Button>
        </div>

        {/* Quick Nav Grid (30 question numbers) */}
        {showNavGrid && (
          <div className="pt-3 border-t border-zinc-800 animate-fade-in">
            <p className="text-[11px] font-mono text-zinc-500 mb-2 uppercase">
              O'tish uchun savol raqamini bosing:
            </p>
            <div className="grid grid-cols-6 sm:grid-cols-10 gap-2 max-h-40 overflow-y-auto pr-1">
              {questions.map((q) => {
                const isAnswered = !!userAnswers[q.id];
                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      scrollToQuestion(q.id);
                      setShowNavGrid(false);
                    }}
                    className={`h-8 rounded-lg font-mono font-bold text-xs flex items-center justify-center transition-all cursor-pointer border ${
                      isAnswered
                        ? 'bg-white text-black border-white shadow-sm'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-white'
                    }`}
                  >
                    {q.id}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* All 30 Questions Displayed Together */}
      <div className="space-y-5">
        {questions.map((q) => (
          <QuestionCard
            key={q.id}
            question={q}
            options={q.options}
            selectedAnswerId={userAnswers[q.id] || null}
            onSelectOption={handleSelectOption}
          />
        ))}
      </div>

      {/* Bottom Finish Action Bar */}
      <div className="rounded-2xl p-6 bg-zinc-900/80 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-2xl">
        <div>
          <h4 className="text-base font-bold text-white uppercase font-mono">Testni yakunlashga tayyormisiz?</h4>
          <p className="text-xs text-zinc-400 mt-1">
            Javoblaringiz saqlanadi va srazu natijalar ko‘rsatiladi. ({answeredCount} / {questions.length} javob berildi)
          </p>
        </div>

        <Button
          onClick={handleFinish}
          variant="primary"
          size="md"
          icon={Send}
          className="w-full sm:w-auto"
        >
          TESTNI YAKUNLASH
        </Button>
      </div>
    </div>
  );
}
