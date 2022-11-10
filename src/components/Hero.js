import { useEffect, useState } from "react";

/*
Component rendered initially on site load. 
*/
function Hero() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // get the width of the full text and initiate timer
        setTimeout(() => {setIsVisible(false)}, 5000)
        const typeHero = document.querySelector("#type-hero");
        const typeWidth = `calc(${typeHero.offsetWidth + typeHero.clientWidth / 3}px)`;
        // trigger animation before we unmount
        return () => {
            document.documentElement.style.setProperty("--type-width", typeWidth);
            typeHero.classList.add("hero-animate");
            }
    }, []);

    return(
        isVisible && 
        <div className="h-screen w-full flex flex-col justify-center items-center px-10 md:px-24">
            <h1 id="type-hero" className="text-3xl md:text-5xl hero-text fit-content w-min overflow-hidden">
                Hello, I'm Joe.
            </h1>
        </div>
    )
}

export default Hero;