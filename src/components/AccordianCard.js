/*
Main conatiner for site 'sections' (About, Projects, etc.) 
*/
function AccordianCard(props) {
    return (
        <div className="flex flex-col h-20 w-full border-2 border-black rounded items-center 
        justify-center p-4 md:flex-row invisible md:h-full md:w-20 transition-all 
        ease-in-out duration-[1.5s]" id={props.id}>
            <h1 className="md:-rotate-90 w-100 h-10 truncate 
            text-center text-3xl flex-shrink-0 mt-1">{props.header}</h1>
            <div className={
                props.isExpanded ?
                "flex flex-col h-full w-full overflow-y-auto" :
                "flex flex-col h-full w-full overflow-hidden"
                } 
                id="content">
                {props.children}
            </div>
        </div>
    );
}

export default AccordianCard;