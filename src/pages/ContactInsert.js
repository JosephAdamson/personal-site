import { useRef } from "react";


function ContactInsert() {
    const contactForm = useRef(null);
    const successBox = useRef(null);

    function showSuccess() {
        const formData = contactForm.formData;
        console.log(formData);
    }

    return (
        <div className="flex flex-col">
            <div className="flex justify-center my-2">
                <h1>Drop me a message!</h1>
            </div>
            <form 
            className="flex flex-col items-center justify-center md:h-full" 
            method="POST"
            name="contact"
            ref={contactForm}
            onSubmit={(e) => {
                e.preventDefault();
                showSuccess();
                contactForm.submit();
                return false;
            }}
            netlify>
                <div ref={successBox} className="flex h-12 w-2/3 border justify-center">hello</div>
                <div className="flex flex-col justify-between w-2/3">
                    <label>name</label>
                    <input type="text" name="sender-name"/>
                </div>
                <br/>
                <div className="flex flex-col justify-between w-2/3">
                    <label>email</label>
                    <input type="text" name="sender-email"/>
                </div>
                <br/>
                <div className="flex flex-col justify-between w-2/3 h-40">
                    <label>comment</label>
                    <textarea className="h-full" name="sender-comment"/>
                </div>
                <div className="flex w-2/3 ustify-start my-4">
                    <input className="p-1"type="submit"/>
                </div>
                {/* connect netlify form*/}
                <input type="hidden" name="form-name" value="contact" />
            </form>
        </div>
    );
}

export default ContactInsert;