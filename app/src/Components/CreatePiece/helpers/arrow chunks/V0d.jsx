import { useStyles } from "./ArrowChunk.jss";

export function V0d() {
    const classes = useStyles();

    return (
        <svg
            height="24px"
            width="24px"
            viewBox="0 0 24 24"
            fill="#000000"
            className={classes.arrowChunk}
        >
            <path
                d="M0 0h24v24H0V0z"
                fill="none"
                id="path2" />
            <path
                d="m 21.999973,11.999889 -3.999962,-3.9999616 -1.4e-5,2.9999856 -14.999927,7.1e-5 -9.8e-6,1.999991 14.9999278,-7.2e-5 -1.5e-5,2.999985 z"
                id="path4"
                // style="stroke-width:0.999995"
            />
        </svg>
    )
}