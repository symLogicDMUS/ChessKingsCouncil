import makeStyles from "@material-ui/core/styles/makeStyles";
import {fontSize0025, fontSize00301} from "../../styles/fontSizes.jss";
import {themes} from "../../styles/themes.jss";

export const fontSizes = {
    desktop: fontSize00301,
    mobile: fontSize0025,
}

export const square = (fontSize) => ({
        fontSize: fontSize,
        zIndex: 'inherit',
        width: '1em',
        height: '1em',
        margin: 0,
        cursor: 'pointer',
});

export const useStyles = makeStyles({
    dark_normal: props => ({
        ...square(props.fontSize),
        backgroundColor: themes[props.theme].dark_normal,
    }),
    light_normal: props => ({
        ...square(props.fontSize),
        backgroundColor: themes[props.theme].light_normal,
    }),
    light_in_range: props => ({
        ...square(props.fontSize),
        backgroundColor: themes[props.theme].light_in_range,
    }),
    dark_in_range: props => ({
        ...square(props.fontSize),
        background: themes[props.theme].dark_in_range,
    }),
    offset: props => ({
        ...square(props.fontSize),
        backgroundColor: themes[props.theme].offset,
    }),
    span: props => ({
        ...square(props.fontSize),
        backgroundColor: themes[props.theme].span,
    }),
    transparent: props => ({
        ...square(props.fontSize),
    }),
    ai_start: props => ({
        ...square(props.fontSize),
        backgroundImage: 'url("/Images/sqr/sqr-outline-bebeff.svg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }),
    ai_dest: props => ({
        ...square(props.fontSize),
        backgroundImage: 'url("/Images/sqr/sqr-highlight-bebeff.svg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }),
    ai_none: props => ({
        ...square(props.fontSize),
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }),
}, {index: 1});
