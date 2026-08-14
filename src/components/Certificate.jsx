import React, { useRef, useState } from 'react';
import { Download, RotateCcw, ArrowLeft, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import Button from './Button';
import { downloadPdf } from '../utils/downloadPdf';

/**
 * Landscape Certificate of Completion component in Uzbek language,
 * styled with Figma brand accents and PDF download capability.
 */
export default function Certificate({
  studentName,
  scoreData,
  certificateId,
  onTryAgain,
  onBackToResults
}) {
  const certificateRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const fullName = `${studentName.firstName} ${studentName.lastName}`;
  const currentDate = new Date().toLocaleDateString('uz-UZ', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handleDownload = async () => {
    if (!certificateRef.current) return;
    setIsGenerating(true);
    try {
      await downloadPdf(certificateRef.current, fullName);
    } catch (error) {
      alert('Sertifikat PDF faylini yuklab olishda xatolik yuz berdi. Qayta urinib ko‘ring.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 animate-certificate py-4 px-2">
      {/* Top Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={onBackToResults}
          className="inline-flex items-center gap-2 text-sm font-bold text-gray-300 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Natijalarga qaytish</span>
        </button>

        <div className="flex items-center gap-3">
          <Button
            onClick={onTryAgain}
            variant="secondary"
            size="md"
            icon={RotateCcw}
          >
            Qayta topshirish
          </Button>

          <Button
            onClick={handleDownload}
            disabled={isGenerating}
            variant="primary"
            size="md"
            icon={Download}
          >
            {isGenerating ? 'PDF tayyorlanmoqda...' : 'Sertifikatni yuklab olish (PDF)'}
          </Button>
        </div>
      </div>

      {/* Certificate Outer Container Frame */}
      <div className="w-full overflow-x-auto pb-4">
        <div
          ref={certificateRef}
          data-certificate-root
          className="min-w-[800px] w-full bg-white text-slate-900 rounded-3xl p-8 sm:p-12 relative shadow-2xl overflow-hidden border-8 border-slate-950 font-outfit select-none"
          style={{ aspectRatio: '1.414 / 1' }}
        >
          {/* Decorative Outer Border Lines */}
          <div className="absolute inset-3 border-2 border-indigo-200 rounded-2xl pointer-events-none" />
          <div className="absolute inset-5 border border-[#A259FF]/30 rounded-xl pointer-events-none" />

          {/* Background Decorative Figma Geometric Blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#A259FF]/15 via-[#1ABCFE]/15 to-transparent rounded-bl-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#0ACF83]/15 via-[#FF7262]/15 to-transparent rounded-tr-full pointer-events-none" />

          {/* Corner Figma Color Accent Squares */}
          <div className="absolute top-6 left-6 flex space-x-1.5 pointer-events-none">
            <span className="w-3 h-3 rounded-full bg-[#F24E1E]" />
            <span className="w-3 h-3 rounded-full bg-[#FF7262]" />
            <span className="w-3 h-3 rounded-full bg-[#A259FF]" />
            <span className="w-3 h-3 rounded-full bg-[#1ABCFE]" />
            <span className="w-3 h-3 rounded-full bg-[#0ACF83]" />
          </div>

          <div className="absolute bottom-6 right-6 flex space-x-1.5 pointer-events-none">
            <span className="w-3 h-3 rounded-full bg-[#0ACF83]" />
            <span className="w-3 h-3 rounded-full bg-[#1ABCFE]" />
            <span className="w-3 h-3 rounded-full bg-[#A259FF]" />
            <span className="w-3 h-3 rounded-full bg-[#FF7262]" />
            <span className="w-3 h-3 rounded-full bg-[#F24E1E]" />
          </div>

          {/* Certificate Inner Layout */}
          <div className="relative z-10 h-full flex flex-col justify-between text-center py-2 px-4">
            {/* Header / Logo */}
            <div className="space-y-2">
              <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white font-extrabold text-xs uppercase tracking-widest mx-auto">
                <Sparkles className="w-3.5 h-3.5 text-[#1ABCFE]" />
                <span>Rasmiy Figma Bilim Akademiyasi</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight mt-2">
                Muvaffaqiyatli <span className="text-[#A259FF]">Tugatganlik Sertifikati</span>
              </h1>
            </div>

            {/* Main Presentation Body */}
            <div className="my-auto space-y-4 py-4">
              <p className="text-sm sm:text-base font-semibold text-slate-500 uppercase tracking-widest">
                Ushbu sertifikat faxr bilan topshiriladi
              </p>

              <div className="py-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 underline decoration-[#1ABCFE] decoration-4 underline-offset-8">
                  {fullName}
                </h2>
              </div>

              <p className="text-sm sm:text-base font-medium text-slate-600 max-w-lg mx-auto leading-relaxed">
                Figma dasturining boshlang‘ich tushunchalari, ish qurollari va UI/UX dizayn asoslari bo‘yicha test sinovidan muvaffaqiyatli o‘tgani uchun.
              </p>

              <div className="inline-block px-6 py-2 rounded-xl bg-purple-50 text-[#A259FF] font-black text-lg sm:text-xl border border-purple-200">
                Figma Boshlang‘ich Testi
              </div>
            </div>

            {/* Footer Stats & Signature Metadata */}
            <div className="pt-4 border-t border-slate-200 grid grid-cols-3 items-end text-left gap-4">
              {/* ID & Date */}
              <div className="space-y-1">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                  SERTIFIKAT ID
                </p>
                <p className="text-xs sm:text-sm font-mono font-bold text-slate-800">
                  {certificateId}
                </p>
                <p className="text-xs text-slate-500 font-semibold pt-1">
                  Berilgan sana: {currentDate}
                </p>
              </div>

              {/* Verified Badge / Seal */}
              <div className="flex flex-col items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#A259FF] via-[#1ABCFE] to-[#0ACF83] p-1 shadow-xl flex items-center justify-center text-white">
                  <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center text-center p-1">
                    <Award className="w-6 h-6 sm:w-8 sm:h-8 text-[#1ABCFE]" />
                    <span className="text-[8px] sm:text-[9px] font-black tracking-tighter text-white uppercase">TASDIQLANGAN</span>
                  </div>
                </div>
              </div>

              {/* Score & Percentage */}
              <div className="text-right space-y-1">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                  TEST NATIJASI
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-xs sm:text-sm border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Natija: {scoreData.correctCount} / {scoreData.totalQuestions} ({scoreData.percentage}%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
