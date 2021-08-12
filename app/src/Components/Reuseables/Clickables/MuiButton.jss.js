import { lighten, makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes/themes.jss";

export const useStyles = makeStyles(
    {
        button: (props) => ({
            background: themes[props.theme].button_fill,
            color: themes[props.theme].button_text,
            "&:hover": {
                backgroundColor: lighten(
                    themes[props.theme].button_fill,
                    0.035
                ),
                color: lighten(themes[props.theme].button_text, 0.035),
            },
        }),
    },
    { index: 1 }
);
