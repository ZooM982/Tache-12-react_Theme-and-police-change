import { createContext, useContext, useState } from "react"

const ThemeContext = createContext()

const initialCouleurState = ["couleurPrincipal"]
const initialPoliceState  = ["police"]

const ThemeProvider = ({children}) => {
    const [themeCouleur, setThemeCouleur] = useState(initialCouleurState)
    const [themePolice, setThemePolice] = useState(initialPoliceState)

    
    const contextValue ={
        themeCouleur,
        themePolice
    }

    return (
        <ThemeContext.Provider value={contextValue}> {children} </ThemeContext.Provider>
    )
}

export const useThemeContext = () => useContext(ThemeContext)

export default ThemeProvider
