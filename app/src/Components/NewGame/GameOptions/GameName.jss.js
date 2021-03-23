import { makeStyles } from "@material-ui/core/styles";
import {mui_input} from "../Input.jss";

export const useStyles = makeStyles({
    game_name: props => ({
        "@media screen and (max-width: 640px)":{
            width: '67.5vw',
        },
        '@media screen and (min-width: 640px) and (max-width: 912px)': {
            width: '50vw',
        },
        '@media screen and (min-width: 912px) and (max-width: 1040px)': {
            width: '40vw',
        },
        '@media screen and (min-width: 1040px)': {
            width: '30vw',
        },
        ...mui_input(props.theme),

    }),
}, {index: 1});