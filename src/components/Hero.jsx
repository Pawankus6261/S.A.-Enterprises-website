import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ChevronRight, Droplets, ShieldCheck, Clock, Star } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center bg-[#f8fafc] overflow-hidden pt-20 lg:pt-0">

            {/* 1. LAYERED BACKGROUND VISUALS */}
            {/* Animated Water Blobs */}
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-sky/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[100px]" />

            {/* Floating Droplet Particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                        duration: 5 + i,
                        repeat: Infinity,
                        delay: i * 0.5
                    }}
                    className="absolute hidden lg:block text-brand-sky/30"
                    style={{
                        top: `${20 + (i * 15)}%`,
                        left: `${10 + (i * 12)}%`,
                    }}
                >
                    <Droplets size={20 + (i * 10)} />
                </motion.div>
            ))}

            <div className="container mx-auto px-4 sm:px-6 lg:px-12 h-full relative z-20 flex flex-col lg:flex-row items-center">

                {/* 2. CONTENT COLUMN (Left Side) */}
                <div className="lg:w-1/2 pt-10 lg:pt-0">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col gap-6"
                    >
                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-white shadow-sm border border-brand-sky/10">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
                            </span>
                            <span className="text-[11px] font-black text-brand-blue tracking-widest uppercase">Purest Water in Bhopal</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-brand-blue leading-[0.95] tracking-tighter">
                            Pure Vitality <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sky to-brand-blue">
                                Delivered Daily.
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed font-medium opacity-90">
                            The gold standard of hydration. Mineral-rich, certified water delivered with precision to your doorstep within 60 minutes.
                        </p>

                        <div className="flex flex-wrap gap-5 pt-4">
                            <a href="#products" className="group px-10 py-5 bg-brand-blue text-white font-bold rounded-2xl shadow-2xl shadow-brand-blue/30 hover:bg-brand-dark hover:-translate-y-1 transition-all flex items-center justify-center gap-3 text-lg">
                                Order Delivery
                                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={22} />
                            </a>
                            <a href="tel:+911234567890" className="px-10 py-5 bg-white text-brand-blue font-bold rounded-2xl border border-slate-200 shadow-xl hover:bg-brand-light transition-all flex items-center justify-center gap-3 text-lg">
                                <Phone size={20} />
                                <span>Call Direct</span>
                            </a>
                        </div>

                        {/* Professional Trust Stats */}
                        <div className="grid grid-cols-3 gap-8 border-t border-slate-100 pt-8 mt-6">
                            {[
                                { icon: ShieldCheck, label: "ISO 9001", sub: "Quality Guaranteed" },
                                { icon: Clock, label: "60 Mins", sub: "Fast Delivery" },
                                { icon: Droplets, label: "7-Step", sub: "Purification" }
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2 text-brand-blue font-black text-base">
                                        <stat.icon size={20} className="text-brand-sky" /> {stat.label}
                                    </div>
                                    <p className="text-[11px] text-slate-400 font-bold uppercase tracking-tight">{stat.sub}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* 3. OPTIMIZED VISUAL COLUMN (Right Side) */}
                <div className="lg:w-1/2 relative h-[500px] lg:h-[85vh] w-full mt-10 lg:mt-0 self-end">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="relative h-full w-full flex items-end justify-center lg:justify-end"
                    >
                        {/* Masked Subject - Fades into the floor */}
                        <div className="relative h-full w-full flex items-end justify-center lg:justify-end overflow-hidden">
                            <img
                                src="/src/assets/water-delivery.png"
                                alt="Delivery Professional"
                                onContextMenu={(e) => e.preventDefault()} // Disables Right-Click
                                onDragStart={(e) => e.preventDefault()}
                                className="h-[92%] w-auto max-w-md lg:max-w-none object-contain z-10 drop-shadow-[0_-20px_50px_rgba(51,204,255,0.2)] select-none"
                                style={{
                                    // This creates the fade at the bottom 20% of the image
                                    maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
                                    WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)'
                                }}
                            />
                        </div>

                        {/* Floating Dynamic Badges */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[30%] left-[5%] lg:left-0 z-20 bg-white/80 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-white/50 flex items-center gap-4"
                        >
                            <div className="h-12 w-12 bg-brand-sky/20 rounded-2xl flex items-center justify-center text-brand-sky shadow-inner">
                                <Star fill="currentColor" size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Top Rated</p>
                                <p className="text-lg font-black text-brand-blue leading-tight">500+ Reviews</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-[20%] right-[5%] z-20 bg-white/80 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-white/50 flex items-center gap-4"
                        >
                            <div className="h-12 w-12 bg-brand-green/20 rounded-2xl flex items-center justify-center text-brand-green shadow-inner">
                                <Droplets size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Health First</p>
                                <p className="text-lg font-black text-brand-blue leading-tight">Perfect TDS 150</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Hero;