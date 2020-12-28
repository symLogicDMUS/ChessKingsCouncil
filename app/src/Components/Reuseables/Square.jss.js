import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../styles/themes.jss";
import {mobileScalar} from "./Board.jss";

export const square = (fontSize) => {
    return ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSize,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSize * mobileScalar,
        },
        width: '1em',
        height: '1em',
        zIndex: 'inherit',
        cursor: 'pointer',
    });
};

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