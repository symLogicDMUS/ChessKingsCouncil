import { availHeight, availWidth } from "../../helpers/windowMeasurments";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { toolWidth } from "../CreatePiece.jss";
import {drawerWidth} from "../../Reuseables/PermanentDrawerLeft.jss";

export const locationToolWidth = () => toolWidth(); //change later
export const locationToolHeight = () => availHeight() * 0.103;
export const locationToolTop = () => availHeight() * 0.67;
export const locationToolLeft = () => availWidth() * 0.57;

/**
 * em units
 * */
export const locationButtonSize = 2.5;

const location_button = (fontSize) => ({
    fontSize: fontSize,
    width: `${locationButtonSize}em`,
    height: `${locationButtonSize}em`,
    minWidth: 0,
    minHeight: 0,
});

export const useStyles = makeStyles({
    "@media screen and (min-device-width: 768px)": {
        location_tool: (props) => ({
            // position: "absolute",
            fontSize: props.fontSize,
            // "@media screen and (min-device-width: 768px)": {
            width: drawerWidth,
            height: locationToolHeight(),
            // top: locationToolTop(),
            // left: locationToolLeft(),
            // },
            /*
            "@media screen and (max-device-width: 767px)": {
                width: availWidth() * 0.635 - availWidth() * 0.1 * 2,
                height: availWidth() * 0.635 - availWidth() * 0.1 * 2,
                top: availHeight() * 0.6 * 1.07,
                left: availWidth() * 0.21,
            },
             */
            zIndex: 0,
            borderRadius: "0.2em",
            backgroundColor: "purple",
            borderColor: "#a9a9a9",
        }),
        button_group: (props) => ({
            fontSize: props.fontSize,
            "& > *": {
                margin: `${locationButtonSize * 0.25}em`,
            },
        }),
        normal: (props) => ({
            ...location_button(props.fontSize),
            background: "#707070",
        }),
        selected: (props) => ({
            ...location_button(props.fontSize),
            background: "red",
        }),
    },
});
