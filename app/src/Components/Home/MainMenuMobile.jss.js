import {makeStyles} from "@material-ui/core/styles";
import {availWidth, viewHeight} from "../helpers/windowMeasurments";

export const useStyles = makeStyles({
    main_menu: props => ({
        width: '85vw',
        margin: '7.5vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: '1px dashed black',
    }),
    title_area: props => ({
        width: '85vw',
        border: '1px dashed red',
    }),
    title: props => ({
        width: '100%',
        maxHeight: '40vh',
        marginRight: 'auto',
    }),
    page_links: props => ({
        flexGrow: 3,
    }),
}, {index: 1});