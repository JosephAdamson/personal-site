import vr_img from "../assets/images/metaverse_warrior.gif"

/*
Pseudo container for the 'About' section 
*/
function AboutInsert() {
    return (
        <div className="flex flex-col justify-center">
            <div className="flex m-4 justify-center">
                <img className="object-cover w-24 h-36 rounded-md" src={vr_img} alt="me.jpeg" />
            </div>
            <div className="px-4 m-6">
                <p>
                    I'm an aspiring web developer and code tinkerer with degrees in Film and Computer Science.
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
        </div>
    )
}

export default AboutInsert;