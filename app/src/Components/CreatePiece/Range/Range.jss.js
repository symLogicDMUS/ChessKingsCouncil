import makeStyles from "@material-ui/core/styles/makeStyles";
import {tool, tool_title, tool_flexbox} from "../CreatePiece.jss";
import {fontSize002, fontSize0023, fontSizeW005} from "../../styles/fontSizes.jss";

export const fontSizes = {
    desktop: fontSize002,
    mobile: fontSize0023,
    ipx: fontSizeW005,
}

export const widths = {
    desktop: '9em',
    mobile: '9em',
    ipx: '9em',
}

/**
 * @type {{desktop: em units, mobile: em units}}
 */
export const heights = {
    desktop: 9,
    mobile: 9,
    ipx: 9,
}

export const useStyles = makeStyles({
    range_tool: props => ({
        ...tool(fontSize002, props.theme),
        justifyContent: 'center',
        height: '10.5em',
        ...props.styles,
    }),
    box: props => ({
        ...tool_flexbox,
        '@media (max-aspect-ratio: 1/2)': {
            flexDirection: 'column-reverse',
            alignItems: 'center',
            justifyContent: 'flex-end',
        },
    }),
    title: props => ({
        ...tool_title(props.theme),
    }),
});

