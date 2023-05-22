import Element from "../components/Element";
import Find from "../components/Find";
import Header from "../components/Header";
import odkurzacz from "../img/odkurzacz.jpg"

const Home = () => {
    return (
        <>
            <h1>Ogłoszenia</h1>
            <Find/>
            <Element>
                <Header h2={"Odkurzacz"}/>
                <img src={odkurzacz} alt='obrazek'/>
                <div class='hire-item'>
                    <p> Wypożyczę odkurzacz w dobrym stanie na 2 miesiące.</p>
                </div>
            </Element>
        </>
    );
}

export default Home;