import {drawerWidth} from "../../Reuseables/Drawers/PermanentDrawer.jss";
import {
    fontSize0016,
    fontSize0023,
    fontSize0025,
    fontSize004025,
    fontSizeW004,
    fontSizeW0055
} from "../../styles/fontSizes.jss";
import {themes} from "../../styles/themes.jss";

export const drawerItemWidth = drawerWidth * 0.86;
export const drawerItemMarginTopBottom = '3.5%';
export const drawerItemMarginLeft = '7%';

export const pageTitle = (theme) => ({
    color: themes[theme].text,
});

export const styles = {
    piece_profiles: props => ({
            position: 'absolute',
            left: '21.5vw',
            top: '11vh',
    }),
    scroll_table: props => ({
        '@media screen and (max-width: 960px)': {
            fontSize: fontSize0016,
            width: '48vw',
            height: '4em',
        },
        '@media screen and (min-width: 960px)': {
            fontSize: fontSize004025,
            height: '7.2em',
            width: drawerItemWidth,
            marginLeft: drawerItemMarginLeft,
            marginTop: drawerItemMarginTopBottom,
            marginBottom: drawerItemMarginTopBottom,
        },
    }),
    scroll_table_list_item: props => ({
        '@media screen and (max-width: 960px)': {
            fontSize: fontSize0016,
            height: '1.66667em',
        },
        '@media screen and (min-width: 960px)': {
            fontSize: fontSize004025,
            width: '20vw',
            height: '1em',
        },
    }),
    scroll_table_added: props => ({
        '@media screen and (min-width: 960px)': {
            margin: 'auto',
        },
        '@media screen and (max-width: 960px)': {
            marginBottom: '2em',
        },
    }),
    scroll_table_button: props => ({
        borderRadius: 0,
        fontSize: fontSize004025,
        height: '0.6em',
    }),
    drawer_component: props => ({
        '@media screen and (max-width: 960px)': {
            width: '100%',
        },
        '@media screen and (min-width: 960px)': {
            width: drawerItemWidth,
            marginLeft: drawerItemMarginLeft,
            marginTop: drawerItemMarginTopBottom,
            marginBottom: drawerItemMarginTopBottom,
        },
    }),
    ok_button: props => ({
        '@media screen and (max-width: 960px)': {
            width: '100%',
            fontSize: fontSize0023,
            fontFamily: 'Roboto-Light, Roboto',
            marginTop: '0.5em',
        },
        '@media screen and (min-width: 768px) and (max-width: 960px)': {
            width: '100%',
            fontSize: fontSize0023,
            fontFamily: 'Roboto-Light, Roboto',
            marginTop: '0.5em',
        },
        '@media screen and (min-width: 960px)': {
            fontSize: fontSize0023,
            fontFamily: 'Roboto-Light, Roboto',
            width: drawerItemWidth,
            marginLeft: drawerItemMarginLeft,
            marginTop: drawerItemMarginTopBottom,
            marginBottom: drawerItemMarginTopBottom,
        },
    }),
    promo_all_root: props => ({
        '@media screen and (min-width: 960px)': {
            marginRight: 'auto',
            marginLeft: 'auto',
            transform: 'translate(0.5em, 0)'
        },
        '@media screen and (min-width: 768px) and (max-width: 960px)': {
            marginRight: 'auto',
            marginLeft: 'auto',
        },
        '@media screen and (max-width: 960px)': {
            marginRight: 'auto',
            flexGrow: 2,
        },
    }),
    promo_all_gen: props => ({
        '@media screen and (min-width: 768px) and (max-width: 960px)': {
            fontSize: fontSizeW004,
            marginRight: 'auto',
            marginLeft: 'auto'
        },
        '@media screen and (max-width: 960px)': {
            fontSize: fontSizeW0055,
            marginRight: 'auto',
        },
        '@media screen and (min-width: 960px)': {
            fontSize: fontSize0025
        },
    }),
    promo_all_checkbox: props => ({
        '@media screen and (min-width: 960px)': {
            marginRight: 'auto',
            marginLeft: 'auto',
            transform: 'translate(0.5em, 0)'
        },
        '@media screen and (max-width: 960px)': {
            marginRight: 'auto',
            flexGrow: 2,
        },
    }),
    promo_all_container: props => ({
        '@media screen and (max-width: 960px)': {
            display: 'flex',
            fontSize: fontSize0023,
            justifyContent: 'center',
        },
        '@media screen and (min-width: 960px)': {
            display: 'flex',
            fontSize: fontSize0023,
            justifyContent: 'center',
            width: drawerItemWidth,
            marginLeft: drawerItemMarginLeft,
            marginTop: drawerItemMarginTopBottom,
            marginBottom: drawerItemMarginTopBottom,
        },
    }),
}