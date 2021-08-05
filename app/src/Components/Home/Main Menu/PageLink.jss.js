import {themes} from "../../styles/themes/themes.jss";
import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    page_link: props => ({
        width: '7.8vw',
        height: '23.6vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '1rem',
        marginRight: '1rem',
        marginTop: '2rem',
    }),
    page_name: props => ({
        width: '100%',
    }),
    icon: props => ({
        width: '7.8vw',
        height: '7.8vw',
    }),
    normal_color: props => ({
        color: '#000000',
    }),
    hover_color: props => ({
        color: '#253b73',
    }),
}, {index: 1});