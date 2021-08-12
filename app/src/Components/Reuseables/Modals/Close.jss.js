import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes/themes.jss";

export const useStyles = makeStyles(
    {
        close: (props) => ({
            cursor: "pointer",
        }),
        icon: (props) => ({
            color: themes[props.theme].text,
        }),
    },
    { index: 1 }
);
