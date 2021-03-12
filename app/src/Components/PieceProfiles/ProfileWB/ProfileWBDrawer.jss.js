import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {neighborWidth as drawerWidth} from
        "../../Reuseables/Drawers/PersistentDrawer.jss";

export const root = () => ({
    height: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 8,
});

export const useStyles = makeStyles((theme) => ({
    root_active: {
        ...root(),
    },
    root_inactive: {
        ...root(),
        pointerEvents: 'none',
    },
    wrapper: {
        width: drawerWidth,
    },
    paper: {
        position: "relative",
    },
    drawer: props => ({
        width: '100%',
        height: '100vh',
        backgroundColor: themes[props.theme].fill,
        border: `0.2em solid ${themes[props.theme].outline}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }),
}));