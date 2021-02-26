import {get2ItemFontSizes, get2ItemMargins, tool_title} from "../CreatePiece.jss";
import {getBoardFontSize, getBoardSize} from "../Board/CreatePieceBoard.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {viewWidth} from "../../helpers/windowMeasurments";
import {drawerWidth} from "../../Reuseables/PermanentDrawer.jss";

export const scroll_table_style = () => {
    if (viewWidth() <= 1040) {
        return {
            width: '9em',
            height: 9,
            fontSize: get2ItemFontSizes(),
        }
    }
    else {
        return {
            width: '9em',
            height: 9,
            fontSize: (drawerWidth - get2ItemMargins())*0.5*0.333*0.333,
        }
    }
};

export const useStyles = makeStyles({
    range_tool: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        /*media query for phones (generalized)*/
        /*tall phones*/
        '@media screen and (max-device-width: 412px)': {
            width: '100%',
            height: '100%',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
        },
        /*short/medium height phones*/
        "@media screen and (min-device-width: 412px) and  (max-device-width: 767px)": {
            width: '100%',
            height: '100%',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
        },
        /*tablets*/
        '@media screen and (min-device-width: 768px) and (max-device-width: 1040px)': {
            width: '100%',
            height: '100%',
            alignItems: 'flex-start',
            justifyContent: 'center',
        },
        '@media screen and (min-device-width: 1040px)': {
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
        '@media screen and (min-device-width: 768px) and (max-device-width: 1040px)': {
            width: getBoardFontSize() * 8 * 0.1,
        },
    }),
}, {index: 1});