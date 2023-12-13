import { createContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [appTheme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme(appTheme === "light" ? "dark" : "light")
    }

    return(
        <ThemeContext.Provider value={{appTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}