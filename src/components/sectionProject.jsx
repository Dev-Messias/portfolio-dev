import Card from "./card";
import img1 from '../assets/card1.png';
import img2 from '../assets/card2.png';
import img4 from '../assets/card4.png';
import img5 from '../assets/card5.png';

function SectionProject() {

    const cards = [
        {
            id: 5,
            image: img5,
            title: "Api-Pizza",
            tipo: "Projeto em andamento...",
            description: "API desenvolvida em Node.js com TypeScript, tem como objetivo principal organizar e facilitar a comunicação e os pedidos entre garçons e a cozinha em restaurantes. Utilizando PostgreSQL como banco de dados e Prisma como ORM.",
             site: "",
            git: "https://github.com/Dev-Messias/apiPizza"
        },
        {
            id: 2,
            image: img2,
            title: "Filme-flix",
            tipo: "filmes",
            description: "Este é um projeto desenvolvido para consumir a API de filmes TMDB (The Movie Database), permitindo aos usuários salvar seus filmes favoritos e assistir aos trailers.",
             site: "https://dev-filme-flix.netlify.app/",
            git: "https://github.com/Dev-Messias/filme-flix"
        },

        // {
        //     id: 3,
        //     image: img1,
        //     title: "Blog",
        //     tipo: "landing page",
        //     description: "Este projeto foi um desafio do site front-end mentor, onde o objetivo era criar uma landing page responsiva.",
        //      site: "https://blog-azure-seven-44.vercel.app/",
        //     git: "https://github.com/Dev-Messias/blog"
        // },
        {
            id: 4,
            image: img4,
            title: "Sistema ADM",
            tipo: "dashboard",
            description: "Sistema desenvolvido  para registrar chamados, utilizando ReactJS, Firebase e Context API.",
             site: "https://sistema-adm.netlify.app/",
            git: "https://github.com/Dev-Messias/sistema-adm"
        },
        {
            id: 1,
            image: img1,
            title: "Barbalha História",
            tipo: "blog",
            description: "Projeto desenvolvido com React.js e Firebase, é uma plataforma interativa dedicada a contar a história da cidade. Este sistema não apenas preserva o patrimônio cultural e histórico, mas também torna essa informação acessível e envolvente para moradores e visitantes. ",
            site: "https://barbalha-historia.netlify.app/",
            git: ""
        },
    ]

    return (
        <section id="projetos" className=" flex flex-col items-center   w-full  bg-white dark:bg-slate-300 " >
            <div className="flex flex-col gap-4 items-center  justify-between py-6 px-4 w-full  lg:max-w-[1100px] 2xl:max-w-[1600px] m-auto" >
                <div className="w-full flex flex-col gap-3" >
                    <h3 className="font-bold text-xl md:text-2xl 2xl:text-3xl" >Projetos</h3>
                    <hr />
                </div>

               
               <div className="w-full grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mb-20 max-w-[96%] md:max-w-[90%] 2xl:max-w-[100%] mx-auto " >
                    {cards.map(card => (
                         <Card key={card.id} img={card.image} title={card.title} tipo={card.tipo} description={card.description} site={card.site} git={card.git} />
                    ))}
                     
                </div>
            </div>
        </section>
    )
}

export default SectionProject;