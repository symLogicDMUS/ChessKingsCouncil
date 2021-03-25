import {makeStyles} from "@material-ui/core/styles"
import {drawerWidth} from "../../../Reuseables/Drawers/PermanentDrawer.jss";

const spanButtonsSizethin = '17.5vw';

export const useStyles = makeStyles({
    span_arrow_buttons: props => ({
        /*media query for phones/tablets (generalized)*/
        '@media screen and (max-width: 960px)': {
            width: spanButtonsSizethin,
            height: spanButtonsSizethin,
        },
        /*wide*/
        '@media screen and (min-width: 960px)': {
            fontSize: (drawerWidth - 55)*0.5*0.333*0.333,
            width: '9em',
            height: '9em',
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }),
    row: props => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    }),
}, {index: 1});