import InfoBar from "../ProfileComponents/InfoBar";
import FavShel from "../ProfileComponents/FavShel";
import StatBar from "../ProfileComponents/StatBar";

export default function MainProfile(){
    return(
        <main className="main-profile--container">
            <InfoBar />
            <StatBar />
            <FavShel />
        </main>
    );
}