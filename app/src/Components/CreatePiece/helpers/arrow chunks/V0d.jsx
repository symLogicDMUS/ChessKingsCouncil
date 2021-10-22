import { useStyles } from "./ArrowChunk.jss";
import {useContext} from "react";
import {ThemeContext} from "../../../../Context/ThemeContext";

export function V0d() {
    const {themes, themesDispatch} = useContext(ThemeContext);

    const classes = useStyles({theme: themes.createPiece});

    return (
        <svg
            height="24px"
            width="24px"
            viewBox="0 0 24 24"
            className={classes.arrowChunk}
        >
            <path
                d="M0 0h24v24H0V0z"
                fill="none"
                id="path2" />
            <path
                d="m 21.999973,11.999889 -3.999962,-3.9999616 -1.4e-5,2.9999856 -14.999927,7.1e-5 -9.8e-6,1.999991 14.9999278,-7.2e-5 -1.5e-5,2.999985 z"
                id="path4"
            />
        </svg>
    )
}