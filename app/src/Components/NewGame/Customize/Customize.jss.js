import {availHeight, availWidth} from "../../helpers/windowMeasurments";
import {text} from "../../PieceProfiles/Header/PieceHeader.jss";
import {drawerWidth, sideBarWidth} from "../../Reuseables/PermanentDrawer.jss";
import {themes} from "../../styles/themes.jss";
import {fontSizes} from "../../PieceProfiles/PieceProfiles.jss";
import {fontSize0023} from "../../styles/fontSizes.jss";

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

export const promo_all_checkbox_container = () => ({
    ...drawer_component(fontSize0023),
    display: 'flex',
    justifyContent: 'center',
});

export const styles = {
    customize: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: availHeight() * 0.95,
        width: availWidth(),
    },
};