import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../styles/themes.jss";

const checkbox = {
    width: "1.5em",
    height: "1.5em",
    transform: "translate(0, -0.12em)",
}

/*NOTE: fontSize is a required prop!*/
export const useStyles = makeStyles({
    text: props =>  ({
        ...props.style,
        display: "inline-block",
        lineHeight: 1,
        color: themes[props.theme].text
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