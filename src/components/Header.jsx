import React from "react";
import logo from "/public/logo/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className=" bg-white p-5">
            <div className="container mx-auto">
                <div className=" flex justify-between">
                    <Link href="/" className=" w-20">
                        <Image
                            src={logo}
                            width={500}
                            height={500}
                            className=" object-cover"
                            alt="Logo"
                        />
                    </Link>
                    <div>
                        <nav>
                            <ul className=" flex gap-5">
                                <Link href="/features" className="">
                                    Features
                                </Link>
                                <Link href="/team" className="">
                                    Team
                                </Link>
                                <Link href="/signin" className="">
                                    Sign In
                                </Link>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
