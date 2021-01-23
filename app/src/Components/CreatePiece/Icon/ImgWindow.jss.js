import {fontSize002, fontSize00236} from "../../styles/fontSizes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    img_window: props => ({
        '@media screen and (min-width: 768px)': {
            fontSize: fontSize002,
        },
        '@media screen and (max-width: 767px)': {
            fontSize: fontSize00236,
        },
        width: "9.5em",
        height: "9.5em",
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: '0.2em',
        border: "0.05em solid #2b2b2b",
        backgroundColor: themes[props.theme].fill,
    }),
    img_label: props => ({
        fontSize: props.fontSize,
        display: 'flex',
        direction: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    }),
    icon: (props) => ({
        fontSize: props.fontSize,
        color: themes[props.theme].text,
        padding: 0,
    }),
    text: props => ({
        fontSize: props.fontSize,
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
        marginLeft: '0.1em',
        lineHeight: '0.7em',
    }),
});
