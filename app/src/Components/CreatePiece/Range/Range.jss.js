import makeStyles from "@material-ui/core/styles/makeStyles";
import {drawerWidth} from "../../Reuseables/PermanentDrawer.jss";
import {availWidth} from "../../helpers/windowMeasurments";
import {tool, tool_title, toolbox} from "../CreatePiece.jss";

export const useStyles = makeStyles({
    range_tool: props => ({
        ...tool(props.fontSize, props.theme),
        height: availWidth() * 0.135,
    }),
    box: props => ({
        ...toolbox,
    }),
    title: props => ({
        ...tool_title(props.fontSize*0.8, props.theme),
        // marginLeft: '1.5em'
    }),
});

