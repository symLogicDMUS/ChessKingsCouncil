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
    smItem: props => ({
       marginLeft: 8,
       marginRight: 8,
    }),
    tools: props => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 'auto',
        marginTop: 24,
    }),
}