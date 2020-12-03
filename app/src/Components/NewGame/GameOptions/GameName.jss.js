import makeStyles from "@material-ui/core/styles/makeStyles";
import {getTextWidth} from "../../helpers/getTextWidth";
import {availWidth, availHeight} from "../../helpers/windowMeasurments";
import {sectionWidth, margin} from "./variables.jss";
import {buttonMargin, size, standardLeft} from "./PickType.jss";
import {navBarHeight} from "../../NavBar/NavBarStyle";
import {title} from "./mixins.jss";

const lineHeight = 0.65
const labelLeft = availWidth() * 0.05;
const labelTop = availHeight()  * 0.15

export const useStyles = makeStyles({
    title: props =>  ({
        ...title(props.fontSize, props.text),
        top: navBarHeight * 1.6,
    }),
    text_field: props => ({
        position: 'absolute',
        width: size(props.fontSize)*3 + buttonMargin(props.fontSize) * 2,
        top: navBarHeight + margin * 0.2 + props.fontSize,
        left: standardLeft(props.fontSize),

        color: 'black',

        "& .MuiInputLabel-root": {
            color: "black",
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
        },
        "& .MuiOutlinedInput-input": {
            color: 'black',
        },

        "&:hover .MuiInputLabel-root": {
            color: 'black',
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
        },
        "&:hover .MuiOutlinedInput-input": {
            color: "black",
        },

        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "black",
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: "black",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
        },
    }),
});
