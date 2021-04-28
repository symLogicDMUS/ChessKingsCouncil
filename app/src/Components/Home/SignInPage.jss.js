import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    login_page: props => ({
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }),
    appTitleSm: props => ({
        width:'85vw',
        marginTop: 'auto',
        marginBottom: '2vh',
    }),
    appTitleMd: (props) => ({
        width: '75vw',
        marginTop: 'auto',
        marginBottom: '2.5vh',
    }),
    login_in_buttons: props => ({
       marginBottom: 'auto',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: '',
        alignItems: 'center',
        justifyContent: 'center',
    }),
}), {index: 1});