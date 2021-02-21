import makeStyles from "@material-ui/core/styles/makeStyles";
import { themes } from "../styles/themes.jss";
import {viewHeight} from "../helpers/windowMeasurments";

export const root = (theme, style) => ({
    "& .MuiInputLabel-root": {
        color: themes[theme].outline,
        ...(style ? (style.root ? (style.root.normal ? style.root.normal : null) : null ) : null),
    },
    "&:hover .MuiInputLabel-root": {
        color: themes[theme].outline,
        ...(style ? (style.root ? (style.root.hover ? style.root.hover : null) : null ) : null),
    },
    "& .MuiInputLabel-root.Mui-focused": {
        color: themes[theme].outline_label,
        ...(style ? (style.root ? (style.root.focused ? style.root.focused : null) : null ) : null),
    },
});

export const outline = (theme, style) => ({
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: themes[theme].outline,
        ...(style ? (style.outline ? (style.outline.normal ? style.outline.normal : null) : null ) : null),
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: themes[theme].outline,
        ...(style ? (style.outline ? (style.outline.hover ? style.outline.hover : null) : null ) : null),
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        color: themes[theme].outline_label,
        ...(style ? (style.outline ? (style.outline.focused ? style.outline.focused : null) : null ) : null),
    },
});

export const text = (theme, style) => ({
    "& .MuiOutlinedInput-root .MuiOutlinedInput-input": {
        color: themes[theme].outline_label,
        ...(style ? (style.text ? (style.text.normal ? style.text.normal : null) : null ) : null),
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-input": {
        color: themes[theme].outline_label,
        ...(style ? (style.text ? (style.text.hover ? style.text.hover : null) : null ) : null),
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
        color: themes[theme].outline_label,
        ...(style ? (style.text ? (style.text.focused ? style.text.focused : null) : null ) : null),
    },
});

export const useStyles = makeStyles({
    input: (props) => ({
        ...props.genStyle,
        ...root(props.theme, props.style),
        ...outline(props.theme, props.style),
        ...text(props.theme, props.style),
        ...props.styleOverride,
    }),
});
