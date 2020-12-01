import {makeStyles} from "@material-ui/core/styles"

export const useStyles = makeStyles({
    span_arrow_buttons: {
        position: 'absolute',
        zIndex: '0',
        "@media screen and (min-device-width: 768px)": {
            width: '25%',
            height: '66.67%',
            left: '72.5%',
            top: '27.3%'
        },
        "@media screen and (max-device-width: 767px)": {
            height: '90%',
            width: '55.35%',
            top: '7%',
            left: '3%'
        },
    },
});

