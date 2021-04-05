import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    page_title: props => ({
        letterSpacing: '0.0075em',
        color: themes[props.theme].text,
        fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
        '@media screen and (max-width: 960px)': {
            fontSize: '1rem',
        },
        '@media screen and (min-width: 960px) and (max-width: 1040px)': {
            fontSize: '0.9rem'
        },
        '@media screen and (min-width: 1040px)': {
            fontSize: '1rem',
        },
    }),
}, {index: 1});