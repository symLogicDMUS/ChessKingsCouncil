import makeStyles from "@material-ui/core/styles/makeStyles";
import {drawerWidth} from "../../Reuseables/PermanentDrawer.jss";
import {availWidth} from "../../helpers/windowMeasurments";
import {tool, tool_title, tool_flexbox} from "../CreatePiece.jss";

export const useStyles = makeStyles({
    range_tool: props => ({
        ...tool(props.fontSize, props.theme),
        justifyContent: 'center',
        height: '14.5em',
    }),
    box: props => ({
        ...tool_flexbox,
    }),
    title: props => ({
        ...tool_title(props.theme),
    }),
});

