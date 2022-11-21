import vr_img from "../assets/metaverse_warrior.gif"
import ThemeToggle from "../components/ThemeToggle";
import Footer from "../components/Footer";

/*
Pseudo container for the 'About' section 
*/
function AboutInsert() {
    return (
        <div className="flex flex-col justify-left items-center">
            <div className="flex flex-col items-center m-4">
                <ThemeToggle/>
            </div>
            <hr className="h-1 w-2/3 rounded-sm m-1"/>
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
            <hr className="h-1 w-2/3 rounded-sm m-2"/>
            <Footer/>
        </div>
    )
}

export default AboutInsert;