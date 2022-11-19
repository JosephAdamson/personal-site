import { useEffect, useState} from "react";
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png";


function ContactInsert() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");
    const [isError, setIsError] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [displayAlert, setDisplayAlert] = useState(false);

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
        <div className="flex flex-col p-4">
            <form 
            className="flex flex-col items-center justify-center md:h-full" 
            method="POST"
            name="contact"
            id="contact"
            type="submit"
            onSubmit={(e) => {
                e.preventDefault();
                validateFormData();
            }}
            netlify>
                <div className="flex w-2/3 justify-center">
                    {displayAlert ?
                    <div className="flex w-10/12 justify-center rounded-md px-2 py-1 alert-box bg-[#cf0a1e]">
                    <p><span className="font-bold">Error:</span> Seems like you're missing something chief...
                    Check that the name, email and comment box have been filled in.</p></div> :
                    ""}
                </div>
                <div className="flex justify-center my-2">
                    <h1 className="text-xl">Drop me a message!</h1>
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
                <div className="flex w-2/3 ustify-start my-4">
                    <button className="p-1" form="contact">submit</button>
                </div>
                {/* connect netlify form */}
                <input type="hidden" name="form-name" value="contact" />
            </form>
            <div className="flex flex-col items-center">
                <h1>Or find me at...</h1>
                <div className="flex justify-center">
                    <div className="flex m-4 h-10 w-10 md:h-14 md:w-14 justify-center">
                        <a href="https://github.com/JosephAdamson" rel="noreferrer" target="_blank"><img 
                        src={github} alt="me.jpeg"/></a>
                    </div>
                    <div className="flex m-4 h-10 w-10 md:h-14 md:w-14 justify-center">
                        <a href="https://uk.linkedin.com/in/joseph-adamson-b677a513b" rel="noreferrer" target="_blank"><img 
                        src={linkedin} alt="me.jpeg"/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactInsert;