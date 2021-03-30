import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    form_control_label_root: props => ({
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