import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../styles/themes.jss";
import {rfToGridLoc} from "../helpers/crdCnvrt";

export const square = (rf, fontSize, type, sqrSize) => {

    if (type === 'dnd') {
        return {
            width: sqrSize,
            height: sqrSize,
            ...rfToGridLoc(rf),
            cursor: 'pointer',
            lineHeight: 0,
            border: 'none',
            outline: 'none'
        }
    }

    return ({
        fontSize: fontSize,
        zIndex: 'inherit',
        ...rfToGridLoc(rf),
        width: '1em',
        height: '1em',
        margin: 0,
        cursor: 'pointer',
    });
};

/**
 *
 * @props:
 * @prop type: string. value is 'dnd' or 'normal' indicates if came from Component inside a drag drop context or not.
 * @prop style: any additional add-ons. depends on the context.
 * @prop sqrSize: Dnd Context only.
 */
export const useStyles = makeStyles({
    dark_normal: props => ({
        ...square(props.rf, props.fontSize, props.type, props.sqrSize),
        backgroundColor: themes[props.theme].dark_normal,
        ...props.style,
    }),
    light_normal: props => ({
        ...square(props.rf, props.fontSize, props.type, props.sqrSize),
        backgroundColor: themes[props.theme].light_normal,
        ...props.style,
    }),
    light_in_range: props => ({
        ...square(props.rf, props.fontSize, props.type, props.sqrSize),
        backgroundColor: themes[props.theme].light_in_range,
        ...props.style,
    }),
    dark_in_range: props => ({
        ...square(props.rf, props.fontSize, props.type, props.sqrSize),
        background: themes[props.theme].dark_in_range,
        ...props.style,
    }),
    offset: props => ({
        ...square(props.rf, props.fontSize, props.type, props.sqrSize),
        backgroundColor: themes[props.theme].offset,
        ...props.style,
    }),
    span: props => ({
        ...square(props.rf, props.fontSize, props.type, props.sqrSize),
        backgroundColor: themes[props.theme].span,
        ...props.style,
    }),
    span_alt: props => ({
        ...square(props.rf, props.fontSize, props.type, props.sqrSize),
        backgroundColor: themes[props.theme].span_alt,
        ...props.style,
    }),
    profile_wb_dark: props => ({
        ...square(props.rf, props.fontSize, props.type, props.sqrSize),
        backgroundColor: themes[props.theme].odd_row,
        ...props.style,
    }),
    profile_wb_light: props => ({
        ...square(props.rf, props.fontSize, props.type, props.sqrSize),
        backgroundColor: themes[props.theme].even_row,
        ...props.style,
    }),
    transparent: props => ({
        ...square(props.rf, props.fontSize, props.type, props.sqrSize),
        ...props.style,
    }),
    ai_start: props => ({
        ...square(props.rf, props.fontSize, props.type, props.sqrSize),
        backgroundImage: 'url("/Images/sqr/sqr-outline-bebeff.svg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }),
    ai_dest: props => ({
        ...square(props.rf, props.fontSize, props.type, props.sqrSize),
        backgroundImage: 'url("/Images/sqr/sqr-highlight-bebeff.svg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }),
    ai_none: props => ({
        ...square(props.rf, props.fontSize, props.type, props.sqrSize),
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }),
}, {index: 1});