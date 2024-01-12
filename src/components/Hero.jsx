import React from "react";
import journey from "/public/home/journey.png";
import usaTravel from "/public/home/usa-travel.png";
import Image from "next/image";

export default function Hero() {
    return (
        <section className=" py-8 px-5">
            <div className="container mx-auto ">
                <div className="flex gap-8 xl:gap-20 flex-row items-center">
                    <div className=" w-1/2 pt-20">
                        <h1 className=" text-5xl font-extrabold">
                            All Your File available Here
                        </h1>
                        <p className=" text-base text-indigo-500 mt-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Excepturi, quae adipisci veritatis
                            reprehenderit recusandae cumque, alias impedit
                            veniam voluptates similique non culpa eum, quibusdam
                            doloremque quasi? Quidem voluptas dolorem aut
                            distinctio nobis, nulla iste odio saepe enim ducimus
                            molestias atque veritatis error iure soluta,
                            incidunt illum sed labore cum eveniet.
                        </p>
                        <div className=" py-10">
                            <form action="" className=" flex gap-6">
                                <input
                                    type="text"
                                    placeholder="Say somethings!"
                                    className=" px-6 py-2 border rounded-md border-indigo-500"
                                />
                                <button className=" px-6 py-2 bg-indigo-500 text-white rounded-md">
                                    Get Started
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className=" w-1/2 h-[400px]">
                        <Image
                            src={journey}
                            width={1000}
                            height={1000}
                            className=" object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
