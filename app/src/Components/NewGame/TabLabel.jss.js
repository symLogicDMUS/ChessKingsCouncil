import { makeStyles } from "@material-ui/core/styles";
import {maxTabWidth} from "./TabBar.jss";

export const useStyles = makeStyles({
    tab_label: props => ({
        display: 'inline-flex',
        alignItems: 'center',
    }),
    tab_added: props => ({
        maxWidth: `calc(${maxTabWidth} * 0.5)`,
        overflowX: 'hidden',
        textOverflow: 'ellipsis',
    }),
}, {index: 1});