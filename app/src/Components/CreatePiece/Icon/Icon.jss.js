import makeStyles from "@material-ui/core/styles/makeStyles";
import {drawerWidth} from "../../Reuseables/PermanentDrawer.jss";
import {themes} from "../../styles/themes.jss";
import {tool, tool_title, tool_flexbox} from "../CreatePiece.jss";
import {fontSize0016, fontSize002} from "../../styles/fontSizes.jss";

export const useStyles = makeStyles({
    icon_tool: props => ({
        ...tool(props.theme),
        '@media (max-aspect-ratio: 1/1)': {
            width: '97.5%'
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            justifyContent: 'space-between',
        },
        marginTop: '-2.5vh',
    }),
    title: props => ({
        ...tool_title(props.theme),
    }),
    img_windows_container: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        '@media (max-aspect-ratio: 834/1194)': {
            width: '100%',
            height: '100%',
            alignItems: 'flex-start',
            justifyContent: 'center',
        },
        '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)': {
            width: '100%',
            height: '100%',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
        },
        '@media (min-aspect-ratio: 1001/1000)': {
            width: '93%',
            marginLeft: '3.5%',
            alignItems: 'center',
            justifyContent: 'space-between',
        },

    }),
    separator: props => ({
        '@media (max-aspect-ratio: 834/1194)': {
            width: window.innerWidth*0.065,
        },
        '@media (min-aspect-ratio: 834/1194) and (max-aspect-ratio: 1/1)': {
            width: window.innerWidth*0.01,
        },
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