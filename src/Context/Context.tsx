import { createContext, useState } from 'react';
import ShletersData from "../Datas/data.json" 

export interface ContextType {
    sheltersData: any[];
    setSheltersData: (data: any) => void;
}

export const Context = createContext<ContextType>({} as ContextType);

const ContextProvider = (props: any) => {
  
    const [sheltersData, setShletersData] = useState(ShletersData);

  return (
    <Context.Provider
      value={{
        sheltersData,
        setShletersData
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
