import Footer from "../../components/footer";
import Header from "../../components/header";
import SectionHome from "../../components/sectionHome";
import SectionProject from "../../components/sectionProject";
import SectionSobre from "../../components/sectionSobre";

function Home() {
    return (
        <div className="w-full " >
            <Header />
            <SectionHome  />
            <SectionProject  />
            <SectionSobre/>
            <Footer/>
        </div>
    )
}

export default Home;