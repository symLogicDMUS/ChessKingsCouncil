import makeStyles from "@material-ui/core/styles/makeStyles";
import {availHeight, availWidth} from "../../helpers/windowMeasurments";
import {tool, tool_title, tool_flexbox, toolWidth} from "../CreatePiece.jss";
import {fontSize0018, fontSize002, fontSize0035} from "../../styles/fontSizes.jss";
import {appBarHeight} from "../../Reuseables/PersistentDrawer.jss";
import {fontSizes} from "../Board/CreatePieceBoard.jss";

export const locationToolWidth = () => toolWidth(); //change later
export const locationToolHeight = () => availHeight() * 0.095
export const locationToolTop = () => availHeight() * 0.67;
export const locationToolLeft = () => availWidth() * 0.57;

export const useStyles = makeStyles({
    location_tool: (props) => ({
        ...tool(props.theme),
    }),
    title: props => ({
        ...tool_title(props.theme),
    }),
    box: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        '@media (max-aspect-ratio: 6/10)': {
            fontSize: fontSize0035,
            width: '8em',
            height: '8em',
            marginTop: 0,
        },
        "@media (min-aspect-ratio: 6/10) and (max-aspect-ratio: 834/1194)": {
            marginTop: '-3vh',
            fontSize: fontSize0035,
            width: '8em',
            height: '8em',
        },
        '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)': {
            fontSize: availHeight() - (appBarHeight + fontSizes.ipad * 8 + availHeight() * 0.035),
            width: '100%',
            justifyContent: 'space-between',
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            ...tool_flexbox,
        },
    }),
});
