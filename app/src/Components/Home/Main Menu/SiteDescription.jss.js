import {lighten, makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";

export const useStyles = makeStyles({
    paragraph: props => ({
        color: themes[props.theme].page_link,
    }),
    text_link: props => ({
       color: themes[props.theme].text_link,
    }),
    inline_button: props => ({
        padding: 0,
        textTransform: 'none',
        textDecoration: 'underline',
        color: themes[props.theme].text_link,
        '&:hover':{
            textDecoration: 'underline',
            color: themes[props.theme].text_link,
        },
    }),
    reset_theme: props => ({
       marginLeft: '1rem',
    }),
}, {index: 1});