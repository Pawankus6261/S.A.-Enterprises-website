import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Droplets, MapPin } from 'lucide-react';

const TrustStrip = () => {
    const features = [
        { icon: Droplets, text: 'Clean & Pure Water', desc: '7-Step Filtered' },
        { icon: Truck, text: 'On-Time Delivery', desc: 'Doorstep Service' },
        { icon: ShieldCheck, text: 'Trusted Local Service', desc: 'Certified Quality' },
        { icon: MapPin, text: 'Serving All Bhopal', desc: 'Express Reach' },
    ];

    return (
        <div className="relative z-30 -mt-10 lg:-mt-12 px-4">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,51,102,0.1)] border border-slate-100 p-8 lg:p-10"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-slate-100">
                    {features.map((feature, index) => (
                        <motion.div 
                            key={index} 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col lg:flex-row items-center justify-center gap-4 px-2 group"
                        >
                            <div className="bg-brand-sky/10 p-3 rounded-2xl text-brand-sky group-hover:bg-brand-sky group-hover:text-white transition-all duration-300 shadow-inner">
                                <feature.icon size={28} />
                            </div>
                            <div className="text-center lg:text-left">
                                <p className="text-brand-blue font-black text-sm lg:text-base leading-tight uppercase tracking-tight">
                                    {feature.text}
                                </p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                                    {feature.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default TrustStrip;