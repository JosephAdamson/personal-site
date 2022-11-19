import { useState, useEffect } from "react";
import AccordianCard from "./AccordianCard";
import sleep from "../utils/helper.js"
import AboutInsert from "../pages/AboutInsert";
import BlogInsert from "../pages/BlogInsert";
import ContactInsert from "../pages/ContactInsert";
import ProjectInsert from "../pages/ProjectInsert";

/*
Main container for site page components 
*/
function AccordianContainer() {

    const [isExpanded, setIsExpanded] = useState(
        {
            "card-about": false,
            "card-projects": false,
            "card-contact": false,
            "card-blog": false
        }
    );
    const [isLoaded, setIsLoaded] = useState(
        {
            "card-about": false,
            "card-projects": false,
            "card-contact": false,
            "card-blog": false
        }
    );

    const [animations, setAnimations] = useState(
        {
            "card-about": "",
            "card-projects": "",
            "card-contact": "",
            "card-blog": ""
        }
    );

    const content = {
        "card-about": <AboutInsert/>,
        "card-projects": <ProjectInsert/>,
        "card-contact": <ContactInsert/>,
        "card-blog": <BlogInsert/>
    }

    const [animationFinished, setAnimationFinshed] = useState(false);
 
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
            // remove animations
            const updatedAnimations = {...animations}
            Object.keys(updatedAnimations).forEach((key) => {
                animations[key] = "";
            });
            setAnimations({...updatedAnimations});
            const about = document.querySelector("#card-about");
            expand(about);
            setAnimationFinshed(true);
        }
        // get the screen width to determine the animation
        const animation = (window.innerWidth < 768) ? "card-drop-x" : "card-drop-y";
        animateSetup(animation);
    },[])

    return (
        <>
            <div className="relative flex flex-col h-screen w-screen p-5 gap-5 md:flex-row" 
                onClick={(e) => {
                    const targ = e.target.closest("[id^=card-]")
                    expand(targ);
                }}>
                {Object.keys(content).map((key) => createCard(key, content[key]))}
                {animationFinished ? null :
                    <div className="absolute w-full h-full transparent inset-x-0 inset-y-0"></div>}
            </div>
        </>
    );
}

export default AccordianContainer;