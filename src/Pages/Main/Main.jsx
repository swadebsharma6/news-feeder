import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MainContent from "../../components/NewsBody/MainContent";


const Main = () => {
    return (
        <div>
            <Header/>
            <main>
                <section>
                    <MainContent/>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default Main;