"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="section-padding bg-background relative overflow-hidden">
            {/* Background Decorative Text */}
            <div className="absolute top-0 right-0 opacity-[0.03] select-none pointer-events-none translate-x-1/4 -translate-y-1/4">
                <span className="text-[30vw] font-bold leading-none">Make It</span>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

                    {/* Left Column: Heading & Image */}
                    <div className="lg:col-span-5 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative"
                        >
                            <div className="aspect-3/4 relative rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)]">
                                <Image
                                    src="/images/5.png"
                                    alt="The Founders"
                                    fill
                                    className="object-cover scale-105 hover:scale-100 transition-transform duration-1000"
                                />
                            </div>
                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -right-6 bg-brand-black text-white p-8 rounded-3xl shadow-2xl hidden md:block">
                                <p className="font-heading font-bold text-2xl leading-none">EST. 2024</p>
                                <p className="text-[10px] uppercase tracking-[0.3em] mt-2 opacity-50">Creative Studio</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="lg:col-span-7 order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-[2px] w-12 bg-brand-stone" />
                                <span className="font-heading text-brand-black tracking-widest text-sm uppercase">About the minds</span>
                            </div>

                            <h2 className="text-[10vw] lg:text-[5.5vw] text-brand-black leading-[0.95] mb-10 tracking-tighter">
                                THE <br />
                                <span className="text-brand-stone font-highlight">FOUNDERS</span>
                            </h2>

                            <div className="space-y-8 max-w-2xl">
                                <div className="text-lg md:text-xl text-brand-black/60 leading-relaxed font-sans">
                                    <p className="mb-8">
                                        Creamos estrategias personalizadas que fusionan creatividad, diseño y marketing digital. No somos solo una agencia.
                                    </p>
                                    
                                    <div className="space-y-6">
                                        <p className="font-heading text-3xl md:text-4xl text-brand-black leading-tight italic">
                                            Desarrollamos marcas que quieren expandirse a través de estrategias de comunicación.
                                        </p>
                                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-black">
                                            No hacemos sólo marketing. <span className="text-brand-stone">Construimos negocios con visión.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Closure Section - Designer Feedback */}
                            <div className="mt-16 pt-12 border-t border-brand-black/5">
                                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-stone mb-4">Brand Strategy & Business Consulting</p>
                                <h3 className="text-3xl md:text-5xl font-heading text-brand-black leading-tight tracking-tighter">
                                    Si tu negocio quiere crecer, <br />
                                    <span className="italic text-brand-stone">lo pensamos distinto.</span>
                                </h3>
                            </div>

                            {/* Founders Names - At the very bottom */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 pt-16 border-t border-brand-black/10">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="group"
                                >
                                    <p className="font-heading text-brand-black text-xl md:text-2xl tracking-tighter mb-4">Manu Fretes</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-px bg-brand-stone group-hover:w-12 transition-all duration-300" />
                                        <p className="text-xs font-bold uppercase tracking-widest text-brand-black/40">Co-Founder & Creative</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="group"
                                >
                                    <p className="font-heading text-brand-black text-xl md:text-2xl tracking-tighter mb-4">Estefi De La Barra</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-px bg-brand-stone group-hover:w-12 transition-all duration-300" />
                                        <p className="text-xs font-bold uppercase tracking-widest text-brand-black/40">Co-Founder & Design</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
