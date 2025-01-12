"use client";

import React from 'react';
import {FaAngular, FaCss3, FaHtml5, FaJava, FaJs, FaPython, FaReact} from "react-icons/fa";
import {SiFareharbor, SiNestjs, SiNextdotjs, SiPandas, SiScikitlearn, SiSpringboot, SiTailwindcss, SiTensorflow} from "react-icons/si";
import {motion} from "framer-motion";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

// About data
const about = {
    title: "A propos de moi",
    description: "Titulaire d’un master en systèmes informatiques et génie logiciel, je suis passionné par l'innovation technologique et les solutions logicielles de pointe. Mon objectif est de concevoir des logiciels qui allient efficacité et expérience utilisateur optimale.",
    infos: [
        {fieldName: "Nom", fieldValue: "DIARRASSOUBA Ibrahim"},
        {fieldName: "Expérience", fieldValue: "1 Année"},
        {fieldName: "Nationalité", fieldValue: "Côte d'Ivoire"},
        {fieldName: "Freelance", fieldValue: "Disponible"},
        {fieldName: "Téléphone", fieldValue: "+225 0711889314"},
        {fieldName: "Email", fieldValue: "ibradi.dev@gmail.com"},
        {fieldName: "Langues", fieldValue: "Français, Anglais"},
    ]
}
// Experience data
const experience = {
    icon: "/assets/resume/badge.svg",
    title: "Mon expérience",
    description: "Mon expérience en tant qu'apprenant dans le domaine de l'informatique.",
    items: [
        {company: "UVCI", position: "Stagiaire Développeur Web", duration: "Août 2023 - Oct 2023"},
        {company: "Independent", position: "Développeur Data & IA", duration: "Fev 2024 - Avril 2024"}
    ]
}
// Education data
const education = {
    title: "Ma formation",
    description: "Mon parcours en tant qu'étudiant en informatique.",
    items: [
        {
            institution: "Ecole Supérieure Africaine des TIC (ESATIC)",
            degree: "Master, Systèmes Informatiques et Génie Logiciel",
            duration: "2023 - present"
        },
        {
            institution: "Université Virtuelle de Côte d'Ivoire (UVCI)",
            degree: "Licence, Développement d'Application et e-Services",
            duration: "2020 - 2023"
        },
    ]
}
// Skills data
const skills = {
    title: "Mes compétences",
    description: "Certaines des compétences que j'ai acquis tout au long de ma formation.",
    skillsList: [
        {icon: <FaHtml5/>, name: "html"},
        {icon: <FaCss3/>, name: "css"},
        {icon: <SiTailwindcss/>, name: "tailwind css"},
        {icon: <FaJs/>, name: "javascript"},
        {icon: <FaAngular/>, name: "angular"},
        {icon: <FaReact/>, name: "react.js"},
        {icon: <SiNextdotjs/>, name: "next.js"},
        {icon: <SiNestjs/>, name: "nest.js"},
        {icon: <SiSpringboot/>, name: "Springboot"},
        {icon: <FaJava/>, name: "java"},
        {icon: <FaPython/>, name: "python"},
        {icon: <SiPandas/>, name: "pandas"},
        {icon: <SiTensorflow/>, name: "tensorflow"},
        {icon: <SiScikitlearn/>, name: "scikit-learn"},
    ]
}

const Resume = () => {
    return (
        <motion.div initial={{opacity: 0}} animate={{
            opacity: 1,
            transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
        }}
                    className={"min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "}>
            <div className={"container mx-auto"}>
                <Tabs defaultValue={"experience"} className={"flex flex-col xl:flex-row gap-[60px]"}>
                    <TabsList className={"flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6"}>
                        <TabsTrigger value={"experience"}>Expérience</TabsTrigger>
                        <TabsTrigger value={"education"}>Formation</TabsTrigger>
                        <TabsTrigger value={"skills"}>Compétences</TabsTrigger>
                        <TabsTrigger value={"about"}>A propos</TabsTrigger>
                    </TabsList>
                    {/*Content*/}
                    <div className={"min-h-[70vh] w-full"}>
                        {/*Experience*/}
                        <TabsContent value={"experience"} className={"w-full"}>
                            <div className={"flex flex-col gap-[30px] text-center xl:text-left"}>
                                <h3 className={"text-4xl font-bold"}>{experience.title}</h3>
                                <p className={"max-w-[600px] text-white/60 mx-auto xl:mx-0"}>{experience.description}
                                </p>
                                <ScrollArea className={"h-[400px]"}>
                                    <ul className={"grid grid-cols-1 lg:grid-cols-2 gap-[30px]"}>
                                        {
                                            experience.items.map((item, index) => {
                                                return (
                                                    <li key={index}
                                                        className={"bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"}>
                                                  <span className={"text-accent"}>
                                                    {item.duration}
                                                  </span>
                                                        <h3 className={"text-xl max-w-[260px] min-h-[60px] text-center lg:text-left"}>{item.position}</h3>
                                                        <div className={"flex items-center gap-3"}>
                                                            {/*Dot*/}
                                                            <span
                                                                className={"w-[6px] h-[6px] bg-accent rounded-full"}>
                                                        </span>
                                                            <p className={"text-white/60"}>{item.company}</p>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/*Education*/}
                        <TabsContent value={"education"} className={"w-full"}>
                            <div className={"flex flex-col gap-[30px] text-center xl:text-left"}>
                                <h3 className={"text-4xl font-bold"}>{education.title} </h3>
                                <p className={"max-w-[600px] text-white/60 mx-auto xl:mx-0"}>{education.description}
                                </p>
                                <ScrollArea className={"h-[400px]"}>
                                    <ul className={"grid grid-cols-1 lg:grid-cols-2 gap-[30px]"}>
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index}
                                                    className={"bg-[#232329] h-[184px] lg:h-[210px] py-6 px-10 lg:px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "}>
                                                  <span className={"text-accent"}>
                                                    {item.duration}
                                                  </span>
                                                    <h3 className={"text-xl max-w-[260px] md:min-h-[60px] lg:min-h-[90px] text-center lg:text-left"}>
                                                        {item.degree}
                                                    </h3>
                                                    <div className={"flex items-center gap-3 mt-4"}>
                                                        {/*Dot*/}
                                                        <span
                                                            className={"w-[6px] h-[6px] bg-accent rounded-full"}>
                                                        </span>
                                                        <p className={"text-white/60"}>
                                                            {item.institution}
                                                        </p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/*Skills*/}
                        <TabsContent value={"skills"} className={"w-full h-full"}>
                            <div>
                                <div className={"flex flex-col gap-[30px]"}>
                                    <div className={"flex flex-col gap-[30px] text-center xl:text-left"}>
                                        <h3 className={"text-4xl font-bold"}>{skills.title}</h3>
                                        <p className={"max-w-[600px] text-white/60 mx-auto xl:mx-0"}>{skills.description}</p>
                                    </div>
                                    <ul className={"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]"}>
                                        {
                                            skills.skillsList.map((skill, index) => {
                                                return (
                                                    <li key={index}>
                                                        <TooltipProvider delayDuration={100}>
                                                            <Tooltip>
                                                                <TooltipTrigger
                                                                    className={"w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group"}>
                                                                    <div
                                                                        className={"text-6xl group-hover:text-accent transition-all duration-300"}>
                                                                        {skill.icon}
                                                                    </div>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    <p className={"capitalize"}>{skill.name}
                                                                    </p>
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </TooltipProvider>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </TabsContent>
                        {/*About me*/}
                        <TabsContent value={"about"} className={"w-full text-center xl:text-left"}>
                            <div className={"flex flex-col gap-[30px]"}>
                                <h3 className={"text-4xl font-bold"}>{about.title}</h3>
                                <p className={"max-w-[600px] text-white/60 mx-auto xl:mx-0"}>{about.description}</p>
                                <ul className={"grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-6 max-w-[630px]" +
                                    " mx-auto xl:mx-0"}>
                                    {
                                        about.infos.map((info, index) => {
                                            return (
                                                <li key={index}
                                                    className={"flex items-center justify-center xl:justify-start gap-4"}>
                                                    <span className={"text-white/60"}>{info.fieldName}</span>
                                                    <span className={"text-xl"}>{info.fieldValue}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;