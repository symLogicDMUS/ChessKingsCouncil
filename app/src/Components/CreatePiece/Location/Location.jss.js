import {availHeight, availWidth} from "../../helpers/windowMeasurments";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {tool, tool_title, toolbox, toolWidth} from "../CreatePiece.jss";
import {drawerWidth} from "../../Reuseables/PermanentDrawer.jss";
import {themes} from "../../styles/themes.jss";

export const locationToolWidth = () => toolWidth(); //change later
export const locationToolHeight = () => availHeight() * 0.095
export const locationToolTop = () => availHeight() * 0.67;
export const locationToolLeft = () => availWidth() * 0.57;

export const useStyles = makeStyles({
        location_tool: (props) => ({
            ...tool(props.fontSize, props.theme),
        }),
        title: props => ({
            ...tool_title(props.fontSize*0.8, props.theme),
        }),
        box: props => ({
            ...toolbox,
        }),
});
