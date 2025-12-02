import React from 'react';
import { 
  SiZapier, 
  SiNotion, 
  SiAirtable, 
  SiClickup, 
  SiSalesforce,
  SiSlack,
  SiMake,
  SiHubspot
} from 'react-icons/si';
import { CgMonday } from 'react-icons/cg';

import { 
  Workflow, 
  Zap, 
  Heart, 
  Rocket, 
  Calendar 
} from 'lucide-react';

function Tools() {
  const tools = [
    { 
      name: 'n8n', 
      logo: <Workflow className="w-12 h-12" />, 
      description: 'Workflow Automation',
      color: 'text-red-400'
    },
    { 
      name: 'Make', 
      logo: <SiMake className="w-12 h-12" />, 
      description: 'Integration Platform',
      color: 'text-purple-400'
    },
    { 
      name: 'Zapier', 
      logo: <SiZapier className="w-12 h-12" />, 
      description: 'App Connector',
      color: 'text-orange-400'
    },
    { 
      name: 'Loveable', 
      logo: <Heart className="w-12 h-12" />, 
      description: 'AI Development',
      color: 'text-pink-400'
    },
    { 
      name: 'Airtable', 
      logo: <SiAirtable className="w-12 h-12" />, 
      description: 'Database Platform',
      color: 'text-yellow-400'
    },
    { 
      name: 'Notion', 
      logo: <SiNotion className="w-12 h-12" />, 
      description: 'Workspace Tool',
      color: 'text-slate-300'
    },
    { 
      name: 'Monday', 
      logo: <CgMonday className="w-12 h-12" />, 
      description: 'Work OS',
      color: 'text-red-500'
    },
    { 
      name: 'ClickUp', 
      logo: <SiClickup className="w-12 h-12" />, 
      description: 'Project Management',
      color: 'text-pink-500'
    },
    
    { 
      name: 'HubSpot', 
      logo: <SiHubspot className="w-12 h-12" />, 
      description: 'CRM Platform',
      color: 'text-orange-500'
    },
    { 
      name: 'GoHighLevel', 
      logo: <Rocket className="w-12 h-12" />, 
      description: 'Marketing Suite',
      color: 'text-green-400'
    },
    { 
      name: 'Salesforce', 
      logo: <SiSalesforce className="w-12 h-12" />, 
      description: 'Sales CRM',
      color: 'text-blue-400'
    },
    { 
      name: 'Slack', 
      logo: <SiSlack className="w-12 h-12" />, 
      description: 'Team Communication',
      color: 'text-purple-500'
    }
  ];

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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="group bg-slate-900 p-4 rounded-lg border border-slate-800 hover:border-cyan-400 transition-all duration-300 flex flex-col items-center justify-center text-center hover:transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/20 cursor-pointer"
            >
              {/* Logo/Icon */}
              <div className={`${tool.color} mb-2 group-hover:scale-110 transition-transform duration-300 group-hover:text-cyan-400`}>
                {tool.logo}
              </div>
              
              {/* Tool Name */}
              <h3 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
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
  );
}

export default Tools;