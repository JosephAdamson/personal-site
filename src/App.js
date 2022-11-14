import { useEffect, useState } from "react";
import AccordianContainer from "./components/AccordianContainer";
import Hero from "./components/Hero";


function App() {
    const [isOpening, setIsOpening] = useState(true);

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

    useEffect(() => {
        setTimeout(() => {setIsOpening(false)}, 5000)
    }, []);

    return (
        isOpening ?
        <Hero/> :
        <AccordianContainer/>  
    );
}

export default App;