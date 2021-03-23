import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../styles/themes.jss";
import {fontSize002, fontSize0025} from "../../styles/fontSizes.jss";

export const text_field = (fontSize, theme) => ({
    fontSize: fontSize,
    height: '1.15em',
    width: '3em',
    flexGrow: 100,
    color: themes[theme].text,
});

/**
 * @prop width: required, real unit length
 */
export const useStyles = makeStyles({
    search_box: props => ({
        fontSize: fontSize0025,
        margin: '0.5em',
        marginRight: 0,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '0.15em',
        height: '1.25em',
        width: props.width,
        backgroundColor: themes[props.theme].odd_row,
        color: themes[props.theme].text,
        ...props.rootStyle,
    }),
    search_icon: props => ({
        fontSize: fontSize0025,
        color: themes[props.theme].text,
        width: '1.5em',
        height: '1em',
    }),
    text_field: props => ({
        height: '1em',
        width: '3em',
        flexGrow: 100,
        fontSize: fontSize002,
        color: themes[props.theme].text,
        verticalAlign: 'center',
    }),
}, {index: 1});