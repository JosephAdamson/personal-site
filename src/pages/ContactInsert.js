import { useEffect, useRef, useState , useContext } from "react";
import github_dark from "../assets/github_dark.png"
import github_light from "../assets/github_light.png";
import linkedin_light from "../assets/linkedin_light.png";
import linkedin_dark from "../assets/linkedin_dark.png";
import ThemeButton from "../components/ThemeButton";
import Footer from "../components/Footer";
import { ThemeContext } from "../App";


function ContactInsert() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");
    const [isError, setIsError] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [displayAlert, setDisplayAlert] = useState(false);
    const contactForm = useRef();
    const [theme] = useContext(ThemeContext);

    const nameOnChangeHandler = (e) => {
        setName(e.target.value);
    }

    const emailOnChangeHandler = (e) => {
        setEmail(e.target.value);
    }

    const commentOnChangeHandler = (e) => {
        setComment(e.target.value);
    }

    const validateFormData = () => {
        const isError = !name || !email || !comment;
        setIsError(isError);
        setSubmitted(true);
    }

    useEffect(() => {
        if (submitted && isError) {
            setDisplayAlert(true);

            setTimeout(() => {
                setDisplayAlert(false);
                setSubmitted(false);
            }, 8000);
        }
    }, [isError, submitted]);


    return (
        <div className="flex flex-col items-center md:p-2">
            <div className="flex items-start w-2/3 md:w-7/12 my-4">
                <ThemeButton/>
            </div>
            <form 
            className="flex flex-col items-center justify-center w-5/6 md:h-full" 
            method="POST"
            name="contact"
            id="contact"
            ref={contactForm}
            type="submit"
            onSubmit={(e) => {
                e.preventDefault();
                validateFormData();
                if(!isError) {
                    contactForm.current.submit();
                }
            }}
            netlify>
                <div className="flex w-2/3 justify-center">
                    {displayAlert ?
                    <div className="flex w-10/12 justify-center rounded-md px-2 py-1 alert-box bg-[#cf0a1e]">
                    <p><span className="font-bold">Error:</span> Seems like you're missing something chief...
                    Check that the name, email and comment box have been filled in.</p></div> :
                    ""}
                </div>
                <div className="flex flex-col justify-between w-2/3">
                    <label>name</label>
                    <input type="text" name="name" onChange={nameOnChangeHandler}/>
                </div>
                <br/>
                <div className="flex flex-col justify-between w-2/3">
                    <label>email</label>
                    <input type="text" name="email" onChange={emailOnChangeHandler}/>
                </div>
                <br/>
                <div className="flex flex-col justify-between w-2/3 h-40">
                    <label>comment</label>
                    <textarea className="h-full" name="comment" onChange={commentOnChangeHandler}/>
                </div>
                <div className="flex w-2/3 ustify-start my-8">
                    <button form="contact">submit</button>
                </div>
                {/* connect netlify form */}
                <input type="hidden" name="form-name" value="contact" />
            </form>
            <div className="flex justify-center gap-4">
                <div className="flex m1 h-6 w-6 md:h-8 md:w-8 justify-center">
                    <a href="https://github.com/JosephAdamson" rel="noreferrer" target="_blank"><img 
                    src={
                        theme === "light" ? github_light : github_dark
                    } alt="me.jpeg"/></a>
                </div>
                <div className="flex m1 h-6 w-6 md:h-8 md:w-8 justify-center">
                    <a href="https://uk.linkedin.com/in/joseph-adamson-b677a513b" rel="noreferrer" target="_blank"><img 
                    src={
                        theme === "light" ? linkedin_light : linkedin_dark
                    } alt="me.jpeg"/></a>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ContactInsert;