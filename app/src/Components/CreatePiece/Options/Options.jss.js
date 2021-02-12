import makeStyles from "@material-ui/core/styles/makeStyles";
import {tool, tool_title, tool_flexbox} from "../CreatePiece.jss";
import {fontSize00184, fontSize002} from "../../styles/fontSizes.jss";

export const useStyles = makeStyles({
    options_tool: (props) => ({
        ...tool(fontSize00184, props.theme),
        '@media (min-aspect-ratio: 16/9)': {
            height: '5.5em',
        },
    }),
    options_flexbox: props => ({
        fontSize: fontSize00184,
        '@media (min-aspect-ratio: 16/9)': {
            ...tool_flexbox,
        },
        '@media (max-aspect-ratio: 1/1)': {
            width: '16em',
            height: '16em',
            marginTop: '-2em',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            justifyContent: 'space-evenly',
        },
        '@media (aspect-ratio: 1024/1366)':{
            alignItems: 'center',
        },
    }),
    title: props => ({
        ...tool_title(props.theme),
    }),
});
