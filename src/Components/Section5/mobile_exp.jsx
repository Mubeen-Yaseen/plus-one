import React from 'react';
import { motion } from 'framer-motion';
import First_Mob from '../../assets/mob1.png';
import Second_Mob from '../../assets/mob2.png';
import Tick_check from '../../assets/tick-check.png';
import circle_tick from '../../assets/circle-check.png';

const MobileExp = () => {
    return (
        <>
            {/* Section 1 - Mobile Visual + Heading */}
            <div className="flex flex-col-reverse lg:flex-row items-center justify-around p-10 gap-10 xl:gap-0 overflow-x-hidden">
                {/* Text Section */}
                <motion.div
                    className="flex flex-col gap-2 text-center xl:text-left"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <p className="font-medium text-base  px-3">For More Convince Use Our</p>
                    <h1 className="text-blue-600 font-poppins font-semibold text-[clamp(4rem,7vw,6.5rem)] leading-[1.1] capitalize">
                        Plus One
                    </h1>
                    <h2 className="font-poppins font-medium text-[clamp(2rem,5vw,3.5rem)] capitalize leading-[1.2]">
                        Mobile App
                    </h2>
                </motion.div>

                {/* Animated Background & Mobiles */}
                <motion.div
                    className="flex bg-gray-100 rounded-full h-[20rem] sm:h-[25rem] xl:h-[28rem] px-4 items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    animate={{
                        backgroundColor: [
                            '#3B82F6', '#0EA5E9', '#14B8A6',
                            '#22D3EE', '#8B5CF6', '#E879F9',
                            '#2563EB', '#C084FC',
                        ],
                    }}
                    transition={{
                        backgroundColor: {
                            duration: 10,
                            ease: 'linear',
                            repeat: Infinity,
                            repeatType: 'mirror',
                        },
                        opacity: { duration: 0.8, ease: 'easeOut' },
                        y: { duration: 0.8, ease: 'easeOut' },
                        scale: { duration: 0.8, ease: 'easeOut' },
                    }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <img
                        src={Second_Mob}
                        alt="Mobile 2"
                        className="w-36 sm:w-44 md:w-52 h-full border-gray-300 rounded-3xl border-4 -rotate-[12deg]"
                    />
                    <img
                        src={First_Mob}
                        alt="Mobile 1"
                        className="w-36 sm:w-44 md:w-52 h-full border-gray-300 rounded-3xl border-4 rotate-[12deg]"
                    />
                </motion.div>
            </div>

            {/* Section 2 - Safety Info */}
            <div className="flex flex-col lg:flex-row items-center justify-around gap-10 px-6 py-20 bg-[#F9FAFC] overflow-x-hidden">
                {/* Left - Safety Title */}
                <motion.div
                    className="text-center xl:text-left max-w-lg"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: 'easeOut',
                    }}
                    viewport={{ once: false, amount: 0.8 }}
                >
                    <div className="flex items-center pl-9 xl:pl-0 justify-start gap-4 mb-4">
                        <img src={Tick_check} className="w-12 h-12 sm:w-16 sm:h-16" />
                        <h1 className="text-3xl sm:text-4xl font-medium capitalize">Safety First</h1>
                    </div>
                    <p className="text-sm sm:text-base">
                        Your security is our top priority. All our companions are:
                    </p>
                </motion.div>

                {/* Right - Features List */}
                <motion.div
                    className="flex flex-col gap-5 max-w-md w-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.2,
                            },
                        },
                    }}
                >
                    {[
                        'Thoroughly vetted',
                        'Background-checked',
                        'Verified through video calls',
                    ].map((item, idx) => (
                        <motion.span
                            key={idx}
                            className="flex gap-4 items-center"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                        >
                            <img src={circle_tick} alt="" className="h-6 w-6 sm:h-8 sm:w-8" />
                            <h2 className="font-poppins font-medium text-lg sm:text-2xl capitalize">
                                {item}
                            </h2>
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </>
    );
};

export default MobileExp;
