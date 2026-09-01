import React, { useState } from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowUp, 
  ExternalLink, 
  Award,
  Mail, 
  CheckCircle2, 
  BellRing, 
  Loader2, 
  Send,
  Linkedin,
  Instagram,
  Facebook,
  Share2
} from 'lucide-react';
import { CONTACT_CONFIG } from '../data/academyData';
import { useLanguage } from '../context/LanguageContext';
import { VfsLogo } from './VfsLogo';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setErrorMessage('Please enter your email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Save subscriber to Firestore
      await addDoc(collection(db, 'newsletterSubscribers'), {
        email: trimmedEmail,
        subscribedAt: new Date().toISOString(),
        createdAt: serverTimestamp()
      });

      // Persist to local backup
      try {
        const existing = JSON.parse(localStorage.getItem('vfs_newsletter_subscribers') || '[]');
        if (!existing.includes(trimmedEmail)) {
          existing.push(trimmedEmail);
          localStorage.setItem('vfs_newsletter_subscribers', JSON.stringify(existing));
        }
      } catch {
        // Safe fallback
      }

      setIsSubscribed(true);
      setEmail('');
    } catch (err) {
      console.error('Newsletter Firestore error:', err);
      // Fallback
      setIsSubscribed(true);
      setEmail('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs sm:text-sm border-t border-slate-800 relative">
      
      {/* Top Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        
        {/* Newsletter / Stay Updated Form Banner */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Subtle Decorative Background Accents */}
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
            <div className="text-center lg:text-left space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                <BellRing className="w-3.5 h-3.5" />
                <span>Stay Updated</span>
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                {language === 'hi'
                  ? 'नए कोर्स एवं बैच अपडेट के लिए सब्सक्राइब करें'
                  : 'Subscribe for Course Updates & Batch Alerts'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {language === 'hi'
                  ? 'एसटीपीआई देवघर केंद्र में नए सर्टिफिकेट कोर्स, एडमिशन शेड्यूल और विशेष घोषणाओं की जानकारी सीधे अपने ईमेल पर पाएं।'
                  : 'Get instant notifications regarding upcoming certificate batches, interview masterclasses, and admission deadlines at STPI Deoghar.'}
              </p>
            </div>

            <div className="w-full lg:w-auto lg:min-w-[420px]">
              {isSubscribed ? (
                <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-700/60 flex items-center gap-3.5 text-emerald-200 animate-fadeIn">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                  <div className="text-xs sm:text-sm">
                    <p className="font-bold text-white">
                      {language === 'hi' ? 'सफलतापूर्वक सदस्यता ली गई!' : 'Thank you for subscribing!'}
                    </p>
                    <p className="text-emerald-300 text-xs mt-0.5">
                      {language === 'hi'
                        ? 'आपको नए बैच और कोर्स की सूचनाएं ईमेल पर प्राप्त होंगी।'
                        : "You'll receive early notifications for new course admissions."}
                    </p>
                    <button
                      onClick={() => setIsSubscribed(false)}
                      className="text-[11px] text-emerald-400 hover:text-emerald-200 underline mt-1 font-semibold cursor-pointer"
                    >
                      {language === 'hi' ? 'दूसरा ईमेल दर्ज करें' : 'Subscribe another email'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
                    <div className="relative flex-1">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        id="newsletter-email-input"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errorMessage) setErrorMessage('');
                        }}
                        placeholder={language === 'hi' ? 'अपना ईमेल दर्ज करें...' : 'Enter your email address...'}
                        className="w-full pl-10 pr-4 py-3 bg-slate-950/90 text-white placeholder-slate-400 text-xs sm:text-sm rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-inner"
                        disabled={isSubmitting}
                      />
                    </div>
                    <button
                      id="newsletter-subscribe-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-lg hover:shadow-blue-600/25 active:scale-95 disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-white" />
                          <span>{language === 'hi' ? 'प्रतीक्षा करें...' : 'Subscribing...'}</span>
                        </>
                      ) : (
                        <>
                          <span>{language === 'hi' ? 'सब्सक्राइब करें' : 'Subscribe'}</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                  {errorMessage && (
                    <p className="text-xs text-rose-400 pl-1 font-medium">{errorMessage}</p>
                  )}
                  <p className="text-[11px] text-slate-400 pl-1">
                    {language === 'hi'
                      ? 'हम आपकी गोपनीयता का सम्मान करते हैं। कभी भी अनसब्सक्राइब करें।'
                      : 'No spam. Unsubscribe at any time with one click.'}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Foundation Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-white">
              <VfsLogo variant="dark" size="md" showSubtitle={true} />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {language === 'hi'
                ? 'एसटीपीआई देवघर केंद्र में ट्रेवल, हॉस्पिटैलिटी मैनेजमेंट, भाषा और व्यावसायिक संचार में उद्योग-प्रासंगिक कौशल के साथ युवाओं को सशक्त बनाना।'
                : 'Empowering students with industry-relevant skills in Travel, Hospitality Management, Language and Professional Communication at the STPI Deoghar Centre.'}
            </p>

            <div className="pt-2 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-2 text-slate-300 font-medium">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>{language === 'hi' ? '3 माह का सर्टिफिकेट कोर्स' : '3-Month Certificate Programmes'}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 font-medium">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>{language === 'hi' ? 'प्रति बैच अधिकतम 30 छात्र' : 'Max 30 Students Per Batch Discipline'}</span>
              </div>
            </div>

            {/* Social Media & Community Engagement Section */}
            <div className="pt-4 border-t border-slate-900">
              <div className="flex items-center gap-2 mb-2">
                <Share2 className="w-3.5 h-3.5 text-blue-400" />
                <h5 className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                  {language === 'hi' ? 'सोशल मीडिया पर जुड़ें' : 'Connect & Follow Us'}
                </h5>
              </div>
              <p className="text-[11px] text-slate-400 mb-3">
                {language === 'hi'
                  ? 'कैंपस अपडेट, छात्र सफलता की कहानियां और इवेंट्स के लिए हमारे साथ जुड़ें।'
                  : 'Follow our community for campus activities, student stories, and admissions updates.'}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {/* LinkedIn */}
                <a
                  id="footer-social-linkedin"
                  href={CONTACT_CONFIG.SOCIAL_LINKS.LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn - VFS Global"
                  title="Follow on LinkedIn"
                  className="group flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-[#0A66C2]/20 text-slate-300 hover:text-white border border-slate-800 hover:border-[#0A66C2]/60 transition-all shadow-sm"
                >
                  <div className="p-1 rounded-md bg-[#0A66C2]/20 text-[#0A66C2] group-hover:bg-[#0A66C2] group-hover:text-white transition-colors">
                    <Linkedin className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-semibold">LinkedIn</span>
                </a>

                {/* Instagram */}
                <a
                  id="footer-social-instagram"
                  href={CONTACT_CONFIG.SOCIAL_LINKS.INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram - VFS Global"
                  title="Follow on Instagram"
                  className="group flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-pink-950/40 text-slate-300 hover:text-white border border-slate-800 hover:border-pink-500/50 transition-all shadow-sm"
                >
                  <div className="p-1 rounded-md bg-pink-500/20 text-pink-400 group-hover:bg-pink-600 group-hover:text-white transition-all">
                    <Instagram className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-semibold">Instagram</span>
                </a>

                {/* Facebook */}
                <a
                  id="footer-social-facebook"
                  href={CONTACT_CONFIG.SOCIAL_LINKS.FACEBOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook - VFS Global"
                  title="Follow on Facebook"
                  className="group flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-[#1877F2]/20 text-slate-300 hover:text-white border border-slate-800 hover:border-[#1877F2]/60 transition-all shadow-sm"
                >
                  <div className="p-1 rounded-md bg-[#1877F2]/20 text-[#1877F2] group-hover:bg-[#1877F2] group-hover:text-white transition-colors">
                    <Facebook className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-semibold">Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {language === 'hi' ? 'त्वरित लिंक' : 'Quick Links'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors">{t.navHome}</a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">{t.navAbout}</a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-blue-400 transition-colors">{t.navWhyChooseUs}</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-blue-400 transition-colors">{t.navCourses}</a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-blue-400 transition-colors">{t.navSchedule}</a>
              </li>
              <li>
                <a href="#admission" className="hover:text-blue-400 transition-colors">{t.navAdmission}</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic & Community */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {language === 'hi' ? 'कैंपस एवं संपर्क' : 'Campus & Support'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#gallery" className="hover:text-blue-400 transition-colors">{t.navGallery}</a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-blue-400 transition-colors">{t.navLeadership}</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-blue-400 transition-colors">{t.navTestimonials}</a>
              </li>
              <li>
                <a href="#notices" className="hover:text-blue-400 transition-colors">{t.navNotices}</a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-blue-400 transition-colors">{t.navFaq}</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">{t.navContact}</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Centre Location & Timing */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {language === 'hi' ? 'केंद्र का पता एवं समय' : 'Centre Location & Desk Hours'}
            </h4>
            <div className="text-xs text-slate-400 space-y-2 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>STPI, Deoghar (Jasidih)</strong><br />
                  {language === 'hi' ? 'स्वागत पेट्रोल पंप के पास, मणिकपुर रोड' : 'Near Swagat Petrol Pump, Manikpur Road'}<br />
                  {language === 'hi' ? 'रेलवे ओवर ब्रिज के बाद, जसीडीह, देवघर, झारखंड' : 'After Railway Over Bridge, Jasidih, Deoghar, Jharkhand, India'}
                </span>
              </div>

              <div className="flex items-center gap-2 pt-1 text-slate-300">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{language === 'hi' ? 'कार्यालय / डेस्क समय:' : 'Office / Desk Timing:'} <strong>10:00 AM – 01:00 PM</strong></span>
              </div>

              {/* Direct Phone & WhatsApp in Footer */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <a
                  href={`tel:${CONTACT_CONFIG.PHONE_NUMBER.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-900/60 hover:bg-blue-800 text-white text-xs font-bold border border-blue-700/60 transition-colors"
                >
                  <span>📞 {CONTACT_CONFIG.PHONE_NUMBER}</span>
                </a>
                <a
                  href={`https://wa.me/${CONTACT_CONFIG.WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(CONTACT_CONFIG.WHATSAPP_MESSAGE_PREFILL)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-emerald-900/60 hover:bg-emerald-800 text-emerald-300 text-xs font-bold border border-emerald-700/60 transition-colors"
                >
                  <span>💬 WhatsApp</span>
                </a>
              </div>

              <div className="pt-1">
                <a 
                  href={CONTACT_CONFIG.GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 underline font-semibold"
                >
                  <span>{language === 'hi' ? 'गूगल मैप पर दिशा-निर्देश देखें' : 'Open Directions on Google Maps'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Official Foundation Disclaimer Box */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-400 leading-relaxed">
          <p>
            <strong className="text-slate-300">{language === 'hi' ? 'आधिकारिक सूचना:' : 'Official Disclaimer:'}</strong>{' '}
            {language === 'hi'
              ? 'यह वेबसाइट STPI जसीडीह, देवघर (झारखंड, भारत) में VFS Global Foundation के अधीन संचालित VFS Global Academy का प्रतिनिधित्व करती है। यह पोर्टल मुख्य रूप से ट्रेवल, हॉस्पिटैलिटी मैनेजमेंट तथा लैंग्वेज एवं कम्युनिकेशन में सर्टिफिकेट प्रशिक्षण और क्षेत्रीय कौशल विकास के लिए समर्पित है।'
              : 'This website represents VFS Global Academy, operated under the VFS Global Foundation at the Software Technology Parks of India (STPI) centre in Jasidih, Deoghar (Jharkhand, India). This portal is dedicated specifically to vocational student training, certificate courses in Travel, Hospitality Management, and Language & Communication, and regional skill development initiatives.'}
          </p>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 text-center sm:text-left">
            Copyright © 2026 VFS Global Academy. All Rights Reserved.
          </p>

          <div className="flex items-center gap-2 text-slate-400">
            <span className="text-[11px] text-slate-500 hidden sm:inline">
              {language === 'hi' ? 'फॉलो करें:' : 'Follow Us:'}
            </span>
            <a
              href={CONTACT_CONFIG.SOCIAL_LINKS.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-[#0A66C2]/20 text-slate-400 hover:text-[#0A66C2] transition-colors"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href={CONTACT_CONFIG.SOCIAL_LINKS.INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-pink-950/40 text-slate-400 hover:text-pink-400 transition-colors"
              aria-label="Instagram"
              title="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href={CONTACT_CONFIG.SOCIAL_LINKS.FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-[#1877F2]/20 text-slate-400 hover:text-[#1877F2] transition-colors"
              aria-label="Facebook"
              title="Facebook"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            id="footer-back-to-top-btn"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs transition-colors cursor-pointer"
          >
            <span>{language === 'hi' ? 'शीर्ष पर जाएं' : 'Back to Top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
