import {modal} from "../helpers/modal.jss";
import {themes} from "../styles/themes.jss";
import {getBoardFontSize, getBoardSize} from "./Board/CreatePieceBoard.jss";
import {availHeight, availWidth, viewHeight, viewWidth} from "../helpers/windowMeasurments";
import {fontSize002, fontSize00219, fontSize0026, fontSize0095} from "../styles/fontSizes.jss";
import {appBarHeight} from "../Reuseables/Drawers/PersistentDrawer.jss";
import {drawerWidth} from "../Reuseables/Drawers/PermanentDrawer.jss";

export const sqrFontSize = fontSize0095 * 0.25;

export const get4ItemMargins = () => {
    return availWidth() * 0.035;
};

export const get2ItemMargins = () => {
    if (viewWidth() < 412) {
        return getBoardFontSize() * 0.375
    }
    if (viewWidth() >= 412 && viewWidth() <= 747) {
        return getBoardFontSize() * 0.3;
    }
    if (viewWidth() > 747 && viewWidth() <= 1040) {
        return getBoardFontSize() * 0.28;
    }
    if (viewWidth() > 1040) {
        return drawerWidth * 0.15;
    }
    return getBoardFontSize() * 0.2;
};

export const get2ItemFontSizes = () => {
    return (getBoardSize() - get2ItemMargins() * 3) * 0.5 * 0.31675 * 0.31675
};

export const getButtonSize = () => {
    return (viewHeight() - (appBarHeight + getBoardSize() + ((viewHeight() - (appBarHeight + getBoardSize())) * 0.95 * 0.1) + getBoardFontSize() * 3)) * 0.5;
};

export const button = (theme) => ({
    '@media screen and (max-device-width: 1040px)': {
        width: getButtonSize(),
        height: getButtonSize(),
        fontSize: getButtonSize() * 0.3,
    },
    '@media screen and (min-device-width: 1040px)': {
        fontSize: ((drawerWidth - get2ItemMargins()) * 0.5 - (drawerWidth - get2ItemMargins()) * 0.5 * 0.2) * 0.5 * 0.3,
        margin: 'unset',
        width: '3.5em',
        height: '3.5em',
    },
    minWidth: 0,
    minHeight: 0,
    color: themes[theme].text,
    borderRadius: '0.25em',
});

export const app_bar_title = () => ({
    fontSize: fontSize00219,
    marginLeft: '0.25em'
});

export const accordion_root = () => ({
    width: getBoardSize(),
});

/**
 * Only used on desktop
 */
export const tool_flexbox = {
    width: '93%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: '3.5%',
    alignItems: 'center',
    justifyContent: 'space-between',
}

/**
 * Only used on desktop
 */
export const tool_title = (theme) => ({
    fontSize: availHeight() * 0.018,
    width: '100%',
    lineHeight: '1em',
    color: themes[theme].text,
    fontFamily: 'Roboto-Light, Roboto',
    marginBottom: '2.5%',
})

export const sqrTextCheckbox = () => ({
    marginLeft: 0,
    flexDirection: 'row-reverse',
});

export const congrats_first_piece = (theme) => ({
    fontSize: 'inherit',
    color: themes[theme].text,
});

export const styles = {
    modal: {
        ...modal,
    },
    save_animation: {
        width: '33.333%',
    },
    box: props => ({
        fontSize: fontSize002,
        display: 'flex',
    }),
};

