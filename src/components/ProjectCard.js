

function ProjectCard(props) {
    return (
        <div className="relative flex h-20 md:h-40 w-70 md:w-full gap-1">
            <div className="absolute flex justify-center items-center bg-black 
            h-full w-full opacity-0 hover:opacity-50 rounded-md">
                <h1 className=" text-lg md:text-3xl text-white">{props.title}</h1>
            </div>
            <img className="object-cover h-full w-full rounded-md border-[1px] border-black"src={props.imgMin} alt={props.title} />
        </div>
    )
}

export default ProjectCard;