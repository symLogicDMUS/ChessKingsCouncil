import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../styles/themes.jss";
import {navBarWidth} from "./NavBar.jss";

export const navBarButtonWidth = navBarWidth * 0.99;
const margin = '0.4em'

export const text = (fontSize) => ({
    fontSize: fontSize,
    marginRight: margin,
    marginTop: '0.15em',
});
export const icon = (fontSize) => ({
    fontSize: fontSize*1.1,
    marginRight: margin,
});

export const useStyles = makeStyles({
    nav_bar_button: props => ({
        style: props.style,
        display: 'flex',
        flexGrow: 3,
        borderRadius: 0,
        background: themes[props.theme].fill,
    }),
    box: props => ({
        ...props.style,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexGrow: 4,
    }),
    text: props => ({
        ...text(props.style.fontSize),
        color: themes[props.theme].text_alt2,
    }),
    text_hover: props => ({
        ...text(props.style.fontSize),
        color: themes[props.theme].text,
    }),
    icon: props => ({
        ...icon(props.style.fontSize),
        color: themes[props.theme].text_alt2,
    }),
    icon_hover: props => ({
        ...icon(props.style.fontSize),
        color: themes[props.theme].text,
    }),
});
