import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="relative py-24 bg-slate-50 overflow-hidden">
            {/* Background Texture */}
             <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                             <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-brand-sky font-black text-xs uppercase tracking-[0.3em] block mb-4">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-brand-blue mb-6">
                        Ready to <span className="text-brand-sky text-stroke">Order?</span>
                    </h2>
                    <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
                        Call or WhatsApp us now for quick, reliable delivery across Bhopal.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-slate-100 relative overflow-hidden"
                >
                     {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-sky/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none" />

                    <div className="flex flex-col gap-5 relative z-10">
                        
                        {/* 1. Integrated Phone Card (Both Numbers) */}
                        <div className="p-6 bg-brand-light/50 rounded-2xl border border-brand-sky/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-5 w-full sm:w-auto">
                                <div className="bg-brand-blue text-white p-4 rounded-xl shadow-lg shadow-brand-blue/20">
                                    <Phone size={24} />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs text-brand-sky font-black uppercase tracking-widest mb-1">Call Us Now</p>
                                    
                                    {/* Main Number */}
                                    <a href="tel:+917060456251" className="block text-2xl font-black text-brand-blue hover:text-brand-sky transition-colors">
                                        +91 70604 56251
                                    </a>
                                    
                                    {/* Alternate Number Integration */}
                                    <div className="flex items-center gap-2 mt-1 text-slate-400 font-medium text-sm">
                                        <span>or call</span>
                                        <a href="tel:+918120130340" className="text-slate-500 font-bold hover:text-brand-blue underline decoration-slate-300 underline-offset-2 transition-all">
                                            +91 81201 30340
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <a href="tel:+917060456251" className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-white text-brand-blue shadow-sm hover:bg-brand-blue hover:text-white transition-all">
                                <ArrowRight size={20} />
                            </a>
                        </div>

                        {/* 2. Integrated WhatsApp Card (Both Numbers) */}
                        <div className="p-6 bg-green-50/50 rounded-2xl border border-green-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-5 w-full sm:w-auto">
                                <div className="bg-green-500 text-white p-4 rounded-xl shadow-lg shadow-green-500/20">
                                    <MessageCircle size={24} />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs text-green-600 font-black uppercase tracking-widest mb-1">WhatsApp Order</p>
                                    
                                    {/* Main WhatsApp */}
                                    <a 
                                        href="https://wa.me/917060456251" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="block text-2xl font-black text-slate-800 hover:text-green-600 transition-colors"
                                    >
                                        Chat with Main
                                    </a>
                                    
                                    {/* Alternate WhatsApp Integration */}
                                    <div className="flex items-center gap-2 mt-1 text-slate-400 font-medium text-sm">
                                        <span>or chat on</span>
                                        <a 
                                            href="https://wa.me/918120130340"
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="text-slate-500 font-bold hover:text-green-600 underline decoration-slate-300 underline-offset-2 transition-all"
                                        >
                                            +91 81201 30340
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            <a href="https://wa.me/917060456251" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-white text-green-600 shadow-sm hover:bg-green-500 hover:text-white transition-all">
                                <ArrowRight size={20} />
                            </a>
                        </div>

                    </div>

                    <div className="mt-12 flex items-center justify-center text-slate-400 font-bold text-sm gap-2">
                        <MapPin size={18} className="text-brand-sky animate-bounce" />
                        <span>Serving all areas of Bhopal, Madhya Pradesh</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;