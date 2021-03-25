import {themes} from "../styles/themes.jss";
import {makeStyles} from "@material-ui/core/styles";
import {fontSize001725, fontSize0018, fontSize002} from "../styles/fontSizes.jss";
import {viewWidth} from "../helpers/windowMeasurments";

export const icon = () => ({
    fontSize: 'inherit',
    height: '1.5em',
});

export const useStyles = makeStyles({
    play_button: props => ({
        /*phones/tablets (generalized)*/
        '@media screen and (max-width: 960px)':{
            width: '40vw',
        },
        /*laptop/wide*/
        '@media screen and (min-width: 960px)': {
            width: '17.5vw',
        },
        backgroundColor: themes[props.theme].fill,
        transform: 'translate(0, -3.75vh)',
    }),
    icon: props => ({
        fontSize: 'inherit',
        height: '1.5em',
    }),
}, {index: 1});