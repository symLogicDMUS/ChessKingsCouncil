import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    title: props => ({
        fontWeight: 500,
        lineHeight: 1.6,
        overflow: 'hidden',
        fontSize: '1.08rem',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        letterSpacing: '0.0075em',
        color: themes[props.theme].text,
        fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
    }),
}, {index: 1});