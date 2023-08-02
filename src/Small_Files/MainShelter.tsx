import { Context } from "../Context/Context";
import { useContext } from "react";

export default function MainShelter(){
    const {sheltersData} = useContext(Context);

    const shelters = sheltersData.map((dat) => {
        return <div>
            <p>{dat.title}</p>
        </div>
    })
    return(
        <main className="main-shelter--container">
            <h1>Our Shelters</h1>
            {shelters}
        </main>
    );
}