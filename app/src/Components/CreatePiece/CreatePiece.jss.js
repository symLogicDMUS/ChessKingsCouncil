import {modal} from "../helpers/modal.jss";
import {themes} from "../styles/themes.jss";
import {getBoardFontSize, getBoardSize} from "./Board/CreatePieceBoard.jss";
import {availHeight, availWidth, viewHeight} from "../helpers/windowMeasurments";
import {fontSize002, fontSize00219, fontSize0022, fontSize0095} from "../styles/fontSizes.jss";
import {appBarHeight} from "../Reuseables/PersistentDrawer.jss";

export const sqrFontSize = fontSize0095 * 0.25;

export const get4ItemMargins = () => {
    return availWidth() * 0.035;
};

export const get2ItemMargins = () => {
    return getBoardFontSize() * 0.375
};

export const get2ItemFontSizes = () => {
    return (getBoardSize() - get2ItemMargins() * 3) * 0.5 * 0.31675 * 0.31675
};

export const getButtonSize = () => {
    return (viewHeight() - (appBarHeight + getBoardSize() +
        ((viewHeight() - (appBarHeight + getBoardSize())) * 0.95 * 0.2) + getBoardFontSize() * 3)) * 0.5
};

export const button = (theme) => ({
    '@media screen and (max-device-width: 1040px)': {
        width: getButtonSize(),
        height: getButtonSize(),
        fontSize: getButtonSize() * 0.3,
        margin: 'auto',
    },
    '@media screen and (min-device-width: 1040px)': {
        fontSize: fontSize0022,
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

export const accordion_root = () => {
    return {
        width: getBoardSize(),
    }
};

export const tool = (theme) => ({
    '@media screen and (max-device-width: 1040px)': {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
    },
    '@media screen and (min-device-width: 1040px)': {
        backgroundColor: themes[theme].fill,
        width: '100%',
        marginBottom: '3vh',
    },
})

export const tool_flexbox = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    '@media screen and (max-device-width: 1040px)': {
        width: '100%',
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    '@media screen and (min-device-width: 1040px)': {
        width: '93%',
        marginLeft: '3.5%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
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