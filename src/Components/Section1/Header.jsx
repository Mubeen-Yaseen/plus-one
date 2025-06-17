import React, { useState, useEffect } from 'react';
import Hero from '../../assets/hero1.jpg';
import Color from '../../assets/colors.png';
import bars from '../../assets/bars-solid.svg';
import close from '../../assets/xmark-solid.svg';
import Icon from '../../assets/Icon.png';
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
    const [isOpen, setisOpen] = useState(false)
    const Togglebtn = () => setisOpen(prev => !prev)
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
            setIsPageLoaded(true);
        };

        if (document.readyState === "complete") {
            setIsPageLoaded(true);
        } else {
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);

    const navItems = [
        "Home",
        "How it Works",
        "Safety & Trust",
        "Contact Us",
    ];
    const menuVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.9, staggerChildren: 0.1 } },
        exit: { opacity: 0, x: -20, transition: { duration: 0.9 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <>
            <section className='relative w-screen h-screen flex justify-center overflow-hidden overflow-x-hidden' >
                <img src={Hero} alt="Hero" className='absolute w-full h-full inset-0 object-cover brightness-[0.9] contrast-[0.95] blur-[0.5px]' />
                {/* navbar */}
                {isPageLoaded && (
                    <motion.nav
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        className='absolute z-10 container mx-auto w-11/12 flex justify-between items-center border-[1.5px] border-gray-300 rounded-[10px] px-6 py-3 top-[30px] bg-black/40'
                    >
                        <div className='flex gap-2 justify-between items-center'>
                            <div>

                                <img src={Icon} alt="+1 Icon" className="w-auto h-auto" />

                            </div>
                            <div><h1 className='text-white font-extrabold'>Plus One</h1></div>
                        </div>

                        <ul className="hidden md:flex justify-between list-none w-auto gap-8 font-semibold text-base">
                            {navItems.map((item, index) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.9, delay: 0.5 + index * 0.1 }}
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

                        <motion.button
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="hidden md:block cursor-pointer rounded-sm bg-[#0066FF] hover:bg-[#0055cc] transition-all duration-300 transform hover:scale-105 text-white font-roboto font-bold text-base text-center px-4 py-3"
                        >
                            <span className="block lg:hidden">Join</span>
                            <span className="hidden lg:block">Join Waiting List Now</span>
                        </motion.button>

                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.1 }}
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="w-10 h-10 p-2 border-2 border-gray-600 rounded-md flex items-center justify-center md:hidden"
                            onClick={Togglebtn}
                        >
                            <motion.img
                                key={isOpen ? "close" : "bars"}
                                src={isOpen ? close : bars}
                                alt="Menu Icon"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="w-full h-full object-contain"
                            />
                        </motion.button>





                    </motion.nav>
                )}


                {/* resposive dropdown list items  */}
                <AnimatePresence>
                    {isOpen && isPageLoaded && (
                        <motion.ul
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="md:hidden w-[60%] h-screen  rounded-md absolute z-40  left-0 right-0 bg-white text-black/70 flex flex-col pl-8 gap-10 py-14 font-bold"
                        >
                            {navItems.map((item) => (
                                <motion.li key={item} variants={itemVariants}>
                                    <a
                                        href="#"
                                    >
                                        {item}
                                    </a>
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

                {/* certered Div   */}
                {isPageLoaded && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                        className="absolute z-20 container mx-auto p-6 w-3/4 md:w-[55%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] rounded-[24px] bg-black/60 top-[27%] text-white"
                    >
                        <div className="flex flex-col justify-between h-full items-start gap-2 lg:gap-6">
                            <img src={Color} alt="Color-Block" className="w-[80px] h-[16px] mb-4 lg:mb-0" />

                            <motion.h1
                                initial={{ opacity: 0, x: 80 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.9, ease: "easeOut", delay: 0.8 }}
                                className="font-poppins font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-9 md:leading-[72px] tracking-[0%]"
                            >
                                Your Perfect Plus One, On Demand
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 80 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
                                className="font-manrope font-normal text-sm lg:text-xl leading-[27.32px] tracking-[0%]"
                            >
                                Transform any occasion into a memorable experience with a carefully matched companion.
                            </motion.p>

                            <button
                                className="rounded-4xl cursor-pointer bg-[#0066FF] shadow-[0px_0px_20px_0px_#639AE19C] text-white font-poppins font-normal  leading-[22px] hover:scale-105 transition-all duration-300"
                            >
                                <motion.span
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.9, delay: 0.3 }}
                                    className="block sm:hidden text-sm lg:text-lg px-4 py-4 rounded-xl"
                                >
                                    Join
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.9, delay: 0.3 }}
                                    className="hidden sm:block px-[30px] py-[20px]"
                                >
                                    Join Waiting List Now
                                </motion.span>
                            </button>
                        </div>
                    </motion.div>
                )}

            </section>
        </>
    )
}

export default Header
