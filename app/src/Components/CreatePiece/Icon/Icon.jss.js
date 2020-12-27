import makeStyles from "@material-ui/core/styles/makeStyles";
import {drawerWidth} from "../../Reuseables/PermanentDrawer.jss";
import {themes} from "../../styles/themes.jss";
import {tool, tool_title, tool_flexbox} from "../CreatePiece.jss";

export const useStyles = makeStyles({
    icon_tool: props => ({
        ...tool(props.fontSize, props.theme),
        justifyContent: 'space-between',
    }),
    title: props => ({
        ...tool_title(props.theme),
    }),
    flexbox: props => ({
        ...tool_flexbox,
    }),
    buttons_and_img: props => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '60%'
    }),
    button_group: (props) => ({
        display: 'flex',
        flexDirection: 'column',
        fontSize: props.fontSize,
        justifyContent: 'space-between',
        height: '5em',
    }),
    button: (props) => ({
        fontSize: props.fontSize * 0.8,
        background: themes[props.theme].button_fill,
        color: themes[props.theme].button_text,
        width: '7.5em',
        height: '2.5em',
    }),
});