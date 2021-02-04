import makeStyles from "@material-ui/core/styles/makeStyles";
import {availHeight} from "../../helpers/windowMeasurments";
import {tool, tool_flexbox} from "../CreatePiece.jss";
import {fontSize00184, fontSize002}
from "../../styles/fontSizes.jss";

const textStyle = {
    fontSize: fontSize002,
}

export const text_field_style = {
    text: {
        normal: {...textStyle},
        hover: {...textStyle},
        focused: {...textStyle}
    },
    root: {
        normal: {...textStyle},
        hover: {...textStyle},
        focused: {...textStyle}

    }
}


export const useStyles = makeStyles({
    name: props => ({
        '@media screen and (min-width: 768px)': {
            ...tool_flexbox,
            marginBottom: '2.5%',
        },
        '@media screen and (max-width: 767px)': {
            ...tool(fontSize002, props.theme)
        },
        height: availHeight() * 0.08,
    }),
});