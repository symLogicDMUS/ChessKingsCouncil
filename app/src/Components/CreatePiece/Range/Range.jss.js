import makeStyles from "@material-ui/core/styles/makeStyles";
import {tool_title} from "../CreatePiece.jss";

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
        '@media screen and (max-device-width: 767px) and (max-aspect-ratio: 6/10)': {
            width: '100%',
            height: '100%',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
        },
        "@media (min-aspect-ratio: 6/10) and (max-aspect-ratio: 1/1)": {
            width: '100%',
            height: '100%',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
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
});