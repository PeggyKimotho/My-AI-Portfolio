import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [typewriterText, setTypewriterText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  const roles = [
    'AI Automation Specialist',
    'Virtual Assistant',
  ]

  useEffect(() => {
    const currentRole = roles[currentIndex]

    if (typewriterText.length < currentRole.length) {
      // Typing forward
      const timeout = setTimeout(() => {
        setTypewriterText(
          currentRole.slice(0, typewriterText.length + 1)
        )
      }, 100)

      return () => clearTimeout(timeout)
    } else {
      // Pause, then switch role
      const timeout = setTimeout(() => {
        setTypewriterText('')
        setCurrentIndex((currentIndex + 1) % roles.length)
      }, 2000)

      return () => clearTimeout(timeout)
    }
  }, [typewriterText, currentIndex])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/95 backdrop-blur-sm border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <a href="#home" className="font-bold hover:opacity-80 transition-opacity">
            <div className="flex flex-col">
              <span className="text-lg md:text-xl bg-gradient-to-r from-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
                Peggy Kimotho
              </span>
              <div className="flex items-center gap-1">
                <span className="text-xs md:text-sm text-slate-400">
                  {typewriterText}
                </span>
                <span className="text-fuchsia-500 animate-pulse text-xs md:text-sm">
                  |
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-slate-300 hover:text-fuchsia-500 transition-colors duration-300 relative group inline-block"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-fuchsia-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-slate-300 hover:text-fuchsia-500 transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="px-4 py-4 space-y-3 bg-slate-900 border-t border-slate-800">
          {navLinks.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={toggleMenu}
                className="block text-slate-300 hover:text-fuchsia-500 hover:pl-2 transition-all duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
