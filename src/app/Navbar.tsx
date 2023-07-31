'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const currentRoute = usePathname();

    // styles for active and non-active links
    const activeStyle = "active";
    const nonActiveStyle = "non-active";

    return (
        <header>
            {/* language links*/}
            <nav id="navbar-languages">
                <Link
                    href={(currentRoute === "/en" || currentRoute === "/") ? "/" : "/proyectos"}
                    className={
                        (currentRoute === "/" || currentRoute === "/proyectos") ? activeStyle : nonActiveStyle
                    }
                >
                    Español
                </Link>
                <Link
                    href={(currentRoute === "/en" || currentRoute === "/") ? "/en" : "/en/projects"}
                    className={
                        (currentRoute === "/en" || currentRoute === "/en/projects") ? activeStyle : nonActiveStyle
                    }
                >
                    English
                </Link>
            </nav>
            {/* language links*/}

            <nav id="nombre">
                José Miguel Carvajal Jiménez
            </nav>


            {/* navigation links*/}
            <nav id="navbar-links">
                <Link
                    href={(currentRoute === "/" || currentRoute === "/proyectos") ? "/" : "/en"}
                    className={(currentRoute === "/" || currentRoute === "/en") ? activeStyle : nonActiveStyle}
                >
                    {(currentRoute === "/" || currentRoute === "/proyectos") ? "Inicio" : "Home"}
                </Link>

                <Link
                    href={(currentRoute === "/" || currentRoute === "/proyectos") ? "/proyectos" : "/en/projects"}
                    className={(currentRoute === "/proyectos" || currentRoute === "/en/projects") ? activeStyle : nonActiveStyle}
                >
                    {(currentRoute === "/" || currentRoute === "/proyectos") ? "Proyectos" : "Projects"}
                </Link>
            </nav>
            {/* End navigation menu */}
        </header >
    )
}
