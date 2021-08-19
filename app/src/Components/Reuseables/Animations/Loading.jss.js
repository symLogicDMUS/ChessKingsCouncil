import { makeStyles } from "@material-ui/core/styles";

export const variants = {
    initial: {
        pathLength: 0,
        fill: "rgba(0, 0, 0, 0)",
    },
    animate: {
        pathLength: 1,
        fill: "rgba(0, 0, 0, 0.75)",
    },
};

export const transition = { repeat: Infinity, duration: 1 };

export const useStyles = makeStyles(
    (theme) => ({
        body: (props) => ({
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
        }),
        animation: (props) => ({
            width: "25vw",
            minWidth: 180,
            margin: "auto",
        }),
    }),
    { index: 1 }
);
