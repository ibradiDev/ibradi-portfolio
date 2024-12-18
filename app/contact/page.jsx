"use client";

import {FaEnvelope, FaMapMarker, FaPhoneAlt} from "react-icons/fa";
import {motion} from "framer-motion";
import {Input} from "@/components/ui/input";
import {
    Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue
} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";

const info = [{
    icon: <FaPhoneAlt/>, title: "Téléphone", description: "(+225) 07 11 88 93 14",
}, {
    icon: <FaEnvelope/>, title: "Email", description: "ibradi.dev@gmail.com",
}, {
    icon: <FaMapMarker/>, title: "Adresse", description: "Abidjan, Cocody - Riviera 2",
},];
const Contact = () => {
    return (<motion.section
        initial={{opacity: 0}}
        animate={{
            opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
        }}
        className={"py-6"}
    >
        <div className={"container mx-auto"}>
            <div className={"flex flex-col lg:flex-row gap-[30px]"}>
                {/*Form*/}
                <div className={"xl:w-[54%] order-2 xl:order-none"}>
                    <form
                        className={"flex flex-col gap-6 p-10 rounded-xl bg-[#27272c]"}
                    >
                        <h3 className={"text-4xl text-accent"}>Travaillons ensemble!</h3>
                        <p className={"text-white/60"}>
                            Envoyer votre message en remplissant ce formulaire ou contactez-moi directement.
                        </p>
                        {/* Input */}
                        <div className={"grid grid-cols-1 md:grid-cols-2 gap-6"}>
                            <Input type={"firstname"} placeholder={"Prénom"}/>
                            <Input type={"lastname"} placeholder={"Nom"}/>
                            <Input type={"email"} placeholder={"Adresse email"}/>
                            <Input type={"phone"} placeholder={"Numéro téléphone"}/>
                        </div>
                        {/* Select */}
                        <Select>
                            <SelectTrigger className={"w-full"}>
                                <SelectValue placeholder={" Sélectionnez un service"}/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>
                                        Sélectionnez un service
                                    </SelectLabel>
                                    <SelectItem value={"web"}>Développement Web</SelectItem>
                                    <SelectItem value={"mobile"}>Développement Mobile</SelectItem>
                                    <SelectItem value={"other"}>Autre</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {/*  Textarea  */}
                        <Textarea className={"h-[200px]"} placeholder={"Entrer vote message ici."}/>
                        {/*  Btn  */}
                        <Button className={"max-w-40"} size={"md"}>
                            Envoyer message
                        </Button>
                    </form>
                </div>
                {/*Info*/}
                <div
                    className={"flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0"}
                >
                    <ul className={"flex flex-col gap-10"}>
                        {info.map((item, index) => {
                            return <li key={index} className={"flex items-center gap-6"}>
                                <div className={"w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent" +
                                    " rounded-xl flex items-center justify-center"}>
                                    <div className={"text-[28px]"}>{item.icon}</div>
                                </div>
                                <div className={"flex-1"}>
                                    <p className={"text-white/60"}>{item.title}</p>
                                    <h3 className={"text-xl"}>{item.description}</h3>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </motion.section>);
};

export default Contact;
