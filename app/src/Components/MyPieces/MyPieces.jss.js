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
        marginRight: 'auto',
    }),
    search: props => ({
        '@media screen and (max-width: 500px)': {
            width: '70vw',
        },
        '@media screen and (min-width: 500px) and (max-width: 769px)': {
            width: `calc(${sqrItemSizeSm} + 12px)`,
        },
        '@media screen and (min-width: 769px) and (max-width: 960px)': {
            width: `calc(${sqrItemSizeMd} - 70.6px)`,
        },
        '@media screen and (min-width: 960px)': {
            width: `calc(${sqrItemSizeLg} - 70.6px)`,
        },
        height: '1.85rem',
        marginLeft: 'auto'
    }),
    icon: props => ({
       fontSize: '1.25rem',
    }),
}, {index: 1});
