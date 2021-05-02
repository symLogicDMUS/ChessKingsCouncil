import {makeStyles} from "@material-ui/core/styles";
import {miniVariantIconsColumnWidth} from "../../Reuseables/Drawers/MiniVariantDrawer.jss";

export const useStyles = makeStyles({
    icon_window: props => ({
        position: 'absolute',
        top: 100,
        fontSize: `calc(100vw - ${miniVariantIconsColumnWidth}px)`,
        left: '0.015em',
    }),
    img_windows: props => ({
       display: 'flex',
       flexDirection: 'row',
    }),
}, {index: 1});