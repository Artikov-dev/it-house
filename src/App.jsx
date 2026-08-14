import React, { useState } from 'react';
import Welcome from './components/Welcome';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Certificate from './components/Certificate';
import { questions } from './data/questions';
import { calculateScore } from './utils/calculateScore';
import { generateCertificateId } from './utils/generateCertificateId';

/**
 * Root Application Component managing overall quiz workflow stages in Uzbek.
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

  // 3. Reset Test (Try Again)
  const handleTryAgain = () => {
    setUserAnswers({});
    setScoreData(null);
    setStage('quiz');
  };

  // 4. View Certificate
  const handleGetCertificate = () => {
    setStage('certificate');
  };

  // 5. Navigate back to Results from Certificate
  const handleBackToResults = () => {
    setStage('result');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-[#A259FF] selection:text-white relative">
      {/* Top Header Branding */}
      <header className="w-full border-b border-white/10 bg-slate-950/40 backdrop-blur-md sticky top-0 z-50 py-3.5 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div
            onClick={() => setStage('welcome')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* Figma Logo Stack Graphic */}
            <div className="flex -space-x-1 transition-transform group-hover:scale-105">
              <span className="w-4 h-4 rounded-full bg-[#F24E1E] shadow-sm" />
              <span className="w-4 h-4 rounded-full bg-[#FF7262] shadow-sm" />
              <span className="w-4 h-4 rounded-full bg-[#A259FF] shadow-sm" />
              <span className="w-4 h-4 rounded-full bg-[#1ABCFE] shadow-sm" />
              <span className="w-4 h-4 rounded-full bg-[#0ACF83] shadow-sm" />
            </div>
            <span className="font-outfit font-black text-xl text-white tracking-tight">
              Figma<span className="text-[#1ABCFE]">Quiz</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 text-xs font-bold rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
              9–16 yoshlilar uchun
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
            onTryAgain={handleTryAgain}
            onGetCertificate={handleGetCertificate}
          />
        )}

        {stage === 'certificate' && scoreData && (
          <Certificate
            studentName={studentName}
            scoreData={scoreData}
            certificateId={certificateId}
            onTryAgain={handleTryAgain}
            onBackToResults={handleBackToResults}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 bg-slate-950/60 backdrop-blur-md py-4 px-4 text-center text-xs text-gray-400">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© 2026 Figma Boshlang‘ich Testi. Yosh dizaynerlar uchun yaratilgan.</p>
          <p className="flex items-center gap-1.5 font-medium">
            <span>Yaratilgan:</span>
            <span className="text-[#FF7262]">♥</span>
            <span>React + Vite & Tailwind CSS</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
