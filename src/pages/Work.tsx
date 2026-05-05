import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Leaf, Shield, CheckCircle } from "lucide-react";
import Image1 from "../../assets/Image1.jpeg";
import Image2 from "../../assets/Image2.jpeg";
import Image3 from "../../assets/Image3.jpeg";
import Image4 from "../../assets/Image4.jpeg";
import Image5 from "../../assets/Image5.jpeg";
import Image6 from "../../assets/Image6.jpeg";
import Image7 from "../../assets/Image7.jpeg";
import Image8 from "../../assets/Image8.jpeg";
import Image9 from "../../assets/Image9.jpeg";
import Image10 from "../../assets/Image10.jpeg";
import Image11 from "../../assets/Image11.jpeg";
import Image12 from "../../assets/Image12.jpeg";
import Image13 from "../../assets/Image13.jpeg";
import Image14 from "../../assets/Image14.jpeg";



const projects = [
  {
    category: "Luxury Drawer Box Set",
    title: "Precision-Crafted Drawer Packaging",
    image: Image1,
    aspect: "aspect-[4/5]"
  },
  {
    category: "Minimalist Kit Box",
    title: "Clean Form, Elevated Function",
    image: Image2,
    aspect: "aspect-square"
  },
  {
    category: "Cylindrical Premium Case",
    title: "Bold Packaging with a Circular Identity",
    image: Image3,
    aspect: "aspect-[3/4]"
  },
  {
    category: "Classic Hinged Jewelry Box",
    title: "Timeless Presentation for Precious Pieces",
    image: Image4,
    aspect: "aspect-square"
  },
  {
    category: "Pastel Gift Stack Packaging",
    title: "Playful Packaging with Premium Appeal",
    image: Image5,
    aspect: "aspect-[4/5]"
  },
  {
    category: "Multi-Compartment Jewelry Set",
    title: "Organized Luxury in Every Detail",
    image: Image6,
    aspect: "aspect-[3/2]"
  },
  {
    category: "Eco Kraft Collection Box",
    title: "Sustainable Packaging with Natural Charm",
    image: Image7,
    aspect: "aspect-[3/2]"
  },
  {
    category: "Compact Gift Cube",
    title: "Small Size, Strong Impression",
    image: Image8,
    aspect: "aspect-[3/2]"
  },
  {
    category: "Premium Watch Cylinder Case",
    title: "Engineered for Iconic Timepieces",
    image: Image9,
    aspect: "aspect-[3/2]"
  },
  {
    category: "Soft Pouch & Box Combo",
    title: "Dual-Layer Protection, Refined Experience",
    image: Image14,
    aspect: "aspect-[3/2]"
  },
  {
    category: "Magnetic Closure Rigid Box",
    title: "Seamless Closure, Premium Feel",
    image: Image11,
    aspect: "aspect-[3/2]"
  },
    {
    category: "Custom Insert Display Box",
    title: "Tailored Interiors for Perfect Fit",
    image: Image12,
    aspect: "aspect-[3/2]"
  },
   



];

export default function Work() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-l-4 border-primary-container pl-8">
          <div className="max-w-2xl">
            <span className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-primary-container mb-4 block font-headline">Portfolio Gallery</span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-surface leading-[0.9] mb-6">
              Previous Projects
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
              Our commitment to industrial precision meets editorial elegance. We design physical touchpoints that define brands through structural integrity and high-end finishing.
            </p>
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {projects.map((project, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="break-inside-avoid group relative overflow-hidden bg-white shadow-sm rounded-lg transition-transform duration-500 hover:-translate-y-2"
          >
            <div className={`${project.aspect} bg-surface-container-low overflow-hidden`}>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover  hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8">
              <span className="text-[0.625rem] font-bold tracking-[0.15em] uppercase text-primary-container mb-2 block font-headline">{project.category}</span>
              <h3 className="font-headline font-bold text-xl tracking-tight">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="mt-32 relative bg-primary-container rounded-lg p-16 overflow-hidden text-center">
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-white mb-8 tracking-tighter">
            Ready to elevate your brand's physical presence?
          </h2>
          <Link to="/contact" className="bg-white text-primary-container px-12 py-5 rounded-md font-headline font-black uppercase tracking-widest text-sm hover:shadow-xl transition-all inline-block">
            Start Your Project
          </Link>
        </div>
      </section>

      {/* Icons Bar */}
      <div className="mt-20 flex justify-center gap-12 text-slate-400">
        <Leaf size={24} />
        <Shield size={24} />
        <CheckCircle size={24} />
      </div>
    </div>
  );
}
