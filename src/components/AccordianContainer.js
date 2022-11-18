import { useState, useEffect } from "react";
import AccordianCard from "./AccordianCard";
import sleep from "../utils/helper.js"
import AboutInsert from "../pages/AboutInsert";
import SettingsInsert from "../pages/SettingsInsert";
import ContactInsert from "../pages/ContactInsert";

/*
Main container for site page components 
*/
function AccordianContainer() {

    const [isExpanded, setIsExpanded] = useState(
        {
            "card-about": false,
            "card-projects": false,
            "card-contact": false,
            "card-settings": false
        }
    );
    const [isLoaded, setIsLoaded] = useState(
        {
            "card-about": false,
            "card-projects": false,
            "card-contact": false,
            "card-settings": false
        }
    );

    const [animations, setAnimations] = useState(
        {
            "card-about": "",
            "card-projects": "",
            "card-contact": "",
            "card-settings": ""
        }
    );

    const content = {
        "card-about": <AboutInsert/>,
        "card-projects": <div>I am a placeholder</div>,
        "card-contact": <ContactInsert/>,
        "card-settings": <SettingsInsert/>
    }
 
    const createCard = (id, content) => {
        return <AccordianCard
            key={id}
            id={id}
            header={id.split("-")[1]}
            isExpanded={isExpanded[id]}
            isLoaded={isLoaded[id]}
            animation={animations[id]}
        >
            {content}
        </AccordianCard>
    }

    const expand = (targ) => {
        if (targ !== null) {
            const updateExpanded = {...isExpanded};
            Object.keys(isExpanded).forEach((key) => {
                if (key === targ.id) {
                    updateExpanded[key] = true;
                    
                } else {
                    updateExpanded[key] = false;
                }
            })
            setIsExpanded({...updateExpanded});
        }
    }

    // initial page animation
    useEffect(() => {  
        const animateSetup = async (animation) => {
            for (let key of Object.keys(isLoaded)) {
                setIsLoaded((isLoaded) => {return {...isLoaded,[key]: true}});
                setAnimations((animations) => {return {...animations, [key]: animation}})
                await sleep(500);
            }
            await sleep(1000);
            const about = document.querySelector("#card-about");
            expand(about);
        }
        // get the screen width to determine the animation
        const animation = (window.innerWidth < 768) ? "card-drop-x" : "card-drop-y";
        animateSetup(animation);
    },[])

    return (
        <div className="flex flex-col h-screen w-screen p-5 gap-5 md:flex-row" 
            onClick={(e) => {
                const targ = e.target.closest("[id^=card-]")
                expand(targ);
            }}>
            {Object.keys(content).map((key) => createCard(key, content[key]))}
        </div>
    );
}

export default AccordianContainer;