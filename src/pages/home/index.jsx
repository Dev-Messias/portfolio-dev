import Header from "../../components/header";
import SectionHome from "../../components/sectionHome";
import SectionProject from "../../components/sectionProject";

function Home() {
    return (
        <div className="w-full " >
            <Header />
            <SectionHome  />
            <SectionProject  />
        </div>
    )
}

export default Home;