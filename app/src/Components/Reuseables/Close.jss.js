import {makeStyles} from "@material-ui/core/styles"
import {themes} from "../styles/themes.jss";

export const useStyles = makeStyles({
    close: props => ({
        ...props.style,
        cursor: 'pointer',
    }),
    icon: props => ({
        color: themes[props.theme].text
    }),
});
