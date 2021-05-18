import { makeStyles } from "@material-ui/core/styles";
import {mui_input} from "../Input.jss";

export const useStyles = makeStyles({
    play_as: props => ({
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
            width: '25vw',
        },
        margin: 'auto',
        ...mui_input(props.theme),
    }),
    player_type: props => ({
        fontSize: '1.5rem',
    }),
}, {index: 1});