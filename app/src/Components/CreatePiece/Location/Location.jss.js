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
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSize0035,
            width: '8em',
            height: '8em',
            marginTop: '-3vh',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            justifyContent: 'space-evenly',
        },
        '@media (max-aspect-ratio: 1/2)': {
            marginTop: 0,
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            ...tool_flexbox,
        },
    }),
});
