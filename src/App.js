import { useEffect } from "react";
import AccordianContainer from "./components/AccordianContainer";


function App() {

    // load theme on startup
    useEffect(() => {
        const themeOnLoad = localStorage.getItem("theme");
        if (themeOnLoad) {
            if (themeOnLoad === 'light') {
                document.documentElement.setAttribute("data-theme", "light");
            } else {
                document.documentElement.setAttribute("data-theme", "dark");
            }
        }
    }, []);

    return (
        <AccordianContainer/>  
    );
}

export default App;