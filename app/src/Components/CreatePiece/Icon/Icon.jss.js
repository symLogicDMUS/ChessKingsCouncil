import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../styles/themes.jss";
import {tool_title} from "../CreatePiece.jss";
import {fontSize0016, fontSize002} from "../../styles/fontSizes.jss";

export const useStyles = makeStyles({
    icon_tool: props => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        '@media screen and (max-device-width: 1040px)': {
            width: '100%',
            height: '100%',
            alignItems: 'flex-start',
        },
        '@media screen and (min-device-width: 1040px)': {
            width: '93%',
            marginLeft: '3.5%',
            alignItems: 'center',
            flexWrap: 'wrap',
        },
    }),
    title: props => ({
        ...tool_title(props.theme),
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
}, {index: 1});