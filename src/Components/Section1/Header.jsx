import React from 'react';
import Hero from '../../assets/hero1.jpg';
import Color from '../../assets/colors.png';
import bars from '../../assets/bars-solid.svg';

const Header = () => {
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
                    <ul className="hidden md:flex justify-between list-none w-auto gap-8 font-semibold text-base ">
                        <li><a href="#" className="text-white">Home</a></li>
                        <li><a href="#" className="text-white">How it Works</a></li>
                        <li><a href="#" className="text-white">Safety & Trust</a></li>
                        <li><a href="#" className="text-white">Contact Us</a></li>
                    </ul>

                    <button className="hidden md:block rounded-sm bg-[#0066FF] text-white font-roboto font-bold text-base text-center px-4 py-3">
                        <span className="block lg:hidden">Join</span>
                        <span className="hidden lg:block">Join Waiting List Now</span>
                    </button>
                    <button className='w-6 cursor-pointer block md:hidden' ><img src={bars} alt="Bars" /></button>

                </nav>
                <div className="absolute z-20 container mx-auto p-6  w-3/4 sm:w-[] md:w-[55%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] rounded-[24px] bg-black/60 top-[27%] text-white lg:h-">

                    <div className="flex flex-col justify-between h-full items-start gap-6">
                        <img src={Color} alt="Color-Block" className="w-[80px] h-[16px]" />

                        <h1 className="font-poppins font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-9 md:leading-[72px] tracking-[0%]">Your Perfect Plus One, On Demand</h1>
                        <p className="font-manrope font-normal text-[20px] leading-[27.32px] tracking-[0%]">
                            Transform any occasion into a memorable experience with a carefully matched companion.
                        </p>
                        <button className=" rounded-4xl px-[30px] py-[20px] bg-[#0066FF] shadow-[0px_0px_20px_0px_#639AE19C] text-white font-poppins font-normal text-[23px] leading-[22px]">
                            <span className="block sm:hidden">Join</span>
                            <span className="hidden sm:block">Join Waiting List Now</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header
