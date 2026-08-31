import React from 'react';
import { 
  Briefcase, 
  Award, 
  Users, 
  BookOpen, 
  MessageSquare, 
  TrendingUp,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const WhyChooseUs: React.FC = () => {
  const { t, language } = useLanguage();

  const cards = [
    {
      title: t.why1Title,
      description: t.why1Desc,
      icon: <Briefcase className="w-6 h-6 text-blue-600" />
    },
    {
      title: t.why2Title,
      description: t.why2Desc,
      icon: <Award className="w-6 h-6 text-emerald-600" />
    },
    {
      title: t.why3Title,
      description: t.why3Desc,
      icon: <Users className="w-6 h-6 text-blue-600" />
    },
    {
      title: t.why4Title,
      description: t.why4Desc,
      icon: <BookOpen className="w-6 h-6 text-emerald-600" />
    },
    {
      title: t.why5Title,
      description: t.why5Desc,
      icon: <MessageSquare className="w-6 h-6 text-blue-600" />
    },
    {
      title: t.why6Title,
      description: t.why6Desc,
      icon: <TrendingUp className="w-6 h-6 text-emerald-600" />
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.whyTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.whyTitle}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {t.whySubtitle}
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={card.title}
              id={`why-choose-card-${index + 1}`}
              className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl border border-slate-200/80 hover:border-blue-400/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-blue-50 to-emerald-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {card.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center text-xs font-semibold text-emerald-700">
                <CheckCircle className="w-4 h-4 mr-1.5 text-emerald-500" />
                <span>{language === 'hi' ? 'सत्यापित अकादमी मानक' : 'Verified Academy Standard'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Quote Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-gradient-to-r from-blue-900 via-blue-800 to-emerald-900 text-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white">
              {language === 'hi' ? 'क्या आप अपने कौशल और आत्मविश्वास को बढ़ाने के लिए तैयार हैं?' : 'Ready to Upgrade Your Skills and Confidence?'}
            </h4>
            <p className="text-blue-200 text-sm max-w-2xl">
              {language === 'hi'
                ? 'कक्षाएं सप्ताह में 3 दिन (सुबह 10:00 से दोपहर 01:00 बजे) STPI जसीडीह केंद्र में आयोजित की जाती हैं।'
                : 'Classes are held 3 days a week (10:00 AM – 01:00 PM) at the Software Technology Parks of India (STPI), Jasidih centre.'}
            </p>
          </div>
          <a
            href="#courses"
            className="shrink-0 px-6 py-3 bg-white hover:bg-slate-100 text-blue-950 font-bold rounded-xl shadow transition-all duration-200 text-sm"
          >
            {t.heroExploreCoursesBtn}
          </a>
        </div>

      </div>
    </section>
  );
};
