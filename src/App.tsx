import { motion } from "motion/react";
import { ArrowRight, Monitor, Share2, Target, Video } from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "Conversion-focused websites that don't just look pretty, but drive real results.",
    icon: Monitor,
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Social Strategy",
    desc: "Building social engines that turn attention into a community and leads.",
    icon: Share2,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Content Creation",
    desc: "Cinematic videography and storytelling that defines your brand's voice.",
    icon: Video,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Strategic Planning",
    desc: "Data-driven frameworks designed to scale your business sustainably.",
    icon: Target,
    color: "from-green-500 to-emerald-400"
  }
];

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center glass">
        <div className="text-xl font-display font-bold tracking-tighter">
          TAIWOZEAL<span className="text-brand">.</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium opacity-80">
          <a href="#work" className="hover:text-brand transition-colors">Work</a>
          <a href="#services" className="hover:text-brand transition-colors">Services</a>
          <a href="#about" className="hover:text-brand transition-colors">About</a>
          <a href="#contact" className="hover:text-brand transition-colors">Contact</a>
        </div>
        <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform">
          Get in touch
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center px-6 overflow-hidden">
        {/* Abstract Background Gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/20 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="text-brand font-display font-semibold tracking-widest text-xs uppercase">
              Digital Excellence
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter text-balance">
              Building Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-400">
                Digital Appearance.
              </span>
            </h1>
            <p className="max-w-xl text-lg md:text-xl text-white/60 font-light leading-relaxed">
              We create content systems and websites that transform visitors into 
              paying clients using strategic design and cinematic storytelling.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-brand text-white px-8 py-4 rounded-full font-semibold flex items-center group">
                View our work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-white/20 hover:bg-white/5 px-8 py-4 rounded-full font-semibold transition-colors">
                Our services
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <div className="w-px h-12 bg-white" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Projects Completed", val: "150+" },
            { label: "Happy Clients", val: "85+" },
            { label: "Team Members", val: "12" },
            { label: "Years Experience", val: "06" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="text-4xl font-display font-bold">{stat.val}</div>
              <div className="text-xs text-white/40 uppercase tracking-widest mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
                Services designed for growth.
              </h2>
              <p className="text-white/60">
                A holistic approach to digital presence. From code to content, 
                we handle every touchpoint of your brand's online journey.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl glass card-hover flex flex-col justify-between h-[320px]"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <button className="text-xs font-bold uppercase tracking-wider flex items-center text-brand mt-4 group">
                  Learn more
                  <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="py-32 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold">Latest Work</h2>
            <button className="text-sm font-semibold opacity-60 hover:opacity-100 transition-opacity underline underline-offset-8">
              View All Projects
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Lumina Brand Identity",
                tag: "Design / Motion",
                img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Vortex SaaS Platform",
                tag: "Web App / UI/UX",
                img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
              }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-3xl mb-6 relative">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm">View Case Study</span>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-display font-bold group-hover:text-brand transition-colors">{project.title}</h3>
                    <p className="text-white/40 text-sm mt-1">{project.tag}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto glass rounded-[40px] p-12 md:p-24 text-center space-y-8 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 rounded-full blur-[100px]" />
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-[100px]" />
           
           <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight relative z-10">
             Ready to elevate your digital presence?
           </h2>
           <p className="text-lg text-white/60 relative z-10 max-w-lg mx-auto">
             Let's discuss how we can help your brand stand out in the noisy digital landscape.
           </p>
           <button className="bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform relative z-10">
             Start a Project
           </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div className="space-y-6">
            <div className="text-2xl font-display font-bold tracking-tighter">
              TAIWOZEAL<span className="text-brand">.</span>
            </div>
            <p className="text-white/40 text-sm max-w-xs">
              Based in Nigeria, working globally. We build the future of digital appearances.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'Instagram', 'LinkedIn', 'Behance'].map(s => (
                <a key={s} href="#" className="text-white/40 hover:text-white transition-colors text-xs font-semibold uppercase tracking-widest">{s}</a>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest opacity-40">Company</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Our Team</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest opacity-40">Resources</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Case Studies</a></li>
                <li><a href="#" className="hover:text-white">Brand Assets</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-20 pt-10 border-t border-white/5 flex justify-between items-center text-[10px] uppercase tracking-widest text-white/20">
          <span>© 2026 TAIWOZEAL CREATIVE AGENCY. ALL RIGHTS RESERVED.</span>
          <span>MADE BY TAIWOZEAL</span>
        </div>
      </footer>
    </div>
  );
}
