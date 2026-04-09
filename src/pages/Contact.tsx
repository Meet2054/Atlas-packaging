import { motion } from "motion/react";
import { MapPin, Mail, Phone, Box, Leaf, Zap } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-8"
          >
            <span className="text-[0.6875rem] font-bold tracking-[0.1em] uppercase text-primary-container mb-4 block font-headline">Connect with us</span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter leading-tight text-on-surface">
              Engineering your <br/> <span className="text-primary-container">Brand's first touch.</span>
            </h1>
          </motion.div>
          <div className="lg:col-span-4 pb-4">
            <p className="text-lg text-on-surface-variant font-body leading-relaxed max-w-sm">
              High-precision custom packaging tailored for the modern industrialist. Start your technical inquiry below.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 md:p-12 shadow-xl rounded-lg"
          >
            <h2 className="font-headline font-bold text-2xl mb-8 tracking-tight">Technical Inquiry Form</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[0.6875rem] font-bold tracking-widest uppercase text-on-surface-variant">Name</label>
                  <input className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary-container p-4 rounded-sm text-on-surface placeholder:text-outline-variant transition-all" placeholder="John Doe" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="text-[0.6875rem] font-bold tracking-widest uppercase text-on-surface-variant">Email</label>
                  <input className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary-container p-4 rounded-sm text-on-surface placeholder:text-outline-variant transition-all" placeholder="john@company.com" type="email"/>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[0.6875rem] font-bold tracking-widest uppercase text-on-surface-variant">Estimated Quantity</label>
                  <input className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary-container p-4 rounded-sm text-on-surface placeholder:text-outline-variant transition-all" placeholder="500+" type="number"/>
                </div>
                <div className="space-y-2">
                  <label className="text-[0.6875rem] font-bold tracking-widest uppercase text-on-surface-variant">Box Type</label>
                  <select className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary-container p-4 rounded-sm text-on-surface transition-all appearance-none">
                    <option>Mailer</option>
                    <option>Shipping</option>
                    <option>Folding Carton</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[0.6875rem] font-bold tracking-widest uppercase text-on-surface-variant">Message</label>
                <textarea className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary-container p-4 rounded-sm text-on-surface placeholder:text-outline-variant transition-all resize-none" placeholder="Tell us about your project requirements..." rows={4}></textarea>
              </div>
              <button className="w-full bg-primary-container text-white py-5 rounded font-headline font-bold uppercase tracking-widest text-sm hover:bg-primary transition-all duration-300 shadow-lg shadow-primary-container/20" type="submit">
                Submit Inquiry
              </button>
            </form>
          </motion.div>

          {/* Contact Details & Map */}
          <div className="flex flex-col space-y-12">
            <div className="space-y-12">
              <div>
                <h3 className="text-[0.6875rem] font-bold tracking-[0.2em] uppercase text-primary-container mb-6">Contact Details</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-primary-container" size={24} />
                    <div>
                      <p className="font-headline font-bold text-lg leading-tight">Headquarters</p>
                      <p className="text-on-surface-variant mt-1">Room no 05 2nd floor santosh building <br/>
Kalyan west 421301</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="text-primary-container" size={24} />
                    <div>
                      <p className="font-headline font-bold text-lg leading-tight">Email Support</p>
                      <p className="text-on-surface-variant mt-1">projects@precisioneditorial.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="text-primary-container" size={24} />
                    <div>
                      <p className="font-headline font-bold text-lg leading-tight">Phone</p>
                      <p className="text-on-surface-variant mt-1">+91 88282 84827</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Section */}
             
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Features */}
      <section className="max-w-7xl mx-auto mt-32 bg-surface-container-low p-12 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { icon: <Zap size={32} />, title: "Technical Precision", desc: "Every millimeter is accounted for in our rigorous QC process." },
          { icon: <Leaf size={32} />, title: "Sustainable Core", desc: "100% FSC certified materials with carbon-neutral shipping options." },
          { icon: <Box size={32} />, title: "Rapid Prototyping", desc: "Digital sampling delivered within 48 hours for immediate review." }
        ].map((feature, i) => (
          <div key={i}>
            <div className="text-primary-container mb-4">{feature.icon}</div>
            <h4 className="font-headline font-bold text-xl mb-2">{feature.title}</h4>
            <p className="text-sm text-on-surface-variant">{feature.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
