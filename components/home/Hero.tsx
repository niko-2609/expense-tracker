'use client'
import React from 'react';
import Image from 'next/image';
import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import { HeroHighlight, Highlight } from '../ui/hero-highlight';
import { motion } from "framer-motion";

function Hero() {
    return (
        <section className='bg-gray-50 flex items-center flex-col'>
            <div className="flex flex-col overflow-hidden">
                {/* <HeroHighlight>
                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: [20, -5, 0],
                        }}
                        transition={{
                            duration: 0.5,
                            ease: [0.4, 0.0, 0.2, 1],
                        }}
                        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
                    >
                        Manage your money, with your personal{" "}
                        <Highlight className="text-black dark:text-white">
                            AI driver Financial Advisor.
                        </Highlight>
                    </motion.h1>
                </HeroHighlight> */}
                <ContainerScroll
                    titleComponent={
                        <>
                            <h1 className="text-4xl font-semibold text-black dark:text-white">
                                Manage your Money with AI-Driven Personal <br />
                                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-blue-800">
                                    Finance Advisor
                                </span>
                            </h1>
                        </>
                    }
                >
                    <Image
                        src={`/dashboard.png`}
                        alt="hero"
                        height={720}
                        width={1400}
                        className="mx-auto rounded-2xl object-cover h-full object-left-top"
                        draggable={false}
                    />
                </ContainerScroll>
            </div>
        </section>
    )
}


export default Hero