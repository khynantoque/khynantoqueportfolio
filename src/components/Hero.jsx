import React from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
    return (
        <section className='relative w-full h-screen mx-auto'>
            <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#64ed72]'></div>
                    <div className='w-1 sm:h-80 h-40 green-gradient'></div>
                </div>
                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        
                        Hi! I'm <span className='text-[#56d262]'>
                        <Typewriter
                            words={['Khyn', 'a Frontend Developer', 'a Backend Developer']}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={65}
                            deleteSpeed={70}
                        />
                        </span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        I develop web applications using <br className='sm:block hidden'/> React, TailwindCSS, Material UI
                        <br className='sm:block hidden'/> and create backend APIs <br className='sm:block hidden'/> using Django REST.
                    </p>
                </div>
            </div>
            <ComputersCanvas/>

            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center item-center'>
                <a href="#about">
                    <div className='w-[32px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                        <motion.dev
                            animate={{
                                y: [0, 24, 0]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: 'reverse'
                            }}
                            className='w-3 h-3 rounded-full bg-secondary'
                        />
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Hero