function About() {
  return (
    <section 
      id="about" 
      className="py-20 px-4 bg-slate-900/50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
              About Me
            </h2>
            
            
            <p className="text-slate-300 mb-4 leading-relaxed">
              Most VAs just take tasks off your plate. Most automation specialists just set up tools.
            </p>
            
            <p className="text-slate-300 mb-4 leading-relaxed">
              I do both, and that's the difference.
            </p>

            <p className="text-slate-300 mb-4 leading-relaxed">
              I provide hands-on support for what needs attention now, while building AI-powered systems that eliminate your repetitive work for good.
            </p>

            <p className="text-slate-300 mb-4 leading-relaxed">
              You get relief today and scalability tomorrow.
            </p>
            

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-fuchsia-500 transition-colors duration-300">
                <p className="text-3xl font-bold text-fuchsia-500">5+</p>
                <p className="text-sm text-slate-400">Years of Experience</p>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-fuchsia-500 transition-colors duration-300">
                <p className="text-3xl font-bold text-fuchsia-500">20+</p>
                <p className="text-sm text-slate-400">Clients Supported</p>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-fuchsia-500 transition-colors duration-300">
                <p className="text-3xl font-bold text-fuchsia-500">100%</p>
                <p className="text-sm text-slate-400">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Side - Photo */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* Gradient background circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500 to-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              
              {/* Photo container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-fuchsia-500/30 hover:border-fuchsia-500 transition-all duration-300 hover:scale-105">
                {/* Placeholder - Replace with your actual photo */}
                <img 
  src="/images/AI Automation Specialist in Kenya. Virtual Assistant in Kenya.png" 
  alt="Peggy Kimotho - AI Automation Specialist" 
  className="w-full h-full object-cover"
/>
                
                {/* When you have a real photo, replace the div above with: */}
                {/* <img 
                  src="/images/peggy-photo.jpg" 
                  alt="Peggy Kimotho - AI Automation Specialist" 
                  className="w-full h-full object-cover"
                /> */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About