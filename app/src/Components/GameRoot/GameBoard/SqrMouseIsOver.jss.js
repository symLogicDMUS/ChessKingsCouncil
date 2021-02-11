import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    square: props => ({
        zIndex: 3,
        position: 'absolute',
        width: props.sqrSize,
        height: props.sqrSize,
        '@media (min-aspect-ratio: 16/9)': {
            border: `0.35em solid ${themes[props.theme].sqr_border}`
        },
        '@media (max-aspect-ratio: 1/1)': {
            border: `0.2em solid ${themes[props.theme].sqr_border}`
        },
    }),
});