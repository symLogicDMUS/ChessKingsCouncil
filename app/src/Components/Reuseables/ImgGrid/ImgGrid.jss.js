import {availHeight, availWidth} from "../../helpers/windowMeasurments";
import {fontSize001685, fontSizeW0855, fontSizeW090, fontSizeW095, fontSizeW0992} from "../../styles/fontSizes.jss";
import {appBarHeight} from "../PersistentDrawer.jss";
import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

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
    ipx: availHeight() - appBarHeight * 0.825,
}

export const widths = {
    desktop: availWidth() * 0.9,
    mobile: availWidth(),
};

export const useStyles = makeStyles({
    window: props => ({
        zIndex: 6,
        fontSize: fontSize001685,
        '@media (min-aspect-ratio: 16/9)': {
            width: widths.desktop,
            height: heights.desktop,
        },
        '@media (max-aspect-ratio: 1/1)': {
            width: widths.mobile,
            height: heights.mobile,
        },
        "@media (max-aspect-ratio: 1/2)": {
            height: heights.ipx,
        },
        borderRadius: '0.75em',
        backgroundColor: themes[props.theme].fill,
        ...props.rootStyle,
    }),
    top_flexbox: props => ({
        width: '100%',
        height: '2em',
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
        '@media (min-aspect-ratio: 16/9)': {
            width: imgChoicesWidth,
            marginLeft: modalWidth * 0.025,
            flexWrap: 'no-wrap',
            justifyContent: 'flex-end',
        },
        '@media (max-aspect-ratio: 1/1)': {
            width: availWidth() * 0.95,
            marginLeft: modalWidth * 0.025,
            justifyContent: 'space-between',
        },
    }),

    img_choices_border: props => ({
        overflow: 'scroll',
        borderRadius: '0.015em',
        backgroundColor: themes[props.theme].modal_fill,
        border: `0.002em solid ${themes[props.theme].outline}`,
        '@media (min-aspect-ratio: 16/9)': {
            width: imgChoicesWidth,
            height: imgChoicesHeight,
            marginLeft: modalWidth * 0.025,
            marginRight: modalWidth * 0.025,
            marginTop: modalHeight * 0.025,
            marginBottom: modalHeight * 0.025,
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizeW095,
            width: '1em',
            height: availHeight() * 0.75,
            marginLeft: '0.025em',
        },
        ...props.itemWindowStyle,
    }),

    image_choices: props => ({
        '@media (min-aspect-ratio: 16/9)': {
            fontSize: fontSize001685,
            width: '92.5em',
            height: '35.5em',
            marginLeft: '1em',
            marginRight: '1em',
            marginTop: '1em',
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizeW090,
            width: '1em',
            height: availHeight() * 0.65,
            marginLeft: '0.025em',
            marginRight: '0.025em',
            marginTop: '0.025em',
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
        '@media (min-aspect-ratio: 16/9)': {
            fontSize: fontSize001685,
            width: imgChoicesWidth,
            marginLeft: modalWidth * 0.025,
            marginRight: modalWidth * 0.25,
            flexWrap: 'no-wrap',
            alignItems: 'center',
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSizeW095,
            marginLeft: '0.025em',
            width: '1em',
        },
    }),
    ok_button: props => ({
        ...button(fontSize001685),
        marginRight: "1em",
        "@media (max-aspect-ratio: 1/2)": {
            marginRight: "0.25em",
        },
    }),
    delete_button: props => ({
        ...button(fontSize001685),
        marginLeft: "1em",
        "@media (max-aspect-ratio: 1/2)": {
            marginLeft: "0.25em",
        },
    }),
    show_names: props => ({
        fontSize: fontSize001685,
        marginLeft: "auto",
        marginRight: "auto",
    }),
});