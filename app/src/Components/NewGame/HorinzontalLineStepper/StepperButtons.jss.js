import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes/themes.jss";
import { fade } from "@material-ui/core";

export const useStyles = makeStyles(
    (theme) => ({
        action_buttons: (props) => ({
            display: "flex",
        }),
        button: (props) => ({
            marginRight: theme.spacing(3),
            color: themes[props.theme].outline_alt,
            borderColor: themes[props.theme].outline_alt,
            "&:hover": {
                backgroundColor: fade(themes[props.theme].outline_alt, 0.3),
                color: themes[props.theme].text,
            },
        }),
        back: (props) => ({
            marginRight: "0.5rem",
        }),
        next: (props) => ({
            marginLeft: "0.5rem",
            marginRight: "0.5rem",
        }),
        play: (props) => ({
            marginLeft: "0.5rem",
        }),
    }),
    { index: 1 }
);
