import makeStyles from "@material-ui/core/styles/makeStyles";
import {imgFillDiv} from "../../Reuseables/imgFillDiv.jss";

export const useStyles = makeStyles({
    options_tool: {
        position: "absolute",
        zIndex: "0",
        "@media screen and (min-device-width: 768px)": {
            width: '31.25em',
            height: window.screen.availHeight * 0.13,
            top: window.screen.availHeight * 0.785,
            left: window.screen.availWidth * 0.57,
        },
        "@media screen and (max-device-width: 767px)": {
            width: window.screen.availWidth * 0.934,
            height: window.screen.availHeight * 0.4 * 0.825,
            top: window.screen.availHeight * 0.6 + window.screen.availWidth * 0.03 * 3,
            left: window.screen.availWidth * 0.03
        },
        borderRadius: "10px",
        backgroundColor: "#515151",
    },
    title: {
        "@media screen and (min-device-width: 768px)": {
            position: "absolute",
            zIndex: "0",
            left: "2.5%",
            top: "5%",
            fontSize: "125%",
            fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
            color: "#a9a9a9",
        },
        "@media screen and (max-device-width: 767px)": {
            options_title: {
                display: "none",
            },
        },
    },
    save_option: {
        position: "absolute",
        zIndex: "1",
        "@media screen and (min-device-width: 768px)": {
            left: "2.5%",
        },
        "@media screen and (max-device-width: 767px)": {
            top: "0",
            left: "7.5%",
        },
    },
    load_option: {
        position: "absolute",
        zIndex: "1",
        "@media screen and (min-device-width: 768px)": {
            left: "27.5%",
        },
        "@media screen and (max-device-width: 767px)": {
            top: "0",
            left: "61.2135%",
        },
    },
    reset_option: {
        position: "absolute",
        zIndex: "1",
        "@media screen and (min-device-width: 768px)": {
            left: "52.5%",
        },
        "@media screen and (max-device-width: 767px)": {
            top: "52.5%",
            left: "7.5%",

        },
    },
    erase_option: {
        position: "absolute",
        zIndex: "1",
        "@media screen and (min-device-width: 768px)": {
            left: "77.5%",
        },
        "@media screen and (max-device-width: 767px)": {
            top: "52.5%",
            left: "61.2135%",
        },
    },
});

