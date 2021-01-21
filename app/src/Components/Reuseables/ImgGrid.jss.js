import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../styles/themes.jss";
import {availHeight, availWidth} from "../helpers/windowMeasurments";

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
        width: modalWidth,
        height: modalHeight,
        borderRadius: '0.75em',
        backgroundColor: themes[props.theme].fill,
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
        height: '3em',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    }),
    title: props => ({
        fontSize: '3em',
        fontFamily: 'Roboto-Light, Roboto',
        lineHeight: '0.7em',
        marginRight: '0.25em',
        color: themes[props.theme].text,
    }),
    title_icon: props => ({
        fontSize: props.fontSize,
        height: '3em',
        width: '3em',
        marginLeft: '0.25em',
        color: themes[props.theme].text,
    }),
    img_choices_border: props => ({
        width: imgChoicesWidth,
        height: imgChoicesHeight,
        marginLeft: modalWidth * 0.025,
        marginRight: modalWidth * 0.025,
        marginTop: modalHeight * 0.025,
        marginBottom: modalHeight * 0.025,
        borderRadius: '0.25em',
        backgroundColor: themes[props.theme].fill,
        border: `0.08em solid ${themes[props.theme].outline}`,
    }),

    image_choices: props => ({
        fontSize: props.fontSize,
        width: '92.5em',
        height: '35.5em',
        marginLeft: '1em',
        marginRight: '1em',
        marginTop: '1em',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        overflow: 'scroll',
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