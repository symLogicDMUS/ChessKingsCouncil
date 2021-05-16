import {themes} from "../../styles/themes/themes.jss";

export const styles = {
    head: props => ({
        color: themes[props.theme].text,
        backgroundColor: themes[props.theme].even_row,
        border: themes[props.theme].outline,
        outline: themes[props.theme].outline,
    }),
    body: props => ({
        fontSize: 14,
        color: themes[props.theme].text,
        border: themes[props.theme].outline,
        outline: themes[props.theme].outline,
    }),
}