import makeStyles from "@material-ui/core/styles/makeStyles";
import { availHeight, availWidth } from "../../helpers/windowMeasurments";
import {tool, tool_title, tool_flexbox} from "../CreatePiece.jss";

export const useStyles = makeStyles({
    options_tool: (props) => ({
        ...tool(props.fontSize, props.theme),
        height: availHeight() * 0.13,
    }),
    options_flexbox: props => ({
        ...tool_flexbox,
    }),
    title: props =>  ({
        ...tool_title(props.fontSize*0.8, props.theme),
    }),
});
