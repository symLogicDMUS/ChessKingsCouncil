import { useStyles } from "./ArrowChunk.jss";
import {useContext} from "react";
import {ThemeContext} from "../../../../Context/ThemeContext";

export function V315d() {
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
                d="m 19.217514,18.717379 v -5.6568 l -2.12132,2.1213 L 6.4895924,4.5753788 5.0753788,5.9895789 15.681981,16.596079 l -2.121321,2.1213 z"
                id="path4"
            />
        </svg>
    )
}