import { Star, Quote } from 'lucide-react'

function Testimonials() {
  const testimonials = [
    {
      text: "Peggy transformed our workflow completely. We're now saving 25+ hours every week on tasks that used to drain our energy. Her automation systems are reliable, well-documented, and exactly what we needed to scale our operations.",
      name: "Sarah Mitchell",
      title: "Founder, Growth Marketing Agency",
      company: "ScaleUp Marketing",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      text: "Working with Peggy was seamless from start to finish. She understood our needs immediately and delivered a CRM automation system that's been running flawlessly for months. The ROI was evident within the first two weeks. Highly recommend!",
      name: "James Chen",
      title: "CEO",
      company: "TechFlow SaaS",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      text: "The lead nurturing automation Peggy built increased our conversion rate by 2x. Her attention to detail and expertise in automation tools is impressive. She didn't just build a system, she taught us how to maintain and optimize it.",
      name: "Maria Rodriguez",
      title: "Business Coach & Consultant",
      company: "Elevate Coaching",
      rating: 5,
      avatar: "👩‍🏫"
    },
    
  ]

  return (
    <section 
      id="testimonials" 
      className="py-20 px-4 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            What Clients Say
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Real feedback from real clients who've transformed their businesses with automation
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/20 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-slate-950" />
              </div>

              {/* Star Rating */}
              <div className="flex mb-4 gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-yellow-400 text-yellow-400" 
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-300 mb-6 leading-relaxed italic relative">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-2xl flex-shrink-0">
                  {testimonial.avatar}
                </div>

                {/* Name and Title */}
                <div>
                  <p className="font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-400">
                    {testimonial.title}
                  </p>
                  <p className="text-xs text-slate-500">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges / Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-slate-900/30 rounded-xl border border-slate-800">
            <p className="text-4xl font-bold text-cyan-400 mb-2">50+</p>
            <p className="text-slate-400 text-sm">Happy Clients</p>
          </div>
          <div className="p-6 bg-slate-900/30 rounded-xl border border-slate-800">
            <p className="text-4xl font-bold text-cyan-400 mb-2">100%</p>
            <p className="text-slate-400 text-sm">Satisfaction Rate</p>
          </div>
          <div className="p-6 bg-slate-900/30 rounded-xl border border-slate-800">
            <p className="text-4xl font-bold text-cyan-400 mb-2">1000+</p>
            <p className="text-slate-400 text-sm">Hours Automated</p>
          </div>
          <div className="p-6 bg-slate-900/30 rounded-xl border border-slate-800">
            <p className="text-4xl font-bold text-cyan-400 mb-2">4.9/5</p>
            <p className="text-slate-400 text-sm">Average Rating</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-300 text-lg mb-6">
            Join our growing list of satisfied clients
          </p>
          <a 
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold rounded-lg hover:opacity-90 transition-opacity duration-300 hover:shadow-lg hover:shadow-cyan-400/50"
          >
            Start Your Success Story
          </a>
        </div>

      </div>
    </section>
  )
}

export default Testimonials