import makeStyles from "@material-ui/core/styles/makeStyles";
import {tool, tool_title, tool_flexbox} from "../CreatePiece.jss";
import {fontSize002, fontSize0023} from "../../styles/fontSizes.jss";

export const fontSizes = {
    desktop: fontSize002,
    mobile: fontSize0023,
}

export const widths = {
    desktop: '9.5em',
    mobile: 8.5,
}

/**
 * @type {{desktop: em units, mobile: em units}}
 */
export const heights = {
    desktop: 9.5,
    mobile: 8.5,
}

export const useStyles = makeStyles({
    range_tool: props => ({
        ...tool(props.fontSize, props.theme),
        justifyContent: 'center',
        height: '14.5em',
        ...props.styles,
    }),
    box: props => ({
        ...tool_flexbox,
    }),
    title: props => ({
        ...tool_title(props.theme),
    }),
});

