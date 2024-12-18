import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import Link from "next/link";

const socials = [
    {icon: <FaLinkedinIn/>, path: "https://www.linkedin.com/in/ibrahim-diarrassouba-66a900240/"},
    {icon: <FaGithub/>, path: "https://github.com/ibradiDev"},

];


const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => {
                return (
                    <Link target={"_blank"} href={social.path} key={index} className={iconStyles}>
                        {social.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Social;