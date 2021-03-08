import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../styles/themes.jss";

const checkbox = {
    width: "1em", //was 1.25em
    height: "1em", //was 1.25em
}


/*NOTE: fontSize is a required part of style!*/
export const useStyles = makeStyles({
    form_control_label_root: props => ({
        color: themes[props.theme].text,
        '& .MuiCheckbox-root': {
            color: themes[props.theme].text
        },
        '& .Mui-checked':{
            color: themes[props.theme].text
        },
        ...props.rootStyle,
    }),
    text: props => ({
        ...props.style,
        ...props.textStyle,
        color: themes[props.theme].text,
    }),
    unchecked: props => ({
        ...checkbox,
        ...props.style,
        ...props.checkboxStyle,
        color: themes[props.theme].text,
    }),
    checked: props => ({
        ...checkbox,
        ...props.style,
        ...props.checkboxStyle,
        color: themes[props.theme].text,
    }),
}, {index: 1});