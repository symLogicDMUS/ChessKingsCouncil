import {modal} from "../../../helpers/modal.jss";
import {themes} from "../../../styles/themes.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {viewWidth} from "../../../helpers/windowMeasurments";
import {fontSize00276, fontSize00301} from "../../../styles/fontSizes.jss";

export const listStyle = () => ({
    width: "100%",
    height: 30,
    fontSize: fontSize00301,
});

export const buttonStyle = () => ({
    display: 'none',
    pointerEvents: 'none',
    minWidth: 'unset',
    minHeight: 'unset',
    width: 0,
    height: 0,
});

export const rowStyle = () => ({
    cursor: "pointer"
});

export const closeIcon = (fontSize, theme) => ({
    fontSize: fontSize,
    width: '1.2em',
    height: '1.2em',
    color: themes[theme].text,
    borderRadius: 'unset',
    cursor: 'pointer',
    alignSelf: 'flex-start',
});

export const useStyles = makeStyles({
    modal: props => ({
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    }),
    window: props => ({
        width: viewWidth() * 0.4,
        display: 'flex',
        flexDirection: 'column',
        marginTop: 'auto',
        zIndex: 11,
        height: '95vh',
    }),
    top: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes[props.theme].fill,
        '@media screen and (max-device-width: 412px)': {
            borderTopLeftRadius: '0.35em',
            borderTopRightRadius: '0.35em',
            border: `0.05em solid ${themes[props.theme].outline}`,
        },
        "@media screen and (min-device-width: 412px) and (max-device-width: 768px)": {
            borderTopLeftRadius: '0.35em',
            borderTopRightRadius: '0.35em',
            border: `0.05em solid ${themes[props.theme].outline}`,
        },
        '@media screen and (min-device-width: 768px) and (max-device-width: 1040px)': {
            borderTopLeftRadius: '0.35em',
            borderTopRightRadius: '0.35em',
            border: `0.01em solid ${themes[props.theme].outline}`,
        },
        '@media screen and (min-device-width: 1040px)': {
            borderTopLeftRadius: '0.35em',
            borderTopRightRadius: '0.35em',
            border: `0.08em solid ${themes[props.theme].outline}`,
        },
    }),
    title: props => ({
        width: '100%',
        textAlign: 'center',
        fontSize: fontSize00276,
        paddingLeft: '1em',
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
    }),
}, {index: 1})