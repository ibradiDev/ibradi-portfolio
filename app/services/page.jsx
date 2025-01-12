"use client";

import React from 'react';
import {motion} from "framer-motion";
import Link from "next/link";
import {BsArrowDownRight} from "react-icons/bs";
import Stats from "@/components/Stats";

const services = [
    {
        num: "01",
        title: "Développement Web",
        description: "Capable de créer des applications web intuitives, fonctionnelles et robustes, vous aidant à" +
            " atteindre" +
            " votre objectif de business.",
        href: "#",
    },
    {
        num: "02",
        title: "Développement Mobile",
        description: "Vous avez besoin d'une application mobile pour votre service? Alors contactez-moi et" +
            " laissez-moi transformer votre idée en application.",
        href: "#",
    },
    {
        num: "03",
        title: "Data & IA",
        description: "Optez pour une application autonome dont le comportement est guidé par l'Intelligence Artificielle (IA)",
        href: "#",
    }
]

const Services = () => {
    return (
        <motion.section className={"min-h-[80vh] flex flex-col justify-center gap-10 py-12 xl:py-0"}>
            <div className={"container mx-auto"}>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{
                        opacity: 1,
                        transition: {duration: 0.4, delay: 2, ease: "easeIn"}
                    }}
                    className={"grid grid-cols-1 md:grid-cols-2 gap-[60px]"}>
                    {services.map((service, index) => {
                        return (
                            <div key={index} className={"flex-1 flex flex-col justify-center gap-6 group"}>
                                {/*Top*/}
                                <div className={"w-full flex justify-between items-center"}>
                                    <div
                                        className={"text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500"}>{service.num}</div>
                                    <Link href={service.href}
                                          className={"w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"}>
                                        <BsArrowDownRight className={"text-primary text-3xl"}/>
                                    </Link>
                                </div>
                                {/*Title*/}
                                <h2 className={"text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500"}>{service.title}</h2>
                                {/*Description*/}
                                <p className={"text-white/60"}>{service.description}</p>
                                {/*Border*/}
                                <div className={"border-b border-white/20 w-full"}></div>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
            <motion.div
                initial={{opacity: 0}}
                animate={{
                    opacity: 1,
                    transition: {duration: 1.4, delay: 2, ease: "easeIn"}
                }}>
                <Stats/>
            </motion.div>
        </motion.section>
    )
}
export default Services;