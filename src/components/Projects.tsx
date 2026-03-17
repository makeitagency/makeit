"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        number: "01",
        title: "LIDHERMA",
        category: "SKINCARE & CONTENT",
        description: "Dirección de arte y producción de contenido visual para lanzamientos de cosmética profesional.",
        image: "/images/TheWorks/32.png",
    },
    {
        number: "02",
        title: "TROMEN",
        category: "LIFESTYLE & CONTENT",
        description: "Capturamos la calidez y el diseño de piezas líderes en calefacción y deco.",
        image: "/images/TheWorks/27.png",
    },
    {
        number: "03",
        title: "IL GIOIELLO JOYAS",
        category: "JEWELRY & CONTENT",
        description: "Producción de contenido humanizado y fotografía de producto para alta joyería.",
        image: "/images/TheWorks/30.png",
    },
    {
        number: "04",
        title: "HOTEL GRAND BRIZO",
        category: "HOSPITALITY & CONTENT",
        description: "Estrategia visual y contenido de lifestyle para una de las cadenas hoteleras más exclusivas.",
        image: "/images/TheWorks/13.png",
    },
    {
        number: "05",
        title: "MINI JULI BABY",
        category: "KIDS FASHION",
        description: "Dulzura y estética cuidada en producciones de moda infantil.",
        image: "/images/TheWorks/19.png",
    },
    {
        number: "06",
        title: "KUTIKA",
        category: "KIDS DECO & TOYS",
        description: "Estrategia de marca y contenido para universos de juego y decoración infantil.",
        image: "/images/TheWorks/20.png",
    },
    {
        number: "07",
        title: "TIERRA BRUTA",
        category: "HOME DECO & DESIGN",
        description: "Minimalismo y calidez en producciones de vajilla y accesorios de diseño.",
        image: "/images/TheWorks/25.png",
    },
    {
        number: "08",
        title: "FABRIC",
        category: "INTERIOR DESIGN",
        description: "Capturamos el confort y la calidad en producciones de sofás y mobiliario de alta gama.",
        image: "/images/TheWorks/26.png",
    },
    {
        number: "09",
        title: "KONSENTIDOS",
        category: "FURNITURE & DESIGN",
        description: "Fotografía y estrategia visual para mobiliario con terminaciones artesanales.",
        image: "/images/TheWorks/28.png",
    },
    {
        number: "10",
        title: "GINGER & COCO",
        category: "HOTEL BOUTIQUE",
        description: "Contenido aspiracional y branding para experiencias de hospedaje exclusivas.",
        image: "/images/TheWorks/10.png",
    },
    {
        number: "11",
        title: "HOTEL DAZZLER",
        category: "SOCIAL MEDIA STRATEGY",
        description: "Gestión y producción de contenido dinámico para el sector hotelero.",
        image: "/images/TheWorks/14.png",
    }
];

const clients = [
    { name: "Danone", logo: "/images/Clients/Danone-Logo-PNG.png" },
    { name: "Johnnie Walker", logo: "/images/Clients/Johnnie-Walker-Logo-PNG.png" },
    { name: "McDonalds", logo: "/images/Clients/7.png", multiply: true, scale: 0.8 },
    { name: "Chevrolet", logo: "/images/Clients/chevrolet logo.png" },
    { name: "Danonino", logo: "/images/Clients/danonino logo.png", scale: 3.0 },
    { name: "Hasbro", logo: "/images/Clients/hasbro.png" },
    { name: "Huggies", logo: "/images/Clients/huggies logo.png" },
    { name: "L'Oreal", logo: "/images/Clients/loreal paris logo.png" },
    { name: "Mercado Libre", logo: "/images/Clients/mercado-libre-seeklogo.png" },
    { name: "Suzuki", logo: "/images/Clients/suzuki logo.png", scale: 2.4 },
    { name: "Tissot", logo: "/images/Clients/8.png", multiply: true },
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

                {/* Projects List - Alternating Editorial Layout */}
                <div className="space-y-24 md:space-y-36 lg:space-y-48">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col lg:flex-row gap-12 lg:gap-32 items-center lg:items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Project Info */}
                            <div className="w-full lg:w-[40%] space-y-8">
                                <div className="relative">
                                    <span className="font-heading text-brand-stone text-7xl md:text-9xl opacity-[0.05] absolute -top-12 -left-4 leading-none select-none">
                                        {project.number}
                                    </span>
                                    <div className="relative z-10">
                                        <p className="text-xs font-bold uppercase tracking-[0.4em] text-brand-stone mb-4">
                                            {project.category}
                                        </p>
                                        <h3 className="text-4xl md:text-5xl lg:text-6xl text-brand-black tracking-tighter italic leading-tight uppercase">
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>

                                <p className="text-lg md:text-xl text-brand-black/60 leading-relaxed font-sans max-w-md">
                                    {project.description}
                                </p>

                                <Link
                                    href="#contacto"
                                    className={`flex items-center gap-4 group ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                        }`}
                                >
                                    <motion.div
                                        whileHover={{ x: index % 2 === 0 ? 15 : -15 }}
                                        className="h-14 w-14 rounded-full border border-brand-black/10 flex items-center justify-center group-hover:bg-brand-black group-hover:border-brand-black transition-all duration-500"
                                    >
                                        <ArrowUpRight className="text-brand-black group-hover:text-white transition-colors duration-500" size={24} />
                                    </motion.div>
                                    <span className="font-bold text-xs uppercase tracking-widest text-brand-black/50 group-hover:text-brand-black transition-colors duration-500">LO QUIERO PARA MI MARCA</span>
                                </Link>
                            </div>

                            {/* Project Image */}
                            <div className="w-full lg:w-[60%] group/img">
                                <motion.div
                                    whileHover={{ scale: 0.98 }}
                                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                                    className="relative aspect-4/3 lg:aspect-video rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,0,0.18)]"
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover/img:scale-110"
                                        priority={index === 0}
                                    />
                                    <div className="absolute inset-0 bg-brand-black/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Dual Infinite Marquees - Full Width Breakout */}
            <div className="mt-32 space-y-8 relative overflow-hidden group/container w-full">
                {/* Row 1: Left */}
                <div className="flex marquee-content gap-4">
                    {[...carruselImages.slice(0, 8), ...carruselImages.slice(0, 8)].map((img, idx) => (
                        <div 
                            key={`r1-${idx}`} 
                            className="relative flex-none w-[70vw] md:w-[500px] aspect-video rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.02]"
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
                            className="relative flex-none w-[70vw] md:w-[500px] aspect-video rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.02]"
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
