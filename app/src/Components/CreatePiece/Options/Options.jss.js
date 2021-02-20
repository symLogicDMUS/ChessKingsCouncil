import makeStyles from "@material-ui/core/styles/makeStyles";
import {tool, tool_title, tool_flexbox} from "../CreatePiece.jss";
import {fontSize00184,} from "../../styles/fontSizes.jss";
import {boardSizes} from "../../Reuseables/Board.jss";

export const useStyles = makeStyles({
    options_tool: (props) => ({
        ...tool(props.theme),
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
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
        /*shortest phones*/
        "@media screen and (max-device-width: 767px) and (min-aspect-ratio: 360/515) and (max-aspect-ratio: 1/1)":{
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '-2vh',
            height: boardSizes.short * 0.85,
        },
        '@media screen and (min-device-width: 992px) and (min-aspect-ratio: 1/1)': {
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
