import {useContext} from "react";
import { Context } from "../Context/Context";
import Nav from "../Small_Files/Nav";

export default function CurrentDefaultScreen(){
    const {currentShelterData} = useContext(Context);

    return(
        <main>
            <Nav />
            {currentShelterData.title}
            <h1>{currentShelterData.location}</h1>
        </main>
    );
}