'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

//framer variants
import { container, fadeIn, item, scaleCenter } from '@/framerVariants'

const HOW_IT_WORKS = [
    {
        step: "01",
        title: "Get an estimate to plan",
        description: "From advanced tracking systems to smart logistics"
    },
    {
        step: "02",
        title: "Ongoing support",
        description: "We integrate sustainable practices into our"
    },
    {
        step: "03",
        title: "Relax while you move",
        description: "Empowering businesses and individuals alike to"
    }
];

export default function HowItWorks() {
  return (
    <section className='relative py-[40px] md:py-[50px] sm-lg:py-[70px] xl:py-[100px]'>

        <div className='grid sm-lg:grid-cols-[1fr,1.25fr]'>

            <motion.figure 
                className='sm-lg:relative'
                variants={scaleCenter(0.5, 0)}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
            >
                <Image 
                    src={'/howitworks.jpg'}
                    alt=''
                    width={750}
                    height={500}
                    className='h-full w-full object-cover inline-block sm-lg:absolute top-0 left-0 '
                />
            </motion.figure>

            <div className='bg-primaryBlack relative px-[40px] py-10 pb-[60px] '>
                <motion.h2 
                    className='mb-[40px] text-white'
                    variants={fadeIn("up", 0.5, 0)}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                >
                    How It Works
                </motion.h2>

                <motion.ul 
                    className='grid gap-[30px] sm-lg:grid-cols-3'
                    variants={container}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                >
                    {
                        HOW_IT_WORKS.map(level => (
                            <motion.li 
                                key={level.step} 
                                className=''
                                variants={item}
                            >
                                <div className='mb-[30px] w-10 h-10 bg-[rgba(255,255,255,.1)] flex justify-center items-center rounded-[50%]'>
                                    <p className='text-white text-lg font-medium '>{level.step}</p>
                                </div>
                                
                                <h4 className='text-white mb-[10px]'>{level.title}</h4>
                                <p className='text-[#b9b9b9] text-lg mb-[10px]'>{level.description}</p>
                            </motion.li>
                        ))
                    }
                </motion.ul>
                
                <div className="absolute hidden xsm:block h-[10%] w-[20%] bottom-[0px] sm-lg:top-0 right-0 bg-white "></div>
            </div>
        </div>
    </section>
  )
}
