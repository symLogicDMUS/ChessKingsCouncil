import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../styles/themes/themes.jss";

export const useStyles = makeStyles((theme) => ({
    login_page: props => ({
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }),
    appTitle: props => ({
        marginTop: 'auto',
        marginBottom: '2.5vh',
    }),
    appTitleSm: props => ({
        width:'85vw',
    }),
    appTitleMd: (props) => ({
        width: '75vw',
    }),
    login_in_buttons: props => ({
       marginBottom: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }),
    close: props => ({
       color: themes[props.theme].text,
       backgroundColor: themes[props.theme].button_fill,
    }),
}), {index: 1});