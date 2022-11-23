import { useEffect, useRef, useState , useContext } from "react";
import { ThemeContext } from "../App";
import github_dark from "../assets/github_dark.png"
import github_light from "../assets/github_light.png";
import linkedin_light from "../assets/linkedin_light.png";
import linkedin_dark from "../assets/linkedin_dark.png";
import sent_dark from "../assets/sent_light.png";
import sent_light from "../assets/sent_dark.png";
import ThemeButton from "../components/ThemeButton";
import Footer from "../components/Footer";
import sleep from "../utils/helper";


function ContactInsert() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");
    const [isError, setIsError] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [success, setSucess] = useState(false);
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
        setSubmitted(submitted => !submitted);
    }

    const resetFields = () => {
        setName("");
        setEmail("");
        setComment("");
    }

    const submitForm = async (e) => {

        try {
           const form = e.target;
           const formData = new FormData(form);

           fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams(formData).toString()
           })
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {

        const onSuccessHandler = async () => {
            setSucess(true);
            await sleep(1000);
            const about = document.querySelector("#card-about");
            about.click();
            await sleep(500);
            setSucess(false);
            setSubmitted(false);
        }

        if (submitted && isError) {
            setDisplayAlert(true);

            setTimeout(() => {
                setDisplayAlert(false);
                setSubmitted(false);
            }, 8000);
        }

        if (submitted && !isError) {
            onSuccessHandler();
        }
    }, [isError, submitted]);


    return (
        <div className="flex flex-col md:p-2">
            {!success ? 
                <div className="flex flex-col items-center md:p-2">
                    <div className="flex items-start w-7/12 md:w-7/12 my-4">
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
                            submitForm(e);
                            resetFields();
                        }
                    }}
                    netlify>
                        <div className="flex w-2/3 justify-center">
                            {displayAlert ?
                            <div className="flex w-full justify-center rounded-md px-2 alert-box bg-[#cf0a1e]">
                            <p><span className="font-bold">Error:</span> Seems like you're missing something chief...
                            Check that the name, email and comment box have been filled in.</p></div> :
                            ""}
                        </div>
                        <div className="flex flex-col justify-between w-2/3">
                            <label>name</label>
                            <input type="text" name="sender-name" onChange={nameOnChangeHandler}/>
                        </div>
                        <br/>
                        <div className="flex flex-col justify-between w-2/3">
                            <label>email</label>
                            <input type="text" name="sender-email" onChange={emailOnChangeHandler}/>
                        </div>
                        <br/>
                        <div className="flex flex-col justify-between w-2/3 h-40">
                            <label>comment</label>
                            <textarea className="h-full" name="sender-comment" onChange={commentOnChangeHandler}/>
                        </div>
                        <div className="flex w-2/3 justify-start my-8">
                            <button form="contact">submit</button>
                            <div className="flex justify-center gap-2 md:gap-8 w-full">
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
                        </div>
                        <input type="hidden" name="form-name" value="contact" />
                    </form> 
                        <Footer/>
                </div> : 
                    <div className="flex w-full h-full justify-center items-center border-2">
                        <img className="h-40 w-40" 
                        src={theme === "light" ? sent_light : sent_dark} alt="sent"/>
                    </div>}
        </div>
    );
}

export default ContactInsert;