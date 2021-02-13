import {availHeight, availWidth} from "../../helpers/windowMeasurments";
import {fontSize001685} from "../../styles/fontSizes.jss";
import {appBarHeight} from "../PersistentDrawer.jss";
import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {resolveScreenCase} from "../../helpers/resolveScreenCase";

const modalWidth = availWidth() * 0.9;
const modalHeight = availHeight() * 0.8;
const imgChoicesWidth = modalWidth * 0.95;
const imgChoicesHeight = modalHeight * 0.74;

export const close_icon = (fontSize) => ({
    fontSize: fontSize,
    width: '1.5em',
    height: '1.5em',
});
export const button = (fontSize) => ({
    fontSize: fontSize,
    width: '7.5em',
    height: '2.25em',
    marginTop: '0.75em',
    marginBottom: '0.75em',
});

export const heights = {
    desktop: availHeight() * 0.81,
    mobile: availHeight() - appBarHeight,
}

export const widths = {
    desktop: availWidth() * 0.9,
    mobile: availWidth(),
};

export const show_names_gen = (screenCase) => {
    switch (screenCase) {
        case 'mobile':
            return {
                fontSize: fontSize001685
            }
        default:
            return null;
    }
};

/*for the button icons (query in makeStyles for ipad doesn't work*/
export const ifIpad = (screenCase) => {
    const newScreenCase = resolveScreenCase(screenCase)
    if (newScreenCase === 'ipad') {
        return {fontSize: heights.mobile * 0.095*0.333*0.6667}
    }
    else {
        return null;
    }
};

export const useStyles = makeStyles({
    window: props => ({
        '@media (max-aspect-ratio: 1/1)': {
            width: widths.mobile,
            height: heights.mobile,
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            width: widths.desktop,
            height: heights.desktop,
        },
        zIndex: 6,
        fontSize: fontSize001685,
        borderRadius: '0.75em',
        backgroundColor: themes[props.theme].fill,
        ...props.rootStyle,
    }),
    top_flexbox: props => ({
        '@media (max-aspect-ratio: 1/1)': {
            height: heights.mobile * 0.05,
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            height: '2em',
        },
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }),
    title_flexbox: props => ({
        fontSize: fontSize001685,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        '@media (max-aspect-ratio: 1/1)': {
            width: widths.mobile * 0.95,
            marginLeft: widths.mobile * 0.025,
            height: heights.mobile * 0.07,
            justifyContent: 'space-between',
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            width: imgChoicesWidth,
            marginLeft: modalWidth * 0.025,
            flexWrap: 'no-wrap',
            justifyContent: 'flex-end',
        },
    }),

    img_choices_border: props => ({
        overflow: 'scroll',
        borderRadius: '0.015em',
        backgroundColor: themes[props.theme].modal_fill,
        border: `0.002em solid ${themes[props.theme].outline}`,
        '@media (max-aspect-ratio: 1/1)': {
            width: widths.mobile * 0.95,
            height: heights.mobile * 0.8,
            marginLeft: widths.mobile * 0.025,
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            width: imgChoicesWidth,
            height: imgChoicesHeight,
            marginLeft: modalWidth * 0.025,
            marginRight: modalWidth * 0.025,
            marginTop: modalHeight * 0.025,
            marginBottom: modalHeight * 0.025,
        },
    }),

    image_choices: props => ({
        '@media (max-aspect-ratio: 1/1)': {
            width: widths.mobile * 0.95 * 0.95,
            height: heights.mobile * 0.8 * 0.95,
            marginLeft: widths.mobile * 0.025 * 0.95,
            marginRight: widths.mobile * 0.025 * 0.95,
            marginTop: widths.mobile * 0.025 * 0.95,
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            fontSize: fontSize001685,
            width: '92.5em',
            height: '35.5em',
            marginLeft: '1em',
            marginRight: '1em',
            marginTop: '1em',
        },
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: themes[props.theme].modal_fill,
    }),
    bottom_flexbox: props => ({
        display: 'flex',
        flexDirection: 'row',
        '@media (max-aspect-ratio: 1/1)': {
            height: heights.mobile * 0.08,
            width: widths.mobile * 0.95,
            marginLeft: widths.mobile * 0.025,
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            fontSize: fontSize001685,
            width: imgChoicesWidth,
            marginLeft: modalWidth * 0.025,
            marginRight: modalWidth * 0.25,
            flexWrap: 'no-wrap',
            alignItems: 'center',
        },
    }),
    ok_button: props => ({
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: heights.mobile * 0.095*0.333*0.75,
            marginRight: widths.mobile * 0.95 * 0.025,
            height: '2em',
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            ...button(fontSize001685),
            marginRight: "1em",
        },
    }),
    delete_button: props => ({
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: heights.mobile * 0.095*0.333*0.75,
            marginLeft: widths.mobile * 0.95 * 0.025,
            height: '2em',
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            ...button(fontSize001685),
            marginLeft: "2em",
        },
    }),
    button_icon: props => ({
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: heights.mobile * 0.095*0.333*0.6667,
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            fontSize: fontSize001685,
        },
        minHeight: 'unset',
        minWidth: 'unset',
    }),
    show_names: props => ({
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: heights.mobile * 0.095*0.333,
            marginLeft: "auto",
            marginRight: "auto",
            height: '1em',
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            fontSize: fontSize001685,
            marginLeft: "2em",
        },
    }),
});