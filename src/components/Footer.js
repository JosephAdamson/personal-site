import github from "../assets/github.png"

function Footer() {
    return (
        <div className="flex items-center">
            <div>
                <p>&#169; Joseph Adamson {new Date().getFullYear()}</p>
            </div>
            <div className="flex m-4 h-10 w-10 md:h-14 md:w-14 justify-center">
                <a href="https://github.com/JosephAdamson" rel="noreferrer" target="_blank"><img className="" 
                src={github} alt="me.jpeg"/></a>
            </div>
        </div>
    )
}

export default Footer