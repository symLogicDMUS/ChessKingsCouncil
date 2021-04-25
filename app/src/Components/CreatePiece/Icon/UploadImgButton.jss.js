import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";

export const useStyles = makeStyles({
    button: props => ({
        width: '100%',
        height: '100%',
        fontSize: '1rem',
        borderRadius: 0,
        color: themes[props.theme].text,
    }),
    icon: props => ({
        fontSize: 'inherit',
    }),
}, {index: 1});