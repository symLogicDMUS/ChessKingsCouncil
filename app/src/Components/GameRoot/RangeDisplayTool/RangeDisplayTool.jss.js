import makeStyles from "@material-ui/core/styles/makeStyles";
import {drawerWidth} from "../../Reuseables/PermanentDrawer.jss";
import {themes} from "../../styles/themes.jss";


export const useStyles = makeStyles({
    range_display_rool: props => ({
       fontSize: props.fontSize,
       width: {drawerWidth},
       height: '8em',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    }),
    title: props => ({
        fontSize: props.fontSize*0.75,
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].text,
        height: '1.2em',
        lineHeight: '0.8em',
    }),
});
