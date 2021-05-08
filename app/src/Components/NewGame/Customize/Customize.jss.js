import {themes} from "../../styles/themes/themes.jss";
import {miniVariantIconsColumnWidth} from "../../Reuseables/Drawers/MiniVariantDrawer.jss";

export const drawerItemWidth = '22.4vw';
export const arrowButtonBorderRadius = '0.35rem';
export const drawerItemMarginTopBottom = '0.8vw';
export const drawerItemMarginLeft = 0;

export const textColor = (theme) => ({
    color: themes[theme].text,
});

export const styles = {
    piece_profiles: props => ({
        '@media screen and (min-width: 960px)': {
            margin: 'auto',
        },
    }),
    scroll_table: props => ({
        '@media screen and (max-width: 426px)': {
            width: `calc(97.5vw - ${miniVariantIconsColumnWidth}px)`,
            marginLeft: '2.5vw',
            marginRight: '2.5vw',
            marginBottom: '2.5vw',
        },
        '@media screen and (min-width: 425px) and (max-width: 960px)': {
            width: '50vw',
            marginLeft: '2.5vw',
            marginRight: '2.5vw',
            marginBottom: '2.5vw',
        },
        '@media screen and (min-width: 960px)': {
            width: drawerItemWidth,
            marginLeft: drawerItemMarginLeft,
            marginTop: drawerItemMarginTopBottom,
            marginBottom: '1.6vw',
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
    scroll_table_list_item: props => ({
        '@media screen and (max-width: 960px)': {
            height: '7.5vh',
        },
        '@media screen and (min-width: 960px)': {
            height: '2vw',
        },
    }),
    scroll_table_button: props => ({
        height: '1.2rem',
        borderRadius: 0,
    }),
    scroll_table_text: props => ({
        '@media screen and (max-width: 960px)': {
            fontSize: '1.75rem',
        },
        '@media screen and (min-width: 960px)': {
            fontSize: '1vw',
        },
        paddingLeft: '1vw',
    }),
    scroll_table_title: props => ({
        '@media screen and (max-width: 960px)': {
            fontSize: '1rem',
        },
        '@media screen and (min-width: 960px)': {
            fontSize: '1.2vw',
        },
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
            height: `calc(12.5vh - ${48}px)`,
            fontSize: '1rem',
            width: `calc(100% - ${miniVariantIconsColumnWidth}px)`,
            position: 'fixed',
            bottom: 0,
            borderRadius: 0,
        },
        '@media screen and (min-width: 960px)': {
            fontSize: '2.3vh',
            width: drawerItemWidth,
            marginLeft: drawerItemMarginLeft,
        },
        fontFamily: 'Roboto-Light, Roboto',
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
    }),
    title: props => ({
        lineHeight: 1.6,
        letterSpacing: '0.0075em',
        fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: '1rem',
    }),
    tools: props => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 'auto',
        marginTop: 24,
    }),
    subs_modal: props => ({
        position: 'absolute',
        left: `calc(21.5vw - ${miniVariantIconsColumnWidth*0.5}px)`,
        top: `calc(50vh - (2.6rem + 3.5vw))`,
    }),
    promos_modal: props => ({
        position: 'absolute',
        left: `calc(22.5vw - ${miniVariantIconsColumnWidth*0.5}px)`,
        top: 'calc(50vh - (22.5vh + 3.5vw + 0.875rem))',
    }),
}