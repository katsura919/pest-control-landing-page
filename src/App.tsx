import React, { useState } from 'react';
import { Phone, Play, Shield, CheckCircle, Clock, ArrowRight, Bug, Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-orange-500 selection:text-white">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50 py-6">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/30">
              <Bug className="w-6 h-6 text-white" />
            </div>
            <span className="text-white font-bold text-xl tracking-tight leading-none">
              PEST<br />
              <span className="text-orange-500">TROYER</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-white/90 font-medium">
            <a href="#" className="hover:text-orange-500 transition-colors">Home</a>
            <a href="#" className="hover:text-orange-500 transition-colors">About Us</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Services</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Pages</a>
          </div>

          <button className="hidden md:block bg-white text-slate-900 hover:bg-orange-500 hover:text-white px-6 py-2.5 rounded-lg font-semibold transition-all shadow-lg hover:shadow-orange-500/25">
            Contact Us
          </button>

          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-t border-slate-800 p-6 shadow-2xl">
            <div className="flex flex-col gap-4 text-white font-medium">
              <a href="#" className="hover:text-orange-500 transition-colors">Home</a>
              <a href="#" className="hover:text-orange-500 transition-colors">About Us</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Services</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Pages</a>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold mt-2">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-slate-900 pt-32 pb-32 lg:pb-48 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1584820927498-cafe2c15a368?auto=format&fit=crop&q=80" 
            alt="Pest Control Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            {/* Left Content */}
            <motion.div 
              className="max-w-2xl w-full pt-12 lg:pt-20"
              initial="initial"
              animate="animate"
              variants={fadeIn}
            >
              <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm flex items-center gap-2">
                <span className="w-8 h-[2px] bg-orange-500"></span>
                We Are Pestroyer
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mt-6 mb-6 leading-[1.1]">
                Professional Pest Exterminators
              </h1>
              <p className="text-slate-300 text-lg mb-10 max-w-xl leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida, mauris eu ultrices placerat.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5">
                  Learn More
                </button>
                <button className="flex items-center gap-4 text-white hover:text-orange-400 transition-colors group">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors backdrop-blur-sm border border-white/10">
                    <Play className="w-5 h-5 fill-current ml-1" />
                  </div>
                  <span className="font-medium text-lg">Watch Trailer</span>
                </button>
              </div>
            </motion.div>

            {/* Right Form Spacer for Desktop */}
            <div className="hidden lg:block w-[450px] shrink-0"></div>
          </div>
        </div>
      </section>

      {/* Emergency & Form Section */}
      <section className="relative z-20 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 -mt-12 lg:-mt-32">
          
          {/* Emergency Info */}
          <motion.div 
            className="flex-1 pt-12 lg:pt-40"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange-500 font-medium mb-3 block text-lg">Are You In Emergency ?</span>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">+62-85132-567</h2>
            <p className="text-slate-600 mb-8 max-w-md text-lg">
              Contact us immediately if you're in trouble with pest. Our emergency team is ready to deploy.
            </p>
            <button className="flex items-center gap-3 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-orange-500/25">
              <Phone className="w-5 h-5" />
              Call Us Now
            </button>
          </motion.div>

          {/* Form Card */}
          <motion.div 
            className="w-full lg:w-[450px] bg-white p-8 lg:p-10 rounded-2xl shadow-2xl shadow-slate-200/50 shrink-0 border border-slate-100"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Reserve Our Service</h3>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" 
                />
              </div>
              <button 
                type="button"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 mt-4"
              >
                Reserve Now
              </button>
            </form>
          </motion.div>

        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">Our Services</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-3">Protecting You From Pest</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200 transition-all group border border-slate-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80" 
                  alt="Indoor Protection" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Indoor Protection</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <a href="#" className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 transition-colors group/link">
                  Learn More 
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200 transition-all group border border-slate-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80" 
                  alt="Outdoor Protection" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Outdoor Protection</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <a href="#" className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 transition-colors group/link">
                  Learn More 
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200 transition-all group border border-slate-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?auto=format&fit=crop&q=80" 
                  alt="Warehouse Protection" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Warehouse Protection</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <a href="#" className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 transition-colors group/link">
                  Learn More 
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-orange-100 rounded-[2rem] transform -rotate-3 -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80" 
                  alt="Professional Exterminator" 
                  className="rounded-2xl shadow-2xl object-cover h-[600px] w-full" 
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm flex items-center gap-2">
                <span className="w-8 h-[2px] bg-orange-500"></span>
                Why Choose Us
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6 leading-tight">
                We Are The Best Pest Control Company
              </h2>
              <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                With over 15 years of experience, we provide safe, effective, and reliable pest control services for residential and commercial properties.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0 border border-orange-100">
                    <Shield className="w-7 h-7 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Licensed & Insured</h4>
                    <p className="text-slate-600 leading-relaxed">All our technicians are fully licensed, insured, and highly trained to handle any pest situation.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0 border border-orange-100">
                    <CheckCircle className="w-7 h-7 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Eco-Friendly Solutions</h4>
                    <p className="text-slate-600 leading-relaxed">We use environmentally responsible products that are tough on pests but safe for your family and pets.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0 border border-orange-100">
                    <Clock className="w-7 h-7 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">24/7 Emergency Service</h4>
                    <p className="text-slate-600 leading-relaxed">Pests don't sleep, and neither do we. Our emergency response team is available around the clock.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <Bug className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-bold text-xl tracking-tight leading-none">
                PEST<br />
                <span className="text-orange-500">TROYER</span>
              </span>
            </div>
            <p className="mb-8 leading-relaxed">
              Professional pest control services protecting your home and business with safe, effective, and reliable solutions.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors cursor-pointer">
                <span className="font-bold">f</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors cursor-pointer">
                <span className="font-bold">t</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors cursor-pointer">
                <span className="font-bold">in</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Indoor Protection</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Outdoor Protection</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Warehouse Protection</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Termite Control</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Rodent Removal</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> About Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Contact Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Our Team</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Careers</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 text-orange-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <span>123 Pest Control Avenue,<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="text-orange-500">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-white font-semibold">+62-85132-567</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="text-orange-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <span>info@pestroyer.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="container mx-auto px-6 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; 2026 Pestroyer. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
