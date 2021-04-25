import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../../styles/themes/themes.jss";

export const useStyles = makeStyles({
    content: props => ({
        flexGrow: 1,
    }),
    title: props => ({
        fontSize: '1rem',
        letterSpacing: '0.0075em',
        color: themes[props.theme].text,
        fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
    }),
}, {index: 1});