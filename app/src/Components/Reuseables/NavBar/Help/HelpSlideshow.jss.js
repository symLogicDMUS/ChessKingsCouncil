import { themes } from "../../../styles/themes/themes.jss";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(
    {
        dialog: (props) => ({
            "& .MuiSvgIcon-root": {
                color: themes[props.theme].text,
            },
            "& .MuiFormControlLabel-labelPlacementStart": {
                color: themes[props.theme].text,
                marginRight: "0.1rem",
            },
        }),
        color: (props) => ({
            color: themes[props.theme].text,
            backgroundColor: themes[props.theme].fill,
            "& .MuiTouchRipple-root": {
                color: themes[props.theme].text,
            },
        }),
        text: (props) => ({
            color: themes[props.theme].text,
        }),
        close: (props) => ({
            padding: 0,
            position: "absolute",
            right: "0.25rem",
            top: "0.25rem",
            width: "0.8rem",
            height: "0.8rem",
            "& .MuiSvgIcon-root": {
                width: "0.8rem",
                height: "0.8rem",
            },
        }),
    },
    { index: 1 }
);
