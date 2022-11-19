

function ProjectCard(props) {
    return (
        <div className={`flex flex-col items-center py-6`}>
            <div className="flex w-4/6 justify-between py-1">
                <button><a href={props.github}>source</a></button>
                <button><a href={props.live}>live</a></button>
            </div>
            <div className="w-2/3 py-2">
                <img className="object-fit" src={props.img} alt="project-img" />
            </div>
            <p className="flex w-2/3">
                {props.description}
            </p>
        </div>
    )
}

export default ProjectCard;