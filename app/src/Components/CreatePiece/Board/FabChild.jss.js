import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    fab: props => ({
        zIndex: 6,
        width: 40,
        height: 40,
        right: 20,
        top: 20,
        position: 'relative',
        marginTop: 'auto',
        marginRight: 'auto',
        backgroundColor: themes[props.theme].fill,
        color: themes[props.theme].text,
    }),
}, {index: 1});