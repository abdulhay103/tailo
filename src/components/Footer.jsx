import {
    FacebookLogo,
    InstagramLogo,
    TwitchLogo,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <footer className=" py-12 bg-indigo-950">
            <div className=" container mx-auto flex justify-between">
                <div>
                    <Link href="/" className=" text-white font-bold text-lg">
                        Tailo
                    </Link>
                    <p className=" text-white ">Phone: 0121 2211331</p>
                    <Link href=" mailto:abc@gmail.com" className="text-white ">
                        Email: abd@gmail.com
                    </Link>
                </div>
                <div className=" flex flex-col gap-3">
                    <Link className=" text-white" href="/team">
                        Team
                    </Link>
                    <Link className=" text-white" href="/fetures">
                        fetures
                    </Link>
                    <Link className=" text-white" href="/signin">
                        Sign In
                    </Link>
                </div>
                <div className=" flex gap-5">
                    <Link href="#">
                        <FacebookLogo size={20} color="white" />
                    </Link>
                    <Link href="#">
                        <TwitchLogo size={20} color="white" />
                    </Link>
                    <Link href="#">
                        <InstagramLogo size={20} color="white" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
