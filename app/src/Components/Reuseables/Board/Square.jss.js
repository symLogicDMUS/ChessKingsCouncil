import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../styles/themes/themes.jss";
import {rfToGridLoc} from "../../helpers/crdCnvrt";
import {lighten} from "@material-ui/core/styles";


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
    dark_normal: props => ({
        backgroundColor: themes[props.theme].dark_normal,
    }),
    light_normal: props => ({
        backgroundColor: themes[props.theme].light_normal,
    }),
    dark_with_hover: props => ({
        backgroundColor: themes[props.theme].dark_normal,
        '&:hover':{
            backgroundColor: themes[props.theme].sqr_hover,
        }
    }),
    light_with_hover: props => ({
        backgroundColor: themes[props.theme].light_normal,
        '&:hover':{
            backgroundColor: themes[props.theme].sqr_hover,
        }
    }),
    dark_in_range: props => ({
        background: themes[props.theme].dark_in_range,
    }),
    light_in_range: props => ({
        backgroundColor: themes[props.theme].light_in_range,
    }),
    offset: props => ({
        backgroundColor: themes[props.theme].offset,
        '&:hover':{
            backgroundColor: lighten(themes[props.theme].offset, 0.2),
        },
    }),
    span: props => ({
        backgroundColor: themes[props.theme].span,
        '&:hover':{
            backgroundColor: lighten(themes[props.theme].span, 0.2),
        },
    }),
    span_alt: props => ({
        backgroundColor: themes[props.theme].span_alt,
    }),
    profile_wb_dark: props => ({
        backgroundColor: themes[props.theme].odd_row,
    }),
    profile_wb_light: props => ({
        backgroundColor: themes[props.theme].even_row,
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
    piece_loc_highlight: props => ({
        backgroundColor: themes[props.theme].dark_in_range,
    }),
}, {index: 1});