import { makeStyles } from "@material-ui/core/styles";
import {sqrItemSizeLg, sqrItemSizeMd, sqrItemSizeSm} from "../PieceProfiles/constants.jss";
import {themes} from "../styles/themes/themes.jss";
import {navBarButtonHeight} from "../Reuseables/NavBar/NavBarButton.jss";
import {appBarHeight} from "../Reuseables/Drawers/ResponsiveDrawer.jss";

export const textColor = (theme) => ({color: themes[theme].text});

export const useStyles = makeStyles({
    my_pieces: props => ({
        overflowX: 'hidden',
        position: 'fixed',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        '@media screen and (max-width: 960px)': {
            top: appBarHeight,
            height: `calc(100vh - ${appBarHeight}px)`,
        },
        '@media screen and (min-width: 960px)': {
            top: navBarButtonHeight,
            height: `calc(100vh - ${navBarButtonHeight}px)`,
        },
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
