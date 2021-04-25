import { makeStyles } from "@material-ui/core/styles";
import {sqrItemSizeLg, sqrItemSizeMd, sqrItemSizeSm} from "../PieceProfiles/constants.jss";
import {themes} from "../styles/themes/themes.jss";

export const textColor = (theme) => ({color: themes[theme].text});

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
        letterSpacing: '0.0075em',
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
    search: props => ({
        '@media screen and (max-width: 500px)': {
            width: '100%',
        },
        '@media screen and (min-width: 501px) and (max-width: 600px)': {
            width: sqrItemSizeSm,
            marginRight: '9.25vw',
        },
        '@media screen and (min-width: 600px) and (max-width: 960px)': {
            width: sqrItemSizeMd,
            marginRight: '5vw',
        },
        '@media screen and (min-width: 960px)': {
            width: sqrItemSizeLg,
        },
        height: '1.85rem',
    }),
    icon: props => ({
       fontSize: '1.25rem',
    }),
}, {index: 1});
