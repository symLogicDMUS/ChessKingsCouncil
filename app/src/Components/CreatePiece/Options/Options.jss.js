import makeStyles from "@material-ui/core/styles/makeStyles";
import {availHeight, availWidth} from "../../helpers/windowMeasurments";
import {toolWidth} from "../CreatePiece.jss";

const getWidthDesktop = () => toolWidth();
const getHeightDesktop = () => availHeight() * 0.13;
const getTopDesktop = () => availHeight() * 0.785;
const getLeftDesktop = () => availWidth() * 0.57;

const getWidthMobile = () => availWidth() * 0.8;
const getHeightMobile = () => availHeight() * 0.4 * 0.825;
const getTopMobile = () => availHeight() * 0.6 + availWidth() * 0.03 * 3;
const getLeftMoble = () => availWidth() * 0.03;


export const option = {
    position: "absolute",
    zIndex: 1,
    width: getWidthDesktop() * 0.15,
    height: getWidthDesktop() * 0.15,
    border: "1px dashed green",
}


export const useStyles = makeStyles({
    options_tool: {
        position: "absolute",
        zIndex: "0",
        "@media screen and (min-device-width: 768px)": {
            width: getWidthDesktop(),
            height: getHeightDesktop(),
            top: getTopDesktop(),
            left: getLeftDesktop(),
        },
        "@media screen and (max-device-width: 767px)": {
            width: getWidthMobile(),
            height: getHeightMobile(),
            top: getTopMobile(),
            left: getLeftMoble()
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
        ...option,
        "@media screen and (min-device-width: 768px)": {
            left: "2.5%",
        },
        "@media screen and (max-device-width: 767px)": {
            top: "0",
            left: "7.5%",
        },
    },
    load_option: {
        ...option,
        "@media screen and (min-device-width: 768px)": {
            left: "27.5%",
        },
        "@media screen and (max-device-width: 767px)": {
            top: "0",
            left: "61.2135%",
        },
    },
    reset_option: {
        ...option,
        "@media screen and (min-device-width: 768px)": {
            left: "52.5%",
        },
        "@media screen and (max-device-width: 767px)": {
            top: "52.5%",
            left: "7.5%",
        },
    },
    erase_option: {
        ...option,
        "@media screen and (min-device-width: 768px)": {
            left: "77.5%",
        },
        "@media screen and (max-device-width: 767px)": {
            top: "52.5%",
            left: "61.2135%",
        },
    },
});

