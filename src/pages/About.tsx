import { motion } from "motion/react";
import { Zap, Shield, Ruler } from "lucide-react";

export default function About() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center px-6 md:px-12 py-20 bg-surface">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 z-10"
          >
            <span className="inline-block px-3 py-1 bg-surface-container-high text-on-surface-variant font-bold text-[0.6875rem] uppercase tracking-[0.1em] mb-6">Established 1994</span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-surface leading-none mb-8">
              The Architecture <br/>of <span className="text-primary-container">Packaging.</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
              We don't just create boxes; we engineer the physical manifestations of brand identity. Precision Editorial is where industrial rigor meets high-end retail elegance.
            </p>
          </motion.div>
          <div className="md:col-span-5 relative">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAScobPs8L-W_Q7SuUK8pRrJjbJqPf9Ktb-IJPrNbmwDWT54of1lEwQAFlXws1ClKAx-SMXmXlAviUoGbUad6UPRwqYWL0zyZj-F5FLcqRgFtirtp2pBl1q-H-OO-XqRA1tvXTaQ8zcpcdIkfa0ojPVJtAelA27eE7edIzPz82lFR7XVb0FN0NtTXoYynioHKl0m66eZjG6zbqrXWffrfESErUbUCiIi15tyRx6i2qEM9saA4V3wHFYGRofHqB5qtL4Ov1JTUc2thk" 
              alt="Industrial Precision"
              className="w-full h-[500px] object-cover rounded-lg shadow-2xl md:translate-x-12"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-32 bg-surface-container-low px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary-container mb-4">Our Narrative</h2>
              <h3 className="text-4xl font-headline font-bold tracking-tight mb-8">Decades of technical evolution.</h3>
              <div className="space-y-6 text-on-surface-variant leading-relaxed">
                <p>Founded on the factory floors of the Midwest, Precision Editorial began as a technical drafting firm for industrial containers. We realized that the "unboxing" was becoming the most important touchpoint for digital brands.</p>
                <p>Today, we serve global innovators who demand the structural integrity of industrial engineering paired with the aesthetic finesse of a fashion house.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="pt-12">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4vLZ2-aDirspnVuhONltz_aPGYD4q-KarrSiNLsFcMK5WorUzC-jZR6QuQiy8DDA-zXa6WCVAg54XqPmXlinh3e2_pjr01IQn3umyIQhSEVCUgirAfBZLsn7lFShdUWfL4AvKecuv1hePhIZ-lUY4ITst2HJTT8PZ_2ZffoH4BbO1iI0WRFIyHbPNDSXJLJN14pyhumJFHlYAV-_-NRY6swUh2CckETzqhl2qZQaLEvF9ltSoiCidLva4pczoCEU4_9htJBviGIw" 
                  alt="Drafting"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIJFszTh9TygfOOnJmFmtUFbK6uD5FFUCxC6EyMXHgD39BxJu8KMxuZcePxiI4-Mh5uzSuXsJ7nd8WGp0FGUEqgetw8-14JbLi_acBtOHo8eyOmcTwCQwgFviSPocOd7mC69xATdyojsqS3pQlyWmeAn-gq6WJVCeftrwRJRX2TYR7Fth7a3sGb2nKs9W5ht3li84bDYcTn9WH9ADB6jx4EYUsavWZWF8lxRgK5dArM1IkA3L3lH1SWe-2hmtnfNCaFhqq6hVbQUI" 
                  alt="Inspection"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Section */}
      <section className="py-32 bg-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col items-center mb-20 text-center">
          <span className="text-primary-container font-bold tracking-[0.3em] uppercase text-[10px] mb-4">Production Facility</span>
          <h2 className="text-4xl md:text-5xl font-headline font-black tracking-tighter mb-6">Manufacturing Excellence</h2>
          <div className="w-24 h-1 bg-primary-container mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="col-span-1 md:col-span-2 relative group overflow-hidden rounded-lg">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0H7VLY38FDCSs74k7LU7voOk9Q7HpGawmZ2A924f2zBmkoOqKYHi4vntwiF3_foLqcrX5W1aBR74bJo8VLR2m2dKFJTqpQSndjPpOyoueDn8QB39Jqf3FPB5YQNohbTCQzI9MpdlaQMBG6KOPrQu_3sfK2tRA3W3D0S4tqWAeK5r47EGdi0QtjWyjp4o-LMmEkwt-d88gs3a2dY4na45GGV1bCv8f6tboLA8nkZFz17I1ghjfYbWtDKrHYjsCYsOshbi3r7VTnic" 
              alt="Laser Cutting"
              className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 left-0 p-12 bg-gradient-to-t from-black/80 to-transparent w-full text-white">
              <h4 className="text-2xl font-bold mb-2">Automated Precision</h4>
              <p className="opacity-80 font-headline text-sm uppercase tracking-widest">Micron-accurate laser cutting</p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="p-10 bg-surface-container-low rounded-lg flex-1 border-l-4 border-primary-container">
              <Zap className="text-primary-container mb-6" size={40} />
              <h4 className="text-xl font-bold mb-4">Robotic Integration</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">Our assembly line utilizes advanced robotics to ensure every fold, crease, and glue point is identical to the prototype.</p>
            </div>
            <div className="p-10 bg-slate-900 text-white rounded-lg flex-1">
              <Shield className="text-primary-container mb-6" size={40} />
              <h4 className="text-xl font-bold mb-4">Quality Control</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Every batch undergoes rigorous structural stress tests and color calibration to maintain brand integrity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-headline font-black tracking-tighter">The Visionaries</h2>
            <p className="text-on-surface-variant mt-4">Precision requires specialized eyes. Meet our lead engineers and designers.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { name: "Santosh Chavan", role: "Founder & CEO", img: "./assets/Founder.jpeg" },
            ].map((person, i) => (
              <div key={i} className="group">
                <div className="aspect-[3/4] overflow-hidden bg-surface-container mb-6 rounded-lg">
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-lg font-bold">{person.name}</h4>
                <p className="text-primary-container font-headline text-[10px] uppercase tracking-widest mt-1">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
