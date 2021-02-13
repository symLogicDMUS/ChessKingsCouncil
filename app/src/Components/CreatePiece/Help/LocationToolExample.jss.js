import makeStyles from "@material-ui/core/styles/makeStyles";
import {tool, tool_flexbox, tool_title} from "../CreatePiece.jss";

export const useStyles = makeStyles({
    location_tool: (props) => ({
        ...tool(props.fontSize, props.theme),
    }),
    title: props => ({
        ...tool_title(props.theme),
    }),
    box: props => ({
        fontSize: props.fontSize,
        '@media (min-aspect-ratio: 1001/1000)': {
            ...tool_flexbox,
        },
        '@media (max-aspect-ratio: 1/1)': {
            width: '100em',
            height: '5em',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
        },
    }),
});