import {useContext} from "react";
import { Context } from "../../Context/Context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPaw, faHandHoldingDollar, faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(faHandHoldingDollar, faPaw, faHeart)

const getIcon = (icon) => {
    switch(icon){
        case "faPaw" : return faPaw;
        case "faHandHoldingDollar" : return faHandHoldingDollar;
        case "faHeart" : return faHeart;
        default : return faPaw;
    }
};


export default function MainCurrentShelter(){
    const {currentShelterData} = useContext(Context);

    const shelter_stats = currentShelterData.stats.map((dat) => {
        const icon = getIcon(dat.icon)
        return <div className="current-shel--stat">
                <FontAwesomeIcon icon={icon} />
                <p>{dat.count}</p>
        </div>
    })

    const styles = {backgroundImage: `url(Images/Shelters/${currentShelterData.img})`};
    return(
        <main className="current-shelter--container">
            <div className="current-shel--img-box" style={styles}></div>
            <div className="current-shel--text-box">
                <h1>{currentShelterData.title}</h1>
                <h2>{currentShelterData.location}</h2>
                <p>{currentShelterData.description}</p>
            </div>
            <div className="current-shel--stats-box">
                {shelter_stats}
            </div>
            <div className="statistic--table">
                <div className="aaa">
                    <img src="Images/cat.png" />
                </div>
            </div>
            <button className="donate--btn">Donate this shelter</button>
            <div className="current-shel--socials">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faInstagram} />
            </div>
        </main>
    );
}