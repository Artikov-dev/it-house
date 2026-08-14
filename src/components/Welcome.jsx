import React, { useState } from 'react';
import { HelpCircle, Award, Users, CheckSquare, Sparkles, ArrowRight } from 'lucide-react';
import Button from './Button';

/**
 * Welcome screen component in Uzbek with student name validation and quiz info cards.
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
      title: "20 Ta Savol",
      subtitle: "Interaktiv Figma testi",
      color: "from-purple-500/20 to-indigo-500/20 border-purple-500/30 text-purple-300"
    },
    {
      icon: Award,
      title: "Boshlang‘ich Daraja",
      subtitle: "Qiziqarli va oson asoslar",
      color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-300"
    },
    {
      icon: Users,
      title: "9–16 Yosh",
      subtitle: "Yosh ijodkorlar uchun",
      color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-300"
    },
    {
      icon: CheckSquare,
      title: "Ko‘p Variantli",
      subtitle: "1 ta to‘g‘ri javobni tanlang",
      color: "from-orange-500/20 to-rose-500/20 border-orange-500/30 text-orange-300"
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-fade-in py-4 px-2">
      {/* Header Banner */}
      <div className="text-center space-y-4">
        {/* Figma Inspired Brand Logo Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md animate-float">
          <div className="flex -space-x-1.5">
            <span className="w-3.5 h-3.5 rounded-full bg-[#F24E1E]" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#FF7262]" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#A259FF]" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#1ABCFE]" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#0ACF83]" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-purple-200">
            Interaktiv Bilim Testi
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-outfit text-white tracking-tight leading-tight">
          Figma <span className="bg-gradient-to-r from-[#A259FF] via-[#1ABCFE] to-[#0ACF83] bg-clip-text text-transparent">Boshlang‘ich Testi</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-lg mx-auto font-medium">
          Figma bo‘yicha bilimlaringizni sinang va shaxsiy sertifikatingizni qo‘lga kiriting!
        </p>
      </div>

      {/* Info Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {infoCards.map((card, idx) => {
          const IconComponent = card.icon;
          return (
            <div
              key={idx}
              className={`p-4 rounded-2xl bg-gradient-to-br ${card.color} border backdrop-blur-md space-y-2 text-left transition-transform hover:-translate-y-1`}
            >
              <div className="p-2 w-fit rounded-xl bg-white/10">
                <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-extrabold text-white text-base sm:text-lg leading-tight">
                {card.title}
              </h3>
              <p className="text-xs text-gray-300 font-medium">
                {card.subtitle}
              </p>
            </div>
          );
        })}
      </div>

      {/* Form Card */}
      <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/15 space-y-6 shadow-2xl relative">
        <div className="flex items-center gap-3 pb-2 border-b border-white/10">
          <div className="p-2.5 rounded-2xl bg-gradient-to-r from-[#A259FF] to-[#1ABCFE]">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">O‘quvchini Ro‘yxatdan O‘tkazish</h2>
            <p className="text-sm text-gray-400">Testni boshlash uchun ism-familiyangizni kiriting</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* First Name */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-200">
                Ismingiz <span className="text-[#FF7262]">*</span>
              </label>
              <input
                type="text"
                placeholder="Masalan: Roma"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-3.5 rounded-2xl bg-slate-900/80 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-[#1ABCFE] focus:ring-2 focus:ring-[#1ABCFE]/50 transition-all font-semibold"
                required
              />
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-200">
                Familiyangiz <span className="text-[#FF7262]">*</span>
              </label>
              <input
                type="text"
                placeholder="Masalan: Artikov"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-3.5 rounded-2xl bg-slate-900/80 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-[#1ABCFE] focus:ring-2 focus:ring-[#1ABCFE]/50 transition-all font-semibold"
                required
              />
            </div>
          </div>

          {!isValid && (firstName.length > 0 || lastName.length > 0) && (
            <p className="text-xs font-semibold text-rose-400 animate-fade-in">
              Iltimos, ism va familiya maydonlarini to‘liq to‘ldiring.
            </p>
          )}

          <div className="pt-2">
            <Button
              type="submit"
              disabled={!isValid}
              variant="primary"
              fullWidth
              size="lg"
              icon={ArrowRight}
            >
              Testni Boshlash
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
