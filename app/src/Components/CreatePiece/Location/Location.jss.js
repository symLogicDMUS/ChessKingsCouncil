import makeStyles from "@material-ui/core/styles/makeStyles";
import {availHeight, availWidth} from "../../helpers/windowMeasurments";
import {tool, tool_title, tool_flexbox, toolWidth} from "../CreatePiece.jss";
import {fontSize0018, fontSize002, fontSize0035} from "../../styles/fontSizes.jss";

export const locationToolWidth = () => toolWidth(); //change later
export const locationToolHeight = () => availHeight() * 0.095
export const locationToolTop = () => availHeight() * 0.67;
export const locationToolLeft = () => availWidth() * 0.57;

export const useStyles = makeStyles({
    location_tool: (props) => ({
        ...tool(fontSize002, props.theme),
    }),
    title: props => ({
        ...tool_title(props.theme),
    }),
    box: props => ({
        '@media (min-aspect-ratio: 16/9)': {
            ...tool_flexbox,
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSize0035,
            width: '8em',
            height: '8em',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            justifyContent: 'space-evenly',
        },
        '@media (aspect-ratio: 1024/1366)':{
            fontSize: fontSize002,
            ...tool_flexbox,
        },
    }),
});
