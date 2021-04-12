import {themes} from "../../styles/themes.jss";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
    menuIconWidth,
    menuIconPadding,
    menuIconMarginRight,
    toolBarPadding
} from "../../Reuseables/Drawers/ResponsiveDrawer.jss";
import {miniVariantIconsColumnWidth} from "../../Reuseables/Drawers/MiniVariantDrawer.jss";

export const useStyles = makeStyles({
    statusBarLg: (props) => ({
        zIndex: 7,
        width: "100%",
        fontSize: "1rem",
        textAlign: "center",
        color: themes[props.theme].text,
    }),
    statusBarSm: props => ({
        width: `calc(100% - ${
            miniVariantIconsColumnWidth +
            menuIconMarginRight +
            menuIconPadding +
            toolBarPadding
        }px)`,
        zIndex: 7,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
    }),
    statusMessage: props => ({
        flexGrow: 3,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
    }),
    statusTextSm: props => ({
        fontSize: "1rem",
        textAlign: "center",
        color: themes[props.theme].text,
    }),
}, {index: 1});