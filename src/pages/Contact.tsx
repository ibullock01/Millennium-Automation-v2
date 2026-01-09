import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import React from 'react';

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const interest = formData.get('interest');
    const company = formData.get('company');
    const industry = formData.get('industry');
    const timeline = formData.get('timeline');
    const budget = formData.get('budget');
    const message = formData.get('message');

    const subject = `New Inquiry: ${interest} - ${company || firstName}`;
    const body = `
Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company}
Industry: ${industry}
Interest: ${interest}
Timeline: ${timeline}
Budget: ${budget}

Message:
${message}
    `.trim();

    window.location.href = `mailto:solutions@millennium-automation.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="pt-10 pb-20 px-6 max-w-7xl mx-auto">
       <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-20"
      >
        <div className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Get In Touch</div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-primary">Initialize Your Project</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Ready to stabilize and scale your production? Let's discuss your engineering challenges.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card border border-border p-8 md:p-10 rounded-3xl shadow-sm"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground font-bold">First Name</label>
                <input name="firstName" type="text" className="w-full bg-secondary/50 border border-border rounded-xl p-3 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground/50" placeholder="Han" required />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Last Name</label>
                <input name="lastName" type="text" className="w-full bg-secondary/50 border border-border rounded-xl p-3 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground/50" placeholder="Solo" required />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Email</label>
              <input name="email" type="email" className="w-full bg-secondary/50 border border-border rounded-xl p-3 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground/50" placeholder="han@millennium.com" required />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Interest</label>
              <select name="interest" className="w-full bg-secondary/50 border border-border rounded-xl p-3 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors text-foreground">
                <option>Automation Consulting</option>
                <option>Production Engineering</option>
                <option>Project Management</option>
                <option>Other</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Company <span className="text-[10px] opacity-60 font-normal normal-case">(Optional)</span></label>
                <input name="company" type="text" className="w-full bg-secondary/50 border border-border rounded-xl p-3 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground/50" placeholder="Company Name" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Industry <span className="text-[10px] opacity-60 font-normal normal-case">(Optional)</span></label>
                <input name="industry" type="text" className="w-full bg-secondary/50 border border-border rounded-xl p-3 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground/50" placeholder="e.g. Automotive" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Timeline <span className="text-[10px] opacity-60 font-normal normal-case">(Optional)</span></label>
                <input name="timeline" type="text" className="w-full bg-secondary/50 border border-border rounded-xl p-3 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground/50" placeholder="e.g. Q3 2024" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Budget <span className="text-[10px] opacity-60 font-normal normal-case">(Optional)</span></label>
                <input name="budget" type="text" className="w-full bg-secondary/50 border border-border rounded-xl p-3 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground/50" placeholder="Estimated Range" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Message</label>
              <textarea name="message" rows={4} className="w-full bg-secondary/50 border border-border rounded-xl p-3 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground/50" placeholder="Tell us about your project..." required></textarea>
            </div>

            <button type="submit" className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
              Send Transmission <Send size={16} />
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5, delay: 0.2 }}
           className="flex flex-col justify-center space-y-12 pl-0 md:pl-12"
        >
           <div className="flex items-start gap-6">
             <div className="w-12 h-12 rounded-2xl bg-secondary border border-border flex items-center justify-center text-primary flex-shrink-0">
               <Mail size={24} />
             </div>
             <div>
               <h3 className="font-bold text-xl mb-1 text-foreground">Email Us</h3>
               <p className="text-muted-foreground mb-1">General Inquiries</p>
               <a href="mailto:solutions@millennium-automation.com" className="text-primary hover:underline">solutions@millennium-automation.com</a>
             </div>
           </div>



           <div className="flex items-start gap-6">
             <div className="w-12 h-12 rounded-2xl bg-secondary border border-border flex items-center justify-center text-primary flex-shrink-0">
               <MapPin size={24} />
             </div>
             <div>
               <h3 className="font-bold text-xl mb-1 text-foreground">Headquarters</h3>
               <p className="text-muted-foreground">
                 12 Parsec Lane<br />
                 Las Vegas, NV 89138
               </p>
             </div>
           </div>
        </motion.div>
      </div>
    </div>
  );
}