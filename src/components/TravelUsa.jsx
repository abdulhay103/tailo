import React from "react";

import usaTravel from "/public/home/usa-travel.png";
import Image from "next/image";

export default function TravelUsa() {
    return (
        <section className=" py-8 xl:py-14 px-5 mt-28">
            <div className="container mx-auto ">
                <div className="flex gap-8 xl:gap-20 flex-row items-center">
                    <div className=" w-1/2 h-[400px]">
                        <Image
                            src={usaTravel}
                            width={1000}
                            height={1000}
                            className=" object-cover"
                        />
                    </div>
                    <div className=" w-1/2 pt-20">
                        <h2 className=" text-4xl font-bold">
                            Travel In your dreams Place.
                        </h2>
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
                        <p className="pt-10">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Reprehenderit, quibusdam!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
