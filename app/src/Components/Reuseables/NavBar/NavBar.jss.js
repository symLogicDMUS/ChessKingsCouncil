import {makeStyles} from "@material-ui/core/styles"
import {sideBarWidth} from "../Drawers/PermanentDrawer.jss";

export const navBarWidth = sideBarWidth * 0.98;

export const useStyles = makeStyles((theme) => ({
    nav_bar: props => ({
        display: 'flex',
    }),
    row_direction: props => ({
        width: "100vw",
        flexDirection: 'row',
        flexWrap: 'nowrap',
    }),
    column_direction: props => ({
        width: '100%',
        flexDirection: 'column',
    }),
    nav_drawer: props => ({
        width: "100%",
        flexDirection: 'column',
    }),
}), {index: 1});