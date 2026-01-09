import { motion } from 'framer-motion';
import { Factory, Plane, Cpu, Stethoscope, Pill, Utensils } from 'lucide-react';

export function Industries() {
  const industries = [
    {
      name: "Automotive",
      icon: Factory,
      desc: "High-volume assembly, powertrain manufacturing, and EV battery production systems.",
      challenges: ["Cycle Time Optimization", "Quality Control", "Traceability"],
      image: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/8542f467-84eb-4f22-af50-ebc03d78f73e/1767828254322-4c48eb51/image.png"
    },
    {
      name: "Aerospace",
      icon: Plane,
      desc: "Precision manufacturing, composite layup automation, and assembly tooling.",
      challenges: ["Tight Tolerances", "Regulatory Compliance", "Low-Volume/High-Mix"],
      image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Consumer Electronics",
      icon: Cpu,
      desc: "High-speed assembly, testing automation, and micro-precision handling.",
      challenges: ["Rapid Scaling", "Miniaturization", "Short Product Cycles"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Medical Devices",
      icon: Stethoscope,
      desc: "Clean room automation, device assembly, and packaging validation.",
      challenges: ["FDA Validation", "Sterile Environments", "Process Repeatability"],
      image: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/8542f467-84eb-4f22-af50-ebc03d78f73e/1767828369442-28bdbe49/image.png"
    },
    {
      name: "Pharmaceutical",
      icon: Pill,
      desc: "Strict regulatory environments, serialization systems, and batch processing automation.",
      challenges: ["21 CFR Part 11", "Serialization", "Data Integrity"],
      image: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/8542f467-84eb-4f22-af50-ebc03d78f73e/1767832436595-7b9a6bfc/image.png"
    },
    {
      name: "Food & Beverage",
      icon: Utensils,
      desc: "High-speed packaging lines, sanitary processing, and CIP (Clean-in-Place) automation.",
      challenges: ["Sanitary Design", "High Throughput", "Batch Traceability"],
      image: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/8542f467-84eb-4f22-af50-ebc03d78f73e/1767832173478-137966cb/image.png"
    },
    {
      name: "Semiconductors",
      icon: Cpu,
      desc: "Cleanroom material handling, wafer processing, and automated testing.",
      challenges: ["Contamination Control", "Precision", "Uptime"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Energy",
      icon: Factory,
      desc: "Solar panel manufacturing, battery assembly, and grid control systems.",
      challenges: ["Scalability", "Reliability", "Cost Reduction"],
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-10 pb-20 px-6 max-w-7xl mx-auto">
       <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-20 text-center"
      >
        <div className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Sectors</div>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-primary">Industries Served</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          While the products differ, the physics of production remain constant. We apply rigorous engineering principles across diverse manufacturing sectors.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {industries.map((ind, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-500 min-h-[450px] flex flex-col"
          >
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
                <img 
                    src={ind.image} 
                    alt={ind.name}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-all duration-700"
                />
            </div>

            <div className="relative z-10 p-10 flex flex-col justify-between h-full">
                <div className="flex justify-between items-start">
                    <div className="p-3 bg-black/50 backdrop-blur-md rounded-2xl border border-white/10 text-white">
                        <ind.icon size={24} />
                    </div>
                </div>
                
                <div>
                    <h3 className="text-4xl font-bold mb-4 text-white">{ind.name}</h3>
                    <p className="text-gray-300 mb-6 text-lg">{ind.desc}</p>
                    <div className="flex flex-wrap gap-2">
                        {ind.challenges.map((c, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-xs text-white/90">
                            {c}
                          </span>
                        ))}
                    </div>
                </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}