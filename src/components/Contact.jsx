import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, MessageCircle, CheckCircle } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const subject = `Portfolio Contact from ${formData.name}`
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    window.location.href = `mailto:peggyautomates@gmail.com?subject=${subject}&body=${body}`
    
    // Show success message
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <section 
      id="contact" 
      className="py-8 px-4 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Main CTA Box */}
        <div className="bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-purple-500/10 border border-cyan-400/30 rounded-3xl p-8 md:p-12 mb-8">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Ready to Automate?
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 mb-2">
              Let's save you 20+ hours per week.
            </p>
            <p className="text-slate-400">
              Get in touch today and transform your business operations.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Left Column - Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              {isSubmitted ? (
                // Success Message
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-green-400 mb-2">Message Sent!</h4>
                  <p className="text-slate-300">Thanks for reaching out. I'll get back to you soon!</p>
                </div>
              ) : (
                // Contact Form
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                      placeholder="Tell me about your automation needs..."
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold rounded-lg hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50 flex items-center justify-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              )}
            </div>

            {/* Right Column - Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                {/* Email */}
                <a 
                  href="mailto:peggyautomates@gmail.com"
                  className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-lg border border-slate-800 hover:border-cyan-400 transition-all duration-300 group"
                >
                  <div className="p-3 bg-cyan-400/10 rounded-lg group-hover:bg-cyan-400/20 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      Email
                    </p>
                    <p className="text-slate-400">peggyautomates@gmail.com</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a 
                  href="https://wa.me/+254741031210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-lg border border-slate-800 hover:border-cyan-400 transition-all duration-300 group"
                >
                  <div className="p-3 bg-cyan-400/10 rounded-lg group-hover:bg-cyan-400/20 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      WhatsApp
                    </p>
                    <p className="text-slate-400">+254 741031210</p>
                  </div>
                </a>

                {/* Social Media */}
                <div className="mt-8">
                  <p className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wide">
                    Connect on Social Media
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.linkedin.com/in/peggykimotho/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-900/50 rounded-lg border border-slate-800 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 group"
                    >
                      <Linkedin className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
                    </a>

                    <a
                      href="https://www.instagram.com/peggyautomates/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-900/50 rounded-lg border border-slate-800 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 group"
                    >
                      <Instagram className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
                    </a>

                    <a
                      href="https://www.tiktok.com/@she.automates"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-900/50 rounded-lg border border-slate-800 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 group"
                    >
                      <MessageCircle className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
                    </a>
                  </div>
                </div>

                {/* Availability Badge */}
                <div className="mt-8 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <p className="text-green-400 font-semibold">Available for New Projects</p>
                  </div>
                  <p className="text-slate-400 text-sm mt-2">
                    Typically responds within 24 hours
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>


      </div>
    </section>
  )
}

export default Contact