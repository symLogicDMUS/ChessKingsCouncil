import { makeStyles } from "@material-ui/core/styles";
import { themes } from "../../styles/themes/themes.jss";
import { appBarHeight } from "../Drawers/ResponsiveDrawer.jss";

export const useStyles = makeStyles(
    {
        navBarAlt: (props) => ({
            marginTop: appBarHeight,
            backgroundColor: themes[props.theme].fill,
            borderTop: `0.065rem solid ${themes[props.theme].odd_row}`,
        }),
    },
    { index: 1 }
);
