import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";
import {appBarHeight} from "../../Reuseables/Drawers/ResponsiveDrawer.jss";
import {fade} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    action_buttons: (props) => ({
        zIndex: 1,
        position: "fixed",
        bottom: 45,
        width: "100vw",
        display: "flex",
        justifyContent: 'center',
    }),
    stepper: props => ({
        zIndex: 1,
        position: 'fixed',
        top: appBarHeight,
        width: '100vw',
        backgroundColor: '#fff00',
    }),
    button: props => ({
        marginRight: theme.spacing(3),
        color: themes[props.theme].outline_alt,
        borderColor: themes[props.theme].outline_alt,
        '&:hover':{
            backgroundColor: fade(themes[props.theme].outline_alt, 0.3),
            color: themes[props.theme].text,
        },
    }),
    instructions: {
        zIndex: 1,
        position: "fixed",
        bottom: 90,
        width: "100vw",
        textAlign: 'center',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));
