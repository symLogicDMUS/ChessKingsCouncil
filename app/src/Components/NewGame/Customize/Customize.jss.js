import {themes} from "../../styles/themes.jss";
import {fontSize0016, fontSize0023} from "../../styles/fontSizes.jss";
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
        '@media screen and (max-width: 960px)': {
            marginRight: 'auto',
        },
        '@media screen and (min-width: 960px)': {
            position: 'absolute',
            left: '21.5vw',
            top: '11vh',
        },
    }),
    scroll_table: props => ({
        '@media screen and (max-width: 960px)': {
            width: '50vw',
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
        height: '1.55vw',
        borderRadius: 0,
    }),
    scroll_table_text: props => ({
        '@media screen and (max-width: 960px)': {
            fontSize: '1rem',
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
        fontSize: '2.3vh',
        '@media screen and (max-width: 960px)': {
            width: `calc(100% - ${miniVariantIconsColumnWidth}px)`,
        },
        '@media screen and (min-width: 960px)': {
            width: drawerItemWidth,
            marginLeft: drawerItemMarginLeft,
        },
        fontFamily: 'Roboto-Light, Roboto',
    }),
    promo_all: props => ({
        marginLeft: 'unset',
        "& .MuiSvgIcon-root": {
            '@media screen and (max-width: 960px)': {
                fontSize: '1.1rem',
            },
            '@media screen and (min-width: 960px) and (max-width: 1040px)': {
                fontSize: '1.1rem',
            },
            '@media screen and (min-width: 1040px)': {
                fontSize: '1.2rem',
            },
        },
        "& .MuiTypography-root": {
            marginRight: 'auto',
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
        marginRight: 'auto',
        letterSpacing: '0.0075em',
        lineHeight: 1.6,
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
    tools: props => ({
        // height: '40vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 24,
        marginBottom: 'auto',
    }),
}
