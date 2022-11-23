import { useEffect, useState, createContext } from "react";
import AccordianContainer from "./components/AccordianContainer";
import Modal from "react-modal";

export const ThemeContext = createContext();
Modal.setAppElement("#root");

function App() {
    const [theme, setTheme] = useState();;

    // load theme on startup
    useEffect(() => {
        if (localStorage.getItem("theme") === "light" || 
            matchMedia("prefers-color-scheme:light").matches) {
                document.documentElement.setAttribute("data-theme", "light");
                setTheme("light");
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            setTheme("dark");
        } 
    }, []);

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            <AccordianContainer/> 
        </ThemeContext.Provider> 
    );
}

export default App;