import {modal} from "../helpers/modal.jss";
import {themes} from "../styles/themes.jss";
import {fontSizes as boardFontSizes, fontSizes} from "./Board/CreatePieceBoard.jss";
import {availHeight, availWidth, viewHeight} from "../helpers/windowMeasurments";
import {fontSize002, fontSize00219, fontSize0022, fontSize0095} from "../styles/fontSizes.jss";
import {appBarHeight} from "../Reuseables/PersistentDrawer.jss";

export const sqrFontSize = fontSize0095 * 0.25;

/*For Range and Icon tools*/
export const twoItemMargins = {
    ipx: boardFontSizes.ipx*0.375,
    mobile: boardFontSizes.mobile*0.4,
    ipad: boardFontSizes.ipad*0.55,
    short: boardFontSizes.short*0.5,
}

/*For Location and Options tools*/
export const fourItemMargins = {
    ipx: availWidth() * 0.04,
    mobile: availWidth() * 0.035,
    ipad: availWidth() * 0.02,
}

/*For Range and Icon tool*/
export const twoItemFontSizes = {
    desktop: fontSize002,
    mobile: (boardFontSizes.mobile * 8 - twoItemMargins.mobile * 3) * 0.5 * 0.31675 * 0.31675,
    ipx: (boardFontSizes.ipx * 8 - twoItemMargins.ipx * 3) * 0.5 * 0.31675 * 0.31675,
    ipad: (boardFontSizes.ipad * 8 - twoItemMargins.ipad * 3) * 0.5 * 0.28 * 0.28,
    short: (boardFontSizes.mobile * 8 - twoItemMargins.mobile * 3) * 0.5 * 0.31675 * 0.31675,
}

/*For Location and Options tools*/
export const buttonSize = {
    ipx: (viewHeight() - (appBarHeight + fontSizes.ipx * 8 + ((viewHeight() - (appBarHeight + fontSizes.ipx * 8)) * 0.95 * 0.2) + fourItemMargins.ipx * 3)) * 0.5,
    mobile: (viewHeight() - (appBarHeight + fontSizes.mobile * 8 + ((viewHeight() - (appBarHeight + fontSizes.mobile * 8)) * 0.95 * 0.2) + fourItemMargins.mobile * 3)) * 0.5,
    ipad: (viewHeight() - (appBarHeight + fontSizes.ipad * 8 + ((viewHeight() - (appBarHeight + fontSizes.ipad * 8)) * 0.95 * 0.2) + fourItemMargins.ipad * 3)) * 0.5,
    short: availWidth() * 0.145,
}

export const button = (theme) => ({
    '@media screen and (max-device-width: 767px) and (max-aspect-ratio: 6/10)': {
        width: buttonSize.ipx,
        height: buttonSize.ipx,
        fontSize: buttonSize.ipx * 0.3,
        margin: 'auto',
    },
    "@media screen and (max-device-width: 767px) and  (min-aspect-ratio: 1/2) and (max-aspect-ratio: 1/1)": {
        width: buttonSize.mobile,
        height: buttonSize.mobile,
        fontSize: buttonSize.mobile * 0.3,
    },
    /*shortest phones*/
    "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 85/100) and (max-aspect-ratio: 1/1)": {
        width: buttonSize.short,
        height: buttonSize.short,
        fontSize: buttonSize.short * 0.3,
    },
    '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)': {
        width: buttonSize.ipad,
        height: buttonSize.ipad,
        fontSize: buttonSize.ipad * 0.3,
        margin: 'auto',
    },
    '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
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

export const accordion_root = (screenCase) => {
    switch (screenCase) {
        case 'desktop':
            return null
        default:
            return {
                width: fontSizes[screenCase] * 8,
            }
    }
};

export const tool = (theme) => ({
    '@media (max-aspect-ratio: 1/1)': {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
    },
    '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
        backgroundColor: themes[theme].fill,
        width: '100%',
        marginBottom: '3vh',
    },
})

export const tool_flexbox = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    '@media (max-aspect-ratio: 1/1)': {
        width: '100%',
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
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
        fontSize: props.fontSize,
        display: 'flex',
    }),
};