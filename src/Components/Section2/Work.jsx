import React from 'react'
import { motion } from 'framer-motion'
import Rectangle from '../../assets/Rectangle.png'
import Earth from '../../assets/earth.svg'
import Team from '../../assets/team.svg'
import Calender from '../../assets/calender.svg'

const Work = () => {
  const childVariant = {
    hidden: { opacity: 0, y: -30 }, // animate from top
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }
  return (
    <>
      <div className='relative w-full h-screen bg-[#FFFFFF] mb-7'>
        <div className='w-full h-full relative mx-auto bg-[#F9FAFC]'>
          <motion.h1
            className="font-poppins font-medium text-[56px] leading-[61.6px] text-center"
            initial={{ opacity: 0, x: 100 }} // from top
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            How it works
          </motion.h1>

          <div className="flex gap-12 absolute left-1/2 transform -translate-x-1/2 w-full top-[134px] z-10 flex-col items-center md:flex-row sm:flex-wrap sm:justify-center">

            {/* Left Card with Animation - Edited Text */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-[350px] h-[230px] p-7 bg-white rounded-[16px] shadow-lg "
            >
              <img src={Earth} alt="Icon" />
              <h1 className='text-[20px] py-[15px]'>Explore Trusted Partners</h1>
              <p className='text-[13px] text-[#535353] pr-[20px]'>
                Discover curated profiles with verified details to find the right companion for your next event.
              </p>
            </motion.div>

            {/* Center Card */}
            <div className="relative w-[350px] h-[230px] p-7 bg-white rounded-[16px] shadow-lg overflow-visible">
              <img src={Team} alt="Icon" />
              <h1 className='text-[20px] py-[15px]'>Connect & Coordinate</h1>
              <p className='text-[13px] text-[#535353]'>
                Chat with your chosen companion through our secure platform to discuss event details and expectations.
              </p>
              <img
                src={Rectangle} alt="" className="absolute -bottom-5 -left-5 w-[90px] h-[90px] z-[-1] hidden xl:block" />
            </div>

            {/* Right Card with Animation */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-[350px] h-[230px] p-7 bg-white rounded-[16px] shadow-lg"
            >
              <img src={Calender} alt="Icon" />
              <h1 className='text-[20px] py-[15px]'>Enjoy Your Event</h1>
              <p className='text-[13px] text-[#535353]' variants={childVariant}>
                Attend your function with confidence, knowing you have a compatible companion by your side.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
