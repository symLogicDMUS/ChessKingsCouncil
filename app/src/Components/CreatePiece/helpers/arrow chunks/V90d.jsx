import { useStyles } from "./ArrowChunk.jss";

export function V90d() {
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
                d="m 12.353532,2.1464102 -3.9999616,3.9999617 2.9999856,1.4e-5 7.1e-5,14.9999271 1.999991,10e-6 -7.2e-5,-14.999928 2.999986,1.48e-5 z"
                id="path4"
                // style="stroke-width:0.999995"
            />
        </svg>
    )
}