import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    icon: props => ({
        color: themes[props.theme].text,
        height: '1.2rem',
        width: '1.2rem',
        marginLeft: '0.5rem',
    }),
    sentence: props => ({
        marginBottom: '1rem',
    }),
}, {index: 1});