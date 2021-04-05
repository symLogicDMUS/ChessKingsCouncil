import {makeStyles} from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";
import {miniVariantIconsColumnWidth} from "../Drawers/MiniVariantDrawer.jss";
import {menuIconWidth, navDrawerSmWidth} from "../Drawers/ResponsiveDrawer.jss";

export const useStyles = makeStyles({
    content: props => ({
        flexGrow: 1,
    }),
    title: props => ({
        fontSize: '1rem',
        letterSpacing: '0.0075em',
        color: themes[props.theme].text,
        fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
        // '@media screen and (min-width: 960px)': {
        //     marginLeft: 12,
        // },
    }),
}, {index: 1});