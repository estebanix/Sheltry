import { createContext, useState } from 'react';
import ShletersData from "../Datas/data.json" 

export interface ContextType {
    sheltersData: any[];
    setSheltersData: (data: any) => void;
    loggedIn: boolean;
    setLoggedIn: (data: boolean) => void;
}

export const Context = createContext<ContextType>({} as ContextType);

const ContextProvider = (props: any) => {
  
    const [sheltersData, setShletersData] = useState(ShletersData);
    const [loggedIn, setLoggedIn] = useState(false)

  return (
    <Context.Provider
      value={{
        sheltersData,
        setShletersData,
        loggedIn,
        setLoggedIn
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
