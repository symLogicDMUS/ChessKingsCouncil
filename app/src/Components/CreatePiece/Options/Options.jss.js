import makeStyles from "@material-ui/core/styles/makeStyles";
import {tool, tool_title, tool_flexbox} from "../CreatePiece.jss";
import {fontSize00184,} from "../../styles/fontSizes.jss";
import {boardSizes} from "../../Reuseables/Board.jss";

export const useStyles = makeStyles({
    options_tool: (props) => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
            fontSize: fontSize00184,
            ...tool_flexbox,
        },
    }),
    title: props => ({
        ...tool_title(props.theme),
    }),
});
