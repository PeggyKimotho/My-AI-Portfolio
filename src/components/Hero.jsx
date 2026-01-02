import { useState, useEffect } from 'react';
import { MessageCircle, ChevronDown, ArrowRight } from 'lucide-react';
import { FaLinkedinIn, FaInstagram, FaTiktok } from 'react-icons/fa';

function Hero() {
  const [typewriterText, setTypewriterText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const roles = [
    "AI Automation Specialist",
    "Virtual Assistant"
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    
    if (typewriterText.length < currentRole.length) {
      // Typing forward
      const timeout = setTimeout(() => {
        setTypewriterText(currentRole.slice(0, typewriterText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      // Finished typing, pause then switch to next role
      const timeout = setTimeout(() => {
        setTypewriterText('');
        setCurrentIndex((currentIndex + 1) % roles.length);
      }, 2000); // Pause for 2 seconds before switching
      return () => clearTimeout(timeout);
    }
  }, [typewriterText, currentIndex]);

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center px-4 pt-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="text-center max-w-4xl">
        {/* Static heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Hi, I'm Peggy
        </h1>

        {/* Typewriter effect for roles */}
        <div className="h-16 flex items-center justify-center mb-6">
          <h2 className="text-2xl md:text-4xl text-fuchsia-500 font-semibold">
            {typewriterText}
            <span className="animate-pulse">|</span>
          </h2>
        </div>

        {/* Main Headline */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
          You don't need more hours.<br />
          You need fewer manual tasks.
        </h3>

        {/* Subheadline */}
        <p className="text-base md:text-lg text-slate-300 mb-3 leading-relaxed max-w-3xl mx-auto">
          I help founders save 20+ hours every week by designing reliable AI automation systems and strategic operational support, so your business runs smoothly without constant hands-on work.
        </p>

        {/* Qualifier Line */}
        <p className="text-sm text-slate-400 mb-6 italic">
          For coaches, consultants, solopreneurs, agencies, and small teams ready to scale without burnout.
        </p>

        {/* CTA Button */}
        
          <a href="#projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white font-bold rounded-lg hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-fuchsia-500/50 hover:scale-105 mb-8"
        >
          <span>View My Work</span>
          
        </a>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          
            <a href="https://www.instagram.com/peggyassists/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-fuchsia-500 transition-all duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <FaInstagram className="w-7 h-7" />
          </a>

            <a href="https://www.linkedin.com/in/peggykimotho/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-fuchsia-500 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="w-7 h-7" />
          </a>

          
            

          
            <a href="https://www.tiktok.com/@peggyassists"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-fuchsia-500 transition-all duration-300 hover:scale-110"
            aria-label="TikTok"
          >
            <FaTiktok className="w-7 h-7" />
          </a>
        </div>

        {/* Scroll Down Indicator */}
        
          < a href="#about"
          className="inline-block animate-bounce"
          aria-label="Scroll to About section"
        >
          <ChevronDown className="w-8 h-8 text-fuchsia-500" />
        </a>
      </div>
    </section>
  );
}

export default Hero