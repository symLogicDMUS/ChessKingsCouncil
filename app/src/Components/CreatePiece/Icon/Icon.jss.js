import makeStyles from "@material-ui/core/styles/makeStyles";
import {drawerWidth} from "../../Reuseables/PermanentDrawer.jss";
import {themes} from "../../styles/themes.jss";
import {tool, tool_title, tool_flexbox} from "../CreatePiece.jss";
import {fontSize0016, fontSize002} from "../../styles/fontSizes.jss";

export const useStyles = makeStyles({
    icon_tool: props => ({
        ...tool(props.theme),
        justifyContent: 'space-between',
        marginTop: '-2.5vh',
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
        fontSize: fontSize002,
        justifyContent: 'space-between',
        height: '5em',
    }),
    button: (props) => ({
        fontSize: fontSize0016,
        background: themes[props.theme].button_fill,
        color: themes[props.theme].button_text,
        width: '7.5em',
        height: '2.5em',
    }),
});