import makeStyles from "@material-ui/core/styles/makeStyles";
import {fontSize0025, fontSize00301} from "../../styles/fontSizes.jss";
import {themes} from "../../styles/themes.jss";

export const fontSizes = {
    desktop: fontSize00301,
    mobile: fontSize0025,
}

export const square = (fontSize) => ({
        fontSize: fontSize,
        zIndex: 'inherit',
        width: '1em',
        height: '1em',
        margin: 0,
        cursor: 'pointer',
});
