import makeStyles from "@material-ui/core/styles/makeStyles";
import {blackLeft, uploadButtonTop, iconButtonWidth, iconButtonHeight, margin, whiteLeft} from "../calculations.jss";
import {iconButton} from "../Icon.jss";

export const useStyles = makeStyles({
    ...iconButton,
    upload_white: {
        ...iconButton,

        "@media screen and (min-device-width: 768px)": {
            top: uploadButtonTop(),
            left: whiteLeft(),
        },
        "@media screen and (max-device-width: 767px)": {
            top: "86.5%",
            left: "2%",
        },
        "&:hover": {
            color: "white",
            backgroundColor: "#a9a9a9",
        },
    },
    upload_black: {
        ...iconButton,
        "@media screen and (min-device-width: 768px)": {
            top: uploadButtonTop(),
            left: blackLeft(),
        },
        "@media screen and (max-device-width: 767px)": {
            top: "86.5%",
            left: "60%",
        },
        "&:hover": {
            color: "white",
            backgroundColor: "#a9a9a9",
        },
    },
});
