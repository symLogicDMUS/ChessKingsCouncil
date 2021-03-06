import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    square: props => ({
        zIndex: 3,
        position: 'absolute',
        width: props.sqrSize,
        height: props.sqrSize,
        '@media screen and (min-width: 768px)': {
            border: `0.35em solid ${themes[props.theme].sqr_border}`
        },
        '@media screen and (max-width: 767px)': {
            border: `0.2em solid ${themes[props.theme].sqr_border}`
        },
    }),
});