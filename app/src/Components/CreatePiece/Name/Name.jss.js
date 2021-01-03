import makeStyles from "@material-ui/core/styles/makeStyles";
import {tool, tool_flexbox} from "../CreatePiece.jss";
import {availHeight} from "../../helpers/windowMeasurments";

export const useStyles = makeStyles({
    name: props => ({
        '@media screen and (min-width: 768px)': {
            ...tool_flexbox,
            marginBottom: '2.5%',
        },
        '@media screen and (max-width: 767px)': {
            ...tool(props.fontSize, props.theme)
        },
        height: availHeight() * 0.08,
    }),
});