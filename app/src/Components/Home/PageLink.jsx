import React, {useState} from "react";
import {Link} from "react-router-dom";

export function PageLink({name, className, path, pathType, image, hoverImage}) {

    let [hover, setHover] = useState(false)

    if (pathType === 'local') {
        return (
            <Link to={path}>
                <img src={hover ? hoverImage : image} className={className}
                     onMouseEnter={() => setHover(true)}
                     onMouseLeave={() => setHover(false)}
                />
            </Link>
        )
    } else {
        return (
            <a href={path}>
                <img src={hover ? hoverImage : image} className={className}
                     onMouseEnter={() => setHover(true)}
                     onMouseLeave={() => setHover(false)}
                />
            </a>
        )
    }
}