import {makeStyles} from "@material-ui/core/styles"
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles((theme) => ({
    button: props => ({
        fontSize: props.fontSize,
        height: '0.8em',
        width: '0.5em',
        lineHeight: 0,
        minWidth: 0,
        background: themes[props.theme].button_fill,
        color: themes[props.theme].text,
    }),
}));
