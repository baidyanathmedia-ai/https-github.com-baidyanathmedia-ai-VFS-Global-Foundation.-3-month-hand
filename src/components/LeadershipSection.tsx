import React from 'react';
import { 
  Quote, 
  Award, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';
import { LEADERSHIP_INFO } from '../data/academyData';
import { useLanguage } from '../context/LanguageContext';

export const LeadershipSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="leadership" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>{t.leadershipTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            {t.leadershipTitle}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            {t.leadershipSubtitle}
          </p>
        </div>

        {/* Leadership Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-800/90 via-slate-800/60 to-slate-900/90 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Leadership Portrait & Badge */}
            <div className="md:col-span-5 flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 border-emerald-400/50 shadow-xl relative group">
                  <img 
                    src={LEADERSHIP_INFO.image} 
                    alt={LEADERSHIP_INFO.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40" />
                </div>
                
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md whitespace-nowrap">
                  {language === 'hi' ? 'सेंटर हेड' : 'Centre Head'}
                </div>
              </div>

              <div className="pt-2 space-y-1">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {LEADERSHIP_INFO.name}
                </h3>
                <div className="text-sm font-semibold text-emerald-400">
                  {LEADERSHIP_INFO.role}
                </div>
                <div className="text-xs text-slate-300">
                  {LEADERSHIP_INFO.organization}
                </div>
                <div className="text-xs text-slate-400 flex items-center justify-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  <span>{language === 'hi' ? 'STPI देवघर (जसीडीह), झारखंड' : LEADERSHIP_INFO.location}</span>
                </div>
              </div>
            </div>

            {/* Leadership Message & Vision */}
            <div className="md:col-span-7 space-y-5 border-t md:border-t-0 md:border-l border-slate-700/80 pt-6 md:pt-0 md:pl-8">
              
              <div className="relative">
                <Quote className="w-10 h-10 text-blue-400/30 absolute -top-4 -left-2 -z-0" />
                <blockquote className="text-lg sm:text-xl font-medium text-slate-100 italic relative z-10 leading-relaxed">
                  "{language === 'hi'
                    ? 'हमारा उद्देश्य देवघर और संताल परगना के युवाओं को व्यावहारिक कौशल, अंग्रेजी संचार और वैश्विक उद्योग के अनुरूप तैयार कर सशक्त बनाना है।'
                    : LEADERSHIP_INFO.quote}"
                </blockquote>
              </div>

              <div className="text-slate-300 text-sm leading-relaxed space-y-2">
                <p>
                  {language === 'hi' ? (
                    <>
                      <span className="text-white font-semibold">VFS Global Academy STPI Deoghar</span> में हमारा लक्ष्य छात्रों को वैश्विक सेवा और यात्रा उद्योग के अनुकूल व्यावहारिक कौशल, भाषा प्रवाह और आत्मविश्वास प्रदान करना है।
                    </>
                  ) : (
                    <>
                      At <span className="text-white font-semibold">VFS Global Academy STPI Deoghar</span>, our commitment is to provide students with actionable vocational skills, language fluency, and real-world confidence required by the global services and travel industry.
                    </>
                  )}
                </p>
                <p>
                  {language === 'hi'
                    ? 'प्रति बैच अधिकतम 30 छात्रों को व्यक्तिगत मार्गदर्शन, मॉक इंटरव्यू और व्यावहारिक कार्यशालाएं प्रदान की जाती हैं।'
                    : 'Every batch of up to 30 students receives direct interactive guidance, mock interviews, and practical workshops to ensure maximum individual growth and job readiness.'}
                </p>
              </div>

              {/* Core Commitments */}
              <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{language === 'hi' ? 'व्यक्तिगत छात्र मेंटरशिप' : 'Personalized Student Mentorship'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{language === 'hi' ? 'सीमित बैच अनुशासन (अधिकतम 30)' : 'Strict Batch Discipline (Max 30)'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{language === 'hi' ? 'उद्योग कौशल मूल्यांकन' : 'Industry Skill Assessments'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{language === 'hi' ? 'फाउंडेशन सर्टिफिकेशन' : 'Foundation Certification'}</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
