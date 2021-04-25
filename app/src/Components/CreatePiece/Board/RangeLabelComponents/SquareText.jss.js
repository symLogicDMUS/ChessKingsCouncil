import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../../styles/themes/themes.jss";
import {sqrSize} from "../CreatePieceBoard.jss";

export const spanFrame = (theme) => ({
    backgroundColor: themes[theme].span,
    display: 'flex',
    flexDirection: 'column',
});

export const offsetFrame = (theme) => ({
    backgroundColor: themes[theme].offset,
    display: 'flex',
    flexDirection: 'column',
});

export const useStyles = makeStyles({
    sqr_text: props => ({
        '@media screen and (max-width: 960px)':{
            fontSize: '2.25vw',
        },
        '@media screen and (min-width: 960px)':{
            fontSize: '1.2vw',
        },
        margin: 'auto',
        textTransform: 'none',
        letterSpacing: '0.0075em',
        fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
        color: themes[props.theme].sqr_text,
    }),
}, {index: 1});