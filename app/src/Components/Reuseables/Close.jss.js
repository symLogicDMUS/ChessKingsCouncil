import {makeStyles} from "@material-ui/core/styles"
import {themes} from "../styles/themes.jss";

export const useStyles = makeStyles({
    close: props => ({
        ...props.style,
    }),
    icon: props => ({
        color: themes[props.theme].text
    }),
});
