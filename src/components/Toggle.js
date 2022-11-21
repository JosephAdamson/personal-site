

function Toggle(props) {
    return (
        <>
            <label className="relative flex items-center h-5 w-12 md:h-6 md:w-12 border-2 rounded-3xl px-1"
            onClick={props.onClick}>
                {/* Allows wrapper component to access checkbox attribute */}
                <input ref={props.forwardedRef} className="h-0 w-0 opacity-0" type="checkbox"></input>
                <span className="slider"></span>
            </label>
        </>
    );

}

export default Toggle;