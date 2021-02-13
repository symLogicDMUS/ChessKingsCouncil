import {modal} from "../../helpers/modal.jss";
import {themes} from "../../styles/themes.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {fontSize002, fontSize0023} from "../../styles/fontSizes.jss";

export const button = (theme) => ({
    '@media (min-aspect-ratio: 1001/1000)': {
        fontSize: fontSize002
    },
    '@media (max-aspect-ratio: 1/1)': {
        fontSize: fontSize0023
    },
    color: themes[theme].text,
});

export const useStyles = makeStyles({
    modal: {
        ...modal
    },
    dialog_window: props => ({
        '@media (min-aspect-ratio: 1001/1000)': {
            width: '27%',
            height: '27%',
        },
        '@media (max-aspect-ratio: 1/1)': {
            width: '100%',
            height: '40%',
        },
        backgroundColor: themes[props.theme].modal_fill,
    }),
    title: props => ({
        fontSize: props.fontSize,
        color: themes[props.theme].text,
    }),
    dialog_actions: props => ({
        '@media (min-aspect-ratio: 1001/1000)': {
            fontSize: fontSize002,
            width: '22em',
            marginLeft: '1.5em',
        },
        '@media (max-aspect-ratio: 1/1)': {
            fontSize: fontSize0023,
            marginRight: '3.5%',
            width: '97.5%',
        },
    }),
});