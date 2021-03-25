import {makeStyles} from "@material-ui/core/styles"
import {themes} from "../../styles/themes.jss";
import {fontSize002} from "../../styles/fontSizes.jss";

export const optionButtonSize = 3.5;

export const useStyles = makeStyles({
    icon_button: props => ({
        color: themes[props.theme].button_text,
        minWidth: 0,
        '&:hover': {
            background: 'none'
        },
    }),
    label: props => ({
        display: "flex",
        flexDirection: "column",
        border: 'black',
    }),
    icon: props => ({
        /*desktop*/
        '@media screen and (min-width: 960px)': {
            width: '2.15vw',
            height: '2.15vw',
        },
        color: themes[props.theme].button_text,
    }),
    text: props => ({
        /*desktop*/
        '@media screen and (min-width: 960px)': {
            fontSize: '1vw',
        },
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].button_text,
    }),
}, {index: 1});