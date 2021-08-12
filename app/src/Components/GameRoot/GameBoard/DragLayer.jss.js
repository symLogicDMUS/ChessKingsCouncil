import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(
    {
        custom_drag_layer: (props) => ({
            position: "fixed",
            pointerEvents: "none",
            zIndex: 4,
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
        }),
    },
    { index: 1 }
);
