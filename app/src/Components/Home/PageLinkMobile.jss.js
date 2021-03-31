import {themes} from "../styles/themes.jss";
import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    page_link: props => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        cursor: 'pointer',
        width: '85vw',
        maxHeight: '10vw',
        border: '1px dashed pink',
    }),
    page_icon: props => ({
        height: '100%',
        border: '1px dashed blue',
    }),
    page_name: props => ({
        height: '100%',
        border: '1px dashed green',
    }),
    normal_color: props => ({
        color: themes[props.theme].page_link,
    }),
    hover_color: props => ({
        color: themes[props.theme].page_link_hover,
    }),
}, {index: 1});