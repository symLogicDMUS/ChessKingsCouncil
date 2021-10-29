import { useStyles } from "./ArrowChunk.jss";
import { useContext } from "react";
import { ThemeContext } from "../../../../Context/ThemeContext";

export function V45d() {
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
                d="m 19.071021,4.9288694 -5.6568,1e-7 2.1213,2.1213201 L 4.9290215,17.65679 6.3432216,19.071004 16.949722,8.4644025 19.071021,10.585723 Z"
                id="path4"
            />
        </svg>
    );
}
