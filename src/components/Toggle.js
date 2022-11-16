import { useState } from "react";


function Toggle(props) {
    return (
        <>
            <label className="relative flex items-center h-7 w-14 border-2 rounded-3xl px-1"
            onClick={props.onClick}>
                {/* Allows wrapper component to access checkbox attribute */}
                <input ref={props.forwardedRef} className="h-0 w-0 opacity-0" type="checkbox"></input>
                <span className="slider"></span>
            </label>
        </>
    );

}

export default Toggle;