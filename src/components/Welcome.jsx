import React, { useState } from 'react';
import { HelpCircle, Clock, Award, CheckSquare, ArrowRight } from 'lucide-react';
import Button from './Button';

/**
 * Minimalist Black & White Welcome screen component.
 */
export default function Welcome({ onStart }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const isValid = firstName.trim().length > 0 && lastName.trim().length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onStart({
        firstName: firstName.trim(),
        lastName: lastName.trim()
      });
    }
  };

  const infoCards = [
    {
      icon: HelpCircle,
      title: "30 Ta Savol",
      subtitle: "JS, HTML & CSS"
    },
    {
      icon: Clock,
      title: "40 Minut Vaqt",
      subtitle: "Avtomatik yakunlanadi"
    },
    {
      icon: Award,
      title: "Full Foundation",
      subtitle: "Bilim testi"
    },
    {
      icon: CheckSquare,
      title: "Barchasi Birga",
      subtitle: "Bitta sahifada"
    }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto space-y-8 animate-fade-in py-6 px-2">
      {/* Header Banner */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-700 bg-zinc-900 text-zinc-300 text-xs font-mono tracking-widest uppercase">
          <span>Full Foundation Bilim Testi</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-outfit text-white tracking-tight">
          FULL FOUNDATION
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 max-w-lg mx-auto font-normal leading-relaxed">
          JavaScript, HTML va CSS bo‘yicha 30 ta savoldan iborat bilim testiga xush kelibsiz.
        </p>
      </div>

      {/* Info Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {infoCards.map((card, idx) => {
          const IconComponent = card.icon;
          return (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2 text-left"
            >
              <div className="p-2 w-fit rounded-lg bg-zinc-800 text-white">
                <IconComponent className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-white text-sm sm:text-base">
                {card.title}
              </h3>
              <p className="text-xs text-zinc-400 font-mono">
                {card.subtitle}
              </p>
            </div>
          );
        })}
      </div>

      {/* Registration Form Card */}
      <div className="rounded-3xl p-6 sm:p-8 bg-zinc-900/70 border border-zinc-800 space-y-6 shadow-2xl">
        <div className="pb-2 border-b border-zinc-800">
          <h2 className="text-lg font-bold text-white uppercase tracking-wider font-mono">
            Ishtirokchi ma'lumoti
          </h2>
          <p className="text-xs text-zinc-400 mt-0.5">
            Testni boshlash uchun ismingiz va familiyangizni kiriting
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* First Name */}
            <div className="space-y-1.5">
              <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider">
                Ismingiz <span className="text-zinc-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Masalan: Ali"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors font-medium text-sm"
                required
              />
            </div>

            {/* Last Name */}
            <div className="space-y-1.5">
              <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider">
                Familiyangiz <span className="text-zinc-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Masalan: Vali"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors font-medium text-sm"
                required
              />
            </div>
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              disabled={!isValid}
              variant="primary"
              fullWidth
              size="lg"
              icon={ArrowRight}
            >
              TESTNI BOSHLASH (40 MINUT)
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
