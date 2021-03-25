import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../styles/themes.jss";

export const useStyles = makeStyles({
    list_item: props => ({
        color: themes[props.theme].text,
        fontFamily: 'Roboto-Light, Roboto',
        cursor: 'pointer',
        '&:hover':{
            color: themes[props.theme].sqr_hover,
        },
        '@media screen and (max-width: 960px)': {

        },
        '@media screen and (min-width: 960px)': {

        },
    }),
}, {index: 1});