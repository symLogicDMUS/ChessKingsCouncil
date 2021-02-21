import {modal} from "../helpers/modal.jss";
import {themes} from "../styles/themes.jss";
import {fontSizes} from "./Board/CreatePieceBoard.jss";
import {availHeight, availWidth, innerHeight} from "../helpers/windowMeasurments";
import {fontSize00219, fontSize0025, fontSize0095} from "../styles/fontSizes.jss";

export const toolWidth = () => availWidth() * 0.336;
export const sqrFontSize = fontSize0095 * 0.25;
export const lineHeight = 0.7; // em
export const margin = 1.1; // em

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
    accordion_title: props => ({
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)': {
            fontSize: fontSize0025
        },
    }),
};
