import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";
import {appBarHeight} from "../../Reuseables/Drawers/ResponsiveDrawer.jss";

export const useStyles = makeStyles({
    root: props => ({
        "& .MuiToolbar-root": {
            height: appBarHeight,
            minHeight: 'unset',
            backgroundColor: themes[props.theme].fill,
            borderBottom: `0.05rem solid ${themes[props.theme].outline_alt2}`,
        },
        "& .MuiAppBar-root": {
            borderTop: `0.05rem solid ${themes[props.theme].outline_alt2}`,
            backgroundColor: themes[props.theme].fill,
            top: appBarHeight,
            left: 0,
        },
        "& .MuiToolbar-gutters": {
            padding: '0px 4px',
        },
        "& .MuiSvgIcon-root": {
            color: themes[props.theme].text,
        },
        "& .MuiTypography-root": {
            color: themes[props.theme].text,
        },
    }),
}, {index: 1});