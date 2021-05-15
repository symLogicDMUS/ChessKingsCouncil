import React, {useState} from "react";
import {
    stroke_variants1,
    stroke_variants2,
    fill_variants1,
    fill_variants2,
} from "./Variants1.jss";
import {theme_saved_successfully} from "./theme_saved_successfully";

function ThemeSavedSuccessfully({callback, theme}) {
    const [frame, setFrame] = useState(1);

    const nextFrame = () => {
        setFrame(frame + 1)
    };

    return (
        <>
            {frame === 1 ? (theme_saved_successfully(stroke_variants1, fill_variants1, nextFrame, theme)) : null}
            {frame === 2 ? (theme_saved_successfully(stroke_variants2, fill_variants2, callback, theme)) : null}
        </>
    )
}

export default ThemeSavedSuccessfully;