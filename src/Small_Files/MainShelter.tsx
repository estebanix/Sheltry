import { Context } from "../Context/Context";
import { useContext } from "react";

export default function MainShelter(){
    const {sheltersData} = useContext(Context);

    const shelters = sheltersData.map((dat) => {
        const styles = {backgroundImage: `url(Images/Shelters/${dat.img})`};

        return <div className="shelter--box" style={styles}>
            <div className="shelter--desc">
                <h3>{dat.title}</h3>
                <h4>{dat.location}</h4>
            </div>
        </div>
    })
    return(
        <main className="main-shelter--container">
            <h1>Our Shelters</h1>
            <h4>These are shelters with which we are cooperating. With a simple click, you can learn about the incredible work these shelters are doing and the specific support they require. Whether it's a financial contribution, essential supplies, or your valuable time as a volunteer, you have the power to choose how you want to help. Your kindness and generosity will make a real difference in the lives of animals they care for. Join us in supporting these compassionate causes and be a part of something meaningful today!</h4>
            <div className="shelters--container">
                {shelters}
            </div>
        </main>
    );
}