import makeStyles from "@material-ui/core/styles/makeStyles";
import {tool, tool_title, tool_flexbox} from "../CreatePiece.jss";
import {fontSize002, fontSize0023, fontSizeW0047} from "../../styles/fontSizes.jss";
import {availHeight} from "../../helpers/windowMeasurments";
import {appBarHeight} from "../../Reuseables/PersistentDrawer.jss";
import {fontSizes as boardFontSizes} from "../Board/CreatePieceBoard.jss";

export const fontSizes = {
    desktop: fontSize002,
    mobile: fontSize0023,
    ipx: fontSizeW0047,
    ipad: (availHeight() - (appBarHeight + boardFontSizes.ipad * 8 + availHeight() * 0.02 + availHeight() * 0.08)) * 0.3
}

export const widths = {
    desktop: '9em',
    mobile: '9em',
    ipx: '9em',
    ipad: '3.275em',
}

/**
 * @type {{desktop: em units, mobile: em units}}
 */
export const heights = {
    desktop: 9,
    mobile: 9,
    ipx: 9,
    ipad: 3.275,
}

export const useStyles = makeStyles({
    range_tool: props => ({
        ...tool(props.theme),
        justifyContent: 'center',
        ...props.styles,
    }),
    box: props => ({
        ...tool_flexbox,
    }),
    title: props => ({
        ...tool_title(props.theme),
    }),
});