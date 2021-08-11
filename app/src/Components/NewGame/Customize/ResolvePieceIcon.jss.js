import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes/themes.jss";

export const useStyles = makeStyles(
    {
        piece_icon: (props) => ({
            width: "1.5rem",
            height: "1.5rem",
            color: themes[props.theme].text,
        }),
    },
    { index: 1 }
);
