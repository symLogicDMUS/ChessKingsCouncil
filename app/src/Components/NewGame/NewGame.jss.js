import {makeStyles} from "@material-ui/core/styles"
import {navBarButtonHeight} from "../Reuseables/NavBar/NavBarButton.jss";
import {appBarHeight} from "../Reuseables/Drawers/ResponsiveDrawer.jss";

export const useStyles = makeStyles({
    new_game: props => ({
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        '@media screen and (max-width: 960px)': {
            height: `calc(100vh - ${appBarHeight}px)`,
        },
        '@media screen and (min-width: 960px)': {
            height: `calc(100vh - ${navBarButtonHeight})`,
        },
    }),
    tab_bar: props => ({
        position: 'fixed',
        '@media screen and (max-width: 960px)': {
            top: appBarHeight,
        },
        '@media screen and (min-width: 960px)': {
            top: navBarButtonHeight,
        },
    }),
    item: props => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }),
    title: props => ({
        width: '100%',
        marginBottom: '2vh',
    }),
}, {index: 1});
