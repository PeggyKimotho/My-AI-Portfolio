import { useState, useEffect } from 'react'
import { Linkedin, Instagram, MessageCircle, ChevronDown } from 'lucide-react'

function Hero() {
  const [typewriterText, setTypewriterText] = useState('')
  const [currentLine, setCurrentLine] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const lines = [
    "Hi, I'm Peggy.",
    "An AI Automation Specialist.",
    "and Virtual Assistant."
  ]

  useEffect(() => {
    // If we've shown all lines, stop
    if (currentLine >= lines.length) return

    const currentFullText = lines[currentLine]
    const typingSpeed = 100 // milliseconds per character
    const pauseAfterLine = 1000 // pause after completing a line

    if (!isDeleting && typewriterText.length < currentFullText.length) {
      // Typing forward
      const timeout = setTimeout(() => {
        setTypewriterText(currentFullText.slice(0, typewriterText.length + 1))
      }, typingSpeed)
      return () => clearTimeout(timeout)
    } else if (!isDeleting && typewriterText.length === currentFullText.length) {
      // Finished typing this line, pause then move to next
      const timeout = setTimeout(() => {
        setCurrentLine(currentLine + 1)
        setTypewriterText('')
      }, pauseAfterLine)
      return () => clearTimeout(timeout)
    }
  }, [typewriterText, currentLine, isDeleting, lines])

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center px-4 pt-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="text-center max-w-4xl">
        {/* Typewriter Container */}
        <div className="h-48 flex flex-col justify-center items-center mb-8">
          {/* Line 1: Hi, I'm Peggy */}
          {currentLine >= 0 && (
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
              {currentLine === 0 ? typewriterText : lines[0]}
              {currentLine === 0 && (
                <span className="animate-pulse text-cyan-400">|</span>
              )}
            </h1>
          )}

          {/* Line 2: An AI automation specialist */}
          {currentLine >= 1 && (
            <h2 className="text-3xl md:text-5xl text-cyan-400 mb-4">
              {currentLine === 1 ? typewriterText : lines[1]}
              {currentLine === 1 && (
                <span className="animate-pulse">|</span>
              )}
            </h2>
          )}

          {/* Line 3: and virtual assistant */}
          {currentLine >= 2 && (
            <h2 className="text-3xl md:text-5xl text-cyan-400">
              {currentLine === 2 ? typewriterText : lines[2]}
              {currentLine === 2 && (
                <span className="animate-pulse">|</span>
              )}
            </h2>
          )}
        </div>

        {/* Certification text - shows after typewriter completes */}
        {currentLine >= 3 && (
          <>
            <p className="text-xl text-slate-400 mb-8 animate-fade-in">
              Certified in Workflow Automation • n8n • CRM Integration • Systems Optimization
            </p>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6 mb-12 animate-fade-in">
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
                href="https://www.instagram.com/peggyautomates/v"
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
          </>
        )}
      </div>
    </section>
  )
}

export default Hero