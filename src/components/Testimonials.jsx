import { Star, Quote } from 'lucide-react'

function Testimonials() {
  const testimonials = [
    {
      name: "Susan Wanjiku",
      title: "The Legacy Hub",
      company: "Finance Coach",
      videoId: "6etX3az9e00",
      rating: 5,
      photo: "/images/AI Automation Specialist in Kenya & Virtual Assistant in Kenya.png" // add your image path
    },
    {
      name: "Shaquana Harkness",
      title: "Dollars Makes Cents",
      company: "Finance Coach",
      videoId: "1fCE2TFmYDA",
      rating: 5,
      photo: "/images/AI Automation Specialist in Kenya n Virtual Assistant in Kenya.png"
    },
    {
      name: "Esther Wanjiku",
      title: "Wanjiku Socials",
      company: "Content Marketing Coach",
      videoId: "SV-LpKLSIZg",
      rating: 5,
      photo: "/images/AI Automation Specialist in Kenya and Virtual Assistant in Kenya.png"
    },
  ]

  return (
    <section 
      id="testimonials" 
      className="py-20 px-4 bg-slate-900/50"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
            Client Reviews
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            What Founders Say About Working With Me
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-fuchsia-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-fuchsia-500/20"
            >
              {/* YouTube Video Embed */}
              <div className="mb-4 rounded-lg overflow-hidden border border-slate-800">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                    title={`${testimonial.name} testimonial`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex mb-4 gap-1 justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-yellow-400 text-yellow-400" 
                  />
                ))}
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                
                {/* Photo */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-500 to-blue-500 p-[2px] flex-shrink-0">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-full h-full rounded-full object-cover bg-slate-900"
                  />
                </div>

                {/* Name and Title */}
                <div>
                  <p className="font-bold text-white group-hover:text-fuchsia-500 transition-colors duration-300">
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

      </div>
    </section>
  )
}

export default Testimonials
