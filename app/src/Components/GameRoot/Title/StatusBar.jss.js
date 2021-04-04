import makeStyles from "@material-ui/core/styles/makeStyles";
import {themes} from "../../styles/themes.jss";
import {miniVariantIconsColumnWidth} from "../../Reuseables/Drawers/MiniVariantDrawer.jss";

export const useStyles = makeStyles({
    statusBar: props => ({
        zIndex: 7,
        fontSize: '1rem',
        textAlign: 'center',
        color: themes[props.theme].text,
    }),
    statusBarSm: props => ({
        width: `calc(100% - ${miniVariantIconsColumnWidth}px)`,
        paddingRight: 60,
    }),
    statusBarLg: props => ({
        width: `calc(100% - ${props.toolDrawerWidth}px)`,
    }),
}, {index: 1})