import React from "react";
import LogoApp from "public/images/logo.svg";
import NavItems from "./NavItems";
import Link from "next/link";
const navItem = ["Home", "Pricing", "Features", "Story"];

function Navbar({ onLight }) {
    const terang = onLight;
    return (
        <nav className="flex justify-between items-centers">
            <div style={{ height: 54 }}>
                <Link href="/">
                    <LogoApp className="onLight fill-white" />
                </Link>
            </div>
            <ul className="flex items-center">
                {navItem.map((value, index) => {
                    return (
                        <li key={index}>
                            <NavItems item={value} onLight={terang} />
                        </li>
                    );
                })}
                <Link href="">
                    <a className=" px-6 py-3 bg-biru-2 text-white">Masuk</a>
                </Link>
            </ul>
        </nav>
    );
}

export default Navbar;
