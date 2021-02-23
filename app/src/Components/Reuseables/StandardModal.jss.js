import makeStyles from "@material-ui/core/styles/makeStyles";
import {modal} from "../helpers/modal.jss";
import {availHeight, availWidth} from "../helpers/windowMeasurments";
import {themes} from "../styles/themes.jss";

export const button = (fontSize) => ({
    fontSize: fontSize,
    width: '7.5em',
    height: '2em',
});

export const close_icon = (fontSize) => ({
    fontSize: fontSize,
    width: '1.5em',
    height: '1.5em',
});

export const useStyles = makeStyles({

    modal: props => ({
        ...modal,
        zIndex: 8,
    }),

    window: props => ({
        fontSize: props.fontSize,
        '@media screen and (min-device-width: 1040px)': {
            width: availWidth() * 0.333,
            height: availHeight() * 0.333,
        },
        '@media screen and (max-device-width: 1040px)': {
            width: availWidth()*0.98,
            height: availHeight() * 0.4
        },
        borderRadius: '0.3em',
        backgroundColor: themes[props.theme].fill,
        border: `0.05em solid ${themes[props.theme].outline}`,
    }),
    top_flexbox: props => ({
        fontSize: props.fontSize,
        height: '1.5em',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
    }),
    title: props => ({
        fontSize: props.fontSize,
        width: '95%',
        marginLeft: '2.5%',
        marginRight: '2.5%',
        marginBottom: '1%',
        textAlign: 'center',
        color: themes[props.theme].text,
    }),
    paragraph: props => ({
        display: 'flex',
        width: '95%',
        margin: '2.5%',
        height: '9em',
        flexDirection: 'row',
        flexWrap: 'wrap',
        color: themes[props.theme].text,
        overflow: 'hidden',
    }),
    buttons: props => ({
        fontSize: props.fontSize,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignContent: 'center',
        justifyContent: 'center',
    }),
});