import makeStyles from "@material-ui/core/styles/makeStyles";
import {availHeight} from "../../helpers/windowMeasurments";
import {tool, tool_flexbox} from "../CreatePiece.jss";
import {fontSize002, fontSize0024, fontSize00301}
    from "../../styles/fontSizes.jss";

export const fontSizes = {
    desktop: fontSize002,
    mobile: fontSize002,
    ipx: fontSize002,
    ipad: fontSize0024,
}

export const text_field_style = (screenCase) => ({
    text: {
        normal: {fontSize: fontSizes[screenCase]},
        hover: {fontSize: fontSizes[screenCase]},
        focused: {fontSize: fontSizes[screenCase]}
    },
    root: {
        normal: {fontSize: fontSizes[screenCase]},
        hover: {fontSize: fontSizes[screenCase]},
        focused: {fontSize: fontSizes[screenCase]}
    }
})


export const useStyles = makeStyles({
    name: props => ({
        '@media (max-aspect-ratio: 1/1)': {
            ...tool(fontSize002, props.theme)
        },
        '@media (min-aspect-ratio: 3/4) and (max-aspect-ratio: 1/1)':{
            ...tool(fontSize0024, props.theme)
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            ...tool_flexbox,
            marginBottom: '2.5%',
        },
        height: availHeight() * 0.08,
    }),
});