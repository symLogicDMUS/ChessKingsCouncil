import makeStyles from "@material-ui/core/styles/makeStyles";
import {tool, tool_title, tool_flexbox} from "../CreatePiece.jss";
import {fontSize00184, fontSize002} from "../../styles/fontSizes.jss";

export const useStyles = makeStyles({
    options_tool: (props) => ({
        ...tool(fontSize00184, props.theme),
        '@media (min-aspect-ratio: 1001/1000)': {
            height: '5.5em',
        },
    }),
    options_flexbox: props => ({
        fontSize: fontSize00184,
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
        '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)':{
            alignItems: 'center',
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            ...tool_flexbox,
        },
    }),
    title: props => ({
        ...tool_title(props.theme),
    }),
});
