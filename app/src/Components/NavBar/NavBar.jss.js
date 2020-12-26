import {makeStyles} from "@material-ui/core/styles"
import {sideBarWidth} from "../Reuseables/SidBar.jss";

export const navBarWidth = sideBarWidth * 0.98;

export const useStyles = makeStyles((theme) => ({
    nav_bar: props => ({
        ...props.style,
        fontSize: props.fontSize,
        display: 'flex',
        flexDirection: props.flexDirection,
        flexWrap: 'nowrap',
    }),
}));
