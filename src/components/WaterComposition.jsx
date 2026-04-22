import React from 'react';
import { motion } from 'framer-motion';

const WaterComposition = () => {
    const elements = [
        { name: 'Calcium', val: '24 mg/L', desc: 'Bone health support', x: -50 },
        { name: 'Magnesium', val: '12 mg/L', desc: 'Essential for body', x: -50 },
        { name: 'Sodium', val: '2 mg/L', desc: 'Balanced hydration', x: 50 },
        { name: 'pH Level', val: '7.4', desc: 'Perfectly alkaline', x: 50 },
    ];

    return (
        <section id="composition" className="py-24 bg-white relative overflow-hidden">
            {/* Background Texture/Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle fill="#33CCFF" cx="2" cy="2" r="2" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-brand-sky font-black text-xs uppercase tracking-[0.3em] block mb-4"
                    >
                        Quality Analysis
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-brand-blue"
                    >
                        The Science of <span className="text-brand-sky text-stroke">Purity</span>
                    </motion.h2>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">

                    {/* Left Elements */}
                    <div className="w-full lg:w-1/3 space-y-16 order-2 lg:order-1">
                        {elements.slice(0, 2).map((el, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: el.x }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className="group text-center lg:text-right"
                            >
                                <div className="inline-block lg:block">
                                    <h3 className="text-2xl font-black text-brand-blue group-hover:text-brand-sky transition-colors duration-300">
                                        {el.name}
                                    </h3>
                                    <div className="h-1 w-12 bg-brand-sky/20 ml-auto mr-auto lg:mr-0 my-3 rounded-full overflow-hidden">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '100%' }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className="h-full bg-brand-sky"
                                        />
                                    </div>
                                    <p className="text-brand-sky font-black text-xl mb-1">{el.val}</p>
                                    <p className="text-slate-400 font-bold text-sm tracking-wide uppercase">{el.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Central Bottle - Floating Animation */}
                    <div className="w-full lg:w-1/3 flex justify-center order-1 lg:order-2">
                        <motion.div 
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative group"
                        >
                            {/* Deep Glow Effect */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-sky/20 rounded-full blur-[100px] group-hover:bg-brand-sky/30 transition-colors duration-700" />
                            
                            <img
                                src="/src/assets/bottle-isolated.png"
                                alt="Pure Water Composition"
                                onContextMenu={(e) => e.preventDefault()} // Disables Right-Click
                                onDragStart={(e) => e.preventDefault()}
                                className="h-[450px] w-auto object-contain relative z-10 drop-shadow-[0_20px_60px_rgba(51,204,255,0.3)] select-none"
                            />
                        </motion.div>
                    </div>

                    {/* Right Elements */}
                    <div className="w-full lg:w-1/3 space-y-16 order-3">
                        {elements.slice(2, 4).map((el, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: el.x }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: (i + 2) * 0.2 }}
                                className="group text-center lg:text-left"
                            >
                                <div className="inline-block lg:block">
                                    <h3 className="text-2xl font-black text-brand-blue group-hover:text-brand-sky transition-colors duration-300">
                                        {el.name}
                                    </h3>
                                    <div className="h-1 w-12 bg-brand-sky/20 ml-auto mr-auto lg:ml-0 my-3 rounded-full overflow-hidden">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '100%' }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className="h-full bg-brand-sky"
                                        />
                                    </div>
                                    <p className="text-brand-sky font-black text-xl mb-1">{el.val}</p>
                                    <p className="text-slate-400 font-bold text-sm tracking-wide uppercase">{el.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WaterComposition;