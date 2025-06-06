import React, { useState } from 'react';
import Hero from '../../assets/hero1.jpg';
import Color from '../../assets/colors.png';
import bars from '../../assets/bars-solid.svg';
import close from '../../assets/xmark-solid.svg';
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
    const [isOpen, setisOpen] = useState(false)
    const Togglebtn = () => setisOpen(prev => !prev)

    const navItems = [
        "Home",
        "How it Works",
        "Safety & Trust",
        "Contact Us",
    ];
    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, staggerChildren: 0.1 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <>
            <section className='relative w-screen h-screen flex justify-center' >
                <img src={Hero} alt="Hero" className='absolute  w-full h-full inset-0 object-cover' />
                <nav className='absolute z-10 container mx-auto flex justify-between items-center border-[1.5px] border-gray-300 rounded-[10px] px-6 py-3 top-[30px] bg-black/40'>
                    <div className='flex gap-2 justify-between items-center'>
                        <div>
                            <button className="w-[41px] h-[40px] rounded-sm bg-[#0066FF] text-white font-roboto font-extrabold pb-[2px] pr-[4px]">+1
                            </button>
                        </div>
                        <div><h1 className='text-white font-extrabold'>Plus One</h1></div>
                    </div>

                    <ul className="hidden md:flex justify-between list-none w-auto gap-8 font-semibold text-base">
                        {navItems.map((item, index) => (
                            <motion.li
                                key={item}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 * index }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <a
                                    href="#"
                                    className="text-white relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white hover:after:w-full after:transition-all after:duration-300"
                                >
                                    {item}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                    <button className="hidden md:block cursor-pointer rounded-sm bg-[#0066FF] hover:bg-[#0055cc] transition-all duration-300 transform hover:scale-105 text-white font-roboto font-bold text-base text-center px-4 py-3">
                        <span className="block lg:hidden">Join</span>
                        <span className="hidden lg:block">Join Waiting List Now</span>
                    </button>

                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        className="w-6 cursor-pointer block md:hidden"
                        onClick={Togglebtn}
                    >
                        <motion.img
                            key={isOpen ? "close" : "bars"}
                            src={isOpen ? close : bars}
                            alt="Menu Icon"
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.button>


                </nav>


                <AnimatePresence>
                    {isOpen && (
                        <motion.ul
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="md:hidden absolute z-40 top-[90px] left-0 right-0 bg-black/60 text-white flex flex-col pl-8 gap-4 py-6"
                        >
                            {navItems.map((item) => (
                                <motion.li key={item} variants={itemVariants}>
                                    <a href="#" className="hover:bg-blue-400">{item}</a>
                                </motion.li>
                            ))}
                            <motion.li variants={itemVariants}>
                                <button className="mt-4 bg-[#0066FF] px-4 py-2 rounded-sm text-white font-semibold">
                                    Join Now
                                </button>
                            </motion.li>
                        </motion.ul>
                    )}
                </AnimatePresence>

                <div className="absolute z-20 container mx-auto p-6  w-3/4  md:w-[55%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] rounded-[24px] bg-black/60 top-[27%] text-white lg:h-full">

                    <div className="flex flex-col justify-between h-full items-start gap-6">
                        <img src={Color} alt="Color-Block" className="w-[80px] h-[16px]" />

                        <motion.h1
                            initial={{ opacity: 0, x: 80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            className="font-poppins font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-9 md:leading-[72px] tracking-[0%]"
                        >
                            Your Perfect Plus One, On Demand
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="font-manrope font-normal text-[20px] leading-[27.32px] tracking-[0%]"
                        >
                            Transform any occasion into a memorable experience with a carefully matched companion.
                        </motion.p>

                        <button
                            className="rounded-4xl px-[30px] py-[20px] cursor-pointer bg-[#0066FF] shadow-[0px_0px_20px_0px_#639AE19C] text-white font-poppins font-normal text-[23px] leading-[22px] hover:scale-105 transition-all duration-300"
                        >
                            {/* Animate Mobile Text */}
                            <motion.span
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="block sm:hidden"
                            >
                                Join
                            </motion.span>

                            {/* Animate Desktop Text */}
                            <motion.span
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="hidden sm:block"
                            >
                                Join Waiting List Now
                            </motion.span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header
