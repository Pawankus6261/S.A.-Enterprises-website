import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Instagram, Facebook, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 relative overflow-hidden border-t border-slate-800">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-brand-sky to-transparent opacity-50" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    
                    {/* Column 1: Brand Info */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-black text-white tracking-tight mb-2">S.A. Enterprises</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Bhopal's most trusted water delivery network. ISO 9001 certified purity delivered to your doorstep within 60 minutes.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-sky hover:text-white flex items-center justify-center transition-all duration-300">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all duration-300">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Access</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            {['Home', 'Products', 'Services', 'About Us', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase().replace(' ', '')}`} className="hover:text-brand-sky transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-sky/50 group-hover:bg-brand-sky transition-colors" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-5 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-brand-sky shrink-0 mt-1" size={18} />
                                <span className="leading-relaxed">
                                    29/2 Haridham Near Rajora Estate,<br />
                                    Nirmal Nagar, Khajuri Kalan Road,<br />
                                    Piplani Bhel, Bhopal (M.P.)
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-brand-sky shrink-0" size={18} />
                                <div className="flex flex-col">
                                    <a href="tel:+917060456251" className="hover:text-white transition-colors">+91 70604 56251</a>
                                    <a href="tel:+918120130340" className="hover:text-white transition-colors">+91 81201 30340</a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: CTA */}
                    <div className="bg-brand-blue/20 p-6 rounded-2xl border border-brand-blue/30">
                        <h4 className="text-white font-bold mb-2">Need Bulk Supply?</h4>
                        <p className="text-xs text-blue-200 mb-4">Get special rates for weddings and corporate events.</p>
                        <a 
                            href="tel:+917060456251" 
                            className="block w-full py-3 bg-brand-sky text-brand-blue font-black text-center text-sm rounded-xl hover:bg-white transition-colors"
                        >
                            Get Custom Quote
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs font-medium text-slate-500">
                        &copy; {new Date().getFullYear()} S.A. Enterprises. All rights reserved.
                    </p>
                    
                    <button 
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-xs font-bold text-brand-sky hover:text-white transition-colors uppercase tracking-widest"
                    >
                        Back to Top <ArrowUp size={14} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;