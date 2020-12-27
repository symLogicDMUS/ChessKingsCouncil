import makeStyles from "@material-ui/core/styles/makeStyles";
import { availHeight, availWidth } from "../../helpers/windowMeasurments";
import {tool, tool_title, tool_flexbox} from "../CreatePiece.jss";

export const useStyles = makeStyles({
    options_tool: (props) => ({
        ...tool(props.fontSize, props.theme),
        justifyContent: 'center',
        height: '5.5em',
    }),
    options_flexbox: props => ({
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
    title: props =>  ({
        ...tool_title(props.theme),
    }),
});
