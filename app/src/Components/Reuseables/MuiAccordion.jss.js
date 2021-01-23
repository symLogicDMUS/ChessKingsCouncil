import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../styles/themes.jss";

export const useStyles = makeStyles((theme) => ({
    root: props => ({
        width: '100%',
        ...props.rootStyle,
        fontSize: props.fontSize,
        backgroundColor: themes[props.theme].fill,
        borderTop: `0.025em solid ${themes[props.theme].outline}`
    }),
    heading: props => ({
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    }),
    accordion_tab: props => ({
        fontSize: props.fontSize,
        color: themes[props.theme].text,
        backgroundColor: themes[props.theme].fill,
        border: themes[props.theme].outline,
    }),
    accordion_body: props => ({
        fontSize: props.fontSize,
        height: '3.5em',
        marginTop: '-0.25em',
        backgroundColor: themes[props.theme].fill,
        ...props.style, // keep as last thing in object
    }),
    expand_icon: props => ({
       color: themes[props.theme].text,
    }),
}));
