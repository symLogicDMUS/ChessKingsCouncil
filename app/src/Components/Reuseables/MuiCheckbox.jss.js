import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../styles/themes.jss";

const checkbox = {
    width: "1.25em",
    height: "1.25em",
}

/*NOTE: fontSize is a required part of style!*/
export const useStyles = makeStyles({
    checkbox_root: props => ({
        ...props.rootStyle,
    }),
    circle_container: props => ({
        ...props.circleStyle,
        color: themes[props.theme].text,
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