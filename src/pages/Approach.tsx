import { motion } from 'framer-motion';
import { Search, PenTool, Play, BarChart, RefreshCw } from 'lucide-react';

export function Approach() {
  const steps = [
    {
      title: "Discovery & Audit",
      icon: Search,
      desc: "We start with a deep dive into your existing systems, data, and pain points. No assumptions, just data-driven baselining.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Solution Engineering",
      icon: PenTool,
      desc: "We design robust, scalable solutions using proven technologies. We prioritize simplicity and maintainability over complexity.",
      image: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/8542f467-84eb-4f22-af50-ebc03d78f73e/1767920778914-9c75158c/image.png"
    },
    {
      title: "Execution & Integration",
      icon: Play,
      desc: "We manage the deployment with military precision. FAT, SAT, and seamless integration with minimal production disruption.",
      image: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/8542f467-84eb-4f22-af50-ebc03d78f73e/1767920938955-8d973460/image.png"
    },
    {
      title: "Stabilization",
      icon: BarChart,
      desc: "We don't leave when the machine turns on. We stay to tune, debug, and ensure the system hits target OEE.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Continuous Improvement",
      icon: RefreshCw,
      desc: "We empower your team with the training and tools needed to maintain and improve the system long-term.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-10 pb-20 px-6 max-w-7xl mx-auto">
       <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-20 text-center max-w-3xl mx-auto"
      >
        <div className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Methodology</div>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-primary">The Millennium Standard</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Our approach is grounded in systems engineering and disciplined project management.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-8 rounded-3xl border border-border/50 overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-500 h-[400px] justify-end"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 z-10 transition-opacity duration-500 group-hover:opacity-90" />
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full justify-end">
                <div className="w-12 h-12 rounded-2xl bg-secondary/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-primary mb-auto shadow-sm">
                  <step.icon size={24} />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base opacity-90 group-hover:opacity-100 transition-opacity">
                  {step.desc}
                </p>
              </div>
            </motion.div>
        ))}
      </div>
    </div>
  );
}