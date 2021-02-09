import makeStyles from "@material-ui/core/styles/makeStyles";
import {availHeight, availWidth} from "../../helpers/windowMeasurments";
import {tool, tool_title, tool_flexbox} from "../CreatePiece.jss";

export const useStyles = makeStyles({
    options_tool: (props) => ({
        ...tool(props.fontSize, props.theme),
        '@media screen and (min-width: 768px)': {
            height: '5.5em',
        },
    }),
    options_flexbox: props => ({
        fontSize: props.fontSize,
        '@media screen and (min-width: 768px)': {
            ...tool_flexbox,
        },
        '@media screen and (max-width: 767px)': {
            width: '15em',
            height: '15em',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            justifyContent: 'space-evenly',

        },
        '@media (min-aspect-ratio: 320/568) and (max-aspect-ratio: 1/1)':{
            width: '100%',
            flexWrap: 'nowrap',
            marginTop: '-2em'
        }
    }),
    title: props => ({
        ...tool_title(props.theme),
    }),
});
