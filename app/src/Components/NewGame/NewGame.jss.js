import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../styles/themes/themes.jss";

export const views = {
    position: "fixed",
    left: "7.5vw",
    top: "7.5vw",
};

export const useStyles = makeStyles(
    {
        item: (props) => ({
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }),
        title: (props) => ({
            width: "50vw",
            marginBottom: 26,
        }),
    },
    { index: 1 }
);
