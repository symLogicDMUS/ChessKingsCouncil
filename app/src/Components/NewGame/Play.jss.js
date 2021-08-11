import { themes } from "../styles/themes/themes.jss";
import { darken, lighten, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(
    {
        disabled: (props) => ({
            "& .MuiButton-root": {
                opacity: "0.85",
                color: darken(themes[props.theme].text, 0.4),
                backgroundColor: lighten(themes[props.theme].fill, 0.1),
            },
        }),
        icon: (props) => ({
            fontSize: "inherit",
            height: "1.5em",
        }),
        dialog: (props) => ({
            backgroundColor: themes[props.theme].fill,
            color: themes[props.theme].text,
        }),
        dialog_button: (props) => ({
            color: themes[props.theme].modal_actions,
            backgroundColor: themes[props.theme].fill,
        }),
        text: (props) => ({
            color: themes[props.theme].text,
        }),
    },
    { index: 1 }
);
