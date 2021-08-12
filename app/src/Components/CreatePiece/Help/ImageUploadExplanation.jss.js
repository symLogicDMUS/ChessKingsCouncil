import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes/themes.jss";

export const useStyles = makeStyles(
    {
        icon: (props) => ({
            color: themes[props.theme].text,
            height: "1.2rem",
            width: "1.2rem",
            marginLeft: "0.15rem",
            marginRight: "0.25rem",
        }),
        icon_adjust: (props) => ({
            transform: "translate(0, 0.2rem)",
        }),
        sentence: (props) => ({
            marginBottom: "1rem",
        }),
        number_list: (props) => ({
            marginLeft: 180,
        }),
    },
    { index: 1 }
);
