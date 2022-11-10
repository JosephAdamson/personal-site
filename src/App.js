import { useEffect, useState } from "react";
import AccordianContainer from "./components/AccordianContainer";
import Hero from "./components/Hero";


function App() {
    const [isOpening, setIsOpening] = useState(true);

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