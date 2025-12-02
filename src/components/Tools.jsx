function Tools() {
  const tools = [
    { name: 'n8n', logo: '🔄', description: 'Workflow Automation' },
    { name: 'Make', logo: '⚡', description: 'Integration Platform' },
    { name: 'Zapier', logo: '⚙️', description: 'App Connector' },
    { name: 'Loveable', logo: '💜', description: 'AI Development' },
    { name: 'Airtable', logo: '📊', description: 'Database Platform' },
    { name: 'Notion', logo: '📝', description: 'Workspace Tool' },
    { name: 'ClickUp', logo: '✅', description: 'Project Management' },
    { name: 'Monday', logo: '📅', description: 'Work OS' },
    { name: 'HubSpot', logo: '🎯', description: 'CRM Platform' },
    { name: 'GoHighLevel', logo: '🚀', description: 'Marketing Suite' },
    { name: 'Salesforce', logo: '☁️', description: 'Sales CRM' },
    { name: 'Slack', logo: '💬', description: 'Team Communication' }
  ]

  return (
    <section 
      id="tools" 
      className="py-20 px-4 bg-slate-900/50"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Tools & Technologies
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Leveraging the best automation platforms and tools to build your custom solutions
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="group bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-cyan-400 transition-all duration-300 flex flex-col items-center justify-center text-center hover:transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              {/* Logo/Icon */}
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {tool.logo}
              </div>
              
              {/* Tool Name */}
              <h3 className="text-base font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                {tool.name}
              </h3>
              
              {/* Description */}
              <p className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors duration-300">
                {tool.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-lg">
            ...and 100+ more tools and integrations
          </p>
        </div>

      </div>
    </section>
  )
}

export default Tools