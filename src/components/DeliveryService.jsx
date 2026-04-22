import React from 'react';
import { motion } from 'framer-motion';
import { Package, Clock, PhoneCall, ArrowRight, CheckCircle2, Smartphone } from 'lucide-react';

const DeliveryService = () => {
    return (
        <section id="delivery" className="relative py-24 bg-brand-blue overflow-hidden">
            {/* Advanced Decorative Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px]" />
                <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-brand-sky/10 rounded-full blur-[120px]" />
                {/* Subtle water texture overlay */}
                <div className="absolute inset-0 opacity-[0.05] grayscale brightness-0 invert" style={{ backgroundImage: "url('/src/assets/water-bg.png')", backgroundSize: 'cover' }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Side: Product-Focused Value Prop */}
                    <div className="lg:w-1/2 text-white">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-black tracking-widest text-brand-sky uppercase bg-white/10 rounded-full">
                                Delivery Excellence
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1]">
                                Pure Water <br /> 
                                <span className="text-brand-sky">At Your Doorstep.</span>
                            </h2>
                            <p className="text-blue-100 text-lg mb-10 leading-relaxed max-w-xl">
                                S.A. Enterprises specializes in the hygienic delivery of 20L water jars, chilled campers, and premium pouches, ensuring Bhopal stays hydrated with certified purity.
                            </p>

                            <div className="space-y-8">
                                {[
                                    { 
                                        icon: Package, 
                                        title: "Sealed & Chilled Supply", 
                                        desc: "Daily delivery of 20L jars and campers for homes, offices, and events." 
                                    },
                                    { 
                                        icon: Clock, 
                                        title: "On-Demand Scheduling", 
                                        desc: "Serving all areas of Bhopal 7 days a week from 8:00 AM to 8:00 PM." 
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-5 group">
                                        <div className="flex-shrink-0 w-14 h-14 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center text-brand-sky group-hover:bg-brand-sky group-hover:text-brand-blue transition-all duration-300">
                                            <item.icon size={28} />
                                        </div>
                                        <div>
                                            <h3 className="font-black text-xl mb-1">{item.title}</h3>
                                            <p className="text-blue-200 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* UNIFIED CALL BUTTON WIDGET */}
                            <div className="mt-12 inline-flex flex-col sm:flex-row bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-1.5 shadow-2xl hover:bg-white/15 transition-all">
                                
                                {/* 1. Main Number (Highlighted) */}
                                <a 
                                    href="tel:+917060456251" 
                                    className="flex-1 flex items-center gap-3 px-6 py-4 bg-brand-sky text-brand-blue rounded-xl hover:bg-white transition-all group"
                                >
                                    <div className="bg-brand-blue/10 p-2 rounded-full group-hover:bg-brand-blue group-hover:text-white transition-colors">
                                        <PhoneCall size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest opacity-60 leading-none mb-1">Call Main</p>
                                        <p className="text-xl font-black leading-none">+91 70604 56251</p>
                                    </div>
                                </a>

                                {/* 2. Alternate Number (Attached) */}
                                <a 
                                    href="tel:+918120130340"
                                    className="flex items-center gap-3 px-6 py-4 text-white hover:bg-white/10 rounded-xl transition-all border-l sm:border-l border-white/10 sm:ml-1"
                                >
                                    <Smartphone size={18} className="text-brand-sky opacity-80" />
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-blue-200 leading-none mb-1">Alternate</p>
                                        <p className="text-lg font-bold leading-none">81201 30340</p>
                                    </div>
                                </a>
                            </div>
                            
                            {/* Trust Indicator */}
                            <div className="mt-6 flex items-center gap-2 text-brand-sky font-bold text-sm">
                                <CheckCircle2 size={16} />
                                <span>Typical Response Time: Under 10 Mins</span>
                            </div>

                        </motion.div>
                    </div>

                    {/* Right Side: High-Conversion Form */}
                    <div className="lg:w-1/2 w-full max-w-lg">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[2.5rem] p-10 lg:p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] border border-slate-100 relative"
                        >
                            <div className="absolute -top-6 -right-6 w-20 h-20 bg-brand-sky rounded-full flex items-center justify-center text-brand-blue shadow-xl">
                                <ArrowRight size={32} />
                            </div>

                            <h3 className="text-3xl font-black text-brand-blue mb-2 text-center lg:text-left">Quick Order</h3>
                            <p className="text-slate-500 mb-8 font-medium text-center lg:text-left">Request a callback for jar or camper delivery.</p>
                            
                            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                {[
                                    { label: "Full Name", type: "text", placeholder: "e.g. Rahul Sharma" },
                                    { label: "Phone Number", type: "tel", placeholder: "+91" },
                                    { label: "Address / Area", type: "text", placeholder: "e.g. Arera Colony, Bhopal" }
                                ].map((field, i) => (
                                    <div key={i}>
                                        <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">
                                            {field.label}
                                        </label>
                                        <input 
                                            type={field.type} 
                                            className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-brand-sky focus:bg-white outline-none transition-all font-bold text-brand-blue placeholder:text-slate-300" 
                                            placeholder={field.placeholder} 
                                        />
                                    </div>
                                ))}

                                <button className="w-full bg-brand-blue text-white font-black py-5 rounded-2xl hover:bg-brand-dark transition-all mt-4 text-lg shadow-xl shadow-brand-blue/30 group">
                                    Place Inquiry
                                    <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                </button>
                                <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest mt-4">
                                    Secure & Privacy-Focused Service
                                </p>
                            </form>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DeliveryService;