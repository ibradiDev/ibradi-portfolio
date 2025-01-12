"use client";

import {Button} from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Link from "next/link";
import {motion} from "framer-motion";

const Home = () => {
    return (
        <motion.section initial={{opacity: 0}}
                        animate={{
                            opacity: 1,
                            transition: {delay: 1, duration: 2.2, ease: "easeIn"}
                        }} className={"h-[100%] pb-4"}>
            <div className={"container mx-auto h-full"}>
                <div className={"flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24"}>
                    {/*Text*/}
                    <div className={"text-center xl:text-left order-2 xl:order-none"}>
                        {/*<span className={"text-xl"}>Développeur d'application</span>*/}
                        <h1 className={"h1"}>
                            Hello,Je suis <br/> <span className={"text-accent"}>
                            DIARRASSOUBA Ibrahim</span>
                        </h1>
                        <h2 className={"max-w-[500px] text-nowrap h2 my-9 text-white/80 text-animation"}>
                            Développeur <span></span>
                        </h2>
                        {/*Btn & socials*/}
                        <div className={"flex flex-col xl:flex-row items-center gap-8"}>
                            <Link target={"_blank"} href={"/assets/resume/Resume.pdf"}>
                                <Button variant={"outline"}
                                        size={"lg"} className={"gap-2 flex items-center uppercase"}>
                                    <span>Télécharger mon CV</span>
                                    <FiDownload className={"text-xl"}/>
                                </Button>
                            </Link>
                            <div className={"mb-8 xl:mb-0"}>
                                <Social containerStyles={"flex gap-6"}
                                        iconStyles={"w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"}
                                />
                            </div>
                        </div>
                    </div>
                    {/*Photo*/}
                    <div className={"order-1 xl:order-none mb-8 xl:mb-0"}>
                        <Photo/>
                    </div>
                </div>
            </div>
            {/*<Stats/>*/}
        </motion.section>
    );
}

export default Home;