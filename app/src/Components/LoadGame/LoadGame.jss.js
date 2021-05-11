import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../styles/themes/themes.jss";
import {modal} from "../helpers/modal.jss";

export const useStyles = makeStyles({
    modal: props => ({
        ...modal,
        zIndex: 1,
    }),
    title: props => ({
        marginRight: 'auto',
    }),
    see_more_icon: props => ({
        color: themes[props.theme].text,
        fontSize: '1.25rem',
    }),
    img_grid_root: props => ({
        position: 'absolute',
        left: '50%',
        top: '50%',
        marginLeft: '-45vw',
        marginTop: '-37.665vh',
    }),
    search_box: props => ({
        '@media screen and (max-width: 960px)': {
            width: '16rem',
            marginLeft: 'auto',
        },
        '@media screen and (min-width: 960px)': {
            alignSelf: 'flex-end',
            marginRight: '2.25vw',
            transform: 'translate(0, -1em)'
        },
    }),
    mui_grid_padding: props => ({
       paddingTop: '3vh',
    }),
}, {index: 1});