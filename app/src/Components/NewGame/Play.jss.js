import {themes} from "../styles/themes.jss";
import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    play_button: props => ({
        "@media screen and (max-width: 640px)":{
            width: '45vw',
        },
        '@media screen and (min-width: 640px) and (max-width: 912px)': {
            width: '30vw',
        },
        '@media screen and (min-width: 912px) and (max-width: 960px)': {
            width: '22.5vw',
        },
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