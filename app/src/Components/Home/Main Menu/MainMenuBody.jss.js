import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";
import {viewWidth} from "../../helpers/windowMeasurments";

export const useStyles = makeStyles((theme) => ({
    main_menu_body: props => ({
        display: 'flex',
        flexDirection: 'column',
        '@media screen and (max-width: 600px)': {
            height: `calc(100vh - 56px)`,
        },
        '@media screen and (min-width: 600px)': {
            height: `calc(100vh - 64px)`,
        },
    }),
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    row1: props => ({
        marginBottom: 'auto',
    }),
    row2: props => ({
        marginTop: 'auto',
    }),
    content: props => ({
        width: '100%',
        flexGrow: 10,
        paddingTop: '7.5vw',
        '@media screen and (max-width: 768px)': {
            paddingLeft: '7.5vw',
            paddingRight: '7.5vw',
        },
        '@media screen and (min-width: 768px)': {
            paddingLeft: '11.25vw',
            paddingRight: '11.25vw',
        },
    }),
}), {index: 1});