import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes/themes.jss";

export const useStyles = makeStyles(
    {
        button: (props) => ({
            fontSize: "1rem",
            color: themes[props.theme].text,
            borderRadius: 0,
            width: "100%",
            height: "100%",
        }),
    },
    { index: 1 }
);
