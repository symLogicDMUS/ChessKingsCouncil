import {makeStyles} from "@material-ui/core/styles";

const buttons = {}

const unselectedButton = {
    backgroundColor: '#5d5d5d',
    '&:hover': {
        backgroundColor: '#a9a9a9'
    },
}

export const useStyles = makeStyles({
    label: {
        position: "absolute",
        zIndex: "0",
        top: "25%",
        left: "25%",
        width: "50%",
        height: "50%",
    },
    d4: {
        "@media screen and (min-device-width: 768px)": {
            left: '3%'
        },
        "@media screen and (max-device-width: 767px)": {
            top: "52%",
            left: "3.5%",
        },
    },
    e4: {
        "@media screen and (min-device-width: 768px)": {
            left: '16%'
        },
        "@media screen and (max-device-width: 767px)": {
            top: "52%",
            left: "52%",
        },
    },
    d5: {
        "@media screen and (min-device-width: 768px)": {
            left: '29%'
        },
        "@media screen and (max-device-width: 767px)": {
            top: "3.5%",
            left: "3.5%",
        },
    },
    e5: {
        "@media screen and (min-device-width: 768px)": {
            left: '42%'
        },
        "@media screen and (max-device-width: 767px)": {
            top: "3.5%",
            left: "52%",
        },
    },
})