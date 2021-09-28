import { useStyles } from "./ArrowChunk.jss";

export function V180d() {
    const classes = useStyles();

    return (
        <svg
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
            className={classes.arrowChunk}
        >
            <path
                d="M0 0h24v24H0V0z"
                fill="none"
                id="path2" />
            <path
                d="m 2.5000529,11.792851 3.9999619,3.999962 1.38e-5,-2.999986 14.9999274,-7.1e-5 10e-6,-1.99999 -14.9999283,7.1e-5 1.51e-5,-2.9999856 z"
                id="path4"
                // style="stroke-width:0.999995"
            />
        </svg>

    )
}