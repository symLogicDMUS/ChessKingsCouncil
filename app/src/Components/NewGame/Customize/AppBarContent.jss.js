import {sideBarWidth} from "../../Reuseables/Drawers/PermanentDrawer.jss";
import {fontSize0023, fontSize00224, fontSize002} from "../../styles/fontSizes.jss";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    app_bar_content: props => ({
        fontSize: fontSize0023,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    }),
    title: props => ({
        "@media (max-width:1919px) and (min-width:768px)": {
            fontSize: fontSize00224,
        },
        "@media (min-width:1920px)": {
            fontSize: fontSize002,
        },
    }),
}, {index: 1});