import { FaGithub, FaLinkedin } from "react-icons/fa";
import {  Typewriter } from 'react-simple-typewriter';
import ParticlesBackground from "./particlesBackground";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaReact, FaHtml5, FaCss3Alt, FaFigma, FaNodeJs, FaGitAlt } from "react-icons/fa";

function SectionHome() {

    return (


        <section id='home'  className="w-full h-[500px] lg:h-[600px] rounded-br-2xl flex flex-col items-center bg-slate-100 dark:bg-slate-900" >
            
            <div className="w-full flex flex-col items-center lg:max-w-[1100px] 2xl:max-w-[1600px] m-auto" >
                <div className="w-full flex flex-col items-center gap-3" >
                    <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-black dark:text-slate-50" >Emanoel Messias</h1>
                    <p className="text-lg md:text-xl xl:text-2xl font-medium text-black dark:text-slate-50" >Desenvolvedor <span className="text-blue-700 dark:text-blue-500" >
                        <Typewriter
                            words={['Web', 'Mobile']}
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={100}
                            delaySpeed={1500}
                        /></span></p>
                </div>
                <div className="flex flex-row gap-4 mt-9" >
                    <a href="https://github.com/Dev-Messias" target="_blank" > <FaGithub className="text-3xl text-black dark:text-blue-500 hover:-translate-y-1 duration-200 " /></a>
                    <a  href="https://www.linkedin.com/in/emanoel-messias/" target="_blank"> <FaLinkedin className="text-3xl text-blue-700 dark:text-blue-500 hover:-translate-y-1 duration-200" /> </a>


                </div>
            </div>

            <div className="w-full flex flex-row py-5   bg-slate-200 dark:bg-slate-400 items-center justify-center gap-2 md:gap-10 lg:gap-16" >
                <div className="flex flex-col items-center justify-center gap-1" >
                    <FaHtml5 className="text-xl lg:text-3xl text-orange-800" />
                    <p className="  font-semibold text-[8px] md:text-[9px]" >HTML</p>
                </div>

                <div className="flex flex-col items-center justify-center gap-1" >
                    <FaCss3Alt className="text-xl lg:text-3xl text-sky-800" />
                    <p className="font-semibold text-[8px] md:text-[9px]" >CSS</p>
                </div>

                <div className="flex flex-col items-center justify-center gap-1" >
                    <IoLogoJavascript className="text-xl lg:text-3xl text-yellow-800" />
                    <p className="font-semibold text-[8px] md:text-[9px]" >JAVASCRIPT</p>
                </div>

                <div className="flex flex-col items-center justify-center gap-1" >
                    <FaReact className="text-xl lg:text-3xl text-sky-800" />
                    <p className="font-semibold text-[8px] md:text-[9px]" >REACTJS</p>
                </div>

                <div className="flex flex-col items-center justify-center gap-1" >
                    <FaFigma className="text-xl lg:text-3xl text-rose-700" />
                    <p className="font-semibold text-[8px] md:text-[9px]" >FIGMA</p>
                </div>

                <div className="flex flex-col items-center justify-center gap-1" >
                    <FaNodeJs className="text-xl lg:text-3xl text-emerald-800" />
                    <p className="font-semibold text-[8px] md:text-[9px]" >NODEJS</p>
                </div>

                <div className="flex flex-col items-center justify-center gap-1" >
                    <FaGitAlt className="text-xl lg:text-3xl text-orange-700" />
                    <p className="font-semibold text-[8px] md:text-[9px]" >GIT</p>
                </div>

                <div className="flex flex-col items-center justify-center gap-1" >
                    <BiLogoPostgresql className="text-xl lg:text-3xl text-cyan-800" />
                    <p className="font-semibold text-[8px] md:text-[9px]" >POSTGRESQL</p>
                </div>

                <div className="flex flex-col items-center justify-center gap-1" >
                    <IoLogoFirebase className="text-xl lg:text-3xl text-yellow-600" />
                    <p className="font-semibold text-[8px] md:text-[9px]" >FIREBASE</p>
                </div>

            </div>
        </section>
    )
}

export default SectionHome;