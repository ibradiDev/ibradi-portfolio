"use client";

import {useState} from 'react';
import {motion} from "framer-motion";
import Link from "next/link";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {BsArrowUpRight, BsGithub} from "react-icons/bs";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";


const projects = [
    {
        num: "01",
        category: "frontend",
        title: "project 1",
        description: "Application web de gestion d'évènements.",
        stack: [{name: "React.js"}, {name: "Tailwind.css"}, {name: "Javascript"},],
        image: "/assets/work/event_app.png",
        live: "https://reactjs-event-app.onrender.com",
        github: ""
    }, {
        num: "02",
        category: "fullstack",
        title: "project 2",
        description: "Application web permettant l'inclusion numérique du village \"Allakro\".",
        stack: [{name: "Laravel"}, {name: "Blade"}, {name: "Vite"}, {name: "Tailwind.css"}],
        image: "/assets/work/allakro_stat.png",
        live: "",
        github: "https://github.com/ibradiDev/Allakro_in_realtime"
    }, {
        num: "03",
        category: "fullstack",
        title: "project 3",
        description: "Outil de visualisation en temps réel qui permet\n" +
            "d'accéder aux données sur la qualité des particules fines dans l'air,\n" +
            "collectées par des capteurs.",
        stack: [{name: "Nest.js"}, {name: "React.js"}, {name: "Vite"}, {name: "Chart.js"}, {name: "Tailwind.css"}],
        image: "/assets/work/aq_app.png",
        live: "",
        github: "https://github.com/ibradiDev/PROJET-AQ54"
    }]

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        // Get current slide index & Update project state based on current slide index
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    }

    return (<motion.section
        initial={{opacity: 0}}
        animate={{
            opacity: 1,
            transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
        }}
        className={"min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"}>
        <div className={"container mx-auto"}>
            <div className={"flex flex-col xl:flex-row xl:gap-[30px]"}>
                <div
                    className={"w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none"}>
                    <div className={"flex flex-col gap-[30px] h-[50%]"}>
                        {/*  Outline num  */}
                        <div className={"text-8xl leading-none font-extrabold text-transparent text-outline"}>
                            {project.num}
                        </div>
                        {/*  Project category  */}
                        <h2 className={"text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize"}>
                            Projet {project.category}
                        </h2>
                        {/*Project description*/}
                        <p className={"text-white/60"}>
                            {project.description}
                        </p>
                        {/*Stack*/}
                        <ul className={"flex gap-4"}>
                            {
                                project.stack.map((item, index) => (
                                    <li key={index} className={"text-xl text-accent"}>
                                        {item.name}{index !== project.stack.length - 1 && ", "}
                                    </li>
                                ))
                            }
                        </ul>
                        {/*Border*/}
                        <div className={"border border-white/20"}/>
                        {/*Buttons*/}
                        <div className={"flex items-center gap-4"}>
                            {/*Live project button*/}
                            <Link href={project.live}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger
                                            className={"w-[70px] h-[70px] rounded-full bg-white/5 flex" + " justify-center items-center group"}>
                                            <BsArrowUpRight
                                                className={"text-3xl text-white group-hover:text-accent"}/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Live project</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                            {/* GitHub project button*/}
                            <Link target={"_blank"} href={project.github}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger
                                            className={"w-[70px] h-[70px] rounded-full bg-white/5 flex" + " justify-center items-center group"}>
                                            <BsGithub className={"text-3xl text-white group-hover:text-accent"}/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Github repository</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={"w-full xl:w-[50%]"}>
                    <Swiper spaceBetween={30} slidesPerView={1} onSlideChange={handleSlideChange}
                            className={"xl:h-[520px] mb-12"}>
                        {projects.map((project, index) => (
                            <SwiperSlide key={index} className={"w-full"}>
                                <div className={"h-[460px] relative group flex justify-center items-center" +
                                    " bg-pink-50/20"}>
                                    {/*bg-pink-50/20*/}
                                    {/*Overlay*/}
                                    <div className={"absolute top-0 bottom-0 w-full bg-black/10 z-10"}/>
                                    {/*Image*/}
                                    <div className={"relative w-full h-full"}>
                                        <Image src={project.image} alt={""} width={585} height={460}
                                               className={"object-cover"}/>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        {/*  Slider buttons  */}
                        <WorkSliderBtns containerStyles={"flex justify-between gap-2 absolute right-0" +
                            " bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full xl:w-max xl:justify-none"}
                                        btnStyles={"bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"}/>
                    </Swiper>
                </div>
            </div>
        </div>
    </motion.section>);
};

export default Work;