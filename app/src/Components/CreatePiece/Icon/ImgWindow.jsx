import React from "react";

export function ImgWindow({className, src }) {
    return <div className={className}>
        {src ? (
            <img src={src} style={{width: '100%', height: '100%'}}/>
        ) : null}
    </div>;
}