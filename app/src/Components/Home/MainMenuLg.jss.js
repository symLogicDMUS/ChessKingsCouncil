import {makeStyles} from "@material-ui/core/styles";
import {availHeight} from "../helpers/windowMeasurments";

export const useStyles = makeStyles({
    main_menu: props => ({
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }),
    title: props => ({
        width: '80vw',
    }),
    page_links: props => ({
        width: '66.25%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        justifyContent: 'space-between',
    }),
    top_area: props => ({
        position: 'fixed',
        width: '100vw',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }),
    sign_out_button: props => ({
        fontSize: '1rem',
        marginRight: '0.25vw',
    }),
    icon: props => ({
        fontSize: '1rem',
    }),
}, {index: 1});