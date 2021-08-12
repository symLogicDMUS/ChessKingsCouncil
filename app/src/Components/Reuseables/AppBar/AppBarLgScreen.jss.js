import { makeStyles } from "@material-ui/core/styles";
import { leftDrawerWidth } from "../Drawers/PermanentDrawerLeft.jss";
import { rightDrawerWidth } from "../Drawers/PermanentDrawerRight.jss";

const extraPadding = "16px";

export const useStyles = makeStyles(
    {
        appBarLg: (props) => ({
            "& .MuiToolbar-gutters": {
                paddingLeft: `calc(${leftDrawerWidth} + ${extraPadding})`,
                paddingRight: `calc(${rightDrawerWidth} + ${extraPadding})`,
            },
        }),
        appBarLgMin: (props) => ({
            "& .MuiToolbar-gutters": {
                paddingLeft: leftDrawerWidth,
                paddingRight: rightDrawerWidth,
            },
        }),
    },
    { index: 1 }
);
