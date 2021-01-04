import React, {useState} from "react";
import {
    stroke_variants1,
    stroke_variants2,
    fill_variants1,
    fill_variants2,
} from "../../styles/Variants1.jss";
import {piece_saved_successfully} from "../../styles/animations/piece_saved_successfully";

export function PieceSavedSuccessfully({callback, theme}) {

    let [frame, setFrame] = useState(1);

    const nextFrame = () => {
        setFrame(frame + 1)
    };

    return (
        <>
            {frame === 1 ? (piece_saved_successfully(stroke_variants1, fill_variants1, nextFrame, theme)) : null}
            {frame === 2 ? (piece_saved_successfully(stroke_variants2, fill_variants2, callback, theme)) : null}
        </>
    )
}