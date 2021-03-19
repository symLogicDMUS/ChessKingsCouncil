import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../styles/themes.jss";
import {rfToGridLoc} from "../../helpers/crdCnvrt";


export const useStyles = makeStyles({
    square: props => ({
        width: props.sqrSize,
        height: props.sqrSize,
        ...rfToGridLoc(props.rf),
        cursor: 'pointer',
        lineHeight: 0,
        border: 'none',
        outline: 'none',
    }),
    em_square: props => ({
        fontSize: props.fontSize,
        zIndex: 'inherit',
        ...rfToGridLoc(props.rf),
        width: '1em',
        height: '1em',
        margin: 0,
        cursor: 'pointer',
    }),
    dark_normal: props => ({
        backgroundColor: themes[props.theme].dark_normal,
    }),
    light_normal: props => ({
        backgroundColor: themes[props.theme].light_normal,
    }),
    light_in_range: props => ({
        backgroundColor: themes[props.theme].light_in_range,
    }),
    dark_in_range: props => ({
        background: themes[props.theme].dark_in_range,
    }),
    offset: props => ({
        backgroundColor: themes[props.theme].offset,
    }),
    span: props => ({
        backgroundColor: themes[props.theme].span,
    }),
    span_alt: props => ({
        backgroundColor: themes[props.theme].span_alt,
    }),
    profile_wb_dark: props => ({
        backgroundColor: themes[props.theme].odd_row,
    }),
    profile_wb_light: props => ({
        backgroundColor: themes[props.theme].even_row,
        ...props.style,
    }),
    transparent: props => ({
        opacity: 0,
    }),
    ai_start: props => ({
        backgroundImage: 'url("/Images/sqr/sqr-outline-bebeff.svg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }),
    ai_dest: props => ({
        backgroundImage: 'url("/Images/sqr/sqr-highlight-bebeff.svg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }),
    ai_none: props => ({
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }),
}, {index: 1});