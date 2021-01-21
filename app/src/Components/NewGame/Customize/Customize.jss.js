import {availHeight, availWidth} from "../../helpers/windowMeasurments";
import {text} from "../../PieceProfiles/Header/PieceHeader.jss";
import {drawerWidth, sideBarWidth} from "../../Reuseables/PermanentDrawer.jss";
import {themes} from "../../styles/themes.jss";

/* unit % */
export const drawerItemWidth = drawerWidth * 0.86;
export const drawerItemMarginTopBottom = '3.5%';
export const drawerItemMarginLeft = '7%';

export const drawer_component = (fontSize) => ({
    fontSize: fontSize,
    fontFamily: 'Roboto-Light, Roboto',
    '@media screen and (min-width: 768px)': {
        width: drawerItemWidth,
        marginLeft: drawerItemMarginLeft,
        marginTop: drawerItemMarginTopBottom,
        marginBottom: drawerItemMarginTopBottom,
    },
    '@media screen and (max-width: 767px)': {
        width: '100%',
    },
});

export const ok_button = (fontSize) => ({
    ...drawer_component(fontSize),
    '@media screen and (max-width: 767px)': {
        marginTop: '0.5em',
        width: '100%',
    },
});

export const app_bar_flexbox = (fontSize) => ({
    fontSize: fontSize,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: `calc(89% - ${sideBarWidth}px)`,
});

export const drawer_table_button = (fontSize) => ({
    fontSize: fontSize,
    '@media screen and (min-width: 768px)': {
        width: drawerItemWidth,
        borderTopLeftRadius: '0.1em',
        borderTopRightRadius: '0.1em',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    disableElevation: true,
});

export const list_title = (fontSize, theme) => ({
    textAlign: 'center',
    ...text(fontSize, theme),
    backgroundColor: themes[theme].fill,
});

export const styles = {
    customize: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: availHeight() * 0.95,
        width: availWidth(),
    },
    list_title: props => ({
        ...list_title(props.fontSize, props.theme),
        '@media screen and (min-width: 768px)': {
            width: drawerItemWidth,
        },
        '@media screen and (max-width: 767px)': {
            width: '100%',
        },
        outline: `0.05em solid ${themes[props.theme].outline}`,
    }),
    promo_all_container: props => ({
        fontSize: props.fontSize,
        '@media screen and (min-width: 768px)': {
            width: drawerItemWidth,
            marginLeft: drawerItemMarginLeft,
            marginTop: drawerItemMarginTopBottom*0.8,
            marginBottom: drawerItemMarginTopBottom*0.8,
        },
        '@media screen and (max-width: 767px)': {
            width: '100%',
        },
    }),
    divider: props => ({
        fontSize: props.fontSize,
        width: '100%',
        marginTop: '0.75em',
        marginBottom: '0.75em',
    }),
};