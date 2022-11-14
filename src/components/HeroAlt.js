import { useEffect, useState } from "react";
import sleep from "../utils/helper";

function HeroAlt() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // get the width of the full text and initiate timer
        setTimeout(() => {setIsVisible(false)}, 15000)
        const textBoxes = Array.from(document.querySelectorAll("[id^=type-box]"));
        console.log(textBoxes);
        const widths = textBoxes.map(box => `calc(${box.offsetWidth + box.clientWidth / 3}px)`)

        return async () => {
            for (let i = 0; i < textBoxes.length; i++) {
                console.log(i);
                document.documentElement.style.setProperty("--type-width", widths[i]);
                textBoxes[i].classList.add("hero-animate");
                await sleep(4000);
                textBoxes[i].style.borderRight = "none";
            }

            // textBoxes.forEach((box, i) => {
            //     document.documentElement.style.setProperty("--type-width", widths[i]);
            //     box.classList.add("hero-animate");
            // })
        }
        // const typeHero = document.querySelector("#type-hero");
        // const typeWidth = `calc(${typeHero.offsetWidth + typeHero.clientWidth / 3}px)`;
        // // trigger animation before we unmount
        // return () => {
        //     document.documentElement.style.setProperty("--type-width", typeWidth);
        //     typeHero.classList.add("hero-animate");
        //     }
        // mountText();
    }, []);

    return(
        isVisible &&
        <>
        <div className="flex m-1">
            <h1 className="text-xl md:text-2xl hero-icon fit-content px-2">$</h1>
            <h1 id="type-box-1" className="text-xl md:text-2xl hero-text fit-content w-min overflow-hidden">
                Hello, I'm Joe.
            </h1>
        </div>
        <div className="flex m-1">
            <h1 className="text-xl md:text-2xl hero-icon fit-content px-2">$</h1>
            <h1 id="type-box-2" className="text-xl md:text-2xl hero-text fit-content w-min overflow-hidden">
                hello hello hello
            </h1>
        </div>
        </> 
    )
}

export default HeroAlt;