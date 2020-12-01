import {winWidth} from "../../helpers/windowMeasurments";
import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles({
    "@media screen and (min-device-width: 768px)": {
        location_tool: {
            position: "absolute",
            "@media screen and (min-device-width: 768px)": {
                width: '31.25em',
                height: window.screen.availHeight * 0.103,
                top: window.screen.availHeight * 0.67,
                left: window.screen.availWidth * 0.57,
            },
            "@media screen and (max-device-width: 767px)": {
                width: window.screen.availWidth * 0.635 - winWidth() * 0.1 * 2,
                height: window.screen.availWidth * 0.635 - winWidth() * 0.1 * 2,
                top: window.screen.availHeight * 0.6 * 1.07,
                left: window.screen.availWidth * 0.21,
            },
            zIndex: "0",
            borderRadius: "10px",
            backgroundColor: "#515151",
            borderColor: "#a9a9a9",
        },
        title: {
            position: "absolute",
            zIndex: "0",
            "@media screen and (max-device-width: 767px)": {
                top: "28%",
                left: "5%",
            },
            "@media screen and (min-device-width: 768px)": {
                top: "4%",
                left: "2.5%",
            },
            fontSize: "100%",
            fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
            color: "#a9a9a9",
        },
    },
});
