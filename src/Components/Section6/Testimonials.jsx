import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LeftArrow from '../../assets/arrow-left.svg';
import RightArrow from '../../assets/arrow-right.svg';

const testimonials = [
    {
        name: "Michael R",
        role: "Client",
        message:
            "Moving to a new city, having a companion to explore with made everything less daunting and more fun.",
        img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "Sarah M.",
        role: "Client",
        message:
            "I was nervous about attending my ex’s wedding alone, but my companion made the evening actually enjoyable!",
        img: "https://randomuser.me/api/portraits/women/47.jpg",
    },
    {
        name: "James T",
        role: "Client",
        message:
            "As a business traveler, having a local companion to attend client dinners has been game-changing and great company.",
        img: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    {
        name: "Emily D",
        role: "Client",
        message:
            "My companion made my weekend trip to a new city so much more enjoyable and stress-free!",
        img: "https://randomuser.me/api/portraits/women/60.jpg",
    },
    {
        name: "Carlos V",
        role: "Client",
        message:
            "I was surprised how professional and thoughtful the experience was. Highly recommend!",
        img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
        name: "Nina L",
        role: "Client",
        message:
            "Loved the energy and the great conversations throughout the evening. Felt very natural.",
        img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
];

const Testimonials = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [clicked, setClicked] = useState(null); // "prev", "next", or null

    const getVisibleTestimonials = () => {
        if (testimonials.length < 3) return testimonials;

        if (startIndex + 3 <= testimonials.length) {
            return testimonials.slice(startIndex, startIndex + 3);
        } else {
            const endSlice = testimonials.slice(startIndex);
            const startSlice = testimonials.slice(0, 3 - endSlice.length);
            return [...endSlice, ...startSlice];
        }
    };

    const visibleTestimonials = getVisibleTestimonials();

    const prevTestimonial = () => {
        setStartIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : (prev - 1) % testimonials.length
        );
    };

    const nextTestimonial = () => {
        setStartIndex((prev) => (prev + 1) % testimonials.length);
    };

    return (
        <div id='safety' className="flex flex-col items-center justify-center py-10">
            <motion.h1
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.3 }}
                className="font-poppins font-semibold text-[35px] sm:text-[40px] md:text-[50px] lg:text-[56px] leading-[110%] tracking-tight text-center mb-10"
            >
                Client Testimonials
            </motion.h1>

            <div className="flex gap-6 flex-wrap justify-center max-w-6xl">
                {visibleTestimonials.map((item, index) => {
                    const isActive = index === 1;
                    return (
                        <div
                            key={index}
                            className={`rounded-xl p-6 shadow-md w-80 transition-all duration-300 text-center ${isActive
                                ? 'bg-gradient-to-br from-blue-500 to-blue-700 text-white scale-105'
                                : 'bg-white text-black'
                                }`}
                        >
                            <div className="flex gap-4 items-center justify-center mb-4">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className={`w-16 h-16 rounded-full ${isActive ? 'border-2 border-white' : ''}`}
                                />
                                <div className="text-left">
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <p className={`text-sm ${isActive ? 'text-blue-100' : 'text-gray-500'}`}>
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                            <p className={`italic text-sm ${isActive ? 'text-white' : 'text-gray-700'}`}>
                                "{item.message}"
                            </p>
                        </div>
                    );
                })}
            </div>

            {/* Arrows */}
            <div className="flex gap-4 items-center mt-10">
                {/* Previous Arrow */}
                <button
                    onClick={() => {
                        setClicked("prev");
                        prevTestimonial();
                    }}
                    className={`cursor-pointer p-4 rounded-full transition hover:bg-[#0066FF] ${clicked === "prev" ? "bg-[#0066FF]" : "bg-[#F5F7FF]"}`}
                >
                    <img
                        src={LeftArrow}
                        alt="Previous"
                        className={`w-6 h-6 transition hover:invert hover:brightness-0 ${clicked === "prev" ? "invert brightness-0" : "opacity-60 brightness-0"}`}
                    />
                </button>

                {/* Next Arrow */}
                <button
                    onClick={() => {
                        setClicked("next");
                        nextTestimonial();
                    }}
                    className={`cursor-pointer p-4 rounded-full transition hover:bg-[#0066FF] ${clicked === "next" ? "bg-[#0066FF]" : "bg-[#F5F7FF]"}`}
                >
                    <img
                        src={RightArrow}
                        alt="Next"
                        className={`w-6 h-6 transition hover:invert hover:brightness-0 ${clicked === "next" ? "invert brightness-0" : "opacity-60 brightness-0"}`}
                    />
                </button>
            </div>
        </div>
    );
};

export default Testimonials;
