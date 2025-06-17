import React from 'react';
import { motion } from 'framer-motion';
import Frame from '../../assets/frame_bottom.png';

const JoinWaitinglist = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }} // <== animation every time on scroll
            className="relative flex flex-col-reverse xl:flex-row overflow-hidden py-12 px-6 sm:px-10 lg:px-16 bg-gradient-to-l from-blue-500 to-blue-900 rounded-3xl text-white container mx-auto w-[95%] xl:w-[85%]"
        >
            {/* Background Ellipses for large screens only */}
            <div className="absolute inset-0 z-0 hidden xl:block">
                <img
                    src={Frame}
                    alt="Decorative Frame"
                    className="w-[65%] opacity-40 absolute top-0 left-0 h-full"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 w-full">
                {/* Left Section - Heading */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="w-full lg:w-1/2 text-center lg:text-left"
                >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-6xl font-semibold mb-4 leading-snug">
                        Ready To Make Your Next Event Unforgettable?
                    </h1>
                </motion.div>

                {/* Right Section - Paragraph + Button */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="w-full h-[90%] lg:w-1/2 flex flex-col items-center lg:items-start justify-around gap-6 text-center lg:text-left"
                >
                    <p className="text-base xl:leading-10 xl:w-5/6">
                        Don’t go solo—hire the perfect companion for your next event or trip. Book your Plus One now and make sure you never miss out on a great experience!
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="bg-white cursor-pointer text-blue-600 text-base sm:text-lg font-semibold px-6 py-3 rounded-full shadow-lg"
                    >
                        Join Waiting List Now
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default JoinWaitinglist;
