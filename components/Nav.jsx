"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

const links = [
    {
        name: "accueil",
        path: "/"
    }, {
        name: "services",
        path: "/services"
    }, {
        name: "mon cv",
        path: "/resume"
    }, {
        name: "réalisations",
        path: "/work"
    }, {
        name: "contact",
        path: "/contact"
    },
]
const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className={"flex gap-8"}>
            {links.map((link, index) => {
                return <Link href={link.path} key={index}
                             className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>{link.name}</Link>
            })}
        </nav>
    );
}
export default Nav