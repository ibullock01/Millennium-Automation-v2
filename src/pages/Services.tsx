import { motion } from 'framer-motion';
import { ArrowRight, Zap, Settings, Activity, Cpu, Database, Wrench, Package, Brain, Rocket, Users, GitBranch, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Services() {
  const services = [
    {
      title: "Manufacturing Automation",
      description: "End-to-end automation solutions from concept to commissioning.",
      icon: Zap,
      details: ["PLC Programming & Architecture", "Robotic Cell Integration", "HMI/SCADA Development", "Safety Systems Implementation"],
      image: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/8542f467-84eb-4f22-af50-ebc03d78f73e/1767829213251-f4f9021e/image.png"
    },
    {
      title: "AI Design & Implementation",
      description: "Leveraging artificial intelligence for industrial optimization and smart manufacturing.",
      icon: Brain,
      details: ["Vision Systems & Defect Detection", "Predictive Maintenance Models", "Process Optimization Algorithms", "Intelligent Edge Computing"],
      image: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/8542f467-84eb-4f22-af50-ebc03d78f73e/1767915800406-0e7e5c1f/image.png"
    },
    {
      title: "NPI (New Product Introduction)",
      description: "Accelerating time-to-market with robust launch strategies.",
      icon: Rocket,
      details: ["Prototype to Production Scaling", "DFM/DFA Consulting", "Line Launch Support", "Initial Ramp-up Management"],
      image: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/8542f467-84eb-4f22-af50-ebc03d78f73e/1767917183609-eea6463c/image.png"
    },
    {
      title: "Engineering Team Management",
      description: "Short to Long term technical leadership and team development.",
      icon: Users,
      details: ["Interim Engineering Leadership", "Technical Skill Augmentation", "Department Scaling Strategy", "Mentorship & Training"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"
    },
    {
      title: "Engineering Change Management",
      description: "Controlled execution of technical modifications and upgrades.",
      icon: GitBranch,
      details: ["Change Control Processes", "Risk Assessment", "Version Control Systems", "Rollout Strategy & Validation"],
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2670&auto=format&fit=crop"
    },
    {
      title: "Production System Engineering",
      description: "Holistic optimization of manufacturing ecosystems.",
      icon: Settings,
      details: ["Line Balancing", "Workflow Optimization", "Factory Layout Design", "Throughput Analysis"],
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2670&auto=format&fit=crop"
    },
    {
      title: "Process Improvement",
      description: "Data-driven refinement of operational workflows.",
      icon: TrendingUp,
      details: ["Lean Manufacturing Implementation", "Six Sigma Methodologies", "Waste Reduction", "Continuous Improvement (Kaizen)"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Capital Program Execution",
      description: "Technical leadership for major equipment and facility deployments.",
      icon: Database,
      details: ["Vendor Management", "FAT/SAT Supervision", "Installation Management", "Budget & Timeline Oversight"],
      image: "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/8542f467-84eb-4f22-af50-ebc03d78f73e/1767829107485-2a496d97/image.png"
    },
    {
      title: "Reliability & Performance Improvement",
      description: "Systemic problem solving for chronic downtime and efficiency losses.",
      icon: Activity,
      details: ["Root Cause Analysis (RCA)", "FMEA / Risk Assessment", "Predictive Maintenance Strategy", "MTBF / MTTR Optimization"],
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=2670&auto=format&fit=crop"
    },
    {
      title: "Equipment Procurement",
      description: "Strategic acquisition of industrial technology and machinery.",
      icon: Package,
      details: ["Global Vendor Sourcing", "Technical RFQ Management", "Commercial Negotiation", "Supply Chain Coordination"],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2670&auto=format&fit=crop"
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
        <div className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Capabilities</div>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-primary">Engineering Services</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          We provide full-spectrum engineering consulting, from high-level system architecture to line-side debugging.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden p-8 rounded-3xl border border-white/10 hover:border-primary/50 hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
          >
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/80 transition-colors duration-500" />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-[#c09a6f] group-hover:to-[#e6c9a8] group-hover:text-black transition-all duration-300">
                <service.icon size={24} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#c09a6f] group-hover:to-[#e6c9a8] transition-all">{service.title}</h3>
              <p className="text-gray-300 mb-8 text-sm leading-relaxed min-h-[60px]">{service.description}</p>
              
              <ul className="space-y-3 mt-auto">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs text-gray-400 font-medium group-hover:text-gray-300 transition-colors">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
     <div className="mt-20 p-12 rounded-3xl bg-white border border-gray-200 text-center relative overflow-hidden shadow-sm">
  <div className="relative z-10">
    <h3 className="text-3xl font-bold mb-4 text-black">Need a custom solution?</h3>
    <p className="text-gray-600 mb-8 max-w-xl mx-auto font-medium">
      Every production system is unique. We tailor our engagement model to fit your specific technical challenges.
    </p>
    <Link 
      to="/contact" 
      className="inline-flex items-center justify-center px-8 py-3 bg-[#C09A6F] text-black font-bold rounded-full hover:scale-105 transition-transform shadow-lg"
    >
      Discuss Your Needs
    </Link>
  </div>
</div>
     
  );
}
