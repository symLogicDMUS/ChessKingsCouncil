import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";

export const useStyles = makeStyles({
    root: props => ({
        color: themes[props.theme].text,
        '& .MuiCheckbox-root': {
            color: themes[props.theme].text
        },
        '& .Mui-checked':{
            color: themes[props.theme].text
        },
    }),
    text: props => ({
        color: themes[props.theme].text,
    }),
    checkbox: props => ({
        color: themes[props.theme].text,
    }),
}, {index: 1});