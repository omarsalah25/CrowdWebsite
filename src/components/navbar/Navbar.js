import Link from "next/link"
import Links from "./links/links"
import styles from "./navbar.module.css"
import Image from "next/image"
// import { auth } from "@/lib/auth";

const Navbar = async () => {

    // const session = await auth();

    return (
        <div className=' flex items-center gap-3 lg:justify-start my-10 sm:justify-between  max-sm:justify-between '>
            <Link href="/" className="opacity-0" id="logo"><Image src={'/crowd-logo.png'} width={200} height={100} alt="" /></Link>
            <Links session={true} />
        </div>
    )
}

export default Navbar