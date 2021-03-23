import {makeStyles} from "@material-ui/core/styles";
import {fontSize0025, fontSize00301, fontSize0040} from "../../styles/fontSizes.jss";
import {themes} from "../../styles/themes.jss";

export const fontSizes = {
    desktop: fontSize0040,
    mobile: fontSize00301,
}
export const close_style = () => ({
    fontSize: fontSize0025,
    height: '1em',
    width: '1em',
});
export const useStyles = makeStyles({
    top: props => ({
        zIndex: 'inherit',
        fontSize: fontSize0025,
        width: '100%',
        height: '1.5em',
        display: 'flex',
        flexDirection: 'row-reverse',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'flex-end',
        border: '1px dashed #b1faae',
    }),
    title: props => ({
        zIndex: 'inherit',
        fontSize: fontSize0025,
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
        marginRight: '2em',
        flexGrow: 5,
    }),

}, {index: 1});