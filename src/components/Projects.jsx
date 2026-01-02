import { ExternalLink, ArrowRight } from 'lucide-react'

function Projects() {
  const projects = [

    {
      title: 'Lead Nurture Campaign System',
      description: 'Built a lead generation system that automatically discovers, qualifies, and nurtures potential coaching clients from Reddit. Scores leads, generates personalizes outreach, and alerts on high-value prospects in real-time.',

      tools: ['n8n', 'Airtable', 'Gemini', 'Slack'],
      result: '2x conversion rate',
      metrics: [
        { label: 'Conversion Rate', value: '+200%' },
        { label: 'Lead Response Time', value: '< 5 mins' },
        { label: 'Booking Rate', value: '+150%' }
      ],
      image: '📈',
      category: 'Marketing'
    },
    {
      title: 'Content Publishing Workflow',
      description: 'Created a multi-platform content distribution system that automatically publishes and tracks content across social media channels. Integrated content calendar with analytics dashboard for performance tracking.',
      tools: ['Make', 'Notion', 'Buffer', 'Google Analytics'],
      result: '20hrs saved/week',
      metrics: [
        { label: 'Publishing Time', value: '-85%' },
        { label: 'Platforms Managed', value: '6' },
        { label: 'Posts per Week', value: '3x increase' }
      ],
      image: '📱',
      category: 'Content'
    },
    {
      title: 'Client Onboarding System',
      description: 'Designed automated onboarding workflows with document collection, scheduling, and welcome sequences for a consulting firm. Reduced onboarding time from 2 weeks to 2 days with improved client experience.',
      tools: ['ClickUp', 'Calendly', 'DocuSign', 'Slack'],
      result: '90% faster onboarding',
      metrics: [
        { label: 'Onboarding Time', value: '2 days' },
        { label: 'Document Processing', value: 'Automated' },
        { label: 'Client Satisfaction', value: '98%' }
      ],
      image: '🤝',
      category: 'Operations'
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Deployed an AI-powered chatbot that handles common customer inquiries and routes complex issues to human agents. Integrated with knowledge base and CRM for context-aware responses.',
      tools: ['n8n', 'OpenAI', 'Slack', 'HubSpot'],
      result: '60% ticket reduction',
      metrics: [
        { label: 'Tickets Automated', value: '60%' },
        { label: 'Response Time', value: 'Instant' },
        { label: 'Customer Satisfaction', value: '4.8/5' }
      ],
      image: '🤖',
      category: 'AI/Support'
    },

  ]

  return (
    <section 
      id="projects" 
      className="py-20 px-4 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Real automation systems delivering measurable results for real clients
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-slate-900 rounded-xl border border-slate-800 hover:border-fuchsia-500 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-fuchsia-500/20"
            >
              {/* Project Header with Icon */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 border-b border-slate-800">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">{project.image}</div>
                    <div>
                      <span className="text-xs text-fuchsia-500 font-semibold uppercase tracking-wide">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white group-hover:text-fuchsia-500 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Description */}
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <p className="text-xl font-bold text-fuchsia-500">{metric.value}</p>
                      <p className="text-xs text-slate-500">{metric.label}</p>
                    </div>
                  ))}
                </div>

                {/* Tools Used */}
                <div className="mb-4">
                  <p className="text-xs text-slate-500 mb-2 uppercase tracking-wide">Tools Used</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-slate-800 text-fuchsia-500 rounded-full text-sm border border-slate-700 hover:border-fuchsia-500 transition-colors duration-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Result Badge */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-bold text-sm">✓ {project.result}</span>
                  </div>
                  <button className="text-slate-400 hover:text-fuchsia-500 transition-colors duration-300 flex items-center gap-1 text-sm">
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects