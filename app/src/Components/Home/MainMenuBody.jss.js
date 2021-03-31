import {makeStyles} from "@material-ui/core/styles";

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
    site_title: props => ({
        width: '100%',
    }),
}), {index: 1});