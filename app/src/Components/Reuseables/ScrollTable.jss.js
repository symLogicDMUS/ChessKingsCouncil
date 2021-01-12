import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../styles/themes.jss";

const list_item = (width, theme) => ({
    color: themes[theme].text,
    fontSize: '1em',
    height: '2em',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'no-wrap',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
});

export const useStyles = makeStyles({
    /**NOTE: width is a required prop!*/
    scroll_table: props => ({
        ...props.style,
        fontSize: props.style.fontSize,
        width: props.width,
        display: 'flex',
        flexDirection: 'column',
    }),
    list_items: props => ({
        width: props.style.width,
        outline: props.style.isOutline ? `0.05em solid ${themes[props.theme].outline}` : 'none'
    }),
    list_item_even : props => ({
        ...list_item(props.style.width, props.theme, props.style.isOutline),
        backgroundColor: themes[props.theme].even_row,
    }),
    list_item_odd : props => ({
        ...list_item(props.style.width, props.theme, props.style.isOutline),
        backgroundColor: themes[props.theme].odd_row,
    }),
    arrow_button: props => ({
        fontSize: '1em',
        width: props.style.width,
        height: '0.77em',
        border: 'none',
        color: themes[props.theme].text,
        background: themes[props.theme].fill,
        outline: props.style.isOutline ? `0.05em solid ${themes[props.theme].outline}` : 'none'
    }),
    /*child of list items*/
    text: props => ({
        fontSize: '1em',
        maxWidth: '97.5%',
        marginLeft: '2.5%',
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
    }),
    sub_header: props => ({
        ...list_item(props.style.width, props.theme),
        backgroundColor: themes[props.theme].even_row,
    }),
});