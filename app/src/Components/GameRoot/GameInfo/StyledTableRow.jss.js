import {themes} from "../../styles/themes/themes.jss";

export const styles = {
    root: props => ({
        '&:nth-of-type(odd)': {
            backgroundColor: themes[props.theme].odd_row,
        },
        '&:nth-of-type(even)': {
            backgroundColor: themes[props.theme].even_row,
        },
        color: themes[props.theme].text,
        border: themes[props.theme].outline,
        outline: themes[props.theme].outline,
    }),
}