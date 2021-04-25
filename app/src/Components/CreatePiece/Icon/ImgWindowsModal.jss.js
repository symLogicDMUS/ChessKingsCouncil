import {makeStyles} from "@material-ui/core/styles";
import {miniVariantIconsColumnWidth} from "../../Reuseables/Drawers/MiniVariantDrawer.jss";

export const useStyles = makeStyles({
    tool_window: props => ({
        position: 'absolute',
        top: `calc(50vh - (18.5vw + 24px))`,
        left: `calc(14.75vw - ${miniVariantIconsColumnWidth*0.5}px)`,
    }),
    img_windows: props => ({
       display: 'flex',
       flexDirection: 'row',
    }),
}, {index: 1});

