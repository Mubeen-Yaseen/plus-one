import React, { useState, useEffect } from 'react';
import HeroImage1 from '../../assets/hero1.jpg';
import HeroImage2 from '../../assets/hero2.jpg';
import HeroImage3 from '../../assets/hero3.jpeg';
import HeroImage4 from '../../assets/hero4.jpg';
import Color from '../../assets/colors.png';
import bars from '../../assets/bars-solid.svg';
import close from '../../assets/xmark-solid.svg';
import Icon from '../../assets/Icon.png';
import Logo from '../../assets/logo.png';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';


const images = [HeroImage1, HeroImage2, HeroImage3, HeroImage4];
const directions = ["right", "top", "left", "bottom"];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const pageTimer = setTimeout(() => setIsPageLoaded(true), 100);
        const sliderInterval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => {
            clearTimeout(pageTimer);
            clearInterval(sliderInterval);
        };
    }, []);

    const direction = directions[current % directions.length];

    const getInitialPosition = (direction) => {
        switch (direction) {
            case "right": return { x: "100%", y: 0, scale: 1.2, opacity: 0 };
            case "left": return { x: "-100%", y: 0, scale: 1.2, opacity: 0 };
            case "top": return { x: 0, y: "-100%", scale: 1.2, opacity: 0 };
            case "bottom": return { x: 0, y: "100%", scale: 1.2, opacity: 0 };
            default: return { x: 0, y: 0, scale: 1, opacity: 1 };
        }
    };

    const getExitPosition = (direction) => {
        switch (direction) {
            case "right": return { x: "-100%", y: 0, scale: 0.9, opacity: 0 };
            case "left": return { x: "100%", y: 0, scale: 0.9, opacity: 0 };
            case "top": return { x: 0, y: "100%", scale: 0.9, opacity: 0 };
            case "bottom": return { x: 0, y: "-100%", scale: 0.9, opacity: 0 };
            default: return { x: 0, y: 0, scale: 1, opacity: 1 };
        }
    };

    const ToggleBtn = () => setIsOpen(prev => !prev);

    const navItems = [
        { label: "Home", href: "#home" },
        { label: "How it Works", href: "#how-it-works" },
        { label: "Safety & Trust", href: "#safety" },
        { label: "Contact Us", isRoute: true }
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
        <section id="home" className='relative w-screen h-screen flex justify-center overflow-hidden'>

            {/* Animated Background */}
            <div className='absolute inset-0 overflow-hidden'>
                <AnimatePresence>
                    <motion.div
                        key={current}
                        initial={getInitialPosition(direction)}
                        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                        exit={getExitPosition(direction)}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className='absolute inset-0 bg-cover bg-center'
                        style={{ backgroundImage: `url(${images[current]})` }}
                    >
                        <div className="absolute inset-0 bg-black/40"></div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Rest of your Nav and Hero Content */}
            {isPageLoaded && (
                <motion.nav
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className='absolute z-10 container mx-auto w-11/12 flex justify-between items-center border-[1.5px] border-gray-300 rounded-[10px] px-6 py-3 top-[30px] bg-gradient-to-b from-grey-400/40 via-grey-500/40 to-gray-400/30 '
                >
                    <div className='flex gap-2 items-center'>
                        <img src={Icon} alt="Plus One Icon" className="w-auto h-auto" />
                        <h1 className='text-white font-extrabold'>Plus One</h1>
                    </div>

                    <ul className="hidden md:flex gap-8 font-semibold text-base">
                        {navItems.map((item, index) =>
                            item.isRoute ? (
                                <motion.li key={item.label} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.5 + index * 0.1 }} whileHover={{ scale: 1.1 }}>
                                    <Link to="/contactform" className="text-white relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white hover:after:w-full after:transition-all after:duration-300">
                                        {item.label}
                                    </Link>
                                </motion.li>
                            ) : (
                                <motion.li key={item.label} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.5 + index * 0.1 }} whileHover={{ scale: 1.1 }}>
                                    <a href={item.href} className="text-white relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white hover:after:w-full after:transition-all after:duration-300">
                                        {item.label}
                                    </a>
                                </motion.li>
                            )
                        )}
                    </ul>

                    <Link to="/contactform">
                        <motion.button
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="hidden md:block cursor-pointer rounded-sm bg-[#0066FF] hover:bg-[#0055cc] transition-all duration-300 transform hover:scale-105 text-white font-bold text-base px-4 py-3"
                        >
                            <span className="block lg:hidden">Join</span>
                            <span className="hidden lg:block">Join Waiting List Now</span>
                        </motion.button>
                    </Link>

                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="w-10 h-10 p-2 border-2 border-gray-600 rounded-md flex items-center justify-center md:hidden"
                        onClick={ToggleBtn}
                    >
                        <motion.img
                            key={isOpen ? "close" : "bars"}
                            src={isOpen ? close : bars}
                            alt={isOpen ? "Close Menu" : "Open Menu"}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full object-contain"
                        />
                    </motion.button>
                </motion.nav>
            )}

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && isPageLoaded && (
                    <motion.ul
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="bg-white text-black/60 md:hidden w-[75%] h-screen rounded-md absolute z-40 left-0 flex flex-col justify-between py-10 px-8 font-bold"
                    >
                        <div>
                            <img src={Logo} alt="Logo" className="w-[10rem] h-auto mb-6" />
                            <div className="flex flex-col gap-6 mt-20 ml-3">
                                {navItems.map((item, index) =>
                                    item.isRoute ? (
                                        <motion.li key={item.label} variants={itemVariants} className="list-none py-4 text-sm">
                                            <Link to="/contactform" onClick={() => setIsOpen(false)}>{item.label}</Link>
                                        </motion.li>
                                    ) : (
                                        <motion.li key={item.label} variants={itemVariants} className="list-none py-4 text-sm">
                                            <a href={item.href} onClick={() => setIsOpen(false)}>{item.label}</a>
                                        </motion.li>
                                    )
                                )}
                            </div>
                        </div>

                        <motion.li variants={itemVariants} className="list-none">
                            <Link to="/contactform">
                                <button className="bg-[#0066FF] py-3 rounded-sm text-white font-semibold w-full mb-16">
                                    Join Now
                                </button>
                            </Link>
                        </motion.li>
                    </motion.ul>
                )}
            </AnimatePresence>

            {/* Center Hero Text */}
            {isPageLoaded && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                    className="absolute z-20 container mx-auto p-6 w-[85%] md:w-[55%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] rounded-[24px] bg-gradient-to-b from-grey-400/40 via-grey-500/40 to-gray-400/30  shadow-xl top-[32%] sm:top-[27%] text-white border-2 border-gray-400"

                >
                    <div className="flex flex-col justify-between gap-5 h-auto">
                        <img src={Color} alt="Color Block" className="w-[80px] h-[16px]" />

                        {/* First Line Typing Infinite with Deletion and Cursor */}
                        <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug text-white">
                            <Typewriter
                                words={['Your Perfect Plus One, On Demand.']}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
                            className="font-manrope text-sm lg:text-xl leading-[27.32px]"
                        >
                            Transform any occasion into a memorable experience with a carefully matched companion.
                        </motion.p>

                        <Link to="/contactform" className="hidden sm:block">
                            <button className="rounded-4xl bg-[#0066FF] text-white font-poppins px-[30px] py-[20px] hover:scale-105 transition-all duration-300 shadow-[0px_0px_20px_0px_#639AE19C] cursor-pointer">
                                Join Waiting List Now
                            </button>
                        </Link>
                    </div>

                </motion.div>
            )}
        </section>
    );
};

export default Header;
