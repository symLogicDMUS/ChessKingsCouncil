import makeStyles from "@material-ui/core/styles/makeStyles";
import {tool, tool_flexbox, tool_title} from "../CreatePiece.jss";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    location_tool: (props) => ({
        '@media screen and (max-device-width: 1040px)': {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'no-wrap',
        },
        '@media screen and (min-device-width: 1040px)': {
            backgroundColor: themes[props.theme].fill,
            width: '100%',
            marginBottom: '3vh',
        },
    }),
    title: props => ({
        ...tool_title(props.theme),
    }),
    box: props => ({
        fontSize: props.fontSize,
        '@media screen and (min-device-width: 1040px)': {
            ...tool_flexbox,
        },
        '@media screen and (max-device-width: 1040px)': {
            width: '100em',
            height: '5em',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
        },
    }),
}, {index: 1});