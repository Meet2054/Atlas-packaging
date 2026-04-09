import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Instagram, Linkedin, Mail, MapPin, Phone, Shield, CheckCircle, Leaf, Zap, Box, Ruler, Truck, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-xl shadow-lg py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-black tracking-tighter text-slate-900 uppercase font-headline">
          Atlas Packaging
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-bold font-headline tracking-tight transition-colors ${
                location.pathname === link.path 
                  ? "text-primary-container border-b-2 border-primary-container" 
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="bg-primary-container text-white px-6 py-2.5 rounded font-headline font-bold text-sm tracking-tight hover:bg-primary transition-all duration-300">
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white absolute top-full left-0 w-full p-6 shadow-xl flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-bold font-headline ${location.pathname === link.path ? "text-primary-container" : "text-slate-600"}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-primary-container text-white px-6 py-3 rounded font-headline font-bold text-center"
          >
            Get a Quote
          </Link>
        </motion.div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <div className="text-xl font-bold font-headline mb-6">PRECISION EDITORIAL</div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            Premium custom packaging solutions for modern, sustainable businesses. Engineered in the digital age.
          </p>
        </div>
        
        <div>
          <h4 className="text-sm tracking-widest uppercase text-primary-container mb-6 font-bold">Connect</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm uppercase tracking-widest flex items-center gap-2"><Phone size={14} /> Phone: +91 88282 84827</a></li>
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm uppercase tracking-widest flex items-center gap-2"><Mail size={14} /> Email: </a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm tracking-widest uppercase text-primary-container mb-6 font-bold">Legal</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm uppercase tracking-widest">Certifications</a></li>
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm uppercase tracking-widest">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm tracking-widest uppercase text-primary-container mb-6 font-bold">Stay Updated</h4>
          <div className="flex border-b border-slate-800 pb-2">
            <input 
              type="email" 
              placeholder="EMAIL ADDRESS" 
              className="bg-transparent border-none text-xs tracking-widest focus:ring-0 w-full placeholder:text-slate-600"
            />
            <button className="text-primary-container hover:text-white transition-colors">
              <ArrowRight size={18} />
            </button>
          </div>
          <div className="mt-12 text-[10px] text-slate-500 tracking-widest uppercase">
            © 2026 Atlas Packaging. All rights reserved. FSC Certified.
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-slate-900 flex justify-between items-center">
        <div className="flex gap-6 text-slate-500">
          <Leaf size={18} />
          <Shield size={18} />
          <CheckCircle size={18} />
        </div>
        <div className="text-[10px] text-slate-600 tracking-widest uppercase">
          Industrial Excellence
        </div>
      </div>
    </footer>
  );
}
