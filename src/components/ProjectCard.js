

function ProjectCard(props) {
    return (
        <div className="flex flex-col w-5/6 items-center py-2 px-0 m-2 rounded-md">
            <hr className="h-1 w-5/6 rounded-sm m-2"/>
            <div className="flex w-5/6 justify-start gap-2 py-2">
                <button><a href={props.github} target="_blank" rel="noreferrer">source</a></button>
                <button><a href={props.live} target="_blank" rel="noreferrer">live</a></button>
            </div>
            <div className="w-5/6 py-2">
                <img className="object-fit rounded-md" src={props.img} alt="project-img" />
            </div>
            <p className="flex w-5/6 py-2">
                {props.description}
            </p>
        </div>
    )
}

export default ProjectCard;