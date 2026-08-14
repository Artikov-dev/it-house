import React, { useState } from 'react';
import Welcome from './components/Welcome';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Certificate from './components/Certificate';
import { questions } from './data/questions';
import { calculateScore } from './utils/calculateScore';
import { generateCertificateId } from './utils/generateCertificateId';

/**
 * Root Application Component with Minimalist Black & White Theme.
 */
export default function App() {
  // Navigation Stage: 'welcome' | 'quiz' | 'result' | 'certificate'
  const [stage, setStage] = useState('welcome');
  
  // Student Information
  const [studentName, setStudentName] = useState({
    firstName: '',
    lastName: ''
  });

  // User Quiz Answers { questionId: selectedOptionId }
  const [userAnswers, setUserAnswers] = useState({});

  // Computed Score Metrics
  const [scoreData, setScoreData] = useState(null);

  // Certificate Unique Identifier
  const [certificateId, setCertificateId] = useState('');

  // 1. Handle Start Quiz from Welcome Screen
  const handleStartQuiz = (info) => {
    setStudentName(info);
    setUserAnswers({});
    setStage('quiz');
  };

  // 2. Handle Finish Test from Quiz Screen
  const handleFinishTest = (answers) => {
    setUserAnswers(answers);
    const calculated = calculateScore(questions, answers);
    setScoreData(calculated);
    const certId = generateCertificateId();
    setCertificateId(certId);
    setStage('result');
  };

  // 3. View Certificate
  const handleGetCertificate = () => {
    setStage('certificate');
  };

  // 4. Navigate back to Results from Certificate
  const handleBackToResults = () => {
    setStage('result');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#050505] text-zinc-100 selection:bg-white selection:text-black relative font-sans">
      {/* Top Minimalist Header */}
      <header className="w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50 py-4 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div
            onClick={() => setStage('welcome')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-white group-hover:scale-125 transition-transform" />
            <span className="font-outfit font-black text-lg text-white tracking-widest uppercase">
              Full<span className="text-zinc-400 font-light">Foundation</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 text-xs font-mono text-zinc-300 border border-zinc-700 bg-zinc-900 rounded-full">
              30 SAVOL | 40 MINUT
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Stage Switcher */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
        {stage === 'welcome' && (
          <Welcome onStart={handleStartQuiz} />
        )}

        {stage === 'quiz' && (
          <Quiz questions={questions} onFinishTest={handleFinishTest} />
        )}

        {stage === 'result' && scoreData && (
          <Result
            studentName={studentName}
            scoreData={scoreData}
            onGetCertificate={handleGetCertificate}
          />
        )}

        {stage === 'certificate' && scoreData && (
          <Certificate
            studentName={studentName}
            scoreData={scoreData}
            certificateId={certificateId}
            onBackToResults={handleBackToResults}
          />
        )}
      </main>

      {/* Minimalist Footer */}
      <footer className="w-full border-t border-zinc-800 bg-zinc-950/90 backdrop-blur-md py-4 px-4 text-center text-xs text-zinc-500 font-mono">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© 2026 FULL FOUNDATION. BILIMNI TEKSHIRISH TESTI.</p>
          <p className="text-zinc-400 font-sans">
            Minimalist Black & White Edition
          </p>
        </div>
      </footer>
    </div>
  );
}
