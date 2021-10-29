import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../../../styles/themes/themes.jss";

export const useStyles = makeStyles(
    (theme) => ({
        arrowChunk: (props) => ({
            width: "70%",
            height: "70%",
            margin: "auto",
            fill: themes[props.theme].span,
        }),
    }),
    { index: 1 }
);
