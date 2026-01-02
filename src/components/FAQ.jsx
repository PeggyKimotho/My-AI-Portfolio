import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      question: "How long does it take to implement an automation system?",
      answer: "Most automation projects take 1-3 weeks depending on complexity. Simple workflows like email automation can be set up in a few days, while comprehensive systems with multiple integrations may take 2-3 weeks. I'll provide a clear timeline during our discovery call based on your specific needs."
    },
    {
      question: "What if I don't know what to automate?",
      answer: "That's completely normal and actually very common! During our discovery phase, I'll audit your current workflows and identify the best automation opportunities. I'll help you prioritize based on time savings, business impact, and ROI. Many clients are surprised at how many tasks can be automated that they didn't even consider."
    },
    {
      question: "Do I need technical skills to use the automations?",
      answer: "Not at all. I build user-friendly systems and provide complete documentation and training. You'll be able to manage and adjust your automations without any technical background. I also offer ongoing support if you ever need help or want to make changes."
    },
    {
      question: "What happens if something breaks?",
      answer: "I provide ongoing support and monitoring options. If any automation encounters an issue, I'll troubleshoot and fix it quickly. Most systems I build include error notifications so problems are caught early. I also provide documentation so you understand how everything works."
    },
    {
      question: "Can you integrate with my existing tools?",
      answer: "Most likely, yes! I work with 100+ popular business tools including CRMs, email platforms, project management software, and more. If you have a specific tool, I'll research the integration possibilities during our discovery call. In rare cases where direct integration isn't available, I can often build custom solutions using APIs or webhooks."
    },
    {
      question: "How much can I really save with automation?",
      answer: "My clients typically save 20-30 hours per week. The exact savings depend on your current processes, team size, and which workflows we automate. Even conservative estimates show significant time and cost reductions within the first month. I'll provide a detailed ROI analysis during our strategy phase."
    },
    {
      question: "What's the cost of automation services?",
      answer: "Project costs vary based on complexity, number of integrations, and scope. Simple automations start around $500-$1,000, while comprehensive systems range from $2,000-$5,000+. I offer both project-based pricing and monthly retainer options. The ROI typically pays for itself within 2-3 months through time savings alone."
    },
    {
      question: "Do you offer ongoing support after implementation?",
      answer: "Yes! I offer several support options including monthly retainers for ongoing optimization, pay-as-you-go support, and self-service documentation. Most clients start with a retainer for the first few months, then transition to occasional support as they become comfortable with their systems."
    },
    {
      question: "What industries do you work with?",
      answer: "I work with coaches, consultants, solopreneurs, agencies, e-commerce businesses, SaaS companies, and service providers. The beauty of automation is that it applies across industries—any business with repetitive tasks can benefit. I've successfully implemented systems in marketing, sales, operations, customer service, and finance."
    },
    {
      question: "Can I start with a small project first?",
      answer: "Absolutely! Many clients start with a single workflow automation to test the process and see results. This allows you to experience the value before committing to larger projects. Once you see the impact, we can expand to other areas of your business."
    }
  ]

  return (
    <section 
      id="faq" 
      className="py-20 px-4 bg-slate-900/50"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-fuchsia-500/10 rounded-full mb-4">
            <HelpCircle className="w-12 h-12 text-fuchsia-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about working together
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden hover:border-fuchsia-500 transition-colors duration-300"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-slate-800/50 transition-colors duration-300 group"
              >
                <span className="font-bold text-lg text-white group-hover:text-fuchsia-500 transition-colors duration-300">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-6 h-6 text-fuchsia-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer (Collapsible) */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-slate-800/50">
                  <div className="pt-4">
                    {faq.answer}
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

export default FAQ