import ProjectCard from "../components/ProjectCard";

const projectData = {
    0: {
        github: "https://github.com/JosephAdamson/Sort-Visual",
        live: "https://josephadamson.github.io/Sort-Visual/",
        img: "https://i.imgur.com/Yli8DLf.gif",
        description: `Sorting visualizer build with vanilla javacsript; merge sort or gnome sort
        which is the most effecient?`
    },
    1: {
        github: "https://github.com/JosephAdamson/URL-Shortner",
        live: "https://urlshortener9891.herokuapp.com/",
        img: "https://i.imgur.com/3eygg4z.png",
        description: `URL shorter built with Django REST and deployed with Heroku.`
    },
    2: {
        github: "https://github.com/JosephAdamson/ChonkChat",
        img: "https://i.imgur.com/igecwEU.png",
        description: `Java desktop chat application made with java sockets and JavaFx.`
    }
}

function ProjectInsert() {

    const createProjectCard = (key, options) => {
        return <ProjectCard
                key={key}
                github={options?.github}
                live={options?.live}
                img={options?.img}
                description={options?.description}
                />
    }

    return (
        <div className="flex flex-col">
            {Object.keys(projectData).map((key, i) => {
                return createProjectCard(key, projectData[key]);
            })}
        </div>
    )
}

export default ProjectInsert;