import { useState, useEffect } from "react";
import AccordianCard from "./AccordianCard";
import sleep from "../utils/helper.js"
import AboutInsert from "./AboutInsert";
import SettingsInsert from "./SettingsInsert";

/*
Main container for site page components 
*/
function AccordianContainer() {

    const [cardExpanded, setIsExpanded] = useState(
        {
            "card-about": true,
            "card-projects": false,
            "card-contact": false,
            "card-settings": false
        }
    );

    function expand(targ) {
        if (targ !== null) {
            const cards = document.querySelectorAll("[id^=card-]");
            const updateExpanded = {...cardExpanded};
            cards.forEach((card) => {
                if (card.id === targ.id) {
                    card.classList.add("card-expand");
                    updateExpanded[card.id] = true
                    
                } else {
                    card.classList.remove("card-expand");
                    updateExpanded[card.id] = false;
                }
            })
            setIsExpanded({...updateExpanded});
        }
    }

    // initial page animation
    useEffect(() => {
        async function animateSetup(cards, animation) {
            for (let card of cards) {
                card.classList.add(animation, "card-show");
                await sleep(500);
            }
            await sleep(1000);
            expand(cards[0]);
        }
        // get the screen width to determine the animation
        const animation = (window.innerWidth < 768) ? "card-drop-x" : "card-drop-y";
        const cards = Array.from(document.querySelectorAll("[id^=card-]"));
        animateSetup(cards, animation);

    },[])

    return (
        <div className="flex flex-col h-screen w-screen p-5 gap-5 md:flex-row" 
            onClick={(e) => {
                const targ = e.target.closest("[id^=card-]")
                expand(targ);
            }}>
            <AccordianCard 
                id="card-about" 
                header="About" 
                isExpanded={cardExpanded["card-about"]}
                >
                <AboutInsert/>
            </AccordianCard>
            <AccordianCard 
                id="card-projects" 
                header="Projects"
                isExpanded={cardExpanded["card-projects"]}
                >
                <div>I am a placeholder</div>
            </AccordianCard>
            <AccordianCard 
                id="card-contact" 
                header="Contact"
                isExpanded={cardExpanded["card-contact"]}
                >
                <div>I am a placeholder</div>
            </AccordianCard>
            <AccordianCard 
                id="card-settings" 
                header="Settings"
                isExpanded={cardExpanded["card-settings"]}
                >
                <SettingsInsert/>
            </AccordianCard>
        </div>
    );
}

export default AccordianContainer;