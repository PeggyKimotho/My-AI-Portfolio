import { Search, Lightbulb, Cog, HeadphonesIcon } from 'lucide-react'

function Process() {
  const processSteps = [
    {
      number: '01',
      title: 'Audit',
      icon: <Search className="w-8 h-8" />,
      description: 'We analyze your current workflows to identify automation opportunities and pain points. I take time to understand your business, goals, and challenges.'
    },
    {
      number: '02',
      title: 'Strategy',
      icon: <Lightbulb className="w-8 h-8" />,
      description: 'Design a custom automation system tailored to your business needs and goals. I create a detailed roadmap with clear timelines and expected outcomes.'
    },
    {
      number: '03',
      title: 'Implementation',
      icon: <Cog className="w-8 h-8" />,
      description: 'Build and configure your automation workflows with precision and attention to detail. Every system is thoroughly tested before launch.'
    },
    {
      number: '04',
      title: 'Support',
      icon: <HeadphonesIcon className="w-8 h-8" />,
      description: 'Provide documentation, training, and ongoing support to ensure long-term success. I\'m here whenever you need adjustments or enhancements.'
    }
  ]

  return (
    <section 
      id="process" 
      className="py-20 px-4 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
            My Process
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A proven methodology that delivers reliable automation systems every time
          </p>
        </div>

        {/* Process Steps - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-fuchsia-500 via-blue-500 to-fuchsia-500 opacity-30"></div>

          {processSteps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Step Card */}
              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-fuchsia-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-fuchsia-500/20">
                
                {/* Number Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-blue-500 rounded-full flex items-center justify-center text-slate-950 font-bold text-lg shadow-lg z-10">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-fuchsia-500 mb-4 mt-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-center text-white group-hover:text-fuchsia-500 transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-center leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>

              {/* Arrow Between Steps (not on last step) */}
              {index < processSteps.length - 1 && (
                <div className="absolute top-24 -right-4 text-fuchsia-500/50 z-20 hidden lg:block">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Process Steps - Mobile & Tablet */}
        <div className="lg:hidden space-y-8">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className="relative"
            >
              {/* Vertical Connecting Line (not on last step) */}
              {index < processSteps.length - 1 && (
                <div className="absolute left-6 top-24 bottom-0 w-0.5 bg-gradient-to-b from-fuchsia-500 to-blue-500 opacity-30 translate-y-8"></div>
              )}

              {/* Step Card */}
              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-fuchsia-500 transition-all duration-300 relative">
                
                {/* Number Badge */}
                <div className="absolute -left-4 top-6 w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-blue-500 rounded-full flex items-center justify-center text-slate-950 font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                <div className="ml-12">
                  {/* Icon */}
                  <div className="text-fuchsia-500 mb-3 inline-block">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-300 text-lg mb-6">
            Ready to streamline your operations?
          </p>
          <a 
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-blue-500 text-slate-950 font-bold rounded-lg hover:opacity-90 transition-opacity duration-300 hover:shadow-lg hover:shadow-fuchsia-500/50"
          >
            Start Your Automation Journey
          </a>
        </div>

      </div>
    </section>
  )
}

export default Process