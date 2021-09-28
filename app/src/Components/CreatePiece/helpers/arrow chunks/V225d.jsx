import { useStyles } from "./ArrowChunk.jss";
import {useContext} from "react";
import {ThemeContext} from "../../../../Context/ThemeContext";

export function V225d() {
    const {themes, themesDispatch} = useContext(ThemeContext);

    const classes = useStyles({theme: themes.createPiece});

    return (
        <svg
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            className={classes.arrowChunk}
        >
            <path
                d="M0 0h24v24H0V0z"
                fill="none"
                id="path2" />
            <path
                d="M 5.4290046,18.863871 H 11.085805 L 8.9645046,16.742551 19.571005,6.13595 18.156805,4.7217361 7.5503044,15.328338 5.4290048,13.207017 Z"
                id="path4"
            />
        </svg>
    )
}