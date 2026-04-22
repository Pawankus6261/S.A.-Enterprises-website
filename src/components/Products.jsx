import React from 'react';
import { motion } from 'framer-motion';
// FIXED: Added 'ArrowRight' to the imports below
import { Star, Package, CheckCircle2, ArrowRight } from 'lucide-react';

const Products = () => {
    const products = [
        {
            id: 1,
            name: '20L Mineral Jar',
            price: '₹30.00',
            img: '/src/assets/bottle-isolated.png',
            label: 'Most Popular',
            desc: 'Daily doorstep supply with leak-proof seal and certified minerals.'
        },
        {
            id: 2,
            name: 'Chilled Camper',
            price: 'Custom Pricing',
            img: '/src/assets/camper.png',
            label: 'Events & Shops',
            desc: 'Insulated campers that keep water chilled for 12+ hours.'
        },
        {
            id: 3,
            name: 'Party Pouches',
            price: 'Bulk Rates',
            img: '/src/assets/water-pouch.png',
            label: 'Weddings',
            desc: 'Hygienic 200ml/250ml pouches for large gatherings and parties.'
        },
    ];

    return (
        <section id="products" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-brand-sky font-black text-xs uppercase tracking-[0.3em] block mb-4"
                    >
                        Our Inventory
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-brand-blue"
                    >
                        Solutions We <span className="text-brand-sky text-stroke">Deliver</span>
                    </motion.h2>
                    <div className="h-1.5 w-24 bg-brand-sky mx-auto mt-6 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {products.map((p, i) => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-[2.5rem] p-8 shadow-xl hover:shadow-2xl transition-all group relative border border-slate-100 flex flex-col h-full"
                        >
                            {/* Product Badge */}
                            <div className="absolute top-6 left-6 z-20">
                                <span className="bg-brand-sky/10 text-brand-sky text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest border border-brand-sky/20">
                                    {p.label}
                                </span>
                            </div>

                            {/* Image Container */}
                            <div className="h-64 flex items-center justify-center bg-brand-light rounded-3xl mb-8 overflow-hidden relative group-hover:bg-blue-50 transition-colors">
                                <div className="absolute inset-0 bg-gradient-to-tr from-brand-sky/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <img
                                    src={p.img}
                                    alt={p.name}
                                    className="h-full object-fit group-hover:scale-110 transition-transform duration-700 select-none"
                                />
                            </div>

                            {/* Product Info */}
                            <div className="text-left flex flex-col flex-grow">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-2xl font-black text-brand-blue">{p.name}</h3>
                                    <div className="flex text-yellow-400">
                                        <Star size={14} fill="currentColor" />
                                        <Star size={14} fill="currentColor" />
                                        <Star size={14} fill="currentColor" />
                                    </div>
                                </div>
                                <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6">
                                    {p.desc}
                                </p>

                                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Starting From</p>
                                        <p className="text-2xl font-black text-brand-blue">{p.price}</p>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <div className="flex items-center gap-1 text-brand-green font-bold text-xs">
                                            <CheckCircle2 size={14} /> Available
                                        </div>
                                        <p className="text-[10px] text-slate-400 font-medium">Across Bhopal</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-16 mx-auto max-w-2xl bg-white rounded-2xl p-6 border-2 border-slate-100 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
                >
                    <div className="flex items-center gap-4">
                        <div className="bg-brand-sky/10 p-3 rounded-xl text-brand-sky">
                            <Package size={28} />
                        </div>
                        <div>
                            <p className="text-brand-blue font-black text-lg leading-tight">Bulk Order?</p>
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Weddings & Events</p>
                        </div>
                    </div>

                    <a
                        href="#delivery"
                        className="group flex items-center gap-3 px-6 py-3 bg-brand-blue text-white font-bold rounded-xl hover:bg-brand-sky transition-all shadow-lg shadow-brand-blue/20"
                    >
                        <span>Get Quote</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Products;