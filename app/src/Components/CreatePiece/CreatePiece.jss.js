import {availHeight, availWidth} from "../helpers/windowMeasurments";
import {modal} from "../helpers/modal.jss";
import {themes} from "../styles/themes.jss";
import {fontSize0095} from "../styles/fontSizes.jss";

export const toolWidth = () => availWidth() * 0.336;
export const sqrFontSize = fontSize0095 * 0.25;
export const lineHeight = 0.7; //em
export const margin = 1.1; //em

export const tool = (fontSize, theme) => ({
    fontSize: fontSize,
    '@media screen and (min-width: 768px)': {
        backgroundColor: themes[theme].fill,
        width: '100%',
        marginBottom: '5%',
    },
    '@media screen and (max-width: 767px)': {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
})

export const tool_flexbox = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    '@media screen and (max-width: 767px)': {
        width: '100%',
        height: '100%',
        alignItems: 'flex-start',
    },
    '@media screen and (min-width: 768px)': {
        width: '93%',
        marginLeft: '3.5%',
        alignItems: 'center',
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
    create_piece_body: {
        backgroundImage: 'url("/Images/Backgrounds/y-so-serious.png")',
        backgroundRepeat: "repeat",
        objectFit: "none",
    },
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
