import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../styles/themes.jss";

export const textColor = (theme) => ({
    color: themes[theme].text,
});
export const useStyles = makeStyles({
    my_pieces: props => ({
        overflowX: 'hidden',
        width: '100vw',
        flexGrow: 3,
        display: 'flex',
        flexDirection: 'column',
    }),
    piece_profiles: props => ({
        margin: 'auto',
        borderRadius: '0.5rem',
    }),
    title: props => ({
        fontWeight: 500,
        lineHeight: 1.6,
        overflow: 'hidden',
        fontSize: '1.08rem',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        letterSpacing: '0.0075em',
        fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',

    }),
}, {index: 1});
