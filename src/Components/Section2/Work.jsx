import React from 'react'
import { motion } from 'framer-motion'
import Rectangle from '../../assets/Rectangle.png'
import Earth from '../../assets/earth.svg'
import Team from '../../assets/team.svg'
import Calender from '../../assets/calender.svg'

const Work = () => {

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: "easeOut",
      }
    })
  }
  return (
    <>
      <div id='how-it-works' className='relative w-screen flex flex-col  items-center bg-[#FFFFFF] h-auto min-h-[67vh] sm:min-h-[60vh] md:min-h-[40] lg:min-h-[55vh] xl:min-h-[75vh] 2xl:min-h-screen  overflow-x-hidden '>

        {/* ----------bg- layer---------- */}
        <div className='absolute w-[70%] h-[10%] xl:h-[90%] xl:bg-[#EDEDED] z-0 rounded-b-md'>
          <motion.h1
            className="font-poppins font-medium text-[40px] sm:text-[45px] md:text-[50px] lg:text-[56px] leading-[61.6px] text-center"
            initial={{ opacity: 0, y: 40 }} // you can add 'y' for more impact
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.3 }}
          >
            How it works
          </motion.h1>
        </div>

        {/* ---------------Cards------------  */}
        <div className="relative xl:absolute container  mx-auto flex gap-12  justify-center items-center w-screen flex-col md:flex-row sm:flex-wrap mt-32 z-10">

          {/* Left Card with Animation - Edited Text */}
          <div className="w-[350px] h-[230px] p-7 bg-white rounded-[16px] shadow-2xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <img src={Earth} alt="Icon" />
              <h1 className='text-[20px] py-[15px]'>Explore Trusted Partners</h1>
              <p className='text-[13px] text-[#535353] pr-[20px]'>
                Review detailed profiles of potential plus-ones, including their interests, experience, and availability.
              </p>
            </motion.div>
          </div>

          {/* Center Card */}
          {/* Wrap the center card and the rectangle together */}
          <div className="relative w-auto h-auto">

            {/* Rectangle Behind the Card */}
            <img
              src={Rectangle}
              alt="Decorative"
              className="absolute -bottom-5 -left-5 w-[90px] h-[90px] z-0 hidden xl:block"
            />

            {/* Center Card */}
            <div className="relative w-[350px] h-[230px] p-7 bg-white rounded-[16px] shadow-2xl z-10">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                className="relative z-10"
              >
                <img src={Team} alt="Icon" />
                <h1 className="text-[20px] py-[15px]">Connect & Coordinate</h1>
                <p className="text-[13px] text-[#535353]">
                  Chat with your chosen companion through our secure platform to discuss event details and expectations.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Card with Animation */}
          <div className="w-[350px] h-[230px] p-7 bg-white rounded-[16px] shadow-2xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <img src={Calender} alt="Icon" />
              <h1 className='text-[20px] py-[15px]'>Enjoy Your Event</h1>
              <p className='text-[13px] text-[#535353]'>
                Attend your function with confidence, knowing you have a compatible companion by your side.
              </p>
            </motion.div>
          </div>

        </div>
      </div >
    </>
  );
}

export default Work;
