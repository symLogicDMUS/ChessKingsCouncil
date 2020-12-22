import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../styles/themes.jss";

const margin = '0.6em'

export const text = (fontSize) => ({
    fontSize: fontSize,
    marginRight: margin,
    marginTop: '0.15em',
});
export const icon = (fontSize) => ({
    fontSize: fontSize*1.2,
    marginRight: margin,
});

export const useStyles = makeStyles({
    nav_bar_button: props => ({
        fontSize: props.fontSize,
        width: props.width,
        height: props.parentFlex === 'row' ? '2.25em' : '3.5em',
        borderRadius: 0,
        display: 'flex',
        justifyContent: props.parentFlex === 'column' ?  'flex-start': 'center',
        background: themes[props.theme].fill,
    }),
    box: props => ({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "flex-start",
        flexGrow: 4,
    }),
    text: props => ({
        ...text(props.fontSize),
        color: themes[props.theme].text_alt2,
    }),
    text_hover: props => ({
        ...text(props.fontSize),
        color: themes[props.theme].text,
    }),
    icon: props => ({
        ...icon(props.fontSize),
        color: themes[props.theme].text_alt2,
    }),
    icon_hover: props => ({
        ...icon(props.fontSize),
        color: themes[props.theme].text,
    }),
});