import { motion } from "motion/react";
import { ArrowRight, Box, Ruler, Truck, Leaf, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12 py-20 overflow-hidden bg-surface">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-6 z-10"
          >
            <span className="bg-primary-container/10 text-primary-container px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase mb-6 inline-block">
              The Industrialist Standard
            </span>
            <h1 className="font-headline font-extrabold text-5xl md:text-7xl leading-[1.1] tracking-tight mb-8 text-on-surface">
              Your Brand, <br/>
              <span className="text-primary-container">Elevated</span> through <br/>
              Precision Packaging.
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-lg mb-10 font-light leading-relaxed">
              A premium custom packaging solution for modern, sustainable businesses. Engineered for structural integrity, designed for luxury retail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-primary-container text-white px-8 py-4 rounded-md font-headline font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary transition-all shadow-xl shadow-primary-container/20">
                Get a Quote
                <ArrowRight size={20} />
              </Link>
              <Link to="/work" className="px-8 py-4 rounded-md border border-outline-variant/30 font-headline font-bold text-lg hover:bg-surface-container-low transition-all text-center">
                View Portfolio
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:col-span-6 relative h-[400px] md:h-[600px]"
          >
            <div className="absolute inset-0 md:-right-20 md:-top-10 z-0">
              <div className="w-full h-full rounded-[2rem] transform rotate-3"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <img 
                src="./public/hero.webp" 
                alt="Premium Packaging"
                className="w-full h-full object-contain drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-headline font-bold text-4xl md:text-5xl tracking-tight mb-4 text-on-surface">Precision in Every Step</h2>
              <p className="text-on-surface-variant text-lg">Seamlessly navigate from concept to delivery with our industrial-grade workflow.</p>
            </div>
            <div className="hidden md:block h-[1px] flex-grow bg-outline-variant/30 mx-12 mb-6"></div>
            <div className="text-right">
              <span className="font-headline font-black text-6xl text-surface-container-high">01-03</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Box size={32} />, title: "1. Select Box", desc: "Browse our curated selection of high-durability mailers, shipping boxes, and luxury retail packaging styles." },
              { icon: <Ruler size={32} />, title: "2. Customize", desc: "Upload your brand assets and define textures using our high-end 3D configurator. Choose from Kraft to high-gloss finishes." },
              { icon: <Truck size={32} />, title: "3. Order", desc: "Approve your digital proof and send to production. We handle the heavy lifting and ship directly to your warehouse." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group"
              >
                <div className="mb-8 w-20 h-20 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-white transition-all duration-500">
                  {step.icon}
                </div>
                <h3 className="font-headline font-bold text-2xl mb-4">{step.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="font-headline font-bold text-4xl md:text-5xl tracking-tight mb-4">Why Brands Partner With Us</h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">We combine heavy-duty manufacturing capabilities with the finesse of a high-end design agency.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2 bg-white p-12 rounded-lg shadow-sm flex flex-col justify-between group hover:translate-y-[-4px] transition-transform duration-300">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <Leaf className="text-primary-container" size={32} />
                  <h3 className="font-headline font-bold text-2xl">Eco-friendly Materials</h3>
                </div>
                <p className="text-on-surface-variant text-lg leading-relaxed">100% recyclable, FSC-certified substrates that don't compromise on durability or premium aesthetic feel.</p>
              </div>
              <div className="mt-8 overflow-hidden rounded-lg h-48 bg-surface-container-low">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiR8XjPZuGvpV2TmdsL2oZBQoHCSfEwHltOTdElGqFbgnaOVPASzSk24cujVxjuHdFBnwkg7xPDLhH_OcKa1idcFHJAHoAKv8eQCMX476TGLlAjWYEduJNcW0uX0RdANMu1P-ueNUOwfdihzJzZvbIJwvNp0EbO-xZVEIbXYlIegh75Ssra5fkqNHYjJaJyUpod8ZgqjjdF0qZOS9BHT0rDm2RGV1ktmrtBXks_LOloyVz6krz8QaypVw8edrWIB2X0QLBScg_lps" 
                  alt="Materials"
                  className="w-full h-full object-cover grayscale opacity-50 mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="bg-white p-10 rounded-lg shadow-sm flex flex-col justify-between hover:translate-y-[-4px] transition-transform duration-300">
              <div>
                <Zap className="text-primary-container mb-6" size={40} />
                <h3 className="font-headline font-bold text-xl mb-4">Fast 7-Day Turnaround</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Our optimized manufacturing pipeline ensures your custom orders move from proof to print in record time.</p>
              </div>
            </div>

            <div className="bg-white p-10 rounded-lg shadow-sm flex flex-col justify-between hover:translate-y-[-4px] transition-transform duration-300">
              <div>
                <Shield className="text-primary-container mb-6" size={40} />
                <h3 className="font-headline font-bold text-xl mb-4">Structural Expertise</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">In-house structural engineers ensure your packaging withstands the rigors of global shipping.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materiality Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 relative">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8QjbWeCGiOFGjvilnDhFc-NvZuREA2GtDArXwVgb94s5JIKLQrne5AoAQ70SJE0KTDs9dRWyYEAz4uiNAj-KMYZzKD5IijGIMqFgEUwcOu_YKgx3wM44tbFj2d1EZDJeeds7oBkVcB92j-IaDOBhGcwNUcag9yXy3USGQ2xo3OeeN3-nYu6VE1nQFabi0ZKVzhtKnXbNOse6keZPQ4dOWihw1Oy0_gGgqmdWyWuop69W3JJb6s37pYx0pO-xYq908T1TNPMXUDfQ" 
              alt="Industrial Machine"
              className="rounded-2xl shadow-2xl relative z-10 w-full"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-container/10 -z-0 rounded-full blur-3xl"></div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-headline font-bold text-4xl md:text-5xl tracking-tight mb-8">The Materiality of Brand</h2>
            <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
              Texture isn't just a tactile detail—it's a psychological bridge between your brand and your customer. We offer a curated palette of 'Digital Industrialist' finishes.
            </p>
            <div className="space-y-6">
              {[
                { id: "C1", title: "Premium Matte Soft-Touch", sub: "Industrial Grade 350gsm" },
                { id: "C2", title: "Reinforced E-Flute Corrugated", sub: "High-Impact Shipping" },
                { id: "C3", title: "Metallic UV Spot Finish", sub: "Luxury Retail Spec" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-4 border border-outline-variant/10 rounded-xl hover:bg-surface transition-colors cursor-default">
                  <div className="w-12 h-12 bg-surface-container-high rounded flex items-center justify-center font-bold text-sm">{item.id}</div>
                  <div>
                    <h4 className="font-headline font-bold text-lg uppercase tracking-wider">{item.title}</h4>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest mt-1">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-container text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline font-extrabold text-4xl md:text-6xl tracking-tight mb-8">Ready to define your physical footprint?</h2>
          <p className="text-xl md:text-2xl text-white/80 mb-12 font-light">Join 500+ modern brands utilizing our industrial-grade custom packaging.</p>
          <Link to="/contact" className="bg-white text-primary-container px-12 py-5 rounded-md font-headline font-black text-xl hover:bg-surface-container-low transition-all inline-block shadow-2xl">
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}
