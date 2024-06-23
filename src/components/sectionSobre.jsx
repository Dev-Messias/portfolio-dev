import imgeu from '../assets/euimg.jpg';
import { FaGithub, FaLinkedin } from "react-icons/fa";

function SectionSobre() {

    // Função para prevenir o comportamento padrão do clique com o botão direito
    const handleContextMenu = (event) => {
        event.preventDefault();
    };

    return (
        <section id="sobre" className=" flex flex-col items-center   w-full  bg-slate-100 dark:bg-slate-900 " >
            <div className="  flex flex-col  gap-4 items-center  justify-between py-6 px-4 w-full  lg:max-w-[1100px] 2xl:max-w-[1600px] m-auto" >
                <h3 className="font-bold text-xl xl:text-3xl text-slate-900 dark:text-slate-100 mb-7" >Sobre</h3>
                <div className='w-full flex flex-col-reverse md:flex-row items-center justify-center' >

                    <div className='w-full flex flex-col  items-center justify-center md:items-start' >
                        <h3 className="font-semibold text-slate-800 dark:text-slate-50 text-lg md:text-2xl mb-5" >👋Olá! sou Emanoel Messias</h3>
                        <p className="text-slate-700 dark:text-slate-300 text-md mb-4 " >Desenvolvedor web/mobile e busco criar soluções digitais inovadoras. Sou formado em Análise e Desenvolvimento de Sistemas, o que me proporcionou uma base sólida em conceitos de tecnologia e programação. Desde então, venho me especializando e aprimorando minhas habilidades em diversas tecnologias e frameworks modernos para entregar projetos de alta qualidade e performance.</p>
                        <p className="text-slate-700 dark:text-slate-300 text-md" >Atualmente estou cursando o projeto Geração Tech que tem como intuito forma jovens Desenvolvedores Web Full Stack e especialistas em JavaScript</p>
                        <div className="flex flex-row gap-4 mt-9" >
                            <a href="https://github.com/Dev-Messias" target="_blank" > <FaGithub className="text-3xl text-black dark:text-blue-500 hover:-translate-y-1 duration-200 " /></a>
                            <a href="https://www.linkedin.com/in/emanoel-messias/" target="_blank"> <FaLinkedin className="text-3xl text-blue-700 dark:text-blue-500 hover:-translate-y-1 duration-200" /> </a>


                        </div>
                    </div>

                    <div className='w-full flex flex-col items-center justify-center' >
                        <img onContextMenu={handleContextMenu} className=' w-[150%] 2xl:w-[80%]  rounded-xl shadow-xl mb-10 ' src={imgeu} alt="teste" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionSobre;