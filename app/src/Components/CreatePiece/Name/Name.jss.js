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

export const gen_style = () => ({
    width: '100%'
});

export const useStyles = makeStyles({
    name: props => ({
        ...tool(props.theme),
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            ...tool_flexbox,
            marginBottom: '3vh',

        },
    }),
});