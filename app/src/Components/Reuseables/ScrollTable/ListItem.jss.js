import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes/themes.jss";

export const useStyles = makeStyles(
    {
        list_item: (props) => ({
            color: themes[props.theme].text,
            fontFamily: "Roboto-Light, Roboto",
            cursor: "pointer",
        }),
    },
    { index: 1 }
);
