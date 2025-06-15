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
        reverse: false,
    },
    {
        image: Frame2,
        title: 'Corporate events & networking',
        text: 'Elevate your corporate events and networking experiences with a professional companion who complements your presence.',
        reverse: true,
    },
    {
        image: Frame3,
        title: 'Family gatherings',
        text: 'Bring warmth and ease to family gatherings with a friendly companion who blends in seamlessly and enhances every moment.',
        reverse: false,
    },
    {
        image: Frame4,
        title: 'Travel companions',
        text: 'Turn every journey into an unforgettable adventure with a travel companion who shares your excitement and makes every destination even more special.',
        reverse: true,
    },
    {
        image: Frame5,
        title: 'Local experiences & adventures',
        text: 'Discover the best of local experiences and adventures with a companion who makes every moment more exciting and memorable.',
        reverse: false,
    },
    {
        image: Frame6,
        title: 'Social functions & galas',
        text: 'Shine at social functions and galas with a charming companion who ensures you make a statement and enjoy every moment to the fullest.',
        reverse: true,
    },
];

// Animation Variants
const containerVariant = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const itemVariantLeft = {
    hidden: { opacity: 1, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: 'linear',
        },
    },
};

const itemVariantRight = {
    hidden: { opacity: 1, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: 'linear',
        },
    },
};

const Info = () => {
    return (
        <div className="w-full">
            <motion.h1
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.3 }}
                className="py-20 md:pb-20 md:pt-10 lg:pt-10 xl:pt-0 font-poppins font-semibold text-[35px] sm:text-[40px] md:text-[50px] lg:text-[56px] leading-[110%] tracking-tight text-center"
            >
                Plus One Perfect For
            </motion.h1>

            {sections.map((section, idx) => {
                const textAnimation = section.reverse ? itemVariantRight : itemVariantLeft;
                const imageAnimation = section.reverse ? itemVariantLeft : itemVariantRight;

                return (
                    <motion.div
                        key={idx}
                        variants={containerVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.01 }}
                        className={`w-full py-16 px-10 ${idx % 2 === 0 ? 'bg-[#F9FAFC]' : 'bg-white'
                            } flex flex-col-reverse xl:flex-row ${section.reverse ? 'xl:flex-row-reverse' : ''
                            } items-center justify-between gap-10`}
                    >
                        <motion.div
                            variants={textAnimation}
                            className="max-w-xl text-center xl:text-left"
                        >
                            <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-semibold leading-tight">
                                {section.title}
                            </h2>
                            <p className="text-base sm:text-lg text-[#535353] mt-4">
                                {section.text}
                            </p>
                        </motion.div>

                        <motion.img
                            variants={imageAnimation}
                            src={section.image}
                            alt={section.title}
                            className="w-full max-w-md sm:max-w-lg xl:max-w-[500px] h-auto object-contain"
                        />
                    </motion.div>
                );
            })}
        </div>
    );
};

export default Info;
