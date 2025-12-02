import { useState, useEffect } from 'react';
import { Linkedin, Instagram, MessageCircle, ChevronDown } from 'lucide-react';

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
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Hi, I'm Peggy
        </h1>

        {/* Typewriter effect for roles */}
        <div className="h-20 flex items-center justify-center mb-8">
          <h2 className="text-3xl md:text-5xl text-cyan-400 font-semibold">
            {typewriterText}
            <span className="animate-pulse">|</span>
          </h2>
        </div>

        {/* Static certification line */}
        <p className="text-xl text-slate-400 mb-8">
          Certified in Workflow Automation • n8n • CRM Integration • Systems Optimization
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://www.linkedin.com/in/peggykimotho/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-8 h-8" />
          </a>

          <a
            href="https://www.instagram.com/peggyautomates/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram className="w-8 h-8" />
          </a>

          <a
            href="https://www.tiktok.com/@she.automates"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
            aria-label="TikTok"
          >
            <MessageCircle className="w-8 h-8" />
          </a>
        </div>

        {/* Scroll Down Indicator */}
        <a
          href="#about"
          className="inline-block animate-bounce"
          aria-label="Scroll to About section"
        >
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </a>
      </div>
    </section>
  );
}

export default Hero;