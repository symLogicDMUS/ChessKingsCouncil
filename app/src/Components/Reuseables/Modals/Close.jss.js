import {makeStyles} from "@material-ui/core/styles"
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    close: props => ({
        ...props.style,
        cursor: 'pointer',
    }),
    icon: props => ({
        fontSize: 'inherit',
        height: '1.15em',
        width: '1.15em',
        color: themes[props.theme].text
    }),
}, {index: 1});
