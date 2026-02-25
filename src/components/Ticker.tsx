"use client";

const items = [
    { text: "Brand Strategy", type: "heading" },
    { text: "Business Consulting", type: "heading" },
    { text: "MAKE IT REAL", type: "heading" },
    { text: "Creative Minds", type: "heading" },
];

export default function Ticker() {
    return (
        <div className="py-4 border-y border-brand-black/5 overflow-hidden bg-brand-black relative z-20">
            <div className="marquee-content whitespace-nowrap flex items-center gap-16">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center gap-16">
                        {items.map((item, idx) => (
                            <span
                                key={`${item.text}-${idx}`}
                                className="font-heading text-lg md:text-xl text-white tracking-wide flex items-center gap-16"
                            >
                                {item.text}
                                <span className="text-white/20 font-heading text-xl md:text-2xl">/</span>
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
