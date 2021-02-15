import makeStyles from "@material-ui/core/styles/makeStyles";
import {tool, tool_title, tool_flexbox} from "../CreatePiece.jss";
import {
    fontSize0015,
    fontSize00184,
    fontSize002,
    fontSize0024,
    fontSizeW0028,
    fontSizeW0031
} from "../../styles/fontSizes.jss";

export const useStyles = makeStyles({
    options_tool: (props) => ({
        ...tool(props.theme),
        '@media (min-aspect-ratio: 1001/1000)': {
            height: '5.5em',
        },
    }),
    options_flexbox: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        '@media (min-aspect-ratio: 1001/1000)': {
            fontSize: fontSize00184,
            ...tool_flexbox,
        },
        '@media (max-aspect-ratio: 1/1)': {
            marginTop: '-2vh'
        },
    }),
    title: props => ({
        ...tool_title(props.theme),
    }),
});
