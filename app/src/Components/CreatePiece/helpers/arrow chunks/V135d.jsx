import { useStyles } from "./ArrowChunk.jss";
import { useContext } from "react";
import { ThemeContext } from "../../../../Context/ThemeContext";

export function V135d() {
    const { themes, themesDispatch } = useContext(ThemeContext);

    const classes = useStyles({ theme: themes.createPiece });

    return (
        <svg
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            className={classes.arrowChunk}
        >
            <path d="M0 0h24v24H0V0z" fill="none" id="path2" />
            <path
                d="m 5.2825125,5.0753618 -1e-7,5.6568002 L 7.4038326,8.6108615 18.010433,19.217362 19.424647,17.803162 8.8180455,7.1966615 10.939366,5.075362 Z"
                id="path4"
            />
        </svg>
    );
}
