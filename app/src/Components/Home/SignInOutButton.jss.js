import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../styles/themes/themes.jss";

export const useStyles = makeStyles({
    button: props => ({
        color: themes[props.theme].text,
        backgroundColor: themes[props.theme].button_fill,
    }),
}, {index: 1});