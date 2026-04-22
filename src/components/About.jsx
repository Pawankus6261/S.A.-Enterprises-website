import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Quote, Award } from 'lucide-react';

const About = () => {
    const owners = [
        { 
            name: 'Shivaji Kushwaha', 
            role: 'Founder', 
            img: '/src/assets/owner1.png',
            quote: "Quality is not an act, it is a habit. We deliver purity you can trust.",
            badge: true
        },
        { 
            name: 'Ashish Prajapati', 
            role: 'Co Founder', 
            img: '/src/assets/owner2.png',
            quote: "Logistics is the heartbeat of our service. On time, every time.",
            badge: true 
        }
    ];

    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* 1. Main Story Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-black tracking-widest text-brand-sky uppercase bg-brand-sky/10 rounded-full">
                            Since 2024
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-brand-blue mb-8 leading-tight">
                            Redefining Purity in <br /> 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sky to-brand-blue">
                                Every Drop.
                            </span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed font-medium">
                            S.A. Enterprises started with a simple mission: to ensure every family in Bhopal has access to affordable, certified mineral water.
                        </p>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                            Today, we are the city's fastest-growing delivery network, combining advanced filtration technology with a human-centric service model.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {["ISO 9001 Certified", "100% Contactless Delivery", "Daily Quality Checks", "Eco-Friendly Operations"].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-brand-blue font-bold text-sm group">
                                    <div className="bg-brand-light p-1 rounded-full group-hover:bg-brand-sky group-hover:text-white transition-colors">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Stats Visual */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-gradient-to-br from-brand-blue to-brand-dark rounded-[3rem] p-12 shadow-2xl text-center text-white relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-sky/20 rounded-full blur-[80px]" />
                        <div className="relative z-10">
                            <h3 className="text-7xl font-black mb-2 tracking-tighter">500+</h3>
                            <div className="h-1 w-20 bg-brand-sky mx-auto mb-4 rounded-full" />
                            <p className="text-lg font-bold text-blue-200 uppercase tracking-widest">Happy Families</p>
                            <p className="mt-6 text-sm text-blue-300/80 max-w-xs mx-auto">
                                Trust is earned. We deliver it daily to doorsteps across Arera, Kolar, and MP Nagar.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* 2. Leadership Section */}
               
                </div>
        </section>
    );
};

export default About;