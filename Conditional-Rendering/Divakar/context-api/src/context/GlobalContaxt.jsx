import { createContext } from "react";

export let MyContext = createContext();

const GlobalContext = ({children}) => {
    return <MyContext.Provider value={{name:"prajwal", age:20}}>
        {children}
    </MyContext.Provider>
}
export default GlobalContext