import { useStyles } from "./ArrowChunk.jss";
import {useContext} from "react";
import {ThemeContext} from "../../../../Context/ThemeContext";

export function V270d() {
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
                d="m 12.146494,21.646331 3.999962,-3.999962 -2.999986,-1.4e-5 -7.1e-5,-14.999928 -1.999991,-9.6e-6 7.2e-5,14.9999286 -2.9999857,-1.5e-5 z"
                id="path4"
            />
        </svg>
    )
}