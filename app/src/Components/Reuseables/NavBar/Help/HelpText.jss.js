import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../../styles/themes/themes.jss";

export const useStyles = makeStyles({
    text: props => ({
        color: themes[props.theme].text,
        fontSize: '1rem',
    }),
    icon: props => ({
        display: 'inline-block',
        color: themes[props.theme].text,
        width: '1rem',
        height: '1rem',
        transform: 'translate(0, 0.12rem)',
    }),
    emphasis: props => ({
        fontWeight: 550,
        letterSpacing: '0.06rem',
        display: 'inline-block'
    }),
    flex: props => ({
        display: 'flex',
        alignItems: 'center',
    }),
}, {index: 1});