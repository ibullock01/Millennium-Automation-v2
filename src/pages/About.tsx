import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, Layers, Hammer } from 'lucide-react';

export function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const principles = [
    {
      title: "Safety as a design constraint",
      desc: "Safety is integrated into system architecture, standards, and commissioning — not layered on afterward. We design and modify systems with the assumption that real people will operate, maintain, and rely on them every day.",
      icon: ShieldCheck
    },
    {
      title: "Sustainability as a long-term obligation",
      desc: "We help clients build systems that reduce waste, improve efficiency, extend asset life, and remain viable over decades — supporting both environmental responsibility and durable industrial careers.",
      icon: Leaf
    },
    {
      title: "Future-proofing through disciplined engineering",
      desc: "We prioritize architectures, standards, and platforms that scale, adapt, and remain supportable as technology and business needs evolve.",
      icon: Layers
    },
    {
      title: "Execution accountability",
      desc: "We work hands-on, in real environments, with responsibility for outcomes — not just recommendations.",
      icon: Hammer
    }
  ];

  return (
    <div className="pt-20 pb-32">
      {/* Founder's Note Section */}
      <section className="px-6 max-w-4xl mx-auto mb-40">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="text-[#C09A6F] text-xs font-bold uppercase tracking-widest mb-6">Perspective</div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-16 tracking-tight text-black">Founder's Note</h1>
          
          <div className="space-y-8 text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
            <p>
              <span className="text-black font-semibold">Millennium Automation was founded on a simple belief:</span> manufacturing deserves technical leadership that is practical, principled, and built for the long term — not more abstraction, but better execution.
            </p>
            <p>
              My career has been shaped inside real production environments: commissioning lines during live startups, debugging complex control systems under time pressure, and leading capital projects where reliability, safety, and accountability were non-negotiable. That experience informed how I think about engineering — and why this company exists.
            </p>
            <p>
              Engineering decisions are never just technical. They affect people's safety, the durability of operations, and the physical world we all share.
            </p>
            <p className="text-black font-semibold italic border-l-2 border-[#C09A6F] pl-6 py-2 my-8">
              That responsibility matters.
            </p>
            <p>
              Safety is deeply important to me. Every system ultimately touches someone's family, and no one should have to choose between productivity and going home safely at the end of the day.
            </p>
            <p>
              Sustainability matters for similar reasons. Manufacturing will always be essential — but it should be built and modernized in ways that are efficient, responsible, and resilient over time. Future generations deserve stable industries, meaningful careers, and a world worth inheriting.
            </p>
            <p>
              Millennium Automation exists to support that standard of engineering — one that values rigor, accountability, and long-term impact over short-term convenience.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Approach Section - WHITE CARDS */}
      <section className="bg-white py-32 border-t border-gray-200">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-black">Our Approach</h2>
              <p className="text-3xl font-serif italic text-[#C09A6F] mb-8">Engineers first. Responsibility always.</p>
            </motion.div>
            
            <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="text-lg text-gray-600 space-y-6 font-medium"
            >
              <p>
                Millennium Automation is an engineering consulting firm focused on stabilizing, scaling, and modernizing complex manufacturing systems.
              </p>
              <p>
                We operate with the belief that good engineering is not only technically correct, but operationally responsible — to the people who run the systems, the organizations that depend on them, and the environment in which they exist.
              </p>
              <p className="font-semibold text-black">
                Our work is grounded in four principles:
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 p-8 md:p-12 rounded-lg hover:border-[#C09A6F]/40 transition-colors group shadow-sm"
              >
                <div className="flex items-start gap-6">
                  <div className="text-5xl font-serif font-bold text-gray-200 group-hover:text-[#C09A6F]/20 transition-colors">
                    0{index + 1}
                  </div>
                  <div className="space-y-4 pt-2">
                    <h3 className="text-xl font-bold text-black">{principle.title}</h3>
                    <p className="text-gray-600 leading-relaxed font-medium">
                      {principle.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
