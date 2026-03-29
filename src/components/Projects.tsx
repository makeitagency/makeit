"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


const projectImages = [
    "/images/TheWorks/32.png",
    "/images/TheWorks/27.png",
    "/images/TheWorks/30.png",
    "/images/TheWorks/13.png",
    "/images/TheWorks/19.png",
    "/images/TheWorks/20.png",
    "/images/TheWorks/25.png",
    "/images/TheWorks/26.png",
    "/images/TheWorks/28.png",
    "/images/TheWorks/10.png",
    "/images/TheWorks/14.png",
];

const clients = [
    { name: "Danone", logo: "/images/Clients/Danone-Logo-PNG.png" },
    { name: "Johnnie Walker", logo: "/images/Clients/Johnnie-Walker-Logo-PNG.png" },
    { name: "McDonalds", logo: "/images/Clients/mc-logo.png", multiply: true, scale: 2.2 },
    { name: "Chevrolet", logo: "/images/Clients/chevrolet logo.png" },
    { name: "Danonino", logo: "/images/Clients/danonino logo.png", scale: 3.0 },
    { name: "Hasbro", logo: "/images/Clients/hasbro.png" },
    { name: "Huggies", logo: "/images/Clients/huggies logo.png" },
    { name: "L'Oreal", logo: "/images/Clients/loreal paris logo.png" },
    { name: "Mercado Libre", logo: "/images/Clients/mercado-libre-seeklogo.png" },
    { name: "Suzuki", logo: "/images/Clients/suzuki logo.png", scale: 2.4 },
    { name: "Tissot", logo: "/images/Clients/tissot-logo.png", multiply: true, scale: 2.2 },
];

const carruselImages = [
    "WhatsApp Image 2026-03-05 at 17.06.29.jpeg",
    "WhatsApp Image 2026-03-05 at 17.06.30 (1).jpeg",
    "WhatsApp Image 2026-03-05 at 17.06.30.jpeg",
    "WhatsApp Image 2026-03-05 at 17.06.31 (1).jpeg",
    "WhatsApp Image 2026-03-05 at 17.06.31 (2).jpeg",
    "WhatsApp Image 2026-03-05 at 17.06.31.jpeg",
    "WhatsApp Image 2026-03-05 at 17.06.32 (1).jpeg",
    "WhatsApp Image 2026-03-05 at 17.06.32.jpeg",
    "WhatsApp Image 2026-03-05 at 17.06.33 (1).jpeg",
    "WhatsApp Image 2026-03-05 at 17.06.33 (2).jpeg",
    "WhatsApp Image 2026-03-05 at 17.06.33.jpeg",
    "WhatsApp Image 2026-03-05 at 17.06.34 (1).jpeg",
    "WhatsApp Image 2026-03-05 at 17.06.34 (2).jpeg",
    "WhatsApp Image 2026-03-05 at 17.06.34 (3).jpeg",
    "WhatsApp Image 2026-03-05 at 17.06.34.jpeg",
    "WhatsApp Image 2026-03-05 at 17.06.35.jpeg",
].map(img => `/images/TheWorks/carrusel/${img}`);

export default function Projects() {
    return (
        <section id="proyectos" className="bg-background py-12 md:py-20 relative overflow-hidden">
            {/* Background Decorative Text */}
            <div className="absolute top-0 right-0 opacity-[0.03] select-none pointer-events-none translate-x-1/4">
                <span className="text-[25vw] font-bold leading-none">WORKS</span>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                {/* Header */}
                <div className="mb-16 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-px w-12 bg-brand-stone" />
                            <span className="font-heading text-brand-stone tracking-[0.2em] text-sm uppercase">Selected Portfolio</span>
                        </div>
                        <h2 className="text-[10vw] lg:text-[5.5vw] text-brand-black leading-[0.95] tracking-tighter">
                            THE <br />
                            <span className="text-brand-stone font-highlight uppercase">Works</span>
                        </h2>
                    </motion.div>
                </div>

            </div>

            {/* Carruseles 1 y 2 - Project Images */}
            <div className="mt-16 space-y-8 relative overflow-hidden w-full">
                {/* Row 1: Left */}
                <div className="flex marquee-content gap-4">
                    {[...projectImages.slice(0, 6), ...projectImages.slice(0, 6)].map((img, idx) => (
                        <div
                            key={`p1-${idx}`}
                            className="relative flex-none w-[70vw] md:w-125 aspect-video rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.02]"
                        >
                            <Image
                                src={img}
                                alt={`Project Row 1 ${idx}`}
                                fill
                                sizes="(max-width: 768px) 70vw, 500px"
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Row 2: Right */}
                <div className="flex marquee-content-reverse gap-4">
                    {[...projectImages.slice(5), ...projectImages.slice(5)].map((img, idx) => (
                        <div
                            key={`p2-${idx}`}
                            className="relative flex-none w-[70vw] md:w-125 aspect-video rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.02]"
                        >
                            <Image
                                src={img}
                                alt={`Project Row 2 ${idx}`}
                                fill
                                sizes="(max-width: 768px) 70vw, 500px"
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Carruseles 3 y 4 - Carrusel Images */}
            <div className="mt-8 space-y-8 relative overflow-hidden w-full">
                {/* Row 1: Left */}
                <div className="flex marquee-content gap-4">
                    {[...carruselImages.slice(0, 8), ...carruselImages.slice(0, 8)].map((img, idx) => (
                        <div 
                            key={`r1-${idx}`} 
                            className="relative flex-none w-[70vw] md:w-125 aspect-video rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.02]"
                        >
                            <Image
                                src={img}
                                alt={`Work Row 1 ${idx}`}
                                fill
                                sizes="(max-width: 768px) 70vw, 500px"
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Row 2: Right */}
                <div className="flex marquee-content-reverse gap-4">
                    {[...carruselImages.slice(8), ...carruselImages.slice(8)].map((img, idx) => (
                        <div 
                            key={`r2-${idx}`} 
                            className="relative flex-none w-[70vw] md:w-125 aspect-video rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.02]"
                        >
                            <Image
                                src={img}
                                alt={`Work Row 2 ${idx}`}
                                fill
                                sizes="(max-width: 768px) 70vw, 500px"
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                {/* Clients Section */}
                <div className="mt-20 md:mt-32 pt-10 border-t border-brand-black/5">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h3 className="text-3xl md:text-5xl font-black text-brand-black tracking-tighter uppercase italic">
                            Las marcas que ya <span className="text-brand-stone not-italic">confiaron en nosotras</span>
                        </h3>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-20 items-center justify-items-center opacity-70">
                        {clients.map((client) => (
                            <motion.div
                                key={client.name}
                                whileHover={{ scale: 1.05, opacity: 1 }}
                                className="relative w-40 h-20 md:w-56 md:h-28 flex items-center justify-center filter grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
                            >
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    fill
                                    className="object-contain"
                                    style={{
                                        transform: client.scale ? `scale(${client.scale})` : undefined,
                                        mixBlendMode: (client.multiply ? 'multiply' : 'normal') as React.CSSProperties['mixBlendMode']
                                    }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 md:mt-24 text-center"
                >
                    <p className="font-sans text-brand-black/40 text-sm md:text-base uppercase font-bold tracking-[0.2em] mb-12">
                        Make It Powerful. Make It Bigger. 💎 Make It Expand. make it different...
                    </p>
                    <Link
                        href="#contacto"
                    >
                        <h4 className="text-[8vw] text-brand-black tracking-tighter hover:text-brand-stone transition-colors cursor-pointer font-light">
                            LET&apos;S <span className="font-bold">MAKE IT</span> REAL
                        </h4>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
