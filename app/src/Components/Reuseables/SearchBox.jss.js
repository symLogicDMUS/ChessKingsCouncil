import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../styles/themes.jss";

export const text_field = (fontSize, theme) => ({
    fontSize: fontSize,
    height: '1.15em',
    width: '3em',
    flexGrow: 100,
    color: themes[theme].text,
});

/**
 * @prop width: required, real unit length
 */
export const useStyles = makeStyles({
    search_box: props => ({
        fontSize: props.fontSize,
        width: '20em',
        height: '1.25em',
        margin: '0.5em',
        marginRight: 0,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '0.15em',
        color: themes[props.theme].text,
        backgroundColor: themes[props.theme].odd_row,
    }),
    search_icon: props => ({
        fontSize: props.fontSize,
        color: themes[props.theme].text,
        width: '1.5em',
        height: '1em',
    }),
    text_field: props => ({
        height: '1em',
        width: '3em',
        flexGrow: 100,
        fontSize: props.fontSize*0.8,
        color: themes[props.theme].text,
        verticalAlign: 'center',
    }),
});