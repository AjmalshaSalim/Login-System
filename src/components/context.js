import { createContext,useContext } from "react";
const MyContext=createContext();

export function MyProvider({children}){
    const data="JARVIS"
    return(
        <MyContext.Provider value={data}>
            {children}
        </MyContext.Provider>
    )
}
export function useMyContext(){
    return useContext(MyContext)
}