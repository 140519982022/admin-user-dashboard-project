import React, { createContext, useState } from 'react'

export const MainContext = createContext()




export default function ContextProvider({ children}) {

    let[formStatus, setFormStatus] = useState(
        {
            status : false,
            message : ""
        }
    )

    return (
        <>
            <MainContext.Provider value={{formStatus,setFormStatus}}>

                {children}


            </MainContext.Provider>

        </>
    )
}
