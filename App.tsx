
import React, { useState, useEffect } from 'react';
import { 
  User, 
  BookOpen, 
  Award, 
  Mail, 
  Phone, 
  ExternalLink, 
  Sun, 
  Moon, 
  Linkedin, 
  Send, 
  Instagram,
  MapPin,
  Calendar,
  ChevronRight,
  FileText,
  Briefcase
} from 'lucide-react';

/**
 * PROFILE DATA
 * Updated paths based on project folder structure:
 * - Profile Image: /assets/profile.jpg
 * - Documents: /documents/ielts.pdf, /documents/lyceum-diploma.pdf
 */
const PROFILE = {
  fullName: "Shakhzod Gaipov Shavkat ugli",
  shortName: "Shakhzod Gaipov",
  dateOfBirth: "29/08/2007",
  from: "Tashkent, Uzbekistan",

  currentStudy: {
    university: "University of Doha for Science and Technology (UDST)",
    start: "January 2026",
    major: "Business Administration",
    track: "Finance and Technology in Banking"
  },

  education: [
    {
      school: "University of Doha for Science and Technology (UDST)",
      detail: "Business Administration — Finance and Technology in Banking",
      period: "Jan 2026 — Present"
    },
    {
      school: "Academic Lyceum of Westminster International University in Tashkent",
      detail: "Graduated with High Honors in 2025",
      period: "2023 — 2025"
    },
    {
      school: "School No. 250",
      detail: "Academic Excellence Award Recipient",
      period: "Until 2023"
    }
  ],

  credentials: [
    {
      title: "IELTS Academic — Overall 7.5",
      subtitle: "Verified English Proficiency Certificate",
      url: "/documents/ielts.pdf"
    },
    {
      title: "Academic Lyceum Diploma — 2025",
      subtitle: "Official Graduation Diploma - AL WIUT",
      url: "/documents/lyceum-diploma.pdf"
    }
  ],

  links: [
    { 
      label: "LinkedIn", 
      url: "https://www.linkedin.com/in/shakhzod-gaipov-b40204393?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      icon: <Linkedin size={20} />
    },
    { 
      label: "Telegram", 
      url: "https://t.me/shakhzodgaipov", 
      handle: "@shakhzodgaipov",
      icon: <Send size={20} />
    },
    { 
      label: "Instagram", 
      url: "https://instagram.com/shakhzodgaipovv", 
      handle: "@shakhzodgaipovv",
      icon: <Instagram size={20} />
    }
  ],

  contact: {
    email: "shakhzodgaipov@gmail.com",
    phone: "+998909451677"
  },

  assets: {
    profilePhoto: "/assets/profile.jpg"
  }
};

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-primary-500/30 font-sans transition-colors duration-500">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="text-2xl font-black tracking-tighter text-primary-600 dark:text-primary-400">
            {PROFILE.shortName.toUpperCase()}
          </a>
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-8 text-xs font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              <a href="#about" className="hover:text-primary-500 transition-colors">About</a>
              <a href="#education" className="hover:text-primary-500 transition-colors">Education</a>
              <a href="#credentials" className="hover:text-primary-500 transition-colors">Credentials</a>
              <a href="#contact" className="hover:text-primary-500 transition-colors">Contact</a>
            </div>
            <button 
              onClick={toggleTheme}
              className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:scale-110 active:scale-95 transition-all shadow-sm"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-10 order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Academic Portfolio 2025
            </div>
            <h1 className="text-6xl lg:text-9xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tight">
              Shakhzod <br /> <span className="text-primary-600 dark:text-primary-400">Gaipov</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-medium mx-auto lg:mx-0">
              Incoming Business Administration student at <strong>UDST</strong>. Exploring the intersection of <span className="underline decoration-primary-500 decoration-4 underline-offset-4">Finance and Technology</span>.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-5 pt-4">
              <a 
                href="#contact" 
                className="px-10 py-5 bg-primary-600 hover:bg-primary-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-primary-500/30 hover:-translate-y-1 flex items-center gap-3"
              >
                Contact Me <Mail size={22} />
              </a>
              <a 
                href="#credentials" 
                className="px-10 py-5 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 font-black rounded-2xl hover:border-primary-500 transition-all flex items-center gap-3"
              >
                View Documents <FileText size={22} />
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-600 to-sky-400 rounded-[4rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative w-80 h-96 lg:w-[420px] lg:h-[540px] rounded-[3.5rem] overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-2xl border-[8px] border-white dark:border-slate-900">
                <img 
                  src={PROFILE.assets.profilePhoto} 
                  alt={`${PROFILE.fullName}, the author of this personal portfolio website`}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // Fallback to a high-quality UI avatar if local file is missing
                    target.src = "https://ui-avatars.com/api/?name=Shakhzod+Gaipov&size=1024&background=0ea5e9&color=fff&bold=true";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-slate-50 dark:bg-slate-900/50 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4 space-y-10">
              <div className="space-y-4">
                <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary-500">Introduction</h2>
                <h3 className="text-4xl font-black tracking-tight">Personal Details</h3>
              </div>
              <div className="p-8 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 space-y-8 shadow-sm">
                <div className="flex items-center gap-5">
                  <div className="p-4 bg-primary-500/10 rounded-2xl text-primary-500">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Date of Birth</p>
                    <p className="text-lg font-bold">{PROFILE.dateOfBirth}</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="p-4 bg-primary-500/10 rounded-2xl text-primary-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Nationality</p>
                    <p className="text-lg font-bold">{PROFILE.from}</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="p-4 bg-primary-500/10 rounded-2xl text-primary-500">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Future Major</p>
                    <p className="text-lg font-bold">Banking & Fintech</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-8 flex flex-col justify-center">
              <div className="space-y-8 text-xl lg:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium italic border-l-4 border-primary-500 pl-8">
                <p>
                  "My academic path has been defined by excellence, culminating in graduation from the prestigious Westminster International University Academic Lyceum."
                </p>
                <p className="not-italic font-normal text-lg lg:text-xl text-slate-700 dark:text-slate-300">
                  I am a high-achieving student with a deep interest in financial markets and the banking sector. My goal is to leverage modern technology within the banking sector, exploring how Fintech is reshaping global finance. I bring strong analytical skills and a 7.5 IELTS proficiency level to the table, and I am excited to begin my journey at UDST in Doha.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section id="education" className="py-32 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary-500 mb-4">Milestones</h2>
            <h3 className="text-5xl font-black tracking-tight">Education Journey</h3>
          </div>
          
          <div className="grid grid-cols-1 gap-12 max-w-4xl mx-auto relative">
            <div className="absolute left-8 md:left-[2.75rem] top-0 bottom-0 w-1 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
            
            {PROFILE.education.map((item, index) => (
              <div key={index} className="relative flex gap-12 group">
                <div className="z-10 flex-shrink-0 w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border-4 border-slate-100 dark:border-slate-800 flex items-center justify-center font-black text-xl text-primary-500 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500 shadow-sm">
                  {index + 1}
                </div>
                <div className="flex-grow pb-12">
                  <div className="p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 hover:border-primary-500/30 hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-500">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                      <h4 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">{item.school}</h4>
                      <span className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-xl">{item.period}</span>
                    </div>
                    <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section id="credentials" className="py-32 bg-slate-900 text-white scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary-400">Achievements</h2>
            <h3 className="text-5xl font-black tracking-tight">Verified Credentials</h3>
            <p className="text-slate-400 text-xl font-medium">Documents open in a new browser tab for verification.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {PROFILE.credentials.map((cred, idx) => (
              <a 
                key={idx} 
                href={cred.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative block p-12 bg-slate-800/40 rounded-[3.5rem] border-2 border-white/5 hover:border-primary-500/50 hover:bg-slate-800 transition-all duration-500 overflow-hidden"
                title={`Open ${cred.title} in new tab`}
              >
                <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-100 transition-all pointer-events-none">
                  <FileText size={160} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-12">
                    <div className="p-6 bg-primary-500 text-white rounded-3xl shadow-xl shadow-primary-500/20 group-hover:rotate-6 transition-transform">
                      <Award size={32} />
                    </div>
                    <ExternalLink className="text-slate-600 group-hover:text-primary-400 transition-colors" size={28} />
                  </div>
                  <h3 className="text-3xl font-black mb-4 leading-tight group-hover:text-primary-400 transition-colors">{cred.title}</h3>
                  <p className="text-slate-400 text-lg font-medium mb-12 max-w-xs">{cred.subtitle}</p>
                  <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-primary-400 font-black group-hover:bg-primary-500 group-hover:text-white transition-all">
                    View Full PDF <ChevronRight size={18} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-[4rem] p-12 lg:p-24 text-white relative shadow-2xl shadow-primary-500/20 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-10">
                <h2 className="text-6xl font-black tracking-tighter leading-none">Let's <br />Connect.</h2>
                <p className="text-2xl font-medium text-white/80 leading-relaxed">
                  Available for professional opportunities and networking. Reach out via any platform below.
                </p>
                
                <div className="space-y-6">
                  <a href={`mailto:${PROFILE.contact.email}`} className="flex items-center gap-6 group w-fit">
                    <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-white group-hover:text-primary-600 transition-all">
                      <Mail size={28} />
                    </div>
                    <span className="text-xl font-bold border-b-2 border-transparent group-hover:border-white transition-all break-all">{PROFILE.contact.email}</span>
                  </a>
                  <a href={`tel:${PROFILE.contact.phone}`} className="flex items-center gap-6 group w-fit">
                    <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-white group-hover:text-primary-600 transition-all">
                      <Phone size={28} />
                    </div>
                    <span className="text-xl font-bold border-b-2 border-transparent group-hover:border-white transition-all">{PROFILE.contact.phone}</span>
                  </a>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {PROFILE.links.map((link, i) => (
                  <a 
                    key={i} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-8 bg-white/5 border border-white/10 hover:bg-white hover:text-primary-600 rounded-[2rem] transition-all duration-500 font-black text-xl group"
                  >
                    <div className="flex items-center gap-6">
                      {link.icon}
                      {link.label}
                    </div>
                    <ChevronRight size={24} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pb-20 text-center text-slate-400 dark:text-slate-600 font-black uppercase tracking-[0.4em] text-[10px]">
        <div className="max-w-6xl mx-auto px-6">
          <p>© {new Date().getFullYear()} {PROFILE.fullName}. Built with Excellence.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
