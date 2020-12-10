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
    subtitleFontSize, uploadButtonTop, wl, bl, whiteWindowLeft
} from "./calculations.jss";
import {fontSize} from "../em.jss";

/*em units*/
export const margin1 = 1.1;
export const white_button_left = 1.1;
export const black_button_left = 16;
export const upload_button_top = 2.5;
export const choose_button_top = 6.1;


export const iconButton = (fontSize) => ({
    position: 'absolute',
    fontSize: fontSize,
    // width: '6.5em',
    height: '2.5em',
})

export const colorTitle = (fontSize) => ({
    position: 'absolute',
    fontSize: fontSize,
    lineHeight: lineHeight(),
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    color: "#a9a9a9",
})

export const imgWindow = (fontSize) => ({
    position: 'absolute',
    fontSize: fontSize,
    width: '6em',
    height: '6em',
    top: `${upload_button_top}em`,
    border: '0.1em solid #a9a9a9',
});

export const useStyles = makeStyles({
    icon_tool: props => ({
        position: "absolute",
        fontSize: props.fontSize,
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
        borderRadius: "0.2em",
    }),
    title: props => ({
        position: "absolute",
        fontSize: props.fontSize,
        left: `${white_button_left}em`,
        top: `${margin1}em`,
        lineHeight: '0.7em',
        // fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        color: "#a9a9a9",
    }),

    /**
     * White
     */
    choose_button_white: props => ({
        ...iconButton(props.fontSize),
        top: `${choose_button_top}em`,
        left: `${white_button_left}em`,
    }),
    upload_white: props => ({
        ...iconButton(props.fontSize),
        "@media screen and (min-device-width: 768px)": {
            top: `${upload_button_top}em`,
            left: `${white_button_left}em`,
        },
        "@media screen and (max-device-width: 767px)": {
            top: "86.5%",
            left: "2%",
        },
        "&:hover": {
            color: "white",
            backgroundColor: "#a9a9a9",
        },
    }),
    white_window: props => ({
        ...imgWindow(props.fontSize),
        "@media screen and (min-device-width: 768px)": {
            left: `${8.75}em`,
        },
        "@media screen and (max-device-width: 767px)": {
            left: "2%",
        },
    }),

    /**
     * Black
     */
    choose_button_black: props => ({
        ...iconButton(props.fontSize),
        top: `${choose_button_top}em`,
        left: `${black_button_left}em`,
    }),
    upload_black: props => ({
        ...iconButton(props.fontSize),
        "@media screen and (min-device-width: 768px)": {
            top: `${upload_button_top}em`,
            left: `${black_button_left}em`,
        },
        "@media screen and (max-device-width: 767px)": {
            top: "86.5%",
            left: "60%",
        },
        "&:hover": {
            color: "white",
            backgroundColor: "#a9a9a9",
        },
    }),
    black_window: props => ({
        "@media screen and (min-device-width: 768px)": {
            ...imgWindow(props.fontSize),
            left: `${23.75}em`
        },
        "@media screen and (max-device-width: 767px)": {
            left: "6em",
        },
    }),
    image: {
        width: '100%',
        height: '100%'
    }
});