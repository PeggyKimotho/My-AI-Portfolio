import { Zap, Users, Target, CheckCircle, Rocket, MessageCircle, BarChart, Calendar, Briefcase } from 'lucide-react'

function Services() {
  const services = [
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Lead Capture & Nurturing",
      description: "Automate your lead generation, follow-ups, and nurturing sequences to convert more prospects into clients effortlessly."
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Client Onboarding & CRM",
      description: "Streamline client onboarding with automated workflows and keep your CRM pipeline organized without manual data entry."
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Content Workflows",
      description: "Automate content publishing, scheduling, and analytics tracking across all your platforms to maintain consistent presence."
    },
    {
      icon: <Calendar className="w-10 h-10" />,
      title: "Calendar & Scheduling",
      description: "Eliminate scheduling back-and-forth with automated calendar management, meeting coordination, and reminder systems."
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      title: "Course Management",
      description: "Automate course delivery, student management, and community engagement for seamless learning experiences."
    },
    {
      icon: <MessageCircle className="w-10 h-10" />,
      title: "AI Assistants & Chatbots",
      description: "Deploy intelligent chatbots that handle customer queries, support, and engagement 24/7 without human intervention."
    },
    {
      icon: <BarChart className="w-10 h-10" />,
      title: "Financial Automation",
      description: "Automate invoicing, expense tracking, financial reporting, and payment reminders to keep your finances organized."
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: "Team Workflow Management",
      description: "Create automated project management workflows that keep your team coordinated and productive across all tasks."
    },
    {
      icon: <CheckCircle className="w-10 h-10" />,
      title: "Custom Integrations",
      description: "Connect your existing tools and build custom automation workflows tailored to your unique business needs."
    }
  ]

  return (
    <section 
      id="services" 
      className="py-20 px-4 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            What I Do
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I design and build reliable automation systems that save you time and streamline your operations
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/10"
            >
              {/* Icon */}
              <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a 
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold rounded-lg hover:opacity-90 transition-opacity duration-300 hover:shadow-lg hover:shadow-cyan-400/50"
          >
            Let's Automate Your Business
          </a>
        </div>

      </div>
    </section>
  )
}

export default Services