import { makeStyles } from "@material-ui/core/styles";
import {mui_input} from "../Input.jss";

export const useStyles = makeStyles({
    game_name: props => ({
        "@media screen and (max-width: 600px)":{
            width: '82.5vw',
        },
        '@media screen and (min-width: 600px) and (max-width: 912px)': {
            width: '60vw',
        },
        '@media screen and (min-width: 912px) and (max-width: 960px)': {
            width: '40vw',
        },
        '@media screen and (min-width: 960px)': {
            width: '35vw',
        },
        margin: 'auto',
        ...mui_input(props.theme),
    }),
}, {index: 1});