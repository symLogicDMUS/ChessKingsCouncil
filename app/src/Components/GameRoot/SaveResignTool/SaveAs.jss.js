import {modal} from "../../helpers/modal.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";

const formAndButton = {
    position: 'absolute',
    zIndex: 'inherit',
    cursor: 'pointer',
    color: '#b1faae',
    backgroundColor: 'green',
    border: '0.25em solid #b1faae',
    borderRadius: '0.5em',
    textAlign: 'center',
    fontSize: window.screen.availHeight * 0.0185,
    paddingTop: window.screen.availHeight * 0.0026,
    fontFamily: '\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif',
    '&:hover': {
        color: 'green',
        backgroundColor: '#b1faae'
    },
}

export const useStyles = makeStyles({
    modal: {
        ...modal
    },
    window: {
        "@media screen and (min-device-width: 768px)": {
            left: window.screen.availWidth * 0.31,
            top: window.screen.availHeight * 0.30,
            width: window.screen.availWidth * 0.21,
            height: window.screen.availHeight * 0.31,
        },
        position: 'absolute',
        zIndex: 'inherit',
        borderRadius: '1.2em',
        color: '#b1faae',
        backgroundColor: 'green',
        border: '0.8em solid #b1faae'
    },
    label: {
        position: 'absolute',
        zIndex: 'inherit',
        "@media screen and (min-device-width: 768px)": {
            width: window.screen.availWidth * 0.211,
            height: window.screen.availHeight * 0.02,
            fontSize: window.screen.availHeight * 0.02,
        },
        fontFamily: '\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif',
        textAlign: 'center',
        color: '#b1faae',
    },
    form: {
        "@media screen and (min-device-width: 768px)": {
            top: window.screen.availHeight * 0.195,
            left: window.screen.availWidth * 0.019,
            width: window.screen.availWidth * 0.1725,
            height: window.screen.availHeight * 0.021,
        },
        ...formAndButton
    },
    ok: {
        "@media screen and (min-device-width: 768px)": {
            top: window.screen.availHeight * 0.123,
            left: window.screen.availWidth * 0.052,
            height: window.screen.availHeight * 0.021,
            width: window.screen.availWidth * 0.0455,
        },
        ...formAndButton,
    },
    cancel: {
        "@media screen and (min-device-width: 768px)": {
            top: window.screen.availHeight * 0.245,
            left: window.screen.availWidth * 0.117,
            height: window.screen.availHeight * 0.021,
            width: window.screen.availWidth * 0.0455,
        },
        ...formAndButton,
    },
    confirm: {
        "@media screen and (min-device-width: 768px)": {
            top: window.screen.availHeight * 0.245,
            left: window.screen.availWidth * 0.117,
            height: window.screen.availHeight * 0.021,
            width: window.screen.availWidth * 0.0455,
        },
        ...formAndButton
    }
});