import makeStyles from "@material-ui/core/styles/makeStyles";
import {toolWidth} from "../CreatePiece.jss";

export const useStyles = makeStyles({
        name: {
            position: "absolute",
            zIndex: "0",
            "@media screen and (min-device-width: 768px)": {
                width: toolWidth(),
                left: window.screen.availWidth * 0.57,
                height: window.screen.availHeight * 0.08,
                top: window.screen.availHeight * 0.1976,
            },
            "@media screen and (max-device-width: 767px)": {
                width: window.screen.availWidth * 0.9375 - window.screen.availWidth * 0.01 * 2,
                height: window.screen.availHeight * 0.4 * 0.5,
                top: window.screen.availHeight * 0.6 * 1.23,
                left: window.screen.availWidth * 0.01 * 5,
            },
        },
        title: {
            fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
            fontSize: "125%",
            color: "#a9a9a9",
            backgroundColor: "#515151",
            borderRadius: "15px",
        },
        form: {
            position: "absolute",
            zIndex: "0",
            "@media screen and (min-device-width: 768px)": {
                top: "54.28%",
                left: "2.5%",
                width: "93.75%",
                height: "30%",
            },
            "@media screen and (max-device-width: 767px)": {
                top: "35%",
                left: "2%",
                width: "92.5%",
                height: "25%",
            },
            borderRadius: "5px",
            fill: "black",
            color: "#a9a9a9",
            backgroundColor: "#515151",
            border: "1px solid #a9a9a9",
            fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
            outline: "none",
        },
    // form1_type__text___focus: {
    //     backgroundColor: "#5d5d5d",
    //     border: "1px solid #b6b6b6",
    // },
});
