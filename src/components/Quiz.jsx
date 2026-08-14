import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import QuestionCard from './QuestionCard';
import ProgressBar from './ProgressBar';
import Button from './Button';
import { shuffleAnswers } from '../utils/shuffleAnswers';

/**
 * Quiz container component in Uzbek.
 */
export default function Quiz({ questions, onFinishTest }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [shuffledOptions, setShuffledOptions] = useState([]);

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;
  const currentSelectedOptionId = userAnswers[currentQuestion?.id] || null;

  // Shuffle options whenever the current question changes
  useEffect(() => {
    if (currentQuestion) {
      const shuffled = shuffleAnswers(currentQuestion.options);
      setShuffledOptions(shuffled);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentIndex, currentQuestion]);

  const handleSelectOption = (optionId) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId
    }));
  };

  const handleNext = () => {
    if (!currentSelectedOptionId) return;

    if (isLastQuestion) {
      onFinishTest(userAnswers);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  if (!currentQuestion) return null;

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6 animate-fade-in py-4 px-2">
      {/* Top Progress Bar Component */}
      <ProgressBar
        currentQuestionIndex={currentIndex}
        totalQuestions={questions.length}
      />

      {/* Main Question Card Component */}
      <QuestionCard
        question={currentQuestion}
        options={shuffledOptions}
        selectedAnswerId={currentSelectedOptionId}
        onSelectOption={handleSelectOption}
      />

      {/* Footer Navigation Action */}
      <div className="flex items-center justify-between pt-2">
        <div className="text-xs sm:text-sm text-gray-400 font-medium">
          {currentSelectedOptionId ? (
            <span className="text-[#0ACF83] font-bold flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4" /> Javob tanlandi
            </span>
          ) : (
            <span>Davom etish uchun variantlardan birini tanlang</span>
          )}
        </div>

        <Button
          onClick={handleNext}
          disabled={!currentSelectedOptionId}
          variant={isLastQuestion ? 'success' : 'primary'}
          size="lg"
          icon={ArrowRight}
        >
          {isLastQuestion ? 'Testni Yakunlash' : 'Keyingi Savol'}
        </Button>
      </div>
    </div>
  );
}
