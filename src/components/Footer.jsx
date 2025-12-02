import { Heart } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-6 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Copyright */}
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {currentYear} Peggy Kimotho. All rights reserved.
          </p>

          {/* Made with love */}
          <p className="text-slate-500 text-sm flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-400 fill-red-400 animate-pulse" /> by Peggy
          </p>

          {/* Optional: Legal Links */}
          <div className="flex gap-6 text-sm">
            <a href="#privacy" className="text-slate-500 hover:text-cyan-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#terms" className="text-slate-500 hover:text-cyan-400 transition-colors duration-300">
              Terms of Service
            </a>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer