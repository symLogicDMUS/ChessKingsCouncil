import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    square: props => ({
        zIndex: 3,
        position: 'absolute',
        width: props.sqrSize,
        height: props.sqrSize,
        '@media screen and (max-device-width: 1040px)': {
            border: `0.2em solid ${themes[props.theme].sqr_border}`
        },
        '@media screen and (min-device-width: 1040px)': {
            border: `0.35em solid ${themes[props.theme].sqr_border}`
        },
    }),
}, {index: 1});