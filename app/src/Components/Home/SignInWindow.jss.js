import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../styles/themes/themes.jss";

export const useStyles = makeStyles((theme) => ({
    login_page: props => ({
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 16,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#d7bb99',
    }),
    content: props => ({
        marginTop: 'auto',
    }),
    appTitle: props => ({
        marginTop: '1rem',
        marginBottom: '1.5vh',
    }),
    appTitleSm: props => ({
        width: '85vw',
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
        fontSize: '1rem',
        color: '#000',
        width: '100%',
        borderRadius: 0,
        '&:hover':{
            color: '#fff'
        },
        "& .MuiSvgIcon-root": {
            width: '2rem',
            height: '2rem',
        },
    }),
    top_button: props => ({
        cursor: 'pointer',
        width: '7.5vw',
        height: '7.5vw',
        borderRadius: 0,
        position: 'absolute',
        right: 0,
        top: 0,
    }),
}), {index: 1});