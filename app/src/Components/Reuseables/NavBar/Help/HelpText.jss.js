import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../../styles/themes.jss";

export const useStyles = makeStyles({
    text: props => ({
        color: themes[props.theme].text,
        fontSize: '1rem',
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