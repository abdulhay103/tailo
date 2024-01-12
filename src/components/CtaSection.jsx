import React from "react";

export default function CtaSection() {
    return (
        <section className=" py-10 bg-gray-300">
            <div className="container mx-auto">
                <div className=" flex gap-10 xl:gap-16 items-center">
                    <div className=" w-2/3">
                        <h2 className=" text-4xl font-semibold text-white">
                            Get early access today!
                        </h2>
                        <p className=" mt-5 w-2/3">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam iusto excepturi unde dolores
                            consequuntur minus officiis in ea voluptatibus vel!
                        </p>
                    </div>

                    <div className=" w-1/3 py-10">
                        <form action="" className=" flex flex-col w-full">
                            <input
                                type="text"
                                placeholder="Say somethings!"
                                className=" px-6 py-2 border rounded-md border-indigo-500"
                            />
                            <button className="mt-4 px-6 py-2 bg-indigo-500 text-white rounded-md inline-block">
                                Get Started for free
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
