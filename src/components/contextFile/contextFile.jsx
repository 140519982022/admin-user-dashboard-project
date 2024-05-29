import React, { createContext } from 'react'

export let MainContext = createContext()

export default function contextFile({ children }) {

    return (
        <>
            <MainContext.Provider>

                {children}


            </MainContext.Provider>

        </>
    )
}
