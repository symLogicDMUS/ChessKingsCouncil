import {availHeight, availWidth} from "../../helpers/windowMeasurments";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {locationButtonSize} from "./LocationButton.jss";
import {toolWidth} from "../CreatePiece.jss";

export const locationToolWidth = () => toolWidth(); //change later
export const locationToolHeight = () => availHeight() * 0.103;
export const locationToolTop = () => availHeight() * 0.67;
export const locationToolLeft = () => availWidth() * 0.57;

export const useStyles = makeStyles({
    "@media screen and (min-device-width: 768px)": {
        location_tool: {
            position: "absolute",
            // "@media screen and (min-device-width: 768px)": {
                width: locationToolWidth(),
                height: locationToolHeight(),
                top: locationToolTop(),
                left: locationToolLeft(),
            // },
            /*
            "@media screen and (max-device-width: 767px)": {
                width: availWidth() * 0.635 - availWidth() * 0.1 * 2,
                height: availWidth() * 0.635 - availWidth() * 0.1 * 2,
                top: availHeight() * 0.6 * 1.07,
                left: availWidth() * 0.21,
            },
             */
            zIndex: "0",
            borderRadius: "10px",
            backgroundColor: "#515151",
            borderColor: "#a9a9a9",
        },
        button_group: props => ({
            '& > *': {
                margin: locationButtonSize()*0.25,
            }
        }),
    }
});