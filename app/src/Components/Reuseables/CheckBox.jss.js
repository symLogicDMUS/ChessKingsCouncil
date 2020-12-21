import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../styles/themes.jss";

const checkbox = {
    width: "1.25em",
    height: "1.25em",
}

/*NOTE: fontSize is a required prop!*/
export const useStyles = makeStyles({
    checkbox_root: props => ({
        ...props.rootStyle,
    }),
    text: props =>  ({
        ...props.style,
        color: themes[props.theme].text,
    }),
    unchecked: props => ({
        ...props.style,
        ...checkbox,
        color: themes[props.theme].text
    }),
    checked: props =>  ({
        ...props.style,
        ...checkbox,
    }),
});