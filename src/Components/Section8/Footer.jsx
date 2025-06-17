import React from 'react';
import Logo from '../../assets/logo.png'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-white pb-4  pt-12 border-t border-blue-500 mt-20 overflow-x-hidden">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 w-[85%]">
                {/* Left Logo Section */}
                <div className="flex items-center gap-2">
                    <img src={Logo} alt="Plus One Logo" className="h-10 w-auto" />
                </div>

                {/* Center Navigation */}
                <div className="flex flex-wrap justify-center gap-6 lg:gap-0 lg:justify-around  w-[75vw] leading-4 lg:leading-0 lg:w-[60%] text-sm text-gray-700 font-medium">
                    <a href="#" className="hover:text-blue-600 transition">Contact Us</a>
                    <a href="#" className="hover:text-blue-600 transition">How It Works</a>
                    <a href="#" className="hover:text-blue-600 transition">Safety & Trust</a>
                    <a href="#" className="hover:text-blue-600 transition">Terms of Service</a>
                    <a href="#" className="hover:text-blue-600 transition">Privacy Policy</a>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="text-center mt-10 text-xs text-blue-600">
                © {year} Company
            </div>
        </footer>
    );
};

export default Footer;
