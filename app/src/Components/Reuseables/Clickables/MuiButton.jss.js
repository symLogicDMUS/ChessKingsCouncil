import {makeStyles} from "@material-ui/core/styles"
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    button: props => ({
        background: themes[props.theme].button_fill,
        color: themes[props.theme].button_text,
        '&:hover': {
            background: themes[props.theme].button_hover_fill,
            color: themes[props.theme].button_hover_text,
        },
        ...props.style,
    }),
}, {index: 1});
