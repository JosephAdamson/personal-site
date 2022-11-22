import vr_img from "../assets/metaverse_warrior.gif"
// import ThemeToggle from "../components/ThemeToggle";
import ThemeButton from "../components/ThemeButton";
import Footer from "../components/Footer";

/*
Pseudo container for the 'About' section 
*/
function AboutInsert() {
    return (
        <div className="flex flex-col justify-left items-center">
            <div className="flex items-start w-5/6 md:w-4/6 my-4">
                <ThemeButton/>
            </div>
            {/* <hr className=" w-0 md:h-1 md:w-3/6 rounded-sm md:m-2"/> */}
            <div className="flex m-4 justify-center">
                <img className="object-cover w-24 h-36 md:w-32 md:h-48 rounded-md" 
                src={vr_img} alt="me.jpeg" />
            </div>
            <div className="px-4 m-6 md:w-2/3">
                <p>
                    I'm an aspiring web developer and code tinkerer with degrees in Computer Science and Film.
                    At the moment I'm looking to apply my grab-bag of tech skills to any junior dev roles that suit;
                    my main focus rencently has been webdev (JavaScript and Python 3) although I have been known write a
                    line or two in Java and C. I'm always looking for different projects to make me a more well rounded programmer.
                </p>
                <br/>
                <p>
                    When I'm not sat in front of the computer, I like to read books, exercise, 
                    learn new things and talk smack about films.
                </p>
            </div>
            <Footer/>
        </div>
    )
}

export default AboutInsert;