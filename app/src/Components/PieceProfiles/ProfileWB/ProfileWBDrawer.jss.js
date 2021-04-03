import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {neighborWidth as drawerWidth} from "../../Reuseables/Drawers/PersistentDrawer.jss";

export const useStyles = makeStyles((theme) => ({
    root: props => ({
        height: '100%',
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 8,
    }),
    root_inactive: {
        pointerEvents: 'none',
    },
    wrapper: {
        width: drawerWidth,
    },
    paper: {
        position: "relative",
    },
    drawer: props => ({
        padding: '1vw',

        width: '100%',
        height: '100vh',
        backgroundColor: themes[props.theme].fill,
        border: `0.05rem solid ${themes[props.theme].outline}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }),
}));