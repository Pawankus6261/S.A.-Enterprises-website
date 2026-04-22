import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import logoImg from '../assets/LOGO.png'; 

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Products', href: '#products' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' }
    ];

    return (
        <nav 
            className={`fixed top-0 w-full z-[100] transition-all duration-500 border-b ${
                isScrolled 
                ? 'bg-white/90 backdrop-blur-xl shadow-lg border-white/20 py-2' 
                : 'bg-transparent border-transparent py-6'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    
                    {/* Brand Identity - LOGO & TEXT ALIGNED */}
                    <motion.a 
                        href="/"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-4 group" /* gap-4 creates the perfect space */
                    >
                        {/* YOUR LOGO IMAGE */}
                        <img 
                            src={logoImg} 
                            alt="S.A. Enterprises Logo" 
                            className="h-12 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300 mr-[-15px]" 
                        />
                        
                        {/* Text Block */}
                        <div className="flex flex-col justify-center">
                            <span className="text-xl font-black text-brand-blue tracking-tighter leading-none group-hover:text-brand-sky transition-colors">
                                S.A. ENTERPRISES
                            </span>
                            <span className="text-[10px] font-bold text-slate-400 tracking-[0.3em] uppercase group-hover:text-brand-blue transition-colors mt-0.5">
                                Water Supplier
                            </span>
                        </div>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-10">
                        <div className="flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a 
                                    key={link.name} 
                                    href={link.href} 
                                    className="relative text-sm font-bold text-slate-600 hover:text-brand-blue transition-colors group py-2"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-sky transition-all duration-300 group-hover:w-full" />
                                </a>
                            ))}
                        </div>
                        
                        <a 
                            href="tel:+917060456251" 
                            className="bg-brand-blue text-white pl-5 pr-1.5 py-1.5 rounded-full font-bold flex items-center gap-3 hover:bg-brand-dark transition-all shadow-xl shadow-brand-blue/20 hover:-translate-y-0.5 group"
                        >
                            <span className="text-sm tracking-wide">Order Now</span>
                            <div className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-brand-sky group-hover:text-white transition-all duration-300">
                                <Phone size={14} fill="currentColor" />
                            </div>
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button 
                        className="md:hidden p-2.5 rounded-xl bg-slate-100 text-brand-blue hover:bg-brand-sky/10 transition-colors"
                        onClick={() => setMobileMenu(!mobileMenu)}
                    >
                        {mobileMenu ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenu && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 overflow-hidden shadow-2xl absolute w-full"
                    >
                        <div className="px-6 py-8 flex flex-col gap-4">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenu(false)}
                                    className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 text-xl font-bold text-brand-blue group border border-transparent hover:border-slate-100 transition-all"
                                >
                                    <span className="group-hover:translate-x-2 transition-transform">{link.name}</span>
                                    <ArrowRight className="text-slate-300 group-hover:text-brand-sky transition-colors" size={20} />
                                </motion.a>
                            ))}
                            
                            {/* Mobile Call Actions */}
                            <div className="grid grid-cols-2 gap-3 mt-4">
                                <a 
                                    href="tel:+917060456251" 
                                    className="bg-brand-blue text-white py-4 rounded-xl font-bold text-center text-sm shadow-lg flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform"
                                >
                                    <Phone size={18} fill="currentColor" />
                                    <span>Call Main</span>
                                </a>
                                <a 
                                    href="tel:+918120130340" 
                                    className="bg-brand-sky/10 text-brand-blue border border-brand-sky/20 py-4 rounded-xl font-bold text-center text-sm flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform"
                                >
                                    <Phone size={18} />
                                    <span>Call Alt</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;