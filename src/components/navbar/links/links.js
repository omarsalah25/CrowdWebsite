"use client";

import { useEffect, useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";
import Image from "next/image";
import anime from "animejs";
// import { handleLogout } from "@/lib/action";

const links = [
    // {
    //     title: "Homepage",
    //     path: "/",
    // },
    {
        title: "About Us",
        path: "/about",
    },
    {
        title: "Services",
        path: "/Services",
    },
    {
        title: "Contact",
        path: "/contact",
    },

];

const Links = ({ session }) => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        anime({
            targets: '#links, .links_link ',
            translateX: [100, 0],
            duration: 350,
            easing: 'linear',
            opacity: [0, 1],
            delay: (el) => {
                return 300 + 100 * 3;
            },
        })

        anime({
            targets: '#logo ',
            translateX: [100, 0],
            duration: 250,
            easing: 'linear',
            opacity: [0, 1],

        })


    }, [])


    // TEMPORARY
    // const session = true;
    // const isAdmin = true;

    return (
        <div className={styles.container} >
            <div className={styles.links} id="links">
                {links.map((link) => (
                    <NavLink className="links_link" item={link} key={link.title} />
                ))}
                {/* {session?.user ? (
                    <>
                        {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
                        <form action={handleLogout}>
                            <button className={styles.logout}>Logout</button>
                        </form>
                    </>
                ) : (
                    <NavLink item={{ title: "Login", path: "/login" }} />
                )} */}
            </div>
            <Image
                className={styles.menuButton}
                src="/fonts/icons/burger-icon.png"
                alt=""
                width={30}
                height={30}
                onClick={() => setOpen((prev) => !prev)}
            />
            {open && (
                <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Links;