import {themes} from "../styles/themes.jss";

const list_item = (fontSize, theme) => ({
    color: themes[theme].text,
    fontSize: fontSize*0.75,
    height: '2.06em',
    paddingTop: '0.5em',
    paddingLeft: '0.5em',
    width: '100%',
    textAlign: "left",
})

export const styles = {

    /**NOTE: width is a required prop!*/
    scroll_table: props => ({
        ...props.style,
        fontSize: props.fontSize,
        width: props.width,
        display: 'flex',
        flexDirection: 'column',
        border: props.isBorder ? '1px solid #2b2b2b' : 'none'
    }),
    /*if applicable*/
    title: props => ({
        width: props.width,
    }),
    list_item_even : props => ({
        ...list_item(props.fontSize, props.theme),
        backgroundColor: themes[props.theme].even_row,
    }),
    list_item_odd : props => ({
        ...list_item(props.fontSize, props.theme),
        backgroundColor: themes[props.theme].odd_row,
    }),
    arrow_button: props => ({
        fontSize: props.fontSize*0.75,
        width: '100%',
        height: '0.77em',
        border: 'none',
        color: themes[props.theme].text,
        background: themes[props.theme].fill,
    }),

};