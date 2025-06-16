import React from 'react';
import { motion } from 'framer-motion';
import Man from '../../assets/man.svg';
import People from '../../assets/peoples.svg';
import Check from '../../assets/check.svg';
import Clock from '../../assets/clock.svg';
import Date from '../../assets/date.svg';

const features = [
    { icon: Man, title: 'Vetted Professionals', desc: 'Carefully selected companions who bring expertise, elegance, and a perfect match for every occasion.' },
    { icon: Check, title: 'Trusted Service', desc: 'Enjoy peace of mind with background-checked and verified individuals dedicated to client satisfaction.' },
    { icon: People, title: 'Socially Skilled', desc: 'Professionals who know how to blend in, communicate effectively, and create enjoyable experiences.' },
    { icon: Clock, title: 'On-Time & Reliable', desc: 'Punctual and professional, ensuring your plans go smoothly without delays or stress.' },
    { icon: Date, title: 'Memorable Moments', desc: 'Making every occasion meaningful and memorable through thoughtful presence and support.' },
];

const Choose = () => {
    return (
        // -------------Why Choose Us ----------------
        <section className="w-full container mx-auto bg-white py-12 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
            <motion.h1
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.6 }}
                className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold mb-12"
            >
                Why Choose Us
            </motion.h1>

            <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
                {features.map(({ icon, title, desc }, index) => (
                    <div
                        key={index}
                        className={`flex gap-4 items-start ${index === features.length - 1
                            ? 'md:col-span-2 md:justify-center'
                            : ''
                            }`}
                    >
                        <div className="bg-[#287EFF] p-9 rounded-2xl shrink-0">
                            <img src={icon} alt={title} className="w-8 h-8 " />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9, ease: 'easeOut' }}
                            viewport={{ once: false, amount: 0.5 }}
                            className="max-w-md"
                        >
                            <h2 className="text-lg sm:text-xl font-semibold mb-1">{title}</h2>
                            <p className="text-[#848485] text-sm sm:text-base">{desc}</p>
                        </motion.div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Choose;
