import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/theme';

import { MdDehaze, MdOutlineDarkMode, MdOutlineLightMode, MdClose } from "react-icons/md";


function Header() {

    const { theme, setTheme } = useContext(AuthContext);
    const [display, setDisplay] = useState('hidden');
    const [btnNav, setBtnnav] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleMenu() {
        setBtnnav(!btnNav)

        if (btnNav === true) {
            setDisplay("flex");
            setIsMenuOpen(true)

        } else {
            setDisplay("hidden");
            setIsMenuOpen(false)
        }
    }


    function MenuScroll() {
        if (isMenuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }

    MenuScroll()

    return (
        <>
            { /* mobile menu */}
            <div onClick={handleMenu} className={` fixed w-full h-[100%] bg-slate-900 bg-opacity-60 z-50  ${display} `} >
                <div className={`fixed z-50 w-full ${display}  flex-col items-start px-3 py-2 bg-white dark:bg-slate-900 shadow-xl border-b-2 border-slate-900 top-20 md:top-20 border-t-2  `} >
                    <nav className="flex flex-col mt-4  w-full" >
                        <ul className="flex flex-col items-start gap-6 mb-10 font-medium text-slate-600 dark:text-slate-100 " >
                            <li><a className="hover:text-blue-800 dark:hover:text-blue-500 hover:font-semibold duration-100" onClick={() => handleMenu()} href="#home">Inicio</a></li>
                            <li><a className="hover:text-blue-800 dark:hover:text-blue-500 hover:font-semibold duration-100" onClick={() => handleMenu()} href='#projetos'  >Projetos</a></li>
                            <li><a className="hover:text-blue-800 dark:hover:text-blue-500 hover:font-semibold duration-100" onClick={() => handleMenu()} href="#sobre">Sobre</a></li>
                            {/* <li><a className="hover:text-blue-800 dark:hover:text-blue-500 hover:font-semibold duration-100" onClick={() => handleMenu()} href="#contatos">Contatos</a></li> */}
                        </ul>
                    </nav>
                </div>
                
            </div>
            { /* Fim mobile menu */}

            <header className=" fixed top-0 left-0 z-50 flex flex-row items-center shadow-2xl  w-full  bg-white dark:bg-slate-900   " >
                <div className="flex flex-row items-center  justify-between py-6 px-4 w-full  lg:max-w-[1100px] 2xl:max-w-[1600px] m-auto" >
                    <h1 className="font-semibold text-slate-950 dark:text-slate-100 text-xl lg:text-[25px] 2xl:text-2xl" >Messias <span className="text-blue-700 dark:text-blue-500" >| Dev.</span></h1>
                    <div className="flex flex-row items-center gap-3 md:gap-10" >

                        <nav className="hidden md:flex" >
                            <ul className="flex flex-row items-center gap-10 font-medium text-slate-600 dark:text-slate-100 " >
                                <li><a className="hover:text-blue-800 dark:hover:text-blue-500 hover:font-semibold duration-100" href="#home">Inicio</a></li>
                                <li><a className="hover:text-blue-800 dark:hover:text-blue-500 hover:font-semibold duration-100" href="#projetos">Projetos</a></li>
                                <li><a className="hover:text-blue-800 dark:hover:text-blue-500 hover:font-semibold duration-100" href="#sobre">Sobre</a></li>
                                {/* <li><a className="hover:text-blue-800 dark:hover:text-blue-500 hover:font-semibold duration-100" href="#contatos">Contatos</a></li> */}
                            </ul>
                        </nav>

                        <div className="flex flex-row items-center gap-5" >
                            <p className="hidden md:flex text-black dark:text-slate-100" >|</p>
                            {
                                theme === 'light' ? <button onClick={() => setTheme('dark')} >  <MdOutlineDarkMode className='text-blue-800 text-xl' /> </button> : <button onClick={() => setTheme('light')} > <MdOutlineLightMode className='text-amber-400 text-xl' /> </button>
                            }

                        </div>
                        <div className="flex md:hidden" >


                            {
                                display === "hidden" ? <button className="2xl:hidden flex items-center justify-center  py-2" onClick={handleMenu}  >
                                    <MdDehaze className="text-xl text-black dark:text-slate-100" />
                                </button> : <button className="2xl:hidden flex items-center justify-center  py-2" onClick={handleMenu}  >

                                    <MdClose className="text-xl text-black dark:text-slate-100" />
                                </button>
                            }

                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header;