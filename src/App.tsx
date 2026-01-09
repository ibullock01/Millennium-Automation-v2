import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Industries } from './pages/Industries';
import { Approach } from './pages/Approach';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Nexify-style Navigation: Floating Pill
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/industries', label: 'Industries' },
    { path: '/approach', label: 'Approach' },
    { path: '/about', label: 'About' },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="bg-background/80 backdrop-blur-xl border border-border rounded-full px-6 py-3 flex items-center justify-between gap-8 max-w-5xl w-full shadow-lg shadow-primary/5">
        <Link to="/" className="flex items-center gap-3 group">
          {/* Logo */}
          <img 
            src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/projects/048e5644-cc24-406a-9edf-4e7ba6760631/generated-images/generated-4f0b5edd-fc8f-4b03-ba3f-14a729e9b435.png" 
            alt="Millennium Automation" 
            className="h-10 w-auto object-contain"
          />
          <span className="font-serif font-bold tracking-tight text-foreground text-lg hidden sm:block">MILLENNIUM</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                location.pathname === link.path 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
           <Link 
            to="/contact" 
            className="px-5 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-full hover:scale-105 transition-transform shadow-md shadow-primary/20"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Nav Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 bg-card border border-border rounded-3xl p-4 flex flex-col gap-2 shadow-2xl mx-4">
            {links.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={cn(
                  "px-4 py-3 text-sm font-medium rounded-xl transition-colors",
                  location.pathname === link.path 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="mt-2 px-4 py-3 bg-primary text-primary-foreground text-sm font-bold rounded-xl text-center"
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border py-20 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/projects/048e5644-cc24-406a-9edf-4e7ba6760631/generated-images/generated-4f0b5edd-fc8f-4b03-ba3f-14a729e9b435.png" 
                alt="Millennium Automation" 
                className="h-8 w-auto object-contain"
              />
              <span className="font-serif font-bold text-lg text-foreground">MILLENNIUM AUTOMATION</span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
              Stabilizing, scaling, and future-proofing complex manufacturing systems through safe, sustainable engineering leadership and execution excellence.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-primary transition-colors">Manufacturing Automation</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Production Engineering</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Team Management</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Capital Projects</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/approach" className="hover:text-primary transition-colors">Approach</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Millennium Automation. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Systems Online
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10 flex flex-col">
      <Navigation />
      <main className={cn("flex-grow", isHome ? "pt-0" : "pt-32")}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout />
    </HashRouter>
  );
}