import { FaGraduationCap } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";

export default function Education() {
    return (
        <section id="education" className="w-full bg-black py-7 md:py-14">
            <div className="flex items-center justify-center max-w-screen-2xl px-[5%] py-10  m-auto">
                <div className=" text-white w-full ">
                    <div className="  font-hl_bold text-2xl tracking-wide pb-4  text-white   ">
                        {/* <h1 className="border-b  border-[#a0a0a0] pb-4  "> */}
                        <h1 className="border-b  border-white pb-4  ">
                            • Education
                        </h1>
                    </div>

                    <div className="flex justify-center pt-7 md:pt-14 ">
                        <div className="grid grid-cols-1 px-5 md:p-0 lg:grid-cols-2 gap-10 md:gap-6 text-[#a0a0a0] pt-10 md:pt-5">
                            <div className="bg-[#111111] rounded-xl hover:scale-[105%] transition-transform duration-300 py-6 text-center">
                                <div className="p-5">
                                    <div className="flex justify-center pb-10 items-center md:gap-4  text-xl">
                                        <FaGraduationCap className="text-5xl" />
                                        <h1 className="text-base md:text-xl md:pl-0 ">
                                            Bachelor of Science in Engineering
                                        </h1>
                                    </div>
                                    <h1 className="text-3xl font-semibold px-4 py-2 text-white">
                                        Faridpur Engineering College
                                    </h1>
                                    <p className="font-icooper text-base md:text-xl tracking-wider  px-4 pt-2">
                                        • Computer Science & Engineering •
                                    </p>
                                    <p className="font-cooper text-base md:text-xl px-4 pt-4 tracking-wider  text-center pb-8">
                                        February, 2018 - May, 2024
                                    </p>
                                    <div className="text-base md:text-xl pt-6 text-center flex justify-center items-center md:gap-4 ">
                                        <MdLocationPin className=" text-4xl" />
                                        <p className="md:pl-0 pl-4">
                                            Faridpur, Dhaka, Bangladesh.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#111111] rounded-xl hover:scale-[105%] transition-transform duration-300 py-6 text-center">
                                <div className="p-5">
                                    <div className="flex justify-center pb-10 items-center md:gap-4  text-xl">
                                        <FaGraduationCap className=" text-5xl" />
                                        <h1 className="text-base md:text-xl px-1 md:px-0">
                                            Higher Secondary Certificate
                                        </h1>
                                    </div>
                                    <h1 className="text-3xl font-semibold px-4 py-2 text-white">
                                        Dhaka College
                                    </h1>
                                    <p className="font-icooper text-base md:text-xl tracking-wider  px-4 pt-2">
                                        • Science •
                                    </p>
                                    <p className="font-cooper text-base md:text-xl px-4 pt-4 tracking-wider  text-center pb-8">
                                        July, 2015 - August, 2017
                                    </p>
                                    <div className="text-base md:text-xl pt-6 text-center flex justify-center items-center md:gap-4 ">
                                        <MdLocationPin className=" text-4xl" />
                                        <p className="md:pl-0 pl-4">
                                            Dhaka, Bangladesh.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </section>
    );
}
