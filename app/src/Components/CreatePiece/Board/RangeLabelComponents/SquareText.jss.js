import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../../styles/themes.jss";
import {sqrSize} from "../CreatePieceBoard.jss";

export const frame = (theme) => ({
    backgroundColor: themes[theme].span,
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
        textTransform: 'none',
        letterSpacing: '0.0075em',
        fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
        color: themes[props.theme].sqr_text,
    }),
    span: props => ({
        margin: 'auto'
    }),
    adjust: props => ({
        position: 'relative',
        top: '1.75vw',
    }),
}, {index: 1});