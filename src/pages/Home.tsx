import { ArrowRight, Play, X, Bot, Zap, Settings, Activity, Cpu, Minimize2, LineChart, ChevronRight, Factory, Plane, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function PartnerLogo({ partner }: { partner: { name: string, logo: string } }) {
  const [hasError, setHasError] = useState(false);
  
  // Gold color filter for images (approximate match for #c09a6f)
  // Generated to turn black/colored logos into the gold theme color
  const goldFilter = "brightness(0) saturate(100%) invert(64%) sepia(32%) saturate(674%) hue-rotate(349deg) brightness(92%) contrast(89%)";

  if (hasError) {
    return (
      <div className="flex items-center justify-center h-16 w-40 mx-8">
        <span className="text-[#c09a6f] font-serif text-xl font-bold whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity cursor-default text-center">
          {partner.name}
        </span>
      </div>
    );
  }

  // Special case for partners where we want to render stylized text instead of an image
  if (partner.name === "Monin") {
    return (
      <div className="flex items-center justify-center h-16 w-40 mx-8 group">
        <span className="font-serif text-3xl tracking-wide font-bold transition-colors duration-300 text-[#c09a6f] group-hover:text-[#3E2723]" style={{ fontFamily: 'Times New Roman, serif' }}>
          MONIN<sup className="text-xs align-top ml-0.5">®</sup>
        </span>
      </div>
    );
  }

  if (partner.name === "Cirkul") {
    return (
      <div className="flex items-center justify-center h-16 w-40 mx-8 group">
        <span className="font-sans text-4xl font-semibold tracking-tight transition-colors duration-300 text-[#c09a6f] group-hover:text-[#00AEEF]" style={{ letterSpacing: '-0.02em' }}>
          Cirkul
        </span>
      </div>
    );
  }

  if (partner.name === "Bausch Health") {
    return (
      <div className="flex items-center justify-center h-16 w-40 mx-8 group">
        <div className="flex flex-col items-center leading-tight transition-all duration-300">
          <span className="font-sans text-xl font-bold tracking-wide uppercase text-[#c09a6f] group-hover:text-[#00539B] transition-colors duration-300">
            BAUSCH
          </span>
          <span className="font-sans text-lg font-medium tracking-widest uppercase text-[#c09a6f] group-hover:text-[#6CACE4] transition-colors duration-300">
            Health
          </span>
        </div>
      </div>
    );
  }

  if (partner.name === "Bausch + Lomb") {
    return (
      <div className="flex items-center justify-center h-16 w-40 mx-8 group">
        <span className="font-sans text-xl font-bold tracking-wider uppercase whitespace-nowrap text-[#c09a6f] group-hover:text-[#0077C8] transition-colors duration-300">
          BAUSCH + LOMB
        </span>
      </div>
    );
  }

  if (partner.name === "Unilever") {
    return (
      <div className="flex items-center justify-center h-16 w-40 mx-8 group">
        <span className="font-sans text-3xl font-medium tracking-tight text-[#c09a6f] group-hover:text-[#1F36C7] transition-colors duration-300" style={{ fontFamily: 'Times New Roman, serif' }}>
          Unilever
        </span>
      </div>
    );
  }

  return (
    <div className="relative group flex items-center justify-center h-16 w-40 mx-8">
      <img 
        src={partner.logo} 
        alt={partner.name}
        className="max-h-12 max-w-full w-auto object-contain transition-all duration-300 group-hover:filter-none"
        style={{ filter: goldFilter }}
        onError={() => setHasError(true)}
      />
      {/* Overwrite inline style on hover using a hack or just simple conditional rendering if we could, 
          but with CSS hover we need !important or a better way. 
          The inline style will override the class 'group-hover:filter-none' unless we use a wrapper or !important.
          Let's use a style tag for this specific element id or just use the style prop with a variable.
      */}
      <style>{`
        .group:hover img[alt="${partner.name}"] {
          filter: none !important;
        }
      `}</style>
    </div>
  );
}

export function Home() {
  const industryImages = {
    Automotive: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/8542f467-84eb-4f22-af50-ebc03d78f73e/1767828254322-4c48eb51/image.png",
    Aerospace: "https://images.unsplash.com/photo-1457364559154-aa2644600ebb?q=80&w=2070&auto=format&fit=crop",
    "Consumer Electronics": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    "Medical Devices": "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/8542f467-84eb-4f22-af50-ebc03d78f73e/1767828369442-28bdbe49/image.png"
  };

  const partners = [
    { name: "Coca-Cola", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg" },
    { name: "PepsiCo", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/PepsiCo_logo.svg" },
    { name: "Monin", logo: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/8542f467-84eb-4f22-af50-ebc03d78f73e/1767918536125-f6eaea04/image.png" },
    { name: "Nestle", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Nestl%C3%A9_textlogo.svg" },
    { name: "Bausch Health", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Bausch_Health_logo.svg" },
    { name: "Bausch + Lomb", logo: "https://upload.wikimedia.org/wikipedia/commons/0/07/Bausch_%2B_Lomb_logo.svg" },
    { name: "Unilever", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Unilever.svg/1024px-Unilever.svg.png" },
    { name: "Cirkul", logo: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/8542f467-84eb-4f22-af50-ebc03d78f73e/1767918497872-e07ddea3/image.png" },
    { name: "Procter & Gamble", logo: "https://upload.wikimedia.org/wikipedia/commons/8/85/Procter_%26_Gamble_logo.svg" },
  ];

  return (
    <div className="flex flex-col gap-20 bg-black min-h-screen">
      {/* Interactive Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Image with Parallax-like Effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" /> 
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/8542f467-84eb-4f22-af50-ebc03d78f73e/1767824453679-d878b128/img_large_Trends-blog_-Industrial-automation-engineering.jpg"
            alt="Automation Engineering"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        {/* Content Container */}
        <div className="container relative z-20 px-6">
          
          {/* Centered Text Content */}
          <div className="space-y-8 text-center max-w-5xl mx-auto flex flex-col items-center">

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-serif font-bold tracking-tight leading-tight text-white"
            >
              Engineering <br/>
              <span className="italic text-[#c09a6f]">
                The Future.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light"
            >
              High-impact consulting and technical leadership to stabilize, scale, and future-proof complex production environments.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-6 justify-center pt-8"
            >
              <Link 
                to="/contact" 
                className="px-10 py-4 bg-white text-black font-medium tracking-wide rounded-sm hover:bg-[#c09a6f] hover:text-white transition-colors duration-300"
              >
                Initialize Project
              </Link>
              <Link 
                to="/services" 
                className="px-10 py-4 border border-[#c09a6f] text-[#c09a6f] font-medium tracking-wide rounded-sm hover:bg-[#c09a6f] hover:text-black transition-colors duration-300 backdrop-blur-sm"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
        

      </section>

      {/* Trusted Partners Section - Meter.com Style */}
      <section className="py-24 border-y border-white/5 bg-black relative overflow-hidden">


        {/* Gradient Masks for Fade Effect */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
        
        <div className="flex overflow-hidden relative z-0">
          <motion.div 
            className="flex items-center whitespace-nowrap"
            animate={{ x: "-50%" }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 30 
            }}
          >
            {/* Triple duplication for seamless infinite scroll */}
            {[...partners, ...partners, ...partners].map((partner, i) => (
              <PartnerLogo key={`${partner.name}-${i}`} partner={partner} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="px-6 max-w-7xl mx-auto w-full py-20">
         <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b border-white/10 pb-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4 tracking-tight text-white">System-Level Thinking</h2>
              <p className="text-lg text-gray-400 font-light">
                We don't just patch problems. We engineer holistic solutions.
              </p>
            </div>
            <Link to="/services" className="text-[#c09a6f] hover:text-white transition-colors flex items-center gap-2 group">
              View All Services <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Featured Service - Large Card */}
            <div className="md:col-span-2 p-10 rounded-xl border border-white/10 relative overflow-hidden group hover:border-[#c09a6f]/50 transition-all duration-500 min-h-[400px] flex flex-col justify-end bg-white/[0.02]">
               {/* Background Image */}
               <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                    alt="Manufacturing Automation"
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
               </div>

               <div className="relative z-10">
                 <div className="w-12 h-12 rounded-lg bg-[#c09a6f]/20 backdrop-blur-md flex items-center justify-center text-[#c09a6f] mb-6 border border-[#c09a6f]/20">
                    <Zap size={24} />
                 </div>
                 <h3 className="text-3xl font-serif font-medium mb-4 text-white">Manufacturing Automation</h3>
                 <p className="text-gray-300 text-lg mb-8 max-w-md font-light">End-to-end automation solutions that increase throughput and reduce variance. From AI implementation to full robotic integration.</p>
                 <ul className="flex gap-3 flex-wrap">
                   {['Robotics', 'HMI/SCADA'].map((f, i) => (
                     <li key={i} className="px-3 py-1 bg-white/5 backdrop-blur-md rounded-full text-xs font-medium text-white/80 border border-white/10">{f}</li>
                   ))}
                 </ul>
               </div>
            </div>

            {/* Other Services - Vertical Stack */}
            <div className="space-y-6">
               {/* Production Engineering */}
               <div className="p-8 rounded-xl border border-white/10 relative overflow-hidden group hover:border-[#c09a6f]/50 transition-all duration-500 h-[calc(50%-0.75rem)] flex flex-col justify-end bg-white/[0.02]">
                  <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                    <img src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2070&auto=format&fit=crop" alt="Production Engineering" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 rounded-lg bg-[#c09a6f]/20 backdrop-blur-md text-[#c09a6f] border border-[#c09a6f]/20"><Settings size={20} /></div>
                      <h3 className="text-xl font-medium text-white">Production System Engineering</h3>
                    </div>
                    <p className="text-sm text-gray-300 font-light">Optimization of existing lines for maximum reliability.</p>
                  </div>
               </div>
               
               {/* Reliability */}
               <div className="p-8 rounded-xl border border-white/10 relative overflow-hidden group hover:border-[#c09a6f]/50 transition-all duration-500 h-[calc(50%-0.75rem)] flex flex-col justify-end bg-white/[0.02]">
                  <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                    <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" alt="Reliability" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 rounded-lg bg-[#c09a6f]/20 backdrop-blur-md text-[#c09a6f] border border-[#c09a6f]/20"><Activity size={20} /></div>
                      <h3 className="text-xl font-medium text-white">Reliability & Performance</h3>
                    </div>
                    <p className="text-sm text-gray-300 font-light">Root cause analysis and systemic fixes.</p>
                  </div>
               </div>
            </div>

            {/* Bottom Row */}
            {[
              { 
                icon: Factory, 
                title: 'Equipment Procurement', 
                desc: 'Strategic sourcing and vendor management for specialized machinery.',
                features: ['Vendor Management', 'Technical Specs'],
                image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop"
              },
              { 
                icon: Bot, 
                title: 'AI Integration', 
                desc: 'Deploying intelligent agents for predictive maintenance and process optimization.',
                features: ['Predictive Maintenance', 'Process Optimization'],
                image: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/8542f467-84eb-4f22-af50-ebc03d78f73e/1767915800406-0e7e5c1f/image.png"
              },
              { 
                icon: LineChart, 
                title: 'Data & Analytics', 
                desc: 'Turning raw data into actionable insights.',
                features: ['OEE Tracking', 'Yield Optimization'],
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
              }
            ].map((service, i) => (
              <div key={i} className="p-8 rounded-xl border border-white/10 relative overflow-hidden group hover:border-[#c09a6f]/50 transition-all duration-500 min-h-[320px] flex flex-col justify-end bg-white/[0.02]">
                <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                   <img src={service.image} alt={service.title} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-[#c09a6f]/20 backdrop-blur-md flex items-center justify-center mb-6 text-[#c09a6f] border border-[#c09a6f]/20">
                    <service.icon size={20} />
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-white">{service.title}</h3>
                  <p className="text-sm text-gray-300 mb-6 font-light">
                    {service.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, j) => (
                      <span key={j} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-white/5 backdrop-blur-md rounded border border-white/10 text-white/70">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
      </section>

      {/* Industries Section - Cards */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6 text-white">Built for Complexity</h2>
            <p className="text-gray-400 text-lg font-light">
              Our engineering principles apply across high-stakes industries where precision is non-negotiable.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Automotive', icon: Factory },
              { name: 'Aerospace', icon: Plane },
              { name: 'Consumer Electronics', icon: Cpu },
              { name: 'Medical Devices', icon: Stethoscope }
            ].map((industry, i) => (
              <div key={i} className="aspect-[4/5] p-8 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#c09a6f]/50 transition-all duration-500 group flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-[0_0_30px_rgba(192,154,111,0.1)]">
                 {/* Background Image */}
                 <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                    <img 
                      src={industryImages[industry.name as keyof typeof industryImages]} 
                      alt={industry.name}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                 </div>
                 
                 <div className="relative z-10 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:bg-[#c09a6f] group-hover:text-black transition-all duration-300">
                    <industry.icon size={20} />
                 </div>
                 
                 <div className="relative z-10">
                    <h3 className="text-xl font-medium text-white mb-2">{industry.name}</h3>
                    <div className="w-8 h-px bg-white/50 group-hover:w-full group-hover:bg-[#c09a6f] transition-all duration-500" />
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#c09a6f]/5" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#c09a6f]/10 blur-[100px] rounded-full" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-serif font-medium mb-8 tracking-tight text-white">Ready to Stabilize?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
            Partner with Millennium Automation for engineering leadership that delivers measurable results.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-12 py-5 bg-[#c09a6f] text-black font-medium text-lg tracking-wide rounded-sm hover:scale-105 transition-transform shadow-[0_0_40px_rgba(192,154,111,0.3)] hover:shadow-[0_0_60px_rgba(192,154,111,0.5)]"
          >
            Start A Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}