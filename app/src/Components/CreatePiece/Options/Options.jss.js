import makeStyles from "@material-ui/core/styles/makeStyles";
import { availHeight, availWidth } from "../../helpers/windowMeasurments";
import {box, tool, tool_title, toolbox, toolWidth} from "../CreatePiece.jss";
import { optionButtonSize } from "./Option.jss";
import {drawerWidth} from "../../Reuseables/PermanentDrawerLeft.jss";

const getHeightDesktop = () => availHeight() * 0.13;

export const useStyles = makeStyles({
    options_tool: (props) => ({
        ...tool(props.fontSize, props.theme),
        height: getHeightDesktop(),
    }),
    box: props => ({
        ...toolbox,
    }),
    title: props =>  ({
        ...tool_title(props.fontSize*0.8, props.theme),
        // border: "1px dashed #b1faae",
    }),
});
