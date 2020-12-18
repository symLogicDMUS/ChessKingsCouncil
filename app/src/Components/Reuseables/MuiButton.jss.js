import {makeStyles} from "@material-ui/core/styles"
import {themes} from "../styles/themes.jss";

export const useStyles = makeStyles({
    button: props => ({
        fontSize: props.fontSize,
        ...props.style,
        background: themes[props.theme].button_fill,
        color: themes[props.theme].button_text,
        width: '8em',
        margin: '1.8em',
        '&:hover': {
            background: themes[props.theme].button_hover_fill,
            color: themes[props.theme].button_hover_text,
        },
    }),
});
