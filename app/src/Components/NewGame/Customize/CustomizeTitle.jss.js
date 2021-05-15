import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";

export const useStyles = makeStyles({
    text: props => ({
       color: themes[props.theme].text,
    }),
    search: props => ({
        margin: 'unset',
        height: '1.65rem',
        '@media screen and (max-width: 580px)': {
            width: '60vw',
        },
        '@media screen and (min-width: 580px) and (max-width: 960px)': {
            flexGrow: 10,
            maxWidth: '36.5vw',
        },
        marginLeft: 8,
        marginRight: 16,
    }),
    promo_all: props => ({
        "& .MuiSvgIcon-root": {
            fontSize: '1.1rem',
        },
        "& .MuiTypography-root": {
            letterSpacing: '0.0075em',
            fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: '1rem',
        },
        marginRight: 8,
    }),
    title: props => ({
        '@media screen and (max-width: 960px)': {
            marginLeft: 36,
        },
    }),
}, {index: 1});