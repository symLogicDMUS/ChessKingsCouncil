import makeStyles from "@material-ui/core/styles/makeStyles";
import {lineHeight, toolLeft, toolWidth} from "../CreatePiece.jss";
import {availHeight, availWidth} from "../../helpers/windowMeasurments";
import {
    blackLeft, blackWindowLeft, chooseButtonTop,
    colorTitleTop,
    iconButtonHeight,
    iconButtonWidth,
    iconToolHeight,
    iconToolTop,
    iconWindowSize, margin,
    subtitleFontSize, uploadButtonTop, whiteLeft, whiteWindowLeft
} from "./calculations.jss";


export const iconButton = {
    position: 'absolute',
    width: iconButtonWidth(),
    height: iconButtonHeight(),
}

export const colorTitle = {
    position: 'absolute',
    fontSize: subtitleFontSize(),
    lineHeight: lineHeight(),
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    color: "#a9a9a9",
}


export const imgIconWindow = {
    position: 'absolute',
    width: iconWindowSize(),
    height: iconWindowSize(),
    top: uploadButtonTop(),
    border: '0.1em solid #a9a9a9',
}


export const useStyles = makeStyles({
    icon_tool: {
        position: "absolute",
        "@media screen and (min-device-width: 768px)": {
            width: toolWidth(),
            top: iconToolTop(),
            height: iconToolHeight(),
            left: toolLeft(),
        },
        "@media screen and (max-device-width: 767px)": {
            width: availWidth() - availWidth() * 0.01 * 6,
            height: availHeight() * 0.4 * 0.85,
            top: availHeight() * 0.6 + availHeight() * 0.4 * 0.125,
            left: availWidth() * 0.01 * 3,
        },
        backgroundColor: "#515151",
        borderRadius: "10px",
        border: "1px dashed white"
    },
    title: {
        position: "absolute",
        left: margin(),
        top: margin(),
        lineHeight: lineHeight(),
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        color: "#a9a9a9",
    },
    white_title: {
        ...colorTitle,
        "@media screen and (min-device-width: 768px)": {
            top: colorTitleTop(),
            left: whiteLeft(),
            lineHeight: lineHeight(),
        },
        "@media screen and (max-device-width: 767px)": {
            left: "14%",
        },
    },
    black_title: {
        ...colorTitle,
        "@media screen and (min-device-width: 768px)": {
            top: colorTitleTop(),
            left: blackLeft(),
            lineHeight: lineHeight(),
            border: "1px dashed white",
        },
        "@media screen and (max-device-width: 767px)": {

        },
    },

    white_window: {
        "@media screen and (min-device-width: 768px)": {
            ...imgIconWindow,
            left: whiteWindowLeft(),
        },
        "@media screen and (max-device-width: 767px)": {
            left: "2%",
        },
    },
    black_window: {
        "@media screen and (min-device-width: 768px)": {
            ...imgIconWindow,
            left: blackWindowLeft()
        },
        "@media screen and (max-device-width: 767px)": {
            left: "6em",
        },
    },
    choose_button_white: {
        ...iconButton,
        top: chooseButtonTop(),
        left: whiteLeft(),
    },
    choose_button_black: {
        ...iconButton,
        top: chooseButtonTop(),
        left: blackLeft(),
    },
    image: {
        width: '100%',
        height: '100%'
    }
});