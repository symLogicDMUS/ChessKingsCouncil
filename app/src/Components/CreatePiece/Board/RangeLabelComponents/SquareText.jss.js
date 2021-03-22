import { makeStyles } from "@material-ui/core/styles";
import {fontSize002375} from "../../../styles/fontSizes.jss";

export const useStyles = makeStyles({
    sqr_text: props => ({
        '@media screen and (max-width: 1040px)':{
            fontSize: '2.6vw',
        },
        /*laptop/desktop*/
        '@media screen and (min-width: 1040px)':{
            fontSize: '2.75vh',
        },
        textAlign: 'center',
        fontFamily: 'Roboto-Light, Roboto',
        color: '#ffffff',
    }),
    adjust: props => ({
        transform: 'translate(0.1rem, -2.25rem)',
        opacity: '0.15',
    }),
}, {index: 1});