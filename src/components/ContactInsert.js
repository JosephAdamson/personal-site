

function ContactInsert() {
    return (
        <form 
        className="flex flex-col items-center justify-center md:h-full" 
        method="POST"
        name="contact"
        onSubmit="submit"
        netlify>
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
    )
}

export default ContactInsert;