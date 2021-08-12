import React, { useState } from "react";
import {
    fill_variants1,
    fill_variants2,
    stroke_variants1,
    stroke_variants2,
} from "./Variants1.jss";
import { game_saved_successfully } from "./game_saved_successfully";

export function GameSavedSuccessfully({ callback, theme }) {
    let [frame, setFrame] = useState(1);

    const nextFrame = () => {
        setFrame(frame + 1);
    };

    return (
        <>
            {frame === 1
                ? game_saved_successfully(
                      stroke_variants1,
                      fill_variants1,
                      nextFrame,
                      theme
                  )
                : null}
            {frame === 2
                ? game_saved_successfully(
                      stroke_variants2,
                      fill_variants2,
                      callback,
                      theme
                  )
                : null}
        </>
    );
}
