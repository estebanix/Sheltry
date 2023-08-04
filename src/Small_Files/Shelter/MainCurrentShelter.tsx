import {useContext} from "react";
import { Context } from "../../Context/Context";


export default function MainCurrentShelter(){
    const {currentShelterData} = useContext(Context);

    const styles = {backgroundImage: `url(Images/Shelters/${currentShelterData.img})`};
    return(
        <main className="current-shelter--container">
            <div className="current-shel--img-box" style={styles}></div>
            <div className="current-shel--text-box">
                <h1>{currentShelterData.title}</h1>
                <h2>{currentShelterData.location}</h2>
                <p>{currentShelterData.description}</p>
            </div>
        </main>
    );
}