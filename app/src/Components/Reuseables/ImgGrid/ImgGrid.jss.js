import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {availHeight, availWidth} from "../../helpers/windowMeasurments";
import {appBarHeight} from "../PersistentDrawer.jss";

const modalWidth = availWidth() * 0.9;
const modalHeight = availHeight() * 0.85;
const imgChoicesWidth = modalWidth * 0.95;
const imgChoicesHeight = modalHeight * 0.75;

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

export const useStyles = makeStyles({
    window: props => ({
        zIndex: 6,
        fontSize: props.fontSize,
        '@media screen and (min-width: 768px)': {
            width: availWidth() * 0.9,
            height: availHeight() * 0.85,
        },
        '@media screen and (max-width: 767px)': {
            width: availWidth(),
            height: (availHeight() - appBarHeight),
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
        fontSize: props.fontSize,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    }),

    img_choices_border: props => ({
        '@media screen and (min-width: 768px)': {
            width: imgChoicesWidth,
            height: imgChoicesHeight,
            marginLeft: modalWidth * 0.025,
            marginRight: modalWidth * 0.025,
            marginTop: modalHeight * 0.025,
            marginBottom: modalHeight * 0.025,
        },
        '@media screen and (max-width: 767px)': {
            width: '31.5em',
            marginLeft: '1em',
        },
        overflow: 'scroll',
        borderRadius: '0.25em',
        backgroundColor: themes[props.theme].modal_fill,
        border: `0.08em solid ${themes[props.theme].outline}`,
        ...props.itemWindowStyle,
    }),

    image_choices: props => ({
        fontSize: props.fontSize,
        '@media screen and (min-width: 768px)': {
            width: '92.5em',
            height: '35.5em',
        },
        '@media screen and (max-width: 767px)': {
            width: '30.5em',
            height: '44.5em',
        },
        marginLeft: '1em',
        marginRight: '1em',
        marginTop: '1em',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: themes[props.theme].modal_fill,
    }),
    bottom_flexbox: props => ({
        fontSize: props.fontSize,
        width: imgChoicesWidth,
        marginLeft: modalWidth * 0.025,
        marginRight: modalWidth * 0.25,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }),
});