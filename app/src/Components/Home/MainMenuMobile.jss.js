import {makeStyles} from "@material-ui/core/styles";
import {availWidth} from "../helpers/windowMeasurments";

export const useStyles = makeStyles({
    main_menu: props => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: availWidth() * 0.6,
        height: '85vh',
        marginTop: '7.5vh',
        marginLeft: 'auto',
        marginRight: 'auto',
    }),
    title: props => ({
        width: '100%'
    }),
    page_links: props => ({
        flexGrow: 3,
    }),
});