import {themes} from "../styles/themes/themes.jss";
import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    page_link: props => ({
        width: '7.8vw',
        height: '23.6vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }),
    page_name: props => ({
        width: '100%',
    }),
    icon: props => ({
        width: '7.8vw',
        height: '7.8vw',
    }),
    normal_color: props => ({
        color: themes[props.theme].page_link,
    }),
    hover_color: props => ({
       color: themes[props.theme].page_link_hover,
    }),
}, {index: 1});