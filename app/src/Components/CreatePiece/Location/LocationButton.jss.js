import {makeStyles} from "@material-ui/core/styles";

const buttons = {
    desktop: {
        d4: {
            left: '3%'
        },
        e4: {
            left: '16%'
        },
        d5: {
            left: '29%'
        },
        e5: {
            left: '42%'
        },
    },
    mobile: {
        d4: {
            top: "52%",
            left: "3.5%",
        },
        e4: {
            top: "52%",
            left: "52%",
        },
        d5: {
            top: "3.5%",
            left: "3.5%",
        },
        e5: {
            top: "3.5%",
            left: "52%",
        },
    },
}

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
    "@media screen and (min-device-width: 768px)": {
        normal: props => ({
            ...buttons.desktop[props.rf],
            ...unselectedButton
        }),
        selected: props => ({
            ...buttons.desktop[props.rf],
            backgroundColor: 'red',
        }),
    },
    "@media screen and (max-device-width: 767px)": {
        normal: props => ({
            ...buttons.mobile[props.rf],
            ...unselectedButton
        }),
        selected: props => ({
            ...buttons.mobile[props.rf],
            backgroundColor: 'red',
        }),
    },
})