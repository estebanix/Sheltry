import { createContext, useState } from 'react';
import SheltersData from "../Datas/data.json" // Make sure the import path is correct

export interface ContextType {
    sheltersData: any[];
    setSheltersData: (data: any) => void; // Fix the function name here
    loggedIn: boolean;
    setLoggedIn: (data: boolean) => void;
    currentShelterData: any; // Fix the variable name here
    setCurrentShelterData: (data: any) => void; // Fix the function name here
}

export const Context = createContext<ContextType>({} as ContextType);

const ContextProvider = (props: any) => {
    const [sheltersData, setSheltersData] = useState(SheltersData); // Fix the function name here
    const [loggedIn, setLoggedIn] = useState(false);
    const [currentShelterData, setCurrentShelterData] = useState({});

    return (
        <Context.Provider
            value={{
                sheltersData,
                setSheltersData, 
                loggedIn,
                setLoggedIn,
                currentShelterData,
                setCurrentShelterData
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
