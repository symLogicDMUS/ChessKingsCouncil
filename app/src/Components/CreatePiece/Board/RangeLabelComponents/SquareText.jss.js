import { makeStyles } from "@material-ui/core/styles";
import {themes} from "../../../styles/themes.jss";

export const useStyles = makeStyles({
    sqr_text: props => ({
        '@media screen and (max-width: 960px)':{
            fontSize: '2.25vw',
        },
        '@media screen and (min-width: 960px)':{
            fontSize: '1.2vw',
        },
        textAlign: 'center',
        fontFamily: 'Roboto-Light, Roboto',
        color: themes[props.theme].sqr_text,
    }),
    adjust: props => ({
        position: 'relative',
        top: '1.75vw',
    }),
}, {index: 1});