import React from 'react';
import { motion } from 'framer-motion';
import { Home, PartyPopper, Building2, ChevronRight } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: 'Home Water Delivery',
            icon: Home,
            timing: '8:00 AM – 5:00 PM',
            desc: 'Regular daily water supply for your home. Clean, hygienic, and on-time.',
            color: 'bg-blue-50'
        },
        {
            title: 'Party & Wedding Supply',
            icon: PartyPopper,
            timing: 'Flexible / On Demand',
            desc: 'Bulk water supply for Shadi, parties, and events. We ensure you never run out.',
            color: 'bg-green-50'
        },
        {
            title: 'Commercial Supply',
            icon: Building2,
            timing: 'Custom Schedule',
            desc: 'Reliable water solutions for shops, offices, and small businesses.',
            color: 'bg-purple-50'
        },
    ];

    return (
        <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-brand-sky font-black text-xs uppercase tracking-[0.3em] block mb-4"
                    >
                        Our Expertise
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-brand-blue"
                    >
                        Professional Water <span className="text-brand-sky text-stroke">Solutions</span>
                    </motion.h2>
                    <div className="h-1.5 w-24 bg-brand-sky mx-auto mt-6 rounded-full" />
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-[2.5rem] p-10 shadow-xl hover:shadow-2xl transition-all group border border-slate-100 flex flex-col h-full"
                        >
                            <div className={`${service.color} w-20 h-20 rounded-3xl flex items-center justify-center mb-8 mx-auto lg:mx-0 group-hover:scale-110 transition-transform duration-500`}>
                                <service.icon className="h-10 w-10 text-brand-blue" />
                            </div>
                            
                            <h3 className="text-2xl font-black text-slate-900 mb-4 text-center lg:text-left">
                                {service.title}
                            </h3>
                            
                            <div className="text-[10px] font-black text-brand-green mb-6 text-center lg:text-left bg-green-50 py-1.5 px-4 rounded-full inline-block self-center lg:self-start uppercase tracking-widest border border-green-100">
                                {service.timing}
                            </div>
                            
                            <p className="text-slate-500 font-medium leading-relaxed text-center lg:text-left mb-8 flex-grow">
                                {service.desc}
                            </p>
                            
                            <div className="mt-auto flex items-center justify-center lg:justify-start gap-2 text-brand-blue font-black text-sm group-hover:text-brand-sky transition-colors cursor-pointer">
                                Learn More <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;