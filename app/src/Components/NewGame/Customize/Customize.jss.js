import {availWidth} from "../../helpers/windowMeasurments";
import {drawerWidth} from "../../Reuseables/PermanentDrawer.jss";
import {
    fontSize0016,
    fontSize0023,
    fontSize0025,
    fontSizeW004,
    fontSizeW0055
} from "../../styles/fontSizes.jss";

export const drawerItemWidth = drawerWidth * 0.86;
export const drawerItemMarginTopBottom = '3.5%';
export const drawerItemMarginLeft = '7%';

export const accordion = () => ({
    height: '2em',
    margin: 0
});

export const drawer_component = (screenCase) => {
    switch (screenCase) {
        case 'desktop':
            return {
                width: drawerItemWidth,
                marginLeft: drawerItemMarginLeft,
                marginTop: drawerItemMarginTopBottom,
                marginBottom: drawerItemMarginTopBottom,
            }
        default:
            return {
                width: '100%'
            }
    }
};

export const ok_button = (screenCase) => {
    switch (screenCase) {
        case 'mobile':
            return {
                ...drawer_component(screenCase),
                fontSize: fontSize0023,
                fontFamily: 'Roboto-Light, Roboto',
                width: '100%',
                marginTop: '0.5em',
            }
        default:
            return {
                ...drawer_component(screenCase),
                fontSize: fontSize0023,
                fontFamily: 'Roboto-Light, Roboto',
            }
    }
};

export const pawn_promotion = (screenCase) => {
    switch (screenCase) {
        case 'ipad':
            return {
                fontSize: fontSize0016,
                height: '10em',
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }
        default:
            return {
                marginTop: '-2vh',
                fontSize: fontSize0016,
                height: '10em',
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }
    }
};


export const promo_all_container = (screenCase) => {
    switch (screenCase) {
        case 'desktop':
            return {
                display: 'flex',
                fontSize: fontSize0023,
                justifyContent: 'center',
                ...drawer_component(screenCase),
            }
        default:
            return {
                display: 'flex',
                fontSize: fontSize0023,
                justifyContent: 'center',
            }
    }
};

export const promo_all_root = (screenCase) => {
    switch (screenCase) {
        case 'desktop':
            return {
                marginRight: 'auto',
                marginLeft: 'auto',
                transform: 'translate(0.5em, 0)'
            }
        case 'ipad':
            return {
                marginRight: 'auto',
                marginLeft: 'auto',
            }
        default:
            return {
                marginRight: 'auto',
                flexGrow: 2,
            }
    }
};

export const promo_all_gen = (screenCase) => {
    switch (screenCase) {
        case 'desktop':
            return {
                fontSize: fontSize0025
            }
        case 'ipad':
            return {
                fontSize: fontSizeW004,
                marginRight: 'auto',
                marginLeft: 'auto'
            }
        default:
            return {
                fontSize: fontSizeW0055,
                marginRight: 'auto'
            }
    }
};

export const promo_all_checkbox = (screenCase) => {
    switch (screenCase) {
        case 'desktop':
            return {
                fontSize: fontSize0025,
            }
        case 'ipad':
            return {
                fontSize: fontSizeW004,
                margin: 'auto',
            }
        default:
            return {
                fontSize: fontSizeW0055,
            }
    }
};

export const scroll_table = (screenCase) => {
    switch (screenCase) {
        case 'desktop':
            return {
                fontSize: fontSize0023,
                width: drawerItemWidth,
                height: 15,
            }
        default:
            return {
                fontSize: fontSize0016,
                width: availWidth() * 0.48,
                height: 10,
            }
    }
};


export const scroll_table_button = () => {
    return {
        borderRadius: 0
    }
};

export const scroll_table_added = (screenCase) => {
    switch (screenCase) {
        case 'desktop':
            return {
                margin: 'auto',
            }
        default:
            return {
                marginBottom: '2em'
            }
    }
};


export const piece_profiles = (screenCase) => {
    switch (screenCase) {
        case 'desktop':
            return {
                margin: 'auto'
            }
        default:
            return null
    }
};