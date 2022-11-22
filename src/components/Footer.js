

function Footer() {
    return (
        <div className="flex flex-col items-center my-2 w-2/3">
            <hr className="h-1 w-2/3 rounded-sm m-2"/>
            <div className="my-2">
                <p>&#169; Joseph Adamson {new Date().getFullYear()}</p>
            </div>
        </div>
    )
}

export default Footer