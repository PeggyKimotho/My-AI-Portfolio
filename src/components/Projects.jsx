import { ExternalLink, ArrowRight } from 'lucide-react'

function Projects() {
  const projects = [

    {
      title: 'Lead Capture & Nurture Automation',
      description: 'Built an automated Reddit lead engine that finds high-intent coaching prospects, scores urgency and sends personalized outreach without manual searching or cold DMs.',
      videoId: '8kInC0UjDqQ',
      tools: ['n8n', 'Gemini', 'Lead Generation', 'API Integration'],
      before: [
        'Manual search',
        'Delayed replies',
        'Cold outreach'
      ],
      after: [
        'Automated discovery ',
        'Prioritized leads',
        'Personalized message',
      ],
      image: '📈',
      category: 'Marketing'
    },
    {
      title: 'Content Generation System',
      description: 'Created an AI-driven content system that turns long-form articles into platform-specific social posts, automatically formats them and updates a central content hub for review and publishing.',
      videoId: 'SGlEKYUMHWo',
      tools: ['Digital Marketing', 'Notion', 'n8n', 'Content Creation'],
      before: [
        'Manual writing',
        'Inconsistent brand voice',
        'Scattered drafts'
      ],
      after: [
        'Automated content',
        'Consistent brand voice',
        'One content hub'
      ],
      image: '📱',
      category: 'Content'
    },
    {
      title: 'Client Onboarding Workflow',
      description: 'Designed an end-to-end client onboarding system that automatically collects information, manages documents, schedules next steps, and guides clients through a smooth, professional onboarding experience.',
      videoId: 'CYvt38WdaB0',
      tools: ['ClickUp', 'Slack', 'Airtable', 'n8n'],
      before: [
        'Email chaos',
        'Manual follow-ups',
        'Delays'
      ],
      after: [
        'Automated intake',
        'Centralized data',
        'Guided onboarding flow'
      ],
      image: '🤝',
      category: 'Operations'
    },
    {
      title: 'AI Customer Support Bot',
      description: "Deployed an AI-powered support assistant that answers common customer inquiries using the business's internal knowledge base and routes complex issues to a human when needed.",
      videoId: '28ejN5CU47Y',
      tools: ['n8n', 'Google Workspace', 'Supabase', 'RAG'],
      before: [
        'Repetition',
        'Manual lookup',
        'Slow response'
      ],
      after: [
        'Instant answers',
        'Knowledge-based responses',
        'Escalation logic'
      ],
      image: '🤖',
      category: 'AI / Support'
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
              {/* Project Header */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 border-b border-slate-800">
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

              {/* Project Content */}
              <div className="p-6">

                {/* Description */}
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* YouTube Video */}
                <div className="mb-6 rounded-lg overflow-hidden border border-slate-800">
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${project.videoId}`}
                      title={project.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                {/* Workflow Snapshot */}
                <div className="mb-6 space-y-3">
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                    <span className="text-xs font-semibold text-red-400 uppercase tracking-wide mr-2">
                      Before:
                    </span>
                    <span className="text-sm text-slate-400">
                      {project.before.join(' → ')}
                    </span>
                  </div>

                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                    <span className="text-xs font-semibold text-green-400 uppercase tracking-wide mr-2">
                      After:
                    </span>
                    <span className="text-sm text-slate-300">
                      {project.after.join(' → ')}
                    </span>
                  </div>
                </div>

                {/* Tools */}
                <div>
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

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects
