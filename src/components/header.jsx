import { useState, useContext } from 'react';
import { AuthContext } from '../context/theme';

import { MdDehaze, MdOutlineDarkMode, MdOutlineLightMode, MdClose } from "react-icons/md";

function Header() {

    const { theme, setTheme } = useContext(AuthContext);
    const [display, setDisplay] = useState('hidden');
    const [btnNav, setBtnnav] = useState(true);

    function handleMenu() {
        setBtnnav(!btnNav)

        if (btnNav === true) {
            setDisplay("flex");
        } else {
            setDisplay("hidden");
        }
    }

    return (
        <>
            { /* mobile menu */}
            <div className={`absolute z-50 w-full ${display}  flex-col items-start px-3 py-2 bg-white dark:bg-slate-900 shadow-xl border-b-2 top-20 md:top-20 border-t-2  `} >
                <nav className="flex flex-col mt-4  w-full" >
                    <ul className="flex flex-col items-start gap-6 mb-10 font-medium text-slate-600 dark:text-slate-100 " >
                        <li><a className="hover:text-blue-800 dark:hover:text-blue-500 hover:font-semibold duration-100" href="#">Inicio</a></li>
                        <li><a className="hover:text-blue-800 dark:hover:text-blue-500 hover:font-semibold duration-100" href="#">Projetos</a></li>
                        <li><a className="hover:text-blue-800 dark:hover:text-blue-500 hover:font-semibold duration-100" href="#">Sobre</a></li>
                        <li><a className="hover:text-blue-800 dark:hover:text-blue-500 hover:font-semibold duration-100" href="#">Contatos</a></li>
                    </ul>
                </nav>
            </div>
            { /* Fim mobile menu */}

            <header className="flex flex-row items-center shadow-md  w-full  bg-white dark:bg-slate-900  " >
                <div className="flex flex-row items-center  justify-between py-6 px-4 w-full  lg:max-w-[1100px] 2xl:max-w-[1600px] m-auto" >
                    <h1 className="font-semibold text-slate-950 dark:text-slate-100 text-xl lg:text-[25px] 2xl:text-2xl" >Messias <span className="text-blue-700 dark:text-blue-500" >| Dev.</span></h1>
                    <div className="flex flex-row items-center gap-3 md:gap-10" >

                        <nav className="hidden md:flex" >
                            <ul className="flex flex-row items-center gap-10 font-medium text-slate-600 dark:text-slate-100 " >
                                <li><a className="hover:text-blue-800 dark:hover:text-blue-500 hover:font-semibold duration-100" href="#">Inicio</a></li>
                                <li><a className="hover:text-blue-800 dark:hover:text-blue-500 hover:font-semibold duration-100" href="#">Projetos</a></li>
                                <li><a className="hover:text-blue-800 dark:hover:text-blue-500 hover:font-semibold duration-100" href="#">Sobre</a></li>
                                <li><a className="hover:text-blue-800 dark:hover:text-blue-500 hover:font-semibold duration-100" href="#">Contatos</a></li>
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