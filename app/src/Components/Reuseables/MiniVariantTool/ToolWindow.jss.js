import {makeStyles} from "@material-ui/core/styles";
import {miniVariantIconsColumnWidth} from "../Drawers/MiniVariantDrawer.jss";
import {themes} from "../../styles/themes/themes.jss";

export const useStyles = makeStyles({
    window: props => ({
        zIndex: 6,
        position: 'fixed',
        borderRadius: '0.25rem',
        backgroundColor: themes[props.theme].fill,
    }),
    border1: props => ({
        border: `0.065rem solid ${themes[props.theme].odd_row}`,
    }),
    border2: props => ({
        border: `0.065rem solid ${themes[props.theme].outline_alt2}`,
    }),
}, {index: 1});