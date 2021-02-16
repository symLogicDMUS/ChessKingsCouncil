import makeStyles from "@material-ui/core/styles/makeStyles";
import {tool, tool_title, tool_flexbox} from "../CreatePiece.jss";
import {
    fontSize002,
    fontSize00219,
    fontSize0023,
    fontSize01,
    fontSizeW0035,
    fontSizeW0047
} from "../../styles/fontSizes.jss";
import {availHeight, availWidth} from "../../helpers/windowMeasurments";
import {appBarHeight} from "../../Reuseables/PersistentDrawer.jss";
import {fontSizes as boardFontSizes} from "../Board/CreatePieceBoard.jss";

const widthMargin = availWidth() * 0.015;

const margins = {
    ipx: availWidth()*0.015,
    mobile: availWidth()*0.05,
    ipad: availWidth()*0.015,
}

export const fontSizes = {
    desktop: fontSize002,
    mobile: (boardFontSizes.mobile*8 - margins.mobile * 3)*0.5*0.31675*0.31675,
    ipx: (boardFontSizes.ipx*8 - margins.ipx * 3)*0.5*0.31675*0.31675,
    ipad: (boardFontSizes.ipad*8 - margins.ipad * 3)*0.5*0.28*0.28,
}

export const widths = {
    desktop: '9em',
    mobile: '9em',
    ipx: '9em',
    ipad: '9em',
}

/**
 * @type {{desktop: em units, mobile: em units}}
 */
export const heights = {
    desktop: 9,
    mobile: 9,
    ipx: 9,
    ipad: 9,
}

export const useStyles = makeStyles({
    range_tool: props => ({
        ...tool(props.theme),
        justifyContent: 'center',
        ...props.styles,
        "@media (min-aspect-ratio: 6/10) and (max-aspect-ratio: 834/1194)": {
            marginTop: '-3.5vh',
        },
    }),
    table_and_arrows_container: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        '@media (max-aspect-ratio: 6/10)': {
            width: '100%',
            height: '100%',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
        },
        "@media (min-aspect-ratio: 6/10) and (max-aspect-ratio: 1/1)": {
            width: '100%',
            height: '100%',
            alignItems: 'flex-start',
            justifyContent: 'center',
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            width: '93%',
            marginLeft: '3.5%',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
    }),
    separator: props => ({
        "@media (min-aspect-ratio: 6/10) and (max-aspect-ratio: 834/1194)": {
                width: '6.25vw',
        },
        '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)': {
            width: '7.5vw',
        },
    }),
    title: props => ({
        ...tool_title(props.theme),
    }),
});