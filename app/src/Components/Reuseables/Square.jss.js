import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../styles/themes.jss";
import {availWidth} from "../helpers/windowMeasurments";

export const square = (fontSize) => ({
    zIndex: 'inherit',
    fontSize: fontSize,
    width: '1em',
    height: '1em',
    cursor: 'pointer',
    '@media screen and (max-width: 767px)': {
        width: availWidth() * 0.95 * 0.125,
        height: availWidth() * 0.95 * 0.125,
    },
});

export const useStyles = makeStyles({
    dark_normal: props => ({
        ...props.style,
        ...square(props.fontSize),
        backgroundColor: themes[props.theme].dark_normal,
    }),
    light_normal: props => ({
        ...props.style,
        ...square(props.fontSize),
        backgroundColor: themes[props.theme].light_normal,
    }),
    light_in_range: props => ({
        ...props.style,
        ...square(props.fontSize),
        backgroundColor: themes[props.theme].light_in_range,
    }),
    dark_in_range: props => ({
        ...props.style,
        ...square(props.fontSize),
        backgroundColor: themes[props.theme].dark_in_range,
    }),
    offset: props => ({
        ...props.style,
        ...square(props.fontSize),
        backgroundColor: themes[props.theme].offset,
    }),
    span: props => ({
        ...props.style,
        ...square(props.fontSize),
        backgroundColor: themes[props.theme].span,
    }),
    transparent: props => ({
        ...props.style,
        ...square(props.fontSize),
    }),
});