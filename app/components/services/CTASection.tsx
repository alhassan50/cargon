'use client'

import React from 'react'
import { motion } from 'framer-motion'

//framer variants
import { scaleUp, bounce } from '@/framerVariants'

export default function CTASection() {
  return (
    <section className='px-[15px] xsm:px-[15px] sm-lg:px-[30px] pb-[40px] sm-lg:pb-[50px] lg:pb-[70px] xl:pb-[100px] x-lg:pb-[150px]'>
        <motion.div 
            className=' sm-lg:max-w-[1460px] mx-auto'
            variants={scaleUp(0.5, 0)}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
        >
            <div className='grid gap-[40px] md:grid-cols-[1.5fr,1fr] sm-lg:max-w-[90%] mx-auto bg-primaryBlack p-[20px] md:p-10 xl:p-[50px] x-lg:p-[70px]'>
                <motion.h2 
                    className='text-white text-[36px] xsm:text-[40px] md:text-[48px] xl:text-[52px] x-lg:text-[55px] '
                    variants={scaleUp(0.5, 0)}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                >
                    Feel free to reach out and ask us anything  
                </motion.h2>

                <div className='flex items-center justify-end'>
                    <motion.div 
                        className='relative group w-[150px] h-[150px] flex justify-center items-center border border-primaryBlue rounded-[50%]'
                        variants={bounce}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0 }}
                    >

                        <h4 className='text-white group-hover:text-primaryBlack transition-all duration-500 z-10'>
                            Let&apos;s Talk
                        </h4>

                        <div className='absolute w-3 h-3 opacity-0 rounded-[50%] bg-white group-hover:w-full group-hover:h-full group-hover:opacity-100 transition-all duration-500'></div>
                    </motion.div>

                </div>
            </div>
        </motion.div>
    </section>
  )
}
