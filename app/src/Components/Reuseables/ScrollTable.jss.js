import {themes} from "../styles/themes.jss";

const list_item = (fontSize, width, theme) => ({
    color: themes[theme].text,
    fontSize: fontSize*0.75,
    height: '2.06em',
    width: width,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'no-wrap',
    alignItems: 'flex-end',
    justifyContent: 'flex-start'
});

export const styles = {

    /**NOTE: width is a required prop!*/
    scroll_table: props => ({
        ...props.style,
        fontSize: props.style.fontSize,
        width: props.width,
        display: 'flex',
        flexDirection: 'column',
        border: props.isBorder ? '1px solid #2b2b2b' : 'none'
    }),
    /*if applicable*/
    title: props => ({
        fontSize: props.style.fontSize,
        width: props.style.width,
    }),
    list_item_even : props => ({
        ...list_item(props.style.fontSize, props.style.width, props.theme),
        backgroundColor: themes[props.theme].even_row,
    }),
    list_item_odd : props => ({
        ...list_item(props.style.fontSize, props.style.width, props.theme),
        backgroundColor: themes[props.theme].odd_row,
    }),
    arrow_button: props => ({
        fontSize: props.style.fontSize*0.75,
        width: props.style.width,
        height: '0.77em',
        border: 'none',
        color: themes[props.theme].text,
        background: themes[props.theme].fill,
    }),
    /*child of list items*/
    text: props => ({
        fontSize: props.style.fontSize*0.8,
        maxWidth: '97.5%',
        marginLeft: '2.5%',
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
    }),
};