import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    sqr_text: props => ({
        '@media screen and (max-width: 960px)':{
            fontSize: '2.6vw',
        },
        /*laptop/wide*/
        '@media screen and (min-width: 960px)':{
            fontSize: '2.75vh',
        },
        textAlign: 'center',
        fontFamily: 'Roboto-Light, Roboto',
        color: '#ffffff',
    }),
}, {index: 1});