import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../styles/themes/themes.jss";

export const useStyles = makeStyles((theme) => ({
    main_menu_body: props => ({
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }),
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    board_pattern_area: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    }),
    row1: props => ({
        marginBottom: 'auto',
    }),
    row2: props => ({
        marginTop: 'auto',
    }),
    content: props => ({
        width: '100%',
        flexGrow: 100,
        padding: '7.5vw',
    }),
    page_title: props => ({
        width: '100%',
    }),
    paragraph: props => ({
        color: themes[props.theme].page_link,
    }),
    kings_flexbox: props => ({
       display: 'flex',
       flexDirection: 'row',
       flexWrap: 'nowrap',
       alignItems: 'center',
       justifyContent: 'space-between',
    }),
    king_icon: props => ({
       width: '5vw',
       height: '5vw',
    }),
}), {index: 1});