import makeStyles from "@material-ui/core/styles/makeStyles";
import {fontSize0025, fontSize00301} from "../../styles/fontSizes.jss";
import {themes} from "../../styles/themes.jss";

export const fontSizes = {
    wide: fontSize00301,
    thin: fontSize0025,
}

export const square = (fontSize) => ({
        fontSize: fontSize,
        zIndex: 'inherit',
        width: '1em',
        height: '1em',
        margin: 0,
        cursor: 'pointer',
});
