import { themes } from "../../styles/themes/themes.jss";

export const styles = {
    head: (props) => ({
        color: themes[props.theme].text,
        backgroundColor: themes[props.theme].fill2,
        border: themes[props.theme].outline,
        outline: themes[props.theme].outline,
    }),
    body: (props) => ({
        fontSize: 14,
        color: themes[props.theme].text,
        border: themes[props.theme].outline,
        outline: themes[props.theme].outline,
        backgroundColor: themes[props.theme].fill,
    }),
};
