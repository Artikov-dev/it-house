import React, { useRef, useState } from 'react';
import { Download, ArrowLeft, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import Button from './Button';
import { downloadPdf } from '../utils/downloadPdf';

/**
 * Minimalist Black & White Landscape Certificate Component for Full Foundation (without retake option).
 */
export default function Certificate({
  studentName,
  scoreData,
  certificateId,
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
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-zinc-400 hover:text-white transition-colors cursor-pointer uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Natijalarga qaytish</span>
        </button>

        <div className="flex items-center gap-3">
          <Button
            onClick={handleDownload}
            disabled={isGenerating}
            variant="primary"
            size="md"
            icon={Download}
          >
            {isGenerating ? 'PDF TAYYORLANMOQDA...' : 'SERTIFIKATNI YUKLAB OLISH (PDF)'}
          </Button>
        </div>
      </div>

      {/* Certificate Outer Container Frame */}
      <div className="w-full overflow-x-auto pb-4">
        <div
          ref={certificateRef}
          data-certificate-root
          className="min-w-[800px] w-full bg-white text-black rounded-xl p-8 sm:p-12 relative shadow-2xl overflow-hidden border-8 border-black font-sans select-none"
          style={{ aspectRatio: '1.414 / 1' }}
        >
          {/* Decorative Outer Border Lines */}
          <div className="absolute inset-4 border-2 border-black pointer-events-none" />
          <div className="absolute inset-6 border border-zinc-300 pointer-events-none" />

          {/* Certificate Inner Layout */}
          <div className="relative z-10 h-full flex flex-col justify-between text-center py-4 px-6">
            {/* Header / Brand */}
            <div className="space-y-2">
              <div className="inline-flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-black text-white font-mono font-bold text-[11px] uppercase tracking-widest mx-auto">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FULL FOUNDATION BILIM TESTI</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-outfit text-black uppercase tracking-tight mt-3">
                SER T I F I K A T
              </h1>
            </div>

            {/* Main Presentation Body */}
            <div className="my-auto space-y-4 py-4">
              <p className="text-xs sm:text-sm font-mono font-bold text-zinc-500 uppercase tracking-widest">
                USHBU SERTIFIKAT RAXBATLANTIRISH UCHUN TOPSHIRILADI:
              </p>

              <div className="py-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black underline decoration-black decoration-2 underline-offset-8 uppercase tracking-wide">
                  {fullName}
                </h2>
              </div>

              <p className="text-xs sm:text-sm font-medium text-zinc-700 max-w-lg mx-auto leading-relaxed">
                JavaScript, HTML va CSS dasturlash asoslari bo‘yicha Full Foundation bilimni tekshirish testidan muvaffaqiyatli o‘tgani uchun.
              </p>

              <div className="inline-block px-6 py-2 rounded-lg bg-zinc-100 text-black font-mono font-extrabold text-base sm:text-lg border border-black uppercase tracking-wider">
                FULL FOUNDATION SERTIFIKATI
              </div>
            </div>

            {/* Footer Stats & Signature Metadata */}
            <div className="pt-4 border-t border-zinc-300 grid grid-cols-3 items-end text-left gap-4 font-mono">
              {/* ID & Date */}
              <div className="space-y-1">
                <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                  SERTIFIKAT ID
                </p>
                <p className="text-xs font-mono font-black text-black">
                  {certificateId}
                </p>
                <p className="text-[11px] text-zinc-600 font-medium pt-0.5">
                  Berilgan sana: {currentDate}
                </p>
              </div>

              {/* Minimalist Black & White Verified Seal */}
              <div className="flex flex-col items-center justify-center">
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border-2 border-black p-1 flex items-center justify-center bg-white shadow-md">
                  <div className="w-full h-full rounded-full border border-black flex flex-col items-center justify-center text-center p-1 bg-black text-white">
                    <Award className="w-5 h-5 text-white" />
                    <span className="text-[7px] font-mono font-black tracking-tighter uppercase">TASDIQLANGAN</span>
                  </div>
                </div>
              </div>

              {/* Score & Percentage */}
              <div className="text-right space-y-1">
                <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                  TEST NATIJASI
                </p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black text-white font-mono font-bold text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  <span>NATIJA: {scoreData.correctCount} / {scoreData.totalQuestions} ({scoreData.percentage}%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
