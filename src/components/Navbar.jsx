import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../constants";

import { Menu, X } from "lucide-react";

import logoImg from "../assets/logo.webp";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
                }`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <img src={logoImg} alt="logo" className="w-9 h-9 object-contain" />
                    <p className="text-white text-[18px] font-bold cursor-pointer flex ">
                        Abhishek Singh &nbsp;
                        <span className="sm:block hidden"> | Portfolio</span>
                    </p>
                </Link>

                <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`${active === nav.title ? "text-white" : "text-secondary"
                                } hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="https://drive.google.com/file/d/1gl70G1Wj5k9hJNlPhBfLHzJrpqOssCLT/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#915eff] py-2 px-5 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-[#804dee] transition-all duration-300"
                        >
                            Resume
                        </a>
                    </li>
                </ul>

                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <div
                        className="w-[28px] h-[28px] object-contain cursor-pointer flex items-center justify-center"
                        onClick={() => setToggle(!toggle)}
                    >
                        {toggle ? <X className="text-white" /> : <Menu className="text-white" />}
                    </div>

                    <div
                        className={`${!toggle ? "hidden" : "flex"
                            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-black-100`}
                    >
                        <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                                        }`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(nav.title);
                                    }}
                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                            <li
                                className="font-poppins font-medium cursor-pointer text-[16px] text-white"
                                onClick={() => setToggle(!toggle)}
                            >
                                <a
                                    href="https://drive.google.com/file/d/1gl70G1Wj5k9hJNlPhBfLHzJrpqOssCLT/view?usp=drive_link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#915eff] py-2 px-4 rounded-lg"
                                >
                                    View Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
