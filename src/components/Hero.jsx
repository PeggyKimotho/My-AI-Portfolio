import { ChevronDown, ArrowRight } from 'lucide-react';
import { FaLinkedinIn, FaInstagram, FaTiktok } from 'react-icons/fa';

function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center px-4 pt-15 md:pt-32 pb-8 md:pb-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="text-center max-w-4xl">

        {/* Main Headline */}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight">
          You don't need more hours.<br />
          You need fewer manual tasks.
        </h1>

        {/* Subheadline */}
        <p className="text-base md:text-xl text-slate-300 mb-4 md:mb-6 leading-relaxed max-w-3xl mx-auto">
          I help founders save 20+ hours every week by designing reliable AI automation systems and strategic operational support, so your business runs smoothly without constant hands-on work.
        </p>

        {/* Qualifier Line */}
        <p className="text-sm md:text-base text-slate-400 mb-6 md:mb-10 italic">
          For coaches, consultants, solopreneurs, agencies and small teams ready to scale without burnout.
        </p>

        {/* CTA Button */}
        <a 
          href="#projects"
          className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white font-bold rounded-lg hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-fuchsia-500/50 hover:scale-105 mb-8 md:mb-12"
        >
          <span>View My Work</span>
          <ArrowRight className="w-5 h-5" />
        </a>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6 md:mb-10">
          <a 
            href="https://www.linkedin.com/in/peggykimotho/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-fuchsia-500 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="w-7 md:w-8 h-7 md:h-8" />
          </a>

          <a 
            href="https://www.instagram.com/peggyassists/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-fuchsia-500 transition-all duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <FaInstagram className="w-7 md:w-8 h-7 md:h-8" />
          </a>

          <a 
            href="https://www.tiktok.com/@peggyassists"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-fuchsia-500 transition-all duration-300 hover:scale-110"
            aria-label="TikTok"
          >
            <FaTiktok className="w-7 md:w-8 h-7 md:h-8" />
          </a>
        </div>

        {/* Scroll Down Indicator */}
        <a 
          href="#about"
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