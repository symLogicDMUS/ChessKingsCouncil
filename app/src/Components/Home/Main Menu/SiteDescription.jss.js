import {lighten, makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";

/* style for motion.svg */
export const initial = (theme) => ({
    fill: themes[theme].site_description_text
})

export const useStyles = makeStyles({
    app_title: props => ({
        width: '100%',
        height: 'auto',
    }),
    paragraph: props => ({
        color: themes[props.theme].site_description_text,
        backgroundColor: themes[props.theme].site_description_backdrop,
        padding: '1rem',
        borderRadius: 6,
    }),
    text_link: props => ({
       color: themes[props.theme].site_description_text,
    }),
    inline_button: props => ({
        padding: 0,
        textTransform: 'none',
        textDecoration: 'underline',
        color: themes[props.theme].site_description_text,
        '&:hover':{
            textDecoration: 'underline',
            color: themes[props.theme].site_description_text,
        },
    }),
    reset_theme: props => ({
       marginLeft: '1rem',
    }),
}, {index: 1});