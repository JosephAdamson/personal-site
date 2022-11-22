import ThemeButton from "../components/ThemeButton";
import ProjectModal from "../components/ProjectModal";
import Footer from "../components/Footer";

const projectData = {
    0: {
        title: "sort-visual",
        github: "https://github.com/JosephAdamson/Sort-Visual",
        live: "https://josephadamson.github.io/Sort-Visual/",
        imgMin: "https://i.imgur.com/QAiWF7W.png",
        img: "https://i.imgur.com/Yli8DLf.gif",
        description: `Sorting visualizer build with vanilla javacsript; merge sort or gnome sort
        which is the most effecient?`
    },
    1: {
        title: "url shortener",
        github: "https://github.com/JosephAdamson/URL-Shortner",
        live: "https://urlshortener9891.herokuapp.com/",
        imgMin: "https://i.imgur.com/Zr0gUfF.png",
        img: "https://i.imgur.com/3eygg4z.png",
        description: `URL shorter built with Django REST and deployed with Heroku.`
    },
    2: {
        title: "chonkchat",
        github: "https://github.com/JosephAdamson/ChonkChat",
        imgMin: "https://i.imgur.com/ZE0Q3TR.png",
        img: "https://i.imgur.com/igecwEU.png",
        description: `Java desktop chat application made with java sockets and JavaFx.`
    },
    3: {
        title: "this",
        imgMin: "https://i.imgur.com/kFo3Xz9.png",
        img: "https://i.imgur.com/1qNzw9K.png",
        description: "This site is my first experiment with react and tailwind"
    }
}

function ProjectInsert() {

    const createProjectCard = (key, options) => {
       
        return  <ProjectModal
                key={key}
                github={options?.github}
                live={options?.live}
                imgMin={options?.imgMin}
                img={options?.img}
                description={options?.description}
                title={options.title}
                />
    }

    return (
        <div className="flex flex-col justify-left items-center">
            <div className="flex items-start w-4/6 my-1 md:my-6">
                <ThemeButton/>
            </div>
            <div className="grid p-4 md:grid-cols-2 m-2 gap-2 w-2/3">
                {Object.keys(projectData).map((key) => {
                    return createProjectCard(key, projectData[key]);
                })}
            </div>
            <Footer/>
        </div>
    )
}

export default ProjectInsert;