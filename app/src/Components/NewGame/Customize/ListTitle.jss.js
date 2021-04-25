import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../styles/themes/themes.jss";
import {drawerItemWidth} from "./Customize.jss";

export const useStyles = makeStyles({
    list_title: props => ({
        textAlign: 'center',
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
        borderTop: `0.05em solid ${themes[props.theme].outline}`,
        borderLeft: `0.05em solid ${themes[props.theme].outline}`,
        borderRight: `0.05em solid ${themes[props.theme].outline}`,
    }),
}, {index: 1});