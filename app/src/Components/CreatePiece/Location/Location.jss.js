import {availHeight, availWidth} from "../../helpers/windowMeasurments";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {tool, tool_title, tool_flexbox, toolWidth} from "../CreatePiece.jss";
import {drawerWidth} from "../../Reuseables/PermanentDrawer.jss";
import {themes} from "../../styles/themes.jss";

export const locationToolWidth = () => toolWidth(); //change later
export const locationToolHeight = () => availHeight() * 0.095
export const locationToolTop = () => availHeight() * 0.67;
export const locationToolLeft = () => availWidth() * 0.57;

export const useStyles = makeStyles({
    location_tool: (props) => ({
        ...tool(props.fontSize, props.theme),
        justifyContent: 'center',
    }),
    title: props => ({
        ...tool_title(props.theme),
    }),
    box: props => ({
        fontSize: props.fontSize,
        '@media screen and (min-width: 768px)': {
            ...tool_flexbox,
        },
        '@media screen and (max-width: 767px)': {
            width: '16em',
            height: '16em',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
        },
    }),
});
