import { ArrowRight, Mail, Phone, MapPin, Youtube, Instagram, Facebook, Send, Menu, X, CheckCircle2, Star } from 'lucide-react';
import { siteConfig, placements, trainingPrograms, navLinks, stats, testimonials } from './data';

// ============================================
// NAVBAR COMPONENT
// ============================================
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center">
              <img src="/logo.png" alt="PS Consultancy" className="h-12 md:h-16 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#002147] hover:text-[#D4AF37] font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-[#D4AF37] hover:bg-[#B8941F] text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            <Menu className="w-6 h-6 text-[#002147]" />
          </button>
        </div>
      </div>
    </nav>
  );
}

// ============================================
// HERO SECTION
// ============================================
function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#002147] via-[#00152D] to-[#002147] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Gold Accent Lines */}
      <div className="absolute top-20 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
      <div className="absolute bottom-20 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Bridge the Gap to Your
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F4D47C]">
            BFSI Career
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Sales Training Institute for Banking, Financial Services, and Insurance sector.
          Get placed at top BFSI companies with <span className="text-[#D4AF37] font-semibold">100% placement assistance</span>.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-[#D4AF37]">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#placements"
            className="group bg-[#D4AF37] hover:bg-[#B8941F] text-[#002147] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/30 hover:scale-105 flex items-center space-x-2"
          >
            <span>View Placements</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#programs"
            className="border-2 border-white/30 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
          >
            Explore Programs
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-[#D4AF37] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// PLACEMENTS SECTION
// ============================================
function PlacementsSection() {
  return (
    <section id="placements" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#002147]/10 text-[#002147] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002147] mb-4">
            Placement Highlights
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Meet our successful alumni placed at India's leading BFSI companies
          </p>
        </div>

        {/* Placements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {placements.map((placement) => (
            <div
              key={placement.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#D4AF37]/50 hover:-translate-y-2"
            >
              {/* Card Header with Gradient */}
              <div className="bg-gradient-to-r from-[#002147] to-[#00152D] p-6 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-[#D4AF37] rounded-full"></div>
                </div>

                {/* Avatar */}
                <div className="relative z-10 flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    {placement.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-lg truncate">{placement.name}</h3>
                    <p className="text-[#D4AF37] text-sm">{placement.batch}</p>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                {/* Company Info */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center font-bold text-[#002147] text-xs p-1 text-center">
                    {placement.company.split(' ').slice(0, 2).map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#002147] font-semibold text-sm truncate">{placement.company}</p>
                    <p className="text-gray-500 text-xs">{placement.role}</p>
                  </div>
                </div>

                {/* Salary Badge */}
                <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-lg px-4 py-2">
                  <p className="text-[#002147] font-bold text-sm">
                    Package: <span className="text-[#D4AF37]">{placement.salary}</span>
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Placed in 2024</span>
                  <span className="flex items-center text-green-600 font-medium">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    Active
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">
            Showing <span className="font-semibold text-[#002147]">{placements.length}</span> of 2000+ placements
          </p>
          <button className="border-2 border-[#002147] hover:bg-[#002147] hover:text-white text-[#002147] px-8 py-3 rounded-xl font-semibold transition-all duration-300">
            View All Placements
          </button>
        </div>
      </div>
    </section>
  );
}

// ============================================
// TRAINING PROGRAMS SECTION
// ============================================
function ProgramsSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Building: <Building2 className="w-8 h-8" />,
    Shield: <Shield className="w-8 h-8" />,
    TrendingUp: <TrendingUp className="w-8 h-8" />,
    Zap: <Zap className="w-8 h-8" />
  };

  return (
    <section id="programs" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#D4AF37]/10 text-[#002147] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Courses
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002147] mb-4">
            Training Programs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Industry-aligned curriculum designed by BFSI experts with 100% placement assistance
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trainingPrograms.map((program) => (
            <div
              key={program.id}
              className={`group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${
                program.featured ? 'border-[#D4AF37] ring-4 ring-[#D4AF37]/10' : 'border-gray-100 hover:border-[#D4AF37]/50'
              } hover:-translate-y-2`}
            >
              {/* Featured Badge */}
              {program.featured && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl z-10">
                  MOST POPULAR
                </div>
              )}

              {/* Card Header */}
              <div className={`p-8 ${program.featured ? 'bg-gradient-to-br from-[#D4AF37]/10 to-transparent' : ''}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-[#002147] ${
                    program.featured ? 'bg-gradient-to-br from-[#D4AF37] to-[#B8941F]' : 'bg-[#002147]'
                  }`}>
                    {iconMap[program.icon]}
                  </div>
                  <span className="bg-[#002147]/10 text-[#002147] text-sm font-semibold px-3 py-1 rounded-full">
                    {program.duration}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#002147] mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {program.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {program.description}
                </p>
              </div>

              {/* Card Body - Highlights */}
              <div className="px-8 pb-6">
                <div className="space-y-3">
                  {program.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className={`px-8 py-4 border-t ${
                program.featured ? 'border-[#D4AF37]/20 bg-gradient-to-r from-[#D4AF37]/10 to-transparent' : 'border-gray-100 bg-gray-50'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#002147]">
                    {program.placement}
                  </span>
                  <button className="bg-[#002147] hover:bg-[#D4AF37] text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg flex items-center space-x-2">
                    <span>Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// TESTIMONIALS SECTION
// ============================================
function TestimonialsSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-br from-[#002147] via-[#00152D] to-[#002147]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#D4AF37]/20 text-[#D4AF37] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Student Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Students Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Real stories from real students who transformed their careers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center space-x-4 pt-6 border-t border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-xl flex items-center justify-center text-white font-bold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// CONTACT SECTION
// ============================================
function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Info */}
          <div>
            <span className="inline-block bg-[#002147]/10 text-[#002147] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002147] mb-6">
              Start Your BFSI Journey Today
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Have questions? Our career counselors are here to help you choose the right program and guide you through the admission process.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center space-x-4 bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#D4AF37]/50">
                <div className="w-12 h-12 bg-[#002147] rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Us</p>
                  <p className="text-[#002147] font-semibold">{siteConfig.contact.email}</p>
                </div>
              </a>

              <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center space-x-4 bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#D4AF37]/50">
                <div className="w-12 h-12 bg-[#002147] rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call Us</p>
                  <p className="text-[#002147] font-semibold">{siteConfig.contact.phone}</p>
                </div>
              </a>

              <div className="flex items-center space-x-4 bg-white p-5 rounded-xl shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-[#002147] rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Visit Us</p>
                  <p className="text-[#002147] font-semibold">{siteConfig.contact.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
            <h3 className="text-2xl font-bold text-[#002147] mb-6">Send Us a Message</h3>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-5"
            >
              <input
                type="hidden"
                name="access_key"
                value={siteConfig.contact.web3formsAccessKey}
              />
              <input
                type="hidden"
                name="subject"
                value="New Inquiry from PS Training Website"
              />
              <input
                type="hidden"
                name="from_name"
                value="PS Training Website"
              />

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#002147] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#002147] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all outline-none"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#002147] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all outline-none"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="program" className="block text-sm font-semibold text-[#002147] mb-2">
                  Interested Program
                </label>
                <select
                  id="program"
                  name="program"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all outline-none bg-white"
                >
                  <option value="">Select a program</option>
                  {trainingPrograms.map((program) => (
                    <option key={program.id} value={program.title}>
                      {program.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#002147] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all outline-none resize-none"
                  placeholder="Tell us about yourself..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-[#002147] font-bold py-4 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-xs text-gray-500 text-center">
                Powered by Web3Forms. Messages will be sent to your email.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// FOOTER COMPONENT
// ============================================
function Footer() {
  return (
    <footer className="bg-[#002147] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center">
                <span className="text-[#002147] font-bold text-xl">PS</span>
              </div>
              <span className="text-xl font-bold">Training</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              India's leading BFSI sales training institute. Building careers in banking, financial services, and insurance sector since 2015.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#D4AF37] rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#D4AF37] rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#D4AF37] rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#D4AF37] rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Home</a>
              </li>
              <li>
                <a href="#placements" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Placements</a>
              </li>
              <li>
                <a href="#programs" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Programs</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {trainingPrograms.map((program) => (
                <li key={program.id}>
                  <a href="#programs" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                    {program.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                <span className="text-gray-400">{siteConfig.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PlacementsSection />
      <ProgramsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

// Missing icon imports for page.tsx
function Building2({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
      <path d="M10 6h4"/>
      <path d="M10 10h4"/>
      <path d="M10 14h4"/>
      <path d="M10 18h4"/>
    </svg>
  );
}

function Shield({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
    </svg>
  );
}

function TrendingUp({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
      <polyline points="17 6 23 6 23 12"/>
    </svg>
  );
}

function Zap({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  );
}
