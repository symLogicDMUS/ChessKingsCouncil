import React from "react";

export function NavBorder({navBarPosTop, navBarPosLeft, border, togleNavBorder}) {
    return (
        <div style={{position:"absolute", zIndex:2, width:600, height:30, top:navBarPosTop, left:navBarPosLeft, border:border}} onMouseLeave={togleNavBorder}></div>
    )
}