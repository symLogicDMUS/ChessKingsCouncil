import {tool_title} from "../CreatePiece.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {fontSizes as boardFontSizes} from "../Board/CreatePieceBoard.jss";

export const widths = {
    desktop: '9em',
    mobile: '9em',
    ipx: '9em',
    ipad: '9em',
    short: '9em',
}
/**
 * @type {{desktop: em units, mobile: em units}}
 */
export const heights = {
    desktop: 9,
    mobile: 9,
    ipx: 9,
    ipad: 9,
    short: 9,
}

export const useStyles = makeStyles({
    range_tool: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        /*media query for phones (generalized)*/
        /*tall phones*/
        '@media screen and (max-device-width: 767px) and (max-aspect-ratio: 6/10)': {
            width: '100%',
            height: '100%',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
        },
        /*short/medium height phones*/
        "@media screen and (max-device-width: 767px) and  (min-aspect-ratio: 6/10) and (max-aspect-ratio: 85/100)": {
            width: '100%',
            height: '100%',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
        },
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 85/100) and (max-aspect-ratio: 1/1)":{
            width: '100%',
            height: '100%',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
        },
        /*tablets*/
        '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)': {
            width: '100%',
            height: '100%',
            alignItems: 'flex-start',
            justifyContent: 'center',
        },
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            width: '93%',
            marginLeft: '3.5%',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        ...props.styles,
    }),
    title: props => ({
        ...tool_title(props.theme),
    }),
    divider: props => ({
       /*tablets*/
       '@media screen and (min-device-width: 768px) and (max-device-width: 1080px) and (max-aspect-ratio: 1/1)': {
           width: boardFontSizes.ipad*8*0.1,
       },
    }),
});