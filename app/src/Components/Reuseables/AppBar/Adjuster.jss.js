import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(
    {
        adjuster: (props) => ({
            width: props.width,
            height: props.height,
            pointerEvents: "none",
        }),
    },
    { index: 1 }
);
