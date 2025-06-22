import React from 'react';
import { motion } from 'framer-motion';
import Frame1 from '../../assets/frame1.png';
import Frame2 from '../../assets/frame2.png';
import Frame3 from '../../assets/frame3.png';
import Frame4 from '../../assets/frame4.png';
import Frame5 from '../../assets/frame5.png';
import Frame6 from '../../assets/frame6.png';



const sections = [
    {
        image: Frame1,
        title: 'Wedding celebrations',
        text: 'Make every wedding unforgettable with the perfect companion by your side, turning moments into memories. Thanks to Plus One.',
    },
    {
        image: Frame2,
        title: 'Corporate events & networking',
        text: 'Elevate your corporate events and networking experiences with a professional companion who complements your presence.',
    },
    {
        image: Frame3,
        title: 'Family gatherings',
        text: 'Bring warmth and ease to family gatherings with a friendly companion who blends in seamlessly and enhances every moment.',
    },
    {
        image: Frame4,
        title: 'Travel companions',
        text: 'Turn every journey into an unforgettable adventure with a travel companion who shares your excitement and makes every destination even more special.',
    },
    {
        image: Frame5,
        title: 'Local experiences & adventures',
        text: 'Discover the best of local experiences and adventures with a companion who makes every moment more exciting and memorable.',
    },
    {
        image: Frame6,
        title: 'Social functions & galas',
        text: 'Shine at social functions and galas with a charming companion who ensures you make a statement and enjoy every moment to the fullest.',
    },
];

// Animation variants
const itemVariantLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
};

const itemVariantRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
};

export default function Events() {
    return (
        <>
            <h1 className="text-center font-bold text-4xl py-10 bg-white">
                Plus One Perfect For
            </h1>
            <div className="relative h-[600vh] bg-white">

                {sections.map((section, idx) => {
                    const reverse = idx % 2 !== 0;
                    const textAnimation = reverse ? itemVariantLeft : itemVariantRight;
                    const imageAnimation = reverse ? itemVariantRight : itemVariantLeft;

                    return (
                        <div
                            key={idx}
                            className={`sticky top-0 h-screen z-[${idx + 1}] flex flex-col-reverse lg:flex-row ${reverse ? 'lg:flex-row-reverse' : ''
                                } items-center justify-center sm:justify-between  gap-24 sm:gap-10 px-4 sm:px-10 ${idx % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
                        >
                            {/* Text Section */}
                            <motion.div
                                variants={textAnimation}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                className="w-full max-w-xl text-center lg:text-left"
                            >
                                <h2 className="text-3xl sm:text-4xl font-semibold">
                                    {section.title}
                                </h2>
                                <p className="mt-4 text-base sm:text-lg text-gray-600">
                                    {section.text}
                                </p>
                            </motion.div>

                            {/* Image Section */}
                            <motion.img
                                variants={imageAnimation}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                src={section.image}
                                alt={section.title}
                                className="w-full max-w-md sm:max-w-lg xl:max-w-[500px] h-auto object-contain"
                            />
                        </div>
                    );
                })}
            </div></>

    );
}
