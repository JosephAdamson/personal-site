import { useEffect, useState} from "react";


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

    const showAlert = () => {
        console.log(isError);
        const box = isError ?
            <div className="flex h-12 w-2/3 justify-center bg-[#ff462e]">hello</div> :
            <div className="flex h-12 w-2/3 justify-center bg-[#77ff6e]">hello</div> 

        return box;
    }

    useEffect(() => {
        if (submitted) {
            setDisplayAlert(true);
        }
        setTimeout(() => {
            setDisplayAlert(false);
            setSubmitted(false);
        }, 3000);
    }, [submitted]);


    return (
        <div className="flex flex-col">
            <div className="flex justify-center my-2">
                <h1>Drop me a message!</h1>
            </div>
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
                {displayAlert ?
                showAlert():
                <div className="flex h-12 w-2/3 justify-center"></div>
                }
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
                    <button className="p-1" form="contact">Submit</button>
                </div>
                {/* connect netlify form */}
                <input type="hidden" name="form-name" value="contact" />
            </form>
        </div>
    );
}

export default ContactInsert;