import MainHero from "../Small_Files/MainHero";
import Nav from "../Small_Files/Nav";

export default function MainScreen(){
    return(
        <main className="main--container">
            <Nav />
            <MainHero />
        </main>
    );
}