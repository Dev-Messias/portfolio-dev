import { FaEye } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function Card({img, title, tipo, description, site, git}) {
    return (
        <div className="bg-slate-200 dark:bg-slate-800 p-3  rounded-lg min-h-[400px] relative flex flex-col  hover:shadow-2xl duration-300" >
            <div >
                <div className="group  overflow-hidden rounded-lg "  >
                    <img src={img} alt={title} className="rounded-lg w-full h-64 object-cover group-hover:scale-110 duration-300 " />
                </div>



                <div className="w-full flex flex-col gap-1 my-3" >
                    <h2 className="text-lg text-slate-900 dark:text-slate-50 font-bold line-clamp-1 " >{title}</h2>
                    <p className="text-sm  line-clamp-1 font-semibold text-blue-700 dark:text-blue-500  "  >{tipo}</p>
                    <p className="text-sm text-gray-900 dark:text-gray-300 line-clamp-6  "  >{description}</p>
                </div>
            </div>


            <div className="w-full flex flex-row gap-1 my-2 mt-auto" >
                <div className=" w-full flex flex-row items-center gap-3">
                    {site && <a href={site} target="_blank" className="bg-blue-700  py-2 px-4 rounded-lg font-semibold text-lg text-slate-50" ><FaEye />
                    </a>}
                    {git && <a href={git} target="_blank" className="bg-slate-600   py-2 px-4 rounded-lg font-semibold text-lg text-slate-50" ><FaGithub /> </a>}
                </div>
            </div>
        </div>
    )
}

export default Card;