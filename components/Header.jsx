import Link from "next/link";
import Nav from "@/components/Nav";
import {Button} from "@/components/ui/button";
import MobileNav from "@/components/MobileNav";

const Header = () => {
    return (
        <header className={"py-8 xl:py-12 text-white"}>
            <div className={"container mx-auto flex justify-between items-center"}>
                {/* LOGO */}
                <Link href="/">
                    <h1 className={"text-4xl font-semibold"}>Ibradi<span className={"text-accent"}>.</span></h1>
                </Link>
                {/*  Desktop nav & hire me button */}
                <div className={"hidden xl:flex items-center gap-8"}>
                    <Nav/>
                    <Link target={"_blank"} href={"/assets/resume/Resume.pdf"}>
                        <Button>Télécharger mon CV</Button>
                    </Link>
                </div>
                {/*Mobile nav*/}
                <div className={"xl:hidden"}>
                    <MobileNav/>
                </div>
            </div>
        </header>
    );
}
export default Header;