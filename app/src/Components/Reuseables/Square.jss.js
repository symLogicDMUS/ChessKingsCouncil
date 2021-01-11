import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../styles/themes.jss";
import {mobileScalar, sqrSize} from "./Board.jss";

export const square = (fontSize, type) => {

    if (type === 'dnd') {
        return {
            width: sqrSize,
            height: sqrSize,
            cursor: 'pointer',
        }
    }

    return ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSize,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSize * mobileScalar,
        },
        zIndex: 'inherit',
        width: '1em',
        height: '1em',
        cursor: 'pointer',
    });
};

/**
 *
 * @parameters:
 * @param type: string. value is 'dnd' or 'normal' indicates if came from Component inside a drag drop context or not.
 * @param style: any additional add-ons. depends on the context.
 */
export const useStyles = makeStyles({
    dark_normal: props => ({
        ...props.style,
        ...square(props.fontSize, props.type),
        backgroundColor: themes[props.theme].dark_normal,
    }),
    light_normal: props => ({
        ...props.style,
        ...square(props.fontSize, props.type),
        backgroundColor: themes[props.theme].light_normal,
    }),
    light_in_range: props => ({
        ...props.style,
        ...square(props.fontSize, props.type),
        backgroundColor: themes[props.theme].light_in_range,
    }),
    dark_in_range: props => ({
        ...props.style,
        ...square(props.fontSize, props.type),
        backgroundColor: themes[props.theme].dark_in_range,
    }),
    offset: props => ({
        ...props.style,
        ...square(props.fontSize, props.type),
        backgroundColor: themes[props.theme].offset,
    }),
    span: props => ({
        ...props.style,
        ...square(props.fontSize, props.type),
        backgroundColor: themes[props.theme].span,
    }),
    transparent: props => ({
        ...props.style,
        ...square(props.fontSize, props.type),
    }),
    ai_start: props =>  ({
        ...square(props.fontSize, props.type),
        backgroundImage: 'url("/Images/sqr/sqr-outline-fdfd35.svg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }),
    ai_dest: props => ({
        ...square(props.fontSize, props.type),
        backgroundImage: 'url("/Images/sqr/sqr-highlight-fdfd35.svg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }),
    ai_none: props => ({
        ...square(props.fontSize, props.type),
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    })
});